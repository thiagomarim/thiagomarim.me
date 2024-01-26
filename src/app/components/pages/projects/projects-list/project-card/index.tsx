import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";

export function ProjectCard() {
  return (
    <div className="flex flex-col rounded-lg h-[436px] bg-[#202024] overflow-hidden border-2 border-[#323238] group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/project.svg"
          alt=""
          width={380}
          height={200}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 transition-all group-hover:duration-500 opacity-70 group-hover:opacity-100 "
        />
      </div>

      <div className="flex flex-col flex-1 p-8">
        <strong className="text-[#E1E1E6] text-xl">Dogs</strong>
        <p className="text-[#A9A9B2] text-base mt-2">
          Um site completo com o intuito de ser um blog para cachorros,
          utilizando React, React Router e API externas. Realizado no curso de
          React na origamid.
        </p>
        <span className="max-w-max mt-3 text-[#E1E1E6] bg-blue-500 text-sm py-1 px-3 rounded-lg">
          React.js, Vite
        </span>
        <div className="flex items-center gap-2 mt-3">
          <a
            href=""
            className="flex items-center gap-2 bg-[#121214] py-2 px-4 max-w-max rounded-lg border-2 border-[#323238] text-gray-300 text-sm hover:scale-95 transition-all"
          >
            <TiArrowForward />
            Visitar
          </a>
          <a
            href=""
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
