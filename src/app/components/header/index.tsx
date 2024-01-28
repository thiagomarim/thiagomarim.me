"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav.item";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export function Header() {
  return (
    <motion.header
      className="w-full h-24 flex items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image width={44} height={44} src="/images/logo.svg" alt="" />
          <span className="text-white text-lg sm:text-xl font-bold">
            Thiago Soares Marim
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
