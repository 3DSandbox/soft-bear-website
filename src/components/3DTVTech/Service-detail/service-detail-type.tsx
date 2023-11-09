import { FC, useEffect, useState } from 'react';

// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { type } from 'os';

import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import ServiceDetailCard from './service-detail-card';
import { dataDelayMarkup } from 'markups/elements/animations';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { TServiceData } from './service-detail-features';
import Link from 'next/link';
import { PhotoProvider } from 'react-photo-view';
// ..

const ServiceDetailType: FC = () => {
  const { query } = useRouter();
  // const [serviceData, setServiceData] = useState<TServiceData>();
  const [serviceData, setServiceData] = useState<any>();

  // used for image lightbox
  useLightBox();

  useLightBox();

  useEffect(() => {
    AOS.init();
  }, []);


  // backup เดิมพี่ tle 
  // useEffect(() => {
  //   console.log(query.service_id);
  //   const data = servicesType.find(
  //     (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id)
  //   );
  //   setServiceData(data);
  // }, [query]);

  useEffect(() => {
    console.log(query.service_id);
    if (query?.service_id) {
      const data = servicesType.find((item) => item?.id.toString() == query.service_id);

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    } else {
      const data = servicesType.find((item) => item?.id.toString() == "1");

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    }
    // const data = servicesType.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );

    // console.log(dataDelayMarkup);
  }, [query]);

  useTooltip();

  return (
    // <div className="mt-10">
    //   <h1 className="mb-10 text-main text-center">Type of Virtual Experience</h1>
    //   <div className="grid grid-view projects-masonry">
    //     <div className="row g-8 g-lg-10">
    //       {servicesType.map((item) => (
    //         <div key={item.id} className="project col-md-6 col-xl-3">
    //           <ServiceDetailCard {...item} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="mt-10 mb-15">
      <h2 className="display-3 text-main text-center">Type of {serviceData?.category || "ไม่พบข้อมูล"} </h2>
      <hr
              className="p-0 "
              style={{
                height: '3px',
                width: '4rem',
                backgroundColor: '#3175D1',
                margin: 'auto'
              }}
            ></hr>
      <div className="grid grid-view projects-masonry">
        <div className="container">
          <div className="row g-8 g-lg-10 mt-1  justify-content-center">
            {serviceData?.typeof.map((item: any) => (
              <div key={item.id} className="project  col-md-6 col-xl-3">
                {/* <Link href= {`/services/service-details-main/service-inside/?id=${item.id}`}> */}
                {item?.disabled ? (
                <ServiceDetailCard {...item} service_id={query.service_id}
                />
                ) : (
                  <Link href={`/services/service-details-main/service-inside/?service_id=${query.service_id}&id=${item.id}`} >
                  {/* {console.log(item.id)} */}
                <ServiceDetailCard {...item} service_id={query.service_id}/>
                </Link>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ServiceDetailType;
