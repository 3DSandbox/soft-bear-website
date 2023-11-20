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
        <title>Soft-Bear</title>
        <meta
          name="description"
          content="บริษัท Soft-Bear พร้อมให้บริการในการจัดทำ Business Matching เพื่อเปิดโอกาสและเป็นสะพานเชื่อมเพิ่มโอกาสให้กับธุรกิจ"
        />
        <meta
          name="keyword"
          content="รับพัฒนา business matching, บริการพัฒนา business matching, จัดทำ business matching, บริการจัดทำระบบการเจรจาทางธุรกิจ, รับทำระบบเจรจาทางธุรกิจ"
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
                    marginTop: '11.5rem'
                  }}
                >
                  Business Matching <br/>Find. Connect. Prosper.
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
                  Business Matching <br/>Find. Connect. Prosper.
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
                  Online Business Matching ระบบจับคู่เจรจาธรุกิจ ที่สมบรูณ์ที่สุด สร้างโอกาสทางธุรกิจร่วมกัน
                </h1>

                {/*header v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Online Business Matching ระบบจับคู่เจรจาธรุกิจ ที่สมบรูณ์ที่สุด สร้างโอกาสทางธุรกิจร่วมกัน
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {/* v phone */}
                  <p className="fs-18 d-md-none">
                    Business Matching เปรียบเสมือนสะพานเชื่อมธรุกิจ สร้างโอกาสทางและการค้าความร่วมมือ ทางธุรกิจ
                    ประโยชน์ของ Online Business Matching
                    <ul>
                      <li>
                        Efficiency สามารถค้นหาจากระบบฐานข้อมูลรวม เพื่อหาคู่เจรจาที่ใช้ได้ทันที
                        ประหยัดทั้งเวลาและค่าใช้จ่าย
                      </li>
                      <li>Global Reach เนื่องจากเป็นการเจรจาออนไลน์ จึงสามารถเข้าร่วมได้จากทั่วโลก </li>
                      <li>
                        Targeted Connections ผู้เข้าร่วมสามารถกำหนดความต้องทางธรุกิจได้
                        สามารถเลือกคู่เจรจาที่ตรงกับความต้องการจริงๆ{' '}
                      </li>
                      <li>Cost Effective ประหยัด เนื่องจากสามารถเข้าได้จาก Notebook หรือโทรศัพท์ </li>
                      <li>
                        Visibility and Networking คู่เจรจาสามารถแสดงผลิตภัณฑ์หรือผลงานบนระบบ Business Matching
                        เพื่อดึงดูดคู่เจรจาอื่นได้ เป็นการเพิ่มโอกาสทางการค้า
                      </li>
                    </ul>
                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                    Business Matching เปรียบเสมือนสะพานเชื่อมธรุกิจ สร้างโอกาสทางและการค้าความร่วมมือ ทางธุรกิจ
                    ประโยชน์ของ Online Business Matching
                    <ul>
                      <li>
                        Efficiency สามารถค้นหาจากระบบฐานข้อมูลรวม เพื่อหาคู่เจรจาที่ใช้ได้ทันที
                        ประหยัดทั้งเวลาและค่าใช้จ่าย
                      </li>
                      <li>Global Reach เนื่องจากเป็นการเจรจาออนไลน์ จึงสามารถเข้าร่วมได้จากทั่วโลก </li>
                      <li>
                        Targeted Connections ผู้เข้าร่วมสามารถกำหนดความต้องทางธรุกิจได้
                        สามารถเลือกคู่เจรจาที่ตรงกับความต้องการจริงๆ{' '}
                      </li>
                      <li>Cost Effective ประหยัด เนื่องจากสามารถเข้าได้จาก Notebook หรือโทรศัพท์ </li>
                      <li>
                        Visibility and Networking คู่เจรจาสามารถแสดงผลิตภัณฑ์หรือผลงานบนระบบ Business Matching
                        เพื่อดึงดูดคู่เจรจาอื่นได้ เป็นการเพิ่มโอกาสทางการค้า
                      </li>
                    </ul>
                  </p>
                  <p className="fs-18 d-none d-md-block mt-2">
                    ทางเรามีระบบ Business Matching ครบวงจร ตั้งแต่การลงทะเบียน การเก็บข้อมูล การประมวลผลข้อมูล
                    การนัดหมาย ระบบการจองห้องเจรจา รวมทั้งระบบห้องเจรจาธุรกิจ
                  </p>

                  <p className="fs-18 d-none d-md-block mt-2"></p>
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
              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none"></p>

              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
                ทางเรามีระบบ Business Matching ครบวงจร ตั้งแต่การลงทะเบียน การเก็บข้อมูล การประมวลผลข้อมูล การนัดหมาย
                ระบบการจองห้องเจรจา รวมทั้งระบบห้องเจรจาธุรกิจ
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
                <h3 className="fs-22 text-main">ระบบลงทะเบียนออนไลน์</h3>
                <p className="fs-18 mx-3">เพื่อรับสมัครผู้ร่วมงาน 
จัดทำระบบ Login</p>
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
                <h3 className="fs-22 text-main">ฟอร์มข้อมูล</h3>
                <p className="fs-18 mx-3">
                เพื่อให้ผู้ร่วมงานกรอกข้อมูลธุรกิจ ข้อมูลผลิตภัณฑ์และความต้องการทางธรุกิจ
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
                <h3 className="fs-22 text-main">การประมวลผลข้อมูล</h3>
                <p className="fs-18 mx-3"> มีทั้งระบบจับคู่โดย Admin หรือระบบ Recommendation โดยการวิเคราะห์โปรไฟล์คู่เจรจา เพื่อแนะนำคู่เจรจาที่เหมาะสมที่สุด</p>
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
                <h3 className="fs-22 text-main">ระบบเลือกคู่เจรจาด้วยตนเอง</h3>
                <p className="fs-18 mx-3">คู่เจรจาสามารถเลือกคู่เจรจาและกำหนดวันเวลาเองได้</p>
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
                <h3 className="fs-22 text-main">ระบบสื่อสารภายใน</h3>
                <p className="fs-18 mx-3">เมื่อกำหนดคู่เจรจาแล้ว 
ผู้เข้าเจรจาสามารถสื่อสารกับคู่เจรจา เพื่อหาวันนัดหมายกัน, พูดคุยกันผ่าน chat ได้</p>
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
                <h3 className="fs-22 text-main">ระบบจัดการห้องเจรจา</h3>
                <p className="fs-18 mx-3">เพื่อจัดการทรัพยากรต่างๆ เช่น ล่ามหรือห้องเจรจาได้อย่างมีประสิทธิภาพ</p>
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
