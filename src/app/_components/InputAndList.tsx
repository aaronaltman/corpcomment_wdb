"use client";

import React, { useState } from "react";
import Container from "./Container";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function InputAndList() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComment(comment);
  };

  const handleComments = [...comments, comment];

  return (
    <>
      <Container>
        <CommentInput
          handleOnSubmit={handleOnSubmit}
          comment={comment}
          setComment={setComment}
        />
        <CommentList comment={comment} />
      </Container>
    </>
  );
}
