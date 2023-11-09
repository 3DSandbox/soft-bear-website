import { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import FooterMain from 'components/3DTVTech/FooterMain';

import { Icon } from '@iconify/react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Image from 'next/image';
import { auto } from '@popperjs/core';
import { BANNER25, IC_ALLOWANCE, IC_HEATH01, IC_OT, QRLINE, WHEREWEARE, WHOWEARE, WORKTIME } from 'assets';
import Head from 'next/head';
import WhoweareComp from 'components/3DTVTech/Home/Whoyouare/whoyouare';
import Link from 'next/link';
// ..

const Page: NextPage = () => {
  const links = [
    { id: 1, icon: 'uil:facebook', name: 'Facebook', color: 'white', url: 'https://www.facebook.com/3DTVTech' },
    { id: 2, icon: 'uil:instagram', name: 'Instagram', color: 'white', url: 'https://www.instagram.com/3dtvtech/' },
    { id: 3, icon: 'iconoir:tiktok', name: 'Tiktok', color: 'white', url: 'https://www.tiktok.com/@3dtvtech' },
    { id: 4, icon: 'uil:youtube', name: 'Youtube', color: 'white', url: 'https://www.youtube.com/@3DTVTech' }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Career</title>
        <meta
          name="description"
          content="บริษัท 3DTV-Tech พร้อมให้บริการ ผลิตสื่อ New Media ผ่าน Platform ต่าง ๆ สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ผ่านช่องทางและรายละเอียดตามนี้ ติดต่อโทร: 083-759-8799 หรือ Email: info@3dtv-tech.com LineID: ajima-puk"
        />
        <meta
          name="keyword"
          content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="wrapper bg-gray">
        {/* <NavbarMain navClassName="navbar navbar-expand-lg center-nav transparent navbar-light navbar-bg-light" social /> */}
        <NavbarMain
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
          social
        />
      </header>

      <section
        className="wrapper bg-image"
        data-aos="zoom-up"
        style={{ backgroundImage: `url(${BANNER25.src})`, height: '440px' }}
      >
        <div className="container pt-16 pt-md-18 pb-12 pb-md-18 pb-lg-15">
          <div className="row mt-5">
            <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto text-center">
              <h2 className="display-1 mt-0 mb-0 px-xl-12 text-white" data-aos="fade-zoom-in" data-aos-duration="1500">
                3DTV-Tech
              </h2>
              <p
                className="lead mt-5 fs-22 text-white"
                data-aos="fade-zoom-in"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                “Creative Thinking and Technological Expertise”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* test whowearecomp */}
      {/* <div className="container mt-10">
        <WhoweareComp />
      </div> */}

      <div className="container mt-10">
        <div className="row mt-5 ">
          {/* colum ซ้าย ข้อความ */}
          <div className="col-12 col-md-6">
            <div className="row " data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
              <h2
                className="col-12 col-md-12 text-main fs-28 text-uppercase mb-0"
                style={{
                  fontWeight: 'bold'
                }}
              >
                We are Hiring
              </h2>
              <p className="col-12 fs-18 " data-aos="fade-right" data-aos-duration="800" data-aos-delay="300" >
                เรากำลังมองหาบุคลากร ผู้มีความพร้อมที่จะก้าวไปข้างหน้ากับเรา ไม่ว่าจะเป็นด้านความสามารถ หรือวิสัยทัศน์
                ทัศนคติและมุมมอง ร่วมเป็นส่วนหนึ่งในทีมของเรา บริษัท 3DTV-Tech
                เพื่อสร้างผลลัพธ์ที่มีประสิทธิภาพไปด้วยกัน
              </p>
            </div> 
                
            <div className="row mt-10 mb-5 ">
              <div className="col-12 fs-18 " data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
                  <div className="col-12 ">
                    <h2 className="fs-28 text-main ">สนใจติดต่อสมัครงาน</h2>
                    <div className="row">
                      <div className="col-12 ">Email : jobs@3dtv-tech.com</div>
                    </div>
                  </div>          
              </div>
            </div>
          </div>
                {/* colum ขวา photo */}
          <div className="col-12 col-md-6 ">
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
                  width: '100%'
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
                  width: '100%'
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
      </div>

      {/* ตำแหน่งที่เปิดรับ */}
      <section>
        <div className="container my-10">
          <div className="row ">
            <div className="col-xl-5 col-sm-12 ">
              <h2 className="fs-28 text-main ">ตำแหน่งที่เปิดรับ</h2>
            </div>

            {/* phone ver */}
            <div className="col-xl-5  col-sm-12 px-5 d-md-none  ">
              <p>
                <a
                  className="btn "
                  data-bs-toggle="collapse"
                  href="#collap01"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ backgroundColor: '#E0E0E0', width: '100%' }}
                >
                  Senior Unity Developer (1)
                </a>
              </p>
              <div
                className="collapse"
                id="collap01"
                style={{
                  width: '100%'
                }}
              >
                <div className="card card-body mt-n3 mb-1 ">
                  รายละเอียดงาน:
                  <ul>
                    <li>พัฒนา Application เช่น interactive หรือเกมส์ บน Unity Platform</li>
                    <li>พัฒนา Software เชื่อมต่อกับ Hardware เช่น HoloLens, Arduino</li>
                    <li>Skill: C#, Unity Script</li>
                    <li>ใช้ Version Control เช่น Git ได้</li>
                    <li>ไม่จำเป็นต้องมีประสบการณ์</li>
                  </ul>
                  คุณสมบัติ
                  <ul>
                    <li>มีความสามารถในการเขียนโค้ดด้วย Unity</li>
                    <li>เข้าใจ OOP</li>
                    <li>ความรับผิดชอบสูง สามารถทำงานเป็นทีมได้</li>
                    <li>มนุษย์สัมพันธ์ดี ขยัน อดทน</li>
                    <li>สามารถทำงานล่วงเวลาได้</li>
                    <li>มีประสบการณ์และมีใบขับขี่จะพิจารณาเป็นพิเศษ</li>
                  </ul>
                </div>
              </div>
              <p>
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collap02"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ backgroundColor: '#E0E0E0', width: '100%' }}
                >
                  นักศึกษาฝึกงาน (Internship)
                </a>
              </p>
              <div
                className="collapse"
                id="collap02"
                style={{
                  width: '100%'
                }}
              >
                <div className="card card-body mt-n3 mb-1">-</div>
              </div>
            </div>

            {/* pc ver */}
            <div className="col-xl-5 col-sm-12 px-5 mt-5 d-none d-md-block">
              <p className="d-inline-flex gap-1">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collap01"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ backgroundColor: '#E0E0E0', width: '36rem' }}
                >
                  Senior Unity Developer (1)
                </a>
              </p>
              <div
                className="collapse"
                id="collap01"
                style={{
                  width: '36rem'
                }}
              >
                <div className="card card-body mt-n3 mb-1 ">
                  รายละเอียดงาน:
                  <ul>
                    <li>พัฒนา Application เช่น interactive หรือเกมส์ บน Unity Platform</li>
                    <li>พัฒนา Software เชื่อมต่อกับ Hardware เช่น HoloLens, Arduino</li>
                    <li>Skill: C#, Unity Script</li>
                    <li>ใช้ Version Control เช่น Git ได้</li>
                    <li>ไม่จำเป็นต้องมีประสบการณ์</li>
                  </ul>
                  คุณสมบัติ
                  <ul>
                    <li>มีความสามารถในการเขียนโค้ดด้วย Unity</li>
                    <li>เข้าใจ OOP</li>
                    <li>ความรับผิดชอบสูง สามารถทำงานเป็นทีมได้</li>
                    <li>มนุษย์สัมพันธ์ดี ขยัน อดทน</li>
                    <li>สามารถทำงานล่วงเวลาได้</li>
                    <li>มีประสบการณ์และมีใบขับขี่จะพิจารณาเป็นพิเศษ</li>
                  </ul>
                </div>
              </div>

              <p className="d-inline-flex gap-1">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collap02"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  style={{ backgroundColor: '#E0E0E0', width: '36rem' }}
                >
                  นักศึกษาฝึกงาน (Internship)
                </a>
              </p>
              <div
                className="collapse"
                id="collap02"
                style={{
                  width: '36rem'
                }}
              >
                <div className="card card-body mt-n3 mb-1">-</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* สวัสดิการของเรา */}
      <div className="container">
        <h2
          className="fs-28 mt-4 text-main text-uppercase mb-0"
          style={{
            fontWeight: 'bold'
          }}
        >
          สวัสดิการของเรา
        </h2>

        <div className="container py-5 g-2">
          <div className="row mt-5  gy-6 justify-content-center">
            <div
              className="col-xl-3 col-sm-12  text-center"
              data-aos="zoom-in"
              data-aos-easing="ease"
              data-aos-duration="600"
            >
              <Image
                src={IC_HEATH01}
                width={60}
                height={60}
                alt="iconpic"
                draggable="false"
                className=""
                style={{
                  height: 'auto'
                }}
              ></Image>

              <hr
                className="p-0 my-2 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#3175D1',

                  margin: 'auto'
                }}
              ></hr>
              <p className="fs-18 py-2 mx-3 ">ประกันสังคม</p>
            </div>

            <div
              className="col-xl-3 col-sm-12 text-center"
              data-aos="zoom-in"
              data-aos-easing="ease"
              data-aos-duration="600"
            >
              <Image
                src={IC_ALLOWANCE}
                width={60}
                height={60}
                alt="iconpic"
                draggable="false"
                className=""
                style={{
                  height: 'auto'
                }}
              ></Image>

              <hr
                className="p-0 my-2 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#3175D1',
                  margin: 'auto'
                }}
              ></hr>
              <p className="fs-18 py-2 mx-3">กองทุนสำรองเลี้ยงชีพ</p>
            </div>

            <div
              className="col-xl-3 col-sm-12 text-center"
              data-aos="zoom-in"
              data-aos-easing="ease"
              data-aos-duration="600"
            >
              <Image
                src={IC_HEATH01}
                width={60}
                height={60}
                alt="iconpic"
                draggable="false"
                className=""
                style={{
                  height: 'auto'
                }}
              ></Image>

              <hr
                className="p-0 my-2 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#3175D1',
                  margin: 'auto'
                }}
              ></hr>
              <p className="fs-18 py-2 mx-3">โบนัสประจำปี (ขึ้นอยู่กับผลงาน)</p>
            </div>

            <div
              className="col-xl-3 col-sm-12 text-center "
              data-aos="zoom-in"
              data-aos-easing="ease"
              data-aos-duration="600"
            >
              <Image
                src={IC_OT}
                width={60}
                height={60}
                alt="iconpic"
                draggable="false"
                className=""
                style={{
                  height: 'auto'
                }}
              ></Image>

              <hr
                className="p-0 my-2 "
                style={{
                  height: '3px',
                  width: '4rem',
                  backgroundColor: '#3175D1',
                  margin: 'auto'
                }}
              ></hr>
              <p className="fs-18 py-2 mx-3">OT (เบี้ยเลี้ยง)</p>
            </div>
          </div>
        </div>
        <hr className="my-1" />
      </div>

      <div className="container my-10  d-flex align-items-center justify-content-center">
        <div className="row  ">
          <div className="col-xl-6 col-sm-12">
            <div className="row">
              <div className="col-xl-1  col-sm-12 d-flex align-items-center justify-content-center ">
                <Image src={WHEREWEARE.src} width={50} height={50} alt="icon" className="h-7 w-auto"></Image>
              </div>
              <div className="col-sm-12 col-xl-6 fs-22 text-main" 
              style={{
                fontWeight: "bold"
              }}>สถานที่ปฏิบัติงาน</div>
            </div>

            <div className="row ">
              <div className="col-xl-1 col-sm-12"></div>
              <div className="col-xl-6 col-sm-12">
                บริษัท สามดีทีวีเทค จำกัด 47/1 ซ.เทพทวี 2 (ศรีนครินทร์ 11) ถ.ศรีนครินทร์ แขวงสวนหลวง เขตสวนหลวง กทม.
                10250
              </div>
            </div>
          </div>

          <div className="col-xl-6  col-sm-12">
            <div className="row mt-md-0 mt-10">
              <div className="col-xl-1  col-sm-12 d-flex align-items-center justify-content-center ">
                <Image src={WORKTIME.src} width={50} height={50} alt="icon" className="h-7 w-auto"></Image>
              </div>
              <div className="col-sm-12 col-xl-6 fs-22 text-main" 
              style={{
                fontWeight: "bold"
              }}>Work Time:</div>
            </div>

            <div className="row">
              <div className="col-xl-1 col-sm-12"></div>
              <div className="col-xl-6 col-sm-12">Mon. - Fri. 09:30 - 18:30</div>
            </div>
          </div>
        </div>
      </div>

      {/* v pc */}
      {/* <div className="container d-none d-md-block  my-10">
        <div
          className="row "
          style={{
            margin: 'auto',
            paddingLeft: '8rem'
          }}
        >
          <div className="col-xl-6 col-sm-12">
            <div className="col-xl-8 col-sm-12 ">
              <div className="col-xl-10 col-sm-12">
                <div className="row">
                  <div
                    className="col-xl-9 col-sm-12 text-main fs-18"
                    style={{
                      fontWeight: 'bold'
                    }}
                  >
                    Contact:
                  </div>
                  <div className="col-xl-3 col-sm-12 text-main fs-18 d-flex justify-content-center align-items-center">
                    {' '}
                    <Image src={QRLINE} width={100} height={100} alt="QRLine" draggable="false"></Image>
                  </div>
                </div>

                <div className="row mt-2 mt-md-n11 d-md-none">
                  <div className="col-xl-12 col-sm-12 d-flex justify-content-center align-items-center ">
                    Tel: 083-759-8799
                  </div>
                  <div className="col-xl-12 col-sm-12 d-flex justify-content-center align-items-center ">
                    LineID :{' '}
                    <Link
                      href="https://line.me/ti/p/~ajima-puk"
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                      }}
                    >
                      ajima-puk
                    </Link>
                  </div>
                </div>

                <div className="row mt-2 mt-md-n11 d-none d-md-block">
                  <div className="col-xl-12 col-sm-12">Tel: 083-759-8799</div>
                  <div className="col-xl-12 col-sm-12">
                    LineID :{' '}
                    <Link
                      href="https://line.me/ti/p/~ajima-puk"
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                      }}
                    >
                      ajima-puk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-sm-12 mt-5 mt-md-0 ">
            <div className="col-xl-5 col-sm-12  ">
              <div className="row ">
                <div
                  className="col-xl-12 col-sm-12 text-main fs-18"
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  General Email:
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-sm-12">info@3dtv-tech.com</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* v phone */}
      {/* <div className="container my-10 d-md-none">
        <div
          className="row "
          style={{
            margin: 'auto',
            paddingLeft: ''
          }}
        >
          <div className="col-xl-6 col-sm-12">
            <div className="col-xl-8 col-sm-12 ">
              <div className="col-xl-10 col-sm-12">
                <div className="row">
                  <div
                    className="col-xl-9 col-sm-12 text-main fs-18"
                    style={{
                      fontWeight: 'bold'
                    }}
                  >
                    Contact:
                  </div>
                  <div className="col-xl-3 col-sm-12 text-main fs-18 d-flex justify-content-center align-items-center">
                    {' '}
                    <Image src={QRLINE} width={100} height={100} alt="QRLine" draggable="false"></Image>
                  </div>
                </div>

                <div className="row mt-2 mt-md-n11 d-md-none">
                  <div className="col-xl-12 col-sm-12 d-flex justify-content-center align-items-center ">
                    Tel: 083-759-8799
                  </div>
                  <div className="col-xl-12 col-sm-12 d-flex justify-content-center align-items-center ">
                    LineID :{' '}
                    <Link
                      href="https://line.me/ti/p/~ajima-puk"
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                      }}
                    >
                      ajima-puk
                    </Link>
                  </div>
                </div>

                <div className="row mt-2 mt-md-n11 d-none d-md-block">
                  <div className="col-xl-12 col-sm-12">Tel: 083-759-8799</div>
                  <div className="col-xl-12 col-sm-12">
                    LineID :{' '}
                    <Link
                      href="https://line.me/ti/p/~ajima-puk"
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                      }}
                    >
                      ajima-puk
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-sm-12 mt-5 mt-md-0 ">
            <div className="col-xl-5 col-sm-12  ">
              <div className="row ">
                <div
                  className="col-xl-12 col-sm-12 text-main fs-18"
                  style={{
                    fontWeight: 'bold'
                  }}
                >
                  General Email:
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-sm-12">info@3dtv-tech.com</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <FooterMain />
    </Fragment>
  );
};

export default Page;
