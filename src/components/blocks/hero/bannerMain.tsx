import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import NextLink from 'components/reuseable/links/NextLink';
import { BANNER01, BANNER02, BANNER03} from 'assets';

const BannerMain: FC = () => {
  // use video popup
  useLightBox();

  return (
    <div className="wrapper bg-dark">
      <div className="swiper-hero">

          <div
            className="swiper-slide  bg-image"
            style={{ 
              backgroundImage: `url(${BANNER01.src})` 
            }}
          >

            

            <div className="container h-100">
              <div className="row h-100">
                <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-9 text-center text-lg-start justify-content-center align-self-center align-items-start">
                  <p className="display-1 text-uppercase fs-56 mb-4 text-white text-upper-cease animate__animated animate__slideInDown animate__delay-1s">
                  software solution for all
                  </p>

                  <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                    {/* We are a creative company that focuses on long term relationships with customers. */}
                  </p>
                </div>
              </div>
            </div>
          </div>


      </div>
    </div>
  );
};

export default BannerMain;
