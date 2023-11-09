import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import FooterMain from 'components/3DTVTech/FooterMain';

import Image, { StaticImageData } from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  BANNER24,
  BANNER26,
  IMG_MICROSITE,
  MICROSITE_BIGON,
  MICROSITE_BRAND,
  MICROSITE_CHIECKENCROSSING,
  MICROSITE_COKE,
  MICROSITE_CROCO,
  MICROSITE_GLADE,
  MICROSITE_KTAXA,
  MICROSITE_KTAXAPHOTO,
  MICROSITE_LAYMAX,
  MICROSITE_LAYPASSPORT,
  MICROSITE_MATCHING,
  MICROSITE_NIVEAMEN,
  MICROSITE_NOCNOC,
  MICROSITE_NUGGET,
  MICROSITE_T2DM,
  TYPEOFGAMECONTROLLER,
  TYPEOFINTERACTIVETOUCHSCREEN
} from 'assets';
import Head from 'next/head';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// ..

// cleancode อยู่ใน service interactive -> interactive touchscreen

const Page: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>3DTV-Tech</title>
        <meta name="description" content="บริษัท 3DTV-Tech มีหมวดหมู่บริการย่อย ที่พร้อมสนับสนุนธุรกิจของคุณ" />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, Virtual Exhibition, Business Matching, Virtual Experience,Software Development , Augmented Reality, Virtual Reality, Mixed Reality, Extended Reality, Hardware Development , Metaverse,Info Graphics, Motion Graphics, Learning Management System, Reality Technology, Cinme Technology, Event Service, พัฒนาสื่อการเรียน, พัฒนาเกม, พัฒนาเว็บไซต์, CRM, Projection Mapping, LMS, บริการพัฒนาสื่อ New Media, บริการพัฒนา Software, บริการพัฒนา Hardware, บริการจัดงานอีเว้นท์"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
        <section
          className="wrapper bg-image"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${BANNER26.src})`,
            height: '440px'
          }}
        >
          <div className="container pt-12 pb-12 pb-md-18 pt-md-18 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h2
                  className="display-1 text-white  mt-10 mt-lg-4"
                  style={{
                    width: 'auto'
                  }}
                >
                  {/* Header */}
                  Mobile Controller
                </h2>
              </div>
              <div className="row">
                {/* v pc sub header */}
                <p className="m-5 mt-md-0  fs-22  text-white">เล่นเกมง่าย ๆ เพียงแค่มีสมาร์ทโฟน</p>
                {/* <p className="m-5 mt-md-0  fs-22   text-white"></p> */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container ">
            <div className="row mt-9 p-4 p-md-7">
              <div className="col-sm-12 col-xl-7">
                <h1 className="display-3 text-main">
                  Touch and Play ควบคุมเกม <br></br>ด้วยสมาร์ทโฟนของคุณ
                </h1>
                <div className="content mt-md-7 mt-3">
                  <p className="fs-18">
                    <b>Mobile Controller</b> คือ การสร้าง Interactive โดยใช้สมาร์ทโฟนในการควบคุมเกม สนุกกับเกมง่ายๆ
                    เพียงคว้าสมาร์ทโฟนของคุณขึ้นมาสแกน QR code ก็สามารถเล่นเกมผ่านสมาร์ทโฟนของคุณได้เลย
                  </p>
                  {/* v pc */}
                  <p className="fs-18 d-none d-md-block mt-2"></p>
                  <p className="fs-18 d-none d-md-block mt-2">
                    <b>Mobile Controller</b> ถูกพัฒนามาจากการใช้ฮาร์ดแวร์คอนโทรลเลอร์อื่นๆ
                    แต่เนื่องด้วยสถานการณ์โควิดและเชื้อโรคที่เพิ่มมากขึ้น
                    เราจึงพัฒนาและเปลี่ยนการเล่นเกมแบบเดิมมาใช้เป็นสมาร์ทโฟน เพื่อลดการสัมผัส
                    และสมารถใช้สามาร์โฟนของตัวเองในการเล่นได้เลย
                  </p>

                  {/* v phone */}
                  <p className="fs-18 d-md-none"></p>
                </div>
              </div>

              {/* v phone */}
              <div className="col-sm-12 col-xl-5 d-flex justify-content-center  align-items-center ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center d-md-none align-items-center rounded">
                    <Image
                      src={TYPEOFGAMECONTROLLER.src}
                      alt="Service Cover"
                      width={512}
                      height={512}
                      className=""
                      style={{
                        width: '100%',
                        height: 'auto'
                      }}
                      draggable="false"
                    />
                  </div>

                  {/* v pc */}
                  <div className="col-12 d-none d-md-block">
                    <div
                      className=" d-flex justify-content-center  align-items-center rounded"
                      style={{
                        marginTop: ''
                      }}
                    >
                      <Image
                        src={TYPEOFGAMECONTROLLER.src}
                        alt="Service Cover"
                        width={512}
                        height={512}
                        className=""
                        style={{
                          width: '65%',
                          height: 'auto'
                        }}
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
              <b>Mobile Controller</b> ถูกพัฒนามาจากการใช้ฮาร์ดแวร์คอนโทรลเลอร์อื่นๆ
                    แต่เนื่องด้วยสถานการณ์โควิดและเชื้อโรคที่เพิ่มมากขึ้น
                    เราจึงพัฒนาและเปลี่ยนการเล่นเกมแบบเดิมมาใช้เป็นสมาร์ทโฟน เพื่อลดการสัมผัส
                    และสมารถใช้สามาร์โฟนของตัวเองในการเล่นได้เลย
              </p>
            </div>
            {/* <hr className='my-5'></hr> */}
          </div>
        </section>
      </main>

      {/* portfolio */}
      <section>
        <h2 className="text-main text-center">Portfolio</h2>
        <hr
          className="mt-1 p-0 "
          style={{
            height: '3px',
            width: '4rem',
            backgroundColor: '#3175D1',
            margin: 'auto'
          }}
        ></hr>

        <div className="container my-8">
          <div className="row g-6 g-lg-10 ">
            {/* portfolio01 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_LAYMAX.src}>
                      <Image
                        src={MICROSITE_LAYMAX.src}
                        width={285}
                        height={285}
                        alt="Microsite Laymax"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio02 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_KTAXA.src}>
                      <Image
                        src={MICROSITE_KTAXA.src}
                        width={285}
                        height={285}
                        alt="Microsite Ktaxa"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio03 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_GLADE.src}>
                      <Image
                        src={MICROSITE_GLADE.src}
                        width={285}
                        height={285}
                        alt="Microsite Glade"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio04 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_CROCO.src}>
                      <Image
                        src={MICROSITE_CROCO.src}
                        width={285}
                        height={285}
                        alt="Microsite Coco"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio05 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_BIGON.src}>
                      <Image
                        src={MICROSITE_BIGON.src}
                        width={285}
                        height={285}
                        alt="Microsite Bigon"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio06 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_NIVEAMEN.src}>
                      <Image
                        src={MICROSITE_NIVEAMEN.src}
                        width={285}
                        height={285}
                        alt="Microsite Niveamen"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio07 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_CHIECKENCROSSING.src}>
                      <Image
                        src={MICROSITE_CHIECKENCROSSING.src}
                        width={285}
                        height={285}
                        alt="Microsite Chieckencrossing"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio08 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_T2DM.src}>
                      <Image
                        src={MICROSITE_T2DM.src}
                        width={285}
                        height={285}
                        alt="Microsite T2DM"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio09 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_MATCHING.src}>
                      <Image
                        src={MICROSITE_MATCHING.src}
                        width={285}
                        height={285}
                        alt="Microsite Matching"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio10 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_LAYPASSPORT.src}>
                      <Image
                        src={MICROSITE_LAYPASSPORT.src}
                        width={285}
                        height={285}
                        alt="Microsite Laypassport"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio11 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_NOCNOC.src}>
                      <Image
                        src={MICROSITE_NOCNOC.src}
                        width={285}
                        height={285}
                        alt="Microsite Nocnoc"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio12 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_NUGGET.src}>
                      <Image
                        src={MICROSITE_NUGGET.src}
                        width={285}
                        height={285}
                        alt="Microsite Nugget"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio13 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_BRAND.src}>
                      <Image
                        src={MICROSITE_BRAND.src}
                        width={285}
                        height={285}
                        alt="Microsite Brand"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio14 */}
            {/* <div className="project col-md-6 mb-5 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_KTAXAPHOTO.src}>
                      <Image
                        src={MICROSITE_KTAXAPHOTO.src}
                        width={285}
                        height={285}
                        alt="Microsite Ktaxaphoto"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}

            {/* portfolio15 */}
            {/* <div className="project col-md-6 mb-2 col-xl-4 ">
              <PhotoProvider>
                <div className="d-flex flex-column ">
                  <figure className="m-5 m-md-0" title="click to zoom the image">
                    <PhotoView src={MICROSITE_COKE.src}>
                      <Image
                        src={MICROSITE_COKE.src}
                        width={285}
                        height={285}
                        alt="Microsite Coke"
                        style={{
                          cursor: 'pointer'
                        }}
                      />
                    </PhotoView>

                    <p
                      className="fs-16 text-center mt-8"
                      style={{
                        fontWeight: 'bold'
                      }}
                    ></p>
                  </figure>
                </div>
              </PhotoProvider>
            </div> */}
          </div>
        </div>
      </section>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
