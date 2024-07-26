"use client";

import Link from "next/link";
import clsx from "clsx";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { ModalContext } from "./provider";

const Navbar = () => {
   const [sidebar, setSidebar] = useState<boolean>(false);
   const { modal, setModal } = useContext(ModalContext);

   return (
      <nav className="py-6 px-8 md:px-12 h-[12%]">
         <div className="flex items-center justify-between">
            <div className="nav-left">
               <Bars3Icon className="block md:hidden w-8 cursor-pointer" onClick={() => setSidebar(!sidebar)} />
               <Link href="/" className="hidden md:block text-3xl font-bold">
                  <span>MAR</span>
                  <span className="text-white">Comic</span>
               </Link>
            </div>
            <NavLink sidebar={sidebar} onValueChange={setSidebar} />
            <div className="nav-right flex items-center gap-x-4">
               <button  className="bg-gray-600 hover:bg-gray-500 duration-100 text-white font-medium px-4 py-2 rounded-full shadow-md shadow-neutral-400" onClick={() => setModal(!modal)}>
                  Sign in
               </button>
            </div>
         </div>
      </nav>
   );
};

const NavLink = ({ sidebar, onValueChange }: { sidebar: boolean; onValueChange: (val: boolean) => void }) => {
   const navigation = [
      {
         nav: "Home",
         href: "/",
      },
      {
         nav: "About",
         href: "/about",
      },
      {
         nav: "Contact",
         href: "/contact",
      },
   ];

   const pathname = usePathname();
   const menus = navigation.map((menu) => (
      <Link
         href={menu.href}
         key={menu.nav}
         className={clsx("block text-white py-2 md:flex md:py-0 hover:text-blue-400 md:hover:text-gray-600 duration-100", {
            "font-semibold": menu.href == pathname,
         })}
      >
         {menu.nav}
      </Link>
   ));

   return (
      <div className="nav-link">
         <div className="hidden md:flex items-center gap-x-8">{menus}</div>
         {/* Sidebar */}
         {sidebar && (
            <aside className="block md:hidden fixed left-0 top-0 bottom-0 w-80 bg-neutral-700 text-white py-5 px-4 z-10">
               <div >
                  <div className="flex justify-between items-center mb-4">
                     <Link href="/" className="text-2xl font-bold">
                        <span className="text-cyan-400">MAR</span>
                        <span>Comic</span>
                     </Link>
                     <XMarkIcon className="w-7 cursor-pointer" onClick={() => onValueChange(!sidebar)} />
                  </div>
                  {menus}
               </div>
            </aside>
         )}
      </div>
   );
};

export default Navbar;
