"use client";

import { RichText } from "@/app/components/rich-text";
import { Title } from "@/app/components/title";
import { HomePageInfo } from "@/app/types/page-info";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

interface AboutProps {
  aboutInfo: HomePageInfo;
}

export function About({ aboutInfo }: AboutProps) {
  return (
    <section className="container py-16">
      <Title
        title="Sobre mim"
        desc="Aqui você irá saber um pouco mais sobre mim."
      />
      <motion.div
        className="flex gap-2 xl:gap-14 flex-wrap md:flex-nowrap justify-center xl:justify-normal items-center m-auto bg-[#202024] border-[1px] border-[#323238] rounded-md"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -150 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-6 px-6">
          <Image
            src="/images/about-img.svg"
            alt=""
            width={500}
            height={305}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center mb-6 sm:mb-6 xl:mb-0 mt-0 md:mt-5 xl:mt-0 mx-5 xl:mx-0">
          <p className="font-normal text-base text-[#E1E1E6] max-w-[450px] leading-5 text-center sm:text-start lg:leading-6">
            <RichText content={aboutInfo.introduction.raw} />
          </p>
          <a
            download={true}
            href="/CV-ThiagoSoaresMarim.pdf"
            className="text-white text-[14px] flex items-center justify-center gap-2 text-center bg-[#007DB3] hover:bg-[#176485] py-3 rounded-md mt-4 lg:mt-8 hover:scale-95 transition-all"
          >
            Baixar CV
            <HiDownload />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
