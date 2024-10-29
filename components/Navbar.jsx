"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.svg";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/bookings", label: "Bookings" },
  { href: "/aftercare", label: "Aftercare" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-creamy py-4 shadow-md">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="NurBeauty Bar Logo"
                width={220}
                height={73}
                className="h-20 w-auto"
                priority
              />
              <span className="sr-only">NurBeauty Bar</span>
            </Link>
          </div>

          {/* Desktop Navigation Links - Reduced horizontal spacing */}
          <div className="hidden md:flex items-center space-x-6">
            {" "}
            {/* Changed from space-x-16 to space-x-8 */}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark hover:text-mid py-3 rounded-md 
                  text-2xl tracking-wide font-medium
                  transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-6 top-8">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-dark hover:text-mid p-3"
                >
                  {isOpen ? (
                    <X className="h-12 w-12" />
                  ) : (
                    <Menu className="h-12 w-12" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-creamy"
              >
                {/* Mobile Navigation Links - Reduced vertical spacing */}
                <nav className="flex flex-col  mt-16">
                  {" "}
                  {/* Changed from space-y-8 to space-y-4 */}
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-dark hover:text-mid px-6 py-2 rounded-md 
                        text-2xl font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
