const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function summarizeNews(newsText) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
      Summarize these news articles.
      Organize them by category.
      Keep the email under 500 words.

      ${newsText}
    `,
  });

  return response.text;
}

module.exports = { summarizeNews };