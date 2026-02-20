import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-boom-blue-dark">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        {/* Top row: Logo + Nav */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center pt-10 md:pt-[54px]">
          {/* Logo */}
          <Image
            src="/images/boomathon-namestyle-wo.svg"
            alt="Boomathon"
            width={272}
            height={64}
            className="w-[200px] sm:w-[240px] md:w-[272px] h-auto"
          />

          {/* Navigation — 2x2 grid on mobile, row on md+ */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-center md:flex md:flex-row md:items-center md:gap-6 lg:gap-[50px] font-[family-name:var(--font-jetbrains)] text-[14px] md:text-[16px] leading-[normal] tracking-[2.72px] uppercase">
            <a href="#how-it-works" className="text-boom-blue-airforce hover:text-white transition-colors">How it works</a>
            <a href="#the-evidence" className="text-boom-blue-airforce hover:text-white transition-colors">The evidence</a>
            <a href="#formats" className="text-boom-blue-airforce hover:text-white transition-colors">Formats</a>
            <a href="#book-a-call" className="text-boom-pink hover:text-boom-pink/80 transition-colors">BOOK A CALL</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 md:mt-10" />

        {/* Bottom row: Legal + Copyright */}
        <div className="py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="font-[family-name:var(--font-jetbrains)] text-[12px] md:text-[14px] leading-[36px] text-boom-blue-airforce text-center md:text-left">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-3" />
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          </p>
          <p className="font-[family-name:var(--font-jetbrains)] text-[12px] md:text-[14px] leading-[36px] text-white/50 text-center md:text-right">
            &copy; 2026 Jenson8 Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
