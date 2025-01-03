import Image from "next/image";


function About() {
   return (
      <>
         <div className="container mx-auto mt-10 mb-10 p-3 ">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
               <div className="lg:w-1/2 ">
                  <p className="border-t-4 border-red-500 w-52 mb-7"></p>
                  <h3 className="text-4xl lg:text-6xl font-bold ">ABOUT US</h3>
                  <p className="mt-4 text-lg lg:text-xl ">
                     At AXXS Logistics, we understand how valuable your cargo is, and that unexpected delays can derail your business. As a freight brokerage, we're committed to bridging the gap between problems and solutions through innovation and results. Schedule a call with a member of our team today so that we can get to work on providing you with a streamlined tomorrow.
                  </p>
                  <button className="mt-9 px-5 py-3 text-white bg-red-600 font-bold">LEARN MORE</button>
               </div>

               <div className="lg:w-1/2 mt-6 lg:mt-0">
                  <Image
                     src="/about-img.png"
                     width={800}
                     height={500}
                     alt="Picture of the author"
                  />
               </div>
            </div>
         </div>


         
      </>
   );
}
export default About;