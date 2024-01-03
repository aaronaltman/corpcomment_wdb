import React from "react";
import SingleListItem from "./SingleListItem";

export default function ListComments() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 py-10 bg-slate-800">
      <h1 className="text-white text-4xl py-2">Corporate Comments</h1>
      <ul className="">
        <li>
          <SingleListItem />
        </li>
      </ul>
    </div>
  );
}
