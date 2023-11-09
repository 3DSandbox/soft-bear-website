import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Select from 'components/reuseable/Select';
import ShopService from 'components/common/ShopService';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import Pagination from 'components/reuseable/Pagination';
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';

// -------- data -------- //
import products from 'data/product-list';
import OurworkInteractive from 'components/3DTVTech/Ourwork/Serviceweoprovide/OurworkInteractive';
import OurworkforwhoyouareMuseumArt from 'components/3DTVTech/Ourwork/Whoyouare/OurworkforwhoyouareMuseumArt';
import FooterMain from 'components/3DTVTech/FooterMain';

const museumartp: NextPage = () => {
  // filter options
  const options = [
    { id: 1, title: 'Sort by popularity', value: 'popular' },
    { id: 2, title: 'Sort by average rating', value: 'rating' },
    { id: 3, title: 'Sort by newness', value: 'new' },
    { id: 4, title: 'Sort by price: low to high', value: 'low-to-high' },
    { id: 5, title: 'Sort by price: high to low', value: 'high-to-low' }
  ];

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <NavbarMain
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        {/* <section className="wrapper bg-gray"> */}
        <section
          className="wrapper bg-image"
          style={{
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-museumart.png" )'
          }}
        >
          <div className="container py-12 py-md-16 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1
                  className="display-2 text-white"
                  style={{
                    width: 'auto',
                    height: 20
                  }}
                >
                  Museum / Art Gallery
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ========== products section ========== */}
        <section className="content mb-15">
          <div className="container my-5">
            <p className="display-5 text-main">Museum / Art Gallery</p>
            If you are an Museum / Art Gallery , we recommend our products follow these.
          </div>
          <OurworkforwhoyouareMuseumArt />
        </section>
        {/* =========end product============ */}
      </main>

      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default museumartp;
