import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8, FooterMain } from 'components/blocks/footer';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import Blognewshome from 'components/3DTVTech/Home/BlogNews/BlogNewsHome';
import { CategoryHome, ServiceHome } from 'components/3DTVTech';
import { BannerMain } from 'components/blocks/hero';
import PageProgress from 'components/common/PageProgress';

const NotFound: NextPage = () => {
  return (
    // <Fragment>
    //   {/* ========== header section ========== */}
    //   <header className="wrapper bg-light">
    //     <NavbarMain
    //       info
    //       search
    //       stickyBox={false}
    //       logoAlt="logo-light"
    //       navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
    //     />
    //   </header>

    //   <main className="content-wrapper">
    //     <section className="wrapper bg-light">
    //       <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
    //         <div className="row">
    //           <div className="col-lg-9 col-xl-8 mx-auto">
    //             <FigureImage width={800} height={316} src="/img/illustrations/404.png" className="mb-10" />
    //           </div>

    //           <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
    //             <h1 className="mb-3">อุ๊บ! เราไม่พบเพจที่ท่านต้องการ</h1>
    //             <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
    //               The page you are looking for is not available or has been moved. Try a different page or go to
    //               homepage with the button below.
    //             </p>

    //             <NextLink title="Go to Homepage" href="/demo-j" className="btn btn-primary rounded-pill" />
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   {/* ========== footer section ========== */}
    //   <Footer8 />
    // </Fragment>
    
    <Fragment>
    <PageProgress />

    {/* ========== header ========== */}
    <header className="wrapper bg-soft-primary">
      {/* เมนูบาร์ backup */}
      <NavbarMain
        info
        search
        stickyBox={false}
        logoAlt="logo-light"
        navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
      />
      

    </header>

    {/* ========== main content ========== */}
    <main className="content-wrapper">
    <section className="wrapper bg-light">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
      <div className='row'>
      <div className="col-lg-9 col-xl-8 mx-auto my-13">
                <FigureImage width={800} height={316} src="/img/illustrations/404.png" className="mb-11" />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">อุ๊บ! เราไม่พบหน้าเว็บเพจนี้</h1>
                <p className="lead mb-11 px-md-12 px-lg-5 px-xl-7">
                  เราไม่พบข้อมูลหน้าที่คุณต้องการค้นหา กลับเข้าสู่หน้าหลักโดยการกดปุ่มด้านล่างตรงนี้
                </p>

                <NextLink title="Go to Homepage" href="/home" className="btn btn-primary rounded-pill" />
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

export default NotFound;
