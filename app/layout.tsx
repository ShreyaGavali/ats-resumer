"use client";

import "./globals.css";
import NavigationPanel from "@/components/NavigationPanel";
import ClientLayout from "@/components/ClientLayout";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/system";  // ✅ Import HeroUI provider
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen flex bg-gray-200 dark:bg-gray-900">
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <HeroUIProvider className="flex w-screen" navigate={router.push}>
            <div className="w-16 h-screen mt-0 mb-0 border-r bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-4">
              <NavigationPanel />
            </div>
              <ClientLayout>{children}</ClientLayout>
          </HeroUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
