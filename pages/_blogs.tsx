import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import { Hero25 } from 'components/blocks/hero';
import { About26 } from 'components/blocks/about';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import Blogmain from '../src/components/3DTVTech/Blogs/blog-main';
import FooterMain from 'components/3DTVTech/FooterMain';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Blog: NextPage = () => {
  
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Fragment>
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

<section className="wrapper bg-image" data-aos="zoom-up"
    style={{backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-blogs.png")',
    height: "440px"}}
    >
      <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
        <div className="row mt-5">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">

            <h1 className="display-1 mt-0 mb-0 px-xl-12 text-white" data-aos="fade-zoom-in"  data-aos-duration="1500">
              Blogs
            </h1>
            <p className="lead fs-22 text-white" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
            เรามีบทความสาระน่ารู้ และข่าวสารที่คอยอัตเดทตามสถานการณ์<br></br>ปัจจุบันอยู่เสมอ เพื่อให้ทุกท่านได้ทันกับสถานการณ์ในปัจุบัน
            </p>
          </div>
        </div>
      </div>
    </section>

        <section className="content">
          <div className="container my-5">
            <h2 className="display-5 text-main">
              Blogs
              </h2>
            เรามีบทความใหม่ ๆ ที่คอยอัปเดตอยู่ตลอดเวลา พร้อมที่จะมอบความรู้และสาระให้แก่ทุกท่าน
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container pt-5 pb-14 pb-md-16">
            {/* ========== hero section ========== */}
            {/* <Hero25 /> */}

            {/* ========== about me section ========== */}
            {/* <About26 /> */}

            {/* ========== blog conent and sidebar section ========== */}
            <Blogmain/>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterMain/>
    </Fragment>
  );
};

export default Blog;
