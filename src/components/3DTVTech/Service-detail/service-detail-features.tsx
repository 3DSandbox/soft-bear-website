import { FC, Fragment, useEffect, useState } from 'react';
import { ServiceCard2 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList2 } from 'data/service';
import { categoryList } from 'data/3DTVTech/categoryList';
import Image from 'next/image';
import Link from 'next/link';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { dataDelayMarkup } from 'markups/elements/animations';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export type TServiceData = {
  id: number;
  category: string;
  bgimage: string;
  image: string;
  imagedetail: string;
  title: string;
  description1?: string;
  description2?: string;
  textfooter?: string;
  detail1?: string;
  detail2?: string;
  features: TFeature[];
  typeof: TTypeOf[];
};

type TFeature = {
  id: number;
  image: string;
  name: string;
  detail: string;
};

type TTypeOf = {
  id: number;
  image: string;
  title: string;
  url: string;
};

const ServiceDetailFeatures: FC = () => {
  const { query } = useRouter();
  // ใช้ any ชั่วคราว
  // const [serviceData, setServiceData] = useState<TServiceData>();
  const [serviceData, setServiceData] = useState<any>();

  // used for image lightbox
  useLightBox();

  // backup ของเดิมพี่ tle
  // useEffect(() => {
  //   console.log(query.service_id);
  //   const data = servicesType.find(
  //     (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id)
  //   );
  //   setServiceData(data);
  // }, [query]);

  useLightBox();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // console.log(query.service_id);
    if (query?.service_id) {
      const data = servicesType.find((item) => item?.id.toString() == query.service_id);

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
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
      <div className="row mt-0 mt-md-5 mx-auto">
        <div
          className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center "
          // style={slideInDownAnimate('1000ms')}
        >
          
          <h2 className="display-3 text-main mt-10 mt-md-3 ">Features</h2>
          <hr
              className="p-0 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
        </div>
      </div>

      <div className="row justify-content-center">

{/* ใช้ any ชั่วคราว */}
        {/* {serviceData?.features?.map((item) => ( */}
        {serviceData?.features?.map((item: any) => (
          <div key={item.id} className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
            {/* <div className="ol-md-6 col-lg-4 col-xl-3 col-xxl-3 mx-auto text-center mx-10"> */}
            <Image
              src={item.image || '/img/photos/3DTVTech/default/notfound1080.png'}
              width={128}
              height={128}
              draggable={false}
              alt={item.name}
            />
            <h3
              className="mb-3 mt-3"
              style={{
                color: '#737373'
              }}
            ></h3>
            <h3 className="fs-22 text-main">{item.name || 'ไม่พบข้อมูล'}</h3>
            <p className="fs-18 mx-3">{item.detail || 'ไม่พบข้อมูล'}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ServiceDetailFeatures;
