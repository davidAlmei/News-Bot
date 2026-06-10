function formatSection(title, emoji, articles) {

  let section = `${emoji} ${title}\n\n`;

  articles.forEach((article, index) => {

    section += `${index + 1}. ${article.title}\n`;

    section += `📰 ${article.source}\n`;

    section += `🔗 ${article.url}\n\n`;
  });

  return section;
}

function formatMorningBrief(newsData) {

  const date = new Date().toDateString();

  let message = `📰 *Morning Brief*\n`;

  message += `📅 ${date}\n\n`;

  message += formatSection(
    "TECH NEWS",
    "💻",
    newsData.techNews
  );

  message += "\n";

  message += formatSection(
    "FINANCE NEWS",
    "💰",
    newsData.financeNews
  );

  message += "\n";

  message += formatSection(
    "WORLD NEWS",
    "🌍",
    newsData.worldNews
  );

  return message;
}

module.exports = {
  formatMorningBrief
};