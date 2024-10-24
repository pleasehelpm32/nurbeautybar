"use client";
import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      content:
        "Hey NUR! The lashes are holding up so well even all while I was in the water swimming almost all day for a week straight! The retention is acc incredible. I got so many compliments on how the set was so well suited to my eye shape and the amount of fullness is perfecttt! 🤍",
      author: "Sarah O.",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Hey NUR! The lashes are lasting so well!! I went to the beach and swam and they are still in tact!! TYSM",
      author: "Anna N.",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Hey NUR! Thank you so much!! I love how you did them. They are super fluffy and straight and it didn't even take long. I legit fell asleep I was so comfy. Definitely getting hybrids next time! You did an amazing job.",
      author: "Nadissa S.",
      rating: 5,
    },
    {
      id: 4,
      content:
        "Hey NUR! I just wanna say thank you again for always slaying my lashes, you always do such an amazing job and you're legit the only person I trust doing them. That's why I always travel all the way from Scarborough 🫶🏼 I also will be seeing you this week for a refill🙈❤️.",
      author: "Rosanna T.",
      rating: 5,
    },
    {
      id: 5,
      content:
        "Hey NUR! I LOVE my lashes and keep getting so many compliments!!! Thank you so much, they're literally perfect and you did exactly what I had pictured in my head!! You're literally the best <3.",
      author: "Priyaa P.",
      rating: 5,
    },
    {
      id: 6,
      content:
        "Heyy girl! I just wanted to say how in love I've been with these lashes. I've been meaning to do this for a while but work got me in a chokehold. Now I'm three weeks in and I still get compliments on my lashes! So incredible how long they last 🫶🏼 you already know I'll keep coming back and recommending everyone I know! You're killing it girl!❤️.",
      author: "Daniela V.",
      rating: 5,
    },
    {
      id: 7,
      content:
        "Thank you so much NUR for the lashes. They're looking absolutely gorgeousss!! Everyone liked them a lot 🤞🏻❣️.",
      author: "Stuti S.",
      rating: 5,
    },
    {
      id: 8,
      content:
        "Hey NUR! Today's the last day of my trip and they still look soo good! I love them, you did such a good job!!",
      author: "Esha S.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-mid/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-mid/5 rounded-full blur-3xl"></div>

      {/* Large decorative quote marks */}
      <div className="absolute top-40 left-20 text-mid/10">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-40 right-20 text-mid/10 rotate-180">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-dark text-center mb-16">
            CLIENT LOVE
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Large display of current testimonial */}
            <div className="hidden lg:block bg-light/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-mid fill-current mx-1"
                  />
                ))}
              </div>
              <blockquote className="text-2xl text-dark mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </blockquote>
              <p className="text-xl text-mid font-semibold text-right">
                — {testimonials[activeIndex].author}
              </p>
            </div>

            {/* Right side - Swiper cards */}
            <div className="max-w-sm mx-auto lg:ml-auto lg:mr-0">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="testimonials-swiper"
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <Card className="bg-light overflow-hidden h-[420px] rounded-[2rem] shadow-xl">
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex justify-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-6 h-6 text-mid fill-current mx-0.5"
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg text-dark text-center mb-6 leading-relaxed flex-grow overflow-y-auto">
                          "{testimonial.content}"
                        </blockquote>
                        <p className="text-center text-base text-mid font-semibold mt-auto">
                          — {testimonial.author}
                        </p>
                      </div>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          width: 340px;
          height: 420px;
          padding: 10px;
        }

        .swiper-slide {
          border-radius: 2rem;
        }

        @media (min-width: 768px) {
          .testimonials-swiper {
            width: 380px;
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
}
