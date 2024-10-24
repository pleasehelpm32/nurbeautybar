"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Extension from "../assets/home/lashextensions.jpg";
import Lifts from "../assets/home/lashlifts_cover.jpg";
import Refill from "../assets/home/lashrefill.jpg";
import Facial from "../assets/home/facials.jpg";

// Services data
const services = [
  {
    title: "Lash Extensions",
    description:
      "Want to spice up your LOOK? Eyelash extensions are THE look for a subtle uplift OR turning heads!",
    image: Extension,
  },
  {
    title: "Lash Extension Refills",
    description:
      "Ready to refresh your gaze? Book an eyelash refill and keep those lashes luscious. Stay stunning, effortlessly. P.S. All refills come with a complimentary bath 🛁",
    image: Refill,
  },
  {
    title: "Lash Lifts",
    description:
      "Seeking a natural enhancement for your lashes? Our lifts offer a healthy way to curl your lashes damage-free. Add some depth with a tint, regardless you'll be leaving with a fresh look.",
    image: Lifts,
  },
  {
    title: "Facials",
    description:
      "Ready to start your glass skin journey? Indulge in a fully customized facial that will address all of your skincare needs from hyperpigmentation, dryness and acne so you can glow all year long. Book an appointment now and embrace your inner glow",
    image: Facial,
  },
  {
    title: "Others",
    description:
      "A few extra services we provide, if you haven't been able to find what you're looking for.",
    image: Facial,
  },
];

// TruncatedDescription component (removed duplicate)
const TruncatedDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`mt-2 text-sm md:text-base text-mid ${
          !isExpanded ? "line-clamp-3" : ""
        }`}
      >
        {text}
      </p>
      {text.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-mid hover:text-dark"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const Services = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-dark mb-16">
          OUR SERVICES
        </h2>
        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-light h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative w-full h-72 md:h-96">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-t-lg"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-2xl font-semibold text-dark mb-4">
                        {service.title}
                      </CardTitle>
                      <TruncatedDescription text={service.description} />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
        <div className="text-center mt-8">
          <Link href="/services">
            <Button
              className="
                bg-mid hover:bg-dark text-light 
                text-xl md:text-2xl 
                py-6 px-16 md:px-20
                rounded-full 
                transition-all duration-300 
                hover:scale-105 
                font-medium
                tracking-wide
              "
            >
              EXPLORE OUR SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
