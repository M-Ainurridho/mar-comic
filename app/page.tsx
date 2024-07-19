import { Metadata } from "next";
import Template from "./ui/home/template";

export const metadata: Metadata = {
   title: "Home | MAR Comic"
}

const Home = () => {
   return (
      <Template />
   );
};

export default Home;
