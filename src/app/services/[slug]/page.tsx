import RepairServiceSlider from "@/app/components/Services/Slider";
import RelatedServicesSlider from "@/app/components/Services/Slider";
import { notFound } from "next/navigation";

const serviceDetails: Record<string, { title: string; desc: string }> = {
  "home-cleaning": {
    title: "Home Cleaning Services",
    desc: "We offer deep home cleaning, kitchen and bathroom sanitation, and full house clean-ups.",
  },
  "repair-maintenance": {
    title: "Repair & Maintenance",
    desc: "Get expert repair services for ACs, refrigerators, plumbing, electrical, and more.",
  },
  "pest-control": {
    title: "Pest Control Services",
    desc: "Eliminate pests like termites, cockroaches, rodents, and mosquitoes effectively.",
  },
  "personal-services": {
    title: "Personal Services",
    desc: "Salon at home, massage, grooming and more delivered by certified professionals.",
  },
  "errand-services": {
    title: "Errand Services",
    desc: "Need groceries picked up? Pharmacy run? We got your back.",
  },
  "specialized-services": {
    title: "Specialized Services",
    desc: "Advanced and niche services tailored to unique home or personal needs.",
  },
  "tech-services": {
    title: "Technological Services",
    desc: "Smart home setup, gadget repair, and IT support all in one place.",
  },
  "manpower-services": {
    title: "Man-Power Services",
    desc: "Skilled workers for housekeeping, drivers, peons, and more available on demand.",
  },
};

const services = [
  {
    title: "Living Room Cleaning",
    description:
      "Dusting, vacuuming, sofa cleaning, and more to keep your living area spotless.",
  },
  {
    title: "Kitchen Cleaning",
    description:
      "Deep cleaning of stove, countertops, sink, and kitchen appliances.",
  },
  {
    title: "Bathroom Cleaning",
    description:
      "Sanitizing toilets, tiles, sinks, mirrors, and more for a hygienic space.",
  },
  {
    title: "Bedroom Cleaning",
    description: "Dust removal, bedsheet change, wardrobe wipe-down, and more.",
  },
  {
    title: "Balcony Cleaning",
    description:
      "Sweeping, mopping, and railing wiping to maintain a clean outdoor space.",
  },
  {
    title: "Full Home Deep Cleaning",
    description:
      "Comprehensive deep cleaning of your entire home by trained professionals.",
  },
];

const offers = [
  "20% off on first home cleaning service",
  "Free bathroom cleaning with full home package",
  "Book for 3 rooms, get 1 room free",
  "Get ₹500 cashback on repeat bookings",
];

const relatedServices = [
  { title: "AC Cleaning", img: "/images/water.png" },
  { title: "Carpet Shampooing", img: "/images/water.png" },
  { title: "Sofa Deep Cleaning", img: "/images/water.png" },
  { title: "Water Tank Cleaning", img: "/images/water.png" },
  { title: "Curtain Washing", img: "/images/water.png" },
  { title: "Window Glass Cleaning", img: "/images/water.png" },
];

// Reusable component for the service page content
function ServiceContent() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Home Services
        </h2>
        <div className="">
          <RepairServiceSlider services={relatedServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl p-4 space-y-4">
          {services.map((service, i) => (
            <div key={i} className="p-4 rounded-lg shadow flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-3 py-1 text-white rounded hover:bg-blue-600">
                  View More
                </button>
                <button className="px-3 py-1 text-white rounded hover:bg-green-600">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[300px] p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Offers</h2>
          <ul className="space-y-2">
            {offers.map((offer, i) => (
              <li key={i} className="text-sm text-gray-700">
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) return notFound();

  // Currently, the page content is the same for home-cleaning and repair-maintenance,
  // so you can extend this pattern to other slugs or create conditional content if needed.
  if (slug === "home-cleaning" || slug === "repair-maintenance") {
    return <ServiceContent />;
  }

  // fallback for other slugs, you can customize as you want
  return (
    <div className="p-6 bg-white mt-15">
      <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700">{service.desc}</p>
    </div>
  );
}
