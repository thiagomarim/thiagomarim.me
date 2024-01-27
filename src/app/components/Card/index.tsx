"use client";

import Image from "next/image";
import { TiArrowForward } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/app/types/project";

interface CardProps {
  project: Project;
}

export function Card({ project }: CardProps) {
  return (
    <div className="flex gap-2 xl:gap-14 flex-wrap md:flex-nowrap justify-center xl:justify-normal items-center m-auto bg-[#202024] border-[1px] border-[#323238] my-14 rounded-md">
      <div className="py-6 px-6">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={420}
          height={304}
          className="rounded-md hover:scale-95 hover:cursor-zoom-in transition-all duration-500"
        />
      </div>
      <div className="flex flex-col justify-center mb-6 sm:mb-6 xl:mb-0 mt-0 md:mt-5 xl:mt-0 mx-5 xl:mx-0">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-[#E1E1E6] text-xl mb-2 text-center sm:text-start before:content-[''] before:bg-blue-500 before:rounded-full before:w-[8px] before:h-[8px] before:inline-block">
            {project.title}
          </h3>
          <span className="text-sm text-[#E1E1E6]">{project.date}</span>
        </div>

        <div className="font-normal text-base text-[#A9A9B2] max-w-[450px] leading-5 text-center sm:text-start lg:leading-6">
          {project.shortDescription}
        </div>
        <div className="flex items-center justify-center sm:justify-normal gap-2 mt-4">
          {project.technologies?.map((tech) => (
            <span
              key={tech.name}
              className="text-[#E1E1E6] bg-blue-500 text-sm py-1 px-3 rounded-lg"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.liveProjectUrl}
            target="_blank"
            className="flex items-center gap-2 mt-6 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all"
          >
            <TiArrowForward />
            Visitar
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 mt-6 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all"
          >
            <FaGithub />
            Código Fonte
          </a>
        </div>
      </div>
    </div>
  );
}
