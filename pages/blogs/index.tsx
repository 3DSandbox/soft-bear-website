import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import FooterMain from 'components/3DTVTech/FooterMain';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BANNER10 } from 'assets';
import Blogmain from 'components/3DTVTech/Blogs/blog-main';
import Head from 'next/head';



// ..

const Page: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="เว็บไซต์ 3DTV-Tech ของเรานอกจากจะมีบริการที่มากมาย เรายังมีบทความวงการไอทีหรือข่าวไอที มาพร้อมสาระน่ารู้  ที่รวบรวมจากทั่วทุกมุมโลก พร้อมคัดสรรมาให้ทุกท่านได้อ่านเป็นอย่างดี"
        />
        <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, ข่าวเทคโนโลยี, บทความไอที, บทความเทคโนโลยี, ข่าวเทคโนโลยี, ข่าววงการไอที" />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        {/* <NavbarMain navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light" social /> */}
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"></NavbarMain>
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper bg-gray">
        {/* <section
          className="wrapper bg-image"
          style={{
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-blogs.png" )'
          }}
        >
          <div className="container py-12 py-md-20 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1
                  className="display-2 text-white"
                  style={{
                    width: 'auto',
                    height: 20
                  }}
                >
                  Blogs
                </h1>
              </div>
            </div>
          </div>
        </section> */}

        <section
          className="wrapper bg-image"
          data-aos="zoom-up"
          style={{ backgroundImage: `url(${BANNER10.src})`, height: '440px' }}
        >
          <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
            <div className="row mt-5">
              <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
                <h2
                  className="display-1 mt-0 mb-0 px-xl-12 text-white"
                  data-aos="fade-zoom-in"
                  data-aos-duration="1500"
                >
                  Blogs
                </h2>
                <p
                  className="lead mt-5 fs-22 text-white"
                  data-aos="fade-zoom-in"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                >
                  เรามีบทความสาระน่ารู้ และข่าวสารที่คอยอัตเดทตามสถานการณ์<br/>ปัจจุบันอยู่เสมอ
                  เพื่อให้ทุกท่านได้ทันกับสถานการณ์ในปัจุบัน
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <h1 className="fs-28 mt-10 text-main">บทความ และ ข่าวสาร</h1>
            <p className="fs-18 mt-5">
              เว็บไซต์ 3DTV-Tech ของเราได้รวบรวมบทความสาระน่ารู้ รวมถึงข่าวสารจากในวงการ IT
              คอยอัพเดทตามสถานการณ์ปัจจุบันอยู่ตลอดเวลา เพื่อมอบข้อมูลอันเป็นสาระและประโยชน์ให้แก่ผู้อ่านทุกท่าน
            </p>
          </div>

          {/* <div className="container my-5">
            <h3 className="display-5 text-main">
              Blogs
              </h3>
            เรามีบทความใหม่ ๆ ที่คอยอัปเดตอยู่ตลอดเวลา พร้อมที่จะมอบความรู้และสาระให้แก่ทุกท่าน
          </div> */}
        </section>

        <section className="wrapper bg-gray">
          <div className="container pt-5 pb-14 pb-md-16">
            {/* ========== hero section ========== */}
            {/* <Hero25 /> */}

            {/* ========== about me section ========== */}
            {/* <About26 /> */}

            {/* ========== blog conent and sidebar section ========== */}
            <Blogmain />


            

            {/* <Pagination /> */}
            
            {/* <div style={{ border: 'var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;' }}>
              <p className='mt-0'>
                hello
              </p>
              <p>hello</p>
              <p className="text-primary">hello</p>
            </div> */}
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Page;
