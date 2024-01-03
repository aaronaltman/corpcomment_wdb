import React from "react";
import Footer from "./Footer";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col justify-between">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
