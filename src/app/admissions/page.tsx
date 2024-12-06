import EnrolChild from "@/components/admission/EnrolChild";
import ProgramCard from "@/components/home/ProgramCard";
import { programs } from "@/utils/constants";
import React from "react";

const AdmissionsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#007f94] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">
              Welcome to Our Admissions Portal
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Join our vibrant community where education meets exploration.
              Enroll your child today and give them the best start to their
              future with a comprehensive, hands-on learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Explore Our Programs
            </h2>
            <p className="mt-4 text-gray-600">
              Flexible schedules to fit your family’s needs, with premium care
              and enriching activities.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                number={String(index + 1).padStart(2, "0")}
                title={program.title}
                description={program.description}
                time={program.schedule}
                price={program?.price} // Update this as per the actual pricing, if needed
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enroll Your Child Section */}
      <EnrolChild />
    </div>
  );
};

export default AdmissionsPage;
