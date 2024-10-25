"use client";
import Link from "next/link";
import { Instagram, Music } from "lucide-react"; // Using lucide icons for consistency

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark via-mid to-dark py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-3xl font-semibold text-cream mb-6">
              {" "}
              {/* Increased to 3xl */}
              Quick Links
            </h3>
            <ul className="space-y-4">
              {" "}
              {/* Increased the spacing */}
              <li>
                <Link
                  href="/services"
                  className="text-cream text-lg hover:text-dark transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="text-cream text-lg hover:text-dark transition-colors duration-300"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream text-lg hover:text-dark transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-3xl font-semibold text-cream mb-6">
              {" "}
              {/* Increased to 3xl */}
              Follow Us!
            </h3>
            <div className="flex gap-6">
              {" "}
              {/* Increased gap between icons */}
              <a
                href="https://www.instagram.com/nurbeautybar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-dark transition-colors duration-300"
              >
                <Instagram size={56} /> {/* Doubled icon size to 56 */}
              </a>
              <a
                href="https://www.tiktok.com/@nurbeautybar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-dark transition-colors duration-300"
              >
                <Music size={56} /> {/* Doubled icon size to 56 */}
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-cream text-lg md:text-right">
            {" "}
            {/* Increased text size to lg */}© {new Date().getFullYear()} Nur
            Beauty Bar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
