import type { Profile, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  theme: "light",
  url: "https://hemang-mehta.github.io",
  title: "Hemang Mehta — Portfolio",
  description:
    "Portfolio of Hemang Mehta — B.Tech Computer Science graduate and Python developer exploring AI/ML.",
};

export const profile: Profile = {
  name: "Hemang Mehta",
  handle: "hemang.mehta",
  headline: "B.Tech · Computer Science graduate",
  tagline:
    "Python enthusiast exploring AI/ML. I build things that intrigue me — one curious idea, one project, one commit at a time.",
  about:
    "I'm a Computer Science graduate who loves coding, experimenting and exploring interesting rabbit holes — from real-time game servers to energy-forecasting models. Always learning, and occasionally wondering why the code worked.",
  location: "Ahmedabad, India",
  email: "hemangmehta1703@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1ej9ejhTcCfk8ljZxPAkprusTqhCX-PG-/view?usp=sharing",
  github: {
    url: "https://github.com/hemang-mehta",
    label: "github.com/hemang-mehta",
    publicRepos: 8,
  },
  linkedin: "https://www.linkedin.com/in/hemang-mehta-574a61225",
  coreStack: ["Python", "FastAPI", "Flask", "C# / .NET", "React", "Angular", "MongoDB"],
  contact: {
    heading: "Let's work together.",
    blurb: "Open to full-time roles and collaborations.",
  },
};
