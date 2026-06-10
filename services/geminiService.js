const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateDigest(tech, business, world) {
  const prompt = `
Summarize these news articles.

Return ONLY valid JSON.

Format:

{
  "technology": [
    {
      "title": "...",
      "summary": "...",
      "url": "..."
    }
  ],
  "business": [
    {
      "title": "...",
      "summary": "...",
      "url": "..."
    }
  ],
  "world": [
    {
      "title": "...",
      "summary": "...",
      "url": "..."
    }
  ]
}

Rules:
- Maximum 3 articles per category.
- Summary should be under 25 words.
- Preserve URLs exactly.
- Return only JSON.

Technology:
${JSON.stringify(tech)}

Business:
${JSON.stringify(business)}

World:
${JSON.stringify(world)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const cleaned = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

module.exports = { generateDigest };