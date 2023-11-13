import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  AITRAININGMOCK01,
  AITRAININGMOCK02,
  IC_ATTRACTIVE,
  IC_INTERACTIVEHARDWARE,
  IC_REACHTHETARGETHARDWARE,
  IMG_HARDWARE,
  SOFTBEARBANNER01,
  VIRTUALEXPERIENCE
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
                  AI Training
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
                  AI Training
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
                  AI training Machine Learning Deep Learning training
                </h1>

                {/*header v pc */}
                <h1
                  className="display-3 d-none d-md-block text-main"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  AI training Machine Learning Deep Learning training
                </h1>

                <div
                  className="content mt-md-7 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <p className="fs-18 d-md-none">
                    ระบบของอุปกรณ์ที่สามารถเชื่อมต่อกับอินเทอร์เน็ต
                    สามารถรับส่งข้อมูลและประมวลผลข้อมูลเพื่อใช้ในการควบคุมหรือจัดการต่าง ๆ
                    ได้อัตโนมัติโดยไม่ต้องมีผู้ใช้เข้ามาเกี่ยวข้องโดยตรงทุกครั้ง
                  </p>

                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2">
                    การใช้งาน AI ในธุรกิจ หรือหน่วยงานต่างๆ สามารถเป็นไปอย่างเฉพาะทางจึงต้องมีการ ฝึก AI
                    ให้ตรงกับความต้องการเฉพาะแต่ละอย่าง การฝึก AI จึงเป็นขั้นตอนหนึ่งที่ต้องการผู้มีความรู้ความเข้าใจ
                    เพื่อให้การฝึกนี้เป็นไปอย่างมีประมิทธิภาพ มีความถูกต้องแม่นยำสูง โดยการฝึกจะทำได้โดยให้ AI
                    รู้จักกับข้อมูลจำนวนมากที่มีความสำคัญกับการตัดสินใจ ความสัมพันธ์ในรูปแบบต่างๆ ที่ครอบคลุม เมื่อ AI
                    ได้เจอโจทย์ใหม่ก็จะยังคงมีความสามารถในการตัดสินใจได้อย่างถูกต้อง
                  </p>
                  <p className="fs-18 d-none d-md-block mt-2">
                    {/* นำไปใช้ในการควบคุมและตรวจสอบสถานะของอุปกรณ์หรือสิ่งของต่าง ๆ ได้อย่างมีประสิทธิภาพ
                    ซึ่งสามารถใช้ได้กับอุปกรณ์ทั่วไป ตั้งแต่อุปกรณ์ใช้งานในบ้าน สำนักงาน โรงงาน ไปจนถึงระบบสารธารณะต่างๆ */}
                  </p>

                  <p className="fs-18 d-none d-md-block mt-2">
                    {/* นอกจากนี้ เรายังสามารถเก็บข้อมูลจากอุปกรณ์เหล่านี้เพื่อนำข้อมูลเหล่านั้น เพื่อนำมาวิเคราะต่อยอด เช่น
                    การวิเคราะห์ข้อมูล(Data Analysis) การประเมินการซ่อมบำรุง
                    การปรับปรุงระบบเพื่อให้มีประสิทธิภาพมากยิ่งขึ้น */}
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
              {/* <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
                           
                            </p> */}
            </div>
            <hr className="my-5"></hr>
          </div>
        </section>

        {/* features section แบบ id*/}
        {/* <section>
          <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <ServiceDetailFeatures />
          </div>
        </section> */}

        <section>
          <div className="container p-7">
            <div className="row">
              <div className="col-6">
                <h2 className=" text-main">บริการของเรา</h2>
                <p className='mt-5 fs-18'>
                  รับเทรน AI ตามความต้องการของลูกค้า โดยสามารถพัฒนาร่วมไปกับระบบอื่นที่ต้องการ
                  สามารถออกไปร่วมกับระบบเพื่อการใช้งานต่อ เช่น มีcommand เพิ่มเติมเพื่อสั่งงานจนจบ process
                  ทั้งหมดที่ลูกค้าต้องการ มี Dashboard สรุปผล และรายงานสถิติที่ต้องการ{' '}
                </p>
              </div>
         
              <div className="col-6">
              <button type="button" className="btn" style={{
                backgroundColor: '#FF8812',
                color: 'white'
              }}>ติดต่อเรา
              </button>
                
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Industries</h2>
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
                <h3 className="fs-22 text-main">AI Vision Training</h3>
                <p className="fs-18 mx-3">
                  การฝึก AI ในการเข้าใจ รู้จัก ระบุคุณสมบัติ จากข้อมูลภาพนิ่งหรือภาพเคลื่อนไหว การนำไปประยุกต์ใช้เช่น
                  การจำแนกบุคคล, เพศ, อายุ และใบหน้า เป็นต้น
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
                <h3 className="fs-22 text-main">Natural Language Processing (NLP) Training:</h3>
                <p className="fs-18 mx-3">
                  การฝึก AI ในรูปแบบของภาษามนุษย์ที่ใช้ การโต้ตอบในลักษณะ Chatbot การแปลภาษาต่างๆ เป้นต้น
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
                <h3 className="fs-22 text-main">Speech and Audio Training:</h3>
                <p className="fs-18 mx-3">
                  การฝึก AI ในการวิเคราะห์และสร้าง ในรูปแบบของข้อมูลเสียง การนำไปใช้เช่น การจดจำเสียง การสังเคราะห์เสียง
                  ไปจนถึงระบบช่วยสั่งงานด้วยเสียงเป็นต้น
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
                <h3 className="fs-22 text-main">Recommendation Systems Training:</h3>
                <p className="fs-18 mx-3">
                  การฝึก AI เพื่อการโต้ตอบและแนะนำผลิตภัณ์ เช่น การแนะนำสินค้าบน social plateform
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
                <h3 className="fs-22 text-main">Healthcare AI Training:</h3>
                <p className="fs-18 mx-3">
                  การฝึก AI ในทางสารธารณะสุข การแพทย์ สามารถวิเคราะห์ข้อมูลคนไข้ โดยเริ่มที่ข้อมูลทั่วไป นำมาวินิจฉัยโรค
                  หรือความผิดปกติเบื้องต้น บันทึกข้อมูลสุขภาพบน cloud โดยสามารถดึงข้อมูลมาใช้ได้ทันที
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
                <h3 className="fs-22 text-main">อื่นๆ</h3>
                <p className="fs-18 mx-3">การฝึก AI เพื่อประยุกต์ใช้ในรูปแบบต่างๆ ความต้องการของผู้ใช้</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-5">
            <h2 className="text-main text-center">ตัวอย่างการใช้งาน AI Training</h2>
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div className="col-3">
                    <figure className="rounded">
                      <Image
                        src={AITRAININGMOCK01}
                        width={50}
                        height={50}
                        alt="Virtual Experience"
                        className=""
                        style={{
                          width: '100',
                          height: '100'
                        }}
                      />
                      <figcaption className="fs-18 my-2 text-center">การแยกแยะ เพศ เสื้อผ้า เครื่องแต่งกาย</figcaption>
                    </figure>
                  </div>
                </div>
                <div className="mt-5 col-12 d-flex justify-content-center ">
                  <div className="col-3">
                    <figure className="rounded">
                      <Image
                        src={AITRAININGMOCK02}
                        width={50}
                        height={50}
                        alt="Virtual Experience"
                        className=""
                        style={{
                          width: '100',
                          height: '100'
                        }}
                      />
                      <figcaption className="fs-18 my-2 text-center">การแยกแยะอารมณ์ หน้าตา</figcaption>
                    </figure>
                  </div>
                </div>
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
