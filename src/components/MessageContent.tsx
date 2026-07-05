const URL_REGEX = /(https?:\/\/[^\s<>"']+)/g;

const TRAILING_PUNCTUATION = /[.,;:!?)]+$/;

function isUrl(part: string) {
  return /^https?:\/\//.test(part);
}

function cleanUrl(raw: string): { href: string; trailing: string } {
  const href = raw.replace(TRAILING_PUNCTUATION, "");
  const trailing = raw.slice(href.length);
  return { href, trailing };
}

export function MessageContent({ text }: { text: string }) {
  const parts = text.split(URL_REGEX);

  return (
    <p className="text-sm leading-relaxed whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (!isUrl(part)) {
          return <span key={i}>{part}</span>;
        }

        const { href, trailing } = cleanUrl(part);

        return (
          <span key={i}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all underline underline-offset-2"
            >
              {href}
            </a>
            {trailing}
          </span>
        );
      })}
    </p>
  );
}
