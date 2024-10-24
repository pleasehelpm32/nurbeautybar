// components/services/CategoryTabs.jsx
"use client";
import { motion } from "framer-motion";

const categories = ["Extensions", "Refills", "Lifts", "Facials", "Others"];

export default function CategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap px-2">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 md:px-8 py-2 md:py-3 rounded-full text-base md:text-xl font-medium 
            transition-all duration-300 shadow-md hover:shadow-lg
            ${
              activeCategory === category.toLowerCase()
                ? "bg-dark text-light ring-2 ring-dark/20 ring-offset-2"
                : "bg-white text-dark hover:bg-creamy border-2 border-dark/10"
            }
          `}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={
            activeCategory === category.toLowerCase()
              ? { y: -4, scale: 1.05 }
              : { y: 0, scale: 1 }
          }
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
