
import { GoogleGenAI } from "@google/genai";

// Fix: Always use process.env.API_KEY directly as per @google/genai guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBirthdayWish = async (name: string, age: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `写一段给我的朋友“${name}”的${age}岁生日祝福。要求：语气温馨、充满希望，适合19岁的少女，包含对未来的美好憧憬。字数在100字以内。`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    return response.text || "祝你生日快乐，愿你每一天都充满阳光！";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "祝你19岁生日快乐！愿你眼里有光，心中有爱，活成自己喜欢的样子。";
  }
};
