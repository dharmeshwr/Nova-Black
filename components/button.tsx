"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UnderlineButton = ({ children, href, ...props }: { children: React.ReactNode, href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={cn(
        "uppercase tracking-widest text-xs outline-0 transition-colors duration-300",
        "relative cursor-pointer",
        isActive ? "text-neutral-800" : "text-neutral-400 hover:text-neutral-800",
        "after:absolute after:bottom-0 after:left-0",
        "after:h-px after:bg-neutral-800",
        "after:transition-all after:duration-300",
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
      )}
      {...props}
    >
      <Link href={href}>
        {children}
      </Link>
    </div>
  );
};
