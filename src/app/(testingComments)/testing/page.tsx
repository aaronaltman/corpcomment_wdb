"use server";
import React from "react";
import prisma from "@/lib/db/prisma";
import Container from "@/app/_components/Container";
import AddCommentDialog from "./_components/AddCommentDialog";

export default async function page() {
  const allComments = await prisma.corpComment.findMany({
    where: {
      companyName: "",
    },
  });
  return (
    <div>
      <Container>
        <AddCommentDialog />
        {JSON.stringify(allComments)}
      </Container>
    </div>
  );
}
