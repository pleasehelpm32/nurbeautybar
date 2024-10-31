// app/contact/page.jsx
"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_f9bh8ag",
        "template_nuul43f",
        formRef.current,
        "kSBd0s4KvsOHSZn34"
      );
      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:6474490515";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:nurbeautybar@gmail.com";
  };

  return (
    <main className="bg-creamy min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-dark text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Contact Form Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-lg border-2 border-dark/10 p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-dark mb-8">
                Send us a Message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-dark text-lg font-medium">Name</label>
                  <Input
                    type="text"
                    name="from_name"
                    required
                    className="border-dark/20 focus:border-dark/50 text-lg p-6 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-dark text-lg font-medium">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="reply_to"
                    required
                    className="border-dark/20 focus:border-dark/50 text-lg p-6 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-dark text-lg font-medium">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    className="min-h-[200px] border-dark/20 focus:border-dark/50 text-lg p-6 rounded-xl"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-light hover:bg-light/90 text-dark text-xl py-7 rounded-xl border-2 border-dark/10 shadow-md"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center bg-green-50 p-4 rounded-xl"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-center bg-red-50 p-4 rounded-xl"
                  >
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="flex-1 pt-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-lg border-2 border-dark/10 p-8 md:p-10">
              <h2 className="text-2xl font-semibold text-dark mb-10">
                Contact Information
              </h2>

              <div className="space-y-8">
                <motion.button
                  onClick={handlePhoneClick}
                  className="w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4 p-6 bg-cream/50 rounded-2xl transition-all duration-300 hover:bg-cream/70 cursor-pointer">
                    <Phone className="w-6 h-6 text-dark mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">
                        Phone
                      </h3>
                      <p className="text-xl text-dark">(647)-449-0515</p>
                    </div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={handleEmailClick}
                  className="w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4 p-6 bg-cream/50 rounded-2xl transition-all duration-300 hover:bg-cream/70 cursor-pointer">
                    <Mail className="w-6 h-6 text-dark mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">
                        Email
                      </h3>
                      <p className="text-lg md:text-xl text-dark break-all">
                        nurbeautybar@gmail.com
                      </p>
                    </div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => router.push("/bookings")}
                  className="w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4 p-6 bg-cream/50 rounded-2xl transition-all duration-300 hover:bg-cream/70 cursor-pointer">
                    <Clock className="w-6 h-6 text-dark mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-dark mb-1">
                        Business Hours
                      </h3>
                      <p className="text-xl text-dark">By Appointment Only</p>
                      <p className="text-dark mt-1">
                        Check Booking Calendar for Availability
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full rounded-3xl overflow-hidden shadow-xl border-2 border-dark/10 h-[500px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.6878988669656!2d-79.75789862346053!3d43.70397097901867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d1888aca7e9%3A0x1d5926f4fd8fed3f!2sMississauga%2C%20ON%20L4T!5e0!3m2!1sen!2sca!4v1698118575135!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </main>
  );
}
