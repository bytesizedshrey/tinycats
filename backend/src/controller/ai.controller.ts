import type { Request, Response } from "express";
import { generateAiResponse } from "../services/gemini.service.ts";

export const askAiController = async (req: Request, res: Response) => {
  try {
    const prompt = req.body.prompt;

    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required and must be a non-empty string.",
      });
    }

    const result = await generateAiResponse(prompt);

    return res.status(200).json({
      message: "Ai responded",
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("AI Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate AI response",
      error: error.message || String(error),
    });
  }
};