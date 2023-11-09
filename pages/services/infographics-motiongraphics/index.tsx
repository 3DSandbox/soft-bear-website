import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import { dataDelayMarkup } from 'markups/elements/animations';
import FooterMain from 'components/3DTVTech/FooterMain';
import ServiceDetailType from 'components/3DTVTech/Service-detail/service-detail-type';
import ServiceDetailFeatures from 'components/3DTVTech/Service-detail/service-detail-features';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BANNER16, BANNER17, BANNER18, BANNER19, IC_CERTIFICATE, IC_CREATIVE, IC_EASYTOUNDERSTAND, IC_EDUCATIONV2, IC_ENTERAINMENT, IC_ENTERINGCHANEL, IC_IMMERSIVEEXPERIENCE, IC_IMPACT, IC_IMPRESSION,  IC_INFO,  IC_INTERACTIVE,  IC_MANAGECOURSE,  IC_REACHTHETARGET,  IC_SCHOOLMEDIA,  IC_TECHNICALINNOVATION, IC_TEST, IC_TRACKING, IMG_CINEMA, IMG_INFO, IMG_LMS, IMG_PROJECTION, TYPEOFCINEMA3D, TYPEOFCINEMA4D, TYPEOFINFO2D, TYPEOFINFO3D, TYPEOFLINEINTEGRATION, TYPEOFLMS1, TYPEOFLMS2, TYPEOFLMS3, TYPEOFPROJECTIONINTERACTIVE, TYPEOFPROJECTIONMAPPING } from 'assets';
import Head from 'next/head';
import Colul from 'components/3DTVTech/Service-detail/colum-ul';
// ..

export type TServiceType = {
    id: number;
    category: string;
    bgimage: string;
    image: string;
    imagedetail: string;
    title: string;
    header: string;
    description1?: string;
    description2?: string;
    description3?: string;
    textfooter?: string;
    detail1?: string;
    col?: TCol[];
    detail2?: string;
    detail3?: string;
    features?: TFeatures[];
    typeof: TTypeOf[];
};

type TFeatures = {
    id: number;
    name: string;
    detail: string;
};

type TTypeOf = {
    id: number;
    image: string;
    title: string;
    url?: string;
};

export type TCol = {
    id: number;
    text01?: string;
    text02?: string;
    text03?: string;
    text04?: string;
    text05?: string;
};

const Page: FC = () => {
    const router = useRouter();
    const { query } = router;
    const { service_id } = query;
    // แก้แดงไม่ได้ใช้ any ไปก่อน
    // const [serviceData, setServiceData] = useState<TServiceType>();

    const [serviceData, setServiceData] = useState<any>();
    const [footerfound, setFooterFound] = useState(false);
    const [colulfound, setColluFound] = useState(false);


    // used for image lightbox

    useLightBox();

    useEffect(() => {
        if (!servicesType || !service_id) return;
        // console.log('service type', servicesTyp)
        let footer = servicesType?.find(
            (item) => item?.id.toString() == service_id && item?.textfooter != null && item?.textfooter.length > 0
        );
        setFooterFound(Boolean(footer));
    }, [servicesType, service_id]);


    // test disable or enable find col
    // useEffect(() => {
    //   let colul = servicesType?.find(
    //     (item) => item?.id.toString() == service_id && item?.col != null && item?.col.length > 0
    //   );
    //   setColluFound(Boolean(colul));
    // }, [servicesType, service_id]);


    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        console.log(query.service_id);
        if (query?.service_id) {
            const data = servicesType.find((item) => item?.id.toString() == query.service_id);
            // console.log('found data', data);

            if (data != null) {
                setServiceData(data!);
            }
        } else {
            const data = servicesType.find((item) => item?.id.toString() == '1');

            // console.log('found data', data);

            if (data != null) {
                setServiceData(data);
            }
        }
        // const data = servicesType.find( (item) => String(item?.id) == (query?.service_id?.length ? query?.service_id[0] : query?.service_id) );
        // console.log(dataDelayMarkup);
    }, [query]);




    return (
        <Fragment>
            <Head>
                <title>3DTV-Tech</title>
                <meta
                    name="description"
                    content="บบริษัท 3DTV-Tech บริการของเรามีรายละเอียดโดยจะแบ่งตามหัวข้อย่อยจากหัวข้อใหญ่ที่ถูกแบ่งเป็นหมวดต่าง ๆ เพื่อให้ตรงกับความต้องการธุรกิจของคุณ" />
                <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience" />
                <meta name="keyword" content="3dtvtech, สามดีทีวีเทค, ธุรกิจสื่อสมัยใหม่, สื่อสมัยใหม่ ,บริษัท New media, ธุรกิจ online business, งานอีเว้นท์, งาน Event , บริการสื่อมัลติมีเดีย, บริการพัฒนาสื่อ interactive , บริการพัฒนา Software, บริการพัฒนา Hardware, บริการดูแลและพัฒนาระบบ, พัฒนาระบบ front end, Application Development, พัฒนาระบบ back end, Interactive media, Microsite, Webpage, Development New media, Development Interactive, Software development, Hardware development, Info graphics, motion graphics, Event Service, Virtual Experience" />
                <meta name="author" content="3DTV-Tech" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

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
                {/* ========== page title section ========== */}
                {/* <section className="wrapper bg-gray"> */}
                {/* <section
          className="wrapper bg-image"
          style={{
            backgroundImage: 'url("/img/photos/3DTVTech/bannerpage/banner-virtual.png" )'
          }}
        > */}

                {/* v มือถือ */}
                <section
                    className="wrapper bg-image  d-md-none"
                    data-aos="zoom-up"
                    style={{
                        backgroundImage: `url(${BANNER19.src})`,
                        height: '440px'
                    }}
                >
                    <div className="container text-center" >
                        <div className="row">
                            <div className="col-lg-10 col-xxl-8 ">
                                <h2
                                    className="display-1 text-white text-uppercase mt-13"
                                    style={{
                                        width: 'auto',
                                    }}
                                >
                                    INFOGRAPHICS / MOTIONGRAPHIC
                                </h2>
                            </div>

                            <div className="row mx-auto my-5 d-flex justify-content-center align-items-center">


                                <div className="col-12 ">
                                    <p className="fs-22 text-white">เปลี่ยนข้อมูลให้เป็นภาพ ง่ายต่อการเข้าใจในทันที</p>
                                </div>

                                <div className='col-12 '>
                                    <p className="fs-18 text-white"></p>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>

                {/* v pc */}
                <section
                    className="wrapper bg-image d-none d-md-block"
                    data-aos="zoom-up"
                    style={{
                        backgroundImage: `url(${BANNER19.src})`,
                        height: '440px'
                    }}
                >
                    <div className="container pt-15 pb-12 pb-md-18 pt-md-18 text-center" >
                        <div className="row">
                            <div className="col-lg-10 col-xxl-8 mx-auto">
                                <h2
                                    className="display-1 text-white text-uppercase mt-10 mt-lg-4"
                                    style={{
                                        width: 'auto'
                                    }}
                                >
                                   INFOGRAPHICS / MOTIONGRAPHIC
                                </h2>
                            </div>

                            <div className="row mx-auto d-flex justify-content-center align-items-center">


                                <div className="col-9 ">
                                    <p className="fs-22 text-white">เปลี่ยนข้อมูลให้เป็นภาพ ง่ายต่อการเข้าใจในทันที</p>
                                </div>

                                <div className='col-8 '>
                                    <p className="fs-22 text-white"></p>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>


                {/* content section */}
                <section>
                    <div className="container ">
                        <div className="row p-4 p-md-7">
                            <div className="col-xl-6 col-xl-3">
                                {/* v phone */}
                                <h1 className="display-6 d-md-none text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">เปลี่่ยนข้อมูลเป็นการเล่าเรื่องผ่านภาพ ให้เข้าใจอย่างรวดเร็วมีความสวยงาม</h1>

                                {/* v pc */}
                                <h1 className="display-3 d-none d-md-block text-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">เปลี่่ยนข้อมูลเป็นการเล่าเรื่องผ่านภาพ ให้เข้าใจอย่างรวดเร็วมีความสวยงาม</h1>

                                <div className="content mt-md-7 mt-3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                                    <p className="fs-18 d-md-none">Infographic และ Motion Graphic เป็นเครื่องมือสำคัญ ในการอธิบาย หรือสื่อสารข้อมูลที่มีความสลับซับซ้อนให้เป็น รูปธรรมและเข้าใจได้ง่ายมากขึ้น</p>




                                    {/* v pc */}
                                    <p className="fs-18 d-none d-md-block mt-2">Infographic และ Motion Graphic เป็นเครื่องมือสำคัญ ในการอธิบาย หรือสื่อสารข้อมูลที่มีความสลับซับซ้อนให้เป็น รูปธรรมและเข้าใจได้ง่ายมากขึ้น</p>
                                    <p className="fs-18 d-none d-md-block mt-2">ด้วยประสบการณ์และบุคลากรที่ทำงานกับสื่อมาอย่างมากมาย เราจึงสามารถช่วยลูกค้าในการออกแบบและสร้างสรรค์ กราฟฟิคต่างๆ ให้ตรงความต้องการ และสื่อสารได้จริง</p>
                                </div>
                            </div>

                            <div className="col-xl-6 d-flex justify-content-center align-items-center" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="400">
                                <Image
                                    src={IMG_INFO}
                                    alt='Interactive'
                                    width={30}
                                    height={30}
                                    className="w-75"
                                    style={{
                                        height: 'auto'
                                    }}
                                    draggable="false"
                                />
                            </div>
                            {/* v phone */}
                            <p className="fs-18 col-12 col-md-6 mt-7 mt-md-0 d-md-none">
                            ด้วยประสบการณ์และบุคลากรที่ทำงานกับสื่อมาอย่างมากมาย เราจึงสามารถช่วยลูกค้าในการออกแบบและสร้างสรรค์ กราฟฟิคต่างๆ ให้ตรงความต้องการ และสื่อสารได้จริง
                            </p>
                        </div>
                    </div>
                </section>

                {/* features section แบบ id*/}
                {/* <section>
          <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <ServiceDetailFeatures />
          </div>
        </section> */}

                <div className="container">
                    <h2 className="display-3 text-main mt-10 mt-md-3 text-center">Features</h2>
                    <hr
                        className="p-0 "
                        style={{
                            height: '3px',
                            width: '4rem',
                            backgroundColor: '#3175D1',
                            margin: 'auto'
                        }}
                    ></hr>
                </div>

                <section>

                    <div className="container">
                        <div className="row justify-content-center">
                           
                            {/* ic01 */}
                            <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                                <Image
                                    src={IC_INFO}
                                    width={128}
                                    height={128}
                                    draggable={false}
                                    alt="สื่อสารข้อมูลด้วยภาพ"
                                />
                                <h3
                                    className="mb-3 mt-3"
                                    style={{
                                        color: '#737373'
                                    }}
                                ></h3>
                                <h3 className="fs-22 text-main">สื่อสารข้อมูลด้วยภาพ</h3>
                                <p className="fs-18 mx-3">สร้างสื่อสารสนเทศในรูปแบบกราฟฟิคไม่ว่าจะเป็น ภาพ หรือ วิดีโอ</p>
                            </div>

                            {/* ic02 */}
                            <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                                <Image
                                    src={IC_EASYTOUNDERSTAND}
                                    width={128}
                                    height={128}
                                    draggable={false}
                                    alt="เข้าใจง่าย"
                                />
                                <h3
                                    className="mb-3 mt-3"
                                    style={{
                                        color: '#737373'
                                    }}
                                ></h3>
                                <h3 className="fs-22 text-main">เข้าใจง่าย</h3>
                                <p className="fs-18 mx-3">ผู้ชมสามารถเข้าใจสารที่ส่งจากสื่ออย่างชัดเจน</p>
                            </div>

                            {/* ic03 */}
                            <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3 text-center mt-10">
                                <Image
                                    src={IC_REACHTHETARGET}
                                    width={128}
                                    height={128}
                                    draggable={false}
                                    alt="เข้าถึงกลุ่มเป้าหมาย"
                                />
                                <h3
                                    className="mb-3 mt-3"
                                    style={{
                                        color: '#737373'
                                    }}
                                ></h3>
                                <h3 className="fs-22 text-main">เข้าถึงกลุ่มเป้าหมาย</h3>
                                <p className="fs-18 mx-3">เข้าถึงกลุ่มเป้าหมายได้อย่างตรงจุด</p>
                            </div>

                        
                        </div>
                    </div>
                </section>

                {/* type of แบบ id */}
                {/* <section>
                    <div className="container">
                        <ServiceDetailType />
                    </div>
                </section> */}


                <section>
                    <div className="container">
                        <div className="mt-10 mt-md-3">
                            <h2 className="display-3 text-main text-center">Type of Infographics / Motiongraphic</h2>
                            <hr
                                className="p-0 "
                                style={{
                                    height: '3px',
                                    width: '4rem',
                                    backgroundColor: '#3175D1',
                                    margin: 'auto'
                                }}
                            ></hr>


                            <div className="grid grid-view projects-masonry">
                                <div className="container">
                                    <div className="row g-8 g-lg-10 mt-1  justify-content-center">



                                        {/* t01 */}
                                        <div className="project  col-md-6 col-xl-4">
                                            <div className=" h-100">
                                                <figure className="card-img-top rounded">
                                                    <Image src={TYPEOFINFO3D} width={285} height={285} alt="Infographics / Motiongraphic 3D"
                                                        style={{
                                                            width: "100%"
                                                        }} />
                                                </figure>
                                                <div className="card-body p-5">
                                                    <h3 className="fs-19 text-center text-main mb-0">Infographics / Motiongraphic 3D</h3>
                                                </div>
                                            </div>
                                        </div>

                                          {/* t02 */}
                                          {/* <div className="project  col-md-6 col-xl-3">
                                            <div className="shadow-lg h-100">
                                                <figure className="card-img-top">
                                                    <Image src={TYPEOFLMS2} width={285} height={285} alt="LMS for Employee Training"
                                                        style={{
                                                            width: "100%"
                                                        }} />
                                                </figure>
                                                <div className="card-body p-5">
                                                    <h3 className="fs-19 text-center text-main mb-0">LMS for Employee Training</h3>
                                                </div>
                                            </div>
                                        </div> */}

                                         {/* t03 */}
                                         <div className="project  col-md-6 col-xl-4">
                                            <div className=" h-100">
                                                <figure className="card-img-top rounded">
                                                    <Image src={TYPEOFINFO2D} width={285} height={285} alt="Infographics / Motiongraphic 2D"
                                                        style={{
                                                            width: "100%"
                                                        }} />
                                                </figure>
                                                <div className="card-body p-5">
                                                    <h3 className="fs-19 text-center text-main mb-0">Infographics / Motiongraphic 2D</h3>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main >


            <FooterMain />
        </Fragment >
    );
};

export default Page;
