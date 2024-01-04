import * as z from "zod";

export const createCommentSchema = z.object({
  companyName: z
    .string()
    .min(1, { message: "Company Name is required" })
    .max(200),
  comment: z.string().min(1, { message: "Comment is Required" }).max(1500),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
