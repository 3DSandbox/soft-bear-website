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
import Image, { StaticImageData } from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  BANNER13,
  IC_LUCKYDRAW,
  IC_REDEEMREWARDS,
  IC_REGISTER,
  IC_VOTEPOLL,
  IMG_DETAILEVENTSERVICE,
  REGISTERPACKAGE01,
  REGISTERPACKAGE02,
  REGISTERPACKAGE03,
  REGIS_BETTERTH,
  REGIS_DTAC,
  REGIS_GC,
  REGIS_HONDA,
  REGIS_KTAXA,
  REGIS_NESCAFE,
  REGIS_NETFLIX,
  REGIS_SUNSILK,
  REGIS_XIOMI,
  TYPEOFLUCKYDRAW,
  TYPEOFREGISTER,
  TYPEOFVOTE
} from 'assets';
import Head from 'next/head';
import Colul from 'components/3DTVTech/Service-detail/colum-ul';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
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
          content="บบริษัท 3DTV-Tech บริการของเรามีรายละเอียดโดยจะแบ่งตามหัวข้อย่อยจากหัวข้อใหญ่ที่ถูกแบ่งเป็นหมวดต่าง ๆ เพื่อให้ตรงกับความต้องการธุรกิจของคุณ"
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience"
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience"
        />
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
            backgroundImage: `url(${BANNER13.src})`,
            height: '440px'
          }}
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 ">
                <h2
                  className="display-1 text-white text-uppercase mt-13"
                  style={{
                    width: 'auto'
                  }}
                >
                  EVENT SERVICE
                </h2>
              </div>

              <div className="row mx-auto my-5 d-flex justify-content-center align-items-center">
                <div className="col-12 ">
                  <p className="fs-22 text-white">Another step in organizing an event that is different from before.</p>
                </div>

                <div className="col-12 ">
                  <p className="fs-18 text-white">
                    เรามีเทคโนยีที่ทันสมัยเพื่อให้ยกระดับงานอีเว้นท์ของคุณที่จะเต็มไปด้วย ความสร้างสรรค์
                    และช่วยเพิ่มประสิทธิภาพงานอีเว้นท์ได้ดีมากยิ่งขึ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* v pc */}
        <section
          className="wrapper bg-image d-none d-md-block"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${BANNER13.src})`,
            height: '440px'
          }}
        >
          <div className="container pt-15 pb-12 pb-md-18 pt-md-18 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h2
                  className="display-1 text-white text-uppercase mt-10 mt-lg-4"
                  style={{
                    width: 'auto'
                  }}
                >
                  EVENT SERVICE
                </h2>
              </div>

              <div className="row mx-auto d-flex justify-content-center align-items-center">
                <div className="col-9 ">
                  <p className="fs-22 text-white">Another step in organizing an event that is different from before.</p>
                </div>

                <div className="col-8 ">
                  <p className="fs-22 text-white">
                    เรามีเทคโนยีที่ทันสมัยเพื่อให้ยกระดับงานอีเว้นท์ของคุณที่จะเต็มไปด้วย ความสร้างสรรค์
                    และช่วยเพิ่มประสิทธิภาพงานอีเว้นท์ได้ดีมากยิ่งขึ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* content section */}
        <section>
          <div className="container ">
            <div className="row p-4 p-md-7">
              <div className="col-xl-6 col-xl-3">
                {/* v phone */}
                <h1
                  className="display-6 d-md-none text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  สร้างความโดดเด่นให้กับงานอีเว้นท์ ด้วยบริการของเรา ที่ตอบโจทย์ในทุก ๆ ด้าน
                </h1>

                {/* v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  สร้างความโดดเด่นให้กับงานอีเว้นท์ ด้วยบริการของเรา ที่ตอบโจทย์ในทุก ๆ ด้าน
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <p className="fs-18 d-md-none">
                    {' '}
                    งานอีเว้นท์มีการนำเทคโนโลยีดิจิตอลต่างๆ มาประยุกต์ใช้ อย่างมากมาย ทั้งในแง่ของความบันเทิงสนุกสนาน
                    การตลาด รวมไปจนถึง การเก็บข้อมูลสถิติต่างๆ เพื่อนำมาวิเคราะห์ต่อไป
                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                    งานอีเว้นท์มีการนำเทคโนโลยีดิจิตอลต่างๆ มาประยุกต์ใช้ อย่างมากมาย ทั้งในแง่ของความบันเทิงสนุกสนาน
                    การตลาด รวมไปจนถึง การเก็บข้อมูลสถิติต่างๆ เพื่อนำมาวิเคราะห์ต่อไป
                  </p>
                  {/* <p className="fs-18 d-none d-md-block mt-2">“Virtual Experience” หรือ “ประสบการณ์เสมือนจริง” กลายมาเป็นสิ่งสำคัญมากขึ้นต่อชีวิตประจำวันในด้านต่างๆ ผ่าน “โลกเสมือนจริง” ไม่ว่าจะเป็นการเรียน การทำงาน ความบันเทิง การท่องเที่ยวไปจนถึงการเยี่ยมชมพิพิธภัณฑ์ การชมงานศิลปะ ทั้งนี้ “Virtual Experience” จะกลายมาเป็น “New Normal” เนื่องจากสถานการณ์ต่างๆ ที่เกิดขึ้น ในปัจจุบัน</p> */}
                </div>
              </div>

              <div
                className="col-xl-6 d-flex justify-content-center align-items-center"
                data-aos="fade-zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src={IMG_DETAILEVENTSERVICE}
                  alt="Event Service"
                  width={30}
                  height={30}
                  className="w-75"
                  style={{
                    height: 'auto'
                  }}
                  draggable="false"
                />
              </div>
              {/* v phone */}
              {/* <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
                            “Virtual Experience” หรือ “ประสบการณ์เสมือนจริง” กลายมาเป็นสิ่งสำคัญมากขึ้นต่อชีวิตประจำวันในด้านต่างๆ ผ่าน “โลกเสมือนจริง” ไม่ว่าจะเป็นการเรียน การทำงาน ความบันเทิง การท่องเที่ยวไปจนถึงการเยี่ยมชมพิพิธภัณฑ์ การชมงานศิลปะ ทั้งนี้ “Virtual Experience” จะกลายมาเป็น “New Normal” เนื่องจากสถานการณ์ต่างๆ ที่เกิดขึ้น ในปัจจุบัน
                            </p> */}
            </div>
          </div>
        </section>

        {/* features section แบบ id*/}
        {/* <section>
          <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <ServiceDetailFeatures />
          </div>
        </section> */}

        <div className="container">
          <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Features</h2>
          <hr
            className="p-0 "
            style={{
              height: '3px',
              width: '4rem',
              backgroundColor: '#3175D1',
              margin: 'auto'
            }}
          ></hr>
        </div>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              {/* ic01 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                <Image src={IC_REGISTER} width={128} height={128} draggable={false} alt="Accessibility" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Register & Check-In</h3>
                <p className="fs-18 mx-3">ระบบลงทะเบียน</p>
              </div>

              {/* ic02 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                <Image src={IC_LUCKYDRAW} width={128} height={128} draggable={false} alt="Cost-Efficiency" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Lucky Draw</h3>
                <p className="fs-18 mx-3">ระบบจัดการการจับรางวัล</p>
              </div>

              {/* ic03 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                <Image src={IC_VOTEPOLL} width={128} height={128} draggable={false} alt="Vote & Poll" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Vote & Poll</h3>
                <p className="fs-18 mx-3">ระบบโหวตและสำรวจ</p>
              </div>
            </div>
          </div>
        </section>

        {/* type of แบบ id */}
        {/* <section>
                    <div className="container">
                        <ServiceDetailType />
                    </div>
                </section> */}

        <section>
          <div className="container">
            <div className="mt-10 mt-md-3">
              <h2 className="display-3 text-main text-center">Type of Event Service</h2>
              <hr
                className="p-0 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#3175D1',
                  margin: 'auto'
                }}
              ></hr>

              <div className="grid grid-view projects-masonry">
                <div className="container">
                  <div className="row g-8 g-lg-10 mt-1  justify-content-center">
                    {/* t01 */}
                    <div className="project  col-md-6 col-xl-4">
                      <div className=" h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFREGISTER}
                            width={285}
                            height={285}
                            alt="Microsite Game"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Register / Check-in</h3>
                          <hr
                            className="p-0 "
                            style={{
                              height: '3px',
                              width: '4rem',
                              backgroundColor: '#3175D1',
                              margin: 'auto'
                            }}
                          ></hr>
                          <div className="mt-2">
                            <p className="text-center fs-16">
                              เมื่อลงทะเบียนมาแล้ว ผู้เข้าร่วมงานสามารถ Check-in หน้างานได้อย่างรวดเร็ว
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* t02 */}
                    <div className="project  col-md-6 col-xl-4">
                      <div className="h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFVOTE}
                            width={285}
                            height={285}
                            alt="Game Controller"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Voting / Q&A</h3>
                          <hr
                            className="p-0 "
                            style={{
                              height: '3px',
                              width: '4rem',
                              backgroundColor: '#3175D1',
                              margin: 'auto'
                            }}
                          ></hr>
                          <div className="mt-2">
                            <p className="text-center fs-16">
                              การมีส่วนร่วมของผู้ร่วมงานจำนวนมากแบบ Realtime ไม่เป็นปัญหาอีกต่อไป ไม่ว่าจะเป็นระบบ Q&A
                              ระบบโหวตแบบ Realtime โดยทั้งหมดสามารถ ทำได้ผ่านไมโครไซด์ ไม่จำเป็นต้องลงแอปให้ยุ่งยาก
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* t03 */}
                    <div className="project  col-md-6 col-xl-4">
                      <div className="h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFLUCKYDRAW}
                            width={285}
                            height={285}
                            alt="Interactive Touchscreen"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Lucky Draw</h3>
                          <hr
                            className="p-0 "
                            style={{
                              height: '3px',
                              width: '4rem',
                              backgroundColor: '#3175D1',
                              margin: 'auto'
                            }}
                          ></hr>
                          <div className="mt-2">
                            <p className="text-center fs-16">
                              การ check in จะเชื่อมต่อกับข้อมูลของลูกค้า ที่เข้าร่วมงานการจัดทำกิจกรรมต่างๆ เช่น
                              จับฉลากผู้โชคดีที่จะเข้าร่วมงานจึงทำได้อย่าง ง่ายดายระบบยังสามารถออกแบบให้เชื่อมต่อกับ
                              สต๊อคของรางวัลไม่ว่ารางวัลจะมีจำนวนมากแค่ไหน สามารถจัดการได้ทันทีอีกด้วย
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Package */}
        <section>
          <h2 className="text-main text-center">Quick Package</h2>
          <hr
            className="p-0 "
            style={{
              height: '3px',
              width: '4rem',
              backgroundColor: '#3175D1',
              margin: 'auto'
            }}
          ></hr>

          {/* qucik package */}
          <div className="my-7 grid grid-view projects-masonry">
            <div className="container">
              <div className="row g-6 g-lg-10 justify-content-center">
                {/* quick package 01 */}
                <div
                  className="project col-md-6 col-xl-4"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  <div
                    className="shadow-lg h-100"
                    style={{
                      backgroundColor: '#fbf828'
                    }}
                  >
                    <figure className="d-flex justify-content-center align-items-center">
                      <Image
                        src={REGISTERPACKAGE01}
                        width={285}
                        height={285}
                        alt="Quick Package 01"
                        className="mt-6 "
                        style={{
                          width: '50%'
                        }}
                      />
                    </figure>

                    <div className="card-body p-5">
                      <ul>
                        <li>ลงทะเบียนผ่านไมโครไซด์</li>
                        <li> Dashboard ดูสถิติการลงทะเบียน</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* quick package 02 */}
                <div
                  className="project col-md-6 col-xl-4"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  <div
                    className="shadow-lg h-100"
                    style={{
                      backgroundColor: '#fbf828'
                    }}
                  >
                    <figure className="d-flex justify-content-center align-items-center">
                      <Image
                        src={REGISTERPACKAGE02}
                        width={285}
                        height={285}
                        alt="Quick Package 02"
                        className="mt-6 "
                        style={{
                          width: '50%'
                        }}
                      />
                    </figure>

                    <div className="card-body p-5">
                      <ul>
                        <li>ลงทะเบียนผ่านไมโครไซด์</li>
                        <li> ส่ง Email QRcode เพื่อ Checkin หน้างาน</li>
                        <li> แอป Checkin บน Tablet</li>
                        <li> Dashboard ดูสถิติการลงทะเบียนและการเช็คอิน</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* quick package 03 */}
                <div
                  className="project col-md-6 col-xl-4"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-easing="ease"
                >
                  <div
                    className="shadow-lg h-100"
                    style={{
                      backgroundColor: '#fbf828'
                    }}
                  >
                    <figure className="d-flex justify-content-center align-items-center">
                      <Image
                        src={REGISTERPACKAGE03}
                        width={285}
                        height={285}
                        alt="Quick Package 03"
                        className="mt-6 "
                        style={{
                          width: '50%'
                        }}
                      />
                    </figure>

                    <div className="card-body p-5">
                      <ul>
                        <li>ลงทะเบียนผ่านไมโครไซด์</li>
                        <li> ส่ง Email QRcode เพื่อ Checkin หน้างาน</li>
                        <li> แอป Checkin บน Tablet</li>
                        <li> Dashboard ดูสถิติการลงทะเบียนและการเช็คอิน</li>
                        <li> Dashboard ดูสถิติการลงทะเบียนและการเช็คอิน</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* portfolio */}
        <section>
          <h2 className="text-main text-center">Portfolio</h2>
          <hr
            className="p-0 "
            style={{
              height: '3px',
              width: '4rem',
              backgroundColor: '#3175D1',
              margin: 'auto'
            }}
          ></hr>

          <div className="container">
            <div className="row g-6 g-lg-10 ">
              {/* portfolio01 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_NETFLIX.src}>
                        <Image
                          src={REGIS_NETFLIX.src}
                          width={285}
                          height={285}
                          alt="Register Netflix"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio02 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_BETTERTH.src}>
                        <Image
                          src={REGIS_BETTERTH.src}
                          width={285}
                          height={285}
                          alt="Register Betterth"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register & Check-in
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio03 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_KTAXA.src}>
                        <Image
                          src={REGIS_KTAXA.src}
                          width={285}
                          height={285}
                          alt="Register Ktaxa"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register & Check-in
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio04 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_GC.src}>
                        <Image
                          src={REGIS_GC.src}
                          width={285}
                          height={285}
                          alt="Register GC"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register & Check-in
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio05 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_HONDA.src}>
                        <Image
                          src={REGIS_HONDA.src}
                          width={285}
                          height={285}
                          alt="Register Honda"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Check-in
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio06 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_SUNSILK.src}>
                        <Image
                          src={REGIS_SUNSILK.src}
                          width={285}
                          height={285}
                          alt="Register Sunsilk"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio07 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_DTAC.src}>
                        <Image
                          src={REGIS_DTAC.src}
                          width={285}
                          height={285}
                          alt="Register DTAC"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio08 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_NESCAFE.src}>
                        <Image
                          src={REGIS_NESCAFE.src}
                          width={285}
                          height={285}
                          alt="Register Nescafe"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register & Check-in
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>

              {/* portfolio09 */}
              <div className="project col-md-6 mb-5 col-xl-4 ">
                <PhotoProvider>
                  <div className="d-flex flex-column ">
                    <figure className="m-5 m-md-0" title="click to zoom the image">
                      <PhotoView src={REGIS_XIOMI.src}>
                        <Image
                          src={REGIS_XIOMI.src}
                          width={285}
                          height={285}
                          alt="Register Xiomi"
                          style={{
                            cursor: 'pointer'
                          }}
                        />
                      </PhotoView>

                      <p
                        className="fs-16 text-center mt-8"
                        style={{
                          fontWeight: 'bold'
                        }}
                      >
                        Register
                      </p>
                    </figure>
                  </div>
                </PhotoProvider>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
