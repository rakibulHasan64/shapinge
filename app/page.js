
import About from '@/components/About';
import Banner from '@/components/Banner';
import Core from '@/components/Core';
import Footer from '@/components/Footer';
import Mation from '@/components/Mation';

import React from 'react';

function page() {
   return (
      <>
         
         <div className="">
            <Banner />
            <About />
            <Mation />
            <Core />
         
         
            {/* <Setion /> */}
         </div>
         
         
      </>
   );
}

export default page;