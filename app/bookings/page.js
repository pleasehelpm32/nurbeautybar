"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingsPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://nurbeautybar.com/bookings/";
  }, []);

  return <div>Redirecting to bookings...</div>;
}
