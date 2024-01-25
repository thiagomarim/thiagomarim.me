import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-start bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center text-center lg:text-start lg:items-start lg:justify-between flex-col lg:flex-row">
        <div className="w-full flex flex-col gap-2 lg:gap-5">
          <span className="flex items-center gap-5 justify-center lg:justify-normal text-4xl sm:text-6xl lg:text-7xl font-bold text-white content-[''] before:w-[10px] before:bg-blue-500 before:h-[26px] sm:before:content-[''] sm:before:bg-blue-500 sm:before:w-[15px] sm:before:h-[50px] sm:before:inline-block">
            Desenvolvedor
          </span>
          <span className="text-4xl sm:text-6xl lg:text-7xl font-bold ml-[35px] text-white">
            Front-end
          </span>
          <span className="text-[#A9A9B2] ml-[35px] sm:text-lg  lg:text-xl text-center lg:text-start">
            Localizado em São Paulo - Brazil
          </span>
        </div>

        <div className="h-full flex max-w-[320px] flex-col gap-5 mt-5 lg:mt-0">
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <Image src="/images/icons/html.svg" width={40} height={40} alt="" />
            <Image src="/images/icons/css.svg" width={40} height={40} alt="" />
            <Image
              src="/images/icons/javascript.svg"
              width={40}
              height={40}
              alt=""
            />
            <Image
              src="/images/icons/react.svg"
              width={40}
              height={40}
              alt=""
            />
            <Image
              src="/images/icons/typescript.svg"
              width={40}
              height={40}
              alt=""
            />
            <Image
              src="/images/icons/tailwind.svg"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div>
            <span className="text-[#E1E1E6] text-lg lg:text-xl">
              Olá, eu sou <strong>Thiago Soares Marim</strong>, Desenvolvedor
              totalmente apaixonado pelo Front-end.
            </span>
          </div>
          <div className="flex items-center gap-5 justify-center lg:justify-start">
            <a
              href=""
              className="text-[#E1E1E6] hover:text-white transition-colors"
            >
              <FaGithub size={32} />
            </a>

            <a
              href=""
              className="text-[#E1E1E6] hover:text-white transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
