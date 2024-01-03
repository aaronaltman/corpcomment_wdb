import InputAndList from "./_components/InputAndList";
import prisma from "@/lib/db/prisma";
import SubmitForm from "./_components/SubmitForm";

export default async function Home() {
  const allComments = await prisma.corpComment.findMany({
    where: {
      comment: "hi",
    },
  });
  return (
    <main>
      <InputAndList />
      {JSON.stringify(allComments)}
      <SubmitForm />
    </main>
  );
}
