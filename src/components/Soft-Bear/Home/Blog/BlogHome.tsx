import { BLOGMOCK } from 'assets';
import FigureImage from 'components/reuseable/FigureImage';
import { FC, useEffect } from 'react';

// ..

const BlogHome: FC = () => {
    return (
        <div className="container">
        <h2 className="text-center text-main mt-7 display-6"  data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100">Blogs</h2>
        <div className="cotainer">
          <div className="row mt-5 pb-10 d-flex justify-content-center align-items-center" >
           
            {/* blog 01 */}
            <div className="item post col-md-4" data-aos="zoom-in" data-aos-duration="800">
              <div className="card">
                <figure className="card-img-top  overlay overlay-1 hover-scale">
                  <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                  <figcaption>
                    <h5 className="from-top mb-0">Read More</h5>
                  </figcaption>
                </figure>
                <div className="card-body">
                  <div className="post-header">
                    <div className="post-category text-line ">TECHNOLOGY</div>
                    <p className="post-title fs-18 mt-1 mb-3 ">
                      "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
            {/* blog 02 */}
            <div className="item post col-md-4" data-aos="zoom-in" data-aos-duration="800">
              <div className="card">
                <figure className="card-img-top  overlay overlay-1 hover-scale">
                  <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                  <figcaption>
                    <h5 className="from-top mb-0">Read More</h5>
                  </figcaption>
                </figure>
                <div className="card-body">
                  <div className="post-header">
                    <div className="post-category text-line ">TECHNOLOGY</div>
                    <p className="post-title fs-18 mt-1 mb-3 ">
                      "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                    </p>
                  </div>
                </div>
              </div>
            </div>
        
            {/* blog 03 */}
            <div className="item post col-md-4" data-aos="zoom-in" data-aos-duration="800">
              <div className="card">
                <figure className="card-img-top  overlay overlay-1 hover-scale">
                  <FigureImage width={560} height={350} src={BLOGMOCK.src} />
                  <figcaption>
                    <h5 className="from-top mb-0">Read More</h5>
                  </figcaption>
                </figure>
                <div className="card-body">
                  <div className="post-header">
                    <div className="post-category text-line ">TECHNOLOGY</div>
                    <p className="post-title fs-18 mt-1 mb-3 ">
                      "Virtual Experience เข้าสู่โลกเสมือนจริง ในยุค New Normal"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    );
};

export default BlogHome;
