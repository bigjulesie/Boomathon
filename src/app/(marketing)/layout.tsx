import Script from "next/script";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boomathon",
  url: "https://boomathon.netlify.app",
  logo: "https://boomathon.netlify.app/images/boomathon-namestyle-wo.svg",
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
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
