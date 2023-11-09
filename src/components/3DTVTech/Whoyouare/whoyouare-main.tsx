import { FC, useEffect, useState } from 'react';

// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { servicesType, whoyouare } from 'data/3DTVTech/Services/dataList';
import { type } from 'os';

import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { dataDelayMarkup } from 'markups/elements/animations';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import WhoyouareDetailCard from './whoyouare-card';
import Link from 'next/link';
// ..

const Whoyouaremain: FC = () => {

  const { query } = useRouter();
  const [whoyouareData, setServiceData] = useState<any>();

  // used for image lightbox
  useLightBox();

  useLightBox();

  useEffect(() => {
    AOS.init();
  }, []);


  useTooltip();

  useEffect(() => {
    console.log(query.id);
    const whoyouareData = whoyouare.find((item) => String(item?.id) == (query?.id?.length ? query?.id[0] : query?.id));
    setServiceData(whoyouareData)
  }, [query]);

  return (

    <div className="mt-10 mb-15">
      {/* <h2 className="display-3 mb-10 text-main text-center" data-aos="fade-up">Type of {serviceData?.category || "ไม่พบข้อมูล"} </h2> */}
      <div className="grid grid-view projects-masonry">
        <div className="container">
          <div className="row g-8 g-lg-10 justify-content-start">
            {whoyouareData?.typeof.map((item: any) =>
            // {
            //   console.log(item);

            // }
            (

              <div key={item.id} className="project col-md-6 col-xl-3">


                {/* --if ของพี่ big-- */}
                {/* <Link href={`services/service-details-main/service-inside/${item.url}`}> */}
                {/* {item?.disabled ? 
                (
                <WhoyouareDetailCard {...item}/>
                ) 
                : 
                (
                  <Link href={`services/service-details-main/service-inside/${item.url}`}>
                <WhoyouareDetailCard {...item}/>
                </Link>
                  )} */}



                {/* --test if-- j*/}
                {/* {item?.disabled ? 
                  (
                    <p>check: 01</p>
                  )
                  :
                  (
                      <p>check: 02</p>
                  )} */}

                {/* --แบบเดิมลิ้งหมดไม่มีการปิดลิ้งบาง-- obj */}
                {/* <Link href={`services/service-details-main/service-inside/${item.url}`}>
                  <WhoyouareDetailCard {...item} />
                </Link> */}

                {item?.disabled ?
                  (
                    <WhoyouareDetailCard {...item} />
                  )
                  :
                  (
                    //แบบเก่าใช้ id และลิ้ง url พร้อมแบบ id  
                    // <Link href={`services/service-details-main/service-inside/${item.url}`}>
                    <Link href={`${item.url}`}>
                    <WhoyouareDetailCard {...item} />
                    </Link>
                  )}



              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoyouaremain;
