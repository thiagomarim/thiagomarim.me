import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdCopyright } from "react-icons/md";

export function Footer() {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-[#202024]">
      <div>
        <p className="flex items-center gap-1.5 text-[#A9A9B2]">
          <strong>Thiago Soares Marim</strong> - Alguns direitos reservados{" "}
          <MdCopyright />
        </p>
      </div>
    </footer>
  );
}
