/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type EmergencyContactProps = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
  prevStep: () => void;
};

const EmergencyContact = ({ formData, setFormData, nextStep, prevStep }: EmergencyContactProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="emergencyContactName" className="block text-gray-700">
            Emergency Contact Full Name
          </label>
          <input
            type="text"
            id="emergencyContactName"
            placeholder="Enter emergency contact's name"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.emergencyContactName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="emergencyContactPhone" className="block text-gray-700">
            Emergency Contact&apos;s Phone Number
          </label>
          <input
            type="tel"
            id="emergencyContactPhone"
            placeholder="Enter emergency contact's phone number"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="emergencyContactWhatsapp" className="block text-gray-700">
            Emergency Contact&apos;s Whatsapp Number (if different)
          </label>
          <input
            type="tel"
            id="emergencyContactWhatsapp"
            placeholder="Enter emergency contact's Whatsapp number"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.emergencyContactWhatsapp}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="emergencyContactRelationship" className="block text-gray-700">
            Emergency Contact&apos;s Relationship with Child
          </label>
          <input
            type="text"
            id="emergencyContactRelationship"
            placeholder="Enter emergency contact's relationship"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.emergencyContactRelationship}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button
        type="button"
        onClick={prevStep}
        className="w-full py-3 bg-gray-400 text-white font-bold rounded-lg hover:opacity-90 shadow-lg mb-4"
      >
        Back
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="w-full py-3 bg-gradient-to-r from-[#008C7E] to-[#00B597] text-white font-bold rounded-lg hover:opacity-90 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default EmergencyContact;
