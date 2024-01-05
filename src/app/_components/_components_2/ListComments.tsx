"use server";

import React from "react";
import SingleListItem from "./SingleListItem";
import prisma from "@/lib/db/prisma";

export default async function ListComments() {
  const allComments = await prisma.corpComment.findMany();

  return (
    <div className="flex flex-col justify-center items-center mt-10 py-10 bg-slate-800 mb-10 shadow-xl rounded-lg">
      <h1 className="text-white text-4xl py-2 mb-6">Corporate Comments</h1>
      <ul className="">
        {allComments.map((corpComment) => (
          <SingleListItem key={corpComment.id} corpComment={corpComment} />
        ))}
        {allComments.length == 0 && (
          <div className="text-white text-4xl py-2 mb-6">
            No Comments - please add a comment
          </div>
        )}
      </ul>
    </div>
  );
}
