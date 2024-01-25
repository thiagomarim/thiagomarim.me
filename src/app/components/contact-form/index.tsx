"use client";

import { Title } from "../title";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineEmail } from "react-icons/md";
import { SocialNetworks } from "../social-networks";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(3).max(500),
});

type contactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { handleSubmit, register } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  function handleClickSubmit(data: contactFormData) {
    console.log(data);
  }

  return (
    <section className="bg-[#202024] flex items-center justify-center py-16 border-t-2 border-[#323238]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start flex-wrap gap-28">
        <div>
          <Title
            title="Me mande uma mensagem!"
            desc="Aqui você pode enviar uma mensagem para mim, quando você quiser."
          />
          <form
            onSubmit={handleSubmit(handleClickSubmit)}
            className="mt-12 w-full flex flex-col gap-4"
          >
            <input
              placeholder="Nome"
              {...register("name")}
              className="w-full h-14 bg-[#121214] rounded-lg  placeholder:text-[#A9A9B2] text-[#A9A9B2] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full h-14 bg-[#121214] rounded-lg placeholder:text-[#A9A9B2] text-[#A9A9B2] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              maxLength={500}
              placeholder="Mensagem"
              {...register("message")}
              className="resize-none w-full h-[138px] bg-[#121214] rounded-lg placeholder:text-[#A9A9B2] text-[#A9A9B2] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="mt-6">
              Enviar mensagem <HiArrowNarrowRight size={18} />
            </Button>
          </form>
        </div>
        <div>
          <Title title="Fale comigo" />
          <div className="flex flex-col flex-wrap gap-10">
            <SocialNetworks
              type="Email"
              icon={<MdOutlineEmail />}
              social="thiago.marim2005@gmail.com"
              link="#"
            />
            <SocialNetworks
              type="Github"
              icon={<FaGithub />}
              social="thiagomarim"
              link="https://github.com/thiagomarim"
            />
            <SocialNetworks
              type="Linkedin"
              icon={<FaLinkedin />}
              social="Thiago Soares Marim"
              link="https://www.linkedin.com/in/thiago-marim/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
