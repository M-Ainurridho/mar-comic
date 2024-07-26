"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const ButtonBack = () => {
   const handleClick = () => {
      window.history.back();
   };

   return (
      <button className="flex items-center mx-auto text-blue-700 hover:text-blue-500 duration-100" onClick={handleClick}>
         <ArrowLeftIcon className="w-4 me-2" /> Back
      </button>
   );
};
