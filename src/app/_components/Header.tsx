import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex items-center bg-slate-100 min-h-[200px]">
        <nav className="flex justify-center items-center max-w-6xl mx-auto -mt-[20px] mb-10">
          <h1 className="capitalize text-5xl text-center">
            Corp Comment
            <br />
            <span className="text-2xl text-center">
              Leave your favorite Corp a Comment!
            </span>
          </h1>
        </nav>
      </header>
    </>
  );
}
