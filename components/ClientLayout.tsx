"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { sidebarMenus } from "@/config/SidebarConfig";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  let currentMenu: any = null;
  if (pathname.startsWith("/home")) currentMenu = sidebarMenus.home;
  else if (pathname.startsWith("/documents")) currentMenu = sidebarMenus.document;
  else if (pathname.startsWith("/users")) currentMenu = sidebarMenus.users;
  else if (pathname.startsWith("/settings")) currentMenu = sidebarMenus.seeting; // typo fix: settings

  return (
    <div className="flex flex-1 relative">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "w-56" : "w-0"
        } overflow-hidden border-r bg-[#f7f9fc] dark:bg-gray-900`}
      >
        {currentMenu && <Sidebar items={currentMenu} />}
      </div>

      {/* Toggle button */}
      {currentMenu && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute top-5 z-50 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full p-1 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300
            ${isSidebarOpen ? "left-56 -ml-3" : "left-2 -ml-3"}`}
        >
          {isSidebarOpen ? (
            <ArrowLeftToLine className="text-foreground" size={18} />
          ) : (
            <ArrowRightToLine className="text-foreground" size={18} />
          )}
        </button>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="h-16 border-b bg-white dark:bg-gray-800">
          <Topbar />
        </div>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
