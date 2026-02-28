import { Hero } from "@/components/marketing/Hero";
import { EpicQuest } from "@/components/marketing/EpicQuest";
import { Stats } from "@/components/marketing/Stats";
import { CoreSkills } from "@/components/marketing/CoreSkills";
import { Benchmark } from "@/components/marketing/Benchmark";
import { CTA } from "@/components/marketing/CTA";
import { FAQ } from "@/components/marketing/FAQ";
import { faqJsonLd } from "@/lib/faq-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/#service`,
  name: "Boomathon Team Simulation",
  serviceType: "Corporate Team Development",
  description:
    "An immersive 2-to-24-hour team simulation that measures and develops leadership, collaboration, emotional intelligence, communication, conflict resolution, and adaptability across teams of 12 to 1,000 participants.",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Corporate teams and executives",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    availabilityStarts: "2026-03-01",
    url: `${siteUrl}/#book-a-call`,
    seller: {
      "@id": `${siteUrl}/#organization`,
    },
  },
};

export default function MarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <EpicQuest />
      {/* Teamship tagline banner */}
      <div className="bg-white py-8 md:py-10 text-center px-5 sm:px-8">
        <p className="font-[family-name:var(--font-jetbrains)] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px] tracking-[1px] sm:tracking-[2px] md:tracking-[3px] lg:tracking-[5.1px] text-boom-blue-text uppercase break-words">
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
