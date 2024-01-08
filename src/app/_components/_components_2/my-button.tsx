"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function MyButton() {
  const [upVote, setUpVote] = useState(Math.floor(Math.random() * 100));

  const IncreaseUpvote = (e: any) => {
    e.preventDefault();
    setUpVote(upVote + 1);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Link onClick={IncreaseUpvote} href="#">
        <Button className="flex gap-3">
          <p>{upVote}</p>
          <ArrowUpIcon size={20} />
        </Button>
      </Link>
    </div>
  );
}
