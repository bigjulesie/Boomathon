"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CoreSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="protocol" ref={ref} className="bg-boom-blue-dark pt-20 md:pt-28 pb-28 md:pb-40">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        {/* Hexagon illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/hex-illustration.svg"
            alt="6 Core Skills"
            width={890}
            height={605}
            className="w-full max-w-[890px]"
          />
        </motion.div>

        {/* Title + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[32px] md:text-[42px] lg:text-[58px] leading-[1]">
            <span className="text-white">6</span>
            <span className="text-boom-pink"> Core Skills</span>
          </h3>
          <p className="mt-4 font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] text-white text-center">
            Master the essentials that make teams unstoppable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
