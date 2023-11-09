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
  NOTFOUND,
  QRLINE
} from 'assets';
import Head from 'next/head';
import { detaildataList } from 'data/3DTVTech/Services/_SerivsbyType/detail-dataList';
import Link from 'next/link';

import QuickPackageMain from 'components/3DTVTech/Service-detail/quick-package-main';
import { title } from 'process';
import FeaturesInsideMain from '../../../features-inside-main';
import PortfolioInsideMain from '../../../porfolio-inside-main';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// ..

type TServiceType = {
  id: number;
  category: string;
  bgimage: string;
  image: string | StaticImageData;
  imagedetail: string;
  title: string;
  description1: string;
  description2: string;
  detail1: string;
  detail2: string;
  textfooter: string;
  features: TFeaures[];
  typeof: TTypeof[];
  servicelevel3detail: TServicelevel3[];
};

// features
type TFeaures = {
  id: number;
  image: string | StaticImageData;
  name: string;
  detail: string;
};

// typeof
type TTypeof = {
  id: number;
  image: string | StaticImageData;
  title: string;
  url: string;
};

type TServicelevel3 = {
  id: number;
  category: string;
  bgimage: string;
  image: string | StaticImageData;
  imagedetail: string;
  title: string;
  description1: string;
  description2?: string;
  detail1: string;
  detail2?: string;
  featuresinside?: TFeauresinside[];
  typeofinside: TTypeofinside[];
  quickpackage?: TQuickpackage[];
  textfooter?: string;
  portfolio?: TPorfolio[];
};

type TFeauresinside = {
  id: number;
  image: string | StaticImageData;
  name: string;
  detail: string;
};

type TTypeofinside = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  url: string;
};

type TQuickpackage = {
  id: number;
  image: string | StaticImageData;
  text01?: string;
  text02?: string;
  text03?: string;
  text04?: string;
  text05?: string;
};

type TPorfolio = {
  id: number;
  image: string | StaticImageData;
};

const Page: FC = () => {
  //   const { query } = useRouter();
  //   const {id} = query;
  //   ยังหาวิธีแก้แดงไม่ได้ ใช้ any
  // const [serviceData, setServiceData] = useState<TServiceType>();
  const [serviceinsideData, setServiceData] = useState<any>();
  // const [contentfound, setFooterFound] = useState(false);

  const [quickpackageFound, setQuickPackageFound] = useState(false);
  const [typeofinsideFound, setTypeOfInsideFound] = useState(false);

  const router = useRouter();
  const { query } = router;
  const { service_id } = query;
  const { id } = query;

  // used for image lightbox

  useLightBox();

  useEffect(() => {
    if (!servicesType || !service_id || !id) return;

    let quickpackage = servicesType
      ?.find((item) => item?.id.toString() == service_id)
      ?.servicelevel3detail?.find((sv) => String(sv.id) == id)?.quickpackage;

    let typeofinside = servicesType
      ?.find((item) => item?.id.toString() == service_id)
      ?.servicelevel3detail?.find((sv) => String(sv.id) == id)?.typeofinside;

    if (quickpackage && quickpackage?.length > 0) {
      setQuickPackageFound(true);
    }

    if (typeofinside && typeofinside?.length > 0) {
      setTypeOfInsideFound(true);
    }

    console.log('quickpackage', quickpackage);
    console.log('typeofinside', typeofinside);
  }, [servicesType, service_id, id]);

  useEffect(() => {
    AOS.init();
    console.log('idddddd', id);
    console.log('query q1', query);
  }, []);

  useEffect(() => {
    console.log('router id: ', id);
  }, [router, query]);

  const handleGetId = () => {
    let actuallyId = 0;

    if (id) {
      if (typeof id === 'object') {
        actuallyId = parseInt(id[0]);
      } else {
        actuallyId = parseInt(id);
      }
    }

    console.log('act id ', actuallyId);

    return actuallyId;
  };

  useEffect(() => {
    if (!query || !id) return;
    console.log('act idikikikikik ', handleGetId());
    console.log('query 2', query);

    if (query?.service_id) {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId());

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data!);
      }
    } else {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId());

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    }
    // const data = servicesDetail.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
    // console.log(dataDelayMarkup);
  }, [query]);

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
            backgroundImage: `url(${BANNER24.src})`,
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
                  Microsite Games
                </h2>
              </div>
              <div className="row">
                <p className="m-5 mt-md-0  fs-22  text-white">เกมไมโครไซต์สำหรับแคมเปญการตลาดและการสร้างการรับรู้</p>
                {/* <p className="m-5 mt-md-0  fs-22   text-white"></p> */}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container ">
            <div className="row mt-9 p-4 p-md-7">
              <div className="col-sm-12 col-xl-7">
                <h1 className="display-3 text-main"> Microsite Games</h1>
                <div className="content mt-md-7 mt-3">
                  <p className="fs-18">
                    เกมไมโครไซต์สำหรับแคมเปญการตลาดและการรับรู้แบรนด์
                    ให้ผู้เล่นหรือลูกค้ากลุ่มเป้าหมายมีส่วนร่วมโดยการเล่นเกม ร่วมแจกของรางวัล
                    ซึ่งสามารถนำมาใช้ร่วมกับระบบได้ ที่สำคัญสามารถเปลี่ยนกราฟิกให้เหมาะสมกับเป้าหมายแคมเปญของคุณ
                  </p>
                  {/* <p className="d-none d-md-block mt-2"></p> */}
                </div>
              </div>

{/* v phone */}
              <div className="col-sm-12 col-xl-5 d-flex justify-content-center  align-items-center ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center d-md-none align-items-center rounded">
                    <Image
                      src={IMG_MICROSITE.src}
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
                    <div className="d-flex justify-content-center  align-items-center rounded">
                      <Image
                        src={IMG_MICROSITE.src}
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

              {/* <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">เกมไมโครไซต์สำหรับแคมเปญการตลาดและการสร้างการรับรู้</p> */}
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
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio02 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio03 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio04 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio05 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio06 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio07 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio08 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio09 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio10 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio11 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio12 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio13 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio14 */}
            <div className="project col-md-6 mb-5 col-xl-4 ">
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
            </div>

            {/* portfolio15 */}
            <div className="project col-md-6 mb-2 col-xl-4 ">
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
            </div>
          </div>
        </div>
      </section>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
