import { FC, useEffect } from 'react';
import { blogNews } from 'data/3DTVTech/Blog-NewsData/blognewsList';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import color from 'utils/color';
// ..

const Blognewshomerow: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="row justify-content-start"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-delay="300"
      data-aos-easing="ease"
    >
      <div className="blog classic-view  col-md-6">
        <figure className="overlay overlay-1 hover-scale">
          {/* <Link href="../blogs-single-project/?id=1"> */}
          <Link href="/blogs/blogs-single-project/?id=1">
            <img src={blogNews[0].image} className="w-100 " alt={blogNews[0].title} />
            <span className="bg" />
          </Link>
          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>
      </div>

      <div className="col-md-5 mt-2 mt-md-0 mt-sm-2 ">
        <div
          className="h-100"
          style={{
            display: 'inline-grid'
          }}
        >
          <h1
            style={{
              color: '#00000'
            }}
          >
            <Link
              href="/blogs/blogs-single-project/?id=1"
              className=""
              style={
                {
                  color: "#3175D1"
                }
              }
            >
              {blogNews[0].title}
            </Link>
          </h1>
          <div className="content flex-grow-1 ">
            <p>{blogNews[0].content1}</p>
            <p>{blogNews[0].content2}</p>
          </div>
          <div
            className="row"
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'end'
            }}
          >
            <div className="col-6 ">{blogNews[0].createdAt}</div>
            <div className="col-6 text-end">
              <Link
                href="/blogs/blogs-single-project/?id=1"
                className=""
                style={
                  {
                    color: "#3175D1"
                  }
                }
              >
                <b>READ MORE</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blognewshomerow;
