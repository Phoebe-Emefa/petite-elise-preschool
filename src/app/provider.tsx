"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Progress bar for page transitions */}
      <ProgressBar height="4px" color="#eab308" shallowRouting />
      {/* Render children */}
      {children}
    </>
  );
};

export default Provider;
