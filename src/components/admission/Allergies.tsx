/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type AllergiesProps = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  nextStep: () => void;
  prevStep: () => void;
};

const Allergies = ({ formData, setFormData, nextStep, prevStep }: AllergiesProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <div>
        <label htmlFor="foodAllergies" className="block text-gray-700">
          Any food allergies?
        </label>
        <div className="mt-2">
          <label>
            <input
              type="radio"
              name="foodAllergies"
              value="Yes"
              checked={formData.foodAllergies === 'Yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="foodAllergies"
              value="No"
              checked={formData.foodAllergies === 'No'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>

        {formData.foodAllergies === 'Yes' && (
          <div>
            <label htmlFor="allergyDetails" className="block text-gray-700">
              If yes, kindly state the allergy.
            </label>
            <textarea
              id="allergyDetails"
              rows={4}
              placeholder="Describe the allergy"
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              value={formData.allergyDetails}
              onChange={handleChange}
            ></textarea>
          </div>
        )}
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

export default Allergies;
