import { skills } from "@/content/skills";
import { certifications } from "@/content/timeline";
import { Card, Label, SectionTitle, TagList } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

/** Skills (wide tile) + Certifications. */
export default function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-4"
      >
        <Card className="gap-6 lg:col-span-2">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {skills.map((g) => (
              <div key={g.label} className="flex flex-col gap-2.5">
                <Label>{g.label}</Label>
                <TagList items={g.items} />
              </div>
            ))}
          </div>
        </Card>
        <Card id="certifications" className="gap-1">
          <SectionTitle className="mb-2">Certifications</SectionTitle>
          <ul className="m-0 list-none p-0">
            {certifications.map((c, i) => (
              <li key={i} className="border-t border-rule py-3 text-[15px] text-ink-body">
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </Reveal>
  );
}
