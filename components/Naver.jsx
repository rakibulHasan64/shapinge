"use client";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
function Naver() {
   const [showMenu, setShowMenu] = useState(false);
   const pathNqme = usePathname();

   return (
      <>
         <header className="bg-black shadow z-50">
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-between py-4">
                  {/* Logo */}
                  <div className="">
                     <a href="#">
                        <img src="/logo.png" alt="logo" className="h-10" />
                     </a>
                  </div>
                  {/* Mobile Menu Icon */}
                  <div
                     className=" md:hidden cursor-pointer"
                     onClick={() => setShowMenu(!showMenu)}
                  >
                     <FaAlignRight className="text-white" />
                  </div>
                  {/* Navigation List */}
                  <nav
                     className={`${showMenu ? "block" : "hidden"
                        } absolute top-16 left-0 w-full bg-black md:static md:block`}
                  >
                     <ul className="flex flex-col md:flex-row items-center md:space-x-4 text-white">
                        <li>
                           <Link
                              className={`${pathNqme === "/" ? "text-red-600 hover:text-blue-500 font-medium px-4 py-2 block" : ""}`}
                              href="/"
                           >
                              HOME
                           </Link>
                        </li>

                        <li>
                           <Link
                              className={`${pathNqme === "/home" ? "text-red-600 hover:text-blue-500 font-medium px-4 py-2 block" : ""}`}
                              href="/home"
                           >
                              ABOUT US
                           </Link>
                        </li>
                        
                        <li>
                           <Link
                              className={`${pathNqme === "/home" ? "text-red-600 hover:text-blue-500 font-medium px-4 py-2 block" : ""}`}
                              href="/product"
                           >
                              OUR MISSION
                           </Link>
                        </li>
                        <li>
                           <a
                              className={`${pathNqme === "/servise" ? "text-red-600 hover:text-blue-500 font-medium px-4 py-2 block" : ""}`}
                              href="/servise"
                           >
                              SERVICES
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </header>
      </>
   );
}

export default Naver;
