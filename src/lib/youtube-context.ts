import { YouTubeResource, YOUTUBE_CONFIG } from "./youtube-resources";

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s.]/g, " ");
}

/** Prefer playlists and watch URLs over channel homepages. */
function urlPriority(url: string): number {
  if (url.includes("playlist?list=")) return 3;
  if (url.includes("watch?v=")) return 2;
  if (url.includes("/videos") || url.includes("/playlists")) return 1;
  return 0;
}

export function findYouTubeResources(
  personaId: string,
  userMessage: string,
  limit = 3
): YouTubeResource[] {
  const config = YOUTUBE_CONFIG[personaId];
  if (!config) return [];

  const query = normalize(userMessage);

  const scored = config.resources
    .map((resource) => {
      let keywordScore = 0;
      for (const keyword of resource.keywords) {
        const normalizedKeyword = normalize(keyword);
        if (query.includes(normalizedKeyword)) {
          keywordScore += normalizedKeyword.split(" ").length;
        }
      }
      return {
        resource,
        score: keywordScore > 0 ? keywordScore + urlPriority(resource.url) : 0,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Deduplicate by URL, keep highest score
  const seen = new Set<string>();
  const unique: YouTubeResource[] = [];
  for (const item of scored) {
    if (!seen.has(item.resource.url)) {
      seen.add(item.resource.url);
      unique.push(item.resource);
    }
    if (unique.length >= limit) break;
  }

  return unique;
}

export function buildYouTubeContext(personaId: string, userMessage: string): string {
  const config = YOUTUBE_CONFIG[personaId];
  if (!config) return "";

  const matches = findYouTubeResources(personaId, userMessage);
  const channelList = config.channels
    .map((c) => `- ${c.name}: ${c.url}`)
    .join("\n");

  const matchList =
    matches.length > 0
      ? matches.map((r) => `- "${r.title}" → ${r.url}`).join("\n")
      : "(No exact match — only share channel link if you have covered the topic on YouTube.)";

  return `
--------------------------------------------------
# YOUTUBE RESOURCES (for this user message)

Your channels:
${channelList}

Matched lectures/playlists for this question:
${matchList}

Rules:
- ALWAYS prefer a specific playlist or video URL from the list above over the channel homepage.
- If a playlist/video matches, share that exact link (e.g. "maine ispe detail mein padhaya hai — yeh dekho: <url>").
- Share at most ONE link per reply unless user asks for more.
- ONLY use URLs listed above. Never invent or guess video links.
- Channel homepage is a last resort only when no playlist matches.
- Do NOT put a period or comma immediately after the URL.
`;
}
