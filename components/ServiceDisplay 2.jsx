// components/services/ServiceDisplay.jsx
import ImageSlider from "./ImageSlider";
export default function ServiceDisplay({ service }) {
  const { title, images, price, duration, description } = service;

  return (
    <div className="bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-lg border-2 border-dark/10">
      <div className="p-4 md:p-8">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden bg-creamy">
          <ImageSlider images={images} />
        </div>

        <div className="pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              {title}
            </h2>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xl md:text-2xl font-bold text-dark">
                ${price}
              </span>
              <span className="text-base md:text-lg font-medium bg-dark text-light px-3 md:px-4 py-1 rounded-full">
                {duration}
              </span>
            </div>
          </div>
          <p className="text-dark/80 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
