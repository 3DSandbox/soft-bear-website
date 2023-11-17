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
  SOFTBEARBANNER01,
  TYPEOFAPPLICATIONDEVELOPMENT,
  TYPEOFBUSINESSMATCHINGPLATFORM,
  TYPEOFLEARNINGMANAGEMENTSYSTEM,
  TYPEOFPRESSTOPLAY,
  TYPEOFPRESSTORANDOM,
  TYPEOFWEBDEVELOPMENT,
  TYPEOFZEOSCOPE
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
        <title>LMS Empowering learning, Unleashing potential</title>
        <meta
          name="description"
          content="บริษัท Soft-Bear ได้มีบริการสำหรับการจัดทำ Learning Management System (LMS) หรือระบบการจัดการเรียนการสอนสำหรับนำไปประยุกต์ใช้ในหลากหลายรูปแบบ เช่น บริษัทเอกชน หน่วยงานราชการ ศูนย์ฝึกอบรม"
        />
        <meta
          name="keyword"
          content="บริการจัดทำระบบการเรียนการสอน, รับทำระบบการเรียนการสอน, จัดทำ lms, บริการจัดทำ lms, รับพัฒนา lms"
        />
        <meta name="author" content="Soft-Bear" />
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

        {/* v phone */}
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
                  className="display-1 text-white text-uppercase "
                  style={{
                    width: 'auto',
                    marginTop: '09.0rem'
                  }}
                >
                  LMS
                  <br />
                  Empowering Learning,
                  <br /> Unleashing Potential
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
                  LMS
                  <br />
                  Empowering Learning,
                  <br /> Unleashing Potential
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
                  ระบบการเรียนการสอนออนไลน์ สำหรับองค์กร หน่วยงานและสถาบันการศึกษา
                </h1>

                {/*header v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  ระบบการเรียนการสอนออนไลน์ สำหรับองค์กร หน่วยงานและสถาบันการศึกษา
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {/* v phone */}
                  <p className="fs-18 d-md-none">
                    ระบบ LMS สามารถนำไปประยุกต์ได้หลากหลายเช่น หน่วยงานราชการ ศูนย์ฝึกอบรม หรือบริษัทเอกชน
                    เพื่อส่งต่อความรู้ต่างๆภายในองค์กรทำให้การทำงานมีประสิทธิภาพมากขึ้น
                    <ul>
                      <li>เป็นการสร้างศูนย์กลางการเรียนรู้เพื่อกระจายความรู้</li>
                      <li>ทำให้ทุกคนได้รับความรู้ที่มีมาตราฐานเดียวกัน </li>
                      <li>สามารถเข้าถึงได้ทุกที่ทุกเวลาและทุกอุปกรณ์ </li>
                      <li>LMS เป็นการเรียนการสอนที่ประหยัด เมื่อเปรียบเทียบกับ Onsite</li>
                      <li>สามารถปรับเปลี่ยนได้ตามความต้องการ</li>
                    </ul>
                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                    ระบบ LMS สามารถนำไปประยุกต์ได้หลากหลายเช่น หน่วยงานราชการ ศูนย์ฝึกอบรม หรือบริษัทเอกชน
                    เพื่อส่งต่อความรู้ต่างๆภายในองค์กรทำให้การทำงานมีประสิทธิภาพมากขึ้น
                    <ul>
                      <li>เป็นการสร้างศูนย์กลางการเรียนรู้เพื่อกระจายความรู้</li>
                      <li>ทำให้ทุกคนได้รับความรู้ที่มีมาตราฐานเดียวกัน </li>
                      <li>สามารถเข้าถึงได้ทุกที่ทุกเวลาและทุกอุปกรณ์ </li>
                      <li>LMS เป็นการเรียนการสอนที่ประหยัด เมื่อเปรียบเทียบกับ Onsite</li>
                      <li>สามารถปรับเปลี่ยนได้ตามความต้องการ</li>
                    </ul>
                  </p>
                  <p className="fs-18 d-none d-md-block mt-2">
                    นอกจากนี้ เรามีทีมกราฟิกที่สามารถเนรมิต Info-graphic
                    เพื่อสรุปข้อมูลที่เข้าใจยากให้เป็นเรื่องที่ง่ายได้ รวมทั้งมี Gamification
                    เพื่อเปลี่ยนเรื่องที่น่าเบื่อให้น่าสนใจได้ ทำให้ผู้เรียนสนุกกับการเรียน
                  </p>

                  <p className="fs-18 d-none d-md-block mt-2">
                    ทีมงานพัฒนาที่ครบวงจร ให้คำปรึกษาแนะนำ รวมทั้งออกแบบ เพื่อให้ตอบโจทย์การใช้งาน
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
                นอกจากนี้ เรามีทีมกราฟิกที่สามารถเนรมิต Info-graphic เพื่อสรุปข้อมูลที่เข้าใจยากให้เป็นเรื่องที่ง่ายได้
                รวมทั้งมี Gamification เพื่อเปลี่ยนเรื่องที่น่าเบื่อให้น่าสนใจได้ ทำให้ผู้เรียนสนุกกับการเรียน
              </p>

              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
                ทีมงานพัฒนาที่ครบวงจร ให้คำปรึกษาแนะนำ รวมทั้งออกแบบ เพื่อให้ตอบโจทย์การใช้งาน
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
          <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Features</h2>
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
                <h3 className="fs-22 text-main">เรียนได้ทุกที่ ทุกเวลา</h3>
                <p className="fs-18 mx-3">ใช้ได้ทุกอุปกรณ์ ทุกเวลา เนื่องจากเป็น Web based App</p>
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
                <h3 className="fs-22 text-main">ระบบสมาชิก</h3>
                <p className="fs-18 mx-3">
                  สำหรับผู้สอนและผู้เรียน สามารถลงทะเบียนได้จาก Social media หรือ ระบบ Register
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
                <h3 className="fs-22 text-main">ถามตอบกับอาจารย์ได้</h3>
                <p className="fs-18 mx-3">ระบบสื่อสารกับผู้สอนทำให้ผู้เรียนสามารถส่ง ข้อความส่วนตัวไปยังผู้สอนได้</p>
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
                <h3 className="fs-22 text-main">ระบบประกาศนียบัตร</h3>
                <p className="fs-18 mx-3">เมื่อจบคอร์ส สามารถออกประกาศนียบัตรได้ อัตโนมัติ</p>
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
                <h3 className="fs-22 text-main">ข้อมูล-ประวัติการเรียน</h3>
                <p className="fs-18 mx-3">เก็บทุกข้อมูลเพื่อจัดทำรายงาน ของผู้เรียน รวมทั้งสามารถ export ข้อมูลได้</p>
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
                <h3 className="fs-22 text-main">ระบบจัดการเรียนการสอน</h3>
                <p className="fs-18 mx-3">ผู้สอนสามารถจัดการหลักสูตรได้อย่างง่ายดาย</p>
              </div>

              {/* ic07 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">ระบบประเมินผลการเรียนการสอน</h3>
                <p className="fs-18 mx-3">ติดตาม ประเมินผล รวมทั้งสามารถกำหนดเกณฑ์ ที่ผ่านได้ </p>
              </div>

              {/* ic08 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Dashboard</h3>
                <p className="fs-18 mx-3">Dashboard สรุปข้อมูลได้อย่างเข้าใจง่าย ครบถ้วน</p>
              </div>

              {/* ic09 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">Integration</h3>
                <p className="fs-18 mx-3">เชื่อมต่อกับระบบ Authentication ภายนอกได้</p>
              </div>

              {/* ic10 */}
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-4 text-center mt-10">
                <Image src={IC_REACHTHETARGETHARDWARE} width={128} height={128} draggable={false} alt="Coding" />
                <h3
                  className="mb-3 mt-3"
                  style={{
                    color: '#737373'
                  }}
                ></h3>
                <h3 className="fs-22 text-main">AR + Gamification</h3>
                <p className="fs-18 mx-3">ระบบ AR และ Gamification </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="mt-10 mt-md-3">
              <h2 className="display-3 text-main text-center">Type of Software Development</h2>
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
                            src={TYPEOFAPPLICATIONDEVELOPMENT}
                            width={285}
                            height={285}
                            alt="Application Development"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Application Development</h3>
                        </div>
                      </div>
                    </div>

                    <div className="project  col-md-6 col-xl-4">
                      <div className="h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFWEBDEVELOPMENT}
                            width={285}
                            height={285}
                            alt="Web Development"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Web Development</h3>
                        </div>
                      </div>
                    </div>

                    <div className="project  col-md-6 col-xl-4">
                      <div className=" h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFBUSINESSMATCHINGPLATFORM}
                            width={285}
                            height={285}
                            alt="Business Matching
                            Platform"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Business Matching Platform</h3>
                        </div>
                      </div>
                    </div>

                    <div className="project  col-md-6 col-xl-4">
                      <div className=" h-100">
                        <figure className="card-img-top rounded">
                          <Image
                            src={TYPEOFLEARNINGMANAGEMENTSYSTEM}
                            width={285}
                            height={285}
                            alt="Learning Management System (LMS)"
                            style={{
                              width: '100%'
                            }}
                          />
                        </figure>
                        <div className="card-body p-5">
                          <h3 className="fs-19 text-center text-main mb-0">Learning Management System (LMS)</h3>
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

      <FooterMain />
    </Fragment>
  );
};

export default Page;
