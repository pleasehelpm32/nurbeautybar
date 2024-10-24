// components/FilterButtons.jsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "Show All" },
  { id: "extensions", label: "Extensions" },
  { id: "refills", label: "Refills" },
  { id: "lifts", label: "Lifts" },
  { id: "facials", label: "Facials" },
  { id: "others", label: "Others" },
];

export default function FilterButtons({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {" "}
      {/* Increased gap and bottom margin */}
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onChange(category.id)}
          variant="ghost"
          className={`
            px-8 py-3 md:px-10 md:py-4  /* Increased padding */
            rounded-full 
            text-base md:text-lg lg:text-xl  /* Increased text size */
            font-medium
            transition-all duration-300
            ${
              activeCategory === category.id
                ? "bg-mid text-light hover:bg-dark"
                : "bg-creamy text-dark hover:bg-mid hover:text-light"
            }
          `}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
