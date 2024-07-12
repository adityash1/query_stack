import React from "react";
import NoResult from "./NoResult";
import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "./cards/AnswerCard";
import Pagination from "./Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.answers.length > 0 ? (
          result.answers.map((answer) => (
            <AnswerCard
              key={answer._id}
              _id={answer._id}
              clerkId={clerkId}
              question={answer.question}
              author={answer.author}
              upvotes={answer.upvotes}
              createdAt={answer.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no answers to show"
            description="You have not answered any questions yet"
            link="/"
            linkTitle="Answer a Question"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
};

export default AnswersTab;
