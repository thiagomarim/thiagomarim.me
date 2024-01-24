import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav.item";

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
    <header className="w-full h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image width={44} height={44} src="/images/logo.svg" alt="" />
          <span className="text-white text-xl font-bold">
            Thiago Soares Marim
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
