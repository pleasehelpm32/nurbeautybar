import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import About from "../assets/home/about.jpg";

const AboutSection = () => {
  return (
    <section className="bg-light py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cream rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-dark mb-24 text-center">
          ABOUT
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Image container */}
          <div className="lg:w-1/2 relative">
            <div className="w-80 h-[32rem] mx-auto relative overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl">
              <Image
                src={About}
                alt="Nurbeautybar founder"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 text-mid opacity-20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl font-semibold text-dark mb-8">
              Uncover your inner glow
            </h3>
            <p className="text-lg leading-relaxed text-olddark mb-10 max-w-2xl">
              Nurbeautybar's core foundation is placed on the belief that
              everyone has a light within them in their own unique way. Nur,
              meaning light in Arabic, is used to call to mind a sense of
              radiance. Someone with a contagious smile and resilient Spirit. At
              NUR beautybar, we seek to provide a personalized service to bring
              out everyone's inner Light ensuring our clients look and feel
              their best when leaving our doors.
            </p>
            <Button className="bg-mid hover:bg-dark text-light text-lg py-6 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
