"use client";

import React, { useState } from "react";
import Container from "./Container";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function InputAndList() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([] as string[]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleComments();
  };

  const handleComments = () => {
    setComments([...comments, comment]);
  };

  return (
    <>
      <Container>
        <CommentInput
          handleOnSubmit={handleOnSubmit}
          comment={comment}
          setComment={setComment}
        />
        <CommentList comments={comments} /> {/* Pass comments here */}
      </Container>
    </>
  );
}
