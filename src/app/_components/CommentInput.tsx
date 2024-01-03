"use client";

type CommentInputProps = {
  comment: string;
  setComment: (comment: string) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function CommentInput({
  comment,
  setComment,
  handleOnSubmit,
}: CommentInputProps) {
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col justify-center items-center py-10"
    >
      <textarea
        onChange={(e) => {
          setComment(e.target.value);
        }}
        className="w-1/2"
        typeof="text"
        required
        value={comment}
      />
      <button
        className=" w-1/2 pt-2 pb-2 bg-green-700 mt-3 rounded-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
