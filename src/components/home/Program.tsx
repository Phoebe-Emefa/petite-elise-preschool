import React from "react";
import ProgramCard from "./ProgramCard";

const Program = () => {
  return (
   <div className="min-h-screen overflow-hidden bg-primary"  >
     <section
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
   
    >
      <div className="text-center">
        <h2 className="text-base font-medium text-white">Our Program</h2>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f9f871] to-[#aee87d] animate-gradient-x">
          Schedule and tuition
        </h1>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <ProgramCard
          number="01"
          title="Half Days"
          description="Eu vestibulum praesent pretium platea fusce amet lobortis ut malesuada neque scelerisque pulvinar quisque turpis ut etiam sit volutpat."
          time="8:30 - 12:00"
          price="$1,800"
        />
        <ProgramCard
          number="02"
          title="Full Days"
          description="Eu vestibulum praesent pretium platea fusce amet lobortis ut malesuada neque scelerisque pulvinar quisque turpis ut etiam sit volutpat."
          time="8:30 - 3:30"
          price="$2,300"
        />
        <ProgramCard
          number="03"
          title="Extended Day"
          description="Eu vestibulum praesent pretium platea fusce amet lobortis ut malesuada neque scelerisque pulvinar quisque turpis ut etiam sit volutpat."
          time="8:30 - 5:30"
          price="$2,600"
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-white mb-8">
          We welcome kids into our  program based on their age.
        </p>
        <button className="bg-[#2D3142] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2D3142]/90 transition-colors">
          Enroll your kid
        </button>
      </div>
    </section>
   </div>
  );
};

export default Program;
