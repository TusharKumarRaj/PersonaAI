import Image from "next/image";
import { COLOR_MAP, Persona } from "@/lib/personas";
import { TopicList } from "./TopicList";

interface PersonaCardProps {
  persona: Persona;
  onSelect: () => void;
}

function PersonaImage({ persona }: { persona: Persona }) {
  return (
    <div className="relative shrink-0">
      <div
        className={`relative h-36 w-36 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg sm:h-44 sm:w-44 ${persona.imageBg}`}
      >
        <Image
          src={persona.image}
          alt={persona.name}
          fill
          className="object-cover object-top"
          sizes="176px"
        />
      </div>
    </div>
  );
}

export function PersonaCard({ persona, onSelect }: PersonaCardProps) {
  const colors = COLOR_MAP[persona.color];
  const firstName = persona.name.split(" ")[0].toUpperCase();
  const isImageLeft = persona.imageSide === "left";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative w-full rounded-2xl border bg-white/90 p-5 text-left shadow-[0_4px_24px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors.border} ${colors.ring}`}
    >
      <div
        className={`flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between ${
          isImageLeft ? "" : "sm:flex-row-reverse"
        }`}
      >
        <PersonaImage persona={persona} />

        <div className="flex flex-1 flex-col items-center text-center sm:px-4">
          <span
            className={`rounded-full px-3 py-0.5 text-[10px] font-bold tracking-wider text-white ${colors.badge}`}
          >
            {firstName}
          </span>
          <h2 className="mt-2 text-xl font-extrabold text-gray-900 sm:text-2xl">{persona.name}</h2>
          <p className={`mt-0.5 text-sm font-semibold ${colors.accent}`}>{persona.role}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">{persona.bio}</p>

          <span
            className={`mt-4 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition ${colors.btn}`}
          >
            Start chatting
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <TopicList
          topics={persona.topics}
          accentClass={colors.accent}
          align={isImageLeft ? "right" : "left"}
        />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 lg:hidden">
        {persona.topics.map((topic, i) => (
          <span key={topic.title} className="text-xs text-gray-600">
            <span className={`font-bold ${colors.accent}`}>{String(i + 1).padStart(2, "0")}</span>{" "}
            {topic.title}
          </span>
        ))}
      </div>
    </button>
  );
}
