'use client';
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white font-Pop flex w-full space-x-5 p-4 border-2 bg-[#151414] rounded-lg border-[#262424]">
      {/* Text Section */}
      <div className="space-y-3 w-2/3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="tracking-wide text-justify leading-loose text-[#b5b5b5]">{description}</p>
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-[#b5b5b5]">Tech Stack Used – {techStack}</p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-3xl">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/3">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={title}
          className="w-full h-full rounded-sm border-1 border-[#262424] object-cover cursor-pointer"
          priority
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={imageUrl}
              width={1200}
              height={800}
              alt={`Zoomed ${title}`}
              className="w-full h-auto object-contain transition-transform duration-300"
            />
            <button
              className="absolute -top-10 -right-10 text-gray-400 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
