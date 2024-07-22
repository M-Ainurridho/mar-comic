const SearchBox = () => {
   return (
      <div className="relative">
         <input type="text" placeholder="by title, tags, author" className="py-3 ps-6 pe-16 w-full text-gray-500 border border-gray-200 rounded-full shadow-md focus:outline-0 focus:ring-2 focus:ring-blue-500" />

         <div className="absolute right-5 top-0 bottom-0 flex items-center">
            <div className="w-5 h-5 border border-2 border-gray-500 rounded-full"></div>
         </div>
      </div>
   );
};



export default SearchBox;
