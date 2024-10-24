// app/services/page.jsx
"use client";
import { useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceDisplay from "@/components/ServiceDisplay";

const services = [
  {
    id: 1,
    category: "extensions",
    title: "Classic Full Set",
    price: 130,
    duration: "2 hours 30 min",
    description:
      "The Classic Set is the most natural set of eyelash extensions. It is a great choice if you are looking to enhance your natural lashes, but not add too much volume. A single lash extension will be applied to your natural lashes for the classic set. This set mimics the “mascara effect” We aim for 100% COVERAGE.",
    images: [
      "/extensions/classic/classic1.png",
      "/extensions/classic/classic2.png",
      "/extensions/classic/classic3.png",
      "/extensions/classic/classics.png",
    ],
  },
  {
    id: 2,
    category: "extensions",
    title: "Hybrid Full Set",
    price: 140,
    duration: "2 hours 30 min",
    description:
      "The Hybrid Set is a mix of both a classic and a volume set. This set is an excellent choice if you are looking to get something fuller than a classic set but not as full and dramatic as a volume set. It is the best of both worlds! We aim for 100% COVERAGE.",
    images: [
      "/extensions/hybrid/hybrid1.png",
      "/extensions/hybrid/hybrid2.png",
      "/extensions/hybrid/hybrid3.png",
      "/extensions/hybrid/hybrid4.png",
      "/extensions/hybrid/hybrid5.png",
    ],
  },
  {
    id: 3,
    category: "extensions",
    title: "Volume Full Set",
    price: 150,
    duration: "3 hours",
    description:
      "The Volume Set is the most dramatic set of lash extensions. This look is a great choice if you are looking to get a fuller and bolder look. Hand-made fans are created during the appointment and placed on a single natural eyelash. We aim for 100% COVERAGE.",
    images: [
      "/extensions/volume/volume3.png",
      "/extensions/volume/volumelashes_2.png",
      "/extensions/volume/volumelashes_3.png",
      "/extensions/volume/volumeset3.png",
    ],
  },
  {
    id: 4,
    category: "extensions",
    title: "Mega Volume Full Set",
    price: 160,
    duration: "3 hours",
    description:
      "Mega volumes are a lash technique in which multiple 0.03 lash extensions (up to 20 lash fibers) are fanned out and applied to one natural lash. Mega Volume lashes give the eyes a full and dense look. We aim for 100% COVERAGE.",
    images: [
      "/extensions/volume/volume3.png",
      "/extensions/volume/volumelashes_2.png",
      "/extensions/volume/volumelashes_3.png",
      "/extensions/volume/volumeset3.png",
    ],
  },
  {
    id: 5,
    category: "extensions",
    title: "Brown Coloured Full Set",
    price: 155,
    duration: "3 hours",
    description:
      "A full light volume or regular volume set that is completely done with brown coloured lashes. (Specialty colour). We aim for 100% COVERAGE.",
    images: [
      "/extensions/volume/volume3.png",
      "/extensions/volume/volumelashes_2.png",
      "/extensions/volume/volumelashes_3.png",
      "/extensions/volume/volumeset3.png",
    ],
  },
  {
    id: 6,
    category: "extensions",
    title: "Wet Lash Full Set",
    price: 145,
    duration: "2 hours 30 min",
    description:
      "The Wet Set is a set that looks like you just came out of the shower or mimics a fuller mascara effect. The Set can be customized to be lighter or fuller depending on the clients preference. We aim for 100% COVERAGE.",
    images: [
      "/extensions/wet/wetlash1.png",
      "/extensions/wet/wetlash2.png",
      "/extensions/wet/wetlash3.png",
      "/extensions/wet/wetlash4.png",
      "/extensions/wet/wetlash5.png",
    ],
  },
  {
    id: 7,
    category: "extensions",
    title: "Eyeliner Full Set",
    price: 155,
    duration: "3 hours",
    description:
      "The eyeliner set is a set that mimics the look of a winged eyeliner. This set is a perfect choice for those who want to enhance and lift their eyes without creating droopiness. This set uses multiple 0.03 lash fibers to create a fluffy fan for a dark and bold lash line, accentuating anyones features.We aim for 100% coverage.",
    images: [
      "/extensions/eyeliner/eyelinerset1.png",
      "/extensions/eyeliner/eyelinerset3.png",
      "/extensions/eyeliner/eyelinerset4-1.png",
      "/extensions/eyeliner/eyelinerset4.png",
      "/extensions/eyeliner/eyelinerset5.png",
    ],
  },
  {
    id: 8,
    category: "extensions",
    title: "Striplash Full Set",
    price: 155,
    duration: "3 hours",
    description:
      "The Strip Lash Set combines spikes and open fans to create a look similar to a traditional striplash. Spikes in this set tend to be 2-3 mm longer than the base fans mimicking the texture and wispiness of an actual strip lash. We aim for 100% COVERAGE.",
    images: [
      "/extensions/striplash/striplash-set1.png",
      "/extensions/striplash/striplash-set2.png",
      "/extensions/striplash/striplash-set3.png",
      "/extensions/striplash/striplash-set4.png",
      "/extensions/striplash/striplash-set5.png",
    ],
  },
  {
    id: 9,
    category: "refills",
    title: "Classic Refill",
    price: 75,
    duration: "2 hours",
    description:
      "Keep your lashes looking luxurious with our expert refill service. For best results, we recommend a touch-up every 2-3 weeks, provided you have at least 40% of your extensions remaining.",
    images: [
      "/extensions/wet/wetlash1.png",
      "/extensions/wet/wetlash2.png",
      "/extensions/wet/wetlash3.png",
      "/extensions/wet/wetlash4.png",
      "/extensions/wet/wetlash5.png",
    ],
  },
  {
    id: 10,
    category: "refills",
    title: "Premium Refills",
    price: 90,
    duration: "2 hours",
    description:
      "Revitalize your lashes with our premium refill services, designed to complement your individual lash style. Choose from Hybrid, Volume, Wet Lash, Striplash, or Brown Volume extensions. For enduring beauty, we suggest a refill every 2-3 weeks, with a minimum of 40% of your extensions remaining.",
    images: [
      "/extensions/wet/wetlash1.png",
      "/extensions/wet/wetlash2.png",
      "/extensions/wet/wetlash3.png",
      "/extensions/wet/wetlash4.png",
      "/extensions/wet/wetlash5.png",
    ],
  },
  {
    id: 11,
    category: "lifts",
    title: "Lash Lift",
    price: 70,
    duration: "1 hour 30 min",
    description:
      "Elevate your eyes with our gentle lash lift, giving you a natural curl that lasts 6-8 weeks. It’s a simple way to uplift your look, damage-free.",
    images: ["/extensions/lashlift/lashlifts1_notint.png"],
  },
  {
    id: 12,
    category: "lifts",
    title: "Lash Lift with Tint",
    price: 75,
    duration: "1 hours 30 min",
    description:
      "Opt for a tint with your lash lift to enhance the natural beauty of your lashes with added depth and color. This dual treatment elevates and defines, giving you a striking look that lasts 6-8 weeks. Experience the beauty of definition and curl combined, all without the daily effort.",
    images: [
      "/extensions/wet/wetlash2.png",
      "/extensions/wet/wetlash3.png",
      "/extensions/wet/wetlash4.png",
      "/extensions/wet/wetlash5.png",
    ],
  },
  {
    id: 13,
    category: "lifts",
    title: "Lash Lift with Keratin Tint",
    price: 90,
    duration: "2 hours",
    description:
      "Indulge in the ultimate lash transformation with this choice. This premier treatment not only gives your lashes a beautifully natural lift and richer color but also pampers them with a gold-infused serum and keratin conditioning. Your lashes will emerge luxuriously soft and healthy. ",
    images: [
      "/extensions/lashlift/lashlifts2_keratin_tint.png",
      "/extensions/lashlift/lashlifts3_tint_keratin.png",
      "/extensions/lashlift/lashlifts4_keratin.png",
      "/extensions/lashlift/lashlifts5_keratin_tint.png",
      "/extensions/lashlift/lashlifts6_keratin.png",
    ],
  },
  {
    id: 14,
    category: "facials",
    title: "Zena Algae Peel",
    price: 190,
    duration: "1 hour",
    description:
      "Experience a skin revival with our Zen Algae Peel, suitable for all skin types and tones. This 100% natural peel targets acne, dark spots, and hyperpigmentation while promoting collagen production for renewed vitality.",
    images: ["/extensions/wet/wetlash1.png"],
  },
  {
    id: 15,
    category: "facials",
    title: "Arms/Belly/Half Leg",
    price: 210,
    duration: "1 hour",
    description:
      "Transform your skin with our targeted Algae Peel for arms, belly, and legs, ideal for any skin type. Rich in nutrients, this peel boosts cell regeneration and collagen synthesis, leading to a refreshed appearance with a beautifully even skin tone",
    images: ["/extensions/wet/wetlash1.png"],
  },
  {
    id: 16,
    category: "facials",
    title: "Back/ Butt",
    price: 350,
    duration: "1 hour",
    description:
      "Dive into a sea of vitamins A, E, and C, along with essential minerals that penetrate deep to purify and renew. This intensive peel works diligently to erase acne and fade unwanted pigmentation, while vital nutrients invigorate the skin’s natural healing, leaving it impeccably clear and smooth.",
    images: ["/extensions/wet/wetlash1.png"],
  },
  {
    id: 17,
    category: "facials",
    title: "Inner Thigh/ Bikini Line",
    price: 190,
    duration: "1 hour",
    description:
      "Revitalize and balance your inner thigh and bikini area with our Algae Peel, designed to be gentle yet effective for sensitive areas. Infused with a mix of vitamins and minerals, which work together to actively soothe and rejuvenate the skin, where it matters most.",
    images: ["/extensions/wet/wetlash1.png"],
  },
  {
    id: 18,
    category: "others",
    title: "Removals + Cleanse",
    price: 25,
    duration: "30 minutes",
    description:
      "Our gentle process ensures the health of your natural lashes, removing extensions and cleansing the area to leave your eyes feeling refreshed and unburdened. Perfect for a clean slate or preparation for a new look.",
    images: ["/extensions/wet/wetlash1.png"],
  },
  {
    id: 19,
    category: "others",
    title: "Mini Fill",
    price: 35,
    duration: "1 hour",
    description:
      "An ideal touch-up for any lash set within 3-8 days of application. Extend the beauty of your lashes without the full refill price, keeping your eyes dazzling day after day.",
    images: ["/extensions/wet/wetlash1.png"],
  },
];
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("extensions");
  const [activeService, setActiveService] = useState(services[0]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category.toLowerCase());
    const firstServiceInCategory = services.find(
      (service) => service.category === category.toLowerCase()
    );
    setActiveService(firstServiceInCategory);
  };

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <main className="bg-cream min-h-screen py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark text-center mb-8 md:mb-12">
          Our Services
        </h1>

        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="mt-8 md:mt-12 relative">
          {/* Content wrapper */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            {/* Service tabs - absolute positioned on desktop */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-64">
              <ServiceTabs
                services={filteredServices}
                activeService={activeService}
                onServiceChange={setActiveService}
              />
            </div>

            {/* Main content area with proper offset */}
            <div className="lg:ml-72 flex-1">
              {activeService && <ServiceDisplay service={activeService} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
