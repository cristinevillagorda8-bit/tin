import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineStatement = async (draft: string): Promise<string> => {
  if (!draft || draft.length < 10) {
    throw new Error("Please provide a longer draft to refine.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an admissions officer helper for Colegio de Montalban. 
      Rewrite the following draft student statement of purpose to be more professional, 
      academic, and persuasive, but keep it concise (under 150 words).
      
      Draft: "${draft}"`,
    });

    return response.text || "Could not generate refinement.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to AI assistant.");
  }
};
