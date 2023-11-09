import { FC, Fragment } from 'react';
import { ServiceCard2 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceJ, serviceList2 } from 'data/service';

const ServiceJ: FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3 ">Let us help you find the right info by telling us</h2>
          <h3 className="display-4 mb-5 mb-10">Who you are ?</h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
        {serviceJ.map((item) => (
          <ServiceCard2 key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default ServiceJ;
