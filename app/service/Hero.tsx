"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const body1 = Inter({
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      {/* Top Text Section */}
      <div className="text-center max-w-3xl px-4">
        <p className={`${body1.className} text-[#1073B9] font-regular tracking-wide `}>
          Services
        </p>
        <h2 className="text-[46px] font-extrabold text-[#25282B] ">
          Global Medical Excellence
        </h2>
        <h3 className="text-[46px] font-bold text-[#1073B9]">
          Designed for You
        </h3>

        <p className={`${body1.className} text-gray-600 text-[18px] max-w-md mx-auto`}>
          Access world-renowned hospitals, elite specialists, and
          personalised medical journeys across the most trusted destinations worldwide.
        </p>
      </div>

      {/* Combined Image Section */}
      <div className="w-full mt-10 flex justify-center ">
        <div className="w-full mt-10">
            <Image
                src="/SC.png"
                alt="Medical Services Collage"
                width={2000}
                height={1000}
                className="w-full h-auto object-cover"
                priority
            />
            </div>
      </div>
    </section>
  );
}
