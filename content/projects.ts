import type { Project } from "@/lib/types";

const gh = (repo: string) => `https://github.com/hemang-mehta/${repo}`;

export const projects: Project[] = [
  {
    slug: "poker",
    title: "Texas Hold'em Poker",
    year: "2026",
    featured: true,
    description:
      "A playable Texas Hold'em game with a real-time game server: a dealer, betting rounds, a hand evaluator and WebSocket updates that pause play when it's your turn.",
    stack: ["Python", "FastAPI", "WebSockets", "React 19", "TypeScript", "Vite"],
    repo: gh("poker"),
  },
  {
    slug: "llapp",
    title: "LLApp — Coding Practice Platform",
    year: "2025",
    description:
      "A problem-solving platform with problems by difficulty and category, acceptance rates and multi-language answers, behind JWT sign-up and sign-in.",
    stack: ["C#", "ASP.NET Core 9", "EF Core", "Dapper", "SQL Server", "Angular 16"],
    repo: gh("llapp"),
  },
  {
    slug: "Real_Estate",
    title: "Real Estate Marketplace",
    year: "2024",
    description:
      "A full-stack MERN real-estate website with user accounts, sign-up / sign-in, profiles and a REST API.",
    stack: ["MongoDB", "Express", "React 18", "Node.js", "Tailwind CSS"],
    repo: gh("Real_Estate"),
  },
  {
    slug: "quiz-tool",
    title: "Quiz-Tool",
    year: "2024",
    description:
      "Computer-science quizzes scored by easy, medium and hard levels. Questions are scraped live with Selenium into MongoDB, and an admin dashboard re-grades or refreshes them.",
    stack: ["Python", "Flask", "MongoDB", "Selenium", "Jinja2", "Flask-Login"],
    repo: gh("quiz-tool"),
  },
  {
    slug: "smart-meter-energy-predictor",
    title: "Smart Meter Energy Predictor",
    year: "2024",
    description:
      "Forecasts household energy use from half-hourly smart-meter readings, comparing Linear, Ridge, KNN, Random Forest and XGBoost regressors.",
    stack: ["Python", "pandas", "scikit-learn", "XGBoost", "Plotly", "Jupyter"],
    repo: gh("smart-meter-energy-predictor"),
  },
  {
    slug: "Face_recognition",
    title: "Face Recognition System",
    year: "2024",
    description:
      "Real-time face recognition from a webcam feed: encodes known faces, matches them live and syncs records and images to Firebase.",
    stack: ["Python", "OpenCV", "face_recognition", "cvzone", "Firebase"],
    repo: gh("Face_recognition"),
  },
  {
    slug: "Stock-market-portfolio-manager",
    title: "Stock Market Portfolio Manager",
    year: "2024",
    description: "A web app for tracking a stock portfolio, with charts and automated e-mail updates.",
    stack: ["Python", "Flask", "pandas", "HTML/CSS", "SMTP"],
    repo: gh("Stock-market-portfolio-manager"),
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const otherProjects = projects.filter((p) => p !== featuredProject);
