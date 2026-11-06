import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/landingPage/Nav";
import Footer from "@/components/landingPage/Footer";
import { organizationNode, websiteNode } from "@/lib/organization";
import { SITE_URL } from "@/lib/site-contact"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Self-referencing canonical for routes that do not set their own.
  // With trailingSlash: false, Next resolves this to the non-slash URL.
  // Pages that set alternates.canonical must pass the value through canonicalUrl().
  alternates: {
    canonical: "./",
  },
  title: "Clickmasters AI Automation for Business | Clickmasters",
  description:
    "Growing companies use Clickmasters AI automation to take repetitive work off the team without replacing the people who decide. Book a free audit.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "XPXXRYsg2bKfReQLyHZhOsB8dU1GpKj2JGnGyNwf0xM", // ✅ Updated verification code
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ Google Site Verification - Updated */}
        <meta 
          name="google-site-verification" 
          content="XPXXRYsg2bKfReQLyHZhOsB8dU1GpKj2JGnGyNwf0xM" 
        />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5KDWQXP7');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationNode(), websiteNode()],
            }),
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KDWQXP7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Nav />
        <main className="flex-1 pt-16">
          {children}
        </main>
     
        <Footer />
      </body>
    </html>
  );
}