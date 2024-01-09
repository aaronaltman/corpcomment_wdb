"use server";

import { corpComment as c } from "@prisma/client";
import { ArrowUpIcon } from "lucide-react";
import React from "react";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MyButton from "./my-button";

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
        <MyButton />
        <p className="flex justify-center items-center text-xl bg-slate-200 border border-black/20 p-4">
          {badgeLetter}
        </p>
        <div>
          <p className="font-bold text-lg">{corpComment?.companyName}</p>
          <p className="text-base">{corpComment?.comment}</p>
        </div>
      </div>
    </>
  );
}
