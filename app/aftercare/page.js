"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AftercarePage = () => {
  const aftercarePoints = [
    "Do not wet your lashes the first 24-48 hours after your reservation",
    "Do not use eyeliner, mascara or any makeup products that might affect your lashes. (This will cause build up and lead to poor retention)",
    "Wash your lashes daily. This helps them looking as fluffy as the first day you did them. (Clean lashes = No build up = Increased retention)",
    "Avoid sleeping on your side or face. This leads to lash loss on that specific side. (Use silk pillow or an eye mask to prevent abnormal fall out)",
    "Do not use eyelash curlers, perm or tints.",
    "Use water based products such as removal and makeup.",
    "Avoid hot showers and high heat.",
    "Do not pick or pull on your lashes. (This is one the main reasons for sparse, thin, gapped lashes)",
    "Get an infill every 2 weeks to keep your lashes full (We lose natural lashes everyday)",
    "Brush your lashes daily with an eyelash wand.",
  ];

  return (
    <div className="min-h-screen bg-creamy py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-dark mb-4">AFTERCARE</h1>
          <h2 className="text-3xl font-semibold text-dark">
            CARING FOR YOUR EYELASH EXTENSIONS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-light/80 backdrop-blur shadow-lg mb-12">
            <CardContent className="p-8">
              <p className="text-dark text-lg mb-6 leading-relaxed">
                Your lashes should always be a priority! They should be treated
                like your baby, because they are. Take care of what makes you
                feel and look good. Taking proper care of your lashes is
                important! Its a 50/50 partnership with you and your lash
                technician.
              </p>
              <p className="text-dark text-lg mb-6 leading-relaxed">
                Your lash technician's job is to make sure your lashes are
                properly isolated, proper placement and proper weight/length for
                the natural lash. Your job is to make sure you are following the
                aftercare and treating them right. This will create great
                retention and a perfect set.
              </p>
              <p className="text-dark text-lg mb-8 leading-relaxed">
                We will love you even more! Here are some aftercare tips to
                follow to maximize your lash experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-light/80 backdrop-blur shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {aftercarePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start space-x-4 text-dark"
                  >
                    <span className="text-mid font-bold mt-1">•</span>
                    <span className="text-lg leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AftercarePage;
