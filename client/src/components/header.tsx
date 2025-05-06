"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { UserButton } from "./shared/user-button";

const navItems: { name: string; href: string }[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Pricing", href: "/pricing" },
  { name: "Privacy Policy", href: "/privacy" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-[#f7f7f6] shadow-md backdrop-blur"> {/* Light Brown background */}
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={"/"} className="mr-6 flex items-center space-x-2">
            {/* <img src="/logo.png" alt="Logo" className="h-8 w-15" /> */}
            <b className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-brown-500 shadow-lg tracking-wide">CA</b>


          </Link>
          <nav className="flex items-center space-x-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md", 
                  pathname === item.href
                    ? "text-blue-700 font-semibold" 
                    : "text-foreground/80" 
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <UserButton />
      </div>
    </header>
  );
}
