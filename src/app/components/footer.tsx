// components/Footer.tsx
import Image from "next/image";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#f9f9f9] text-[#1a1a1a] pt-14 pb-10 px-6 md:px-16 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Brand */}
        <div>
          {/* <Image src="/logo.svg" alt="Logo" width={100} height={32} /> */}
          <h1 className="text-xl font-bold mb-4">Kamwalaa</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            We bring trusted professionals right to your doorstep. Quality
            services for your everyday needs.
          </p>
          <div className="flex gap-3 mb-6 mt-6">
            {[Facebook, Instagram, X, Linkedin].map((Icon, idx) => (
              <span
                key={idx}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-black transition"
              >
                <Icon className="w-4 h-4 cursor-pointer" />
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-base font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "About Us",
              "Careers",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((name, idx) => (
              <li
                className="cursor-pointer
              "
                key={idx}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-base font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              ["Explore Services", "/"],
              ["Partner with Us", "/"],
              ["Apply as Expert", "/"],
              ["FAQs", "/faq"],
            ].map(([label, url], idx) => (
              <li key={idx}>
                <Link
                  href={url}
                  className="cursor-pointer
                "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h3 className="text-base font-semibold mb-4">Connect with us</h3>

          <div className="space-y-3">
            <Image
              src="/assets/footer/appstore.webp"
              alt="App Store"
              width={140}
              height={40}
              className="rounded cursor-pointer"
            />
            <Image
              src="/assets/footer/googleplay.webp"
              alt="Google Play"
              width={140}
              height={40}
              className="rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} Kamwalaa. All rights reserved.</p>
      </div>
    </footer>
  );
}
