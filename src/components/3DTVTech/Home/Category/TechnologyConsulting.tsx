import { FC, Fragment, useEffect } from 'react';
// -------- data -------- //
import { categoryList } from 'data/3DTVTech/categoryList';
import Image from 'next/image';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const TechnologyConsulting: FC = () => {
  useEffect(() => {
    //AOS.init();
  }, []);

  return (
    <Fragment>
      <div className="row pt-9 pt-md-9">
        <div
          className="col-md-10 col-lg-8 col-xl-7 col-xxl-10 mx-auto text-center"
        >
          <h2
            className="text-main text-uppercase display-6"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Technology Consulting
          </h2>
          <p
            className="fs-18 mt-0 mb-8 mb-md-9 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            style={{
              color: '#737373'
            }}
          >
           เทคโนโลยีดีจิทัล มีบทบาทอย่างมากให้นาดำเนินชีวิตของเรา การทำธุรกิจที่นำเอาเทคโนโลยีเข้ามาเป็นเรื่องจำเป็น<br/> เราสามารถช่วยท่านคิด ออกแบบ พัฒนาระบบ มาร่วมใช้กับองค์กรของท่าน
          </p>
        </div>
      </div>

      <div className="row gx-md-0 gy-1 text-center" data-aos="fade-up" data-aos-duration="800">
        {categoryList.map((item) => (
          <Link
            href={`../whoyouare/?id=${item.id}`}
            className="col-md-6 col-lg-4 col-xl-3 col-xxl-3 mx-auto text-center"
            key={item.id}
          >
            <Image src={item.image} alt={item.title} width={98} height={98} draggable={false} />
            
            <h3
              className="fs-18 my-5 text-main">
              {item.title}
              <hr
            className="mt-2 p-0 "
            style={{
              height: '3px',
              width: '4rem',
              backgroundColor: '#FF8812',
              margin: 'auto'
            }}
          ></hr>
            </h3>
            <p  className='mt-n2'>
              {item.detail}
            
            </p>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default TechnologyConsulting;
