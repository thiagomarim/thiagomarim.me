"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-zinc-400 flex items-center gap-2 font-medium before:content-[''] before:bg-zinc-400  before:rounded-md before:w-2 before:h-2 before:inline-block",
        isActive && "text-white before:bg-blue-500"
      )}
    >
      {label}
    </Link>
  );
}
