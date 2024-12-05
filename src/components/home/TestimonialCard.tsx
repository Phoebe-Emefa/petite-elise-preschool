import Image from "next/image";
import React from "react";
import { BsQuote } from "react-icons/bs";

const TestimonialCard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
          <Image
            src="/images/eno.jpg"
            alt="Founder with child"
            width={640}
            height={800}
            className="rounded-3xl object-cover"
            priority
          />
        </div>
        <div className="flex flex-col ">
          <div className=" text-primary text-7xl font-serif">
            <BsQuote />
          </div>
          <blockquote>
            <p className="text-[#2D3142] text-2xl lg:text-3xl leading-relaxed mt-4">
              Tortor platea nunc lorem morbi pellentesque sed enim viverra
              venenatis, sem pellentesque massa nunc quis lectus. Tortor platea
              nunc lorem morbi pellentesque sed enim viverra venenatis, sem
              pellentesque massa nunc quis lectus.
            </p>
            <footer className="mt-8">
              <div className="flex flex-col items-start">
                <div className="text-[#2D3142] font-medium text-xl">
                  Eno Quagraine - Talkative Mom
                </div>
                <div className="text-gray-500 mt-1">
                  Founder & Head of School
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
