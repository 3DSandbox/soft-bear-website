import { FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND } from 'assets';
// ..

// ==============================================================
type Props = {
  service_id: number;
  id: number;
  image: string;
  title: string;
  color?: string;
  category?: string;
  url?: string;
  disabled: boolean
};
// ==============================================================

const ServiceDetailCard: FC<Props> = ({service_id, id,image, title, url, color, category,disabled }) => {
 console.log("test serivce_id", service_id);
 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="shadow-lg h-100">
   {/* <Link href= {`/services/service-details-main/service-inside/?service_id=${service_id}&id=${id}`}> */}
      <figure className="card-img-top">
          <Image src={image || NOTFOUND.src} width={285} height={285} alt={title}
          style={{
            width: "100%"
          }}/>
      </figure>

      <div className="card-body p-5">
        
        <h3 className="fs-19 text-center text-main mb-0">{title || "ไม่พบข้อมูล"}</h3>
        
        </div>
        {/* </Link> */}
      </div>
  );
};

export default ServiceDetailCard;
