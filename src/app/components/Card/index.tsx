import Image from "next/image";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { Link } from "../link";
import { cn } from "@/app/lib/utils";

interface CardProps {
  img: string;
  title?: string;
  desc: string;
  download?: boolean;
  techs?: string[];
  more?: boolean;
  date?: string;
}

export function Card({
  img,
  title,
  desc,
  download,
  techs,
  more,
  date,
}: CardProps) {
  return (
    <div className="flex gap-2 xl:gap-14 flex-wrap md:flex-nowrap justify-center xl:justify-normal items-center m-auto bg-[#202024] border-[1px] border-[#323238] my-14 rounded-md">
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
        <div className="flex items-center justify-between">
          <h3
            className={cn(
              "flex items-center gap-2 text-[#E1E1E6] text-xl mb-2 text-center sm:text-start",
              title &&
                "before:content-[''] before:bg-blue-500 before:rounded-full before:w-[8px] before:h-[8px] before:inline-block"
            )}
          >
            {title}
          </h3>
          <span className="text-sm text-[#A9A9B2]">{date}</span>
        </div>

        <p className="font-normal text-base text-[#A9A9B2] max-w-[450px] leading-5 text-center sm:text-start lg:leading-6">
          {desc}
        </p>
        <div className="flex items-center justify-center sm:justify-normal gap-2 mt-4">
          {techs?.map((tech) => (
            <span
              key={tech}
              className="text-[#E1E1E6] bg-blue-500 text-sm py-1 px-3 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        {more && (
          <Link
            href="/projects/dogs"
            className="mt-4 flex items-center justify-center sm:justify-normal"
          >
            Ver projeto
            <HiArrowNarrowRight />
          </Link>
        )}

        {download && (
          <a
            download={true}
            href="/CV-ThiagoSoaresMarim.pdf"
            className="text-white text-[14px] flex items-center justify-center gap-2 text-center bg-blue-500 hover:bg-blue-600 py-3 rounded-md mt-4 lg:mt-8 hover:scale-95 transition-all"
          >
            Baixar CV
            <HiDownload />
          </a>
        )}
      </div>
    </div>
  );
}
