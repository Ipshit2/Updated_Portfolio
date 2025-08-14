'use client'
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

function Landing() {
  const socials = [
    { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ipshit-haste-4bb14b267/" },
    { Icon: FaGithub, label: "GitHub", href: "https://github.com/Ipshit2" },
    { Icon: MdEmail, label: "Email", href: "mailto:ipshithaste@email.com" },
    { Icon: FaSquareXTwitter, label: "Twitter", href: "https://x.com/IpshitH" },
    { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/yourusername" },
  ];

  return (
    <div className="relative flex h-auto p-15 space-x-30">
      <div className="absolute top-1/2 left-1/2 translate-x-1/8 border-2 rounded-4xl border-[#242844] -translate-y-1/2 h-120 w-100 z-10">
        <Image
          src="/photo.jpg"
          width={500}
          height={500}
          alt="image"
          className="w-full h-full object-cover rounded-4xl grayscale-100"
          priority
        />
      </div>

      <div className="border-[#313131] border-2 bg-[#151414] rounded-4xl w-2/3 px-15 py-35 font-Pop space-y-6">
        <h1 className="text-[#b5b5b5] text-lg tracking-wide">Hi, I am Ipshit</h1>
        <motion.h1
          className="text-8xl font-bold text-white tracking-wide"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          SOFTWARE <br />{" "}
          <span className="text-[#242844]">ENGINEER</span>
        </motion.h1>
        <h1
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="text-white border-b-2 w-min border-[#242844] px-1 text-lg cursor-pointer tracking-wide transition-all duration-300 ease-in-out hover:scale-105 hover:border-white"
        >
          Resume
        </h1>
      </div>

      <div className="border-[#262424] border-2 bg-[#151414] rounded-4xl w-1/3 flex flex-col items-end px-15 justify-center py-10 space-y-6">
        {socials.map(({ Icon, label, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#b5b5b5] cursor-pointer hover:scale-110 hover:text-[#2d325a] transition-all"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,   
              ease: "circOut",  
              delay: idx * 0.15 
            }}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Landing;
