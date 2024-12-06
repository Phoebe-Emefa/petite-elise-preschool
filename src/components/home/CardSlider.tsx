"use client";

import React from "react";
import Card from "./Card";
import useEmblaCarousel from "embla-carousel-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "@/utils/misc";

interface Program {
  icon: string;
  title: string;
  description: string;
  time: string;
}

const CardSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const programs: Program[] = [
    {
      icon: "/images/abc.png",
      title: "Daycare",
      time: "8:30am - 10:amm",
      description:
        "We offer two Extended Day classes. Our Kaleidoscope Class meets from 12:00pm-3:30pm.",
    },
    {
      icon: "/images/puzzle.png",
      title: "Preschool",
      time: "8:30am - 10:amm",
      description:
        "Our Summer Program is a 6-week learning adventure for children ages 3-4.",
    },
    {
      icon: "/images/calendar.png",
      title: "AfterSchool Care",
      time: "8:30am - 10:amm",
      description:
        "The commitment of the school undertakes a viable, meaningful program for children is only.",
    },
    {
      icon: "/images/tent-house.png",
      title: "Summer Camp",
      time: "8:30am - 10:amm",
      description:
        "The commitment of the school undertakes a viable, meaningful program for children is only.",
    },
    {
      icon: "/images/christmas.png",
      title: "Christmas Camp",
      time: "8:30am - 10:amm",
      description:
        "The commitment of the school undertakes a viable, meaningful program for children is only.",
    },
    {
        icon: "/images/logical-thinking.png",
        title: "Childminding",
        time: "8:30am - 10:amm",
        description:
          "The commitment of the school undertakes a viable, meaningful program for children is only.",
      },
  ];

  return (
    <div className="bg-[#ffe9d0]">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-12 py-16 ">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Program</h2>
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white",
                !canScrollPrev && "opacity-50 cursor-not-allowed"
              )}
              disabled={!canScrollPrev}
              aria-label="Previous slide"
            >
              <LuChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white",
                !canScrollNext && "opacity-50 cursor-not-allowed"
              )}
              disabled={!canScrollNext}
              aria-label="Next slide"
            >
              <LuChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
              >
                <Card {...program} />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex justify-center gap-2 mt-8">
          {programs.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === selectedIndex ? "bg-primary" : "bg-[#95b0b7]"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
