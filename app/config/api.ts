import axios from "axios";

const baseUrl = "https://api.mangadex.org/manga";

export const fetchSearchManga = async (value: string) => {
   try {
      const response = await axios.get(`${baseUrl}`, { params: { title: value } });
      return response.data.data;
   } catch (err) {
      console.error(err);
      throw err;
   }
};

export const fetchMangaChapter = async (id: string) => {
   try {
      const response = await axios.get(`${baseUrl}/${id}/feed`);
      return response.data.data;
   } catch (err) {
      console.error(err);
      throw err;
   }
};
