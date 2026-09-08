import { motion } from "framer-motion";
import { ExternalLink, Layers, Activity, Ticket, Globe } from "lucide-react";

const flagshipProject = {
  title: "Sphere (Unified Bank & Loan Management Platform)",
  description: "A complete FinTech platform featuring multi-bank aggregation (SBI, HDFC, BOI, PNB, CBI, ICICI, Axis) and automated loan eligibility scoring. Features direct multi-step loan applications with drag-and-drop document uploads, live credit health & DTI analyzers, interactive Payoff Accelerators, and dual role-based access.",
  stack: ["React (Vite)", "Node.js", "Express.js", "PostgreSQL", "Setu APIs"],
  icon: <Globe className="w-12 h-12 text-primary" />,
  integrations: "Integrated with Setu Account Aggregator in a testing sandbox to demonstrate multi-bank data retrieval and automated financial verification. Includes an admin query engine with simulated SMS/Email alert logs.",
};

const otherProjects = [
  {
    title: "UNINEXUS",
    description: "A Centralized Campus Platform with an AI-powered personalized feed system for clubs and events.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "AI Integration"],
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "YatraMitra",
    description: "A Travel Ticket Booking Platform (buses, trains, flights) utilizing a modular MVC backend architecture.",
    stack: ["Node.js", "Express.js", "MongoDB"],
    icon: <Ticket className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: "Real-Time ECG Monitoring System",
    description: "A hardware-software integration for cardiac abnormality prediction using IoT and machine learning.",
    stack: ["ESP32", "AD8232 Sensor", "Machine Learning", "Web Dashboard"],
    icon: <Activity className="w-8 h-8 text-rose-400" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full" />
        </motion.div>

        {/* Flagship Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="relative glass-panel rounded-3xl p-8 md:p-12 mb-16 border-2 border-primary/20 overflow-hidden"
        >
          {/* Decorative background removed for cleaner UI */}
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  {flagshipProject.icon}
                </div>
                <div>
                  <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-1">🏆 Flagship Project</h4>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{flagshipProject.title}</h3>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {flagshipProject.description}
              </p>
              
              <div className="bg-secondary/50 p-6 rounded-xl border border-border/50">
                <h4 className="font-semibold mb-2 text-foreground">Key Integrations:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {flagshipProject.integrations}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {flagshipProject.stack.map(tech => (
                  <span key={tech} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4">
                 <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-primary transition-colors font-semibold">
                   <ExternalLink size={18} /> Live Demo
                 </button>
                 <button className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-muted transition-colors font-semibold">
                   <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="none"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Source Code
                 </button>
              </div>
            </div>
            
            <div className="h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-border/50 flex items-center justify-center backdrop-blur-sm relative overflow-hidden group">
               {/* Decorative placeholder for project image/UI */}
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
               <div className="w-3/4 h-3/4 bg-card rounded-lg shadow-2xl border border-border/50 p-4 transform group-hover:scale-[1.02] transition-transform duration-500 flex flex-col gap-4">
                 <div className="w-full h-8 bg-muted rounded-md flex items-center px-3 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="flex-1 bg-muted/50 rounded-md border border-border/30 flex items-center justify-center">
                    <p className="text-muted-foreground font-medium">Sphere Interactive UI Preview</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-border/40 hover:border-indigo-500/50 transition-colors group flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-secondary/50 w-max rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
