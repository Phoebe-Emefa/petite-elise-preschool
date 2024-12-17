// PhotographyAuthorization.tsx
import React from 'react';

interface PhotographyAuthorizationProps {
  onNext: () => void;
  onPrevious: () => void;
}

const PhotographyAuthorization: React.FC<PhotographyAuthorizationProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="form-section">
      <h2 className="text-2xl font-semibold mb-4">Photography Authorization</h2>
      <div className="form-group mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          I consent to having my photo taken and used for promotional purposes
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={onPrevious} className="bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
        <button onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
};

export default PhotographyAuthorization;
