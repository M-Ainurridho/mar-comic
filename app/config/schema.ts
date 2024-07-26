export interface Chapter {
   id: string;
   type: string;
   attributes: {
      volume: string;
      chapter: string;
      title: string;
      translatedLanguage: string;
      externalUrl: string;
   };
}

export interface Mangadex {
   id: string;
   type: string;
   attributes: {
      title: {
         en: string;
      };
      description: { en?: string; jp?: string };
      status: string;
   };
}

export type Manga = {
   id?: string;
   type?: string;
   name?: string;
   cover?: string;
   description?: string;
   status?: string;
};
