import Image from "next/image";
import { HiDownload } from "react-icons/hi";

interface CardProps {
  img: string;
  title?: string;
  desc: string;
  tech?: string;
  download?: boolean;
  techs?: string;
  more?: string;
}

export function Card({ img, title, desc, download, techs, more }: CardProps) {
  return (
    <div className="flex gap-2 xl:gap-14 flex-wrap md:flex-nowrap justify-center xl:justify-normal items-center m-auto bg-[#202024] border-[1px] border-[#323238] rounded-md">
      <div className="py-6 px-6">
        <Image
          src={img}
          alt=""
          width={500}
          height={305}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center mb-6 sm:mb-6 xl:mb-0 mt-0 md:mt-5 xl:mt-0 mx-5 xl:mx-0">
        <p className="font-normal text-base text-[#E1E1E6] max-w-[450px] leading-5 text-center sm:text-start lg:leading-6">
          {desc}
        </p>
        {download && (
          <a
            download={true}
            href="/CV-ThiagoSoaresMarim.pdf"
            className="text-white text-[14px] flex items-center justify-center gap-2 text-center bg-[#007DB3] hover:bg-[#176485] py-3 rounded-md mt-4 lg:mt-8 hover:scale-95 transition-all"
          >
            Baixar CV
            <HiDownload />
          </a>
        )}
      </div>
    </div>
  );
}
