import InputAndList from "./_components/InputAndList";
import prisma from "@/lib/db/prisma";
import ListContainer from "./_components/_components_2/ListContainer";

export default async function Home() {
  const allComments = await prisma.corpComment.findMany({
    where: {
      comment: "hi",
    },
  });
  return (
    <main>
      <InputAndList />
      <ListContainer />
      {JSON.stringify(allComments)}
    </main>
  );
}
