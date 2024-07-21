import axios from "axios";

const options = {
   headers: {
      "x-rapidapi-key": "6c4c045c80msh1556b184c39448cp1fa3f7jsnaf0644226a6f",
      "x-rapidapi-host": "indonesia-komik.p.rapidapi.com",
      lulThings: "iyainiyainiyainde123",
   },
};

export const fetchMangaList = async () => {
   try {
      const response = await axios.get("https://indonesia-komik.p.rapidapi.com/v1/browse", options);
      return response.data.hotList;
   } catch (error) {
      console.error(error);
   }
};
