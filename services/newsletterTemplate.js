function generateTopStories(stories) {
  return `
    <div style="
      background:#fff3cd;
      border-left:6px solid #ff9800;
      padding:20px;
      border-radius:10px;
      margin:25px 0;
    ">

      <h2 style="
        margin-top:0;
        color:#ff6f00;
      ">
        🔥 Top 3 Stories of the Day
      </h2>

      ${stories
        .map(
          story => `
            <div style="
              margin-bottom:20px;
              padding-bottom:15px;
              border-bottom:1px solid #ddd;
            ">
              <strong>${story.title}</strong>

              <p style="
                line-height:1.6;
                margin:10px 0;
              ">
                ${story.summary}
              </p>

              <a
                href="${story.url}"
                style="
                  color:#ff6f00;
                  text-decoration:none;
                  font-weight:bold;
                "
              >
                Read More →
              </a>
            </div>
          `
        )
        .join("")}

    </div>
  `;
}

function generateSection(title, articles) {
  return `
    <h2 style="
      margin-top:30px;
      color:#1a73e8;
    ">
      ${title}
    </h2>

    ${articles
      .map(
        article => `
        <div style="
          margin-bottom:20px;
          padding:15px;
          border-left:4px solid #1a73e8;
          background:#f8f9fa;
        ">
          <strong style="
            font-size:16px;
            display:block;
            margin-bottom:8px;
          ">
            ${article.title}
          </strong>

          <p style="
            line-height:1.6;
            margin:10px 0;
          ">
            ${article.summary}
          </p>

          <a
            href="${article.url}"
            style="
              color:#1a73e8;
              text-decoration:none;
              font-weight:bold;
            "
          >
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

    ${generateTopStories(data.topStories)}

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