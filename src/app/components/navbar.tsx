"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [location, setLocation] = useState("Connaught Place, New Delhi");
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const placeholderTexts = [
    "Repairing Service",
    "Manpower Service",
    "Pest Control Service",
    "Haircare Service",
    "Cleaning Service",
  ];

  // Handle dropdown menu closing when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Determine if user is scrolling up or down
      const isScrollingDown = currentPosition > scrollPosition;

      // Add some threshold to prevent the navbar from being too jumpy
      if (currentPosition < 10) {
        // Always show navbar at the top of the page
        setVisible(true);
      } else if (isScrollingDown) {
        // Hide navbar when scrolling down
        setVisible(false);
      } else {
        // Show navbar when scrolling up
        setVisible(true);
      }

      // Update scroll position
      setScrollPosition(currentPosition);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Handle typing effect for search placeholder
  useEffect(() => {
    const currentText = placeholderTexts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentText.length) {
            setIsDeleting(true);
            // Pause before deleting
            setTimeout(() => {}, 1000);
          }
        } else {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % placeholderTexts.length);
          }
        }
      },
      isDeleting ? 200 : 150
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-4 mt-2">
        <header className="w-full flex items-center justify-between px-6 py-3 shadow-sm rounded-md bg-white">
          {/* Left Section: Logo & Categories */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-black text-white font-bold px-2 py-1 rounded"></div>
              <Link href={"/"}>
                <span className="font-semibold text-lg">Kamwalaa</span>
              </Link>
            </div>
            <nav className="hidden md:flex gap-4 text-gray-700 font-medium text-sm">
              {[
                ["About Us", "/about"],
                ["Appliance Repair", "/"],
                ["Home Services", "/"],
                ["Trending Now", "/faq"],
                ["How it Works", "/faq"],
              ].map(([label, url], idx) => (
                <Link key={idx} href={url} className="cursor-pointer">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Location & Search */}
          <div className="flex items-center gap-3 flex-1 max-w-xl mx-6">
            <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md w-54 gap-2 bg-white">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder={`Search for '${displayText}'`}
                className="outline-none text-sm w-full"
              />
            </div>
            <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md w-48 gap-2 bg-white">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="truncate text-sm text-gray-700">{location}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-5">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <User
              className="w-5 h-5 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />

            {open && (
              <div
                ref={menuRef}
                className="absolute right-10 top-12 mt-2 w-38 bg-white shadow-lg rounded-md border border-gray-200 z-50 px-1 py-1"
              >
                <li
                  className="block w-full text-left px-4 py-2 text-sm cursor-pointer"
                  onClick={() => {
                    alert("Go to Bookings");
                    setOpen(false);
                  }}
                >
                  Profile
                </li>
                <li
                  className="block w-full text-left px-4 py-2 text-sm cursor-pointer"
                  onClick={() => {
                    alert("Go to Bookings");
                    setOpen(false);
                  }}
                >
                  Bookings
                </li>
                <li
                  className="block w-full text-left px-4 py-2 text-sm cursor-pointer text-red-600"
                  onClick={() => {
                    alert("Logging out...");
                    setOpen(false);
                  }}
                >
                  Logout
                </li>
              </div>
            )}
          </div>
        </header>
      </div>
      {/* Add padding to prevent content from jumping when navbar becomes fixed */}
      <div className="h-16"></div>
    </div>
  );
}
