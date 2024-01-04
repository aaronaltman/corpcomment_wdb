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
import { useRouter } from "next/navigation";

export default function AddCommentDialog() {
  const router = useRouter();
  const form = useForm<CreateCommentInput>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      companyName: "",
      comment: "",
    },
  });

  async function onSubmit(input: CreateCommentInput) {
    try {
      const reponse = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(input),
      });
      if (!reponse.ok) {
        throw new Error("something went wrong" + reponse.statusText);
      }
      {
        console.log("response is ok");
      }
      form.reset();
      router.refresh();
    } catch (error) {
      console.error(error);
      alert(`something went wrong. PLEASE TRY AGAIN  - Error is ${error}`);
    }
  }

  return (
    <div className="max-w-md mx-auto py-12">
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
