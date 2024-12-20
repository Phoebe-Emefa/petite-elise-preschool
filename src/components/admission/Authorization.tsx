/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Field } from "formik";

type AuthorizationProps = {
  values: any;
  prevStep: () => void;
  isSubmitting: boolean
};

const Authorization = ({ values, prevStep, isSubmitting }: AuthorizationProps) => {
    console.log("vals", values)
  return (
    <div>
      <div className="mb-10 mt-5">
        <p className="mb-6 font-bold text-gray-700">
          Kindly note that, photographs and videos may be taken at our
          Preschool. By registering your child, you give Petite Elise Preschool
          the permission to use photographs, images and/or video footage of your
          child for promotional reference, for our future kid- friendly programs
        </p>
        <div className="mb-4">
            <div className="flex flex-col gap-6 mt-2">
              <label className="inline-flex items-center mr-6">
                <Field
                  type="radio"
                  name="photographUsageConsent"
                  value="authorize"
                  className="form-radio text-green-400 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <span className="ml-2 text-gray-700">
                  I authorize my child&apos;s photograph or image to be used in any of Petite Elise Preschool promotional reference for kid-friendly events.
                </span>
              </label>
              <label className="inline-flex items-center mr-6">
                <Field
                  type="radio"
                  name="photographUsageConsent"
                  value="do-not-authorize"
                  className="form-radio text-green-400 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <span className="ml-2 text-gray-700">
                  I do not authorize my child&apos;s photograph or image to be used in any of Petite Elise Preschool promotional reference for kid-friendly events.
                </span>
              </label>
              <label className="inline-flex items-center mr-6">
                <Field
                  type="radio"
                  name="photographUsageConsent"
                  value="permit"
                  className="form-radio text-green-400 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <span className="ml-2 text-gray-700">
                  I permit certain features (except for face and full body photos) of my child to be used in any of Petite Elise Preschool promotional reference for kid-friendly events.
                </span>
              </label>
            </div>
         
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
          type="submit"
          className="w-full lg:w-1/3 py-3 bg-gradient-to-r from-[#008C7E] to-[#00B597] text-white font-bold rounded-lg hover:opacity-90 shadow-lg"
        >
        {isSubmitting ? "Loading" : "Enroll Child"}  
        </button>
      </div>
    </div>
  );
};

export default Authorization;
