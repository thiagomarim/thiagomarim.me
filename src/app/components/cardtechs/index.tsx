import { KnownTech } from "@/app/types/project";
import { CMSIcon } from "../cms-icon";

interface CardTechsProps {
  tech: KnownTech;
}

export function CardTechs({ tech }: CardTechsProps) {
  return (
    <div className="flex items-center gap-4 bg-[#202024] border-2 border-[#323238] rounded-md w-[210px] h-[50px] px-4 py-2">
      <div className="text-2xl">
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <div>
        <span className="text-base text-[#E1E1E6]">{tech.name}</span>
      </div>
    </div>
  );
}
