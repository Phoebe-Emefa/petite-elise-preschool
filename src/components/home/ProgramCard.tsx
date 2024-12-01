import React from "react";

interface PricingCardProps {
  number: string;
  title: string;
  description: string;
  time: string;
  price: string;
}

const ProgramCard = ({ number, title, description, time, price }: PricingCardProps) => {
  return (
    <div className="rounded-2xl bg-white bg-opacity-10 p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 backdrop-blur-lg">
      <p className="text-sm font-medium text-[#f9f871]">{number}</p>
      <h3 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f9f871] to-[#aee87d] animate-gradient-x">
        {title}
      </h3>
      <p className="mt-4 text-white text-opacity-90 leading-relaxed">
        {description}
      </p>
      <div className="mt-8 pt-8 border-t border-white border-opacity-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-[#aee87d]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white text-opacity-80">{time}</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#f9f871]">{price}</span>
            <span className="text-white text-opacity-60 ml-1">/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
