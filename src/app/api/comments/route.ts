import { createCommentSchema } from "@/lib/validation/comment";
import prisma from "@/lib/db/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parseResult = createCommentSchema.safeParse(body);
    if (!parseResult.success) {
      return Response.json({ error: parseResult.error }, { status: 400 });
    }
    const { companyName, comment } = parseResult.data;

    if (!companyName || !comment) {
      return Response.json(
        { error: "Company Name and Comment are required" },
        { status: 400 }
      );
    }

    const theComment = await prisma.corpComment.create({
      data: {
        companyName,
        comment,
      },
    });
    return Response.json({ comment: theComment }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
