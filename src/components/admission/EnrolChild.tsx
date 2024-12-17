/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Allergies from './Allergies';
import EmergencyContact from './EmergencyContact';
import Documents from './Documents';
import PhotographyAuthorization from './PhotographyAuthorization';


const EnrolChild = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>({
    childName: '',
    dob: '',
    age: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    whatsappNumber: '',
    houseAddress: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactWhatsapp: '',
    emergencyContactRelationship: '',
    selectedPrograms: [],
    dropOffPickUp: '',
    alternativePickUpNames: '',
    foodAllergies: '',
    allergyDetails: '',
    specialEdConsiderations: '',
    passportPhotos: {
      child: null,
      parent: null,
      emergencyContact: null,
      pickupPerson1: null,
      pickupPerson2: null,
      g6pdReport: null,
      vaccinations: null,
    },
    photographyAuthorization: '',
  });

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <section id="enroll-child" className="py-12 md:py-20 bg-gradient-to-r from-[#ffec89] to-[#a9e2a0] text-[#2d3d3d] animate-fadeIn">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Enroll Your Child</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to get started on your child’s amazing journey with us!
          </p>
        </div>

        <form className="bg-white p-6 md:p-10 rounded-3xl shadow-lg space-y-8">
          {currentStep === 1 && (
            <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}
          {currentStep === 2 && (
            <Allergies formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 3 && (
            <EmergencyContact formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 4 && (
            <Documents formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {currentStep === 5 && (
            <PhotographyAuthorization formData={formData} setFormData={setFormData} prevStep={prevStep} />
          )}
        </form>
      </div>
    </section>
  );
};

export default EnrolChild;
