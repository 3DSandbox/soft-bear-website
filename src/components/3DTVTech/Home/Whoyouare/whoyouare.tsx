import { FC, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { WHOWEARE } from 'assets';
// ..

const WhoweareComp: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row mt-5">
      <div className="col-12 col-md-6">
        <div className="row" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
          <h2
            className="col-12 col-md-12 text-main fs-28 text-uppercase mb-0"
            style={{
              fontWeight: 'bold'
            }}
          >
            Who we are
          </h2>
          <h1
            className="col-12 mb-3 text-main fs-28 text-uppercase"
            style={{
              color: '#C3C3C3',
              fontWeight: 'bold'
            }}
          >          
              A NEW MEDIA <br></br>DEVELOPMENT STUDIO     
          </h1>
          <p className="col-12 fs-18" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
            เราคือทีมพัฒนาเทคโนโลยีสมัยใหม่ด้วยความก้าวหน้าด้านเทคโนโลยีรวมไปถึงการเปลี่ยนแปลงของผู้บริโภค
            และการเปิดตัวแพลตฟอร์มใหม่ อย่างต่อเนื่อง เราจึงต้องพร้อมและพัฒนาเทคโนยีเพื่อเพิ่มความสามารถและความโดดเด่นในการแข่งขันในทุกแพลตฟอร์มให้กับลูกค้าอยู่เสมอ
          </p>

          <div className="col-12"></div>

          <p className="col-12 fs-18" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
            ด้วยประสบการณ์การพัฒนามีเดียมาอย่างยาวนานและเข้าใจถึงความท้าทายของการแข่งขันในปัจจุบัน
            เราพร้อมจะก้าวไปข้างหน้าสร้างประสบการณ์ที่ล้ำสมัยไม่เหมือนใครไปพร้อมกับคุณ
          </p>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div
          className="h-100 d-flex justify-content-center align-items-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-easing="ease"
        >
          {/* pic for phone */}
          <Image
            src={WHOWEARE.src}
            width={630}
            height={420}
            alt="coverhome"
            className="d-md-none w-30 h-auto rounded shadow"
            draggable="false"
            style={{
              width: "100%"
            }}
          />
          {/* pic for pc */}
          <Image
            src={WHOWEARE.src}
            width={630}
            height={420}
            alt="coverhome"
            className="d-none d-md-block h-auto rounded shadow "
            draggable="false"
            style={{
              width: "100%"
            }}
          />
        </div>
      </div>

      <hr
        className="mt-5 mb-0"
        style={{
          // borderColor: 'lime',
          height: '0px',
          width: ''
        }}
      ></hr>
    </div>
  );
};

export default WhoweareComp;
