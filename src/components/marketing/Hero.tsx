"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Low-poly geometric background */}
      <div className="absolute inset-0 top-[72px] md:top-[100px]">
        <Image
          src="/images/low-poly-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Climbers overlay */}
        <div className="absolute left-[46%] top-[11%] w-[34px] h-[90px]">
          <Image
            src="/images/climbers.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between mx-auto w-full max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px] pt-[120px] md:pt-[177px] pb-10">
        {/* Coming Soon badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-1.5 border border-boom-blue-pale rounded px-2.5 sm:px-3 py-1 font-[family-name:var(--font-jetbrains)] text-[12px] sm:text-[14px] tracking-[2.72px] text-boom-blue-pale uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-boom-blue-pale" />
            COMING SOON &nbsp;// &nbsp;MARCH 2026
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Headline + description + CTAs */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-[family-name:var(--font-oxanium)] font-bold text-[clamp(3rem,6vw,90px)] leading-[1.15] tracking-[-0.03em] uppercase"
            >
              <span className="text-white">DO YOU </span>
              <span className="text-boom-pink">KNOW HOW </span>
              <span className="text-boom-pink/70">YOUR</span>
              <span className="text-white"> TEAMS REALLY PERFORM?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 font-[family-name:var(--font-inter)] font-bold text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4] tracking-[-0.52px]"
            >
              <span className="text-white">The </span>
              <span className="text-boom-pink">Ultimate</span>
              <span className="text-white"> </span>
              <span className="text-boom-pink/70">Arena</span>
              <span className="text-white"> of Tough Teamship</span>
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-6 border-l-2 border-boom-blue-pale/40 pl-6 max-w-xl"
            >
              <p className="font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4] tracking-[-0.52px] text-boom-blue-pale">
                Boomathon stress-tests your teams in real time – exposing how
                they actually lead, collaborate and adapt when it matters. Real
                decisions, real data, real results.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#book-a-call"
                className="inline-flex items-center justify-center w-full sm:flex-1 lg:flex-none lg:w-[289px] h-[58px] sm:h-[70px] rounded-[12px] bg-boom-pink font-[family-name:var(--font-oxanium)] font-medium text-[18px] sm:text-[20px] lg:text-[24px] tracking-[0.24px] sm:tracking-[0.48px] text-black uppercase hover:bg-boom-pink/90 transition-colors whitespace-nowrap"
              >
                BOOK A CALL &nbsp;&gt;
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center w-full sm:flex-1 lg:flex-none lg:w-[289px] h-[58px] sm:h-[70px] rounded-[12px] border border-boom-pink bg-boom-pink/20 font-[family-name:var(--font-oxanium)] font-medium text-[18px] sm:text-[20px] lg:text-[24px] tracking-[0.24px] sm:tracking-[0.48px] text-white uppercase hover:bg-boom-pink/30 transition-colors whitespace-nowrap"
              >
                SEE HOW IT WORKS &nbsp;&gt;
              </a>
            </motion.div>
          </div>

          {/* Right: Telemetry Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/images/telemetry-c.svg"
              alt="Live Telemetry"
              width={600}
              height={475}
              className="w-full max-w-[600px]"
            />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex justify-end"
        >
          <p className="font-[family-name:var(--font-jetbrains)] text-[14px] sm:text-[16px] tracking-[2.72px] text-boom-blue-pale uppercase">
            <span className="font-medium">TEAMSHIP </span>
            <span>&gt;&gt; The Skill of Being part of a team</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
