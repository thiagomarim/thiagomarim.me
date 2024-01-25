import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export function Footer() {
  return (
    <footer className="h-14 w-full flex items-center justify-center gap-16 bg-[#202024]">
      <span className="flex items-center gap-1.5 text-[#A9A9B2]">
        Feito com <IoMdHeart size={16} className="text-blue-500" /> por Thiago
        Soares Marim
      </span>
      <span className="text-[#A9A9B2]">thiago.marim2005@gmail.com</span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/thiagomarim"
          target="_blank"
          className="text-[#E1E1E6] hover:text-white hover:scale-90 transition-all"
        >
          <FaGithub size={26} />
        </a>

        <a
          href="https://www.linkedin.com/in/thiago-marim/"
          target="_blank"
          className="text-[#E1E1E6] hover:text-white hover:scale-90 transition-all"
        >
          <FaLinkedin size={26} />
        </a>
      </div>
    </footer>
  );
}
