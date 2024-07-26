"use client";

import React, { createContext, useState } from "react";
import { Manga } from "../config/schema";

export const MangaContext = createContext<Manga | any>(null);
export const ModalContext = createContext<boolean | any>(false);

export const MangaProvider = ({ children }: { children: React.ReactNode }) => {
   const [manga, setManga] = useState<Manga>({
      id: "",
      type: "",
      name: "",
      cover: "",
      description: "",
      status: "",
   });

   return <MangaContext.Provider value={{ manga, setManga }}>{children}</MangaContext.Provider>;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
   const [modal, setModal] = useState<boolean>(false);

   return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};
