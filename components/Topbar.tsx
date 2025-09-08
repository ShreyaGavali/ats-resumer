"use client";
import {
  Bell,
  Calendar,
  Moon,
  Search,
  Settings,
  Star,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/button";
import { Input } from "@heroui/react";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // state for highlighting search bar
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();

        // add highlight effect
        setHighlight(true);
        setTimeout(() => setHighlight(false), 3000); // remove after 3s
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between bg-topbar h-16">
      {/* Left Section: Greeting + Date */}
      <div className="ml-8">
        <p className="font-medium text-foreground">Hi, Sachin</p>
        <p className="text-xs text-foreground">24/07/2025</p>
      </div>

      {/* Middle + Right */}
      <div className="flex gap-10">
        {/* Search */}
        <div
          className={`search flex border-2 border-gray-300 dark:border-gray-600 h-10 w-70 align-middle gap-2 rounded-2xl transition-shadow duration-300 
          ${highlight ? "shadow-lg shadow-gray-400/50" : ""}`}
        >
          <Input
            ref={inputRef}
            placeholder="Search"
            startContent={<Search className="mr-2" />}
            classNames={{
              inputWrapper:
                "focus:outline-none focus:ring-0 focus:ring-transparent border-none shadow-none",
              input:
                "focus:outline-none focus:ring-0 focus:ring-transparent",
            }}
            endContent={
              <div className="bg-gray-100 dark:bg-gray-600 dark:text-white h-6 w-6 text-center rounded">
                /
              </div>
            }
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            aria-label="Notifications"
            color="danger"
            className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl"
          >
            <Bell size={18} />
          </Button>
          <Button
            isIconOnly
            aria-label="Calendar"
            color="danger"
            className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl"
          >
            <Calendar size={18} />
          </Button>
          <Button
            isIconOnly
            aria-label="Upgrade"
            color="danger"
            className="border-2 h-10 w-28 dark:border-gray-600 bg-black text-white dark:bg-white dark:text-black rounded-xl"
          >
            <Star size={18} /> Upgrade
          </Button>
          <div className="flex items-center gap-3">
            <Button
              isIconOnly
              aria-label="Toggle theme"
              color="danger"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="size-10 p-2 border-2 border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-2xl "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
          <Button
            isIconOnly
            aria-label="Settings"
            color="danger"
            className="size-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl"
          >
            <Settings size={18} />
          </Button>
          <Button
            isIconOnly
            aria-label="User"
            color="danger"
            className="size-10 border-2 border-gray-300 dark:border-gray-600 mr-2 rounded-2xl"
          >
            <User size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
