"use client";

import { useEffect, useRef, useState } from "react";
import {
  BadgeIndianRupee,
  ChevronDown,
  MapPin,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
export default function Navbar() {
  const [location, setLocation] = useState("Connaught Place, New Delhi");
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const placeholderTexts = [
    "Repairing Service",
    "Manpower Service",
    "Pest Control Service",
    "Haircare Service",
    "Cleaning Service",
  ];

  const navigationItems = [
    ["About Us", "/about"],
    ["Appliance Repair", "/"],
    ["Home Services", "/"],
    ["Trending Now", "/faq"],
    ["How it Works", "/faq"],
  ];

  // Handle dropdown menu closing when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
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
  // GSAP Animation for mobile menu panel only
  // Curtain drop animation for mobile menu
  useEffect(() => {
    const menuElement = mobileMenuRef.current;
    if (!menuElement) return;

    if (mobileMenuOpen) {
      gsap.set(menuElement, { display: "block" });
      gsap.fromTo(
        menuElement,
        {
          height: 0,
          opacity: 0,
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          height: "auto",
          opacity: 1,
          scaleY: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuElement, {
        height: 0,
        opacity: 0,
        scaleY: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuElement, { display: "none" });
        },
      });
    }
  }, [mobileMenuOpen]);
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

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-2 md:mx-4 mt-2">
        <header className="w-full flex gap-5 items-center justify-between px-3 md:px-6 py-3 shadow-sm rounded-md bg-white">
          {/* Left Section: Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-black text-white font-bold px-2 py-1 rounded"></div>
            <Link href={"/"}>
              <span className="font-semibold text-lg">Kamwalaa</span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 flex-1">
            <nav className="flex gap-4 text-gray-700 font-medium text-sm">
              {navigationItems.map(([label, url], idx) => (
                <Link
                  key={idx}
                  href={url}
                  className="cursor-pointer hover:text-black transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop Search & Location */}
            <div className="flex items-center gap-3 flex-1 max-w-xl ml-6">
              <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md w-full gap-2 bg-white">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder={`Search for '${displayText}'`}
                  className="outline-none text-sm w-full"
                />
              </div>
            </div>

            {/* Desktop Icons */}
            <div className="flex items-center gap-4">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" />
              <BadgeIndianRupee className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors" />
              <User
                className="w-5 h-5 cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => setOpen((prev) => !prev)}
              />

              {open && (
                <div
                  ref={menuRef}
                  className="absolute right-6 top-12 mt-2 w-38 bg-white shadow-lg rounded-md border border-gray-200 z-50 px-1 py-1"
                >
                  <li
                    className="block w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors"
                    onClick={() => {
                      alert("Go to Profile");
                      setOpen(false);
                    }}
                  >
                    Profile
                  </li>
                  <li
                    className="block w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors"
                    onClick={() => {
                      alert("Go to Bookings");
                      setOpen(false);
                    }}
                  >
                    Bookings
                  </li>
                  <li
                    className="block w-full text-left px-4 py-2 text-sm cursor-pointer text-red-600 hover:bg-red-50 rounded transition-colors"
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
          </div>

          {/* Mobile Hamburger Menu - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden mt-2 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
            style={{
              transformOrigin: "top center",
              height: mobileMenuOpen ? "auto" : "0",
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md gap-2 bg-white">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder={`Search for '${displayText}'`}
                  className="outline-none text-sm w-full"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="py-2">
              {navigationItems.map(([label, url], idx) => (
                <Link
                  key={idx}
                  href={url}
                  className="block px-4 py-3 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile User Actions */}
            <div className="border-t border-gray-100 py-2">
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
                  alert("Go to Profile");
                  setMobileMenuOpen(false);
                }}
              >
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
                  alert("Go to Bookings");
                  setMobileMenuOpen(false);
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                Bookings
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
                  alert("Go to Cart");
                  setMobileMenuOpen(false);
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                Cart
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
                onClick={() => {
                  alert("Go to Earnings");
                  setMobileMenuOpen(false);
                }}
              >
                <BadgeIndianRupee className="w-4 h-4" />
                Earnings
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 text-sm hover:bg-red-50 transition-colors"
                onClick={() => {
                  alert("Logging out...");
                  setMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add padding to prevent content from jumping when navbar becomes fixed */}
      <div className="h-16"></div>
    </div>
  );
}
