import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import ServiceCardSlide from './ServiceCardSlide';

// -------- data -------- //
import { servicesList } from 'data/3DTVTech/servicesList';
import { fadeInAnimate } from 'utils/animation';



const ServiceSlide: FC = () => {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 }
  };

  return (
    <div className="container-fluid px-md-6">
      <div className="swiper-container blog grid-view mb-10">
        {/* ------backup ของพี่ tle------ */}
        <Carousel grabCursor breakpoints={carouselBreakpoints} loop={true}>
          {servicesList.map((item, index) => (
            <div key={index}>
                <ServiceCardSlide {...item}   key={index}/>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ServiceSlide;
