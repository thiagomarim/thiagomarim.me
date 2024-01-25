import Image from "next/image";

interface CardTechsProps {
  tech: string;
  img: string;
}

export function CardTechs({ tech, img }: CardTechsProps) {
  return (
    <div>
      <div>
        <div className="flex items-center gap-4 bg-[#202024] border-2 border-[#323238] rounded-md w-[210px] h-[50px] px-4 py-2">
          <Image src={img} alt="" width={30} height={30} />
          <span className="text-base text-[#E1E1E6]">{tech}</span>
        </div>
      </div>
    </div>
  );
}
