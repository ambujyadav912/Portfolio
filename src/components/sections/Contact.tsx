"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-[80vh] py-24 px-6 md:px-12 xl:px-24 flex items-center border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 w-full h-full bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white mb-6 leading-none relative z-10">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              SOMETHING.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted text-xl md:text-2xl font-medium max-w-2xl mb-16"
        >
          Have an idea, project or opportunity? Let's connect.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="mailto:ahirambuj4@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm rounded-full hover:scale-105 transition-all w-full sm:w-auto"
          >
            SEND EMAIL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-8 mt-24"
        >
          <a href="https://github.com/ambujyadav912" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.4 5.4 0 0 0-.1 3.7A5.4 5.4 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/ambuj-shyampat-yadav-5abb58435?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://instagram.com/up_ambuj_62" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="mailto:ahirambuj4@gmail.com" className="text-muted hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
