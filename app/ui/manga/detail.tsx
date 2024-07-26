"use client";

import { Chapter } from "@/app/config/schema";
import Link from "next/link";
import { useContext } from "react";
import { MangaContext } from "../provider";
import clsx from "clsx";
import { Metadata } from "next";

const MangaDetail = ({ data }: { data: Chapter[] }) => {
   const { manga } = useContext(MangaContext);

   return (
      <>
         <header className="mb-2">
            <p className="text-lg">Read Manga</p>
            <h1 className="text-2xl font-bold">
               {manga!.name}{" "}
               <small
                  className={clsx("text-base", {
                     "text-red-500": manga.status == "ongoing",
                     "text-green-500": manga.status == "completed",
                  })}
               >
                  ({manga.status})
               </small>
            </h1>
         </header>

         <details className="mb-4">
            <summary>Sinopsis</summary>
            <p>{manga!.description}</p>
         </details>

         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center gap-4 mb-4">
            {data
               .sort((a: Chapter, b: Chapter) => Number(a.attributes.chapter) - Number(b.attributes.chapter))
               .map((manga: Chapter) =>
                  manga.attributes.translatedLanguage === "en" ? (
                     manga.attributes?.externalUrl ? (
                        <Link key={manga.id} href={manga.attributes.externalUrl} target="_blank" className="p-3 border rounded-md flex items-center justify-center hover:bg-neutral-200 duration-100">
                           Chapter {manga.attributes.chapter}
                        </Link>
                     ) : (
                        <span key={manga.id} className="p-3 border rounded-md flex items-center justify-center pointer-none text-gray-500 pointer-events-none" title="Link is inactive">
                           Chapter {manga.attributes.chapter}
                        </span>
                     )
                  ) : null
               )}
         </div>
      </>
   );
};

export default MangaDetail;
