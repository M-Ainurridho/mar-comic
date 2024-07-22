import { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import Search from "@/app/ui/home/search";
import { fetchSearchManga } from "./config/api";
import clsx from "clsx";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Home | MAR Comic",
};

interface Manga {
   id: string;
   type: string;
   attributes: {
      title: {
         en: string;
      };
   };
}

const Home = async ({ searchParams }: { searchParams: { search: string } }) => {
   
   const search = searchParams?.search || "";
   const data = await fetchSearchManga(search);

   return (
      <main className="h-screen bg-gradient-to-br from-purple-300 via-cyan-400 to-pink-300">
         <Navbar />
         <div className="h-[88%] flex items-center justify-center">
            <div className="w-full px-12 lg:px-0 md:w-[80%] lg:w-1/2 h-2/5">
               <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4">Search Manga..</h1>
               <div className="relative">
                  <Search />

                  {/* <div className="absolute right-5 top-0 bottom-0 flex items-center">
                        <div className="w-5 h-5 border border-2 border-gray-500 border-r-transparent animate-spin rounded-full"></div>
                     </div> */}

                  {search && (
                     <>
                        {data.length > 0 ? (
                           <div className="search-box absolute top-12 md:top-14 left-5 right-5 rounded overflow-y-auto h-40">
                              {data.map((manga: Manga) => (
                                 <Link href={`/manga/${manga.id}`} key={manga.id} className="block p-2 px-6 bg-white hover:bg-gray-200 duration-100 cursor-pointer">
                                    {manga.attributes.title.en}
                                 </Link>
                              ))}
                           </div>
                        ) : (
                           <div className="absolute top-14 left-5 right-5 rounded bg-white h-10 flex items-center justify-center text-red-500">
                              <p>Sorry, we didn't find that keyword</p>
                           </div>
                        )}
                     </>
                  )}
               </div>
            </div>
         </div>
      </main>
   );
};

// const title = manga.attributes.title.en.toLowerCase().split(" ").join("-")
// const url = new URL(`http://localhost:3000/manga/${manga.id}-${title}`);

export default Home;
