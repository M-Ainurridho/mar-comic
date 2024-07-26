"use client";

import { Mangadex } from "@/app/config/schema";
import { Fragment, useContext } from "react";
import { MangaContext } from "../provider";
import { useRouter } from "next/navigation";

const SearchResult = ({ query, datas }: { query: string; datas: Mangadex[] }) => {
   const { setManga } = useContext(MangaContext);
   const router = useRouter();

   const mangaStore = (manga: Mangadex) => {
      setManga({
         id: manga.id,
         type: manga.type,
         name: manga.attributes.title.en,
         description: manga.attributes.description.en,
         status: manga.attributes.status,
      });

      router.push(`/manga/${manga.id}`);
   };

   return (
      <Fragment>
         {query ? (
            datas.length > 0 ? (
               <div className="search-box absolute top-12 md:top-14 left-5 right-5 rounded overflow-y-auto h-40">
                  {datas.map((data: Mangadex) => (
                     <p key={data.id} className="p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer" onClick={() => mangaStore(data)}>
                        {data.attributes.title.en}
                     </p>
                  ))}
               </div>
            ) : (
               <div className="absolute top-14 left-5 right-5 rounded bg-white h-10 flex items-center justify-center text-red-500">
                  <p>Sorry, we didn&#39;t find that keyword</p>
               </div>
            )
         ) : null}
      </Fragment>
   );
};

export default SearchResult;
