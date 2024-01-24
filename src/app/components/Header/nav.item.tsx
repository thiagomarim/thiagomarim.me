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
        "text-zinc-400 flex items-center gap-2 font-medium",
        isActive && "text-white"
      )}
    >
      <span className="text-[#007DB3]">#</span>
      {label}
    </Link>
  );
}
