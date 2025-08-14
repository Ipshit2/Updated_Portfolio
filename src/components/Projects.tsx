'use client'
import React from 'react';
import Heading from './ui/Heading';
import ProjectCard from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="h-auto py-10">
      <Heading name="project" />

      <div className="mx-auto max-w-6xl space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectCard
            title='Book Tracking and Management Application'
            description="Developed a web application for managing and tracking book collections. It integrates the Google Books API to enable book searches and fetch detailed information such as authors and descriptions. The app includes user authentication, responsive design, and seamless book organization, showcasing expertise in API integration and user-friendly development."
            techStack="PERN"
            imageUrl="https://res.cloudinary.com/dhkxu4caj/image/upload/v1755156620/Screenshot_2025-08-14_125718_kl5u51.png"
            githubUrl="https://github.com/Ipshit2/BookBear"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProjectCard
            title="Customizable Food Ordering Application"
            description="Developed a full-stack customizable food ordering web application using the MERN stack. Implemented JWT authentication, RESTful APIs, and a responsive React frontend for seamless user experience. Enabled dynamic menu browsing, order customization, cart management, and secure checkout, showcasing strong skills in full-stack development and API integration."
            techStack="MERN"
            imageUrl="https://res.cloudinary.com/dhkxu4caj/image/upload/v1755158740/Screenshot_2025-08-14_133510_g5neac.png"
            githubUrl="https://github.com/Ipshit2/Custom-foods"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProjectCard
            title="Pokemon API Application"
            description="Developed a Pokedex app using the Pokémon API with a React and Tailwind CSS interface. Implemented pagination for smooth navigation, displaying key Pokémon details like ID, name, types, and images. Optimized API handling and ensured responsive design for a seamless user experience."
            techStack="ReactJS"
            imageUrl="https://res.cloudinary.com/dhkxu4caj/image/upload/v1755160573/Screenshot_2025-08-14_140543_qixxue.png"
            githubUrl="https://github.com/Ipshit2/Poke-dex"
          />
        </motion.div>
      </div>
    </section>
  );
}
