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
import OurworkMicrosite from 'components/3DTVTech/Ourwork/Serviceweoprovide/Ourworkmicrosite';
import OurworkMetaverse from 'components/3DTVTech/Ourwork/Serviceweoprovide/Ourworkmetaverse';
import Ourworkelearning from 'components/3DTVTech/Ourwork/Serviceweoprovide/Ourworkelearning';
import FooterMain from 'components/3DTVTech/FooterMain';

const elearningp: NextPage = () => {
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
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-web.png" )'
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
                  Metaverse
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ========== products section ========== */}
        <section className="content">
          <div className="container my-5">
            <p className="fs-22 text-center ">
              การจัดงานอีเว้นท์ที่ใช้สื่อในการปฏิสัมพันธ์กับผู้ใช้ให้ผู้ใช้สามารถเข้าถึงแบรนด์ได้ง่าย <br></br>
              มีส่วนร่วมกับงานและสนุกมากยิ่งขึ้น
            </p>
          </div>
          <Ourworkelearning/>
        </section>
        {/* =========end product============ */}
        <section
          className=""
          style={{
            backgroundColor: '#69c0ff38'
          }}
        >
          <div className="container">
            <h1 className="text-main pt-7 ">PORTFOLIO</h1>
            <div className="row justify-content-center mt-6 pb-18">
              <div className='col-5'><iframe width="520" height="315" src="https://www.youtube.com/embed/iV_l7PIIUDk"></iframe>
              <h5 className='text-center text-main'>JOY STICK</h5>
              </div>
              <div className='col-5'><iframe width="520" height="315" src="https://www.youtube.com/embed/jtElSDJ6NGg"></iframe>
              <h5 className='text-center text-main'>JOY STICK</h5>
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

export default elearningp;
