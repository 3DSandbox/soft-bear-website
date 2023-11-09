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
import {
  BANNER12,
  IC_ENGAGEMENTANDINTERACTION,
  IC_REDEEMREWARDS,
  IC_SOCIALMEDIASHARING,
  IMG_DETAILINTERACTIVE,
  PHOTOBOOTH,
  TYPEOFGAMECONTROLLER,
  TYPEOFINTERACTIVEKINECT,
  TYPEOFINTERACTIVETOUCHSCREEN,
  TYPEOFINTERACTIVEWALLFLOOR,
  TYPEOFKARAOKE,
  TYPEOFMICROSITEGAMES,
  TYPEOFMOBILEAPPLICATION,
  TYPEOFMOBILECONTROL,
  TYPEOFXRAY
} from 'assets';
import Head from 'next/head';
import Colul from 'components/3DTVTech/Service-detail/colum-ul';
import Link from 'next/link';
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
            backgroundImage: `url(${BANNER12.src})`,
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
                  INTERACTIVE
                </h2>
              </div>

              <div className="row mx-auto my-5 d-flex justify-content-center align-items-center">
                <div className="col-12 ">
                  <p className="fs-22 text-white">Take your Event to the Next Level with Interactive Tech.</p>
                </div>

                <div className="col-12 ">
                  <p className="fs-18 text-white">
                    เทคโนโลยีที่สร้างและพัฒนาสำหรับการใช้งานแบบเรียลไทม์ โดยเน้นที่ข้อมูล ของผู้ใช้ให้มี
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
            backgroundImage: `url(${BANNER12.src})`,
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
                  INTERACTIVE
                </h2>
              </div>

              <div className="row mx-auto d-flex justify-content-center align-items-center">
                <div className="col-9 ">
                  <p className="fs-22 text-white">Take your Event to the Next Level with Interactive Tech.</p>
                </div>

                <div className="col-8 ">
                  <p className="fs-22 text-white">
                    เทคโนโลยีที่สร้างและพัฒนาสำหรับการใช้งานแบบเรียลไทม์ โดยเน้นที่ข้อมูล ของผู้ใช้ให้มี
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
                  Interactive Technology: Engaging the Digital World
                </h1>

                {/* v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Interactive Technology: Engaging the Digital World
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <p className="fs-18 d-md-none">
                    {' '}
                    เพื่อสร้างประสบการณ์ที่น่าจดจำที่จะดึงดูดผู้ใช้งาน สร้างการรับรู้ถึงแบรนด์ และขับเคลื่อนผลลัพธ์ที่ดี
                    นี่คือเทคโนโลยีที่สามารถช่วยยกระดับอีเว้นท์ของคุณ เพิ่มการมีส่วนร่วมและความพึงพอใจของผู้เข้าร่วม
                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                    เพื่อสร้างประสบการณ์ที่น่าจดจำที่จะดึงดูดผู้ใช้งาน สร้างการรับรู้ถึงแบรนด์ และขับเคลื่อนผลลัพธ์ที่ดี
                    นี่คือเทคโนโลยีที่สามารถช่วยยกระดับอีเว้นท์ของคุณ เพิ่มการมีส่วนร่วมและความพึงพอใจของผู้เข้าร่วม
                  </p>
                  {/* <p className="fs-18 d-none d-md-block mt-2">“Virtual Experience” หรือ “ประสบการณ์เสมือนจริง” กลายมาเป็นสิ่งสำคัญมากขึ้นต่อชีวิตประจำวันในด้านต่างๆ ผ่าน “โลกเสมือนจริง” ไม่ว่าจะเป็นการเรียน การทำงาน ความบันเทิง การท่องเที่ยวไปจนถึงการเยี่ยมชมพิพิธภัณฑ์ การชมงานศิลปะ ทั้งนี้ “Virtual Experience” จะกลายมาเป็น “New Normal” เนื่องจากสถานการณ์ต่างๆ ที่เกิดขึ้น ในปัจจุบัน</p> */}
                </div>
              </div>

              {/* v phone */}
              <div
                className="col-xl-6 d-flex justify-content-center align-items-center"
                data-aos="fade-zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src={IMG_DETAILINTERACTIVE}
                  alt="Interactive"
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
              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none"></p>
            </div>
          </div>
        </section>

        {/* features section แบบ id*/}
        {/* <section>
          <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <ServiceDetailFeatures />
          </div>
        </section> */}

        {/* v pc */}
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
                <Image
                  src={IC_ENGAGEMENTANDINTERACTION}
                  width={128}
                  height={128}
                  draggable={false}
                  alt="Accessibility"
                />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Engaging Experience</h3>
                <p className="fs-18 mx-3">ประสบการณ์ที่น่าดึงดูดให้แบรนด์กับผู้ใช้</p>
              </div>

              {/* ic02 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                <Image src={IC_REDEEMREWARDS} width={128} height={128} draggable={false} alt="Cost-Efficiency" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Redeem Rewards</h3>
                <p className="fs-18 mx-3">สามารถสร้างระบบแจกรางวัลเมื่อทำภารกิจสำเร็จ</p>
              </div>

              {/* ic03 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                <Image
                  src={IC_SOCIALMEDIASHARING}
                  width={128}
                  height={128}
                  draggable={false}
                  alt="Social Media Sharing"
                />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Social Media Sharing</h3>
                <p className="fs-18 mx-3">สร้างความประทับใจ และสามารถแชร์ บนแพลตฟอร์มโซเชียลมีเดียได้</p>
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
              <h2 className="display-3 text-main text-center">Type of Interactive Technology</h2>
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
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Link href="/services/interactive/microsite-game">
                            <Image
                              src={TYPEOFMICROSITEGAMES}
                              width={285}
                              height={285}
                              alt="Microsite Game"
                              style={{
                                width: '100%'
                              }}
                            />
                          </Link>
                        </figure>
                        <div className="card-body p-5">
                          <Link href="/services/interactive/microsite-game">
                            <h3 className="fs-19 text-center text-main mb-0">Microsite Game</h3>
                            <hr
                              className="p-0 mt-md-3 "
                              style={{
                                height: '3px',
                                width: '4rem',
                                backgroundColor: '#3175D1',
                                margin: 'auto'
                              }}
                            ></hr>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* t02 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Link href="/services/interactive/interactive-touchscreen">
                            <Image
                              src={TYPEOFINTERACTIVETOUCHSCREEN}
                              width={285}
                              height={285}
                              alt="Interactive Touchscreen"
                              style={{
                                width: '100%'
                              }}
                            />
                          </Link>
                        </figure>
                        <div className="card-body p-5">
                          <Link href="/services/interactive/interactive-touchscreen">
                            <h3 className="fs-19 text-center text-main mb-0">Interactive Touchscreen</h3>
                            <hr
                              className="p-0 p-0 mt-md-3 "
                              style={{
                                height: '3px',
                                width: '4rem',
                                backgroundColor: '#3175D1',
                                margin: 'auto'
                              }}
                            ></hr>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* t03 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Link href="/services/interactive/game-controller">
                            <Image
                              src={TYPEOFGAMECONTROLLER}
                              width={285}
                              height={285}
                              alt="Game Controller"
                              style={{
                                width: '100%'
                              }}
                            />
                          </Link>
                        </figure>
                        <div className="card-body p-5">
                          <Link href="/services/interactive/game-controller">
                            <h3 className="fs-19 text-center text-main mb-0">Game Controller</h3>
                            <hr
                              className="p-0 p-0 mt-md-3 "
                              style={{
                                height: '3px',
                                width: '4rem',
                                backgroundColor: '#3175D1',
                                margin: 'auto'
                              }}
                            ></hr>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* t04 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Link href="/services/interactive/mobile-control">
                            <Image
                              src={TYPEOFMOBILECONTROL}
                              width={285}
                              height={285}
                              alt="Mobile Control"
                              style={{
                                width: '100%'
                              }}
                            />
                          </Link>
                        </figure>
                        <div className="card-body p-5">
                          <Link href="/services/interactive/mobile-control">
                            <h3 className="fs-19 text-center text-main mb-0">Mobile Control</h3>
                            <hr
                              className="p-0 p-0 mt-md-3 "
                              style={{
                                height: '3px',
                                width: '4rem',
                                backgroundColor: '#3175D1',
                                margin: 'auto'
                              }}
                            ></hr>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* t05 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Link href="/services/interactive/interactive-kinect">
                            <Image
                              src={TYPEOFINTERACTIVEKINECT}
                              width={285}
                              height={285}
                              alt="Interactive Kinect"
                              style={{
                                width: '100%'
                              }}
                            />
                          </Link>
                        </figure>
                        <div className="card-body p-5">
                          <Link href="/services/interactive/interactive-kinect">
                            <h3 className="fs-19 text-center text-main mb-0">Interactive Kinect</h3>
                            <hr
                              className="p-0 p-0 mt-md-3 "
                              style={{
                                height: '3px',
                                width: '4rem',
                                backgroundColor: '#3175D1',
                                margin: 'auto'
                              }}
                            ></hr>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* t06 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Image
                            src={TYPEOFXRAY}
                            width={285}
                            height={285}
                            alt="Xray"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Xray</h3>
                        </div>
                      </div>
                    </div>

                    {/* t07 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Image
                            src={TYPEOFINTERACTIVEWALLFLOOR}
                            width={285}
                            height={285}
                            alt="Interactive Wall / Floor"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Interactive Wall / Floor</h3>
                        </div>
                      </div>
                    </div>

                    {/* t08 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Image
                            src={TYPEOFMOBILEAPPLICATION}
                            width={285}
                            height={285}
                            alt="Mobile Application"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Mobile Application</h3>
                        </div>
                      </div>
                    </div>

                    {/* t09 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Image
                            src={TYPEOFKARAOKE}
                            width={285}
                            height={285}
                            alt="Karaoke"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Karaoke</h3>
                        </div>
                      </div>
                    </div>

                    {/* t10 */}
                    <div className="project  col-md-6 col-xl-3">
                      <div className="shadow-lg h-100">
                        <figure className="card-img-top">
                          <Image
                            src={PHOTOBOOTH}
                            width={285}
                            height={285}
                            alt="Photo Booth"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Photo Booth</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div
        className="d-wrapper mt-5 pt-12 pb-12 "
        style={{
          backgroundColor: '#F3F3F3'
        }}
      >
        <div className="container col-4">
          <p
            className="lead fs-22 text-center fw-bold"
            data-aos="flip-up"
            data-aos-duration="1200"
            data-aos-easing="ease"
          >
            “อัพเกรดอีเว้นต์ของคุณด้วย Interactive Technology สร้างประสบการณ์ที่น่าประทับใจให้กับแบรนด์”
          </p>
        </div>
      </div>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
