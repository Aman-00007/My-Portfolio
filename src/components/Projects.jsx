import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Layers, 
  Activity, 
  Ticket, 
  Globe, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  QrCode, 
  ArrowUpRight,
  Bot
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const flagshipProjects = [
  {
    id: "sphere",
    badge: "🏆 Flagship FinTech Architecture",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    borderGlow: "border-emerald-500/20 hover:border-emerald-500/40",
    title: "Sphere — Unified Bank & Loan Management Platform",
    tagline: "Multi-Bank Aggregation, Credit Health Scoring & Automated Loan Eligibility Engine",
    description: "A production-grade FinTech ecosystem featuring multi-bank account aggregation (SBI, HDFC, BOI, PNB, CBI, ICICI, Axis) and automated loan eligibility scoring. Features direct multi-step loan applications with drag-and-drop document uploads, live credit health & DTI analyzers, interactive Payoff Accelerators, and dual role-based access.",
    keyIntegrationsTitle: "Key Architecture & Integrations:",
    keyIntegrations: "Integrated with Setu Account Aggregator in a testing sandbox to demonstrate multi-bank consent-driven data retrieval and automated financial verification. Includes an admin query engine with simulated SMS/Email alert logs.",
    highlights: [
      "Consent-driven multi-bank data aggregation across 7 major financial institutions",
      "Dynamic Debt-to-Income (DTI) ratio calculator & automated loan eligibility scoring",
      "Interactive Payoff Accelerators with dynamic principal/interest amortization schedules",
      "Dual Role-Based Access Control (Borrower vs Admin) with simulated SMS & Email audit alerts"
    ],
    stack: ["React (Vite)", "Node.js", "Express.js", "PostgreSQL", "Setu AA Sandbox", "REST APIs"],
    githubUrl: "https://github.com/Aman-00007/Sphere",
    icon: <Globe className="w-10 h-10 text-emerald-400" />,
    previewType: "sphere"
  },
  {
    id: "cineverse",
    badge: "🎬 Flagship Entertainment & AI Platform",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    borderGlow: "border-rose-500/20 hover:border-rose-500/40",
    title: "CineVerse — 2026 Cinema & Ticket Booking Platform",
    tagline: "Next-Gen Multiplex Experience, Gemini 3.1 Flash AI Concierge & Thermal Ticket Pass Engine",
    description: "A modern full-stack cinema ticketing, movie discovery, and theatre management platform inspired by BookMyShow and AMC. Features real-time 2026 blockbuster bookings, physical tiered cinema seating architecture, dynamic printable thermal admission passes with QR verification, Google Gemini 3.1 Flash AI Concierge (CineBot), live multi-field search, in-seat gourmet food ordering, and dual payment gateways (UPI & Stripe).",
    keyIntegrationsTitle: "Key Architecture & AI Integrations:",
    keyIntegrations: "Powered by Google Gemini 3.1 Flash for conversational movie recommendations, an isolated iframe thermal admission pass generator (ticketPrinter.js) with instant QR verification, and automated PostgreSQL synchronizers for 2026 trailers, showtimes, and poster metadata.",
    highlights: [
      "JWT authentication, role-based admin controls, movie discovery, and seat reservations with concurrency handling",
      "Gemini AI recommendations and conversational cinema assistant (CineBot), plus booking management and cancellation",
      "Gourmet snack ordering, UPI QR / Stripe payment flows, and printable tickets with QR verification",
      "Curved ultra-wide auditorium screen with tiered physical pricing (Recliner, Executive, Classic)"
    ],
    stack: ["React 18 (Vite)", "Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "Gemini AI", "JWT & RBAC"],
    githubUrl: "https://github.com/Aman-00007/Movie-Ticket-web-app",
    icon: <Film className="w-10 h-10 text-rose-400" />,
    previewType: "cineverse"
  }
];

const otherProjects = [
  {
    title: "UniNexus",
    subtitle: "Centralized Campus Platform",
    category: "Campus Community Network",
    description: "Collaborated on a centralized platform for campus clubs, events, and student communities. Developed modular backend APIs, structured feeds, and working on personalized AI recommendations.",
    stack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "AI Feed"],
    githubUrl: "https://github.com/Aman-00007/UniNexus",
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
  },
  {
    title: "YatraMitra",
    subtitle: "Travel Ticket Booking Platform",
    category: "Travel & Transit Architecture",
    description: "Built a travel booking platform supporting buses, trains, and flights, with authentication and REST APIs. Implemented CRUD operations and modular MVC-based backend architecture.",
    stack: ["Node.js", "Express.js (MVC)", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/Aman-00007/Yatramitra",
    icon: <Ticket className="w-8 h-8 text-emerald-400" />,
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Real-Time ECG Monitoring & Diagnostic System",
    subtitle: "IoT & Healthcare ML",
    category: "IoT & Healthcare ML",
    description: "Built an ECG monitoring system using ESP32 and AD8232, streaming sensor data to a web dashboard for visualization. Explored machine learning for cardiac abnormality prediction.",
    stack: ["ESP32", "AD8232 Sensor", "Machine Learning", "Web Dashboard"],
    icon: <Activity className="w-8 h-8 text-rose-400" />,
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Featured Engineering
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work & Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-rose-500 rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Production-grade full-stack platforms, FinTech aggregators, AI-powered entertainment systems, and distributed architectures.
          </p>
        </motion.div>

        {/* Flagship Projects Showcase */}
        <div className="space-y-16 mb-20">
          {flagshipProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`relative glass-panel rounded-3xl p-8 md:p-12 border-2 ${project.borderGlow} overflow-hidden project-card-containment`}
            >
              <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Top Badge & Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3.5 py-1 rounded-full text-xs font-bold border tracking-wide uppercase ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3.5 bg-secondary/80 rounded-2xl shrink-0 border border-border/50">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Integrations Callout */}
                  <div className="bg-secondary/40 p-5 rounded-2xl border border-border/50">
                    <h4 className="font-semibold text-foreground text-sm flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {project.keyIntegrationsTitle}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.keyIntegrations}
                    </p>
                    
                    {/* Architectural Highlights Bullet Points */}
                    <div className="grid sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-border/30">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3.5 py-1.5 rounded-full bg-secondary/80 text-foreground text-xs font-semibold border border-border/60 hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
                    >
                      <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span>View GitHub Repository</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full glass text-foreground text-sm font-semibold hover:bg-secondary/80 border border-border/60 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>README & Architecture Docs</span>
                    </a>
                  </div>

                </div>

                {/* Right Column: Interactive UI Architecture Mockup */}
                <div className="lg:col-span-5 h-full">
                  <div className="rounded-2xl bg-gradient-to-br from-secondary/40 via-background/80 to-secondary/20 border border-border/60 p-5 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                    
                    {/* Window Controls Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/40">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground/80">
                        {project.id === "sphere" ? "sphere-fintech-os:v2.4" : "cineverse-multiplex:2026"}
                      </span>
                    </div>

                    {/* Sphere UI Preview */}
                    {project.previewType === "sphere" && (
                      <div className="space-y-4">
                        {/* Multi-bank sync bar */}
                        <div className="p-3.5 rounded-xl bg-card/60 border border-border/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Connected Banking APIs</span>
                            <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Aggregator
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
                            <div className="p-2 rounded-lg bg-secondary/80 border border-border/40 text-foreground">SBI</div>
                            <div className="p-2 rounded-lg bg-secondary/80 border border-border/40 text-foreground">HDFC</div>
                            <div className="p-2 rounded-lg bg-secondary/80 border border-border/40 text-foreground">ICICI</div>
                            <div className="p-2 rounded-lg bg-secondary/80 border border-border/40 text-foreground">Axis</div>
                          </div>
                        </div>

                        {/* Credit health & DTI gauge */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-card/60 border border-border/50 flex flex-col justify-between">
                            <span className="text-[11px] font-medium text-muted-foreground">Credit Health</span>
                            <div className="my-1.5">
                              <span className="text-2xl font-black text-emerald-400">785</span>
                              <span className="text-xs text-muted-foreground"> / 900</span>
                            </div>
                            <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">Excellent Tier</span>
                          </div>

                          <div className="p-3.5 rounded-xl bg-card/60 border border-border/50 flex flex-col justify-between">
                            <span className="text-[11px] font-medium text-muted-foreground">DTI Score</span>
                            <div className="my-1.5">
                              <span className="text-2xl font-black text-indigo-400">28.4%</span>
                            </div>
                            <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wide">Low Risk Ratio</span>
                          </div>
                        </div>

                        {/* Setu AA Sandbox Verified Banner */}
                        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Setu AA Consent Verified</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground font-mono">Sandbox OK</span>
                        </div>
                      </div>
                    )}

                    {/* CineVerse UI Preview */}
                    {project.previewType === "cineverse" && (
                      <div className="space-y-4">
                        {/* Curved Screen Simulation */}
                        <div className="relative pt-2 pb-3 text-center">
                          <div className="w-full h-2.5 bg-gradient-to-r from-transparent via-rose-500/60 to-transparent rounded-full shadow-[0_0_15px_rgba(244,63,94,0.5)] mb-1.5" />
                          <span className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground">
                            CURVED ULTRA-WIDE AUDITORIUM SCREEN
                          </span>
                        </div>

                        {/* Tiered Cinema Seats Grid */}
                        <div className="p-3 rounded-xl bg-card/60 border border-border/50 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-semibold">
                            <span className="text-amber-400">Royal Recliners (₹450)</span>
                            <span className="text-muted-foreground font-mono">Rows G-H</span>
                          </div>
                          <div className="flex justify-center gap-2">
                            {[1, 2, 3, 4].map(s => (
                              <div key={s} className="w-7 h-5 rounded bg-amber-500/20 border border-amber-500/40 text-[9px] font-mono flex items-center justify-center text-amber-300">
                                R{s}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-[11px] font-semibold pt-1">
                            <span className="text-indigo-400">Executive Tier (₹350)</span>
                            <span className="text-muted-foreground font-mono">Rows D-F</span>
                          </div>
                          <div className="flex justify-center gap-1.5">
                            {[1, 2, 3, 4, 5, 6].map(s => (
                              <div key={s} className="w-6 h-4 rounded bg-indigo-500/20 border border-indigo-500/40 text-[9px] font-mono flex items-center justify-center text-indigo-300">
                                E{s}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CineBot & Thermal Ticket Highlights */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-rose-400 font-bold mb-1">
                              <Bot className="w-3.5 h-3.5" />
                              <span className="text-[11px]">CineBot AI</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-tight">
                              Gemini 3.1 Flash mood-based film curation
                            </p>
                          </div>

                          <div className="p-3 rounded-xl bg-secondary/80 border border-border/50 flex flex-col justify-between">
                            <div className="flex items-center gap-1.5 text-foreground font-bold mb-1">
                              <QrCode className="w-3.5 h-3.5 text-primary" />
                              <span className="text-[11px]">Thermal Pass</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-tight">
                              Instant thermal receipt & PDF admission pass
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Divider & Heading for More Projects */}
        <div className="pt-8 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">More Engineering Projects</h3>
          <p className="text-muted-foreground text-sm">
            Scalable backend architectures, campus community networks, and IoT machine learning pipelines.
          </p>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-border/40 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full project-card-containment hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-secondary/70 rounded-2xl group-hover:scale-110 transition-transform duration-300 border border-border/40">
                  {project.icon}
                </div>
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-secondary/80 text-foreground/80 hover:text-primary hover:bg-secondary transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
              </div>

              <span className={`px-3 py-1 rounded-full text-[11px] font-bold border tracking-wider uppercase w-max mb-3 ${project.badgeColor || "text-muted-foreground bg-secondary/50 border-border/40"}`}>
                {project.category}
              </span>

              <h4 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground font-medium mb-3">
                {project.subtitle}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border/40">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <div className="pt-4 mt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group/link"
                  >
                    <span>Explore on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
