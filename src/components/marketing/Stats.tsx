"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="bg-boom-blue-dark py-20 md:py-28">
      <div className="mx-auto max-w-[1512px]">
        {/* Panoramic participant image panels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-0 mb-20"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="relative aspect-[504/266] overflow-hidden"
            >
              <Image
                src="/images/participants.jpg"
                alt="Participants"
                fill
                className="object-cover"
                style={{ objectPosition: `${i * 33}% center` }}
                sizes="33vw"
              />
            </div>
          ))}
        </motion.div>

        <div className="px-8 lg:px-[146px]">
          {/* Participants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-20"
          >
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[58px] leading-[1]">
              <span className="text-white">12-1,000 </span>
              <span className="text-boom-pink">Participants</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[26px] text-white text-center">
              Scale your adventure from intimate missions to massive mobilisations.
            </p>
          </motion.div>

          {/* Globe images row - individual earth images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center gap-6 mb-20"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative w-[137px] h-[137px] rounded-full overflow-hidden"
              >
                <Image
                  src={`/images/earth-${i + 1}.png`}
                  alt="Global reach"
                  fill
                  className="object-cover"
                  sizes="137px"
                />
              </div>
            ))}
          </motion.div>

          {/* Time Zones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mb-20"
          >
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[58px] leading-[1]">
              <span className="text-white">1-24</span>
              <span className="text-boom-pink"> Time Zones</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[26px] text-white text-center">
              Global relay challenge that keeps the fire burning around the clock.
            </p>
          </motion.div>

          {/* Clock images row - individual clock images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center gap-3 md:gap-4 mb-20 flex-wrap"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="relative w-[74px] h-[74px] rounded-full overflow-hidden"
              >
                <Image
                  src={`/images/clock-${i + 1}.png`}
                  alt="Time zones"
                  fill
                  className="object-cover"
                  sizes="74px"
                />
              </div>
            ))}
          </motion.div>

          {/* Duration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[58px] leading-[1]">
              <span className="text-white">2-24</span>
              <span className="text-boom-pink"> Hours Duration</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[26px] text-white text-center">
              Sprint or marathon – tailor the intensity to your team&apos;s grit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
