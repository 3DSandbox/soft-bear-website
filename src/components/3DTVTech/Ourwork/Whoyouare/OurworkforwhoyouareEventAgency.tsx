import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- data -------- //
// import { portfolioList2 } from 'data/3DTVTech/Serivcesweprovide/serviceweprovideList';
import {EventAgency} from 'data/3DTVTech/WhoyouareData/whoyouareList';

import CountUp from 'react-countup';

const OurworkforwhoyouareEcentAgency: FC = () => {
  return (

    <section className="wrapper">


      {/* <div className="container py-14 py-md-17"> */}
      <div className="container">

        <div className="row mb-2 text-center">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          </div>
        </div>

        <div className="grid grid-view projects-masonry">

          <div className="row">
            {EventAgency.map(({ id, image, title, category, color, content1, content2, content3, content4 }) => (
              <div className="col-sm-3 col-md-3 col-lg-3 mb-7" key={id}>
                <figure className="rounded mb-3">
                      <Image
                        width={350}
                        height={350}
                        src={image}
                        alt={title}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                </figure>

                <div className="project-details d-flex justify-content-center flex-column">
                  <div className="post-header">
                    <div className={`fs-18 post-category text-${color}`}>{title}</div>
                    <p className='mb-0'>{content1 || ""}</p>
                    <p className='mb-0'>{content2 || ""}</p>
                    <p className='mb-0'>{content3 || ""}</p>
                    <p className='mb-0'>{content4 || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurworkforwhoyouareEcentAgency;
