require("dotenv").config();

const axios = require("axios");

const API_KEY = process.env.NEWS_API_KEY;

async function fetchNews(category, query = "") {
  try {
    let url = "";

    if (query) {
      url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=5&apiKey=${API_KEY}`;
    }

    const response = await axios.get(url);

    return response.data.articles.map(article => ({
      title: article.title,
      source: article.source.name,
      url: article.url
    }));

  } catch (error) {
    console.error("Error fetching news:", error.message);
    return [];
  }
}

async function getAllNews() {

  const techNews = await fetchNews("technology");

  const financeNews = await fetchNews("", "finance OR stock market");

  const worldNews = await fetchNews("general");

  return {
    techNews,
    financeNews,
    worldNews
  };
}

module.exports = {
  getAllNews
};