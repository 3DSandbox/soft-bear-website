import { FC, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { SOFTBEARBANNER02} from 'assets';
// ..

const ServicesHero: FC = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <section className="wrapper bg-image"
    style={{backgroundImage: `url(${SOFTBEARBANNER02.src})`,
    height: "440px"}}
    >
      <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
        <div className="row mt-5">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">

            <h3 className="display-1 mt-0 mb-0 px-xl-12 text-white" data-aos="fade-zoom-in"  data-aos-duration="1500">
              Our Services
            </h3>
            <p className="lead fs-22 mt-5 text-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
           
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
