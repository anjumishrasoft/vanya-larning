
import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosisResult, CarePlan, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeDentalImage = async (base64Image: string, language: Language): Promise<DiagnosisResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
        { text: `Analyze this dental image (X-ray or photo) and provide a professional diagnosis summary in ${language}. Detect cavities, gum issues, or misalignment.` }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          condition: { type: Type.STRING, description: "Primary observed condition" },
          severity: { type: Type.STRING, enum: ['low', 'medium', 'high'], description: "Severity of the condition" },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of recommended actions"
          },
          confidence: { type: Type.NUMBER, description: "Confidence score between 0 and 1" }
        },
        required: ["condition", "severity", "recommendations", "confidence"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateCarePlan = async (patientHistory: string, language: Language): Promise<CarePlan> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on this patient history: "${patientHistory}", generate a personalized dental care plan in ${language}.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          dailyRoutine: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          dietaryAdvice: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          followUp: { type: Type.STRING }
        },
        required: ["dailyRoutine", "dietaryAdvice", "followUp"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const getAIConsultationResponse = async (query: string, language: Language): Promise<string> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are a supportive dental assistant. Answer the following patient query in ${language}: "${query}"`,
    config: {
      systemInstruction: "Keep answers friendly, professional, and empathetic. Always advise seeing a dentist for definitive diagnosis."
    }
  });

  return response.text || "I'm sorry, I couldn't process that.";
};
