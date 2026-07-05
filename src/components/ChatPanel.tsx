"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { COLOR_MAP, Message, Persona } from "@/lib/personas";
import { getInitialGreeting } from "@/lib/system-prompts";
import { MessageContent } from "./MessageContent";

interface ChatPanelProps {
  persona: Persona;
  onBack: () => void;
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createWelcomeMessage(personaId: string): Message {
  return {
    id: "welcome",
    role: "persona",
    content: getInitialGreeting(personaId),
    timestamp: new Date(),
  };
}

export function ChatPanel({ persona, onBack }: ChatPanelProps) {
  const colors = COLOR_MAP[persona.color];
  const firstName = persona.name.split(" ")[0];
  const [messages, setMessages] = useState<Message[]>([createWelcomeMessage(persona.id)]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personaId: persona.id,
          messages: updatedMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = (await response.json()) as { content?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "persona",
          content: data.content ?? "Sorry, kuch issue aa gaya. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "persona",
          content: "Sorry, abhi response nahi aa paaya. Thodi der baad try karo.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleReset() {
    setMessages([createWelcomeMessage(persona.id)]);
  }

  return (
    <div className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] ${colors.border}`}>
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            aria-label="Back to personas"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M12 16l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={`relative h-10 w-10 overflow-hidden rounded-xl ring-2 ${colors.ring}`}>
            <Image src={persona.image} alt={persona.name} fill className="object-cover" sizes="40px" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{persona.name}</p>
            <p className={`text-xs font-medium ${colors.accent}`}>{persona.role}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-full border border-gray-200 px-3.5 py-1.5 text-[10px] font-bold text-gray-500 uppercase transition hover:bg-gray-50"
        >
          Reset chat
        </button>
      </div>

      <div className="chat-scroll flex h-[420px] flex-col gap-3 overflow-y-auto bg-cream/50 px-5 py-5 sm:px-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.role === "user"
                  ? `${colors.btn} text-white`
                  : "border border-gray-100 bg-white text-gray-800"
              }`}
            >
              {msg.role === "persona" && (
                <span className={`mb-1 block text-[10px] font-bold uppercase ${colors.accent}`}>
                  {firstName}
                </span>
              )}
              <MessageContent text={msg.content} />
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <span className={`text-[10px] font-bold uppercase ${colors.accent}`}>{firstName}</span>
              <div className="mt-2 flex gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border-t border-gray-100 px-5 py-4 sm:px-6"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${persona.name}...`}
          className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className={`rounded-full px-5 py-2.5 text-sm font-bold text-white uppercase transition disabled:cursor-not-allowed disabled:opacity-40 ${colors.btn}`}
        >
          Send
        </button>
      </form>
    </div>
  );
}
