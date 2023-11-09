import { FC, Fragment, useEffect } from 'react';
// -------- data -------- //
import { categoryList } from 'data/3DTVTech/categoryList';
import Image from 'next/image';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const CategoryHome: FC = () => {
  
  useEffect(()=>{
    //AOS.init();
  },[])

  return (
    
    <Fragment>
      <div className="row pt-9 pt-md-9">
        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center" 
        // style={slideInDownAnimate('1000ms')}
        >
          <h2 className="text-main text-uppercase display-6" data-aos="fade-down" data-aos-duration="800" data-aos-delay="500">Who you are?</h2>
          <p className="fs-18 mt-0 mb-8 mb-md-9 " data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" 
           style={
            {
              color: "#737373"
            }
          }>
            Let us help you find the right information for you.
          </p>
        </div>
      </div>

      <div className="row gx-md-0 gy-1 text-center" data-aos="fade-up" data-aos-duration="800" >
        {categoryList.map((item) => (
          // <Link href={item.url || "#"} className="col-md-6 col-lg-4 col-xl-3 col-xxl-3 mx-auto text-center"
          // เข้าจาก id
          <Link href={`../whoyouare/?id=${item.id}`} className="col-md-6 col-lg-4 col-xl-3 col-xxl-3 mx-auto text-center"
          // style={zoomInAnimate('1800ms')}
          key={item.id}
          >
            <Image src={item.image} alt={item.title} width={128} height={128} draggable={false} />
            <h3 className="fs-15 mb-0  mt-1 mb-10" 
              style={
                {
                  color: "#737373"
                  
                }
              }
            >{item.title} </h3>
          </Link>
        ))}
      </div>
      
    </Fragment>

             
  );
};

export default CategoryHome;
