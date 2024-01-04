"use server";
import React from "react";
import prisma from "@/lib/db/prisma";
import Container from "@/app/_components/Container";
import AddCommentDialog from "./_components/AddCommentDialog";

export default async function page() {
  return (
    <div>
      <Container>
        <AddCommentDialog />
        {/* this is where the comments go prisma client to database */}
      </Container>
    </div>
  );
}
