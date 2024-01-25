"use client";

interface TitleProps {
  title: string;
  desc?: string;
}

export function Title({ title, desc }: TitleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-2xl justify-center flex gap-3 items-center text-white font-bold before:content-[''] before:bg-blue-500 before:w-2 before:h-4 before:inline-block">
        {title}
      </h1>
      <p className="text-center text-base text-[#A9A9B2]">{desc}</p>
    </div>
  );
}
