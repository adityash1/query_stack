import { Question } from "@/components/forms/Question";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";

const Page = async () => {
  // const { userId } = auth;

  const userId = "12345";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);

  return (
    <>
      <h1 className="h1-bold text-dark100_light900"> Ask a public question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </>
  );
};

export default Page;
