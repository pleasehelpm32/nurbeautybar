"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoadingSpinner = () => (
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mid" />
);

export default function BookingsPage() {
  const router = useRouter();

  useEffect(() => {
    // Add a small delay for the animation to be visible
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://booking.nurbeautybar.com/";
    }, 1500);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="min-h-screen bg-creamy flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-dark mb-2">
          Preparing Your Booking Experience
        </h1>
        <p className="text-lg text-mid mb-8">
          We're redirecting you to our booking system...
        </p>
        <LoadingSpinner />
        <p className="text-sm text-dark/60 mt-4">
          If you are not redirected automatically,{" "}
          <a
            href="https://nurbeautybar.com/bookings/"
            className="text-mid hover:text-dark underline transition-colors duration-200"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
