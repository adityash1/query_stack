import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";
import { getQuestionsByTagID } from "@/lib/actions/tag.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const result = await getQuestionsByTagID({ tagId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tagged Questions...</h1>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.questions.length > 0 ? (
          result.questions.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No Questions Found"
            description="It looks like there are no questions having this tag id."
            link="ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  );
};

export default Page;
