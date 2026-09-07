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

export const metadata: Metadata = {
  title: "Digital Solutions | Pioneering Telecommunications, Web & Mobile Systems",
  description:
    "Promoting the use of computing as an aid to business productivity. Over 25 years of cutting-edge R&D, open-source telecom gateways (Mbuni, Zorilla, Njiwa), and bespoke enterprise digital architecture.",
  icons: {
    icon: "/images/log-no-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} dark scroll-smooth h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('dsl-theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
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
