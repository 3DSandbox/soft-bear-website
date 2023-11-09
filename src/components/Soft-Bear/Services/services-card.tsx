import { FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

// ==============================================================
type Props = {
  id: number;
  image: string;
  title: string;
  color?: string;
  category: string;
};
// ==============================================================

const ServicesCard: FC<Props> = ({ id,image, title, color, category }) => {
  
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="d-flex flex-column shadow-lg h-100"  data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease">
      <figure className="card-img-top">
        <Link href={`/services/service-details-main/?service_id=${id}`}>
          <Image src={image} width={285} height={285} alt={category} />
        </Link>
      </figure>

      <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
          <Link href={`/services/service-details-main/?service_id=${id}`}>
            <h2 className="fs-18 text-center text-main mb-0">{category}</h2>
            </Link>
        </div>
      </div>
  );
};

export default ServicesCard;


// const ServicesCard: FC<Props> = ({ id, image, title, color, category }) => {
//   return (
//     <div className="d-flex flex-column shadow-lg h-100">
//       <figure className="card-img-top" title="Click to see the project">
//         <Link href={`/service-detail-main/?service_id=${id}`}>
//           <Image src={image} width={285} height={285} alt={category} />
//         </Link>
//       </figure>

//       <div className="card-body px-2 py-5 d-flex align-items-center justify-content-center">
//           <Link href={`/service-detail-main/?service_id=${id}`}>
//             <h2 className="fs-18 text-center text-main mb-0">{category}</h2>
//           </Link>
        
//       </div>
//     </div>
//   );
// };