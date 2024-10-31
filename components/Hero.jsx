"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Studio from "../assets/place_lashstudio.webp";
import { event } from "@next/third-parties/google";

const Hero = () => {
  // Function to handle button click and tracking
  const handleBookClick = () => {
    event("button_click", {
      // Use consistent naming for better tracking
      category: "conversion", // Changed from "booking" to track all conversion actions
      action: "book_now_click", // Added action
      location: "hero", // More specific than custom_parameter
      button_text: "Book Now", // Helpful for tracking different CTA texts
      page: "home", // Track which page the button is on
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={Studio}
        alt="Eyelash Extensions"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-light mb-6">
          Elevate Your Beauty
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-cream mb-8">
          Luxury lash extensions tailored to you
        </p>
        <Link href="/bookings" onClick={handleBookClick}>
          <Button className="bg-mid hover:bg-dark text-light text-xl sm:text-2xl py-8 px-10 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
