/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CustomSelect from "../shared/forms/CustomSelect";
import RadioButton from "../shared/forms/RadioButton";
import CustomInputList from "../shared/forms/CustomInputList";
import { IEnrollChild } from "@/utils/interfaces";

type ChildHealthConditionsProps = {
  values: IEnrollChild;
  nextStep: () => void;
  prevStep: () => void;
};

const ChildHealthConditions = ({
  values,
  nextStep,
  prevStep,
}: ChildHealthConditionsProps) => {
  const options = [
    { label: "ADHD", value: "ADHD" },
    { label: "Dyslexia", value: "Dyslexia" },
    { label: "Autism", value: "Autism" },
    { label: "None", value: "None" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 mb-10 mt-5">
        <div>
          <RadioButton
            label="Does the child have any allergies? "
            name="hasAllergies"
            options={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
            required
          />
          {values?.hasAllergies === "Yes" && (
            <CustomInputList label="Enter Allergies" name="allergies" required={values?.hasAllergies === "Yes" ? true : false} />
          )}
        </div>

        <div>
          <RadioButton
            label="Does the child have any special health education considerations? "
            name="hasSpecialHealthConditions"
            options={[
              { label: "Yes", value: "Yes" },
              { label: "No", value: "No" },
            ]}
            required
          />
          {values?.hasSpecialHealthConditions === "Yes" && (
           <>
             <CustomSelect
             label="Special Health Consideration"
             name="specialHealthConditions"
             options={options}
             required={values?.hasSpecialHealthConditions === "Yes" ? true : false}
             isMulti
             placeholder="Select special health consideration"
           />
             <p>Kindly see front desk for additional information regarding Special Education needs</p>
           </>
          )}
        
        </div>
      
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

export default ChildHealthConditions;
