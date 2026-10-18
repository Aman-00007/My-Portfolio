import { motion } from "framer-motion";
import { Code2, Trophy, Heart, Award, GraduationCap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Biography & Credentials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative summary matching resume */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              I am a <strong className="text-foreground font-semibold">Full-Stack Developer</strong> pursuing an Integrated B.Tech + M.Tech in Information Technology at <strong className="text-foreground font-semibold">ABV-IIITM Gwalior (2024–2029)</strong> with a current CGPA of <span className="text-primary font-semibold">7.15</span>.
            </motion.p>
            <motion.p variants={itemVariants}>
              Skilled in <strong className="text-foreground font-semibold">MERN and PERN stack development</strong>, REST APIs, backend engineering, and Data Structures & Algorithms. Experienced with React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Python, driven by a passion for scalable software engineering and system design.
            </motion.p>
            <motion.p variants={itemVariants}>
              Beyond development, I actively drive campus leadership initiatives as an <strong className="text-foreground font-semibold">Event Head for Infotsav</strong> at ABV-IIITM Gwalior, managing technical and cultural events with cross-functional student teams and volunteers.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-full bg-secondary/80 text-foreground border border-border/50">
                🎓 ABV-IIITM Gwalior (2024–2029)
              </span>
              <span className="px-3 py-1.5 rounded-full bg-secondary/80 text-foreground border border-border/50">
                📍 Bhopal, Madhya Pradesh, India
              </span>
              <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                ⚡ CGPA: 7.15
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Key credential cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col gap-3 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Trophy size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">Problem Solver</h3>
                  <p className="text-xs text-primary font-semibold">500+ DSA Problems Solved</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Solved 500+ Data Structures and Algorithms problems across LeetCode and competitive programming platforms, with an emphasis on performance and space optimization.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col gap-3 hover:border-indigo-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">Full-Stack Engineer</h3>
                  <p className="text-xs text-indigo-400 font-semibold">MERN & PERN Stacks</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Architecting modular MVC backends, robust REST APIs, JWT authentication, PostgreSQL relational data with Sequelize, and document stores with MongoDB.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col gap-3 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">Leadership & Fest Head</h3>
                  <p className="text-xs text-amber-400 font-semibold">Event Head – Infotsav</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Directed technical and cultural events at ABV-IIITM Gwalior, managing student teams and volunteers across logistics, scheduling, and collaboration.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col gap-3 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">Certifications & Training</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Google Cloud & Commonwealth</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Earned Google Cloud Generative AI certification badges and completed the Commonwealth Bank Software Engineering Job Simulation on Forage in June 2026.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col gap-3 hover:border-pink-500/50 transition-colors sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                  <Heart size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">Beyond the Screen</h3>
                  <p className="text-xs text-pink-400 font-semibold">Creative & Athletic Pursuits</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When I&apos;m not architecting systems, you can find me dancing with the Beathoppers crew, playing piano, competing on the badminton court, or strategizing over a game of chess.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
