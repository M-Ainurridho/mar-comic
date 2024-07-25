import { fetchSearchManga } from "@/app/config/api";
import { Manga } from "@/app/config/schema";
import Link from "next/link";

const SearchResult = async ({ query }: { query: string }) => {
   const data = await fetchSearchManga(query);

   return (
      <>
         {query &&
            (data.length > 0 ? (
               <div className="search-box absolute top-12 md:top-14 left-5 right-5 rounded overflow-y-auto h-40">
                  {data.map((manga: Manga) => {
                     const title = manga.attributes.title?.en.toLowerCase().split(" ").join("~");
                     const url = `/manga/${manga.id}_${title}`;

                     return (
                        <Link href={url} key={manga.id} className="block p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">
                           {manga.attributes.title.en}
                        </Link>
                     );
                  })}
               </div>
            ) : (
               <div className="absolute top-14 left-5 right-5 rounded bg-white h-10 flex items-center justify-center text-red-500">
                  <p>Sorry, we didn&#39;t find that keyword</p>
               </div>
            ))}
      </>
   );
};

export default SearchResult;
