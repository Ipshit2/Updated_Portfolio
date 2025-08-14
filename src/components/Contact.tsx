'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Heading from './ui/Heading';

export default function Contact() {
  return (
    <section id='contact' className="h-auto py-10 font-Pop">
      <Heading name="Contact" />

      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="tracking-wide leading-loose text-[#b5b5b5]">
          Looking to collaborate or discuss an opportunity? Send your message through the form, and I’ll get back to you as soon as possible.
        </p>
      </motion.div>
      <motion.form
        className="max-w-3xl mx-auto py-10 flex flex-col items-center space-y-10 text-white"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b-2 placeholder:text-[#b5b5b5] border-[#2d325a] focus:outline-none px-1 py-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b-2 placeholder:text-[#b5b5b5] border-[#2d325a] focus:outline-none px-1 py-4"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border-b-2 placeholder:text-[#b5b5b5] border-[#2d325a] focus:outline-none px-1 py-4 text-lg resize-none"
        />
        <button
          type="submit"
          className="text-white my-10 border-b-2 px-8 py-4 border-[#2d325a] text-lg 
                    hover:scale-105  hover:border-[#242844] transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
