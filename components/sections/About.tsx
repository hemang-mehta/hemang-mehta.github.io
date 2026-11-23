import { profile } from "@/content/profile";
import { Card, Label } from "@/components/ui/primitives";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Reveal>
      <Card as="section" id="about" className="p-10">
        <Label>About</Label>
        <p className="m-0 max-w-[900px] text-[22px] font-medium leading-[1.6] text-ink-soft">{profile.about}</p>
      </Card>
    </Reveal>
  );
}
