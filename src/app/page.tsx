"use client"
import Image from "next/image";
import React, { useState } from 'react'
import FileUploadBox from '@/app/components/drag_drop'




export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        
        {/* Gym Planner Section */}
        <section className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Gym Planner</h2>
          <p className="text-lg mb-2">Your personalized workout plan to help you achieve your fitness goals.</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <h3 className="font-semibold">Workout Routine</h3>
              <button className="text-sm text-blue-500 hover:underline">Edit Routine</button>
            </div>
            <ul className="list-inside list-disc pl-4 text-sm">
              <li>Monday: Chest and Triceps</li>
              <li>Tuesday: Back and Biceps</li>
              <li>Wednesday: Rest Day</li>
              <li>Thursday: Shoulders and Abs</li>
              <li>Friday: Legs</li>
              <li>Saturday: Cardio</li>
              <li>Sunday: Rest Day</li>
            </ul>
          </div>
        </section>

       

        {/* File Upload Box Component */}
        <FileUploadBox /> {/* Insert the reusable component here */}

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        
      </main>
      
    </div>
  );
}

