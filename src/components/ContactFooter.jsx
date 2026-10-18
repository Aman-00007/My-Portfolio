import { motion } from "framer-motion";
import { Mail, Phone, FileText, Send } from "lucide-react";

export default function ContactFooter() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aman-rawat-a94380324/", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, color: "hover:text-blue-500" },
    { name: "GitHub", url: "https://github.com/Aman-00007", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>, color: "hover:text-gray-300" },
    { name: "Medium", url: "https://medium.com/@itzamanrawat123", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42zm2.66 0c0 3.12-.59 5.65-1.31 5.65-.72 0-1.32-2.53-1.32-5.65s.6-5.65 1.32-5.65c.72 0 1.31 2.53 1.31 5.65z" /></svg>, color: "hover:text-green-500" },
    { name: "LeetCode", url: "https://leetcode.com/u/aman_1004/", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.636c-1.254-1.282-3.068-1.776-4.937-1.776-1.87 0-3.668.51-4.921 1.776l-4.332 4.363c-1.267 1.254-1.925 3.036-1.925 4.906s.658 3.652 1.925 4.906l4.332 4.363c1.253 1.254 3.051 1.776 4.921 1.776s3.683-.522 4.937-1.776l2.606-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.901-.038zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" /></svg>, color: "hover:text-yellow-500" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a href="mailto:itzamanrawat123@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-secondary/80 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">itzamanrawat123@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918720019428" className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-secondary/80 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Phone</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">+91 87200 19428</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <form action="https://formsubmit.co/itzamanrawat123@gmail.com" method="POST" className="flex flex-col gap-5">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New message from your portfolio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Your message..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background font-bold rounded-xl px-4 py-4 mt-2 hover:bg-primary transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-secondary/80 text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/80 text-foreground transition-all duration-300 hover:scale-110 hover:text-primary flex items-center justify-center"
              aria-label="Resume"
              title="Download Resume"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            © {new Date().getFullYear()} Aman Rawat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
