const RecentlyUpdate = () => {
   return (
      <section className="px-6 py-8">
         <header className="mb-4">
            <h3 className="text-xl font-semibold">Recenlty Update</h3>
         </header>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
            {Array.from([1, 2, 3, 4, 5, 6, 7], (i) => (
               <article key={i}>
                  <div className="h-64 md:h-56 bg-neutral-200 mb-1 rounded-sm"></div>
                  <div>
                     <p>Hometown</p>
                     <small>Ch. 12</small>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
};

export default RecentlyUpdate;
