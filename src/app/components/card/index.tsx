"use client";

import Image from "next/image";
import { TiArrowForward } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/app/types/project";
import { motion } from "framer-motion";

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface CardProps {
  project: Project;
}

export function Card({ project }: CardProps) {
  return (
    <motion.div
      className="flex gap-2 flex-row xl:gap-14 flex-wrap md:flex-nowrap justify-center lg:justify-normal items-center m-auto bg-[#202024] border-2 border-[#323238] my-14 rounded-md"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -150 }}
      transition={{ duration: 0.5 }}
    >
      <Dialog.Root>
        <div className="py-6 px-6">
          <Dialog.Trigger>
            <Image
              src={project.thumbnail.url}
              alt={`Thumbnail do projeto ${project.title}`}
              width={383}
              height={215}
              quality={100}
              className="rounded-md hover:cursor-zoom-in outline-none hover:scale-95 transition-all duration-300"
            />
          </Dialog.Trigger>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed bg-black/60" />
          <Dialog.Content className="z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-0 top-0 p-1.5 bg-[#121214]">
              <IoMdClose size={20} />
            </Dialog.Close>
            <Image
              src={project.thumbnail.url}
              alt={`Thumbnail do projeto ${project.title}`}
              className="w-full h-full"
              width={1280}
              height={720}
              quality={100}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="flex flex-col justify-center mb-6 sm:mb-6 xl:mb-0 mt-0 md:mt-5 xl:mt-0 mx-5 xl:mx-0">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-[#E1E1E6] text-xl mb-2 text-center sm:text-start">
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
              className="text-[#E1E1E6] bg-blue-500 text-sm py-[2px] px-[10px] rounded-lg"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.liveProjectUrl}
            target="_blank"
            className="flex items-center gap-2 mt-6 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all hover:duration-300"
          >
            <TiArrowForward />
            Visitar
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 mt-6 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all hover:duration-300"
          >
            <FaGithub />
            Código Fonte
          </a>
        </div>
      </div>
    </motion.div>
  );
}
