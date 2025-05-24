// app/components/HomeServices.tsx
"use client";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Home Cleaning Services",
    img: "/images/salon-women.png",
    slug: "home-cleaning",
  },
  {
    title: "Repair & Maintenance",
    img: "/images/salon-men.png",
    slug: "repair-maintenance",
  },
  {
    title: "Pest Control Services",
    img: "/images/ac-repair.png",
    slug: "pest-control",
  },
  {
    title: "Personal Services",
    img: "/images/cleaning.png",
    slug: "personal-services",
  },
  {
    title: "Errand Services",
    img: "/images/electrician.png",
    slug: "errand-services",
  },
  {
    title: "Specialized Services",
    img: "/images/purifier.png",
    slug: "specialized-services",
  },
  {
    title: "Technological Services",
    img: "/images/purifier.png",
    slug: "tech-services",
  },
  {
    title: "Man-Power Services",
    img: "/images/purifier.png",
    slug: "manpower-services",
  },
];

export default function HomeServices() {
  const router = useRouter();

  return (
    <div className="relative w-full">
      {/* Top Background */}
      <div className="bg-red-500 h-[400px] w-full"></div>

      {/* Overlapping Card */}
      <div className="max-w-6xl mx-auto px-4 relative -mt-28 z-10">
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Home services at your doorstep
          </h2>

          <h3 className="text-lg font-semibold mb-6 text-center">
            What are you looking for?
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                onClick={() => router.push(`/services/${service.slug}`)}
                className="flex flex-col items-center bg-gray-100 rounded-xl p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-3" />
                <p className="text-sm font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
