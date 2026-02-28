import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Boomathon",
  description: "Boomathon privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        <div className="max-w-[900px]">
          <h1 className="font-[family-name:var(--font-oxanium)] font-bold text-[28px] md:text-[34px] lg:text-[42px] leading-[1.2] text-boom-black mb-10">
            Privacy Policy
          </h1>

          <div className="font-[family-name:var(--font-inter)] text-[18px] leading-[30px] text-boom-black space-y-6">
            <p className="text-black/60">Last updated: 17 February 2026</p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              1. Introduction
            </h2>
            <p>
              Boomathon is operated by Jenson8 Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting
              your privacy and handling your data transparently. This policy explains how we collect,
              use, and safeguard information when you visit boomathon.netlify.app.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              2. Information We Collect
            </h2>
            <p>
              At this stage, Boomathon is a marketing website and does not collect personal data
              through forms or user accounts. We may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Technical data:</strong> IP address, browser type, device information, and
                pages visited — collected automatically via hosting infrastructure (Netlify).
              </li>
              <li>
                <strong>Communication data:</strong> If you contact us via email at jena@jenson8.com,
                we will process the information you provide.
              </li>
            </ul>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              3. How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and maintain our website</li>
              <li>Respond to enquiries and communications</li>
              <li>Analyse website usage to improve our service</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We may share data with hosting providers (Netlify)
              and analytics services as necessary to operate the website.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              5. Cookies
            </h2>
            <p>
              This website uses essential cookies required for the website to function. We do not
              currently use tracking or advertising cookies.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              6. Your Rights
            </h2>
            <p>
              Under applicable data protection laws (including UK GDPR), you have the right to
              access, correct, delete, or restrict the processing of your personal data. Contact
              us at jena@jenson8.com to exercise these rights.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              7. Contact
            </h2>
            <p>
              For privacy-related enquiries, contact us at:{" "}
              <a
                href="mailto:jena@jenson8.com"
                className="text-boom-blue-airforce hover:text-boom-blue-accent transition-colors"
              >
                jena@jenson8.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
