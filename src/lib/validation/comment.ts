import * as z from "zod";

export const createCommentSchema = z.object({
  companyName: z.string().min(1).max(500).optional(),
  comment: z.string().min(1).max(500),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
