const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateDigest(tech, business, world) {
  const prompt = `
    You are an expert news editor creating a daily newsletter.

    Return ONLY valid JSON.

    Format:

      {
        "topStories": [
          {
            "title": "...",
            "summary": "...",
            "url": "..."
          }
        ],

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

    TOP STORIES:
    - Select exaclty 3 most important stories from ALL articles.
    - They may come from any category.
    - Prioritize global impact, technological breakthroughs, major business events, wars, elections, diplomacy, and significant world events.
    - These should represent the most important developments of the day.

    TECHNOLOGY:
    - Select exaclty 6 most important stories.
    - Prioritize AI, cybersecurity, semiconductors, cloud computing, major product launches, startups, and big tech companies.
    - Ignore clickbait and duplicate stories.

    BUSINESS:
    - Select exaclty 3 most important stories.
    - Prioritize markets, earnings, investments, mergers, acquisitions, economic policy, and major business events.

    WORLD:
    - Select exaclty 3 most important stories.
    - Prioritize geopolitics, wars, elections, diplomacy, major disasters, and globally significant events.

    GENERAL:
    - Summaries must be under 25 words.
    - Preserve URLs exactly.
    - Return only JSON.
    - Do NOT invent information.
    - Choose the most impactful stories, not the first stories.
    - Top Stories must be different from category stories.
    - Do not select duplicate stories.
    - Do not select articles covering the same event twice.
    - Do not select the same story in both Top Stories and category sections.
    - Top Stories must be unique.
    - Category stories must be unique.

    Technology Articles:
    ${JSON.stringify(tech)}

    Business Articles:
    ${JSON.stringify(business)}

    World Articles:
    ${JSON.stringify(world)}
    `;
  let delay = 5000; // 5 seconds

  while (true) {
    try {
      console.log("Calling Gemini...");

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const cleaned = response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      console.log("Gemini success!");

      return JSON.parse(cleaned);

    } catch (err) {

      // Retry only for temporary issues
      if (err.status === 503 || err.status === 429) {

        console.log(
          `Gemini unavailable. Retrying in ${
            delay / 1000
          } seconds...`
        );

        await new Promise((resolve) =>
          setTimeout(resolve, delay)
        );

        // Increase delay each retry
        delay = Math.min(delay * 2, 60000);

      } else {
        console.error("Gemini Error:", err);
        throw err;
      }
    }
  }
}

module.exports = { generateDigest };