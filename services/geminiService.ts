
import { GoogleGenAI, Type } from "@google/genai";
import { ChurnPredictionResponse, CustomerRecord } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const predictChurn = async (customer: Partial<CustomerRecord>): Promise<ChurnPredictionResponse> => {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are a professional Data Scientist specializing in Telecom Churn Prediction.
    Based on the following historical dataset trends:
    - High churn correlates with: Low satisfaction (1 or 2), poor network, high data usage with high cost, relocations.
    - Low churn correlates with: High satisfaction (4 or 5), long tenure, bundles with unlimited data.

    Predict the churn probability for this new customer profile:
    Full Name: ${customer.fullName}
    Age: ${customer.age}
    State: ${customer.state}
    Device: ${customer.device}
    Satisfaction Rate: ${customer.satisfactionRate}
    Tenure: ${customer.tenureMonths} months
    Subscription Plan: ${customer.subscriptionPlan}
    Total Revenue: ${customer.totalRevenue}
    Data Usage: ${customer.dataUsage} GB

    Return a structured JSON analysis.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          churnProbability: { type: Type.NUMBER, description: "Probability from 0 to 1" },
          riskLevel: { type: Type.STRING, description: "Low, Medium, or High" },
          keyRiskFactors: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          recommendation: { type: Type.STRING },
          analysis: { type: Type.STRING }
        },
        required: ["churnProbability", "riskLevel", "keyRiskFactors", "recommendation", "analysis"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const getDatasetInsights = async (datasetSummary: string): Promise<string> => {
  const model = "gemini-3-flash-preview";
  const prompt = `
    Analyze this summary of telecom customer data and provide 3 key business insights 
    specifically regarding how to reduce churn.
    
    Data Summary:
    ${datasetSummary}
    
    Focus on trends related to age, location (states), and plan pricing.
  `;
  
  const response = await ai.models.generateContent({
    model,
    contents: prompt
  });
  
  return response.text;
};
