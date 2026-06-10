const axios = require("axios");

async function getTopNews(category) {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          category,
          language: "en",
          pageSize: 5,
          apiKey: process.env.NEWS_API_KEY,
        },
      }
    );

    return response.data.articles;
  } catch (err) {
    console.error(err);
    return [];
  }
}

module.exports = { getTopNews };