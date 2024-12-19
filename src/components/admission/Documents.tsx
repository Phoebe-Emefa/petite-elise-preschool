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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
              setFieldValue("childPassport", Array.from(event.target.files));
            }
          }}
        />

        <FileUpload
          label="Parent’s Passport Photo"
          name="parentPassport"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
              setFieldValue("parentPassport", Array.from(event.target.files));
            }
          }}
        />

        <FileUpload
          label="Emergency Contact’s Passport Photo"
          name="emergencyContactPassport"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
              setFieldValue(
                "emergencyContactPassport",
                Array.from(event.target.files)
              );
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
                if (event.target.files) {
                  setFieldValue(
                    "pickPersonOnePassport",
                    Array.from(event.target.files)
                  );
                }
              }}
            />
            <FileUpload
              label="2nd Pickup Person’s Person’s Passport"
              name="pickPersonTwoPassport"
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue(
                    "pickPersonTwoPassport",
                    Array.from(event.target.files)
                  );
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
            if (event.target.files) {
              setFieldValue("G6pdReport", Array.from(event.target.files));
            }
          }}
        />
        <FileUpload
          label="Copy of vaccinations"
          name="vaccinations"
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
              setFieldValue("vaccinations", Array.from(event.target.files));
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
