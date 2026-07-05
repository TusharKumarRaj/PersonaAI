import Image from "next/image";
import backgroundImage from "../../assets/background.png";

export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}
