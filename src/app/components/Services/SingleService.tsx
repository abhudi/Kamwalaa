"use client";

import ServiceCard from "./ServiceCard";

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
interface SingleSliderProps {
  singleServices: Service[];
}

export default function SingleSlider({ singleServices }: SingleSliderProps) {
  return (
    <div className="w-full px-2 space-y-5">
      <h2 className="text-2xl font-semibold text-left mb-6 text-gray-800">
        Our Services
      </h2>

      {singleServices.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
}
