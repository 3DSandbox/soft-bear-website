import { FC, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const ServicesFooter: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="wrapper mt-5 pt-12 pb-12"
      style={{
        backgroundColor: '#F3F3F3'
      }}
    >
      <div className="text-center mx-4 mx-md-0">
        <p className="lead fs-28 fw-bold" data-aos="flip-up" data-aos-duration="1200" data-aos-easing="ease">
          “ตอบโจทย์ทุกความต้องการของการของคุณ<br></br>ในจัดงานออนไลน์หรือออนกราวด์อีเว้นต์”
        </p>
        <p className="fs-18 " data-aos="flip-down" data-aos-duration="1200" data-aos-easing="ease">
          ให้เทคโนโลยีของเราช่วยคุณออกแบบอีเวนต์ได้ในทุกรูปแบบ
        </p>
      </div>
    </div>
  );
};

export default ServicesFooter;
