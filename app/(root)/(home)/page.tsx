"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: [
      {
        _id: "1",
        name: "python",
      },
      {
        _id: "2",
        name: "sql",
      },
    ],
    author: {
      _id: "1",
      name: "Aditya Sharma",
      picture: "",
    },
    upvotes: 10,
    views: 10000,
    answers: [{}],
    createdAt: new Date("2023-11-08T12:00:00.000Z"),
  },
  {
    _id: "2",
    title:
      "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
    tags: [
      {
        _id: "1",
        name: "html",
      },
      {
        _id: "2",
        name: "javascript",
      },
    ],
    author: {
      _id: "2",
      name: "Vasundhra Sharma",
      picture: "",
    },
    upvotes: 5,
    views: 200000,
    answers: [{}],
    createdAt: new Date("2023-11-07T12:00:00.000Z"),
  },
  {
    _id: "3",
    title:
      "JavaScript validation for a form stops the form data from being submitted to mysql database",
    tags: [
      {
        _id: "1",
        name: "javascript",
      },
      {
        _id: "2",
        name: "sql",
      },
    ],
    author: {
      _id: "3",
      name: "YashVardhan Sharma",
      picture: "",
    },
    upvotes: 8,
    views: 7000000,
    answers: [{}],
    createdAt: new Date("2023-03-07T12:00:00.000Z"),
  },
];

const Home = async () => {
  // const result = await getQuestions();

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row  sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="max:sm:w-full flex justify-end">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
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
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
