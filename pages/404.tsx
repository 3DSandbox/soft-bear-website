import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { FooterMain } from 'components/blocks/footer';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/Soft-Bear/NavbarMain';

const NotFound: NextPage = () => {
  return (
    <Fragment>
    <PageProgress />

    {/* ========== header ========== */}
    <header className="wrapper bg-soft-primary">
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
