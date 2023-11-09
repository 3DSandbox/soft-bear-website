import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import PageProgress from 'components/common/PageProgress';
import NavbarMain from 'components/3DTVTech/NavbarMain';

// -------- data -------- //
import FooterMain from 'components/3DTVTech/FooterMain';
import { whoyouare } from 'data/3DTVTech/Services/dataList';
import ServicesCard from 'components/3DTVTech/Services/services-card';
import useLightBox from 'hooks/useLightBox';
import { Router, useRouter } from 'next/router';
import ServiceDetailType from 'components/3DTVTech/Service-detail/service-detail-type';
import ServiceDetailFeatures from 'components/3DTVTech/Service-detail/service-detail-features';
import { dataDelayMarkup } from 'markups/elements/animations';
import Whoyouaremain from 'components/3DTVTech/Whoyouare/whoyouare-main';
import Link from 'next/link';
import path from 'path';
import NextLink from 'components/reuseable/links/NextLink';
import { StaticImageData } from 'next/image';
import Head from 'next/head';

const Whoyouare: NextPage = () => {
  const { query } = useRouter();
  const [whoyouareData, setServiceData] = useState<any>();

  // ---coding พี่ biig---
  // useLightBox();

  // useEffect(() => {
  //   console.log(query.whoyouare_id);
  //   if (query?.whoyouare_id) {
  //     const data = whoyouare.find((item) => item?.id.toString() == query.whoyouare_id);
  //     console.log('found data', data);

  //     if (data != null) {
  //       setServiceData(data);
  //     }
  //   } else {
  //     const data = whoyouare.find((item) => item?.id.toString() == '1');

  //     console.log('found data', data);

  //     if (data != null) {
  //       setServiceData(data);
  //     }
  //   }
  //   console.log(dataDelayMarkup);
  // }, [query]);

  // ---coding พี่ tle---
  useEffect(() => {
    console.log(query.id);
    const data = whoyouare.find((item) => String(item?.id) == (query?.id?.length ? query?.id[0] : query?.id));
    setServiceData(data);

    if (data?.id == null) {
      // console.log('ไม่พบข้อมูล');
    }
  }, [query]);

  // ---test---
  // useLightBox();

  // useEffect(() => {
  //   console.log(query.id);
  //   if (query?.whoyouare_id) {
  //     const data = whoyouare.find((item) => item?.id.toString() == query.whoyouare_id?.toString());
  //     console.log('found data', data);

  //     if (data != null) {
  //       setServiceData(data);
  //     }
  //   } else {
  //     const data = whoyouare.find((item) => item?.id.toString() == '1');

  //     console.log('found data', data);

  //     if (data != null) {
  //       setServiceData(data);
  //     }
  //   }
  //   console.log(dataDelayMarkup);
  // }, [query]);

  
type TWhoyouare = {
  id: number,
  bgimage: string | StaticImageData,
  category: string,
  description1: string,
  description2: string,
  scatter1: string,
  scatter2: string,
  title: string,
  typeof: TTypecustomer,
  };

  type TTypecustomer = {
    id: number, 
    image: string | StaticImageData,
    title: string,
    detail: string,
  };




  return (

    <Fragment>
    <Head>
      <title>3DTV-Tech</title>
      <meta
        name="description"
        content="บริษัท 3DTV-Tech ได้ทำการเข้าถึงข้อมูลสำหรับการรับบริการต่าง ๆ ได้โดยง่ายจากคำถามที่ว่า คุณคือกลุ่มลูกค้าแบบใด กลุ่มธุรกิจหรือบริษัทใหญ่ อีเว้น เอเจน พิพิธภัณฑ์ หอศิลป โรงเรียนหรือกลุ่มการเรียนการสอน" 
      />
      <meta
        name="keyword"
        content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience"
      />
      <meta name="author" content="3DTV-Tech" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <PageProgress />



    {/* <Fragment> */}
      {/* <PageProgress /> */}
      {/* header */}
      <header className="wrapper bg-light">
        <NavbarMain
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
        />
      </header>

      <main className="content-wrapper">
        <section
          className="wrapper bg-image"
          data-aos="zoom-up"
          style={{
            backgroundImage: `url(${whoyouareData?.bgimage || ''})`,
            height: '440px'
          }}
        >
          <div className="container pt-12 pb-12 pb-md-18 pt-md-18 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto" data-aos="fade-zoom-in" data-aos-duration="1500">
                <h1
                  className="display-1 text-white mt-10 mt-lg-4"
                  style={{
                    width: 'auto'
                  }}
                >
                  {whoyouareData?.category || 'ไม่พบข้อมูล'}
                </h1>
              </div>
              <div className="row" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
                <p className="col-10 mx-auto  fs-22 text-white">{whoyouareData?.description1 || ''}</p>
                {/* ---อีก paragrap--- */}
                <p className="mx-1  fs-22 text-white">{whoyouareData?.description2 || ''}</p>                
              </div>
            </div>
          </div>
        </section>

        {/* content section */}
        <section>
          <div className="container mt-10 ">
            <div className="row m-5">
              <div className="col-md-8">
                <h2 className="display-6 d-md-none text-main" data-aos="fade-right" data-aos-duration="1500">
                  {whoyouareData?.title}
                </h2>

                <h2 className="display-3 d-none d-md-block text-main" data-aos="fade-right" data-aos-duration="1500">
                  {whoyouareData?.title}
                </h2>
              
              </div>
              <div className="container mt-2">
              <p className='fs-18' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">{whoyouareData?.scatter1}</p>
              <p className='fs-18' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">{whoyouareData?.scatter2}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            {/* <Link href="#"></Link> */}
            <Whoyouaremain />
          </div>
        </section>
      </main>

      <FooterMain />
    </Fragment>
  );
};

export default Whoyouare;

// return (
//   <Fragment>
//     <PageProgress />

//     {/* ========== header section ========== */}
//     <header className="wrapper bg-light">
//       <NavbarMain
//         info
//         search
//         stickyBox={false}
//         logoAlt="logo-light"
//         navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
//       />
//     </header>

//     {/* <main className="content-wrapper ">
//       <section
//         className="wrapper bg-image"
//         style={{
//           backgroundImage: `url(${''})`
//         }}
//       >
//         <div className="container py-12 py-md-16 text-center">
//           <div className="row">
//             <div className="col-lg-10 col-xxl-8 mx-auto">
//               <h1
//                 className="display-2 text-white"
//                 style={{
//                   width: 'auto',
//                   height: 20
//                 }}
//               >
//                 Company / Business organization
//               </h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="content mb-15">
//         <div className="container my-5">
//           <p className="display-5 text-main">Company / Business organization</p>
//           If you are an Company / Business organization, we recommend our products follow these.
//         </div>
//       </section>
//     </main> */}
//     <main className="content-wrapper">
//       {whoyouareData.map((item) => (
//         <section className="wrapper bg-image" key={item.id}
//           style={{
//             backgroundImage: `url(${item?.bgimage})`,
//             height: "440px"
//           }}
//         >
//           <div className="container pt-12 pb-12 pb-md-18 pt-md-18 text-center">
//             <div className="row">
//               <div className="col-lg-10 col-xxl-8 mx-auto" data-aos="fade-zoom-in" data-aos-duration="1500">
//                 <h1
//                   className="display-1 text-white mt-10 mt-lg-4"
//                   style={{
//                     width: 'auto'
//                   }}
//                 >
//                   {item?.category || 'ไม่พบข้อมูล'}
//                 </h1>
//               </div>
//               <div className="row" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
//                 <p className="col-10 mx-auto  fs-22 text-white">{item?.description1 || ''}</p>
//                 <p className="mx-1  fs-22 text-white">{item?.description2 || ''}</p>
//               </div>
//             </div>
//           </div>
//           <div className='container  mt-10'>
//           <div className="row m-5">
//           <div className="col-md-5">
//               <h2 className="display-3 text-main" data-aos="fade-right" data-aos-duration="1500">
//                {item?.title}
//               </h2>

//             </div>
//             </div>
//         </div>
//         </section>
//       ))}

//     </main>
//     {/* <FooterMain /> */}
//   </Fragment>
// );
// };

// export default Whoyouare;





// ---test scrip---
// import { NextPage } from 'next';
// import { Fragment, useEffect, useState } from 'react';

// import PageProgress from 'components/common/PageProgress';
// import NavbarMain from 'components/3DTVTech/NavbarMain';


// import FooterMain from 'components/3DTVTech/FooterMain';
// import { whoyouare } from 'data/3DTVTech/Services/dataList';
// import Whoyouaremain from 'components/3DTVTech/Whoyouare/whoyouare-main';
// import { useRouter } from 'next/router';

//   type TWhoyouare = {
//     id: number,
//     bgimage: string,
//     category: string,
//     description1: string,
//     description2: string,
//     title: string,
//     typeof: TTypecustomer[];
//   }
  
//     type TTypecustomer = {
//       id: number, 
//       image: string,
//       title: string,
//       detail: string,
//     };

//     const [serviceinsideData, setServiceData] = useState<any>();
    
//     const router = useRouter();
//     const { query } = router;
//     const { id } = query;


//   const handleGetId = () => {
//     let actuallyId = 0;

//     if (id) {
//       if (typeof id === 'object') {
//         actuallyId = parseInt(id[0]);
//       } else {
//         actuallyId = parseInt(id);
//       }
//     }

//     console.log('act id ', actuallyId);

//     return actuallyId;
//   };

//   useEffect(() => {
//     if (!query || !id) return;
//     console.log('act idikikikikik ', handleGetId());
//     console.log('query 2', query);

//     if (query?.service_id) {
//       const data = whoyouare.find((item) => item?.id.toString() == query.service_id?.toString);

//       // console.log('found data', data);

//       if (data != null) {
//         setServiceData(data!);
//       }
//     } else {
//       const data = whoyouare.find((item) => item?.id.toString());

//       // console.log('found data', data);

//       if (data != null) {
//         setServiceData(data);
//       }
//     }
//     // const data = servicesDetail.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
//     // console.log(dataDelayMarkup);
//   }, [query]);
  

//   const Whoyouare: NextPage = () => {
//   return (
//     <Fragment>
//       <header className="wrapper bg-light">
//         <NavbarMain
//           info
//           search
//           stickyBox={false}
//           logoAlt="logo-light"
//           navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
//         />
//       </header>

//       <main className="content-wrapper">
//         <section
//           className="wrapper bg-image"
//           data-aos="zoom-up"
//           style={{
//             backgroundImage: `url(${serviceinsideData?.bgimage || ''})`,
//             height: '440px'
//           }}
//         >
//           <div className="container pt-12 pb-12 pb-md-18 pt-md-18 text-center">
//             <div className="row">
//               <div className="col-lg-10 col-xxl-8 mx-auto" data-aos="fade-zoom-in" data-aos-duration="1500">
//                 <h1
//                   className="display-1 text-white mt-10 mt-lg-4"
//                   style={{
//                     width: 'auto'
//                   }}
//                 >
//                   {serviceinsideData?.category || 'ไม่พบข้อมูล'}
//                 </h1>
//               </div>
//               <div className="row" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="200">
//                 <p className="col-10 mx-auto  fs-22 text-white">{serviceinsideData?.description1 || ''}</p>
//                 <p className="mx-1  fs-22 text-white">{serviceinsideData?.description2 || ''}</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="container mt-10 ">
//             <div className="row m-5">
//               <div className="col-md-8">
//                 <h2 className="display-6 d-md-none text-main" data-aos="fade-right" data-aos-duration="1500">
//                   {serviceinsideData?.title}
//                 </h2>

//                 <h2 className="display-3 d-none d-md-block text-main" data-aos="fade-right" data-aos-duration="1500">
//                   {serviceinsideData?.title}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className="container">
//             {/* <Link href="#"></Link> */}
//             <Whoyouaremain />
//           </div>
//         </section>
//       </main>

//       <FooterMain />
//     </Fragment>
//   );
// };

// export default Whoyouare;
