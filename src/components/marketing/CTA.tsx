"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="initialise" ref={ref} className="bg-white pt-24 md:pt-[132px] pb-20 md:pb-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-[1125px]"
        >
          <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[28px] leading-[1.2] md:text-[34px] lg:text-[42px] text-boom-black mb-10">
            Coming Soon: Launch Your Global Teamship Challenge
          </h2>

          <div className="font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] leading-[1.4] tracking-[-0.52px] text-boom-black space-y-6">
            <p>
              Boomathon is a mentally demanding relay experience where teams hand
              off across time zones to regenerate a dying planet. It&apos;s the
              ultimate test of leadership, collaboration, emotional intelligence,
              communication, conflict resolution, and adaptability – blending the
              camaraderie of mountain climbers with the strategy of extreme
              athletes.
            </p>

            <p>
              Book your mission now and join the global teamship challenge. Whether
              syncing in time or spanning the globe, unleash the adventurous spirit
              in your colleagues!
            </p>

            <div>
              <p>Book an exploratory call with Jena or the team.</p>
              <p>
                <a
                  href="mailto:jena@jenson8.com"
                  className="text-boom-blue-airforce hover:text-boom-blue-accent transition-colors"
                >
                  jena@jenson8.com
                </a>
              </p>
            </div>

            <p>
              Gear up, adventurers – Boomathon is your ticket to transforming your
              teams into titans. Let&apos;s conquer the unknown together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
