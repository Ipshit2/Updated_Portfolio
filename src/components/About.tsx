'use client';
import React, { useState } from "react";
import Heading from "./ui/Heading";
import Education from "./ui/Education";
import Skills from "./ui/Skills";
import { motion, AnimatePresence  } from "framer-motion";
export default function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");
  const tabItems: ("skills" | "education")[] = ["skills", "education"];

  return (
    <section id="about" className="h-auto py-10">
      <Heading name="about" />

      <div className="mx-auto max-w-6xl font-Pop space-y-10">
        <motion.p
          className="tracking-wide text-left leading-loose text-[#b5b5b5]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          IT Graduate seeking opportunities to apply versatile skills in Full stack development utilizing both front-end and back-end technologies to contribute to innovative projects. Eager to leverage knowledge gained from academic projects and internships to create innovative solutions and drive business growth.
        </motion.p>

        <div>
          <div className="flex py-6 space-x-20 text-white">
            {tabItems.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer font-semibold text-2xl tracking-wide px-2 pb-2 relative transition-all duration-300 ${
                  activeTab === tab
                    ? "border-b-2 border-[#2d325a]"
                    : "border-b-2 border-transparent hover:border-[#2d325a]/20"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Education />
              </motion.div>
            ) : (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Skills />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
