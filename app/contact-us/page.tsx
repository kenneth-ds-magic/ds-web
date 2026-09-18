import React from "react";
import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us | Engineering & Systems Architecture Consultation",
  description:
    "Connect directly with Digital Solutions Ltd systems architects for telecom gateway deployment, open-source GSMA eSIM solutions, and enterprise software engineering.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Digital Solutions | Telecom & Systems Architecture",
    description:
      "Schedule engineering consultation for carrier-grade telecom switches, high-volume SMS/MMS gateways, and bespoke software systems.",
    url: "/contact-us",
    images: [
      {
        url: "/images/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Digital Solutions Systems Engineering Team",
      },
    ],
  },
  twitter: {
    title: "Contact Digital Solutions | Telecom & Systems Architecture",
    description:
      "Schedule engineering consultation for carrier-grade telecom switches, high-volume SMS/MMS gateways, and bespoke software systems.",
    images: ["/images/contact-us.jpg"],
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: `${baseUrl}/contact-us`,
      },
    ],
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Digital Solutions Ltd",
    description: "Contact page for technical inquiries, carrier tenders, and systems architecture consultations.",
    url: `${baseUrl}/contact-us`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Digital Solutions Limited",
      telephone: "+256 752 707743",
      email: "info@dsmagic.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 3 Convent Close, Bugonga",
        postOfficeBoxNumber: "P.O. Box 716",
        addressLocality: "Entebbe",
        addressCountry: "UG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "0.0473",
        longitude: "32.4636",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactUsContent />
    </>
  );
}
