import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- data -------- //
import { elearning } from 'data/3DTVTech/SerivcesweprovideData/serviceweprovideList';

import CountUp from 'react-countup';

const Ourworkelearning: FC = () => {
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
            {elearning.map(({ id, image, title, category, color, content }) => (
              <div className="col-3" key={id}>
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
                    <div className={`fs-17 post-category text-${color}`}>{title}</div>
                    <p>{content}</p>
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

export default Ourworkelearning;
