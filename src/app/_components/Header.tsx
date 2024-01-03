import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center bg-slate-100 min-h-[200px]">
        <nav className="flex justify-center items-center max-w-6xl mx-auto -mt-[10px]">
          <h1 className="capitalize text-3xl">
            Corp Comment -<br />
            <span className="text-2xl">
              Leave your favorite Corp a Comment!
            </span>
          </h1>
        </nav>
      </header>
    </>
  );
}
