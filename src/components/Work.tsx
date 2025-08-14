'use client';
import React from "react";
import { motion } from "framer-motion";
import Heading from "./ui/Heading";

interface WorkItem {
  id: number;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  year: string;
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "Abhi Ideas Website",
    role: "Full Stack Developer (Freelance)",
    description:
      "Built a responsive, professional website for an architectural design startup with Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "June 2025 - Ongoing",
  },
  {
    id: 2,
    title: "Salon Management App",
    role: "Full Stack Developer (Internship - ICEICO Technologies)",
    description:
      "Developed a full-stack salon management application with authentication, role-based access, and Cloudinary integration.",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB"],
    year: "Nov 2024 - April 2025",
  },
];

export default function Work() {
  return (
    <section id="work" className="h-auto py-10">
      <Heading name="Work" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-Pop">
        {workData.map((work) => (
          <motion.div
            key={work.id}
            className="rounded-lg p-6 bg-[#151414] border-2 border-[#262424]"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-white pb-1">{work.title}</h3>
            <p className="text-[#b5b5b5] pb-4">
              {work.role} <br /> {work.year}
            </p>
            <p className="text-[#b5b5b5] pb-6">{work.description}</p>
            <div className="flex flex-wrap gap-3">
              {work.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-white text-sm px-3 py-2 border-2 border-[#262424] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
