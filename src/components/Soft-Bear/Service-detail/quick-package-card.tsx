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
  texts: string[];
};
// ==============================================================

const QuickPackageCard: FC<Props> = ({service_id, image, texts}) => {
 console.log("test serivce_id", service_id);
 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="shadow-lg h-100"
    style={{
        backgroundColor: "#fbf828"
    }}>
   {/* <Link href= {`/services/service-details-main/service-inside/?service_id=${service_id}&id=${id}`}> */}
      <figure className="d-flex justify-content-center align-items-center">
          <Image src={image || NOTFOUND.src} width={285} height={285} alt="Quick Package" className='mt-6 '
          style={{
            width: "50%",
          }}/>
      </figure>

      <div className="card-body p-5">
        
        <ul>
            {texts.map((item,index) => (<li key={index}>{item}</li>))}
          
        </ul>
        
        </div>
        {/* </Link> */}
      </div>
  );
};

export default QuickPackageCard;
