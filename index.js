require("dotenv").config();

const { getTopNews } = require("./services/newsService");
const { generateDigest } = require("./services/geminiService");
const { sendEmail } = require("./services/emailService");
const {
  generateNewsletter,
} = require("./services/newsletterTemplate");

function simplifyArticles(articles) {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
  }));
}

async function runBot() {
  try {
    console.log("Fetching news...");

    const techNews = await getTopNews("technology");
    const businessNews = await getTopNews("business");
    const worldNews = await getTopNews("general");

    const tech = simplifyArticles(techNews);
    const business = simplifyArticles(businessNews);
    const world = simplifyArticles(worldNews);

    console.log("Generating summaries...");

    const digest = await generateDigest(
      tech,
      business,
      world
    );

    console.log("Building newsletter...");

    const html = generateNewsletter(digest);

    console.log("Sending email...");

    await sendEmail(html);

    console.log("Email sent successfully.");
  } catch (err) {
    console.error(err);
  }
}

runBot();