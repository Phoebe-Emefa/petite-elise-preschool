/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import CustomSelect from "../shared/forms/CustomSelect";

type ProgramSelectionProps = {
  values: any;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const ProgramSelection: React.FC<ProgramSelectionProps> = ({ values, setFieldValue, nextStep, prevStep }) => {
  const programOptions = [
    { label: "Daycare", value: "Daycare" },
    { label: "Preschool", value: "Preschool" },
    { label: "Afterschool Care", value: "Afterschool Care" },
    { label: "Baby & Me", value: "Baby & Me" },
    { label: "Developmental Playgroup", value: "Developmental Playgroup" },
    { label: "Extra-Curricular Activities", value: "Extra-Curricular Activities" },
  ];

  const scheduleOptions = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Termly", value: "Termly" },
  ];

  const isDaycareSelected = values?.programs?.includes("Daycare");

  // Effect to clear schedule when Daycare is deselected
  useEffect(() => {
    if (!isDaycareSelected && values?.schedule) {
      setFieldValue("schedule", "", false);
    }
  }, [isDaycareSelected, values, setFieldValue]);

  return (
    <div>
      <div className="mb-10 mt-5">
        <CustomSelect
          label="Program Selection"
          name="programs"
          options={programOptions}
          isMulti
          placeholder="Select program(s) you would like to enroll your child in"
          required
        />

        {isDaycareSelected && (
          <CustomSelect
            label="Select Schedule"
            name="schedule"
            options={scheduleOptions}
            required
            placeholder="Select a schedule for Daycare"
          />
        )}
      </div>

      <div className="w-full flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-full lg:w-1/3 py-3 bg-gray-400 text-white font-bold rounded-lg hover:opacity-90 shadow-lg"
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
