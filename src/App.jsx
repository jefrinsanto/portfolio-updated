import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import DSA from "./sections/DSA.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Certifications from "./sections/Certifications.jsx";
import Learning from "./sections/Learning.jsx";
import GitHubSection from "./sections/GitHubSection.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <DSA />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Learning />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
