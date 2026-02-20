"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#the-evidence", label: "The Evidence" },
  { href: "#formats", label: "Formats" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[100px] bg-boom-black">
      <div className="mx-auto max-w-[1512px] flex items-center justify-between px-5 sm:px-8 h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/boomathon-namestyle-wo.svg"
            alt="Boomathon"
            width={268}
            height={64}
            className="w-[180px] sm:w-[220px] md:w-[268px] h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-jetbrains)] text-[18px] tracking-[2.16px] text-boom-grey hover:text-white transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book-a-call"
            className="font-[family-name:var(--font-jetbrains)] font-bold text-[18px] tracking-[-0.18px] text-boom-pink border border-boom-pink rounded-[4px] px-5 py-3 hover:bg-boom-pink/10 transition-colors uppercase"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-boom-black border-t border-white/10 px-5 py-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-jetbrains)] text-[18px] tracking-[2.16px] text-boom-grey hover:text-white transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book-a-call"
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-jetbrains)] font-bold text-[18px] tracking-[-0.18px] text-boom-pink border border-boom-pink rounded-[4px] px-5 py-3 hover:bg-boom-pink/10 transition-colors uppercase text-center"
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
