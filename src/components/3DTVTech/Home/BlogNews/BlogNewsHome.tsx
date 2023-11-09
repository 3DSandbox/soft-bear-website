import { FC, useEffect } from 'react';
import Blognewshomerow from './BlogNewsHomeRow';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Blognewshome: FC = () => {

    useEffect(()=>{
       // AOS.init();
      },[])
    
    return (
        <div className="content m-0 mt-3 mb-15">
            <div className="pt-md-3 container" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                <h2 className="mb-3 display-6 text-main text-uppercase" >Blog news</h2>

                <Blognewshomerow/>
            </div>
        </div>
        
      
    );
};

export default Blognewshome;
