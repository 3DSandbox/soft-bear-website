import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import NavbarMain from 'components/3DTVTech/NavbarMain';
import { BannerMain } from 'components/blocks/hero';
import PageProgress from 'components/common/PageProgress';

import FooterMain from 'components/3DTVTech/FooterMain';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import WhoweareComp from 'components/3DTVTech/Home/Whoyouare/whoyouare';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';
import { NextPage } from 'next/types';
import TechnologyConsulting from 'components/3DTVTech/Home/Category/TechnologyConsulting';
import CaseStudy from 'components/3DTVTech/Home/Service/CaseStudy';
import Link from 'next/link';
import Image from 'next/image';
import { BLOGMOCK, INTERACTIVE } from 'assets';
import { Icon } from '@iconify/react';
import NextLink from 'components/reuseable/links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';

// ..

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>3DTV-Tech</title>
        <meta
          name="description"
          content="เราคือบริษัทผู้พัฒนาสื่อสมัยใหม่ (New Media) ในรูปแบบต่าง ๆ ไม่ว่าจะเป็น เว็บไซต์ สื่อ Interactive และ Video รวมถึง E-learning รวมถึงพัฒนา Software และ Hardware นอกจากนี้บริษัทของเรายังมีบริการอื่น ๆ อีกมากมาย  เพื่อเป็น Solution ให้กับธุรกิจแบรนด์ของคุณ"
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนานาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, Motion graphics, Event Service, Virtual Experience"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics gaMeasurementId={process?.env?.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-light "></NavbarMain>
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper" data-aos="zoom-up">
        {/* ========== hero sections ========== */}
        <BannerMain />
        <section className="wrapper bg-light angled  ">
          <div className="container">
            {/* ========== what we do section ========== */}
            <TechnologyConsulting />
          </div>
          <div
            className="content py-2"
            style={{
              backgroundColor: '#F3F3F4'
            }}
          >
            <CaseStudy />

            {/* ========== latest projects carousel section ========== */}
          </div>

          {/* <Blognewshome /> */}
          <div className="container">
            <h2 className="text-center text-main mt-7 display-6">Blogs</h2>

            <div className="cotainer">
              <div className="row mt-5 pb-10 d-flex justify-content-center align-items-center">
                {/* blog 01 */}
                <div className="item post col-md-4">
                  <div className="card">
                    <figure className="card-img-top  overlay overlay-1 hover-scale">
                      <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line ">TECHNOLOGY</div>
                        <p className="post-title fs-18 mt-1 mb-3 ">
                          "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* blog 02 */}
                <div className="item post col-md-4">
                  <div className="card">
                    <figure className="card-img-top  overlay overlay-1 hover-scale">
                      <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line ">TECHNOLOGY</div>
                        <p className="post-title fs-18 mt-1 mb-3 ">
                          "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* blog 03 */}
                <div className="item post col-md-4">
                  <div className="card">
                    <figure className="card-img-top  overlay overlay-1 hover-scale">
                      <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line ">TECHNOLOGY</div>
                        <p className="post-title fs-18 mt-1 mb-3 ">
                          "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Home;
