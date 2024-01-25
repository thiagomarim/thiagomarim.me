import { ReactNode } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

interface SocialNetworksProps {
  type: string;
  icon: ReactNode;
  social: string;
  link: string;
}

export function SocialNetworks({
  type,
  icon,
  social,
  link,
}: SocialNetworksProps) {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#121214] p-6 rounded-lg">
      <h3 className="flex items-center gap-2 justify-center">
        {type} {icon}
      </h3>
      <span>{social}</span>
      <a
        href={link}
        target="_blank"
        className="text-white text-[14px] flex items-center justify-center gap-2 text-center border-2 border-[#323238] bg-[#202024] hover:bg-[#323238] py-3 px-2 rounded-md mt-2 lg:mt-2 hover:scale-95 transition-all"
      >
        Entrar em contato <HiArrowNarrowRight size={18} />
      </a>
    </div>
  );
}
