"use client";

import { usePathname } from "next/navigation";

export const currentPath = () => {
   const pathname = usePathname();

   return pathname;
};
