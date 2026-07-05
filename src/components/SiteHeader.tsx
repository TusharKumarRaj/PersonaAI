export function SiteHeader() {
  return (
    <header className="relative pt-4 sm:pt-5">
      <span className="absolute top-4 left-4 z-10 text-2xl font-extrabold tracking-tight text-gray-900 sm:top-5 sm:left-6 sm:text-3xl">
        PERSONA <span className="text-brand-blue">AI</span>
      </span>

      <div className="mx-auto flex max-w-5xl justify-end px-5 sm:px-8">
        <div className="flex items-center gap-1.5 rounded-full bg-sunny-light px-3.5 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-sunny" aria-hidden>
            <path
              d="M8 1.5l1.5 3.5 3.8.4-2.8 2.5.8 3.7L8 10.2 4.7 11.6l.8-3.7-2.8-2.5 3.8-.4L8 1.5z"
              fill="currentColor"
            />
          </svg>
          Learn. Build. Grow.
        </div>
      </div>
    </header>
  );
}
