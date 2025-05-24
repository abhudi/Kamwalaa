"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    img: "/images/water.png",
    title: "Native Water Purifier",
  },
  {
    img: "/images/lock.png",
    title: "Native Smart Locks",
  },
  {
    img: "/images/paint.png",
    title: "Full Home Painting",
  },
  {
    img: "/images/laptop.png",
    title: "Laptop",
  },
  {
    img: "/images/spa.png",
    title: "Spa Ayurveda",
  },
];

export default function RepairService() {
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 3.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 12 },
      },
      "(min-width: 769px)": {
        slides: { perView: 3.5, spacing: 16 },
      },
    },
  });

  return (
    <div className="w-full px-4 py-10 bg-white relative">
      <h2 className="text-2xl font-bold mb-6">New and noteworthy</h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => sliderInstanceRef.current?.prev()}
          className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 bg-white p-2 shadow rounded-full"
        >
          <ChevronLeft />
        </button>

        <div ref={sliderRef} className="keen-slider">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white rounded-md shadow p-3 min-h-[230px]"
            >
              <Image
                height={32}
                width={20}
                src={item.img}
                alt={item.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-center text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => sliderInstanceRef.current?.next()}
          className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 bg-white p-2 shadow rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
