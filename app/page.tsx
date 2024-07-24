import { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import Search from "@/app/ui/home/search";

import LoadingSpin from "./ui/loadings";
import { Suspense } from "react";
import SearchResult from "./ui/home/search-result";

export const metadata: Metadata = {
   title: "Home | MAR Comic",
};

const Home = async ({ searchParams }: { searchParams: { search: string } }) => {
   const search = searchParams?.search || "";

   return (
      <main className="h-screen bg-gradient-to-br from-purple-300 via-cyan-400 to-pink-300">
         <Navbar />
         <div className="h-[88%] flex items-center justify-center">
            <div className="w-full px-12 lg:px-0 md:w-[80%] lg:w-1/2 h-2/5">
               <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4">Search Manga..</h1>
               <div className="relative">
                  <Search />

                  <SearchResult query={search} />
               </div>
            </div>
         </div>
      </main>
   );
};

export default Home;
