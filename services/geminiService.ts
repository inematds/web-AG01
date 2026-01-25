
// MODO DEMO - API desativada temporariamente
// Para ativar: adicione VITE_GEMINI_API_KEY no Vercel e descomente o código original

export const analyzeConversion = async (urlOrDescription: string) => {
  // Simula delay de processamento
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Retorna dados de demonstração
  return {
    score: 78,
    critique: `Analise baseada em: "${urlOrDescription.substring(0, 50)}..." - Este e um resultado de demonstracao. A funcionalidade completa com IA sera ativada em breve. Seu interesse em IA e Robotica mostra que voce esta no caminho certo para o futuro!`,
    recommendations: [
      "Comece com os jogos educativos da plataforma EAI para construir uma base solida",
      "Participe da comunidade INEMA.VIP para networking e troca de experiencias",
      "Considere uma mentoria personalizada para acelerar seu aprendizado"
    ]
  };
};

/* CÓDIGO ORIGINAL - Descomente quando tiver a API key configurada
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeConversion = async (urlOrDescription: string) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const prompt = `
    Act as a world-class conversion rate optimization (CRO) expert.
    Analyze the following website context or URL: "${urlOrDescription}".
    Provide a professional conversion critique in JSON format.
    Include a conversion score (0-100), a short summary critique, and 3 actionable recommendations.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            critique: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["score", "critique", "recommendations"]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
*/