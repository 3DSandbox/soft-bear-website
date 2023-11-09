import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { dataDelayMarkup } from 'markups/elements/animations';
import FooterMain from 'components/3DTVTech/FooterMain';
import ServiceDetailType from 'components/3DTVTech/Service-detail/service-detail-type';
import ServiceDetailFeatures from 'components/3DTVTech/Service-detail/service-detail-features';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

type TServiceType ={
  id: number,
  category: string,
  bgimage: string,
  image: string,
  imagedetail: string,
  title: string,
  description1?: string,
  description2?: string,
  textfooter?: string,
  detail1?: string,
  detail2?: string,
  features?: TFeatures[ ],
  typeof: TTypeOf[]
}

type TFeatures ={
  id: number;
  name: string;
  detail: string,
}

type TTypeOf ={
  id: number,
  image: string,
  title: string,
  url?: string,
}

const ServiceDetailMain: FC = () => {
  const { query } = useRouter();
  // แก้แดงไม่ได้ ใช้ any ไปก่อน
  // const [serviceData, setServiceData] = useState<TServiceType>();
  const [serviceData, setServiceData] = useState<any>();

  const [footerfound, setFooterFound] = useState(false);

  // used for image lightbox

  useLightBox();

  useEffect(() => {
    if (!servicesType) return;
    let footer = servicesType?.find(
      (item) => item?.textfooter != null && item?.textfooter != '' && String(item?.id) == query?.service_id
    );
    console.log('footer', footer);
    setFooterFound(Boolean(footer));
  }, [servicesType]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(query.service_id);
    if (query?.service_id) {
      const data = servicesType.find((item) => item?.id.toString() == query.service_id);
      // console.log('found data', data);

      if (data != null) {
        setServiceData(data!);
      }
    } else {
      const data = servicesType.find((item) => item?.id.toString() == '1');

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    }
    // const data = servicesType.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
    // console.log(dataDelayMarkup);
  }, [query]);

  return (
    <Fragment>
      {/* <PageProgress /> */}
      {/* header */}
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
        {/* <section
          className="wrapper bg-image"
          style={{
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-virtual.png" )'
          }}
        > */}

        <section
          className="wrapper bg-image"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${serviceData?.bgimage || ''})`,
            height: '440px'
          }}
        >
          <div className="container pt-12 pb-12 pb-md-18 pt-md-18 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1
                  className="display-1 text-white mt-10 mt-lg-4"
                  style={{
                    width: 'auto'
                  }}
                >
                  {serviceData?.category || 'ไม่พบข้อมูล'}
                </h1>
              </div>
              <div className="row" >
                <p className="mx-auto  fs-22 text-white">{serviceData?.description1 || ''}</p>
                {/* ---อีก paragrap--- */}
                <p className="m-5 mt-md-0  fs-22 text-white">{serviceData?.description2 || ''}</p>
              </div>
            </div>
          </div>
        </section>

        {/* content section */}
        <section>
          <div className="container ">
            <div className="row p-4 p-md-7">
              <div className="col-md-6">
                <h2 className="display-6 d-md-none text-main">
                  Why {serviceData?.title} is important
                </h2>

                <h2 className="display-3 d-none d-md-block text-main">
                  Why {serviceData?.title} is important
                </h2>

                <div className="content mt-md-7 mt-3">
                  <p className="fs-18">
                    {serviceData?.detail1 || 'ไม่พบข้อมูล'}
                  </p>
                  <p
                    className="d-none d-md-block mt-2" >
                    {serviceData?.detail2 || ''}
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <figure className="rounded overlay overlay-1 ">
                  <img
                    src={serviceData?.imagedetail || '/img/photos/3DTVTech/default/notfound1080.png'}
                    className=""
                    style={{
                      width: '70%'
                    }}
                  />
                </figure>
              </div>
              <p
                className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                {serviceData?.detail2 || ''}
              </p>
            </div>
          </div>
        </section>

        {/* features section */}
        <section>
          <div className="container">
            <ServiceDetailFeatures />
          </div>
        </section>

        <section>
          <div className="container">
            <ServiceDetailType />
          </div>
        </section>
      </main>

      {footerfound && (
        <div
          className="d-wrapper mt-5 pt-12 pb-12 "
          style={{
            backgroundColor: '#F3F3F3'
          }}
        >
          <div className="container col-4">
            <p className="fs-22 text-center ">{serviceData?.textfooter}</p>
          </div>
        </div>
      )}

      <FooterMain />
    </Fragment>
  );
};

export default ServiceDetailMain;

{
  /* ---test if--- */
}
{
  /* {(() => {
        if (serviceData?.textfooter == null) {
          return console.log('ไม่พบ footer');
        }
        else{
          console.log('พบ footer');
          <div>
            <p>test</p>
          </div>

        }

        return null;
      })()} */
}
