export function HeroSection() {
  return (
    <section className="mt-10 text-center sm:mt-14">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-[2.75rem]">
        Talk to{" "}
        <span className="relative inline-block text-brand-blue">
          Icons.
          <svg
            viewBox="0 0 120 12"
            fill="none"
            className="absolute -bottom-1 left-0 w-full"
            aria-hidden
          >
            <path
              d="M2 8 C 25 2, 45 10, 70 4 S 110 6, 118 3"
              stroke="#3b59ff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </span>{" "}
        Learn Like Never Before.
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm text-gray-500 sm:text-base">
        Chat with Hitesh Choudhary or Piyush Garg — pick a persona to start.
      </p>
    </section>
  );
}
