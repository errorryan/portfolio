import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import Certificates from "./components/certificates";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F3] text-[#3B2523] selection:bg-[#702F3D] selection:text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}