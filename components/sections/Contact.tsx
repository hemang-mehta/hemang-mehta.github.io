import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink, Card } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <Card as="section" id="contact" className="gap-5 bg-accent p-8 md:p-12">
        <h2 className="m-0 text-[40px] font-extrabold tracking-[-0.035em] text-accent-ink md:text-[48px]">
          {profile.contact.heading}
        </h2>
        <p className="m-0 max-w-[560px] text-[19px] text-accent-ink">{profile.contact.blurb}</p>
        <div className="flex flex-wrap gap-2.5">
          <ButtonLink href={`mailto:${profile.email}`} variant="light">
            <Mail size={18} aria-hidden="true" /> {profile.email}
          </ButtonLink>
          <ButtonLink href={profile.linkedin} variant="invert">
            <Linkedin size={18} aria-hidden="true" /> LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.github.url} variant="invert">
            <Github size={18} aria-hidden="true" /> GitHub
          </ButtonLink>
        </div>
      </Card>
    </Reveal>
  );
}
