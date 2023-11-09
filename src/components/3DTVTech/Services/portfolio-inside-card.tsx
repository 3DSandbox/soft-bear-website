import { FC, useEffect } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND } from 'assets';
// ..

// ==============================================================
type Props = {
  id: number;
  image: string | StaticImageData;
  // image: string;
  title: string;
};
// ==============================================================

const PortfolioInsideCard: FC<Props> = ({ id, image, title }) => {
  // const handleGetBase64 = (imageFile)=>{

  // }

  useEffect(() => {
    AOS.init();

    console.log('File ......... ', image, 'type of ');
  }, []);

  return (
    <PhotoProvider>
      <div className="d-flex flex-column ">
        <figure className="m-5 m-md-0" title='click to zoom the image'>
          <PhotoView src={image ? (typeof image == 'object' ? (image as StaticImageData).src : image) : NOTFOUND.src}>
            <Image src={image || NOTFOUND.src} width={285} height={285} alt={title || 'Portfolio Pic'} 
            style={{
              cursor: 'pointer'
            }}/>
          </PhotoView>

          <p
            className="fs-16 text-center mt-8"
            style={{
              fontWeight: 'bold'
            }}
          >
            {title}
          </p>
        </figure>
      </div>
    </PhotoProvider>
  );
};

export default PortfolioInsideCard;
