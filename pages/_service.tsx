import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';

import FooterMain from 'components/3DTVTech/FooterMain';
import ServicesFooter from 'components/3DTVTech/Services/services-foot';
import ServicesMain from './services-main';
import ServicesHero from 'components/3DTVTech/Services/services-hero';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Servicesp: NextPage = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Fragment>
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

        <section className="wrapper">
          <div className="container">
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

export default Servicesp;
