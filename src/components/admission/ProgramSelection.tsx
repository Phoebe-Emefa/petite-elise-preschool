/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";


type ProgramSelectionProps = {
  values: any;
  nextStep: () => void;
  prevStep: () => void;
};

const ProgramSelection = ({ values, nextStep, prevStep }: ProgramSelectionProps) => {
  console.log("vals", values)
  return (
    <div>
      <div className="mb-10 mt-5">
       heeeeyy
      </div>

   <div className="w-full flex justify-between gap-4">
   <button
        type="button"
        onClick={prevStep}
        className="w-full lg:w-1/3 py-3 bg-gray-400 text-white font-bold rounded-lg hover:opacity-90 shadow-lg "
      >
        Back
      </button>
   <button
        type="button"
        onClick={nextStep}
        className="w-full lg:w-1/3 py-3 bg-gradient-to-r from-[#008C7E] to-[#00B597] text-white font-bold rounded-lg hover:opacity-90 shadow-lg"
      >
        Next
      </button>
   </div>
    </div>
  );
};

export default ProgramSelection;
