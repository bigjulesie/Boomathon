import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Boomathon",
  description: "Boomathon terms of use — conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-8 md:px-16 lg:px-[146px]">
        <div className="max-w-[900px]">
          <h1 className="font-[family-name:var(--font-oxanium)] font-bold text-[28px] md:text-[34px] lg:text-[42px] leading-[1.2] text-boom-black mb-10">
            Terms of Use
          </h1>

          <div className="font-[family-name:var(--font-inter)] text-[18px] leading-[30px] text-boom-black space-y-6">
            <p className="text-black/60">Last updated: 17 February 2026</p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              1. About These Terms
            </h2>
            <p>
              These terms govern your use of the Boomathon website (boomathon.netlify.app),
              operated by Jenson8 Ltd. By accessing this website, you agree to be bound by these
              terms.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              2. Use of Website
            </h2>
            <p>You may use this website for lawful purposes only. You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that breaches applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to our systems or networks</li>
              <li>
                Reproduce, duplicate, or redistribute website content without prior written
                permission
              </li>
            </ul>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, images, and software —
              is the property of Jenson8 Ltd or its licensors and is protected by intellectual
              property laws. The Boomathon name and logo are trademarks of Jenson8 Ltd.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              4. Disclaimer
            </h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind. Boomathon is
              currently in development; features and availability described on this website are
              subject to change.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Jenson8 Ltd shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this website.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              6. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="font-[family-name:var(--font-oxanium)] font-bold text-[24px] text-boom-black pt-4">
              7. Contact
            </h2>
            <p>
              For questions about these terms, contact us at:{" "}
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
    </section>
  );
}
