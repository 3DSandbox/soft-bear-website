import { FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND } from 'assets';
import { TFeauresinside } from '../../../../pages/porfolio-inside-main';
// ..

// ==============================================================
type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  url: string;
};
// ==============================================================

const FeauturesInsideCard: FC<TFeauresinside> = ({ id,image, title, description, url }) => {
  
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="d-flex flex-column shadow-lg h-100 "  data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
      <figure className="card-img-top">
        {/* <Link href={`/services/service-details-main/?service_id=${id}`}> */}
          <Image src={image || NOTFOUND.src} width={285} height={285} alt={title} />
        {/* </Link> */}
      </figure>

      <div className="card-body px-2 py-5">
          {/* <Link href={`/services/service-details-main/?service_id=${id}`}> */}
            <h2 className="fs-18 text-center text-main p-0 my-2">{title}</h2>
            {/* </Link> */}
            <p>{description}</p>
        </div>
      </div>
  );
};

export default FeauturesInsideCard;

