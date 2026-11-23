import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-ink-body">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
