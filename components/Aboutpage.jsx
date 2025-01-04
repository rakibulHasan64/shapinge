import React from 'react';
import AboutCard from './AboutCard';
import Image from 'next/image';

function Aboutpage() {
   const data = [
      {
         id: 1,
         img: "/images (11).png",
         name: "Corporate Annoucement",
         title: "Leadership Update: Axis Logistics Appoints Jason Bergman as CEO Axis Logistics "
      },
      {
         id: 2,
         img: "/downloadpnh.png",
         name: "Upstream Careers",
         title: "Fleet Expansion: New Aviation Trailers and Rigid Trucks to Improve Efficiency"
      },
      {
         id: 3,
         img: "/download.png",
         name: "Refinery Jobs",
         title: "Career Opportunity: Axis Communications Seeking Logistics Developer"
      },
      {
         id: 4,
         img: "/chuttersnap-9cCeS9Sg6nU-unsplash.jpg",
         name: "Asis Logisitics Careers",
         title: "Strategic Partnership: Axis Logistics Joins Forces with Global Shipping Companies"
      },
      {
         id: 5,
         img: "/screencapture-technext-github-io-logistica-2022-02-17-14_26_57-1.png",
         name: "Retail Careers",
         title: "Expansion: Axis Logistics Increases Operations with New North American Warehouse"
      },
      {
         id: 6,
         img: "/sea-2548098_640.jpg",
         name: "Iso Careers",
         title: "Sustainability Initiative: Axis Logistics Focuses on Eco-Friendly Packaging"
      },
      {
         id: 7,
         img: "/download.png",
         name: "Axis Logistics Launches AI-Powered Logistics Tracking System",
         title: "Innovation: AI-Powered Logistics Tracking to Enhance Customer Experience"
      },
      {
         id: 8,
         img: "/pexels-samuel-wolfl-628277-1427541.jpg",
         name: "Graduates Service",
         title: "Recognition: Axis Logistics Wins Prestigious Industry Award for Service Excellence"
      }
   ];

   return (
      <>
         <div className="container mx-auto mt-10 mb-10 p-3">
            <div className="w-full">
               <img
                  src="/downloadpnh.png"
                  className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-[400px]"
                  alt="Company Banner"
               />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mt-7 mb-4 font-bold">
               Company About
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto mt-14">
               {data.map(item => (
                  <AboutCard key={item.id} item={item} />
               ))}
            </div>
         </div>

         
      </>
   );
}

export default Aboutpage;