import { fetchMangaChapter } from "@/app/config/api";
import { Chapter } from "@/app/config/schema";
import { titleFormat } from "@/app/config/utils";
import { ButtonBack } from "@/app/ui/manga/buttons";
import MangaDetail from "@/app/ui/manga/detail";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

const MangaRead = async ({
   params,
}: {
   params: {
      id: string;
   };
}) => {
   const id = params.id;
   const data = await fetchMangaChapter(id);

   return (
      <div className="py-6 px-8 md:px-12">
         <MangaDetail data={data} />

         <ButtonBack />
      </div>
   );
};

export default MangaRead;
