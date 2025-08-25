"use client";
import { Bell, Calendar, Moon, Search, Settings, Sparkles, Star, Sun, User } from "lucide-react";
import userImg from '../public/userImg.png';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button"
import {Button, ButtonGroup} from "@heroui/button";

export default function Topbar() {
   const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
   
  return (
    <div className="flex items-center justify-between  bg-topbar border-b h-16">
      {/* Left Section: Greeting + Date */}
      <div className="ml-8">
        <p className="font-medium text-foreground">Hi, Sachin</p>
        <p className="text-xs text-foreground">24/07/2025</p>
      </div>
      <div className="flex gap-10">
      <div className="search flex border-2 border-gray-200 h-10 w-70 align-middle gap-2 rounded-2xl ">
         <Search className="mt-2 ml-2" />
         <input type="text" placeholder="search" className="outline-none focus:outline-none" />
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Button isIconOnly aria-label="Like" color="danger" className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl">
          <Bell size={18} />
        </Button>
        <Button isIconOnly aria-label="Like" color="danger" className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl">
          <Calendar size={18} />
        </Button>
        <Button isIconOnly aria-label="Like" color="danger" className="border-2 h-10 w-28 dark:border-gray-600 bg-black text-white dark:bg-white dark:text-black rounded-xl">
          <Star size={18} /> Upgrade
        </Button>
       <div className="flex items-center gap-3">
        <Button 
          isIconOnly aria-label="Like" color="danger"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="size-10 p-2 border-2 border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-2xl "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
        <Button isIconOnly aria-label="Like" color="danger" className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl">
          <Settings size={18} />
        </Button>
        <Button isIconOnly aria-label="Like" color="danger" className="size-10 border-2 border-gray-300 dark:border-gray-600 mr-2 rounded-2xl">
          <User size={18} />
        </Button>
      </div>
      </div>
    </div>
  );
}
