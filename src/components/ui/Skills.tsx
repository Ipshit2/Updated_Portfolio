'use client';
import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";

import skillsData from "@/lib/skills.json";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  SiTailwindcss,
  FaReact,
  RiNextjsFill,
  FaNodeJs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  FaGithub,
};

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = skillsData;

function Skills() {
  return (
    <div>
      <ul className="grid grid-cols-6 gap-8 text-white cursor-pointer">
        {skills.map(({ name, icon }) => {
          const IconComponent = iconMap[icon];
          return (
            <li
              key={name}
              className="border-[#262424] hover:scale-105 transition-all duration-200 border-2 bg-[#151414] w-28 h-28 flex flex-col justify-center items-center space-y-2"
            >
              <IconComponent className="text-3xl" />
              <h1 className="text-sm text-center">{name}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
