"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="book-a-call" ref={ref} className="bg-white pt-24 md:pt-[132px] pb-20 md:pb-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[1125px]"
        >
          <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[28px] leading-[1.2] md:text-[34px] lg:text-[42px] lg:leading-[52px] text-boom-black mb-10">
            Ready to Find Out Where Your Teams Really Rank?
          </h2>

          <div className="font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4] tracking-[-0.52px] text-boom-black space-y-6">
            <p>
              Boomathon launches March 2026. We&apos;re booking exploratory calls
              with a select number of organisations that want hard evidence of how
              their teams perform under pressure – not assumptions.
            </p>

            <p>
              If that sounds like a conversation worth having, book a call with
              Jena or the team.
            </p>

            <p>
              <a
                href="mailto:jena@jenson8.com"
                className="text-boom-blue-airforce hover:text-boom-blue-accent transition-colors"
              >
                jena@jenson8.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
