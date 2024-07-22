import axios from "axios";

const baseUrl = "https://api.mangadex.org";

export const fetchSearchManga = async (value: string) => {
   try {
      const response = await axios.get("https://api.mangadex.org/manga", { params: { title: value } });
      return response.data.data;
   } catch (err) {
      console.error(err);
      throw err;
   }
};
