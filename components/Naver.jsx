"use client";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";

function Naver() {
   const [showMenu, setShowMenu] = useState(false);
   const pathname = usePathname();

   return (
      <>
         <header className="bg-black shadow z-50">
            <div className="container mx-auto px-4">
               <div className="flex items-center justify-between py-4">
                  {/* Logo */}
                  <div>
                     <Link href="/">
                        <img src="/logo.png" alt="logo" className="h-10" />
                     </Link>
                  </div>
                  {/* Mobile Menu Icon */}
                  <div
                     className="md:hidden cursor-pointer"
                     onClick={() => setShowMenu(!showMenu)}
                  >
                     <FaAlignRight className="text-white text-xl" />
                  </div>
                  {/* Navigation List */}
                  <nav
                     className={`${showMenu ? "block" : "hidden"
                        } absolute top-16 left-0 w-full bg-black md:static md:block`}
                  >
                     <ul className="flex flex-col md:flex-row items-center md:space-x-6 text-white">
                        <li>
                           <Link
                              href="/"
                              className={`${pathname === "/" ? "text-red-600 font-medium" : ""
                                 } px-4 py-2 block`}
                           >
                              HOME
                           </Link>
                        </li>

                        <li>
                           <Link
                              href="/home"
                              className={`${pathname === "/home" ? "text-red-600 font-medium" : ""
                                 } px-4 py-2 block`}
                           >
                              ABOUT US
                           </Link>
                        </li>

                        <li>
                           <Link
                              href="/product"
                              className={`${pathname === "/product" ? "text-red-600 font-medium" : ""
                                 } px-4 py-2 block`}
                           >
                              OUR MISSION
                           </Link>
                        </li>

                        <li>
                           <Link
                              href="/servise"
                              className={`${pathname === "/servise" ? "text-red-600 font-medium" : ""
                                 } px-4 py-2 block`}
                           >
                              BLOG
                           </Link>
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
