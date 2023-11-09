import { FC, useEffect } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import ServiceCardSlide from './ServiceCardSlide';

// -------- data -------- //
import { servicesList } from 'data/3DTVTech/servicesList';
import { fadeInAnimate } from 'utils/animation';
import { servicesType } from 'data/3DTVTech/Services/dataList';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const ServiceSlide: FC = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 }
  };

  return (
    <div className="container-fluid px-md-6">
      <div className="swiper-container blog grid-view mb-13 " >
        {/* ------backup ของพี่ tle------ */}
        {/* <Carousel grabCursor breakpoints={carouselBreakpoints} loop={true}>
          {servicesList.map((item, index) => (
            <div key={index}>
                <ServiceCardSlide category='aaa' regularPrice={3} rating={5} {...item}   key={index}/>
            </div>
          ))}
        </Carousel> */}
        <Carousel grabCursor breakpoints={carouselBreakpoints} autoplay={{ delay: 3200}}>
          {servicesType.map((item, index) => (
            <div key={index}>
                <ServiceCardSlide {...item}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceSlide;
