import React from "react";
import { useField } from "formik";

interface RadioButtonProps {
  label: string;
  name: string;
  options: { label: string; value: string | boolean}[];
  required?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, options, required }) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label className="block text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="mt-2">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center mr-4">
            <input
              {...field}
              type="radio"
              id={`${name}-${option.value}`}
              value={option.value}
              checked={field.value === option.value}
              className={`form-radio text-green-400 border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none ${
                meta.touched && meta.error ? "border-red-500" : ""
              }`}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {meta.touched && meta.error && (
        <p className="mt-1 text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default RadioButton;
