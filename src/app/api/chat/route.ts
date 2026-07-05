import OpenAI from "openai";
import { getSystemPrompt } from "@/lib/system-prompts";
import { buildYouTubeContext } from "@/lib/youtube-context";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "persona";
  content: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "OpenAI API key is not configured." }, { status: 500 });
    }

    const body = (await request.json()) as {
      personaId?: string;
      messages?: ChatMessage[];
    };

    const { personaId, messages } = body;

    if (!personaId || !messages?.length) {
      return Response.json({ error: "personaId and messages are required." }, { status: 400 });
    }

    const systemPrompt = getSystemPrompt(personaId);
    if (!systemPrompt) {
      return Response.json({ error: "Unknown persona." }, { status: 400 });
    }

    const latestUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

    const youtubeContext = buildYouTubeContext(personaId, latestUserMessage);
    const fullSystemPrompt = systemPrompt + youtubeContext;

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: fullSystemPrompt },
        ...messages.map((msg) => ({
          role: msg.role === "user" ? ("user" as const) : ("assistant" as const),
          content: msg.content,
        })),
      ],
      temperature: 0.85,
      max_tokens: 280,
    });

    const content = completion.choices[0]?.message?.content?.trim();

    if (!content) {
      return Response.json({ error: "No response from the model." }, { status: 502 });
    }

    return Response.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ error: "Failed to generate a response." }, { status: 500 });
  }
}
