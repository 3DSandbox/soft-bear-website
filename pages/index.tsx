import { NextPage } from 'next';
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
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';

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
        {/* !!!open graph ไม่ยอมอ่าน อ่านแต่ของหน้า _app.tsx */}
        {/* <meta property="og:url" content="https://3dtv-tech.com/"></meta>
        <meta property="og:title" content="3DTV-Test"></meta>
        <meta property="og:description" content="Test"></meta>
        <meta property="og:image" content="https://cdn.zipeventapp.com/images/web/logo/share.png"></meta> */}
      </Head>
      <GoogleAnalytics gaMeasurementId={process?.env?.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        {/* เมนูบาร์ backup */}
        <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"></NavbarMain>
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper" data-aos="zoom-up">
        {/* ========== hero sections ========== */}
        <BannerMain />
        <section className="wrapper bg-light angled  ">
          <div className="container">
            {/* <div className="row  my-6 " data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">

              <h1
                className="col-6 text-main fs-40 text-uppercase mb-0"
                style={{
                  fontWeight: 'bold'
                }}
              >
                <b>Who we are</b>
              </h1>
              <h1
                className="col-6mb-3 text-main fs-40"
                style={{
                  color: '#C3C3C3',
                  fontWeight: 'bold'
                }}
              >
                <b>
                  A NEW MEDIA <br></br>DEVELOPMENT STUDIO
                </b>
              </h1>
              <p className="col-md-6 fs-18">
                เราคือทีมพัฒนาเทคโนโลยีสมัยใหม่ ด้วยความก้าวหน้าด้านเทคโนโลยี รวมไปถึงการเปลี่ยนแปลงของผู้บริโภค
                และการเปิดตัวแพลตฟอร์มใหม่ อย่างต่อเนื่อง เราจึงต้องพร้อมและพัฒนาเทคโนยีเพื่อเพิ่มความสามารถ
                และความโดดเด่นในการแข่งขันในทุกแพลตฟอร์มให้กับลูกค้าอยู่เสมอ
              </p>

             <div className='col-md-6'></div>

              <p className="col-md-6 fs-18">
                ด้วยประสบการณ์การพัฒนามีเดียมาอย่างยาวนานและเข้าใจถึงความท้าทายของการแข่งขันในปัจจุบัน
                เราพร้อมจะก้าวไปข้างหน้าสร้างประสบการณ์ ที่ล้ำสมัยไม่เหมือนใครไปพร้อมกับคุณ
              </p>
              <hr
                className="mt-5 mb-0"
                style={{
                  // borderColor: 'lime',
                  height: '0px',
                  width: ''
                }}
              ></hr>
            </div> */}

            {/* แบบเก่ารูปยังไม่ตรง */}
            {/* <div className="row">
              <div className="col-6">
                <div className="row  my-6 " data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                  <h1
                    className="col-12 text-main fs-40 text-uppercase mb-0"
                    style={{
                      fontWeight: 'bold'
                    }}
                  >
                    <b>Who we are</b>
                  </h1>
                  <h1
                    className="col-12 mb-3 text-main fs-40"
                    style={{
                      color: '#C3C3C3',
                      fontWeight: 'bold'
                    }}
                  >
                    <b>
                      A NEW MEDIA <br></br>DEVELOPMENT STUDIO
                    </b>
                  </h1>
                  <p className="col-12 fs-18">
                    เราคือทีมพัฒนาเทคโนโลยีสมัยใหม่ ด้วยความก้าวหน้าด้านเทคโนโลยี รวมไปถึงการเปลี่ยนแปลงของผู้บริโภค
                    และการเปิดตัวแพลตฟอร์มใหม่ อย่างต่อเนื่อง เราจึงต้องพร้อมและพัฒนาเทคโนยีเพื่อเพิ่มความสามารถ
                    และความโดดเด่นในการแข่งขันในทุกแพลตฟอร์มให้กับลูกค้าอยู่เสมอ
                  </p>

                  <div className="col-12"></div>

                  <p className="col-12 fs-18">
                    ด้วยประสบการณ์การพัฒนามีเดียมาอย่างยาวนานและเข้าใจถึงความท้าทายของการแข่งขันในปัจจุบัน
                    เราพร้อมจะก้าวไปข้างหน้าสร้างประสบการณ์ ที่ล้ำสมัยไม่เหมือนใครไปพร้อมกับคุณ
                  </p>
                  <hr
                    className="mt-5 mb-0"
                    style={{
                      // borderColor: 'lime',
                      height: '0px',
                      width: ''
                    }}
                  ></hr>
                </div>
              </div>

              <div className="col-6">
                <Image src={WHOWEARE.src} width={645} height={394} alt="coverhome" className="w-100 h-auto" />
              </div>
            </div> */}

            {/* แบบใหม่เป็น comp  */}
            <WhoweareComp />

            {/* ========== what we do section ========== */}
            <CategoryHome />
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
            <Blognewshome />
          </div>
        </section>
      </main>
      {/* <h1 className='' data-aos="fade-up">test aos</h1> */}
      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Home;
