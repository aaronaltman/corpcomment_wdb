"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CreateCommentInput,
  createCommentSchema,
} from "@/lib/validation/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AddCommentDialog from "../(testingComments)/testing/_components/AddCommentDialog";

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
  const form = useForm<CreateCommentInput>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      companyName: "test",
      comment: "",
    },
  });

  const onSubmit = (values: CreateCommentInput) => {
    console.log(values);
    // Handle form submission here (e.g., sending to an API)
  };
  return (
    <>
      <AddCommentDialog />
    </>
  );
}
