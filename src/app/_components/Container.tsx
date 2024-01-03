import React from "react";
import SubmitForm from "./SubmitForm";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200 max-w-6xl mx-auto min-h-[400px] -mt-[60px] rounded-md">
      {children}
    </div>
  );
}
