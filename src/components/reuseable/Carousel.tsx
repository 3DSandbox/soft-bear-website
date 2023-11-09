import { Icon } from '@iconify/react';
import { FC, Fragment, ReactElement, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// ==================================================================
interface CarouselProps extends SwiperProps {
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slideClassName?: string;
  children: ReactElement[];
  slidesPerView?: number | 'auto';
  loop?: boolean;
  interval?: number;
}
// ==================================================================

const Carousel: FC<CarouselProps> = ({
  children,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  loop = true,
  interval,

  ...others
}) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  console.log({ ...others });

  return (
    <Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        // slidesPerView={slidesPerView}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={navigation ? { prevEl, nextEl } : false}
        pagination={pagination ? { clickable: true, el: paginationEl } : false}
        loop={loop}
        {...others}
      >
        {children.map((slide, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-controls">
        {/* custom navigation */}
        {navigation && (
          <div className="swiper-navigation">
            <div
              role="button"
              ref={(node) => setPrevEl(node)}
              className="swiper-button  "
              style={{
                left: '3rem',
                top: '40%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
              }}
            >
              <Icon icon="icon-park-solid:left-two" />
            </div>
            <div
              role="button"
              ref={(node) => setNextEl(node)}
              className="swiper-button  "
              style={{
                right: '3rem',
                top: '40%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999
              }}
            >
              <Icon icon="icon-park-solid:right-two" />
            </div>
            {/* <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev">
              <Icon icon="icon-park-solid:left-two" />
            </div>
            <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next">
            <Icon icon="icon-park-solid:right-two" />
            </div> */}
          </div>
        )}

        {/* custom pagination */}
        {pagination && <div className="swiper-pagination" ref={(node) => setPaginationEl(node)} />}
      </div>
    </Fragment>
  );
};

export default Carousel;
