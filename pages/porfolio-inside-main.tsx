import { FC, useEffect, useState } from 'react';
import ServicesCard from '../src/components/3DTVTech/Services/services-card';
// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { type } from 'os';
import PortfolioInsideCard from 'components/3DTVTech/Services/portfolio-inside-card';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { NOTFOUND } from 'assets';



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
  description1?: string;
  description2?: string;
  detail1: string;
  detail2?: string;
  featuresinside?: TFeauresinside[];
  typeofinside: TTypeofinside[];
  quickpackage?: TQuickpackage[];
  textfooter?: string;
  portfolio?: TPorfolio[];
};

export type TFeauresinside = {
  id: number;
  image: string | StaticImageData;
  description: string;
  title: string;
  url: string;

};

export type TTypeofinside = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  url: string;
};

export type TQuickpackage = {
  id: number;
  image: string | StaticImageData;
  texts: string[];

};

export type TPorfolio = {
  id: number;
  image: string | StaticImageData;
  title: string;
};

const PortfolioInsideMain: FC = () => {
  const [serviceinsideData, setServiceData] = useState<TPorfolio[]>();
  const [footerfound, setFooterFound] = useState(false);

  const router = useRouter();
  const { query } = router;
  const { id } = query;

  useTooltip();

  useLightBox();

  useEffect(() => {
    AOS.init();
    console.log('id', id);
    console.log('query q1:', query);
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

    console.log('act id :', actuallyId);

    return actuallyId;
  };

  useEffect(() => {
    if (!query || !id) return;
    console.log('act idikikikikik ', handleGetId());
    console.log('query 2', query);

    if (query?.service_id) {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.portfolio;

      console.log('found data', data);

      if (data != null) {
        setServiceData(data!);
      }
    } else {
      const data = servicesType
        .find((item) => item?.id.toString() == query.service_id)
        ?.servicelevel3detail?.find((sv) => sv?.id == handleGetId())?.portfolio;

      console.log('found data', data);

      if (data != null) {
        setServiceData(data);
      }
    }
    // const data = servicesDetail.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
    // console.log(dataDelayMarkup);
  }, [query]);

  return (

    <div className="grid grid-view projects-masonry mt-12">
      <div className="row g-6 g-lg-10 ">
      {/* <div className="row g-8 g-lg-10 "> */}
        {serviceinsideData?.map((item) => (
          <div key={item.id} className="project col-md-6 mb-5 col-xl-4 ">
            <PortfolioInsideCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioInsideMain;
