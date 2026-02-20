"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Benchmark() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Low-poly background */}
      <div className="absolute inset-0">
        <Image
          src="/images/low-poly-bg-2.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px] py-20 md:py-28">
        {/* Performance intelligence badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-[family-name:var(--font-jetbrains)] text-[14px] sm:text-[16px] tracking-[2.72px] text-boom-blue-pale uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-boom-blue-pale mr-2 align-middle" />
            Performance intelligence
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-oxanium)] font-bold text-[32px] md:text-[42px] lg:text-[58px] leading-[1.1] text-white max-w-[1000px] mb-10"
        >
          See How Your Teams Benchmark Against the Field
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] leading-[36px] tracking-[-0.52px] text-white">
              After every Boomathon, your organisation gets access to a private performance dashboard showing exactly how your teams ranked across all six capabilities – not just internally, but against every other organisation that has been through the pressure test.
            </p>

            <div className="font-[family-name:var(--font-inter)] text-[16px] md:text-[18px] lg:text-[20px] leading-[34px] text-white space-y-5">
              <p>
                When a CEO can see that their teams scored 75% on adaptability against a field average of 30%, that&apos;s not a learning report. That&apos;s a business intelligence tool.
              </p>
              <p>
                Your people know the scores are real. Your executives know the data means something. And your organisation knows exactly where to focus next.
              </p>
            </div>
          </motion.div>

          {/* Right: Score table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/images/your-score-table.svg"
              alt="Your Score Table showing team performance metrics"
              width={600}
              height={154}
              className="w-full max-w-[600px]"
            />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <p className="font-[family-name:var(--font-racing)] text-[28px] md:text-[34px] lg:text-[40px] text-white">
            Your ranking is waiting.<br />
            The only question is where you&apos;ll land
          </p>
        </motion.div>
      </div>
    </section>
  );
}
