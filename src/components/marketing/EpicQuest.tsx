"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function EpicQuest() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intel" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1512px] px-8 lg:px-[146px]">
        {/* Boomathon namestyle with hexagon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/images/boomathon-namestyle.svg"
            alt="Boomathon"
            width={557}
            height={132}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-racing)] text-[40px] text-boom-black mb-8"
        >
          Ignite Your Team&apos;s Epic Quest!
        </motion.h2>

        {/* Two-column: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="font-[family-name:var(--font-inter)] text-[20px] leading-[34px] text-black">
              Imagine harnessing the raw thrill of scaling sheer cliffs, riding
              monstrous waves, or pushing through gruelling marathons – but
              channeled into forging unbreakable teams that conquer corporate
              summits! Boomathon isn&apos;t just a game; it&apos;s your
              adrenaline-fuelled launchpad to elite teamship, where executives
              transform into trailblazing adventurers.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[20px] leading-[34px] text-black">
              Dive into high-stakes virtual realms that test your mettle, build
              unbreakable bonds, and deliver real-world enterprise wins. Ready to
              rally your squad and redefine what&apos;s possible?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-[581/328] overflow-hidden">
              <Image
                src="/images/in-game-screenshot.png"
                alt="The Ultimate Arena of Tough Teamship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="font-[family-name:var(--font-jetbrains)] text-[16px] tracking-[2.72px] text-boom-blue-text text-center mt-3 uppercase">
              The Ultimate Arena of Tough Teamship
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
