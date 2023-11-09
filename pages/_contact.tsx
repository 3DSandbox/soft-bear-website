import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import FooterMain from 'components/3DTVTech/FooterMain';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { auto } from '@popperjs/core';
// ..

const Contact: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="wrapper bg-gray">
        {/* <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent navbar-light navbar-bg-light" social /> */}
        <NavbarMain
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
          social
        />
      </header>

      <section
        className="wrapper bg-image mb-1"
        data-aos="zoom-up"
        style={{ backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-contact.jpg")', height: '440px' }}
      >
        <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
          <div className="row mt-5">
            <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
              <h1 className="display-1 mb-0 px-xl-12 text-white">Contact Us</h1>
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

      <div className="container mt-10"  data-aos="zoom-up" data-aos-duration="800" data-aos-delay="100">
        <div className="row justify-content-center">
          {/* ---ภาพ ver มือถือ--- */}
          <img
            className="d-md-none"
            src="/img/photos/3DTVTech/member/member.jpg"
            alt="contacts"
            style={{
              width: '100%',
              borderRadius: 80 / 2
            }}
          ></img>

          {/* ---ภาพ ver pc--- */}
          <img
            className="h-auto d-none d-md-block"  data-aos="zoom-up" data-aos-duration="800" data-aos-delay="100"
            src="/img/photos/3DTVTech/member/member.jpg"
            alt="contacts"
            style={{
              width: '50%',
              borderRadius: 80 / 2
            }}
          ></img>

          {/* <Image 
            src="/img/photos/3DTVTech/member/member.jpg"
            width={660}
            height={472.5}
            alt="contacts"
            style={{
              width: '50%'
              
            }}
          ></Image> */}
        </div>

        <div className="p-5 container">
          <h2 className="display-3 text-main ">About us</h2>
          <p className="mt-5 fs-18 " >
            เราคือบริษัทผู้พัฒนาสื่อออนไลน์ทุกประเภท ด้วยประสบการณ์อันยาวนานด้านการพัฒนาระบบ hardware
            เราได้พัฒนามาสู่การให้บริการระบบ software ครบวงจรและเพื่อให้ตอบรับกับสภาพสังคม
            ความต้องการของลูกค้าและเทคโนโลยีที่เปลี่ยนแปลงตลอดเวลา เราเสนอการบริการด้านระบบ Online
            ทุกประเภทที่ครอบคลุมที่สุด เพื่อการพัฒนาธุรกิจทุกขนาดไม่ว่าจะเป็นขนาดเล็ก ขนาดกลางไปจนถึงระดับองค์กร
          </p>
        </div>

        <div className="row  p-5 ">
          <div className="container"></div>
          <div className="col-md-7">
            <div className="content" >
              <h2
                className=""
                style={{
                  color: '#3c86d6'
                }}
              >
                Company Address
              </h2>
              <b className="">3DTV-Tech Company Limited</b>
              <div className=""  >
                <p>
                  47/1 Soi Thepthawee 2 (Srinakarin 11)
                  <br></br>Srinakarin Road, Suan Luang Subdistrict<br></br> Suan Luang District, Bangkok 10250
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="content"  >
              <h2
                className=""
                style={{
                  color: '#3c86d6'
                }}
              >
                Scan Line
              </h2>
              <div className="text-center">
                <Image
                  src="/img/photos/3DTVTech/contact-line.jpg"
                  className="shadow" 
                  draggable="false"
                  width={200}
                  height={200}
                  alt="line qr"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="content">
              <h2
                className=""
                style={{
                  color: '#3c86d6'
                }}
              >
                Our working hours
              </h2>
              <div className=""  >
                Monday - Friday : 10:00 AM - 20:00 PM
                <br></br>Call : (+66) 3 759 8799
                <p>Email : info@3dtv-tech.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="content"></div>
          </div>
        </div>

        {/* <div
          className="container py-2 mb-6 bg-gray rounded"
          data-aos="flip-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="col-5 mt-2">
            <h2
              className=""
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
              style={{
                color: '#3c86d6'
              }}
            >
              Company Address
            </h2>
            <div className="" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <b>3DTV-Tech Company Limited</b>
              <p>
                47/1 Soi Thepthawee 2 (Srinakarin 11)
                <br></br>Srinakarin Road, Suan Luang Subdistrict<br></br> Suan Luang District, Bangkok 10250
              </p>
            </div>

            <div className="content mt-n2" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
              <h2
                className=""
                style={{
                  color: '#3c86d6'
                }}
              >
                Our working hours
              </h2>
              <div className="" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                Monday - Friday : 10:00 AM - 20:00 PM
                <br></br>Call : (+66) 3 759 8799
                <p>Email : info@3dtv-tech.com</p>
              </div>
            </div>
          </div> 
        </div> */}
      </div>
      <FooterMain />
    </Fragment>
  );
};

export default Contact;

//  {/* ========== main content ========== */}
//  <main className="content-wrapper">
//  {/* ========== hero sections ========== */}
//  <BannerMain />
//  <section className="wrapper bg-light angled  ">
//    <div className="container py-8 py-md-5">
//      {/* ========== what we do section ========== */}
//      <CategoryHome />

//    </div>
//    <div
//      className="py-2"
//      style={{
//        backgroundColor: '#69c0ff38'
//      }}
//    >
//      <ServiceHome />

//      {/* ========== latest projects carousel section ========== */}
//    </div>
//    <Blognewshome/>

//  </section>
// </main>
// {/* ========== footer section ========== */}
// <FooterMain />

// </Fragment>
// );
// };

// export default DemoJ;
