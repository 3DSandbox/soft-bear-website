import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  IC_ATTRACTIVE,
  IC_INTERACTIVEHARDWARE,
  IC_REACHTHETARGETHARDWARE,
  IMG_HARDWARE,
  SOFTBEARBANNER01
} from 'assets';
import Head from 'next/head';
import { servicesType } from 'data/Soft-Bear/Services/dataList';
import NavbarMain from 'components/Soft-Bear/NavbarMain';
import FooterMain from 'components/Soft-Bear/FooterMain';
// ..

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
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav  position-absolute bg-white"></NavbarMain>
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
          className="wrapper bg-image  d-md-none rounded"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${SOFTBEARBANNER01.src})`,
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
                  Web Application
                </h2>
              </div>

              <div className="row mx-auto my-5 d-flex justify-content-center align-items-center">
                {/* parahrap phone banner */}
                <div className="col-12 ">
                  {/* <p className="fs-22 text-white">ใช้ Software เพื่อขับเคลื่อนอุปกรณ์หรือกลไกบางอย่างให้เกิดผลที่ต้องการ</p> */}
                </div>

                <div className="col-12 ">
                  <p className="fs-18 text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* v pc */}
        <section
          className="wrapper bg-image d-none d-md-block rounded"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${SOFTBEARBANNER01.src})`,
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
                  Web Application
                </h2>
              </div>

              <div className="row mx-auto d-flex justify-content-center align-items-center">
                {/* parahrap pc banner */}
                <div className="col-9 ">{/* <p className="fs-22 text-white"></p> */}</div>

                <div className="col-8 ">
                  <p className="fs-22 text-white"></p>
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
                {/*header v phone */}
                <h1
                  className="display-6 d-md-none text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Web Application for every solution
                </h1>

                {/*header v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Web Application for every solution
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                    {/* v phone */}
                  <p className="fs-18 d-md-none">
                  เว็บแอปพลิเคชัน หรือที่เรียกง่ายๆ ว่า "เว็บแอป" คือแอปพลิเคชันซอฟต์แวร์หรือโปรแกรมที่สามารถเข้าถึงได้และทำงานภายในเว็บเบราว์เซอร์ 
สามารถมีการประมวลผลได้อย่างมีประสิทธิภาพเช่นเดียวกับการทำงานของโปรแกรม มีการสั่งงานที่ซับซ้อน สามารถมีการทำงานผ่าน cloud เพื่อการเก็บและเข้าถึงข้อมูลได้จากทุกที่

                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                  เว็บแอปพลิเคชัน หรือที่เรียกง่ายๆ ว่า "เว็บแอป" คือแอปพลิเคชันซอฟต์แวร์หรือโปรแกรมที่สามารถเข้าถึงได้และทำงานภายในเว็บเบราว์เซอร์ 
สามารถมีการประมวลผลได้อย่างมีประสิทธิภาพเช่นเดียวกับการทำงานของโปรแกรม มีการสั่งงานที่ซับซ้อน สามารถมีการทำงานผ่าน cloud เพื่อการเก็บและเข้าถึงข้อมูลได้จากทุกที่

                  </p>
                  <p className="fs-18 d-none d-md-block mt-2">
                  เว็บแอปพลิเคชันนั้นได้รับความนิยมเพิ่มมากขึ้นเนื่องจากไม่ขึ้นอยู่กับแพลตฟอร์มและสามารถเข้าถึงได้จากอุปกรณ์ต่าง ๆ ที่มีการเชื่อมต่ออินเทอร์เน็ต รวมถึงคอมพิวเตอร์ สมาร์ทโฟน และแท็บเล็ต
                  </p>

                  <p className="fs-18 d-none d-md-block mt-2">

                  </p>
                </div>
              </div>

              <div
                className="col-xl-6 d-flex justify-content-center align-items-center"
                data-aos="fade-zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src={IMG_HARDWARE}
                  alt="Interactive"
                  width={30}
                  height={30}
                  className="w-75 rounded"
                  style={{
                    height: 'auto'
                  }}
                  draggable="false"
                />
              </div>
              {/* v phone */}
              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
              เว็บแอปพลิเคชันนั้นได้รับความนิยมเพิ่มมากขึ้นเนื่องจากไม่ขึ้นอยู่กับแพลตฟอร์มและสามารถเข้าถึงได้จากอุปกรณ์ต่าง ๆ ที่มีการเชื่อมต่ออินเทอร์เน็ต รวมถึงคอมพิวเตอร์ สมาร์ทโฟน และแท็บเล็ต
                            </p>
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
          <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Why Web Application</h2>
          <hr
            className="p-0 "
            style={{
              height: '3px',
              width: '4rem',
              backgroundColor: '#FF8812',
              margin: 'auto'
            }}
          ></hr>
        </div>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              {/* ic01 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_ATTRACTIVE} width={128} height={128} draggable={false} alt="Attractive" />
                <h3
                  className="mb-3 mt-3 rounded"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Accessibility</h3>
                <p className="fs-18 mx-3">
                เข้าถึงได้ผ่านเว็บเบราว์เซอร์ ผู้ใช้สามารถใช้แอปพลิเคชันได้
จากทุกที่ที่มีการเชื่อมต่อ
อินเทอร์เน็ต ไม่จำเป็นต้องดาวน์โหลด หรือติดตั้งเว็บแอปพลิเคชัน
                </p>
              </div>

              {/* ic02 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_INTERACTIVEHARDWARE} width={128} height={128} draggable={false} alt="Interactive" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Platform Independence</h3>
                <p className="fs-18 mx-3">
                การใช้งานไม่ได้ขึ้นอยู่กับกับระบบปฏิบัติ การหรืออุปกรณ์เฉพาะ สามารถใช้บน Windows, macOS, Linux, Android, iOS และแพลตฟอร์มอื่น ๆ โดยไม่ต้องดัดแปลง
                </p>
              </div>

              {/* ic03 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Work on Cloud</h3>
                <p className="fs-18 mx-3">
                การใช้งานข้อมูลบน cloud ซึ่งมีข้อได้เปรียบมากมาย ไม่ว่าจะเป็นการเข้าถึงได้จากทุกที่ การอัพเดทข้อมูลที่เป็นข้อมูลชุดเดียวกันตลอดเวลา ไปจนถึงความปลอดภัยในการเก็บข้อมูล
                </p>
              </div>

              {/* ic04 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Dynamic Content</h3>
                <p className="fs-18 mx-3">
                สามารถแสดงเนื้อหาอย่างยืดหยุ่น
การแก้ไขเนื้อหาและตอบสนองต่อผู้ใช้สามารถทำได้แบบ realtime 
                </p>
              </div>

              {/* ic05 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">
                Interactivity:
                </h3>
                <p className="fs-18 mx-3">
                สามารถรถโต้ตอบได้แบบ realtime และตอบโจทย์การโต้ตอบได้
มากมาย หลากหลายรูปแบบ 
                </p>
              </div>

              {/* ic06 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Security</h3>
                <p className="fs-18 mx-3">
                มีความปลิดภัยที่เป็นที่ยอมรับโดยทั่วไป เช่น การส่งข้อมูลที่ปลอดภัย (HTTPS) การตรวจสอบสิทธิ์ และการอนุญาต แลพการปกป้องข้อมูลผู้ใช้
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="container">
            <div className="mt-10 mt-md-3">
              <h2 className="display-3 text-main text-center">Type of Hardware Development</h2>
              <hr
                className="p-0 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#FF8812',
                  margin: 'auto'
                }}
              ></hr>

              <div className="grid grid-view projects-masonry">
                <div className="container">
                  <div className="row g-8 g-lg-10 mt-1  justify-content-center">
                  
                    <div className="project  col-md-6 col-xl-4">
                      <div className=" h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFZEOSCOPE}
                            width={285}
                            height={285}
                            alt="Zeoscope"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Zeoscope</h3>
                        </div>
                      </div>
                    </div>

                 
                    <div className="project  col-md-6 col-xl-4">
                      <div className="h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFPRESSTOPLAY}
                            width={285}
                            height={285}
                            alt="Press to Play"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Press to Play</h3>
                        </div>
                      </div>
                    </div>

                 
                    <div className="project  col-md-6 col-xl-4">
                      <div className=" h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFPRESSTORANDOM}
                            width={285}
                            height={285}
                            alt="Press to Random"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Press to Random</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
