import { FC } from 'react';
import ServicesCard from '../src/components/3DTVTech/Services/services-card';
// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { type } from 'os';
import Image from 'next/image';
import Link from 'next/link';
import { CINEMA, CRM, EVENTSERVICE, HARDWARE, INFO, INTERACTIVE, LMS, NOTFOUND, PROJECTIONMAPPING, REALITY, SOFTWARE, VIRTUALEXPERIENCE } from 'assets';

const ServicesMain: FC = () => {
  useTooltip();


  return (
    // <div className="grid grid-view projects-masonry mt-12"> 
    //   <div className="row g-6 g-lg-10">
    //     {servicesType.map((item) => (
    //       <div key={item.id} className="project col-md-6 mb-5 col-xl-3">
    //         <ServicesCard {...item} />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="grid grid-view projects-masonry mt-12">
      <div className="row g-6 g-lg-10">
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
            <Link href='/services/customer-relationship-management'>
              <Image src={CRM} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/customer-relationship-management'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Customer Relationship Management (CRM)</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 06 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/cinema-technology'>
              <Image src={CINEMA} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/cinema-technology'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Cinema Technology</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 07 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/projection-mapping'>
              <Image src={PROJECTIONMAPPING} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/projection-mapping'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Projection Mapping</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 08 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/learning-management-system'>
              <Image src={LMS} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/learning-management-system'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Learning Management System (LMS)</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 09 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/infographics-motiongraphics'>
              <Image src={INFO} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/infographics-motiongraphics'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Infographics / Motiongraphic</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 10 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/software-development'>
              <Image src={SOFTWARE} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/software-development'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Software Development</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* 11 */}
        <div className="project col-md-6 mb-5 col-xl-3">
          <div className="d-flex flex-column shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
            <figure className="card-img-top">
            <Link href='/services/hardware-development'>
              <Image src={HARDWARE} width={285} height={285} alt="" />
              </Link>
            </figure>
            <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
            <Link href='/services/hardware-development'>
              <h2 className="fs-18 text-center text-main mb-0 text-uppercase">Hardware Development</h2>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default ServicesMain;
