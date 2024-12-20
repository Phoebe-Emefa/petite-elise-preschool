/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FileUpload from "../shared/forms/FileUpload";
import { IEnrollChild } from "@/utils/interfaces";

type DocumentsProps = {
  values: IEnrollChild;
  nextStep: () => void;
  prevStep: () => void;
  setFieldValue: (name: string, val: any) => void;
};

const Documents = ({
  values,
  setFieldValue,
  nextStep,
  prevStep,
}: DocumentsProps) => {
  return (
    <div>
      <div className="mb-10 mt-5">
      <FileUpload
  label="Child’s Passport Photo"
  name="childPassport"
  required
  initialValue={values.childPassport} 
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFieldValue("childPassport", event.target.files[0]);
    }
  }}
/>


        <FileUpload
          label="Parent’s Passport Photo"
          name="parentPassport"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
              // Set the field to the first file directly
              setFieldValue("parentPassport", event.target.files[0]);
            }
          }}
        />

        <FileUpload
          label="Emergency Contact’s Passport Photo"
          name="emergencyContactPassport"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
              // Set the field to the first file directly
              setFieldValue("emergencyContactPassport", event.target.files[0]);
            }
          }}
        />

        {values?.dropChildOffSelf === "No" && (
          <>
            <FileUpload
              label="1st Pickup Person’s Passport Photo"
              name="pickPersonOnePassport"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files[0]) {
                  // Set the field to the first file directly
                  setFieldValue("pickPersonOnePassport", event.target.files[0]);
                }
              }}
            />
            <FileUpload
              label="2nd Pickup Person’s Person’s Passport"
              name="pickPersonTwoPassport"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files[0]) {
                  // Set the field to the first file directly
                  setFieldValue("pickPersonTwoPassport", event.target.files[0]);
                }
              }}
            />
          </>
        )}
        <FileUpload
          label="G6pd report"
          name="G6pdReport"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
              // Set the field to the first file directly
              setFieldValue("G6pdReport", event.target.files[0]);
            }
          }}
        />

        <FileUpload
          label="Copy of vaccinations"
          name="vaccinations"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
              // Set the field to the first file directly
              setFieldValue("vaccinations", event.target.files[0]);
            }
          }}
        />
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

export default Documents;
