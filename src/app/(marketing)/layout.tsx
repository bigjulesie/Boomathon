import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { faqJsonLd } from "@/components/marketing/FAQ";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boomathon",
  url: siteUrl,
  logo: `${siteUrl}/images/boomathon-namestyle-wo.svg`,
  description:
    "Boomathon is an immersive team challenge that measures leadership, collaboration, and core skills through adventure-based scenarios.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "jena@jenson8.com",
    contactType: "sales",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Jenson8 Ltd",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-boom-black text-white min-h-screen">
      <script
        id="organization-schema"
        type="application/ld+json"
      >
        {JSON.stringify(jsonLd)}
      </script>
      <script
        id="faq-schema"
        type="application/ld+json"
      >
        {JSON.stringify(faqJsonLd)}
      </script>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
