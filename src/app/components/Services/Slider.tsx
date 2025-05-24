// components/RepairServiceSlider.tsx
"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Service {
  img?: string; // optional image
  title: string;
}

interface RepairServiceSliderProps {
  services: Service[];
}

export default function RepairServiceSlider({
  services,
}: RepairServiceSliderProps) {
  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 7, // go big or go home
      spacing: 16, // less spacing so more slides fit
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 8 }, // keep mobile comfy
      },
      "(min-width: 769px)": {
        slides: { perView: 7, spacing: 16 },
      },
    },
  });

  return (
    <div className="w-full px-4 py-6 bg-white relative ">
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => sliderInstanceRef.current?.prev()}
          className="absolute -left-2 top-1/2 z-2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col items-center justify-center bg-white rounded-md shadow p-4 min-h-[120px] my-3 cursor-pointer"
            >
              {service.img ? (
                <Image
                  src={service.img}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain mb-2"
                />
              ) : null}
              <p className="text-center text-sm font-medium text-gray-700">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => sliderInstanceRef.current?.next()}
          className="absolute -right-2 top-1/2 z-2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
