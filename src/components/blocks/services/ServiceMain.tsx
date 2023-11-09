import { FC, Fragment } from 'react';
import { ServiceCard2 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList2 } from 'data/service';

const ServiceMain: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h1 className="text-main text-uppercase">Who you are ?</h1>
          <h2 className="fs-15 text-uppercase text-muted mb-15 ">Let us help you find the right information for you.</h2>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17 ">
        {serviceList2.map((item,index) => (
          <ServiceCard2 key={index} {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default ServiceMain;
