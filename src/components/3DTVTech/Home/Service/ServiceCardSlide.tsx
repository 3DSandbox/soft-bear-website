import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import currency from 'utils/currency';

import ratingGenerate from 'utils/ratings';

// =========================================
type ServiceCardSlideProps = {
  image: string;
  title: string;
  id: number;
};
// =========================================

const ServiceCardSlide: FC<ServiceCardSlideProps> = (props) => {
  const { image, id, title } = props;

  const badge = (title: string, color: string) => {
    return (
      <span
        style={{ top: '1rem', left: '1rem' }}
        className={`avatar ${color} text-white w-10 h-10 position-absolute text-uppercase fs-13`}
      >
        <span>{title}</span>
      </span>
    );
  };

  return (
    <div className={`project item`} data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease">
      <Link href={`/services/service-details-main/?service_id=${id}`}>
        <figure className="rounded mb-6 position-relative overflow-hidden">
          <Image src={image} width={512} height={512} alt={title} />

          <p className="item-cart bg-blue">
            {title}
          </p>
        </figure>
      </Link>
    </div>
  );
};

export default ServiceCardSlide;
