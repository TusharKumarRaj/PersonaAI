import { PersonaTopic } from "@/lib/personas";

interface TopicListProps {
  topics: PersonaTopic[];
  accentClass: string;
  align?: "left" | "right";
}

export function TopicList({ topics, accentClass, align = "left" }: TopicListProps) {
  return (
    <ul
      className={`hidden w-40 flex-col gap-4 lg:flex ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      {topics.map((topic, i) => (
        <li key={topic.title} className="relative">
          <span
            className={`font-display text-2xl leading-none opacity-90 ${accentClass}`}
            style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-0.5 text-xs font-bold text-gray-900">{topic.title}</p>
          <p className="text-[11px] leading-snug text-gray-500">{topic.subtitle}</p>
        </li>
      ))}
    </ul>
  );
}
