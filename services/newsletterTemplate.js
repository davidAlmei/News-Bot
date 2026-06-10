function generateSection(title, articles) {
  return `
    <h2>${title}</h2>

    ${articles
      .map(
        article => `
        <div style="
          margin-bottom:20px;
          padding:15px;
          border-left:4px solid #1a73e8;
          background:#f8f9fa;
        ">
          <strong>${article.title}</strong>

          <p>${article.summary}</p>

          <a href="${article.url}">
            Read More →
          </a>
        </div>
      `
      )
      .join("")}
  `;
}

function generateNewsletter(data) {
  return `
  <div style="
    font-family:Arial,sans-serif;
    max-width:800px;
    margin:auto;
    padding:20px;
  ">

    <div style="
      background:#1a73e8;
      color:white;
      padding:25px;
      text-align:center;
      border-radius:12px;
    ">
      <h1>📰 Daily Morning Brief</h1>
    </div>

    <br>

    ${generateSection("💻 Technology", data.technology)}

    ${generateSection("💰 Business", data.business)}

    ${generateSection("🌍 World", data.world)}

    <hr>

    <p style="
      color:gray;
      font-size:12px;
      text-align:center;
    ">
      Generated automatically using NewsAPI + Gemini
    </p>

  </div>
  `;
}

module.exports = { generateNewsletter };