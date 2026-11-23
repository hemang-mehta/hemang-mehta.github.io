import { ArrowUpRight, Github, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { featuredProject as feat } from "@/content/projects";
import { ButtonLink, Card, Label, TagList } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <Reveal>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {/* Name tile */}
        <Card className="min-h-[360px] justify-end gap-5 md:col-span-2">
          <Label>{profile.headline}</Label>
          <h1 className="m-0 text-[52px] font-extrabold leading-[0.98] tracking-display text-ink md:text-[72px]">
            {first}
            <br />
            {rest.join(" ")}
          </h1>
          <p className="m-0 max-w-[520px] text-[19px] leading-[1.55] text-ink-body">{profile.tagline}</p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="#work">See my work</ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="subtle">
              Résumé
            </ButtonLink>
          </div>
        </Card>

        {/* Featured project tile */}
        <Card className="justify-between bg-feature">
          <Label className="text-feature-muted">Featured · {feat.year}</Label>
          <div className="flex flex-col gap-2.5">
            <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.02em] text-feature-ink">{feat.title}</h2>
            <p className="m-0 text-[15px] leading-[1.55] text-feature-body">{feat.description}</p>
            <p className="m-0 text-[13px] text-feature-muted">{feat.stack.join(" · ")}</p>
          </div>
          <ButtonLink href={feat.repo} variant="light" className="self-start">
            <Github size={18} aria-hidden="true" /> View code
          </ButtonLink>
        </Card>

        <Card className="justify-between">
          <Label>Based in</Label>
          <p className="m-0 flex items-center gap-2 text-[22px] font-bold">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </p>
        </Card>

        <Card className="justify-between">
          <Label>On GitHub</Label>
          <p className="m-0 text-[22px] font-bold">{profile.github.publicRepos} public repositories</p>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-accent no-underline"
          >
            {profile.github.label} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Card>

        <Card className="justify-between">
          <Label>Core stack</Label>
          <TagList items={profile.coreStack} />
        </Card>
      </section>
    </Reveal>
  );
}
