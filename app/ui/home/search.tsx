"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface KeyboardEvent {
   keyCode: number;
}

const Search = () => {
   const [search, setSearch] = useState<string>("");
   const [loading, setLoading] = useState<boolean>(false);

   const router = useRouter();

   const handleSearch = (value: string) => {
      try {
         setLoading(true);
         setSearch(value);
      } finally {
         setTimeout(() => {
            setLoading(false);
         }, 2000);
      }
   };

   const handleSubmit = (e: KeyboardEvent) => {
      if (e.keyCode === 13 && search.length >= 3) {
         router.push(`/manga?query=${search}`);
      }
   };

   return (
      <>
         <div className="relative">
            <input
               type="text"
               placeholder="by title, tags, author"
               className="py-3 ps-6 pe-16 w-full text-gray-500 border border-gray-200 rounded-full shadow-md focus:outline-0 focus:ring-2 focus:ring-blue-500"
               onChange={(e) => handleSearch(e.target.value)}
               onKeyUp={handleSubmit}
            />

            {loading && (
               <div className="absolute right-5 top-0 bottom-0 flex items-center">
                  <div className="w-5 h-5 border border-2 border-gray-500 border-r-transparent animate-spin rounded-full"></div>
               </div>
            )}

            {search.length >= 3 && !loading && (
               <div className="absolute top-14 left-5 right-5 rounded-md overflow-hidden shadow">
                  <p className="p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">One Piece</p>
                  <p className="p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">One Punch Man</p>
                  <p className="p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">Boku no Hero Academia</p>
                  <p className="p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">Tensei Shitara Slime Data Ken</p>
               </div>
            )}
         </div>
      </>
   );
};

export default Search;
