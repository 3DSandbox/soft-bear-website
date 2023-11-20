import { FC } from 'react';
// import ServicesCard from '../src/components/3DTVTech/Services/services-card';
// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
// import { servicesType } from 'data/3DTVTech/Services/dataList';
import { type } from 'os';
import Image from 'next/image';
import Link from 'next/link';
import { CINEMA, CRM, EVENTSERVICE, HARDWARE, INFO, INTERACTIVE, LMS, NOTFOUND, PROJECTIONMAPPING, REALITY, SOFTWARE, VIRTUALEXPERIENCE } from 'assets';

const ServicesMain: FC = () => {
  useTooltip();


  return (
    <div className="grid grid-view projects-masonry mt-12">
      <div className="row g-6 g-lg-10 mb-10">
        {/* 01 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">

            <figure className="card-img-top">
              <Link href="/services/virtual-experience/">
                <Image src={VIRTUALEXPERIENCE} width={285} height={285} alt="Virtual Experience" />
              </Link>
            </figure>

            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
              <Link href="/services/virtual-experience/">
                <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Virtual Experience</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">

            <figure className="card-img-top">
              <Link href="/services/interactive/">
                <Image src={INTERACTIVE} width={285} height={285} alt="Interactive Technology" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href="/services/interactive/">
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Interactive</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
              <Link href='/services/event-service/'>
              <Image src={EVENTSERVICE} width={285} height={285} alt="Event Service" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/event-service/'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Event Service</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
              <Link href='/services/reality-technology'>
              <Image src={REALITY} width={285} height={285} alt="Reality Technology" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/reality-technology'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Reality Technology</h2>
              </Link>
            </div>
          </div>
        </div>
    
            {/* 05 */}
            <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
              <Link href='/services/reality-technology'>
              <Image src={REALITY} width={285} height={285} alt="Reality Technology" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/reality-technology'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Reality Technology</h2>
              </Link>
            </div>
          </div>
        </div>
    
            {/* 06 */}
            <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
              <Link href='/services/reality-technology'>
              <Image src={REALITY} width={285} height={285} alt="Reality Technology" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/reality-technology'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Reality Technology</h2>
              </Link>
            </div>
          </div>
        </div>
    
    
      </div>
    </div>

  );
};

export default ServicesMain;
