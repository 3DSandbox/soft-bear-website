import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { dataDelayMarkup } from 'markups/elements/animations';
import FooterMain from 'components/3DTVTech/FooterMain';
import ServiceDetailType from 'components/3DTVTech/Service-detail/service-detail-type';
import ServiceDetailFeatures from 'components/3DTVTech/Service-detail/service-detail-features';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND } from 'assets';
import Head from 'next/head';
import Colul from 'components/3DTVTech/Service-detail/colum-ul';
// ..

export type TServiceType = {
  id: number;
  category: string;
  bgimage: string;
  image: string;
  imagedetail: string;
  title: string;
  header: string;
  description1?: string;
  description2?: string;
  description3?: string;
  textfooter?: string;
  detail1?: string;
  col?: TCol[];
  detail2?: string;
  detail3?: string;
  features?: TFeatures[];
  typeof: TTypeOf[];
};

type TFeatures = {
  id: number;
  name: string;
  detail: string;
};

type TTypeOf = {
  id: number;
  image: string;
  title: string;
  url?: string;
};

export type TCol = {
  id: number;
  text01?: string;
  text02?: string;
  text03?: string;
  text04?: string;
  text05?: string;
};

const Page: FC = () => {
  const router = useRouter();
  const { query } = router;
  const { service_id } = query;
  // แก้แดงไม่ได้ใช้ any ไปก่อน
  // const [serviceData, setServiceData] = useState<TServiceType>();

  const [serviceData, setServiceData] = useState<any>();
  const [footerfound, setFooterFound] = useState(false);
  const [colulfound, setColluFound] = useState(false);


  // used for image lightbox

  useLightBox();

  useEffect(() => {
    if (!servicesType || !service_id) return;
    // console.log('service type', servicesTyp)
    let footer = servicesType?.find(
      (item) => item?.id.toString() == service_id && item?.textfooter != null && item?.textfooter.length > 0
    );
    setFooterFound(Boolean(footer));
  }, [servicesType, service_id]);


// test disable or enable find col
  // useEffect(() => {
  //   let colul = servicesType?.find(
  //     (item) => item?.id.toString() == service_id && item?.col != null && item?.col.length > 0
  //   );
  //   setColluFound(Boolean(colul));
  // }, [servicesType, service_id]);


  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(query.service_id);
    if (query?.service_id) {
      const data = servicesType.find((item) => item?.id.toString() == query.service_id);
      // console.log('found data', data);

      if (data != null) {
        setServiceData(data!);
      }
    } else {
      const data = servicesType.find((item) => item?.id.toString() == '1');

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    }
    // const data = servicesType.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
    // console.log(dataDelayMarkup);
  }, [query]);




  return (
    <Fragment>
      <Head>
        <title>3DTV-Tech</title>
        <meta
          name="description"
          content="บบริษัท 3DTV-Tech บริการของเรามีรายละเอียดโดยจะแบ่งตามหัวข้อย่อยจากหัวข้อใหญ่ที่ถูกแบ่งเป็นหมวดต่าง ๆ เพื่อให้ตรงกับความต้องการธุรกิจของคุณ"/>
        <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience" />
        <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience" />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <PageProgress /> */}
      {/* header */}
      <header className="wrapper bg-light">
        <NavbarMain
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        {/* <section className="wrapper bg-gray"> */}
        {/* <section
          className="wrapper bg-image"
          style={{
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-virtual.png" )'
          }}
        > */}

{/* v มือถือ */}
        <section
          className="wrapper bg-image  d-md-none"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${serviceData?.bgimage || ''})`,
            height: '440px'
          }}
        >
          <div className="container text-center" >
            <div className="row">
              <div className="col-lg-10 col-xxl-8 ">
                <h2
                  className="display-1 text-white text-uppercase mt-13"
                  style={{
                    width: 'auto',
                  }}
                >
                  {serviceData?.category || 'ไม่พบข้อมูล'}
                </h2>
              </div>

              <div className="row mx-auto my-5 d-flex justify-content-center align-items-center">


                <div className="col-12 ">
                <p className="fs-18 text-white">{serviceData?.description1 || ''}</p>
                </div>
              
            <div className='col-12 '>
              <p className="fs-18 text-white">{serviceData?.description2 || ''}
              </p></div>


              </div>
           
            </div>
          </div>
        </section>

        {/* v pc */}
        <section
          className="wrapper bg-image d-none d-md-block"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${serviceData?.bgimage || ''})`,
            height: '440px'
          }}
        >
          <div className="container pt-15 pb-12 pb-md-18 pt-md-18 text-center" >
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h2
                  className="display-1 text-white text-uppercase mt-10 mt-lg-4"
                  style={{
                    width: 'auto'
                  }}
                >
                  {serviceData?.category || 'ไม่พบข้อมูล'}
                </h2>
              </div>

              <div className="row mx-auto d-flex justify-content-center align-items-center">


                <div className="col-9 ">
                <p className="fs-22 text-white">{serviceData?.description1 || ''}</p>
                </div>
              
            <div className='col-8 '>
              <p className="fs-22 text-white">{serviceData?.description2 || ''}
              </p></div>


              </div>
           
            </div>
          </div>
        </section>


        {/* content section */}
        <section>
          <div className="container ">
            <div className="row p-4 p-md-7">
              <div className="col-xl-6 col-xl-3">
                {/* <h1 className="display-6 d-md-none text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">Why {serviceData?.title} is important</h1> */}
                <h1 className="display-6 d-md-none text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">{serviceData?.header}</h1>

                {/* <h1 className="display-3 d-none d-md-block text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">Why {serviceData?.title} is important</h1> */}
                <h1 className="display-3 d-none d-md-block text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">{serviceData?.header}</h1>

                <div className="content mt-md-7 mt-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                  <p className="fs-18">{serviceData?.detail1 || 'ไม่พบข้อมูล'}</p>  


                  {/* test ul */}
                  {colulfound && 
                  <div className="">
                     {/* {servicesType.map((item) => ( */}
                     <Colul />
                     {/* ))} */}
                  </div>
                  }




                  <p className="fs-18 d-none d-md-block mt-2">{serviceData?.detail2 || ''}</p>
                  <p className="fs-18 d-none d-md-block mt-2">{serviceData?.detail3 || ''}</p>
                </div>
              </div>

              <div className="col-xl-6 d-flex justify-content-center align-items-center" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="400">
                {/* <figure className="rounded overlay overlay-1 "> */}
                <Image
                  src={serviceData?.imagedetail || NOTFOUND.src}
                  alt={serviceData?.category || 'Service Image'}
                  width={30}
                  height={30}
                  className="w-75"
                  style={{
                    height: 'auto'
                  }}
                  draggable="false"
                />
                {/* </figure> */}
              </div>
              <p
                className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none"
                // data-aos="fade-right"
                // data-aos-duration="1500"
                // data-aos-delay="100"
              >
                {serviceData?.detail2 || ''}
              </p>
            </div>
          </div>
        </section>

        {/* features section */}
        <section>
          <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <ServiceDetailFeatures />
          </div>
        </section>

        <section>
          <div className="container">
            <ServiceDetailType />
          </div>
        </section>
      </main>

      {footerfound && (
        <div
          className="d-wrapper mt-5 pt-12 pb-12 "
          style={{
            backgroundColor: '#F3F3F3'
          }}
        >
          <div className="container col-4">
            <p className="lead fs-22 text-center fw-bold" data-aos="flip-up" data-aos-duration="1200" data-aos-easing="ease">
              {serviceData?.textfooter}</p>
          </div>
        </div>
      )}

      <FooterMain />
    </Fragment>
  );
};

export default Page;

{
  /* ---test if--- */
}
{
  /* {(() => {
        if (serviceData?.textfooter == null) {
          return console.log('ไม่พบ footer');
        }
        else{
          console.log('พบ footer');
          <div>
            <p>test</p>
          </div>

        }

        return null;
      })()} */
}
