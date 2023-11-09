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
        {/* !!!open graph ไม่ยอมอ่าน อ่านแต่ของหน้า _app.tsx */}
        {/* <meta property="og:url" content="https://3dtv-tech.com/"></meta>
        <meta property="og:title" content="3DTV-Test"></meta>
        <meta property="og:description" content="Test"></meta>
        <meta property="og:image" content="https://3dtv-tech.com/public/og/cover.jpg"></meta> */}
      </Head>
      {/* <Head>
        <title>Services</title>
        <meta
          name="description"
          content="3DTV-Tech เราคือผู้ที่พร้อมสำหรับการให้บริการ Service ต่าง ๆ สำหรับสื่อ New Media ทุกประเภท แต่ละบริการถูกออกแบบให้สอดคล้อง กับความต้องการที่เปลี่ยนแปลงอย่างรวดเร็วอยู่ตลอดเวลา เราพร้อมค้นหา Solution ตอบโจทย์กับธุรกิจของคุณอย่างมีประสิทธิภาพ"
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, Software Development, Hardware Development, บริการพัฒนาสื่อ New Media, พัฒนาสื่อ Interactive, บริการอีเว้นท์ , บริการ Event Service, รับพัฒนาซอฟต์แวร์, รับพัฒนาฮาร์ดแวร์, CRM, LMS, บริการติดตั้งโรงหนัง 3 มิติ ,ติดตั้ง Cinema 3D, ติดตั้ง Cinema 4D, บริการติดตั้งโรงหนัง 2 มิติ, รับพัฒนา LMS, รับทำสื่อ Info Graphics, รับทำสื่อ Motion Graphics, รับทำวิดีโอ, รับทำสื่อวิดีโอการเรียนการสอน, รับทำสื่อการเรียนการสอน, รับพัฒนาฮาร์ดแวร์, รับพัฒนาซอฟต์แวร์, บริการพัฒนา Software, บริการพัฒนา Hardware, บริการรับทำ Projection Mapping, รับทำสื่อ AR, รับทำสื่อ VR, รับทำสื่อ MR, รับทำสื่อ XR, รับทำเกมงานอีเว้นท์, รับทำ Microsite, บริการพัฒนาเกม, Game Development, บริการติดตั้ง Hardware, บริการติดตั้งฮาร์ดแวร์, บริการ Setup Hardware"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
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
            <h1 className="fs-28 mt-10 text-main">3DTV-Tech “Creative Thinking and Technological Expertise”</h1>
            <p className="fs-18 mt-5">
              เราคือทีมพัฒนาเทคโนโลยีสมัยใหม่ ด้วยความก้าวหน้าด้านเทคโนโลยี รวมไปถึงการเปลี่ยนแปลงของผู้บริโภค
              และการเปิดตัวแพลตฟอร์มใหม่ อย่างต่อเนื่อง เราจึงต้องพร้อมและพัฒนาเทคโนยีเพื่อเพิ่มความสามารถ
              และความโดดเด่นในการแข่งขันในทุกแพลตฟอร์มให้กับลูกค้าอยู่เสมอ
            </p>
            <p className="fs-18">
              ด้วยประสบการณ์การพัฒนามีเดียมาอย่างยาวนานและเข้าใจถึงความท้า ทายของการแข่งขันในปัจจุบัน
              เราพร้อมจะก้าวไปข้างหน้าสร้างประสบการณ์ ที่ล้ำสมัยไม่เหมือนใครไปพร้อมกับคุณ
            </p>
            {/* ========== projects section ========== */}
            <ServicesMain />
          </div>
        </section>
      </main>

      <ServicesFooter />

      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Page;
