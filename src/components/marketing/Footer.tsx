import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-boom-blue-dark h-[282px]">
      <div className="mx-auto max-w-[1512px] px-8 lg:px-[146px] h-full flex flex-col justify-center">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Logo */}
          <Image
            src="/images/boomathon-namestyle-wo.svg"
            alt="Boomathon"
            width={272}
            height={64}
          />

          {/* Navigation */}
          <p className="font-[family-name:var(--font-jetbrains)] text-[24px] leading-[36px] text-boom-blue-airforce">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <span className="mx-4" />
            <a href="#intel" className="hover:text-white transition-colors">Intel</a>
            <span className="mx-4" />
            <a href="#protocol" className="hover:text-white transition-colors">Protocol</a>
            <span className="mx-4" />
            <a href="#initialise" className="hover:text-white transition-colors">Initialise</a>
          </p>
        </div>

        <div className="mt-12 text-right">
          <p className="font-[family-name:var(--font-jetbrains)] text-[14px] leading-[36px] text-white/50">
            &copy; 2026 Jenson8 Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
