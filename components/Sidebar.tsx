"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/button"; // shadcn button
import SubMenu from "./SubMenu";

interface SidebarProps {
  items: {
    label: string;
    href?: string;
    icon?: LucideIcon;
    children?: { label: string; href: string }[];
  }[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const linkClasses = (path: string) =>
    pathname === path
      ? "bg-gray-100 dark:bg-gray-300 dark:text-black"
      : "text-foreground hover:bg-white dark:hover:bg-gray-600";

  return (
    <div className="h-screen w-58 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-bold text-foreground text-lg">Dashboard</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col space-y-1">
        {items.map((item) => {
          const isChildActive =
            item.children?.some((child) => pathname.startsWith(child.href)) ??
            false;

          const isOpen =
            (item.children && openMenus.includes(item.label)) || isChildActive;

          return (
            <div key={item.label} className="relative">
              {/* Parent menu */}
              {item.href ? (
                <Button variant="ghost"
                  className={`w-full justify-start gap-2 rounded-xl hover:bg-white dark:hover:bg-gray-600 dark-text-black ${linkClasses(
                      item.href
                    )}`}
                >
                  <Link href={item.href} className="flex align-middle justify-center gap-2">
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => toggleMenu(item.label)}
                  className={`w-full justify-start gap-2 rounded-xl border-2 transition-all ${
                    isOpen || pathname.startsWith("/users/candidates")
                      ? "bg-gray-100 dark:bg-gray-300 dark:text-black"
                      : "text-foreground hover:bg-white dark:hover:bg-gray-600"
                  }`}
                >
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </Button>
              )}

              {/* Submenu */}
              {item.children && (
                <SubMenu childrenItems={item.children} isOpen={isOpen} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

