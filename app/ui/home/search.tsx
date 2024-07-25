"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();

   const handleSearch = useDebouncedCallback((term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set("search", term);
      } else {
         params.delete("search");
      }
      replace(`${pathname}?${params.toString()}`);
   }, 500);

   return (
      <>
         <input
            type="text"
            placeholder="by title, tag, author"
            className="py-2 md:py-3 ps-6 pe-16 w-full text-gray-700 border border-gray-200 rounded-full shadow-md focus:outline-0 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("search")?.toString()}
         />
      </>
   );
};

export default Search;
