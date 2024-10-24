// components/ServiceCard.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageSlider from "./ImageSlider";

// Create a TruncatedDescription component
const TruncatedDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`text-dark/80 leading-relaxed md:text-base ${
          !isExpanded ? "line-clamp-3" : ""
        }`}
      >
        {text}
      </p>
      {text.length > 150 && ( // You can adjust this number based on your needs
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-mid hover:text-dark font-medium"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default function ServiceCard({ service }) {
  const { title, images, price, duration, description } = service;

  return (
    <Card className="bg-light overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <ImageSlider images={images} />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-dark mb-2">{title}</h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span className="text-2xl font-bold text-dark">${price}</span>
            <span className="text-base font-medium text-dark bg-creamy px-3 py-1 rounded-full">
              {duration}
            </span>
          </div>

          {/* Replace the regular paragraph with TruncatedDescription */}
          <div className="mb-6">
            <TruncatedDescription text={description} />
          </div>

          <Link href="/bookings" className="block">
            <Button
              className="
                w-full bg-mid hover:bg-dark text-light 
                text-lg py-4 px-8 rounded-full 
                transition-all duration-300 
                hover:scale-105
                font-medium
              "
            >
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
