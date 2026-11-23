import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-page pb-12 pt-6">
      <main className="mx-auto flex w-full max-w-page flex-col gap-14 px-6">
        <Nav />
        <Hero />
        <About />
        <Work />
        <Timeline />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
