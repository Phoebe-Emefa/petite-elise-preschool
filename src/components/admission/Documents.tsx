// Documents.tsx
import React from 'react';

interface DocumentProps {
  onNext: () => void;
  onPrevious: () => void;
}

const Documents: React.FC<DocumentProps> = ({ onNext, onPrevious }) => {
  return (
    <div className="form-section">
      <h2 className="text-2xl font-semibold mb-4">Documents</h2>
      <div className="form-group mb-6">
        <label className="block mb-2">Upload ID Document</label>
        <input type="file" className="border p-2 w-full" />
      </div>
      <div className="form-group mb-6">
        <label className="block mb-2">Upload Medical Form</label>
        <input type="file" className="border p-2 w-full" />
      </div>
      <div className="flex justify-between">
        <button onClick={onPrevious} className="bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
        <button onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
};

export default Documents;
