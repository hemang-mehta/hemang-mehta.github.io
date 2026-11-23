import { education, experience } from "@/content/timeline";
import type { TimelineItem } from "@/lib/types";
import { Card, SectionTitle } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

function Rows({ items }: { items: TimelineItem[] }) {
  return (
    <>
      {items.map((e, i) => (
        <div key={i} className="flex flex-col gap-1 border-t border-rule py-4">
          <span className="text-[13px] font-semibold text-accent">{e.when}</span>
          <h3 className="m-0 text-[18px] font-bold text-ink">{e.title}</h3>
          <p className="m-0 text-[15px] text-ink-body">{e.org}</p>
          <p className="m-0 text-sm text-ink-muted">{e.note}</p>
        </div>
      ))}
    </>
  );
}

/** Education and Experience side by side (stacked on phones). */
export default function Timeline() {
  return (
    <Reveal>
      <section
        id="education"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-4"
      >
        <Card className="gap-1">
          <SectionTitle className="mb-2">Education</SectionTitle>
          <Rows items={education} />
        </Card>
        <Card id="experience" className="gap-1">
          <SectionTitle className="mb-2">Experience</SectionTitle>
          <Rows items={experience} />
        </Card>
      </section>
    </Reveal>
  );
}
