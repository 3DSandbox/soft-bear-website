import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';

import FooterMain from 'components/3DTVTech/FooterMain';
import ServicesFooter from 'components/3DTVTech/Services/services-foot';

import ServicesHero from 'components/3DTVTech/Services/services-hero';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Head from 'next/head';
import ServicesMain from '../services-main';
// ..

const Page: NextPage = () => {
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
    
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        {/* <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light" social /> */}
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper" data-aos="zoom-up">
        {/* ========== hero section ========== */}
        <ServicesHero />

        <section className="wrapper" >
          <div className="container">
            <h1 className="fs-28 mt-10 text-main">SoftBear "Quality Software, Endless Possibilities"</h1>
            <p className="fs-18 mt-5">
            xxxxxxxxx
            </p>
            {/* ========== projects section ========== */}
            <ServicesMain />
          </div>
        </section>
      </main>


      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Page;
