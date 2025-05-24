// components/Banner.js

import Image from "next/image";

export default function DeviderBanner() {
  return (
    <div className="flex flex-col md:flex-row md:mx-auto mx-2 items-center justify-between bg-gradient-to-r from-black/90 to-black/30 p-8 rounded-lg text-white max-w-5xl ">
      {/* Left side - text + button */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold leading-tight mb-3">
          2 years of <br /> worry-free water
        </h1>
        <p className="text-gray-300 mb-6">Needs no service for 2 years¹</p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
          Buy now
        </button>
      </div>

      {/* Right side - image */}
      <div className="w-[200px] md:w-[660px] h-[300px] flex-shrink-0">
        <Image
          height={100}
          width={100}
          src="/ee9925c6-744c-41f0-b1a3-5643fb8be512.png"
          alt="Water purifier"
          className="rounded-lg shadow-lg flex float-start md:float-end md:mt-0 mt-10"
        />
      </div>
    </div>
  );
}
