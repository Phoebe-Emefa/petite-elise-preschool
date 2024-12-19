/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

import { IEnrollChild } from "@/utils/interfaces";
import { FormikProvider, useFormik } from "formik";
import ChildAndGuardianInfo from "./ChildAndGuardianInfo";
import ProgramSelection from "./ProgramSelection";
import ChildHealthConditions from "./ChildHealthConditions";
import Documents from "./Documents";
import Authorization from "./Authorization";
import RadioButton from "../shared/forms/RadioButton";

const EnrolChild = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const totalSteps = 5;

  const formik = useFormik<IEnrollChild>({
    initialValues: {
      isChildAlreadyEnrolled: "No",
      childName: "",
      childDOB: "",
      childAge: "",
      parentName: "",
      parentEmail: "",
      parentPhoneNumber: "",
      parentWhatsappNumber: "",
      address: "",
      emergencyContactName: "",
      emergencyContactPhoneNumber: "",
      emergencyContactWhatsappNumber: "",
      emergencyContactRelationshipToChild: "",
      dropChildOffSelf: "Yes",
      dropOffNames: [{ name: "", relationToChild: "" }],
      hasAllergies: "No",
      allergies: [],
      hasSpecialHealthConditions: "No",
      specialHealthConditions: [],
      childPassport: "",
      parentPassport: "",
      emergencyContactPassport: "",
      pickPersonOnePassport: "",
      pickPersonTwoPassport: "",
      G6pdReport: "",
      vaccinations: "",
      photographUsageConsent: "",
    },
    onSubmit: async (_values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      resetForm();
    },
    enableReinitialize: true,
  });

  const { values, setFieldValue,  handleSubmit } =
    formik;

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <section
      id="enroll-child"
      className="py-12 md:py-20 bg-gradient-to-r from-[#ffec89] to-[#a9e2a0] text-[#2d3d3d] animate-fadeIn"
    >
      <div className="max-w-5xl mx-auto px-2 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Enroll Your Child
          </h2>
          <p className="mt-4 text-md md:text-lg text-gray-600">
            Fill out the form below to get started on your child’s amazing
            journey with us!
          </p>
        </div>
        {/* Check if child is already registered */}
        <FormikProvider value={formik}>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 md:p-10 rounded-3xl shadow-lg "
          >
            <div className="flex  justify-between w-full font-bold">
              {{
                1: "Child and Guardian Information",
                2: "Program Selection and Schedule",
                3: "Health Conditions and Allergies",
                4: "Documents",
              }[currentStep] || "Photograph Usage Authorization"}
              <h5 className="text-xs md:text-base">{`Step ${currentStep} / ${totalSteps}`}</h5>
            </div>
            {currentStep === 1 && (
              <>
                <div className="mt-10">
                  <RadioButton
                    label="Has your child already registered for any program at Petite Elise?"
                    name="isChildAlreadyEnrolled"
                    options={[
                      { label: "No, this is for a new child", value: "No" },
                      {
                        label: "Yes, enrolling for another program",
                        value: "Yes",
                      },
                    ]}
                    required
                  />
                </div>
                <ChildAndGuardianInfo values={values} nextStep={nextStep} />
              </>
            )}
            {currentStep === 2 && (
              <ProgramSelection
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {currentStep === 3 && (
              <ChildHealthConditions
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {currentStep === 4 && (
              <Documents
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
                setFieldValue={setFieldValue}
              />
            )}
            {currentStep === 5 && (
              <Authorization values={values} prevStep={prevStep} />
            )}
          </form>
        </FormikProvider>

     
      </div>
    </section>
  );
};

export default EnrolChild;
