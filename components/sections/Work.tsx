import { ArrowUpRight } from "lucide-react";
import { otherProjects } from "@/content/projects";
import type { Project } from "@/lib/types";
import { Card, TagList } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

function ProjectCard({ p }: { p: Project }) {
  return (
    <Card as="article" className="h-full">
      <div className="flex justify-between text-[13px] text-ink-muted">
        <span>{p.year}</span>
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} source on GitHub`}
          className="-mr-3 -mt-3 inline-flex h-11 w-11 items-center justify-center text-ink"
        >
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <h3 className="m-0 text-[21px] font-bold tracking-[-0.01em] text-ink">{p.title}</h3>
      <p className="m-0 flex-grow text-[15px] leading-[1.6] text-ink-body">{p.description}</p>
      <TagList items={p.stack} />
    </Card>
  );
}

export default function Work() {
  return (
    <section id="work">
      <Reveal>
        <h2 className="mb-5 mt-0 text-[36px] font-extrabold tracking-heading text-ink">More work</h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-4">
        {otherProjects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.16)}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
