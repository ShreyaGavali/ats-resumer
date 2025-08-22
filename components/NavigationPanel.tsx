import { Home, Users, ClipboardList, Settings } from "lucide-react";
import Link from "next/link";
import logoImg from "../public/logoImg.png"
import Image from "next/image";

export default function NavigationPanel() {
  return (
    <div className="flex flex-col gap-6 ">
        <div className="logo bg-white p-2 rounded-2xl">
            <Image src={logoImg} alt="Logo" height={30} width={30}  />
        </div>
        <div className="items flex flex-col gap-6 mt-3 ml-3">
          <Link href="/home"><Home /></Link>
          <Link href="/users"><Users /></Link>
          <Link href="/documents"><ClipboardList /></Link>
          <Link href="/seetings"><Settings /></Link>
        </div>
    </div>
  );
}
