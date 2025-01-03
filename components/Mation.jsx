import Image from "next/image";

function Mation() {
   return (
      <>
         <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-44">

               <div className="lg:w-1/2 mt-6 lg:mt-0">
                  <Image
                     src="/mission-img.png"
                     width={800}
                     height={500}
                     alt="Mission Image"
                     className="w-full h-auto"
                  />
               </div>

               <div className="lg:w-1/2 text-center lg:text-left">
                  <p className="border-t-4 border-red-500 w-52 mb-7 mx-auto lg:mx-0"></p>
                  <h1 className="text-4xl lg:text-6xl font-bold">OUR MISSION</h1>
                  <p className="mt-6 text-lg lg:text-xl">At AXXS Logistics, we understand how valuable your cargo is, and that unexpected delays can derail your business. As a freight brokerage, we're committed to bridging the gap between problems and solutions through innovation and results. Schedule a call with a member of our team today so that we can get to work on providing you with a streamlined tomorrow.</p>
                  <button className="mt-9 px-5 py-3 text-white bg-red-600 font-bold hover:bg-red-700 transition duration-300">
                     LEARN MORE
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default Mation;
