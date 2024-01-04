"use client";

import {
  Form,
  FormControl,
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
import LoadingButton from "./LoadingButton";

export default function AddCommentDialog() {
  const form = useForm<CreateCommentInput>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      companyName: "",
      comment: "",
    },
  });

  async function onSubmit(input: CreateCommentInput) {
    alert(JSON.stringify(input));
  }

  return (
    <div className="max-w-md mx-auto pt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    spellCheck={false}
                    placeholder="Enter Comment"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton type="submit" loading={form.formState.isSubmitting}>
            Submit Comment !
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}
