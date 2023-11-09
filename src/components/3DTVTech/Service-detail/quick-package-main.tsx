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
import QuickPackageCard from './quick-package-card';
import { TQuickpackage } from '../../../../pages/porfolio-inside-main';

// ..

const QuickPackageMain: FC = () => {
  const [serviceinsideData, setServiceData] = useState<TQuickpackage[]>();

  const router = useRouter();
  const { query } = router;
  const { id } = query;

  // used for image lightbox
  useLightBox();

  useLightBox();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleGetId = () => {
    let actuallyId = 0;

    if (id) {
      if (typeof id === 'object') {
        actuallyId = parseInt(id[0]);
      } else {
        actuallyId = parseInt(id);
      }
    }

    console.log('act id :', actuallyId);

    return actuallyId;
  };

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
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.quickpackage;

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    } else {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.quickpackage;

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
      <h2
        className="display-3 mb-10 text-main text-center text-main"
        // style={{
        //   color: '#ff068a'
        // }}
      >
        Quick Package
      </h2>
      <div className="grid grid-view projects-masonry">
        <div className="container">
          <div className="row g-6 g-lg-10 justify-content-center">
          {/* <div className="row g-8 g-lg-10 justify-content-center"> */}
            {serviceinsideData?.map((item: any) => (
              <div
                key={item.id}
                className="project col-md-6 col-xl-4"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-easing="ease"
              >
                {/* <Link href= {`/services/service-details-main/service-inside/?id=${item.id}`}> */}
                {/* <Link href= {`/services/service-details-main/service-inside/?service_id=${query.service_id}&id=${item.id}`}> */}
                {/* {console.log(item.id)} */}
                <QuickPackageCard {...item} service_id={query.service_id} />
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPackageMain;
