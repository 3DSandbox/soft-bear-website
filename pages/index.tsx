import { Fragment, useEffect } from 'react';
// -------- custom component -------- //

import { BannerMain } from 'components/blocks/hero';
import PageProgress from 'components/common/PageProgress';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';
import { NextPage } from 'next/types';

import Link from 'next/link';
import Image from 'next/image';
import { BLOGMOCK, INTERACTIVE } from 'assets';
import { Icon } from '@iconify/react';
import NextLink from 'components/reuseable/links/NextLink';
import FigureImage from 'components/reuseable/FigureImage';
import NavbarMain from 'components/Soft-Bear/NavbarMain';
import TechnologyConsulting from 'components/Soft-Bear/Home/Category/TechnologyConsulting';
import CaseStudy from 'components/Soft-Bear/Home/Service/CaseStudy';
import BlogHome from 'components/Soft-Bear/Home/Blog/BlogHome';
import FooterMain from 'components/Soft-Bear/FooterMain';


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
      <header className="wrapper ">
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav  position-absolute bg-white "></NavbarMain>
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
         <BlogHome/>
        </section>
      </main>
      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Home;
