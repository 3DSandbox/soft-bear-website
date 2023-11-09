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
import {
  QRLINE,
  WHEREWEARE,
} from 'assets';
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
        <title>3DTV-Tech</title>
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

      <section className="mt-13">
        <div className="container p-5">
          <h2
            className="fs-28 mt-4 text-main text-uppercase mb-0"
            style={{
              fontWeight: 'bold'
            }}
          >
            CONTACT/ 
          </h2>

          <h2
            className="fs-28 text-main"
            style={{
              color: '#C3C3C3'
            }}
          >
            GET IN TOUCH WITH US
          </h2>
        </div>
      </section>

      <section>
        <div className="container p-5">
          <div className="row">
            {/* colum ซ้ายมือ */}
            <div className="col-6">
              <div className="row">
                <div className="col-xl-1 col-sm-12"><Image src={WHEREWEARE.src} width={50} height={50} alt="QRLine"></Image></div>
                <div className="col-xl-5 col-sm-12 fs-23 text-main">Where we are:</div>
              </div>
              
              <div className="row">
                <div className="col-1"></div>
                <div className="col-7 fs-16">
                  บริษัท สามดีทีวีเทค จำกัด 47/1 ซ.เทพทวี 2 (ศรีนครินทร์ 11) ถ.ศรีนครินทร์ แขวงสวนหลวง เขตสวนหลวง กทม.
                  10250
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-5 fs-23 text-main">General Email:</div>
              </div>
            
              <div className="row">
                <div className="col-1"></div>
                <div className="col-7 fs-16">info@3dtv-tech.com</div>
              </div>

              <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-5 fs-23 text-main">Contact:</div>
              </div>
             
              <div className="row">
                <div className="col-1"></div>
                <div className="col-7 fs-16">Tel: 083-759-8799</div>
                <div className="row">
                <div className="col-1"></div>
                <div className="col-7 fs-16">LineID : ajima-puk</div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                  <Image src={QRLINE.src} width={100} height={100} alt="QRLine" draggable="false"/>
                </div>
              </div>
           
            </div>

    {/* colum ขวามือ */}
            <div className="col-6">
              <div className="row mt-n5">
                <div className="col-12">ชื่อ</div>
                <label>
                  <input
                    type="text"
                    className="rounded"
                    name="name"
                    placeholder="โปรดระบุชื่อ-นามสกุลของคุณ"
                    style={{
                      width: '25rem',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#A8A8A8'
                    }}
                  />
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-12">อีเมล</div>
                <label>
                  <input
                    type="email"
                    className="rounded"
                    placeholder="โปรดระบุอีเมลของคุณ"
                    name="email"
                    style={{
                      width: '25rem',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#A8A8A8'
                    }}
                  />
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-12">เบอร์โทรศัพท์</div>
                <label>
                  <input
                    type="tel"              
                    className="rounded"                     
                    name="phone"
                    maxLength={10}
                    placeholder="โปรดระบุหมายเลขโทรศัพท์มือถือของคุณ"
                    style={{
                      width: '25rem',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#A8A8A8'               
                    }}
                  />
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-12">ประเภทการติดต่อ</div>
                <label>
                  <input
                    type="text"
                    className="rounded"
                    name="name"
                    placeholder="โปรดระบุข้อความของคุณ"
                    style={{
                      width: '25rem',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#A8A8A8'
                    }}
                  />
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-12">ข้อความ</div>
                <label>
                  <textarea
                    id=""
                    name="name"
                    className="rounded"
                    placeholder="โปรดระบุข้อความของคุณ"
                    rows={4}
                    cols={48}
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#A8A8A8'
                    }}
                  />
                </label>
              </div>

              <div className="row mt-3">
                <div className="col-9 d-flex justify-content-center align-items-center">
                  <a
                    href="#"
                    className="btn btn-primary fs-16"
                    style={{
                      width: '6rem',
                      height: 'auto'
                    }}
                  >
                    SEND
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 wrapper " 
      style={{
        padding: 0,
        margin: 0,
        height: "380px"
      }}>

  

        <iframe src="https://maps.google.com/maps?q=3dtv-tech&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" >
        </iframe>

      </div>

      <FooterMain />
    </Fragment>
  );
};

export default Page;
