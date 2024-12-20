import React, { useState, useRef, useEffect } from "react";

interface FileUploadProps {
  label: string;
  name: string;
  required?: boolean;
  initialValue?: string;  // Optional prop for initial file URL
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  required = false,
  initialValue = "",  // Default to empty string if no initial value
  onChange,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string>(initialValue);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Set the fileUrl if there's an initial value provided
  useEffect(() => {
    if (initialValue) {
      setFileUrl(initialValue);
    }
  }, [initialValue]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles[0]) {
      const selectedFile = selectedFiles[0];
      setFile(selectedFile);
      setFileUrl("");  // Clear file URL when a new file is selected

      // Call the parent onChange handler if provided
      if (onChange) {
        onChange(event);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileUrl("");  // Clear the file URL when the file is removed

    // Clear input value
    if (fileInputRef.current) {
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
          onChange={handleFileChange}
          ref={fileInputRef}
          className="absolute opacity-0 cursor-pointer w-full h-full z-10"
        />
        {/* Custom UI */}
        <div className="mt-2 flex items-center space-x-4 w-full text-gray-700 border rounded cursor-pointer p-2 bg-gray-100">
          <span className="text-primary font-bold cursor-pointer">Select File</span>
          <span className="text-sm text-gray-500">
            {file ? file.name : fileUrl ? (
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {fileUrl}
              </a>
            ) : "No file selected"}
          </span>
        </div>
        {/* Show the selected file name and remove button inside the input */}
        {file && (
          <div className="mt-2 flex items-center space-x-2 w-full text-gray-700">
            <span className="text-sm text-gray-500 truncate">{file.name}</span>
            <button
              type="button"
              className="text-red-500 text-sm"
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
