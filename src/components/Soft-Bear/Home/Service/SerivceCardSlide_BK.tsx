import { url } from 'inspector';
import Image from 'next/image';
import { FC } from 'react';
import currency from 'utils/currency';

import ratingGenerate from 'utils/ratings';

// =========================================
type ServiceCardSlideProps = {
  image: string;
  title: string;
  new?: boolean;
  sale?: boolean;
  rating: number;
  category: string;
  salePrice?: number;
  className?: string;
  regularPrice: number;
  url?: string;
};
// =========================================

const ServiceCardSlide: FC<ServiceCardSlideProps> = (props) => {
  const { image, title, new: newProduct, sale, category, salePrice, regularPrice, url, rating, className = '' } = props;

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
    <div className={`project item ${className}`}>
      <figure className="rounded mb-6 position-relative overflow-hidden">

        {/* <img src={image} srcSet={`/img/photos/${image}@2x.jpg 2x`} alt={title} /> */}
        <Image src={image} width={512} height={512} alt={title} />
        

     

        <p className="item-cart bg-blue">
      <a href={url}>{title} </a>
        </p>
        
        {newProduct && badge('New!', 'bg-aqua')}
        {sale && badge('Sale!', 'bg-pink')}
      </figure>

     
    </div>
  );
};

export default ServiceCardSlide;
