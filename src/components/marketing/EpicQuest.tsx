"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function EpicQuest() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const y = prefersReducedMotion ? 0 : 20;
  const xL = prefersReducedMotion ? 0 : -30;
  const xR = prefersReducedMotion ? 0 : 30;

  return (
    <section id="how-it-works" ref={ref} className="bg-white pt-11 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        {/* Boomathon namestyle with hexagon */}
        <motion.div
          initial={{ opacity: 0, y }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/images/boomathon-namestyle.svg"
            alt="Boomathon"
            width={557}
            height={132}
            className="w-full max-w-[557px] h-auto"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-racing)] text-[28px] md:text-[34px] lg:text-[40px] text-boom-black mb-8"
        >
          Your teams think they can perform under pressure. Boomathon finds out if they&apos;re right.
        </motion.h2>

        {/* Two-column: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: xL }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-black">
              Leadership, collaboration, resilience, communication, problem-solving, adaptability – these are the six capabilities that determine whether your teams hold together or fall apart when the stakes are high. Most organisations assume they know. Boomathon gives them proof.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-black">
              Through a mentally demanding, multi-team simulation, your people face real decisions, genuine time pressure and complex handoffs across time zones. Basic instincts take over – and that&apos;s exactly what we measure.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] text-black">
              Every decision and every moment of friction is captured, giving you clear, evidence-based insight into how your teams actually perform – not how they perform on a questionnaire.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: xR }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-[548/341] overflow-hidden border-2 border-[#5a5a5a]">
              <Image
                src="/images/executive-team.png"
                alt="Executive team participants in a Boomathon session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[14px] sm:text-[16px] tracking-[2.72px] text-boom-blue-text text-center mt-3 uppercase">
              Expose &bull; Measure &bull; Know
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
