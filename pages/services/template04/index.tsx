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
        <title>Mobile Application</title>
        <meta
          name="description"
          content="บริษัท Soft-Bear เรามีประสบการณ์และเพรียบพร้อมสำหรับการให้บริการพัฒนาแอปพลิเคชัน ลงใน platform ต่าง ๆ "
        />
        <meta
          name="keyword"
          content="บริการพัฒนา mobile application, mobile application development, mobile application, โมบายแอปพลิเคชัน, รับทำแอปพลิเคชัน, รับพัฒนาแอปพลิเคชัน, บริการพัฒนา application"
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
                    width: 'auto',
                    padding: '2rem'
                  }}
                >
                  Mobile Application
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
                 Mobile Application
                </h1>

                {/*header v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Mobile Application
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                    {/* v phone */}
                  <p className="fs-18 d-md-none">
                  อุปกรณ์เคลื่อนที่ เช่น สมาร์ทโฟนและแท็บเล็ตได้มีการใช้งานอย่างแพร่หลาย สิ่งที่ตามมาอยางมากมายเช่นกันคือชุดคำสั่งที่จะให้อุปกรณ์ใช้งานอย่างที่ต้องการซึ่งในที่นี้ก็คือ แอปพลิเคชัน


                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                  อุปกรณ์เคลื่อนที่ เช่น สมาร์ทโฟนและแท็บเล็ตได้มีการใช้งานอย่างแพร่หลาย สิ่งที่ตามมาอยางมากมายเช่นกันคือชุดคำสั่งที่จะให้อุปกรณ์ใช้งานอย่างที่ต้องการซึ่งในที่นี้ก็คือ แอปพลิเคชัน


                  </p>
                  <p className="fs-18 d-none d-md-block mt-2">
                  อุปกรณ์เคลื่อนที่ สามารถแบ่งออกเป็นประเภทต่างๆ โดยหลักแล้วจะพัฒนาขึ้นสำหรับระบบปฏิบัติการมือถือเฉพาะ (เช่น iOS หรือ Android) ซึ่งแต่ละระบบปฎิบัติการอาจมีเงื่อนไขหรือข้อจำกัดการใช้งานที่แตกต่างกัน

                  </p>
                
                  <p className="fs-18 d-none d-md-block mt-2">
                  การพัฒนาแอปพลิเคชันโดยดึงความสามารถสูงสุดของตัวอุปกรณ์มาใช้งานได้อย่างมีประสิทธิภาพจึงมีความจำเป็นอย่างยิ่ง
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
              อุปกรณ์เคลื่อนที่ สามารถแบ่งออกเป็นประเภทต่างๆ โดยหลักแล้วจะพัฒนาขึ้นสำหรับระบบปฏิบัติการมือถือเฉพาะ (เช่น iOS หรือ Android) ซึ่งแต่ละระบบปฎิบัติการอาจมีเงื่อนไขหรือข้อจำกัดการใช้งานที่แตกต่างกัน
              </p>

              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
              การพัฒนาแอปพลิเคชันโดยดึงความสามารถสูงสุดของตัวอุปกรณ์มาใช้งานได้อย่างมีประสิทธิภาพจึงมีความจำเป็นอย่างยิ่ง
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
          <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Why Mobile Application?</h2>
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
                <h3 className="fs-22 text-main">Widespread Mobile Usage:</h3>
                <p className="fs-18 mx-3">
                อุปกรณ์มือถือเป็นที่นิยมในวงกว้าง เมื่อพัฒนาเป็นแอปพลิเคชันก็จะสามารถทำให้เข้าถึงผู้คนอย่างแพร่หลาย
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
                <h3 className="fs-22 text-main">Access to Device Features:</h3>
                <p className="fs-18 mx-3">
                การใช้งานแอปบนมือถือทำให้เราสามารถ
ใช้ประโยชน์จากการเข้าถึง คุณสมบัติเฉพาะของอุปกรณ์มือถือ เช่น GPS, กล้อง, ระบบสั่น, หรือการแจ้งเตือนเป็นต้น 
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
                <h3 className="fs-22 text-main">Brand Presence 
and Loyalty</h3>
                <p className="fs-18 mx-3">
                เมื่อมีแอปพลิเคชันในมือถือ ก็ทำให้ผู้ใช้มีความรู้สึกเป็นส่วนหนึ่งกับ brand มากขึ้น โดยเฉพาะบน App ที่ถูกออกแบบให้มีการใช้งานอย่างต่อเนื่อง
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
                <h3 className="fs-22 text-main">Offline Functionality</h3>
                <p className="fs-18 mx-3">
                การใช้งานไม่จำเป็นต้อง online เสมอไป ในกรณีที่ไม่มี internet แอปพลิเคชัน ยังคงสามารถออกแบบให้ใช้งานได้
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
                App Store Visibility:
                </h3>
                <p className="fs-18 mx-3">
                ผู้ใช้งานสามารถค้นหาแอปได้จาก แหล่งการเผยแพร่ เช่น Appstore หรือ Google Play ทำให้แอปที่พัฒนามาแล้วสามารถค้นหาได้โดยง่าย
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
                <h3 className="fs-22 text-main">Enhanced User Experience</h3>
                <p className="fs-18 mx-3">
                แอปพลิเคชันบนมือถือ สามารถมอบประสบการณ์ผู้ใช้ที่ราบรื่นและตอบสนองกว่าเมื่อเปรียบเทียบกับเว็บไซต์บนมือถือ ได้รับการปรับ ให้ใช้งานง่ายและเป็นส่วนตัวมากขึ้น
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
