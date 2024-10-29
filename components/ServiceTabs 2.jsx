// components/services/ServiceTabs.jsx
"use client";

import { serviceNameMapping } from "@/utils/serviceNames";

export default function ServiceTabs({
  services,
  activeService,
  onServiceChange,
}) {
  return (
    <>
      {/* Mobile horizontal scroll */}
      <div className="lg:hidden overflow-x-auto flex gap-2 pb-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceChange(service)}
            className={`
              px-4 py-2
              whitespace-nowrap
              transition-colors duration-200
              rounded-md
              ${
                activeService.id === service.id
                  ? "bg-dark text-light"
                  : "bg-white text-dark hover:bg-creamy"
              }
              border-2 border-dark/10
              font-medium text-sm md:text-base
              shadow-md
              flex-shrink-0
            `}
          >
            {serviceNameMapping[service.title] || service.title}
          </button>
        ))}
      </div>

      {/* Desktop vertical tabs */}
      <div className="hidden lg:flex lg:flex-col lg:h-full lg:pt-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceChange(service)}
            className={`
              w-full
              px-6 py-3
              text-left
              transition-colors duration-200
              ${
                activeService.id === service.id
                  ? "bg-dark text-light"
                  : "bg-white text-dark hover:bg-creamy"
              }
              border-2 border-dark/10
              font-medium text-lg
              shadow-md
              mb-3
              rounded-md
            `}
          >
            {serviceNameMapping[service.title] || service.title}
          </button>
        ))}
      </div>
    </>
  );
}
