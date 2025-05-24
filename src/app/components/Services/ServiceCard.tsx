"use client";

import { Button } from "@/components/ui/button";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "./Booking";

interface Review {
  name: string;
  date: string;
  comment: string;
}

interface Service {
  title: string;
  description: string;
  images: string[];
  reviews: Review[];
}

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 6,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 12 },
      },
      "(min-width: 769px)": {
        slides: { perView: 6, spacing: 16 },
      },
    },
  });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      {/* Title + Buttons */}
      <div className="flex justify-between items-center">
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
        </div>
        <div className="p-4 flex gap-3">
          <Button
            onClick={() => setShowBooking(true)}
            className="cursor-pointer"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 text-gray-700 text-sm leading-relaxed">
        {service.description}
      </div>

      <div
        className={` transition-all duration-500 ease-in-out overflow-hidden ${
          showDetails ? "max-h-[1000px]" : "max-h-0 p-0"
        }`}
      >
        <div className="relative px-4 py-4">
          {/* Navigation Buttons */}
          {service.images.length > 1 && (
            <>
              <button
                onClick={() => sliderInstanceRef.current?.prev()}
                className="absolute left-6 top-1/2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white p-2 shadow-lg rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => sliderInstanceRef.current?.next()}
                className="absolute right-6 top-1/2 z-10 -translate-y-1/2 bg-white/90 hover:bg-white p-2 shadow-lg rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Slider Container - Fixed width and overflow hidden */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="keen-slider !w-full"
              style={{ width: "100%" }}
            >
              {service.images.map((img, i) => (
                <div
                  className="keen-slider__slide !flex-shrink-0"
                  key={i}
                  style={{
                    minWidth: "280px",
                    maxWidth: "280px",
                    width: "280px",
                  }}
                >
                  <div className="h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${service.title}-${i}`}
                      width={280}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section - with smooth transition */}
        <div className="px-4 py-4">
          <h4 className="text-md font-semibold mb-2 text-gray-800">
            Customer Reviews
          </h4>
          <div className="space-y-2">
            {service.reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
                <p className="text-sm text-gray-700 mb-1">“{review.comment}”</p>
                <p className="text-xs text-gray-500">
                  — {review.name} ·{" "}
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="px-4 py-2  text-black rounded  transition cursor-pointer "
        >
          {showDetails ? "View Less" : "View More"}
        </button>
      </div>
      <BookingModal
        open={showBooking}
        onOpenChange={setShowBooking}
        serviceTitle={service.title}
      />
    </div>
  );
}
