// app/layout.js
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/inter";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "swiper/css";
import "swiper/css/effect-cards";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Nur Beauty Bar",
  description: "Premium Lash Services in Mississauga",
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/icon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/icon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/icon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oran0e9smo");
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-TZWJMQZBJ0" />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
