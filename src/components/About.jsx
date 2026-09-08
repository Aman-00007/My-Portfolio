import { motion } from "framer-motion";
import { Code2, Trophy, Heart, Coffee } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              I am a passionate Full-Stack Developer and an Integrated B.Tech + M.Tech IT student at ABV-IIITM Gwalior.
              My expertise lies in backend engineering, system design, and building highly scalable web applications.
            </motion.p>
            <motion.p variants={itemVariants}>
              I have a strong foundation in Data Structures and Algorithms, allowing me to write efficient, optimized code. 
              I love working with the MERN and PERN stacks to bring complex ideas to life, ensuring both robustness and a seamless user experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Trophy size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Problem Solver</h3>
              <p className="text-sm text-muted-foreground">Solved 400+ DSA problems on LeetCode.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors">
              <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-500">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Backend Specialist</h3>
              <p className="text-sm text-muted-foreground">Architecting robust REST APIs & databases.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors sm:col-span-2">
              <div className="p-3 bg-pink-500/10 rounded-full text-pink-500">
                <Heart size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Beyond the Screen</h3>
              <p className="text-sm text-muted-foreground">
                When I'm not coding, you can find me dancing with the Beathoppers crew, playing the piano, battling it out in badminton, or strategizing over a game of chess.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
