/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type PersonalInfoProps = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
};

const PersonalInfo = ({ formData, setFormData, nextStep }: PersonalInfoProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="childName" className="block text-gray-700">
            Child&apos;s Full Name
          </label>
          <input
            type="text"
            id="childName"
            placeholder="Enter child's full name"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.childName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dob" className="block text-gray-700">
            Child&apos;s Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="age" className="block text-gray-700">
            Child&apos;s Age
          </label>
          <input
            type="number"
            id="age"
            placeholder="Enter child's age"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="parentName" className="block text-gray-700">
            Parent&apos;s Full Name
          </label>
          <input
            type="text"
            id="parentName"
            placeholder="Enter parent's full name"
            className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

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

export default PersonalInfo;
