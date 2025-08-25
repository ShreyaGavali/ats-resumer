
"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/button"; // shadcn button

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
      ? "border-2 border-blue-500 text-blue-500 font-semibold"
      : "text-foreground hover:text-blue-500";

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
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-2 rounded-xl ${linkClasses(
                      item.href
                    )}`}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => toggleMenu(item.label)}
                  className={`w-full justify-start gap-2 rounded-xl border-2 transition-all ${
                    isOpen || pathname.startsWith("/users/candidates")
                      ? "font-semibold border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </Button>
              )}

              {/* Children */}
              {item.children && isOpen && (
                <div className="ml-4 flex flex-col relative">
                  {/* Vertical line */}
                  <div className="absolute top-2 left-0 h-10 border-l-2 text-blue-500 border-blue-500"></div>
                    {item.children.map((child, index) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`relative pl-8 py-1 text-sm flex items-center transition-colors
          ${pathname === child.href
                          ? "text-blue-500 font-semibold"
                          : "text-blue-500 hover:text-blue-500"}`}
                    >
                    
                      <svg
                        className="absolute left-0 top-1 w-7 h-7 text-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M0 0 v12 q0 6 6 6 h12" />
                      </svg>
                      <div className="mt-2">
                        {child.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
