import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/primitives";

const links = [
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <nav
      aria-label="Main"
      className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-[28px] border border-card-border bg-card py-1.5 pl-6 pr-2 sm:rounded-full"
    >
      <a href="#top" id="top" className="text-[17px] font-extrabold no-underline">
        {profile.handle}
      </a>
      <div className="flex flex-wrap gap-1 text-sm font-semibold">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="px-3.5 py-3 no-underline">
            {l.label}
          </a>
        ))}
        <ButtonLink href="#contact" variant="invert">
          Contact
        </ButtonLink>
      </div>
    </nav>
  );
}
