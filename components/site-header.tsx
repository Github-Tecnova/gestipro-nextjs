"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building, Calendar, ClipboardList, Home, Menu, Moon, Sun, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const mainNav = [
  {
    name: "Tableau de bord",
    href: "/",
    icon: Home,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: User,
  },
  {
    name: "Bâtiments",
    href: "/buildings",
    icon: Building,
  },
  {
    name: "Unités",
    href: "/units",
    icon: ClipboardList,
  },
  {
    name: "Baux",
    href: "/leases",
    icon: ClipboardList,
  },
  {
    name: "Demandes",
    href: "/requests",
    icon: ClipboardList,
  },
  {
    name: "Calendrier",
    href: "/calendar",
    icon: Calendar,
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto container px-4 md:px-6">
      <div className="container flex h-16 items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <Image 
                src="https://gestipro.info/wp-content/uploads/2021/02/gestipro-logo.png" 
                height={45} 
                width={150} 
                alt="Logo Gestipro" 
              />
            </Link>
            <div className="mt-8 flex flex-col gap-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="hidden md:flex items-center gap-2">
          <Image 
            src="https://gestipro.info/wp-content/uploads/2021/02/gestipro-logo.png" 
            height={45} 
            width={150} 
            alt="Logo Gestipro" 
          />
        </Link>
        <nav className="hidden md:flex items-center ml-auto gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-auto md:ml-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Changer le thème"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Changer le thème</span>
          </Button>
        </div>
      </div>
    </header>
  );
}