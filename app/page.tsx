import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black overflow-x-hidden">
      <Hero />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}