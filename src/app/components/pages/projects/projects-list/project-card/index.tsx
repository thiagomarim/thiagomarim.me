import { Project } from "@/app/types/project";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg h-[500px] bg-[#202024] border-2 border-[#323238] group">
      <Dialog.Root>
        <div className="w-full h-48 overflow-hidden">
          <Dialog.Trigger>
            <Image
              src={project.thumbnail.url}
              alt={`Foto do projeto ${project.title}`}
              width={380}
              height={200}
              unoptimized
              className="w-full rounded-sm h-full object-cover group-hover:scale-110 transition-all group-hover:duration-500 opacity-70 group-hover:opacity-100 hover:cursor-zoom-in"
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
              width={1280}
              height={720}
              className="outline-none"
              quality={100}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="flex flex-col flex-1 p-8">
        <strong className="text-[#E1E1E6] text-xl">{project.title}</strong>
        <p className="text-[#A9A9B2] text-base mt-2 mb-4 h-[120px] flex-1">
          {project.shortDescription}
        </p>
        <div className="flex items-center gap-2 truncate">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="text-gray-300 text-sm font-medium block mt-auto p-1 bg-blue-500  rounded-md"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6">
          <a
            href={project.liveProjectUrl}
            target="_blank"
            className="flex items-center gap-2 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all"
          >
            <TiArrowForward />
            Visitar
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all"
          >
            <FaGithub />
            Código Fonte
          </a>
        </div>
      </div>
    </div>
  );
}
