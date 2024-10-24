import Image from "next/image";
import logo from "../assets/logo.svg";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/About";
import TestimonialSection from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <TestimonialSection />
    </>
  );
}
