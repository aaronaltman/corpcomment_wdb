"use server";

import { corpComment as c } from "@prisma/client";
import { ArrowUpIcon } from "lucide-react";
import React from "react";
import prisma from "@/lib/db/prisma";

type SingleListItemProps = {
  corpComment: c;
  key: string;
};

export default async function SingleListItem({
  corpComment,
  key,
}: SingleListItemProps) {
  const allComments = await prisma.corpComment.findMany();
  let upVoteCount = 0;
  const badgeLetter = corpComment?.companyName?.charAt(0).toUpperCase();
  return (
    <>
      <div className="flex flex-row my-2 bg-slate-100 gap-12 py-5 px-10 max-w-4xl rounded-md hover:scale-105 transition-all hover:my-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>{upVoteCount}</p>
          <ArrowUpIcon size={20} />
        </div>
        <div>{badgeLetter}</div>
        <div>
          <div>{corpComment?.companyName}</div>
          <div>{corpComment?.comment}</div>
        </div>
      </div>
    </>
  );
}
