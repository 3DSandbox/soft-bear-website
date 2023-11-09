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
import { NOTFOUND, QRLINE } from 'assets';
import Head from 'next/head';
import { detaildataList } from 'data/3DTVTech/Services/_SerivsbyType/detail-dataList';
import Link from 'next/link';


import QuickPackageMain from 'components/3DTVTech/Service-detail/quick-package-main';
import { title } from 'process';
import FeaturesInsideMain from '../../../features-inside-main';
import PortfolioInsideMain from '../../../porfolio-inside-main';

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
        <meta
          name="description"
          content="บริษัท 3DTV-Tech มีหมวดหมู่บริการย่อย ที่พร้อมสนับสนุนธุรกิจของคุณ"
        />
        <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, Virtual Exhibition, Business Matching, Virtual Experience,Software Development , Augmented Reality, Virtual Reality, Mixed Reality, Extended Reality, Hardware Development , Metaverse,Info Graphics, Motion Graphics, Learning Management System, Reality Technology, Cinme Technology, Event Service, พัฒนาสื่อการเรียน, พัฒนาเกม, พัฒนาเว็บไซต์, CRM, Projection Mapping, LMS, บริการพัฒนาสื่อ New Media, บริการพัฒนา Software, บริการพัฒนา Hardware, บริการจัดงานอีเว้นท์" />
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
            backgroundImage: `url(${serviceinsideData?.bgimage || NOTFOUND.src})`,
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
                  {serviceinsideData?.category || 'ไม่พบข้อมูล'}
                </h2>
              </div>
              <div className="row">
                <p className="m-5 mt-md-0  fs-22  text-white">{serviceinsideData?.description1 || ''}</p>
                <p className="m-5 mt-md-0  fs-22   text-white">{serviceinsideData?.description2 || ''}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container ">
            <div className="row mt-9 p-4 p-md-7">
              <div className="col-sm-12 col-xl-6">
                <h1 className="display-3 text-main">{serviceinsideData?.title}</h1>
                <div className="content mt-md-7 mt-3">
                  <p className="fs-18">{serviceinsideData?.detail1 || 'ไม่พบข้อมูล'}</p>
                  <p className="d-none d-md-block mt-2">{serviceinsideData?.detail2 || ''}</p>
                </div>
              </div>

              <div className="col-sm-12 col-xl-6">      
                <div className="row">
                  <div className="col-12 d-flex justify-content-center d-md-none align-items-center rounded">
                    <Image
                      src={serviceinsideData?.imagedetail || NOTFOUND.src}
                      alt="Service Cover"
                      width={512}
                      height={512}
                      className=""
                      style={{
                        width: '90%',
                        height: 'auto'
                      }}
                      draggable="false"
                    />
                  </div>

                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center  align-items-center rounded">
                      <Image
                        src={serviceinsideData?.imagedetail || NOTFOUND.src}
                        alt="Service Cover"
                        width={512}
                        height={512}
                        className=""
                        style={{
                          width: '50%',
                          height: 'auto'
                        }}
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">{serviceinsideData?.detail2 || ''}</p>
            </div>
            {/* <hr className='my-5'></hr> */}
          </div>     
        </section>


        <section>
          {typeofinsideFound && (
            <div className="container">
              <FeaturesInsideMain />
            </div>
          )}
        </section>

        <section>
          {quickpackageFound && (
            <div className="container">
              <QuickPackageMain />
            </div>
          )}
        </section>

        <section>
          <div className="container mt-10">
            <h2 className="text-center text-main fs-28">งานของเรา</h2>
          </div>
        </section>
      </main>

      <section>
        <div className="container" style={{ paddingBottom: '108px' }}>
          <PortfolioInsideMain />
        </div>
      </section>

      <FooterMain />
    </Fragment>
  );
};

export default Page;


              {/* ติดต่อสอบถามเพิ่มเติม */}
              {/* <div className="col-sm-3 col-xl-6">
                <p className="display-6 text-main text-center">สอบถามเพิ่มเติม : 0837598799</p>
                <Link href="https://line.me/ti/p/~ajima-puk">
                  <p
                    className="fs-18 d-flex justify-content-center align-items-center"
                    style={{
                      fontWeight: 'bold',
                      textDecoration: 'underline'
                    }}
                  >
                    LineID : ajima-puk
                  </p>{' '}
                </Link>
                <div className="row">
                  
                  <div className="col-12 d-flex justify-content-center d-md-none align-items-center">
                    <Image
                      src={QRLINE.src}
                      alt="LineQR Image"
                      width={30}
                      height={30}
                      className=""
                      style={{
                        width: '50%',
                        height: 'auto'
                      }}
                      draggable="false"
                    />
                  </div>

                  <div className="col-12 d-none d-md-block">
                    <div className="d-flex justify-content-center  align-items-center">
                      <Image
                        src={QRLINE.src}
                        alt="LineQR Image"
                        width={30}
                        height={30}
                        className=""
                        style={{
                          width: '30%',
                          height: 'auto'
                        }}
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </div> */}

