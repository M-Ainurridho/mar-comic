const LoadingSpin = () => {
   return (
      <div className="absolute right-5 top-0 bottom-0 flex items-center">
         <div className="w-5 h-5 border border-2 border-gray-500 border-r-transparent animate-spin rounded-full"></div>
      </div>
   );
};

export default LoadingSpin;
