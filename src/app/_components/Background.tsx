import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-slate-900 min-h-screen">{children}</div>;
}
