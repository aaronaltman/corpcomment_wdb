"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CreateCommentInput,
  createCommentSchema,
} from "@/lib/validation/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
      companyName: "",
      comment: "",
    },
  });

  const onSubmit = (values: CreateCommentInput) => {
    console.log(values);
    // Handle form submission here (e.g., sending to an API)
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center py-10"
      >
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <label>Company Name</label>
              <FormControl>
                <Input placeholder="...Enter The Company Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <label>Comment</label>
              <FormControl>
                <Textarea
                  className="w-1/2"
                  {...field}
                  placeholder="...Enter Your Comment"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-1/2 pt-2 pb-2 bg-green-700 mt-3 rounded-sm"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
