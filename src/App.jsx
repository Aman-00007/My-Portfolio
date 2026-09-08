import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import CustomCursor from "./components/CustomCursor";
import FluidBackground from "./components/FluidBackground";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden relative">
        <FluidBackground />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <ContactFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
