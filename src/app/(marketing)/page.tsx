"use client";

import { Hero } from "@/components/marketing/Hero";
import { EpicQuest } from "@/components/marketing/EpicQuest";
import { Stats } from "@/components/marketing/Stats";
import { CoreSkills } from "@/components/marketing/CoreSkills";
import { Benchmark } from "@/components/marketing/Benchmark";
import { CTA } from "@/components/marketing/CTA";
import { FAQ } from "@/components/marketing/FAQ";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <EpicQuest />
      {/* Teamship tagline banner */}
      <div className="bg-white py-8 md:py-10 text-center px-5 sm:px-8">
        <p className="font-[family-name:var(--font-jetbrains)] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px] tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5.1px] text-boom-blue-text uppercase">
          <span className="font-medium">TEAMSHIP </span>
          <span>&gt;&gt; The Skill of Being part of a team</span>
        </p>
      </div>
      <Stats />
      <CoreSkills />
      <Benchmark />
      <CTA />
      <FAQ />
    </>
  );
}
