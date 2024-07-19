import Navbar from "../navbar";
import RecentlyUpdate from "./recently-update";

const Template = () => {
   return (
      <main>
         <Navbar />
         <RecentlyUpdate />
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
               fill="#0099ff"
               fill-opacity="1"
               d="M0,224L48,234.7C96,245,192,267,288,229.3C384,192,480,96,576,85.3C672,75,768,149,864,170.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
               fill="#0099ff"
               fill-opacity="1"
               d="M0,224L48,234.7C96,245,192,267,288,229.3C384,192,480,96,576,85.3C672,75,768,149,864,170.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
               className="block border"
            ></path>
         </svg>
      </main>
   );
};

export default Template;
