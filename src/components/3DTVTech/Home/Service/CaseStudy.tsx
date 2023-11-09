import { FC, useEffect } from 'react';
import ServiceSlide from './ServiceSlide';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from 'next/link';
import Image from 'next/image';
import { INTERACTIVE } from 'assets';
// ..

const CaseStudy: FC = () => {
  useEffect(() => {
    //AOS.init();
  }, []);

  return (
    <div className="">
      <div className="container">
        {' '}
        <div className="row">
          <div className="col-lg-12 col-xl-12 col-xxl-12 mx-auto text-center">
            <h2
              className="mb-5 display-6 mb-1 mt-5 text-main text-uppercase"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Case Study
            </h2>
          </div>
        </div>
        {/* old 3d */}
        {/* <ServiceSlide /> */}
        <div className="cotainer">
          <div className="row d-flex justify-content-center align-items-center">
            {/* 01 */}
            <div className="project col-md-6 mb-5 col-xl-3">
              <div
                className="d-flex flex-column shadow-lg h-100"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
                <figure className="">
                  <Link href="/services/interactive/">
                    <Image src={INTERACTIVE} width={285} height={285} alt="Interactive Technology " />
                  </Link>
                </figure>
                <div
                  className="card-body px-2 py-5 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#FF8812'
                  }}
                >
                  <Link href="/services/interactive/">
                    <h2 className="fs-18 text-center text-white mb-0 text-uppercase text-white">Ice APP</h2>
                  </Link>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="project col-md-6 mb-5 col-xl-3">
              <div
                className="d-flex flex-column shadow-lg h-100"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
                <figure className="">
                  <Link href="/services/interactive/">
                    <Image src={INTERACTIVE} width={285} height={285} alt="Interactive Technology " />
                  </Link>
                </figure>
                <div
                  className="card-body px-2 py-5 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#FF8812'
                  }}
                >
                  <Link href="/services/interactive/">
                    <h2 className="fs-18 text-center text-white mb-0 text-uppercase text-white">Business Matching</h2>
                  </Link>
                </div>
              </div>
            </div>
          
          {/* 03 */}
          <div className="project col-md-6 mb-5 col-xl-3">
              <div
                className="d-flex flex-column shadow-lg h-100"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
              
        
                <figure className="">
                  <Link href="/services/interactive/">
                    <Image src={INTERACTIVE} width={285} height={285} alt="Interactive Technology " />
                  </Link>
                </figure>
                <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center" 
                style=
                {{
                  backgroundColor: "#FF8812"
                }}>
                  <Link href="/services/interactive/">
                    <h2 className="fs-18 text-center text-white mb-0 text-uppercase text-white">Web3 & Metaverse</h2>
                  </Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
