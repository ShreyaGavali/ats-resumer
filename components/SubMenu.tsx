// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface SidebarDropdownProps {
//   childrenItems: { label: string; href: string }[];
//   isOpen: boolean;
// }

// const SubMenu = ({ childrenItems, isOpen }: SidebarDropdownProps) => {
//   const pathname = usePathname();

//   if (!isOpen) return null;

//   return (
//     <div className="ml-4 flex flex-col relative">
//       {/* Vertical line */}
//       <div className="absolute top-2 -left-2 h-14 border-l-2 border-black dark:border-white m-2"></div>

//       {childrenItems.map((child) => (
//         <div className="h-10 rounded-xl">
//         <Link
//           key={child.label}
//           href={child.href}
//           className={`relative pl-8 py-1 text-sm flex items-center transition-colors rounded-xl hover:bg-white dark:hover:bg-gray-600 mt-2
//             ${pathname === child.href ? "font-semibold" : ""}`}
//         >
//           <svg
//             className="absolute left-0 top-1 w-7 h-7"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path d="M0 0 v12 q0 6 6 6 h12" />
//           </svg>
//           <div className="mt-2">{child.label}</div>
//         </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SubMenu;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarDropdownProps {
  childrenItems: { label: string; href: string }[];
  isOpen: boolean;
}

const SubMenu = ({ childrenItems, isOpen }: SidebarDropdownProps) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="ml-4 flex flex-col relative">
      {/* Vertical line */}
      <div className="absolute top-2 left-0 h-14 border-l-2 border-black dark:border-white"></div>

      {childrenItems.map((child) => {
        const isActive = pathname === child.href;

        return (
          <div key={child.label} className="h-10 rounded-xl">
            <Link
              href={child.href}
              className={`relative pl-8 py-2 text-sm flex items-center transition-colors rounded-xl mt-2
                ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-300 dark:text-black"
                    : "text-foreground hover:bg-white dark:hover:bg-gray-600"
                }`}
            >
              {/* curve connector */}
              <svg
                className="absolute left-0 top-1 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 0 v12 q0 6 6 6 h12" />
              </svg>
              <div>{child.label}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;


