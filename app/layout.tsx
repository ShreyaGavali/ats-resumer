import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationPanel from "@/components/NavigationPanel";
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen flex bg-gray-100 dark:bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Static Left Navigation */}
          <div className="w-16 border-r bg-[#f7f9fc] dark:bg-gray-800 flex flex-col items-center py-4">
            <NavigationPanel />
          </div>

          {/* Sidebar + Topbar + Content (client controlled) */}
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
