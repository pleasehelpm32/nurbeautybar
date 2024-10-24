// components/ServiceGrid.jsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {services.map((service) => (
          <motion.div
            key={service.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
