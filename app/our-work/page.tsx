import React from "react";
import type { Metadata } from "next";
import OurWorkContent from "./OurWorkContent";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Mbuni MMS, Zorilla SMS & Carrier Telecom",
  description:
    "Explore our high-throughput carrier gateways, GSMA eSIM remote provisioning (Njiwa), Asterisk VoIP codec engineering, and RTK GPS forestry telemetry (MSITU).",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work & Case Studies | Digital Solutions",
    description:
      "Carrier-grade telecom switches deployed across 12+ nations, open-source gateways (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital architecture.",
    url: "/our-work",
    images: [
      {
        url: "/images/mbuni.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Solutions Carrier Gateways & Portfolio",
      },
    ],
  },
  twitter: {
    title: "Our Work & Case Studies | Digital Solutions",
    description:
      "Carrier-grade telecom switches deployed across 12+ nations, open-source gateways (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital architecture.",
    images: ["/images/mbuni.jpg"],
  },
};

export default function OurWorkPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dsmagic.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Work",
        item: `${baseUrl}/our-work`,
      },
    ],
  };

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Digital Solutions Telecom Gateways & Software Systems",
    description: "Carrier-grade telecommunications and enterprise engineering projects.",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Mbuni MMS Gateway & MMSC Switch",
        applicationCategory: "TelecommunicationsApplication",
        operatingSystem: "Linux",
        description:
          "World-renowned, carrier-grade Open Source MMS Gateway and MMSC switch engineered in C/Linux for ultra-low latency routing and MM4/MM7 carrier interconnection.",
        url: "http://mbuni.org",
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "Zorilla SMS VAS & Broadcast Engine",
        applicationCategory: "TelecommunicationsApplication",
        operatingSystem: "Linux",
        description:
          "Industrial SMS VAS and broadcast automation platform interfacing directly with carrier SMSC switches for high-volume content subscriptions and billing.",
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Njiwa GSMA eSIM Remote Provisioning",
        applicationCategory: "TelecommunicationsApplication",
        operatingSystem: "Linux",
        description:
          "First Open Source implementation of GSMA SGP.02 Embedded SIM (eSIM) Remote Provisioning Manager for M2M devices.",
        url: "http://njiwa.io",
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Lark Router Commercial MMSC Core",
        applicationCategory: "TelecommunicationsApplication",
        operatingSystem: "Linux",
        description:
          "High-performance commercial carrier routing engine for Mbuni with SMPP protocol conformance and 99.999% telecommunications reliability.",
        url: "https://www.larkrouter.com/",
      },
      {
        "@type": "SoftwareApplication",
        position: 5,
        name: "MSITU Precision Tree Planting App",
        applicationCategory: "MobileApplication",
        operatingSystem: "Android",
        description:
          "Precision Android field application using RTK GPS centimeter-accuracy surveying and triangular mesh layouts for scalable reforestation.",
        url: "https://msitu.tech/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <OurWorkContent />
    </>
  );
}
