import { FC, useEffect } from 'react';
import ServiceSlide from './ServiceSlide';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Link from 'next/link';
import Image from 'next/image';
import { BLOGMOCK, CASESTUDY01, CASESTUDY02, INTERACTIVE } from 'assets';
import FigureImage from 'components/reuseable/FigureImage';
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
        <div className="cotainer mb-10">
          <div className="row d-flex justify-content-center align-items-center">
            {/* case01 */}
            <div className="col-md-3" data-aos="zoom-in" data-aos-duration="800">
              <div
                className="card"
                style={{
                  backgroundColor: '#FF8812'
                }}
              >
                <figure className="card-img-top  ">
                  <FigureImage width={285} height={258} src={CASESTUDY01.src} />
                </figure>
                <div className="py-4 d-flex justify-content-center align-items-center">
                  <div
                    className="fs-22 text-white text-uppercase"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    ICE APP
                  </div>
                </div>
              </div>
            </div>

            {/* case02 */}
            <div className="col-md-3" data-aos="zoom-in" data-aos-duration="800">
              <div
                className="card"
                style={{
                  backgroundColor: '#FF8812'
                }}
              >
                <figure className="card-img-top  ">
                  <FigureImage width={285} height={258} src={CASESTUDY02.src} />
                </figure>
                <div className="py-4 d-flex justify-content-center align-items-center">
                  <div
                    className="fs-22 text-white text-uppercase"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    Business Matching
                  </div>
                </div>
              </div>
            </div>

            {/* case03 */}
            <div className="col-md-3" data-aos="zoom-in" data-aos-duration="800">
              <div
                className="card"
                style={{
                  backgroundColor: '#FF8812'
                }}
              >
                <figure className="card-img-top  ">
                  <FigureImage width={285} height={258} src={CASESTUDY01.src} />
                </figure>
                <div className="py-4 d-flex justify-content-center align-items-center">
                  <div
                    className="fs-22 text-white text-uppercase"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    Web3 & Metaverse
                  </div>
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
