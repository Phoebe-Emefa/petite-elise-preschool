import React, { useState, useRef } from "react";

interface FileUploadProps {
  label: string;
  name: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, name, required = false, onChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      // Call the parent onChange handler if provided
      if (onChange) {
        onChange(event);
      }
    }
  };

  const handleRemoveFile = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);

    // Clear input value if no files are selected
    if (updatedFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative">
        {/* File Input */}
        <input
          type="file"
          id={name}
          name={name}
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          className="absolute opacity-0 cursor-pointer w-full h-full z-10"
        />
        {/* Custom UI */}
        <div className="mt-2 flex items-center space-x-4 w-full text-gray-700 border rounded cursor-pointer p-2 bg-gray-100">
          <span className="text-primary font-bold cursor-pointer">Select File</span>
          <span className="text-sm text-gray-500">
            {files.length > 0
              ? `${files.length} file(s) selected`
              : "No files selected"}
          </span>
        </div>
      </div>
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 border rounded bg-gray-100"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                className="text-red-500"
                onClick={() => handleRemoveFile(file.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
