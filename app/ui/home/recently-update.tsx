import { fetchMangaList } from "@/app/config/api";
import { latestChapter } from "@/app/config/utils";
import Image from "next/image";
import Link from "next/link";

const RecentlyUpdate = async () => {
   const mangaList = await fetchMangaList();
   console.log(mangaList);

   return (
      <section className="px-6 py-8">
         <header className="mb-4">
            <h3 className="text-xl font-semibold">Recenlty Update</h3>
         </header>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
            {mangaList.map(
               (manga: any, i: number) =>
                  i < 7 && (
                     <Link href={manga.latestChapterUrl} target="_blank" key={i}>
                        <Image
                           width={500}
                           height={500}
                           src={manga.cover}
                           alt={manga.title}
                           className="aspect-[3/4] object-cover mb-1 rounded-sm"
                        />
                        <div>
                           <p className="truncate">{manga.title}</p>
                           <small>Ch. {latestChapter(manga.latestChapter)}</small>
                        </div>
                     </Link>
                  )
            )}
         </div>
      </section>
   );
};

export default RecentlyUpdate;
