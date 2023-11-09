import { FC, useEffect } from 'react';
import ServiceSlide from './ServiceSlide';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const ServiceHome: FC = () => {

  useEffect(()=>{
    //AOS.init();
  },[])

  return (
    <div className="">
      <div className="container">
        {' '}
        <div className="row">
          <div className="col-lg-12 col-xl-12 col-xxl-12 mx-auto text-center" >
            <h2 className="display-6 mb-1 mt-5 text-main text-uppercase" data-aos="fade-down" data-aos-duration="800" data-aos-delay="100">Services We Provide</h2>
            <p className="mb-5 fs-18" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"
            style={{
              color: "#737373"
            }}
            >
              3DTV-Tech overcomes challenges, achieves results, and adds value to our clients and partners.
            </p>
          </div>
        </div>
        <section className='' >
          <ServiceSlide />
          </section>
      </div>
    </div>
  );
};

export default ServiceHome;
