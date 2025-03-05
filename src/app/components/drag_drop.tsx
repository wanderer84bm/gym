// components/FileUploadBox.tsx

import React, { useState, useRef } from 'react';

const FileUploadBox = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault(); //stops file from opening in browser
    setDragOver(false); //drag has ended
    const droppedFile = e.dataTransfer.files[0]; //we get first file that was dropped
    setFile(droppedFile); 
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); //allow drop to happen
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false); //file leaves the box 
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click event
    }
  };

  return (//visual stuff
    <section
      className={`w-full sm:w-2/3 p-6 mt-8 border-2 border-dashed ${dragOver ? 'border-blue-500' : 'border-gray-300'} rounded-lg`}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold mb-4">Upload Text File</h3>
      <p className="text-sm mb-4">Drag and drop your file here, or click to select a file.</p>
      <div className="flex justify-center items-center border p-8 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        {file ? (
          <div className="text-center">
            <p className="font-semibold">File: {file.name}</p>
            <p className="text-sm text-gray-500">Size: {(file.size / 1024).toFixed(2)} KB</p>
          </div>
        ) : (
          <p className="text-gray-500">Drag a file or click to select</p>
        )}
      </div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect} // Handle file selection
      />
    </section>
  );
};

export default FileUploadBox;
