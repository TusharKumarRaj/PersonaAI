export function FooterInfo() {
  const items = [
    { label: "Safe conversations", detail: "respectful & productive" },
    { label: "Real journeys", detail: "not textbook answers" },
    { label: "Daily growth", detail: "one chat at a time" },
  ];

  return (
    <footer className="mt-14 text-center">
      <p
        className="text-sm text-gray-500"
        style={{ fontFamily: "var(--font-permanent-marker), cursive" }}
      >
        why persona ai?
      </p>
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center">
            {i > 0 && (
              <span className="mx-4 hidden text-gray-300 sm:inline" aria-hidden>
                /
              </span>
            )}
            <div className="text-center sm:text-left">
              <span className="text-sm font-bold text-gray-900">{item.label}</span>
              <span className="mt-0.5 block text-xs text-gray-500 sm:inline sm:mt-0">
                <span className="hidden sm:inline"> — </span>
                {item.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
