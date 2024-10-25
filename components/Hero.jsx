import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Studio from "../assets/place_lashstudio.webp";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={Studio} // Replace with your actual image path
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
          Premium Eyelash Extensions for a Stunning Look
        </p>
        <Link href="/bookings">
          <Button className="bg-mid hover:bg-dark text-light text-xl sm:text-2xl py-8 px-10 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
