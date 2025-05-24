"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center mt-15">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-medium">
        You can always <strong className="font-bold">count on us</strong> during
        your journey
      </h2>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/meeting1.jpg" // Replace with your actual image paths
            alt="Team in meeting"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/man-laptop.jpg"
            alt="Man on laptop"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/desk-setup.jpg"
            alt="Office desk setup"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
