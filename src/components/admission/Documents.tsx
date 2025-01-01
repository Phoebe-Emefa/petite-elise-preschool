/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FileUpload from "../shared/forms/FileUpload";
import { IEnrollChild } from "@/utils/interfaces";
import { Button } from "../ui/button";

type DocumentsProps = {
  values: IEnrollChild;
  nextStep: () => void;
  prevStep: () => void;
  errors: Record<string, any>;
  dirty: boolean;
};

const Documents = ({
  values,
  nextStep,
  prevStep,
  errors,
  dirty,
}: DocumentsProps) => {
  const relevantFields = [
    "childPassport",
    "parentPassport",
    "emergencyContactPassport",
    "pickPersonOnePassport",
    "pickPersonTwoPassport",
    "G6pdReport",
    "vaccinations",
    "childHearingTest",
    "childEyeTest"
  
  ];

  // Filter errors to include only relevant fields
  const componentErrors = Object.keys(errors).filter((field) =>
    relevantFields.includes(field)
  );

  const hasErrors = componentErrors.length > 0;


  return (
    <div>
      <div className="mb-10 mt-5">
        <FileUpload
          label="Child’s Passport Photo"
          name="childPassport"
          required
          initialValue={values?.childPassport as string}
        
        />

        <FileUpload
          label="Parent’s Passport Photo"
          name="parentPassport"
          required
          initialValue={values?.parentPassport as string}
      
        />

        <FileUpload
          label="Emergency Contact’s Passport Photo"
          name="emergencyContactPassport"
          required
          initialValue={values?.emergencyContactPassport as string}
        
        />

        {values?.dropChildOffSelf === "No" && (
          <>
            <FileUpload
              label="1st Pickup Person’s Passport Photo"
              name="pickPersonOnePassport"
              required
              initialValue={values?.pickPersonOnePassport as string}
         
            />
            <FileUpload
              label="2nd Pickup Person’s Person’s Passport"
              name="pickPersonTwoPassport"
              required
              initialValue={values?.pickPersonTwoPassport as string}
            
            />
          </>
        )}
        <FileUpload
          label="G6pd report"
          name="G6pdReport"
          initialValue={values?.G6pdReport as string}
          required
      
        />

        <FileUpload
          label="Copy of vaccinations"
          name="vaccinations"
          initialValue={values?.vaccinations as string}
          required
      
        />

        <FileUpload
          label="Child's Hearing Test"
          name="childHearingTest"
          required
          initialValue={values?.childHearingTest as string}
      
        />

        <FileUpload
          label="Child's Eye Test"
          name="childEyeTest"
          initialValue={values?.childEyeTest as string}
          required
        
        />
      </div>

      <div className="w-full flex justify-between gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="w-full lg:w-1/3 py-3 "
        >
          Back
        </Button>

        {/* Next Button */}
        <Button
          type="button"
          onClick={nextStep}
          // disabled={hasErrors ||  !dirty }

          className={`w-full lg:w-1/3 py-3 font-bold rounded-lg shadow-lg border-2 text-white bg-gradient-to-r from-[#008C7E] to-[#00B597] border-[#00B597] hover:opacity-90 `}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Documents;
