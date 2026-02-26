import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boomathon.netlify.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boomathon",
  "@id": `${siteUrl}/#organization`,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/boomathon-namestyle-wo.svg`,
    width: 268,
    height: 64,
  },
  description:
    "Boomathon is an immersive team challenge that measures leadership, collaboration, and core skills through adventure-based scenarios.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "jena@jenson8.com",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Jenson8 Ltd",
    url: "https://www.jenson8.com",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
