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

export interface Manga {
   id: string;
   type: string;
   attributes: {
      title: {
         en: string;
      };
   };
}
