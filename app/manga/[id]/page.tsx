import { fetchMangaChapter } from "@/app/config/api";
import { Chapter } from "@/app/config/schema";
import { titleFormat } from "@/app/config/utils";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = ({
   params,
}: {
   params: {
      id: string;
   };
}): Metadata => {
   const manga = titleFormat(params.id.split("_")[1], "~");

   return {
      title: `Read Manga ${manga} | MAR Comic`,
   };
};

const MangaRead = async ({
   params,
}: {
   params: {
      id: string;
   };
}) => {
   const manga = titleFormat(params.id.split("_")[1], "~");
   const id = params.id.split("_")[0];

   const data = await fetchMangaChapter(id);

   return (
      <div className="py-6 px-12">
         <header className="mb-4">
            <p className="text-lg">Read Manga</p>
            <h1 className="text-2xl font-bold">{manga}</h1>
         </header>

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

         <Link href="/" className="flex justify-center text-blue-700 hover:text-blue-500 duration-100">
            <ArrowLeftIcon className="w-4 me-2" /> Back
         </Link>
      </div>
   );
};

export default MangaRead;
