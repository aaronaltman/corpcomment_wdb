import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 max-w-6xl mx-auto min-h-[400px] -mt-[60px] rounded-lg shadow-xl">
      {children}
    </div>
  );
}
