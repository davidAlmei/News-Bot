require("dotenv").config();

const { getNews } = require("./services/newsService");
const { summarizeNews } = require("./services/geminiService");
const { sendEmail } = require("./services/emailService");

async function runBot() {
  try {
    const techNews = await getNews("technology");
    const businessNews = await getNews("business");

    const allNews = `
    TECHNOLOGY:
    ${JSON.stringify(techNews)}

    BUSINESS:
    ${JSON.stringify(businessNews)}
    `;

    const summary = await summarizeNews(allNews);

    await sendEmail(summary);

    console.log("Email sent successfully");
  } catch (err) {
    console.error(err);
  }
}

runBot();