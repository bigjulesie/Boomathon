"use client";

import { Hero } from "@/components/marketing/Hero";
import { EpicQuest } from "@/components/marketing/EpicQuest";
import { Stats } from "@/components/marketing/Stats";
import { CoreSkills } from "@/components/marketing/CoreSkills";
import { CTA } from "@/components/marketing/CTA";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <EpicQuest />
      {/* Teamship tagline banner */}
      <div className="bg-white py-10 text-center">
        <p className="font-[family-name:var(--font-jetbrains)] text-[30px] tracking-[5.1px] text-boom-blue-text uppercase">
          <span className="font-medium">TEAMSHIP </span>
          <span>&gt;&gt; The Skill of Being part of a team</span>
        </p>
      </div>
      <Stats />
      <CoreSkills />
      <CTA />
    </>
  );
}
