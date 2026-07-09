import type { Request, Response } from "express";
import { aiRecommendService } from "../services/aiRecommend.service.ts";

export const aiRecommendController = async (req: Request, res: Response) => {
  try {
    const { kidsFriendly, apartmentFriendly } = req.body;

    const result = await aiRecommendService(kidsFriendly, apartmentFriendly);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.error("AI Recommend Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate AI recommendations",
      error: error.message || String(error),
    });
  }
};