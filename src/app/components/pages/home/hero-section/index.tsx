import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <h1 className="text-[64px] max-w-[448px] font-bold text-white">
            Desenvolvedor Front-end
          </h1>
          <span className="text-[#A9A9B2] text-xl">
            Localizado em São Paulo - Brazil
          </span>
        </div>

        <div className="h-full flex max-w-[320px] flex-col gap-5">
          <div className="flex gap-2">
            <Image src="/images/icons/html.svg" width={50} height={50} alt="" />
            <Image src="/images/icons/css.svg" width={50} height={50} alt="" />
            <Image
              src="/images/icons/javascript.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/images/icons/react.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/images/icons/typescript.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/images/icons/tailwind.svg"
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div>
            <span className="text-[#E1E1E6] text-xl">
              Olá, eu sou <strong>Thiago Soares Marim</strong>, Desenvolvedor
              totalmente apaixonado pelo Front-end.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
