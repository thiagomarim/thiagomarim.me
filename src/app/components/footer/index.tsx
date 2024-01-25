import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export function Footer() {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-[#202024]">
      <span className="flex items-center gap-1.5 text-[#A9A9B2]">
        Feito com <IoMdHeart size={16} className="text-blue-500" /> por Thiago
        Soares Marim
      </span>
    </footer>
  );
}
