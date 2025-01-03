'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Slider from "react-slick";

function Sliders() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
   };

   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);

   return (
      <Slider {...settings}>
         <div data-aos="fade-up" data-aos-duration="1000" className="w-2/3 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
               <div>
                  <Image src="/img-1.png" width={400} height={150} alt="Example Image" />
               </div>
            </div>
         </div>
      </Slider>
   );
}

export default Sliders;
