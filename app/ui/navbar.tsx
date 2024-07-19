import Link from "next/link";
import clsx from "clsx";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
   return (
      <nav className="p-4 border-b">
         <div className="md:p-2 flex items-center justify-between">
            <div className="nav-left">
               <Bars3Icon className="block md:hidden w-8 cursor-pointer" />
               <Link href="/" className="hidden md:block text-2xl font-bold">
                  <span className="text-cyan-400">MAR</span>
                  <span>Comic</span>
               </Link>
            </div>
            <NavLink />
            <div className="nav-right flex items-center gap-x-4">
               <MagnifyingGlassIcon className="w-9 border border-neutral-700 p-2 rounded-full cursor-pointer hover:bg-neutral-100 duration-100" />
               <Link href="/signin" className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-300 hover:to-blue-500 duration-100 text-white px-4 py-2 rounded-full">
                  Sign in
               </Link>
            </div>
         </div>
      </nav>
   );
};

const NavLink = () => {
   const navigation = [
      {
         nav: "Home",
         href: "/",
      },
      {
         nav: "Genre",
         href: "/genre",
      },
      {
         nav: "Popular",
         href: "/popular",
      },
   ];

   const activePath = "/";
   const menus = navigation.map((menu) => (
      <Link
         href={menu.href}
         key={menu.nav}
         className={clsx("block py-2 md:flex md:py-0 hover:text-blue-500 duration-100", {
            "font-semibold": menu.href == activePath,
         })}
      >
         {menu.nav}
      </Link>
   ));

   return (
      <div className="nav-link">
         <div className="hidden md:flex items-center gap-x-8">{menus}</div>
         <aside>
            <div className="block md:hidden fixed left-0 top-0 bottom-0 w-80 bg-neutral-700 text-white border-r py-5 px-3">
               <div className="flex justify-between items-center mb-4">
                  <Link href="/" className="text-2xl font-bold">
                     <span className="text-cyan-400">MAR</span>
                     <span>Comic</span>
                  </Link>
                  <XMarkIcon className="w-6 cursor-pointer" />
               </div>
               {menus}
            </div>
         </aside>
      </div>
   );
};

export default Navbar;
