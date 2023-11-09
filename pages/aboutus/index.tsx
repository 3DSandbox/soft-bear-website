import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import FooterMain from 'components/3DTVTech/FooterMain';

import { Icon } from '@iconify/react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { auto } from '@popperjs/core';
import {
  BANNER12,
  BANNER22,
  CONTACT,
  // CONTACTPIC,
  CREATIVECODING,
  DIGITALARTANDMEDIA,
  EDUCATIONALTECHNOLOGY,
  EMAIL,
  FACEBOOK,
  FILMANDANIMATION,
  GAMEDEVELOPMENT,
  IG,
  INNOVATIVEADVERTISINGANDMARKETING,
  INTERACTIVEINSTALLATIONS,
  LINEID,
  MEMBERV1,
  MEMBERV2,
  QRLINE,
  TIKTOK,
  WHEREWEARE,
  WORKTIME,
  YOUTUBE
} from 'assets';
import Head from 'next/head';
import WhoweareComp from 'components/3DTVTech/Home/Whoyouare/whoyouare';
import Link from 'next/link';
// ..

const Page: NextPage = () => {
  const links = [
    { id: 1, icon: 'uil:facebook', name: 'Facebook', color: 'white', url: 'https://www.facebook.com/3DTVTech' },
    { id: 2, icon: 'uil:instagram', name: 'Instagram', color: 'white', url: 'https://www.instagram.com/3dtvtech/' },
    { id: 3, icon: 'iconoir:tiktok', name: 'Tiktok', color: 'white', url: 'https://www.tiktok.com/@3dtvtech' },
    { id: 4, icon: 'uil:youtube', name: 'Youtube', color: 'white', url: 'https://www.youtube.com/@3DTVTech' }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="บริษัท 3DTV-Tech พร้อมให้บริการ ผลิตสื่อ New Media ผ่าน Platform ต่าง ๆ สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ผ่านช่องทางและรายละเอียดตามนี้ ติดต่อโทร: 083-759-8799 หรือ Email: info@3dtv-tech.com LineID: ajima-puk" 
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="wrapper bg-gray">
        {/* <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent navbar-light navbar-bg-light" social /> */}
        <NavbarMain
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
          social
        />
      </header>

      <section className="wrapper bg-image mb-1" data-aos="zoom-up" style={{ backgroundImage: `url(${BANNER22.src})` }}>
        <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
          <div className="row mt-5">
            <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
              <h3 className="display-1 mb-0 px-xl-12 text-white">About Us</h3>
              <p
                className="lead fs-22 text-white"
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
                data-aos-delay="200"
              ></p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-10" data-aos="zoom-up" data-aos-duration="800" data-aos-delay="100">
        <WhoweareComp />
        <div className="container">
        
            <h2 className="fs-28 mt-5 text-center text-main ">
              3DTV-Tech <br></br>“Creative Thinking and Technological Expertise”
            </h2>
         
        </div>
        <div className="row mt-5  gy-6 justify-content-center">
          <div className="col-xl-3 col-sm-6  text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={DIGITALARTANDMEDIA.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Digital Art and Media</h3>
            {/* <div className=""></div> */}
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                // textAlign: 'center',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3 ">
              เราคือผู้สร้างสรรค์งานดิจิทัล แอนิเมชัน และสื่อ Interactive ในทุกรูปแบบ ทุกแพลตฟอร์ม
            </p>
          </div>

          <div className="col-xl-3 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={CREATIVECODING.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Creative Coding</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                // textAlign: 'center',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">ทีมโปรแกรมเมอร์ที่สามารถสร้างสรรค์การเขียนโค้ดได้อย่างไม่จำกัดเทคนิคนิค</p>
          </div>

          <div className="col-xl-3 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={GAMEDEVELOPMENT.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Game Development</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">พัฒนาและออกแบบเกมให้มีปฏิสัมพันธ์และดึงดูดผู้เล่นให้ได้มากที่สุด</p>
          </div>

          <div className="col-xl-3 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={FILMANDANIMATION.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Film and Animation</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">
              เราทำตั้งแต่ภาพที่สร้างด้วยคอมพิวเตอร์ (CGI) ไปจนถึงเทคนิค ขั้นตอนหลังการถ่ายทำขั้นสูง
              ไม่ว่าจะเป็นการออกแบบตัวละคร ไปจนถึงเอฟเฟ็กต์ภาพ
            </p>
          </div>

{/* col-xl-defual-3 */}
          <div className="col-xl-4 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={INNOVATIVEADVERTISINGANDMARKETING.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Innovative Advertising and Marketing</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">
              เราพร้อมพัฒนาและสรรหาเทคโนโลยีใหม่ให้กับลูกค้าในการสร้างคอนเท้นต์ทางการตลาดที่มีความโดดเด่น
              และดึงดูดมากที่สุด
            </p>
          </div>

{/* col-xl-defual-3 */}
          <div className="col-xl-4 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={INTERACTIVEINSTALLATIONS.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Interactive Installations</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">
              การติดตั้ง Interactive ที่ร่วมกับเซ็นเซอร์ซอฟแวร์ และฮาร์ดแวร์ เพื่อดึงดูผู้ชมด้วยวิธีที่สร้างสรรค์
              และไม่เหมือนใคร
            </p>
          </div>

{/* col-xl-defual-3 */}
          <div className="col-xl-4 col-sm-6 text-center"  data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="600">
            <Image
              src={EDUCATIONALTECHNOLOGY.src}
              width={100}
              height={100}
              alt="iconpic"
              draggable="false"
              className=""
              style={{
                height: 'auto'
              }}
            ></Image>
            <h3 className="fs-22 py-2 text-main">Educational Technology</h3>
            <hr
              className="p-0 my-2 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
            <p className="fs-18 py-2 mx-3">
              เราพัฒนาสื่อและแพลตฟอร์มการศึกษาที่เป็นนวัตกรรมใหม่ที่จะช่วยยกระดับประสบการณ์การเรียนรู้ ให้ล้ำสมัย
              และเข้าถึงได้ง่าย
            </p>
          </div>
          <hr
            className="mt-5 mb-0"
            style={{
              // borderColor: 'lime',
              height: '0px',
              width: ''
            }}
          ></hr>
        </div>

        <div>
          <h2
            className="fs-28 mt-10 text-main text-uppercase mb-0 "
            style={{
              fontWeight: 'bold'
            }}
          >
            OUR TEAM /
          </h2>
          <h2
            className="fs-28 text-main text-uppercase"
            style={{
              color: '#C3C3C3'
            }}
          >
            WE ARE THE BEST
          </h2>
          <div className="row m-5 mb-5 justify-content-center">
            {/* ---ภาพ ver มือถือ--- */}
            <Image
              width={620}
              height={465}
              className="h-100 d-md-none p-0 "
              // src="/img/photos/3DTVTech/member/member.jpg"
              src={MEMBERV2.src}
              alt="teammember"
              style={{
                width: '100%',
                borderRadius: '12px'
              }}
            ></Image>

            {/* ---ภาพ ver pc--- */}
            <Image
              width={620}
              height={465}
              className="h-auto mb-5 d-none d-md-block p-0"
              data-aos="zoom-up"
              data-aos-duration="800"
              data-aos-delay="100"
              // src="/img/photos/3DTVTech/member/member.jpg"
              src={MEMBERV2.src}
              alt="contacts"
              style={{
                width: '50%',
                borderRadius: '12px '
              }}
            ></Image>
          </div>
        </div>
      </div>

      <section className="wrapper bg-image mb-1" style={{ backgroundImage: `url(${BANNER12.src})` }}>
        <div className="container pt-16 pt-md-13 pb-12 pb-md-12 pb-lg-10">
          <div className="row">
            <h2
              className="fs-28 mb-0 px-xl-12 text-white text-center"
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-delay="200"
              style={{}}
            >
              การพัฒนาด้านเทคโนโลยีไปพร้อมกับความคิดสร้างสรรค์<br></br>{' '}
              คือกุญแจสำคัญเพื่อปลดล็อกศักยภาพที่ดีที่สุดของพวกเรา
            </h2>
            <p
              className="mt-7 fs-28 text-white text-center"
              data-aos="fade-zoom-in"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              - 3DTV TECH -
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <h2
          className="fs-28 mt-4 text-main text-uppercase mb-0"
          style={{
            fontWeight: 'bold'
          }}
        >
          CONTACT /
        </h2>

        <h2
          className="fs-28 text-main"
          style={{
            color: '#C3C3C3'
          }}
        >
          GET IN TOUCH WITH US
        </h2>
      </div>

      <div className="container " data-aos="fade-in" data-aos-duration="1200" data-aos-easing="ease">
        <div className="row  justify-content-center">
          {/* where we are */}
          <div className="col-xl-4 col-sm-5 mb-md-10 mb-5 ">
            <div className="row">
              <div className="col-2">
                <Image
                  src={WHEREWEARE.src}
                  width={40}
                  height={40}
                  alt="icon_where_we_are"
                  className="w-7 h-auto"
                ></Image>
              </div>
              <div className="fs-17 col-10">
                <p
                  className="text-main mb-0"
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  Where we are:
                </p>
                บริษัท สามดีทีวีเทค จำกัด 47/1 ซ.เทพทวี 2 (ศรีนครินทร์ 11) ถ.ศรีนครินทร์ แขวงสวนหลวง เขตสวนหลวง กทม.
                10250
              </div>
            </div>
          </div>

          {/* contact */}
          <div className=" col-xl-4 col-sm-5 mb-md-10 mb-5">
            <div className="row">
              <div className="col-2">
                <Image src={CONTACT.src} width={40} height={40} alt="icon_where_we_are" className="w-7 h-auto"></Image>
              </div>
              <div className="col-10">
                <p
                  className="fs-17 text-main mb-0"
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  Contact:
                </p>
                Tel: 083-759-8799
              </div>
            </div>
          </div>

          {/* email */}
          <div className="col-xl-4 col-sm-5 mb-md-10 mb-5">
            <div className="row">
              <div className="col-2">
                <Image src={EMAIL.src} width={40} height={40} alt="icon_where_we_are" className="w-7 h-auto"></Image>
              </div>
              <div className="col-10">
                <p
                  className="text-main mb-0 fs-17 "
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  General Email:
                </p>
                info@3dtv-tech.com
              </div>
            </div>
          </div>

          {/* work time */}
          <div className="col-xl-4 col-sm-5 mb-md-10 mb-5">
            <div className="row">
              <div className="col-2">
                <Image src={WORKTIME.src} width={40} height={40} alt="icon_where_we_are" className="w-7 h-auto"></Image>
              </div>
              <div className="col-10">
                <p
                  className="text-main mb-0 fs-17 "
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  Work Time:
                </p>
                Mon. - Fri. 09:30 - 18:30
              </div>
            </div>
          </div>

          {/* line id */}
          <div className="col-xl-4 col-sm-5 mb-md-10 mb-5">
            <div className="row">
              <div className="col-2">
                <Image src={LINEID.src} width={40} height={40} alt="icon_where_we_are" className="w-7 h-auto"></Image>
              </div>
              <div className="col-10">
                <p
                  className="text-main mb-0 fs-17 "
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  {' '}
                  LineID:
                </p>
                <Link
                  href="https://line.me/ti/p/~ajima-puk"
                  className="fs-18"
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                  }}
                >
                  ajima-puk{' '}
                </Link>
                <div className="col-6 mt-2">
                  <Image src={QRLINE.src} width={200} height={200} alt="QRLine" className="w-75 h-auto"></Image>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>

      <div className="container ">
        <h2
          className="fs-28 mt-4 text-main text-uppercase mb-0"
          style={{
            fontWeight: 'bold'
          }}
        >
          OUR SOCIAL MEDIA
        </h2>

        <div className="row py-5 g-2" data-aos="zoom-up" data-aos-duration="800">
          {/* facebook */}
          {links.map((item, index) => (
            <div className="col-6 col-sm-3" key={index}>
              <Link href={item.url}>
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-3">
                    <div className="d-flex justify-content-center  w-100">
                      <Icon
                        icon={item.icon}
                        width={55}
                        height={55}
                        style={{
                          // width: "100%",
                          // height: "auto",
                          color: '#3175D1'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-4  d-flex align-items-center justify-content-center">
                    <p
                      className="text-main mb-0 text-center fs-19 "
                      style={{
                        fontWeight: 'bold'
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* <div
            className="p-0 d-flex justify-content-center"
            style={{
              height: '20vh',
              backgroundColor: 'red'
            }}
          >
            <div
              className=""
              style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'yellow'
              }}
            ></div>
          </div> */}
        </div>
      </div>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
