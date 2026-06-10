# 📰 Morning News Bot

An AI-powered daily newsletter that fetches the latest technology, business, and world news, intelligently ranks the most important stories using Gemini, and delivers a professionally formatted HTML email every morning.

## ✨ Features

* Fetches news from NewsAPI
* Uses Gemini AI to rank and summarize articles
* Curates:

  * 🔥 Top 3 Stories of the Day
  * 💻 Top 6 Technology Stories
  * 💰 Top 3 Business Stories
  * 🌍 Top 3 World Stories
* Selects stories based on importance and relevance rather than simply taking the latest headlines
* Generates concise AI-powered summaries
* Includes direct source links for every article
* Sends a clean HTML newsletter via email
* Automatically retries when Gemini is temporarily unavailable
* Runs automatically every day using GitHub Actions
* Works even when the local machine is turned off

---

## 🛠 Tech Stack

* Node.js
* NewsAPI
* Google Gemini API
* Nodemailer
* GitHub Actions

---

## 📌 How It Works

```text
NewsAPI
   │
   ▼
Fetch Articles
   │
   ▼
Gemini AI
(Rank + Select + Summarize)
   │
   ▼
HTML Newsletter Generator
   │
   ▼
Email Delivery
   │
   ▼
Inbox
```

---

## 📬 Newsletter Structure

Each newsletter contains:

### 🔥 Top 3 Stories of the Day

The most impactful stories selected from all fetched articles.

### 💻 Technology

6 important stories covering topics such as:

* Artificial Intelligence
* Cybersecurity
* Semiconductors
* Cloud Computing
* Product Launches
* Major Technology Companies

### 💰 Business

3 important stories covering:

* Markets
* Earnings Reports
* Investments
* Acquisitions and Mergers
* Economic Policy

### 🌍 World

3 important stories covering:

* Geopolitics
* Elections
* International Relations
* Major Global Events
* Significant World Developments

---

## 📁 Project Structure

```text
morning-news-bot/
│
├── .github/
│   └── workflows/
│       └── news-bot.yml
│
├── services/
│   ├── newsService.js
│   ├── geminiService.js
│   ├── emailService.js
│   └── newsletterTemplate.js
│
├── index.js
├── package.json
├── package-lock.json
└── .env
```

---

## ⚙️ Setup

### Clone the Repository

```bash
git clone <repository-url>
cd morning-news-bot
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
NEWS_API_KEY=YOUR_NEWS_API_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

RECEIVER_EMAIL=your_email@gmail.com
```

---

## 🔑 API Keys Required

### NewsAPI

1. Create an account at https://newsapi.org
2. Generate an API key
3. Add it to the `.env` file

### Gemini API

1. Create an API key at https://aistudio.google.com
2. Add it to the `.env` file

### Gmail App Password

1. Enable Two-Factor Authentication
2. Generate an App Password
3. Use the generated password as `EMAIL_PASS`

---

## 🚀 Running Locally

```bash
node index.js
```

The application will:

1. Fetch articles from NewsAPI
2. Rank stories using Gemini
3. Generate summaries
4. Build the HTML newsletter
5. Send the newsletter via email

---

## ⏰ Automated Scheduling

The project uses GitHub Actions to run automatically every day.

Example:

```yaml
schedule:
  - cron: '30 1 * * *'
```

This schedule runs daily at:

```text
07:00 AM IST
```

GitHub Actions executes the workflow on GitHub's infrastructure, so the newsletter continues to run even when your computer is turned off.

---

## 🛡 Reliability Features

### Automatic Retry Logic

If Gemini is temporarily overloaded or rate-limited:

* Automatically retries requests
* Uses exponential backoff
* Continues attempting until a valid response is received

### Intelligent Story Selection

Instead of taking the first few headlines:

* Multiple articles are fetched per category
* Gemini evaluates significance and impact
* The most relevant stories are selected for the newsletter

---

## 📧 Sample Newsletter

```text
Morning Brief

🔥 Top 3 Stories of the Day

1. Major AI breakthrough announced
2. Global markets react to policy changes
3. International summit reaches agreement

💻 Technology
- 6 curated stories

💰 Business
- 3 curated stories

🌍 World
- 3 curated stories
```
