import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5d84e6b80e37fa228b201806/1579206594469-OOCJYPYF18VDDJ0DJ44N/IMG_2963.jpg"
            alt="Students engaging in colorful activities"
            width={800}
            height={900}
            className="rounded-xl object-cover w-full h-auto shadow-lg lg:max-h-[500px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] via-transparent to-transparent rounded-xl"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Petite Elise Preschool, a subsidiary of Talkative Mom Ltd, is a
            childcare center that enrolls children from 3 months to 5 years. We
            provide a safe, nurturing environment to build curious, resilient, and
            independent thinkers— inspiring children to be life-long learners.
            Here, we believe that every child has the potential to become
            exceptional.
          </p>
          <div>
            <button className="w-full sm:w-auto px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
