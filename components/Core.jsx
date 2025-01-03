import CoreCad from "./CoreCad";

function Core() {
   return (
      <>
         <div className="container mx-auto mt-11 mb-5">
            <p className="border-t-4 border-red-500 w-52 mb-7 mx-auto lg:mx-0"></p>
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold  mb-12 text-center lg:text-s sm:text-center">CORE VALUES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
               <CoreCad />
               <CoreCad />
               <CoreCad />
               <CoreCad />
               <CoreCad />
               <CoreCad />
            </div>
         </div>



      </>
   );
}

export default Core;