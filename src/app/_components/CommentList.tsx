import React from "react";

export default function CommentList({ comment }: { comment: string }) {
  return (
    <ul className="flex flex-col justify-center items-center">
      <li>{comment}</li>
      <li>CommentList</li>
      <li>CommentList</li>
      <li>CommentList</li>
      <li>CommentList</li>
      <li>CommentList</li>
    </ul>
  );
}
