import SingleSlider from "@/app/components/Services/SingleService";
import RepairServiceSlider from "@/app/components/Services/Slider";
import { notFound } from "next/navigation";

// Updated type to match Next.js App Router requirements
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
      "Dusting, vacuuming, sofa cleaning, and more to keep your living area spotless. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ultrices consectetur justo.Dusting, vacuuming, sofa cleaning, and more to keep your living area spotless. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ultrices consectetur justo.",
    images: ["/living1.jpg", "/living2.jpg", "/living1.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
  {
    title: "Kitchen Cleaning",
    description:
      "Deep cleaning of stove, countertops, sink, and kitchen appliances.",
    images: ["/living1.jpg", "/living2.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
  {
    title: "Bathroom Cleaning",
    description:
      "Sanitizing toilets, tiles, sinks, mirrors, and more for a hygienic space.",
    images: ["/living1.jpg", "/living2.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
  {
    title: "Bedroom Cleaning",
    description: "Dust removal, bedsheet change, wardrobe wipe-down, and more.",
    images: ["/living1.jpg", "/living2.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
  {
    title: "Balcony Cleaning",
    description:
      "Sweeping, mopping, and railing wiping to maintain a clean outdoor space.",
    images: ["/living1.jpg", "/living2.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
  {
    title: "Full Home Deep Cleaning",
    description:
      "Comprehensive deep cleaning of your entire home by trained professionals.",
    images: ["/living1.jpg", "/living2.jpg"],
    reviews: [
      {
        name: "Anjali Mehta",
        date: "2024-12-01",
        comment: "Amazing job! Super clean and fresh vibes 🧼✨",
      },
      {
        name: "Rohan Sharma",
        date: "2024-12-05",
        comment: "My living room looks brand new! Love it 🙌",
      },
    ],
  },
];

const repairServices = [
  {
    title: "Plumbing Repair",
    description:
      "Fixing leaky faucets, clogged drains, and broken pipes with expert precision and quick service.",
    images: ["/plumbing1.jpg", "/plumbing2.jpg", "/plumbing3.jpg"],
    reviews: [
      {
        name: "Suresh Verma",
        date: "2024-12-10",
        comment: "Quick fix! No more leaks. Very professional 💧🔧",
      },
      {
        name: "Neha Kapoor",
        date: "2024-12-12",
        comment: "Great service and fast response time. Thank you!",
      },
    ],
  },
  {
    title: "Electrical Repair",
    description:
      "Troubleshooting and fixing faulty wiring, switches, sockets, and circuit breakers safely.",
    images: ["/electrical1.jpg", "/electrical2.jpg"],
    reviews: [
      {
        name: "Amit Joshi",
        date: "2024-12-08",
        comment: "Safe and efficient! The electrician was very skilled ⚡",
      },
      {
        name: "Pooja Nair",
        date: "2024-12-09",
        comment: "Solved the issue quickly. Highly recommended!",
      },
    ],
  },
  {
    title: "AC Repair",
    description:
      "Servicing, gas refill, and fixing cooling issues in split and window air conditioners.",
    images: ["/ac1.jpg", "/ac2.jpg"],
    reviews: [
      {
        name: "Karan Malhotra",
        date: "2024-12-11",
        comment: "AC is cooling like new again! Great service ❄️",
      },
      {
        name: "Meena Rao",
        date: "2024-12-14",
        comment: "Technician was polite and thorough. Good job!",
      },
    ],
  },
  {
    title: "Washing Machine Repair",
    description:
      "Repairing drainage issues, motor problems, and error codes for all brands and models.",
    images: ["/washing1.jpg", "/washing2.jpg"],
    reviews: [
      {
        name: "Ritika Shah",
        date: "2024-12-13",
        comment: "My machine works perfectly now. Thanks! 👕🌀",
      },
      {
        name: "Vikram Singh",
        date: "2024-12-15",
        comment: "Fast repair and good explanation of the issue.",
      },
    ],
  },
  {
    title: "Refrigerator Repair",
    description:
      "Solving cooling issues, defrost problems, and compressor faults in all fridge models.",
    images: ["/fridge1.jpg", "/fridge2.jpg"],
    reviews: [
      {
        name: "Sneha Reddy",
        date: "2024-12-16",
        comment: "Prompt and efficient service! No more spoiled food 🧊",
      },
      {
        name: "Rajeev Kumar",
        date: "2024-12-17",
        comment: "They knew exactly what to do. Good job!",
      },
    ],
  },
  {
    title: "Carpentry Repairs",
    description:
      "Repair of wooden furniture, doors, cabinets, and windows to restore strength and function.",
    images: ["/carpentry1.jpg", "/carpentry2.jpg"],
    reviews: [
      {
        name: "Divya Jain",
        date: "2024-12-18",
        comment: "My wardrobe door is fixed perfectly. Neat work! 🛠️",
      },
      {
        name: "Ankur Thakur",
        date: "2024-12-19",
        comment: "Very satisfied with the repair. Looks brand new!",
      },
    ],
  },
];
const pestControlServiceslist = [
  {
    title: "Cockroach Control",
    description:
      "Eliminate cockroach infestations with eco-friendly gel and spray treatments.",
    images: ["/pest1.jpg", "/pest2.jpg"],
    reviews: [
      {
        name: "Asha Patil",
        date: "2024-11-20",
        comment: "No more cockroaches! Super effective treatment 🪳✨",
      },
      {
        name: "Dev Mehra",
        date: "2024-11-21",
        comment: "Quick service and very professional.",
      },
    ],
  },
  {
    title: "Termite Treatment",
    description:
      "Protect wooden structures and furniture from termite damage using advanced solutions.",
    images: ["/termite1.jpg", "/termite2.jpg"],
    reviews: [
      {
        name: "Pallavi S.",
        date: "2024-11-19",
        comment: "Termites gone! House feels safer now 🪵🛡️",
      },
      {
        name: "Rahul Gupta",
        date: "2024-11-22",
        comment: "Very thorough and effective.",
      },
    ],
  },
  {
    title: "Bed Bug Control",
    description:
      "Complete eradication of bed bugs from mattresses, bedding, and furniture.",
    images: ["/bedbug1.jpg", "/bedbug2.jpg"],
    reviews: [
      {
        name: "Nikita Yadav",
        date: "2024-11-18",
        comment: "Peaceful sleep at last! Highly recommend 🛏️😌",
      },
      {
        name: "Sameer Rawat",
        date: "2024-11-20",
        comment: "Very satisfied with the results.",
      },
    ],
  },
];
const personalServiceslist = [
  {
    title: "At-Home Haircut",
    description:
      "Professional haircut services at your doorstep for men, women, and kids.",
    images: ["/haircut1.jpg", "/haircut2.jpg"],
    reviews: [
      {
        name: "Ritika Agarwal",
        date: "2024-12-01",
        comment: "Loved the convenience! 💇‍♀️",
      },
      {
        name: "Aman Sinha",
        date: "2024-12-02",
        comment: "Clean, safe, and stylish cut.",
      },
    ],
  },
  {
    title: "Massage Therapy",
    description:
      "Relaxing body massage sessions at home for stress relief and wellness.",
    images: ["/massage1.jpg", "/massage2.jpg"],
    reviews: [
      {
        name: "Sanjana Rao",
        date: "2024-12-03",
        comment: "So relaxing! Highly skilled therapist 👐",
      },
      {
        name: "Mohit Khurana",
        date: "2024-12-04",
        comment: "Best at-home spa experience.",
      },
    ],
  },
];
const errandServiceslist = [
  {
    title: "Grocery Delivery",
    description:
      "Fast and reliable grocery delivery from local stores to your doorstep.",
    images: ["/grocery1.jpg", "/grocery2.jpg"],
    reviews: [
      {
        name: "Ananya Shah",
        date: "2024-11-29",
        comment: "Always on time and fresh items! 🛒",
      },
      {
        name: "Vivek T.",
        date: "2024-11-30",
        comment: "Very helpful for working people.",
      },
    ],
  },
  {
    title: "Prescription Pickup",
    description: "Safe pickup and drop-off of medicines and prescriptions.",
    images: ["/medicine1.jpg", "/medicine2.jpg"],
    reviews: [
      {
        name: "Neeraj Das",
        date: "2024-12-01",
        comment: "Very convenient during sick days.",
      },
      {
        name: "Kavita N.",
        date: "2024-12-02",
        comment: "Quick and reliable 🏥💊",
      },
    ],
  },
];
const specializedServiceslist = [
  {
    title: "Marble Polishing",
    description: "Restore shine and smoothness to marble floors and surfaces.",
    images: ["/marble1.jpg", "/marble2.jpg"],
    reviews: [
      {
        name: "Arjun Patel",
        date: "2024-11-25",
        comment: "Floors look brand new again ✨",
      },
      {
        name: "Tina Bedi",
        date: "2024-11-26",
        comment: "Excellent polishing service.",
      },
    ],
  },
  {
    title: "Chimney Cleaning",
    description:
      "Deep cleaning of kitchen chimneys to remove grease and ensure safety.",
    images: ["/chimney1.jpg", "/chimney2.jpg"],
    reviews: [
      {
        name: "Manju Sharma",
        date: "2024-11-27",
        comment: "Kitchen feels fresh now 🍳",
      },
      {
        name: "Raghav Shetty",
        date: "2024-11-28",
        comment: "Clean and fast service.",
      },
    ],
  },
];
const techServiceslist = [
  {
    title: "Laptop Repair",
    description:
      "Fixing hardware, software, and performance issues for all laptop brands.",
    images: ["/laptop1.jpg", "/laptop2.jpg"],
    reviews: [
      {
        name: "Nilesh J.",
        date: "2024-12-05",
        comment: "My laptop is working like new! 💻",
      },
      {
        name: "Aarti Sen",
        date: "2024-12-06",
        comment: "Great service and knowledgeable staff.",
      },
    ],
  },
  {
    title: "WiFi Setup",
    description:
      "Quick installation and configuration of routers and WiFi extenders.",
    images: ["/wifi1.jpg", "/wifi2.jpg"],
    reviews: [
      {
        name: "Imran Khan",
        date: "2024-12-07",
        comment: "Strong signal everywhere now 📶",
      },
      {
        name: "Sneha Varma",
        date: "2024-12-08",
        comment: "Very helpful and patient tech.",
      },
    ],
  },
];
const manpowerServiceslist = [
  {
    title: "Housemaid Services",
    description:
      "Trained domestic help for cleaning, cooking, and daily chores.",
    images: ["/maid1.jpg", "/maid2.jpg"],
    reviews: [
      {
        name: "Jyoti Mishra",
        date: "2024-11-22",
        comment: "Reliable and efficient. Highly recommended.",
      },
      {
        name: "Deepak Malhotra",
        date: "2024-11-23",
        comment: "My daily routine is stress-free now 🙌",
      },
    ],
  },
  {
    title: "Office Boy",
    description:
      "Skilled office assistants for small business and corporate settings.",
    images: ["/officeboy1.jpg", "/officeboy2.jpg"],
    reviews: [
      {
        name: "Nikita G.",
        date: "2024-11-24",
        comment: "Very disciplined and punctual.",
      },
      {
        name: "Ravindra Jain",
        date: "2024-11-25",
        comment: "Smooth onboarding and good work ethic.",
      },
    ],
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
  { title: "Sofa Deep Cleaning", img: "/images/water.png" },
  { title: "Water Tank Cleaning", img: "/images/water.png" },
  { title: "Curtain Washing", img: "/images/water.png" },
  { title: "Curtain Washing", img: "/images/water.png" },
  { title: "Window Glass Cleaning", img: "/images/water.png" },
  { title: "Window Glass Cleaning", img: "/images/water.png" },
];
const repairrelatedServices = [
  { title: "AC Repair & Cleaning", img: "/images/water.png" },
  { title: "Carpet Shampooing", img: "/images/water.png" },
  { title: "Sofa Deep Cleaning", img: "/images/water.png" },
  { title: "Washing Machine Repair", img: "/images/water.png" },
  { title: "Water Tank Cleaning", img: "/images/water.png" },
  { title: "Curtain Washing", img: "/images/water.png" },
  { title: "Electrical Wiring Repair", img: "/images/water.png" },
  { title: "Window Glass Cleaning", img: "/images/water.png" },
  { title: "Plumbing & Leak Fix", img: "/images/water.png" },
];
const pestControlServices = [
  { title: "Cockroach Control", img: "/images/water.png" },
  { title: "Termite Treatment", img: "/images/water.png" },
  { title: "Bed Bug Removal", img: "/images/water.png" },
  { title: "Rodent Control", img: "/images/water.png" },
  { title: "Mosquito Control", img: "/images/water.png" },
  { title: "Ant Control", img: "/images/water.png" },
  { title: "Fumigation Service", img: "/images/water.png" },
];
const personalServices = [
  { title: "Home Salon for Women", img: "/images/water.png" },
  { title: "Haircut for Men", img: "/images/water.png" },
  { title: "Bridal Makeup", img: "/images/water.png" },
  { title: "Massage at Home", img: "/images/water.png" },
  { title: "Waxing & Threading", img: "/images/water.png" },
  { title: "Facial Services", img: "/images/water.png" },
  { title: "Pedicure & Manicure", img: "/images/water.png" },
];

const errandServices = [
  { title: "Grocery Pick-up", img: "/images/water.png" },
  { title: "Courier Drop-off", img: "/images/water.png" },
  { title: "Dry Cleaning Delivery", img: "/images/water.png" },
  { title: "Bill Payments", img: "/images/water.png" },
  { title: "Pharmacy Pickup", img: "/images/water.png" },
  { title: "Document Delivery", img: "/images/water.png" },
];
const specializedServices = [
  { title: "CCTV Installation", img: "/images/water.png" },
  { title: "Interior Designing", img: "/images/water.png" },
  { title: "Home Automation", img: "/images/water.png" },
  { title: "Modular Kitchen Setup", img: "/images/water.png" },
  { title: "Solar Panel Installation", img: "/images/water.png" },
  { title: "Swimming Pool Maintenance", img: "/images/water.png" },
];
const techServices = [
  { title: "Laptop Repair", img: "/images/water.png" },
  { title: "Mobile Screen Replacement", img: "/images/water.png" },
  { title: "Printer Setup", img: "/images/water.png" },
  { title: "WiFi & Router Setup", img: "/images/water.png" },
  { title: "Software Installation", img: "/images/water.png" },
  { title: "System Backup & Recovery", img: "/images/water.png" },
];
const manpowerServices = [
  { title: "Part-time Maid", img: "/images/water.png" },
  { title: "Full-time Cook", img: "/images/water.png" },
  { title: "Security Guard", img: "/images/water.png" },
  { title: "Office Boy", img: "/images/water.png" },
  { title: "Driver on Demand", img: "/images/water.png" },
  { title: "Babysitter", img: "/images/water.png" },
];

// Reusable component for the service page content
function ServiceContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Home Services
        </h2>
        <div className="">
          <RepairServiceSlider services={relatedServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={services} />
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
function ServiceContent2() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={repairrelatedServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={repairServices} />
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
function PestControlContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Pest Control Services
        </h2>
        <div className="">
          <RepairServiceSlider services={pestControlServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={pestControlServiceslist} />
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
function PersonalServicesContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={personalServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={personalServiceslist} />
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
function ErrandServicesContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={errandServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={errandServiceslist} />
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
function SpecializedServicesContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={specializedServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={specializedServiceslist} />
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
function TechServicesContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={techServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={techServiceslist} />
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
function ManpowerServicesContent() {
  return (
    <div className="flex flex-col gap-6 md:p-6 md:py-0 p-2 py-10  bg-white mt-15">
      {/* Top Related Services */}
      <div className="shadow-sm rounded-xl md:p-4 md:py-0 py-2 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Related Repair Maintenance
        </h2>
        <div className="">
          <RepairServiceSlider services={manpowerServices} />
        </div>
      </div>

      {/* Service Details + Offers */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl md:p-4 p-0 space-y-4">
          <SingleSlider singleServices={manpowerServiceslist} />
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

export default async function ServiceDetailsPage({ params }: PageProps) {
  // Await the params since it's now a Promise
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) return notFound();

  // Currently, the page content is the same for home-cleaning and repair-maintenance,
  // so you can extend this pattern to other slugs or create conditional content if needed.
  if (slug === "home-cleaning") {
    return <ServiceContent />;
  }
  if (slug === "repair-maintenance") {
    return <ServiceContent2 />;
  }
  if (slug === "repair-maintenance") {
    return <ServiceContent2 />;
  }
  if (slug === "pest-control") {
    return <PestControlContent />;
  }
  if (slug === "personal-services") {
    return <PersonalServicesContent />;
  }
  if (slug === "errand-services") {
    return <ErrandServicesContent />;
  }
  if (slug === "specialized-services") {
    return <SpecializedServicesContent />;
  }
  if (slug === "tech-services") {
    return <TechServicesContent />;
  }
  if (slug === "manpower-services") {
    return <ManpowerServicesContent />;
  }

  // fallback for other slugs, you can customize as you want
  return (
    <div className="p-6 bg-white mt-15">
      <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700">{service.desc}</p>
    </div>
  );
}
