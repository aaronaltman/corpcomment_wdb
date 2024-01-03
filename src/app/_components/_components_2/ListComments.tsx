import React from "react";
import SingleListItem from "./SingleListItem";

export default function ListComments() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 py-10 bg-slate-800 mb-10 shadow-xl rounded-lg">
      <h1 className="text-white text-4xl py-2 mb-6">Corporate Comments</h1>
      <ul className="">
        <li className="border border-slate-500/10">
          <SingleListItem />
        </li>
        <li className="border border-slate-500/10">
          <SingleListItem />
        </li>
        <li className="border border-slate-500/10">
          <SingleListItem />
        </li>
        <li className="border border-slate-500/10">
          <SingleListItem />
        </li>
      </ul>
    </div>
  );
}
