'use client';
import "aos/dist/aos.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Sliders from "./Sliders";



function Banner() {
   

      

   return (
      <>
         
      
          <div className="bg-black  relative -z-50 ">
            <div className="container mx-auto">
               <div className="md:flex items-center justify-between gap-4">
                  <div className=" mb-60 space-y-6">
                     <p className="text-white text-center sm:text-start mt-11">
                        INTELLIGENT DESIGNED TRANSPORTATION SOLUTIONS
                     </p>
                     <h1
                        className="text-white text-center md:text-start lg:text-start xl:text-start  p-2  mt-5 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-8xl border-b-4 border-red-500"
                     
                     >
                        WHAT WE DO
                        <br />
                        <span className="font-bold">MATTERS</span>
                     </h1>
                     <div
                        className="flex flex-col sm:flex-row gap-5 items-center sm:justify-start m-8 sm:m-16 lg:mb-6 p-4 text-center sm:text-left"
                        
                     >  
                        <button className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold flex items-center gap-2 mt-2  ">
                           SHIP WITH AXXS LOGISTICS
                           <FiArrowRight className="text-xl" />
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold sm:mt-3  ">
                           HAUL FOR AXXS LOGISTICS
                        </button>
                     </div>


                  </div>
                  <div >
                     <Image
                        src="/banner-img (1).png"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                     />
                  </div>
               </div>
            </div>

            {/* Slider Positioned at the Bottom */}
            <div className="absolute -bottom-[-0%] w-full z-50 transform translate-y-1/2">
         
                {/* <Sliders />  */}
         
               
            </div>
         </div>
      </>
   );
}

export default Banner;
