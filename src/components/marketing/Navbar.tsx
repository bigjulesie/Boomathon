"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-boom-black">
      <div className="mx-auto max-w-[1512px] flex items-center justify-between px-8 h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/boomathon-namestyle-wo.svg"
            alt="Boomathon"
            width={268}
            height={64}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#mission"
            className="font-[family-name:var(--font-jetbrains)] text-[18px] tracking-[2.16px] text-boom-grey hover:text-white transition-colors uppercase"
          >
            Mission
          </Link>
          <Link
            href="#intel"
            className="font-[family-name:var(--font-jetbrains)] text-[18px] tracking-[2.16px] text-boom-grey hover:text-white transition-colors uppercase"
          >
            Intel
          </Link>
          <Link
            href="#protocol"
            className="font-[family-name:var(--font-jetbrains)] text-[18px] tracking-[2.16px] text-boom-grey hover:text-white transition-colors uppercase"
          >
            Protocol
          </Link>
          <Link
            href="#initialise"
            className="font-[family-name:var(--font-jetbrains)] font-bold text-[18px] tracking-[-0.18px] text-boom-pink border border-boom-pink rounded-[4px] px-5 py-3 hover:bg-boom-pink/10 transition-colors uppercase"
          >
            Initialise
          </Link>
        </div>
      </div>
    </nav>
  );
}
