"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }

    // If user hasn't consented, disable GA
    if (consent !== "true") {
      window["ga-disable-G-TZWJMQZBJ0"] = true;
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    // Enable GA
    window["ga-disable-G-TZWJMQZBJ0"] = false;
    // Reload page to initialize GA
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
    // Disable GA
    window["ga-disable-G-TZWJMQZBJ0"] = true;
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark text-light p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm sm:text-base">
          We use cookies to enhance your experience and analyze our site
          traffic. By continuing to use our site, you consent to our use of
          cookies.{" "}
          <a href="/policies" className="underline">
            Learn more
          </a>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="bg-transparent border-light text-light hover:bg-light hover:text-dark"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-cream text-dark hover:bg-cream/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
