"use client";

import { CMSIcon } from "../../../cms-icon";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  homeInfo: HomePageInfo;
}

export function HeroSection({ homeInfo }: HeroSectionProps) {
  return (
    <section className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-center text-center justify-center flex-col">
        <motion.div
          className="w-full flex flex-col gap-2 lg:gap-2"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center gap-4 justify-center text-4xl sm:text-6xl font-bold text-white before:content-[''] before:w-[10px] before:bg-blue-500 before:h-[24px] sm:before:content-[''] sm:before:bg-blue-500 sm:before:w-[16px] sm:before:h-[42px] sm:before:inline-block">
            Desenvolvedor
          </span>
          <span className="text-4xl sm:text-6xl font-bold text-white">
            Front-end
          </span>
          <span className="text-[#A9A9B2] sm:text-lg lg:text-lg lg:mt-1 text-center">
            Localizado em São Paulo - Brazil
          </span>
        </motion.div>

        <motion.div
          className="h-full flex max-w-[440px] flex-col gap-5 mt-5 lg:mt-0 "
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-8">
            <p className="text-[#E1E1E6] text-lg lg:text-lg">
              Olá, eu me chamo Thiago Soares Marim, sou Desenvolvedor totalmente
              apaixonado pelo Front-end.
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center">
            {homeInfo.socials.map((contact, i) => (
              <a
                key={i}
                href={contact.url}
                target="_blank"
                className="text-[#E1E1E6] hover:text-white hover:scale-90 transition-all"
              >
                <CMSIcon icon={contact.iconSvg} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex gap-4 items-center justify-center lg:justify-start mt-20"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mr-6">
            <span className="flex text-[#A9A9B2] items-center gap-6 after:content-[''] after:w-[2px] after:bg-[#A9A9B2] after:h-[20px] after:inline-block">
              Tech Stack
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-6">
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
        </motion.div>
      </div>
    </section>
  );
}
