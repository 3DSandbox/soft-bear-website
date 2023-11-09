
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import { CategoryHome, ServiceHome } from 'components/3DTVTech';
import Blognewshome from 'components/3DTVTech/Home/BlogNews/BlogNewsHome';
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
import TechnologyConsulting from 'components/3DTVTech/Home/Category/CategoryHome';

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
              backgroundColor: '#69c0ff38'
            }}
          >
            <ServiceHome />

            {/* ========== latest projects carousel section ========== */}
          </div>

          <div className="">
            {/* <Blognewshome /> */}
          </div>
        </section>
      </main>
      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Home;
