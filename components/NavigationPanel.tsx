// import { Home, Users, ClipboardList, Settings } from "lucide-react";
// import Link from "next/link";
// import logoImg from "../public/logoImg.png"
// import Image from "next/image";

// export default function NavigationPanel() {
//   return (
//     <div className="flex flex-col gap-6 ">
//         <div className="logo bg-white p-2 rounded-2xl">
//             <Image src={logoImg} alt="Logo" height={30} width={30}  />
//         </div>
//         <div className="items flex flex-col gap-6 mt-3 ml-3">
//           <Link href="/home"><Home /></Link>
//           <Link href="/users"><Users /></Link>
//           <Link href="/document"><ClipboardList /></Link>
//           <Link href="/seeting"><Settings /></Link>
//         </div>
//     </div>
//   );
// }


"use client"
import Image from 'next/image';
import logoImg from '../public/logoImg.png';
import { BookText, ClipboardList, House, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationPanel = () => {
    const pathname = usePathname();
    const linkClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/") ? "text-blue-500" : "text-foreground";
    const borderClasses = (path: string) =>
        pathname === path || pathname.startsWith(path + "/")
 ? "border-2 border-blue-500" : "border border-transparent";
    return (
        <div className=' dark:border-gray-600 w-16 h-screen bg-panel flex align-middle flex-col shadow-lg transition-colors duration-200'>
            <div className="logo  bg-background w-13 h-11 ml-2 rounded-2xl">
                <Image src={logoImg} alt="Logo"  width={36} height={36} className="w-9 h-auto mb-6 ml-2.5 mt-0 flex justify-center align-middle p-1" />
            </div>
            <div className="navigation-item m-4">
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/home")}`}>
                    <Link href='/home' className={linkClasses("/home")}><House /></Link>
                </div>
                <div className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/users")}`}>
                    <Link href='/users' className={linkClasses("/users")}><Users /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/document")}`}>
                    <Link href='/document' className={linkClasses("/document")}><BookText /></Link>
                </div>
                <div  className={`house mb-3 w-10 flex justify-center align-middle p-2 rounded-xl ${borderClasses("/seeting")}`}>
                    <Link href='/seeting' className={linkClasses("/seeting")}><Settings /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavigationPanel
