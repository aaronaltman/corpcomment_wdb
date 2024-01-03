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
      <form className="space-y-4 max-w-lg mx-auto pt-12">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
              </FormControl>
              <FormDescription>This is the name of the company</FormDescription>
              <FormMessage />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your comment here..." {...field} />
                    </FormControl>
                    <FormDescription>Add your comment</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
