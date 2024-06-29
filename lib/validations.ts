import * as z from "zod";

export const QuestionSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Question must be at least 2 characters.",
    })
    .max(130),
  explanation: z.string().min(5),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(100),
});

export const ProfileSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Full name must be at least 3 characters",
    })
    .max(50, {
      message: "Full name must be at less than 50 characters",
    }),
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters",
    })
    .max(50, {
      message: "Username must be at less than 50 characters",
    }),
  portfolioWebsite: z
    .string()
    .url({
      message: "portfolio website must be a url",
    })
    .optional()
    .or(z.literal("")),
  location: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters",
    })
    .max(50, {
      message: "Location name must be less than 50 characters",
    }),
  bio: z.string().max(200, {
    message: "Bio should be less than or equal to 200 characters",
  }),
});
