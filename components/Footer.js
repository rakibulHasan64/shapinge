import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer() {
   return (
      <footer className="bg-black text-white py-16">
         <div className="container mx-auto px-4">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-4 mb-4">
               {/* Logo Section */}
               <div className="flex items-center space-x-2">
                  <img
                     src="/logo.png"
                     alt="AXXS Logistics Logo"
                     className="h-10"
                  />
                  <h2 className="text-lg font-bold">AXXS LOGISTICS</h2>
               </div>

               {/* Navigation Links */}
               <div className="flex items-center space-x-6 text-sm mt-4 md:mt-0">
                  <a href="#" className="hover:text-gray-400">
                     ABOUT US
                  </a>
                  <a href="#" className="hover:text-gray-400">
                     CORE VALUES
                  </a>
                  <a href="#" className="hover:text-gray-400">
                     OUR MISSION
                  </a>
                  <a href="#" className="hover:text-gray-400">
                     SERVICES
                  </a>
                  <a
                     href="#"
                     className="bg-green-500 hover:bg-red-700 text-white px-4 py-2 rounded hidden sm:block"
                  >
                     SHIP WITH AXXS LOGISTICS
                  </a>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between text-sm">
               {/* Copyright */}
               <p className="text-gray-400 text-center md:text-left">
                  © 2021 Axxs Logistics, All rights reserved ·{" "}
                  <a href="#" className="hover:underline">
                     Privacy Policy
                  </a>
               </p>

               {/* Social Icons */}
               <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white text-lg p-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                     <FaFacebookF />
                  </a>
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white text-lg p-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                     <FaTwitter />
                  </a>
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white text-lg p-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                     <FaPinterest />
                  </a>
                  <a
                     href="#"
                     className="text-gray-400 hover:text-white text-lg p-2 rounded-full hover:bg-red-700 transition duration-300"
                  >
                     <FaInstagram />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
