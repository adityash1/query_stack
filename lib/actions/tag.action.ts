"use server";

import {
  GetAllTagsParams,
  GetQuestionsByTagIdParams,
  GetTopInteractedTagsParams,
} from "@/lib/actions/shared.types";
import { connectToDatabase } from "@/lib/mongoose";
import User from "@/database/user.model";
import Tag, { ITag } from "@/database/tag.model";
import Question from "@/database/question.model";
import { FilterQuery } from "mongoose";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    await connectToDatabase();
    const { userId } = params;

    const user = User.findById({ userId });
    if (!user) throw new Error("User not found");

    // TODO:  Find interactions for the user and group by tags

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    await connectToDatabase();
    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getQuestionsByTagID(params: GetQuestionsByTagIdParams) {
  try {
    await connectToDatabase();

    const { tagId, page = 1, pageSize = 10, searchQuery } = params;

    const tagFilter: FilterQuery<ITag> = { _id: tagId };

    const tag = await Tag.findOne(tagFilter).populate({
      path: "questions",
      model: Question,
      match: searchQuery
        ? {
            title: { $regex: searchQuery, $options: "i" },
          }
        : {},
      options: {
        sort: { createdAt: -1 },
      },
      populate: [
        {
          path: "tags",
          model: Tag,
          select: "_id name",
        },
        {
          path: "author",
          model: User,
          select: "_id clerkId name picture",
        },
      ],
    });

    if (!tag) {
      throw new Error("Tag not found");
    }

    const questions = tag.questions;

    return { tagTitle: tag.name, questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTopPopularTags() {
  try {
    const topTags = await Tag.aggregate([
      {
        $project: {
          name: 1,
          totalQuestions: { $size: "$questions" },
          totalFollowers: { $size: "$followers" },
          totalScore: {
            $add: [{ $size: "$questions" }, { $size: "$followers" }],
          },
        },
      },
      {
        $sort: { totalScore: -1 },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          name: 1,
          totalQuestions: 1,
          totalFollowers: 1,
        },
      },
    ]);

    return topTags;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
