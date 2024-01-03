import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200 max-w-6xl mx-auto min-h-[400px] -mt-[60px] rounded-md">
      {children}
    </div>
  );
}
