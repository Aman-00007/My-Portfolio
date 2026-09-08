import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Code, Server, Database, Library, Settings, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 mb-4 text-emerald-400" />,
    skills: ["C", "C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 mb-4 text-indigo-400" />,
    skills: ["HTML5", "CSS3", "React.js", "Vite", "React Router DOM", "jQuery", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-6 h-6 mb-4 text-rose-400" />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "MVC Architecture", "Multer"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 mb-4 text-blue-400" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Libraries & Tools",
    icon: <Library className="w-6 h-6 mb-4 text-yellow-400" />,
    skills: ["Pandas", "Matplotlib", "NetworkX", "Git", "GitHub", "Postman"],
  },
  {
    title: "Core & Integrations",
    icon: <Settings className="w-6 h-6 mb-4 text-purple-400" />,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Setu Account Aggregator API", "Google Cloud Gen AI"],
  },
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions} className="h-full">
                <div className="glass-panel p-8 rounded-2xl h-full flex flex-col border border-border/40 hover:border-primary/50 transition-colors shadow-lg">
                  <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
