import React from "react";

export default function CommentList({ comments }: { comments: string[] }) {
  return (
    <ul className="flex flex-col justify-center items-center">
      {comments.map(
        (
          comment: string,
          index: number // Use comments here
        ) => (
          <li key={index} className="w-1/2 bg-slate-200 rounded-sm mt-3">
            <p> {comment}</p>
          </li>
        )
      )}
    </ul>
  );
}
