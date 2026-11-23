import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C#", "TypeScript", "JavaScript", "SQL", "HTML / CSS"] },
  {
    label: "Backend",
    items: ["FastAPI", "Flask", "ASP.NET Core", "Node.js / Express", "REST & WebSockets", "JWT auth"],
  },
  { label: "Frontend", items: ["React", "Angular", "Tailwind CSS", "Vite", "Jinja2"] },
  {
    label: "Data & AI/ML",
    items: ["pandas", "NumPy", "scikit-learn", "XGBoost", "OpenCV", "Plotly / Seaborn"],
  },
  {
    label: "Databases & tools",
    items: ["MongoDB", "SQL Server", "Firebase", "Selenium", "Git & GitHub"],
  },
];
