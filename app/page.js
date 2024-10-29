import Image from "next/image";
import logo from "../assets/logo.svg";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/About";
import TestimonialSection from "@/components/Testimonials";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutSection />
      <TestimonialSection />
      <Instagram />
    </>
  );
}
