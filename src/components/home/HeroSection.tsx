import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-primary min-h-screen overflow-hidden relative">
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Welcome to
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9f871] to-[#aee87d] animate-gradient-x">
                  Petite Elise Preschool
                </span>
              </h1>
              <div className="w-full h-1 bg-gradient-to-r from-[#f9f871] to-[#aee87d] rounded-full transform -skew-x-12"></div>
              <p className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed">
              Nurtur young minds to become curious, resilient, and independent thinkers in a safe, loving environment
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-secondary font-bold text-white rounded-full hover:from-[#aee87d] hover:to-[#f9f871] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E17E7C] focus:ring-offset-[#4B456F]">
                Enroll your Kid
              </button>
              <button className="w-full sm:w-auto group px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 flex justify-center items-center gap-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-[#4B456F]">
                <div className="bg-white rounded-full p-1 group-hover:bg-[#aee87d] transition-colors duration-300">
                  <FaPlay className="w-3 h-3 text-[#4B456F] group-hover:text-white transition-colors duration-300" />
                </div>
                Watch video
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "50k+", label: "Happy Students" },
                { number: "12k+", label: "Satisfied Parents" },
                { number: "1k+", label: "Classes" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/043/993/044/small_2x/ai-generated-children-engaging-with-colorful-toys-free-photo.jpg"
              alt="Students engaging in colorful activities"
              width={800}
              height={600}
              className="rounded-xl object-cover w-full h-auto lg:max-h-[600px]"
              priority
            />

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-[#E9B171] rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <span className="text-lg md:text-2xl">🎨</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 md:w-12 md:h-12 bg-[#E17E7C] rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <span className="text-lg md:text-2xl">📚</span>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-white shadow-lg rounded-lg p-2 transform -rotate-90 origin-top-left">
                <ul className="flex space-x-2">
                  {["📏", "✏️", "🖍️", "🧩"].map((emoji, index) => (
                    <li key={index} className="text-lg md:text-2xl">
                      {emoji}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
