/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import moment from "moment"
import { IEnrollChild } from "@/utils/interfaces";
import { FormikProvider, useFormik } from "formik";
import ChildAndGuardianInfo from "./ChildAndGuardianInfo";
import ProgramSelection from "./ProgramSelection";
import ChildHealthConditions from "./ChildHealthConditions";
import Documents from "./Documents";
import Authorization from "./Authorization";
import { database, storage } from "@/app/appwrite"; // Import your Appwrite client
import { ID, Query } from "appwrite";
import ExistingInfoCheck from "./ExistingInfoCheck";

const EnrolChild = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isChildAlreadyEnrolled, setIsChildAlreadyEnrolled] = useState<string>("")
  const [existingData, setExistingData] = useState<any>(null);
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  const [fetchDataError, setfetchDataError] = useState<string | null>(null);
  const [selectedChild, setSelectedChild] = useState<any>(null);

  const totalSteps = 6;

  console.log("selectedChild", selectedChild)

  const fetchAllDocuments = async (
    parentEmail: string,
    parentPhoneNumber: string
  ) => {
    try {
      setFetchingData(true);
      setfetchDataError(null);
      setSelectedChild(null)

      // Query documents by parentEmail and parentPhoneNumber
      const response = await database.listDocuments(
        "6764ab1b00245cf492f1", // Replace with your Appwrite database ID
        "6764ab390006a8717208", // Replace with your Appwrite collection ID
        [
          Query.equal("parentEmail", parentEmail),
          Query.equal("parentPhoneNumber", parentPhoneNumber),
        ]
      );

      setExistingData(response?.documents); // Store the fetched documents
    } catch (err) {
      console.error("Error fetching documents:", err);
      setfetchDataError("Failed to fetch documents");
    } finally {
      setFetchingData(false);
    }
  };

  console.log("existingData", existingData);

  // Function to upload a single file to Appwrite Storage
  const uploadFileToAppwrite = async (file: File) => {
    try {
      const response = await storage.createFile(
        "67649552001d1f5f31ad", // Replace with your Appwrite bucket ID
        ID.unique(),
        file
      );
      // Get the file URL
      return storage.getFileView("67649552001d1f5f31ad", response.$id);
    } catch (error) {
      console.error("Appwrite File Upload Error:", error);
      throw new Error("Failed to upload file to Appwrite");
    }
  };

  const formik = useFormik<IEnrollChild>({
    initialValues: {
      childName: selectedChild?.childName || "",
      childDOB: selectedChild?.childDOB 
    ? moment(selectedChild.childDOB).format("YYYY-MM-DD") 
    : "",
      childAge: selectedChild?.childAge ||  "",
      parentName: selectedChild?.parentName || "",
      parentEmail: selectedChild?.parentEmail || "",
      parentPhoneNumber: selectedChild?.parentPhoneNumber || "",
      parentWhatsappNumber: selectedChild?.parentWhatsappNumber || "",
      address: selectedChild?.address || "",
      emergencyContactName: selectedChild?.emergencyContactName || "",
      emergencyContactPhoneNumber: selectedChild?.emergencyContactPhoneNumber || "",
      emergencyContactWhatsappNumber: selectedChild?.emergencyContactWhatsappNumber || "",
      emergencyContactRelationshipToChild: selectedChild?.emergencyContactRelationshipToChild || "",
      dropChildOffSelf: selectedChild?.dropChildOffSelf || "",
      dropOffNames: selectedChild?.dropOffPersonOneName
      ? [
          {
            name: selectedChild.dropOffPersonOneName || "",
            relationToChild: selectedChild.dropOffPersonOneRelationToChild || "",
          },
          {
            name: selectedChild.dropOffPersonTwoName || "",
            relationToChild: selectedChild.dropOffPersonTwoRelationToChild || "",
          },
        ]
      : [{ name: "", relationToChild: "" }],
      programs: selectedChild?.programs || [],
      dayCareSchedule: selectedChild?.dayCareSchedule || "",
      hasAllergies:  selectedChild?.hasAllergies || "",
      allergies: selectedChild?.allergies || [],
      hasSpecialHealthConditions: selectedChild?.hasSpecialHealthConditions || "",
      specialHealthConditions: selectedChild?.specialHealthConditions || [],
      childPassport: selectedChild?.childPassport || "",
      parentPassport: selectedChild?.parentPassport || "",
      emergencyContactPassport: selectedChild?.emergencyContactPassport ||  "",
      pickPersonOnePassport: selectedChild?.pickPersonOnePassport ||  "",
      pickPersonTwoPassport: selectedChild?.pickPersonTwoPassport ||  "",
      G6pdReport: selectedChild?.G6pdReport || "",
      vaccinations: selectedChild?.vaccinations || "",
      photographUsageConsent: selectedChild?.photographUsageConsent || "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const fileFields: (keyof IEnrollChild)[] = [
          "childPassport",
          "parentPassport",
          "emergencyContactPassport",
          "pickPersonOnePassport",
          "pickPersonTwoPassport",
          "G6pdReport",
          "vaccinations",
        ];

        const updatedValues: IEnrollChild = { ...values };

        // Process file fields
        for (const field of fileFields) {
          const file = values[field];
          if (file instanceof File) {
            const uploadedUrl = await uploadFileToAppwrite(file);
            (updatedValues[field] as any) = uploadedUrl; // Ensure it's a string (URL)
          }
        }

        // Map `dropOffNames` to individual fields
        if (values.dropOffNames && values.dropOffNames.length > 0) {
          const [personOne, personTwo] = values.dropOffNames;
          updatedValues.dropOffPersonOneName = personOne?.name || "";
          updatedValues.dropOffPersonOneRelationToChild =
            personOne?.relationToChild || "";
          updatedValues.dropOffPersonTwoName = personTwo?.name || "";
          updatedValues.dropOffPersonTwoRelationToChild =
            personTwo?.relationToChild || "";
        }

        // Remove `dropOffNames` field before submission
        delete updatedValues.dropOffNames;

        console.log("Before Submission:", updatedValues);

        // Submit the updated data to the database
        const response = await database.createDocument(
          "6764ab1b00245cf492f1", // Replace with your Appwrite database ID
          "6764ab390006a8717208", // Replace with your Appwrite collection ID
          ID.unique(),
          updatedValues
        );

        console.log("Document created successfully:", response);
      } catch (error) {
        console.error("Error during submission:", error);
      } finally {
        setSubmitting(false);
      }
    },
    enableReinitialize: true,
  });

  const { values, setFieldValue, handleSubmit, isSubmitting } = formik;

  console.log("uivals", values);

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
        <FormikProvider value={formik}>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 md:p-10 rounded-3xl shadow-lg"
          >
            <div className="flex justify-between w-full font-bold">
              {currentStep === 1
                ? "Existing Child Check"
                : currentStep === 2
                  ? "Child and Guardian Information"
                  : currentStep === 3
                    ? "Program Selection and Schedule"
                    : currentStep === 4
                      ? "Health Conditions and Allergies"
                      : currentStep === 5
                        ? "Documents"
                        : "Photograph Usage Authorization"}
              <h5 className="text-xs md:text-base">{`Step ${currentStep} / ${totalSteps}`}</h5>
            </div>
            {currentStep === 1 && (
              <ExistingInfoCheck
              isChildAlreadyEnrolled={isChildAlreadyEnrolled}
              setIsChildAlreadyEnrolled={setIsChildAlreadyEnrolled}
                values={values}
                fetchAllDocuments={fetchAllDocuments}
                fetchingData={fetchingData}
                existingData={existingData}
                selectedChild={selectedChild}
                setSelectedChild={setSelectedChild}
                setExistingData={setExistingData}
                nextStep={nextStep}
              />
            )}
            {currentStep === 2 && (
              <ChildAndGuardianInfo values={values} prevStep={prevStep} nextStep={nextStep} />
            )}
            {currentStep === 3 && (
              <ProgramSelection
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
                setFieldValue={setFieldValue}
              />
            )}
            {currentStep === 4 && (
              <ChildHealthConditions
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {currentStep === 5 && (
              <Documents
                values={values}
                nextStep={nextStep}
                prevStep={prevStep}
                setFieldValue={setFieldValue}
              />
            )}
            {currentStep === 6 && (
              <Authorization
                values={values}
                prevStep={prevStep}
                isSubmitting={isSubmitting}
              />
            )}
          </form>
        </FormikProvider>
      </div>
    </section>
  );
};

export default EnrolChild;
