import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dsmagic.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
    template: "%s | Digital Solutions",
  },
  description:
    "Promoting computing as an aid to business productivity. Over 25 years of cutting-edge R&D, open-source telecom gateways (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital architecture across Africa.",
  keywords: [
    "Digital Solutions Ltd",
    "Mbuni MMS Gateway",
    "Zorilla SMS Engine",
    "Njiwa Messaging Gateway",
    "Carrier MMSC Switch",
    "SMSC Gateway",
    "SMPP Protocol Gateway",
    "MM4 MM7 Interconnection",
    "Telecommunications Uganda",
    "Enterprise Software East Africa",
    "Carrier Grade Software Development",
    "Telecom Systems Engineering",
    "Kampala Software Company",
    "Uganda Software Company",
  ],
  authors: [{ name: "Digital Solutions Ltd", url: baseUrl }],
  creator: "Digital Solutions Ltd",
  publisher: "Digital Solutions Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Digital Solutions Ltd",
    title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
    description:
      "Carrier-grade telecommunications gateways, open-source infrastructure (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital systems.",
    images: [
      {
        url: "/images/products.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Solutions Telecommunications and Enterprise Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
    description:
      "Carrier-grade telecommunications gateways, open-source infrastructure (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital systems.",
    images: ["/images/products.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/log-no-bg.png",
    shortcut: "/images/log-no-bg.png",
    apple: "/images/log-no-bg.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} scroll-smooth h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  localStorage.removeItem('dsl-theme');
                  var saved = localStorage.getItem('dsl_theme_mode');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = (saved === 'dark' || saved === 'light') ? saved : (prefersDark ? 'dark' : 'light');
                  var root = document.documentElement;
                  if (theme === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.remove('dark');
                    root.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${baseUrl}/#organization`,
                  name: "Digital Solutions Ltd",
                  alternateName: ["DSL", "Digital Solutions"],
                  url: baseUrl,
                  logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/images/log-no-bg.png`,
                  },
                  description:
                    "Pioneering research and development house incorporated in Uganda in 1998, developing carrier-grade telecommunication gateways, open-source infrastructure (Mbuni, Zorilla, Njiwa), and enterprise systems.",
                  foundingDate: "1998",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Plot 140, Bukoto Street, Kamwokya",
                    postOfficeBoxNumber: "P.O. Box 71871",
                    addressLocality: "Kampala",
                    addressCountry: "UG",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+256-752-707743",
                      contactType: "customer service",
                      email: "info@dsmagic.com",
                      availableLanguage: ["English", "Swahili"],
                    },
                  ],
                  knowsAbout: [
                    "Telecommunications Engineering",
                    "SMS Gateway Development",
                    "MMSC & MMS Gateway (Mbuni)",
                    "SMPP & MM4/MM7 Protocols",
                    "Enterprise Cloud Software",
                    "Mobile Application Architecture",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${baseUrl}/#website`,
                  url: baseUrl,
                  name: "Digital Solutions Ltd",
                  description: "Pioneering Telecommunications, Web & Mobile Systems",
                  publisher: {
                    "@id": `${baseUrl}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-[#000000] text-zinc-900 dark:text-white antialiased selection:bg-[#ea1d05] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#121215",
                color: "#ffffff",
                border: "1px solid rgba(234, 29, 5, 0.4)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
