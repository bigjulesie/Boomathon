import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-boom-blue-dark">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px] flex flex-col">
        <div className="flex flex-col items-center gap-6 sm:gap-10 md:flex-row md:justify-between md:items-center pt-10 md:pt-[54px]">
          {/* Logo */}
          <Image
            src="/images/boomathon-namestyle-wo.svg"
            alt="Boomathon"
            width={272}
            height={64}
            className="w-[200px] sm:w-[240px] md:w-[272px] h-auto"
          />

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[50px] font-[family-name:var(--font-jetbrains)] text-[16px] leading-[normal] tracking-[2.72px] uppercase">
            <a href="#how-it-works" className="text-boom-blue-airforce hover:text-white transition-colors">How it works</a>
            <a href="#the-evidence" className="text-boom-blue-airforce hover:text-white transition-colors">The evidence</a>
            <a href="#formats" className="text-boom-blue-airforce hover:text-white transition-colors">Formats</a>
            <a href="#book-a-call" className="text-boom-pink hover:text-boom-pink/80 transition-colors">BOOK A CALL</a>
          </nav>
        </div>

        <div className="mt-10 md:mt-auto pb-10 md:pb-[69px] flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="font-[family-name:var(--font-jetbrains)] text-[14px] leading-[36px] text-boom-blue-airforce text-center md:text-left">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-3" />
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          </p>
          <p className="font-[family-name:var(--font-jetbrains)] text-[14px] leading-[36px] text-white/50 text-center md:text-right">
            &copy; 2026 Jenson8 Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
