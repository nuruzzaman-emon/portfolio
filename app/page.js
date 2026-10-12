import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
