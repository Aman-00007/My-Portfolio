import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const name = "Aman Rawat";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          {name.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
        >
          Full-Stack Developer | Integrated B.Tech + M.Tech IT Student at{" "}
          <span className="text-foreground font-medium">ABV-IIITM Gwalior</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-primary transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explore My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 glass text-foreground rounded-full font-semibold hover:border-primary/50 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Download Resume
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
