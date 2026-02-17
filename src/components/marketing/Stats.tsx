"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const participantAlts = [
  "Teams collaborating in a Boomathon challenge",
  "Participants strategising during a Boomathon session",
  "Boomathon team members working together",
];

const earthAlts = [
  "Globe showing Europe and Africa",
  "Globe showing the Americas",
  "Globe showing Asia and Australia",
  "Globe showing the Pacific region",
  "Globe showing the Atlantic region",
  "Globe showing the Indian Ocean region",
];

const clockAlts = [
  "Clock showing 1:00",
  "Clock showing 2:00",
  "Clock showing 3:00",
  "Clock showing 4:00",
  "Clock showing 5:00",
  "Clock showing 6:00",
  "Clock showing 7:00",
  "Clock showing 8:00",
  "Clock showing 9:00",
  "Clock showing 10:00",
  "Clock showing 11:00",
  "Clock showing 12:00",
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="bg-boom-blue-dark pt-16 md:pt-[88px] pb-20 md:pb-28">
      <div className="mx-auto max-w-[1512px]">
        {/* Panoramic participant image panels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-12 md:mb-20"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`relative aspect-[504/266] overflow-hidden ${i === 1 ? "hidden md:block" : ""}`}
            >
              <Image
                src="/images/participants.jpg"
                alt={participantAlts[i]}
                fill
                className="object-cover"
                style={{ objectPosition: `${i * 33}% center` }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </motion.div>

        <div className="px-5 sm:px-8 md:px-16 lg:px-[146px]">
          {/* Participants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[32px] md:text-[42px] lg:text-[58px] leading-[1]">
              <span className="text-white">12-1,000 </span>
              <span className="text-boom-pink">Participants</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] text-white text-center">
              Scale your adventure from intimate missions to massive mobilisations.
            </p>
          </motion.div>

          {/* Globe images row - individual earth images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20 flex-wrap"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[137px] lg:h-[137px] rounded-full overflow-hidden"
              >
                <Image
                  src={`/images/earth-${i + 1}.png`}
                  alt={earthAlts[i]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 137px"
                />
              </div>
            ))}
          </motion.div>

          {/* Time Zones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mb-12 md:mb-20"
          >
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[32px] md:text-[42px] lg:text-[58px] leading-[1]">
              <span className="text-white">1-24</span>
              <span className="text-boom-pink"> Time Zones</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] text-white text-center">
              Global relay challenge that keeps the fire burning around the clock.
            </p>
          </motion.div>

          {/* Clock images row - individual clock images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center gap-3 md:gap-4 mb-12 md:mb-20 flex-wrap"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="relative w-[55px] h-[55px] sm:w-[64px] sm:h-[64px] md:w-[74px] md:h-[74px] rounded-full overflow-hidden"
              >
                <Image
                  src={`/images/clock-${i + 1}.png`}
                  alt={clockAlts[i]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 55px, (max-width: 768px) 64px, 74px"
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
            <h3 className="font-[family-name:var(--font-oxanium)] font-bold text-[32px] md:text-[42px] lg:text-[58px] leading-[1]">
              <span className="text-white">2-24</span>
              <span className="text-boom-pink"> Hours Duration</span>
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[18px] md:text-[22px] lg:text-[26px] text-white text-center">
              Sprint or marathon – tailor the intensity to your team&apos;s grit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
