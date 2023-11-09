import { FC, useEffect, useState } from 'react';
import ServicesCard from '../src/components/3DTVTech/Services/services-card';
// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import {servicesType} from 'data/3DTVTech/Services/dataList';
import { type } from 'os';
import FeauturesInsideCard from 'components/3DTVTech/Services/feautures-inside-card';
import { TFeauresinside } from './porfolio-inside-main';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import Aos from 'aos';

const FeaturesInsideMain: FC = () => {
  const [serviceinsideData, setServiceData] = useState<TFeauresinside[]>();
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  // used for image lightbox
  useLightBox();

  useLightBox();

  useEffect(() => {
    Aos.init();
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
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.typeofinside;

      // console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    } else {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.typeofinside;

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
    <div className="grid grid-view projects-masonry mt-12">
      {/* <div className="row g-8 g-lg-10"> */}
      <div className="row g-6 g-lg-10">
        {serviceinsideData?.map((item) => (
          // <div key={item.id} className="project col-md-6 mb-5 col-xl-3">
          <div key={item.id} className="project col-12 col-md-4">
            <FeauturesInsideCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesInsideMain;
