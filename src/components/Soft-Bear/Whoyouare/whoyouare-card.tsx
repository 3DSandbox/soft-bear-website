import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND } from 'assets';
import { useRouter } from 'next/router';
import useTooltip from 'hooks/useTooltip';
import { whoyouare } from 'data/3DTVTech/Services/dataList';
// ..

// ==============================================================
export type WhoyouareData = {
  id: number;
  image: string;
  title: string;
  detail: string;
  url?: string;
  disabled?: boolean;
};


// ==============================================================

const WhoyouareDetailCard: FC<WhoyouareData> = ({ id, image, title, detail, url ,disabled}) => {

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(id);
  })



  useTooltip();


  

  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
      {/* <figure className="card-img-top" title="Click to see the project"> */}
      <figure className="card-img-top">


        {/* <Link href={"#"}> */}

        {/* use */}
        {/* <Link href={`services/service-details-main/service-inside/${url}`}> */}


          <Image className='rounded' src={image || NOTFOUND.src} width={285} height={285} alt={title}
            style={{
              width: "100%"
            }} />
        {/* </Link> */}

      </figure>

      <div className=" ">
        {/* <Link href={"#"}><h3 className="fs-19 text-center text-main mt-2 mb-0"> */}

        {/* use */}
        {/* <Link href={`services/service-details-main/service-inside/${url}`}> */}
          <h3 className="fs-19 text-center text-main mt-2 mb-0">
          {title || "ไม่พบข้อมูล"}</h3>
        {/* </Link> */}
      </div>
      <p className='text-center'>{detail}</p>
      {/* check id send */}
      {/* <p className='text-center'>{url}</p> */}
    </div>

  );
};

export default WhoyouareDetailCard;

{/* <div className="shadow-lg h-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
      <figure className="card-img-top" title="Click to see the project">
        <Link href={`/service-detail-main/?service_id=${id}`}>
          <Image src={image || "/img/photos/3DTVTech/default/notfound1080.png"} width={285} height={285} alt={title}
          style={{
            width: "100%"
          }}/>
        </Link>
      </figure>

      <div className="card-body p-5">
          <h3 className="fs-19 text-center text-main mb-0">{title || "ไม่พบข้อมูล"}</h3>
        </div>
      </div> */}
