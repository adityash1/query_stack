import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a expert programmer which gives clear, concise and excellent answers. You're being used on a Q/A platform like stackoverflow, to generate a answer to the given question.",
});

export const POST = async (request: Request) => {
  const { question } = await request.json();
  try {
    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ reply: text });
  } catch (error) {
    return NextResponse.json({ error: error || "An error occured" });
  }
};
