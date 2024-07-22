import { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import SearchBox from "@/app/ui/home/search-box";

export const metadata: Metadata = {
   title: "Home | MAR Comic",
};

const Home = () => {
   return (
      <main className="h-screen bg-gradient-to-br from-purple-300 via-cyan-400 to-pink-300">
         <Navbar />
         <div className="h-[88%] flex items-center justify-center ">
            <div className="w-1/2">
               <h1 className="font-bold text-6xl text-white mb-4">Search Manga..</h1>
               <SearchBox />
            </div>
         </div>
      </main>
   );
};

export default Home;
