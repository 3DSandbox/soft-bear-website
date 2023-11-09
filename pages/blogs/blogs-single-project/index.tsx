import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8, FooterMain } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';
import NavbarMain from 'components/3DTVTech/NavbarMain';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { blogNews } from 'data/3DTVTech/Blog-NewsData/blognewsList';
import BlogContent from 'components/3DTVTech/Blogs/blog-content';
import FigureImage from 'components/reuseable/FigureImage';
import Image from 'next/image';
import { NOTFOUND } from 'assets';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import Link from 'next/link';
import { FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';



type TBlog = {
  id: number;
  catagories: string;
  title: string;
  url?: string;
  image: string;
  content1: string;
  content2: string;
  detail: string;
  createdAt: string;
};

const Page: NextPage = () => {
  const { query } = useRouter();
  const [newsData, setNewsData] = useState<any>();

  useLightBox();

  useEffect(() => {
    console.log(newsData);
  }, [newsData]);

  useEffect(() => {
    const data = blogNews.find((item) => String(item?.id) == (query?.id?.length ? query?.id[0] : query?.id));
    console.log('data', data);

    setNewsData(data);
  }, [query]);

  const createMarkup = () => {
    if (newsData?.detail) return { __html: newsData?.detail };
  };

  return (
    <Fragment>
      <Head>
        <title>3DTV-Tech</title>
        <meta
          name="description"
          content="เว็บไซต์ 3DTV-Tech ของเราได้จัดทำบทความสาระน่ารู้ ของแวดวงการ it ที่เราได้จัดทำรวบรวมมาอย่างดี พร้อมมอบสาระและความรู้น่าให้กับคุณ"
        />
        <meta
          name="keyword"
          content="บทความไอที, ข่าวสารไอที, บทความสาระไอทีม, ข่าว it, news it, ข่าวสาร it, ข่าววงการ it, ข่าวเทคโนโลยี, ข่าว technology"
        />
        <meta name="author" content="3DTV-Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageProgress />

      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarMain
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none bg-black bg-opacity-50"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto mt-5">
                <div className="post-header">
                  <div className="post-category text-line">
                    {/* <NextLink title={newsData?.catagories || 'ไม่พบข้อมูล'} href="#" className="hover text-main" /> */}
                    {newsData?.catagories}
                  </div>

                  <h1 className="display-1 mb-4 text-main">{newsData?.title || 'ไม่พบข้อมูล'}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      {/* <i className="uil uil-calendar-alt" /> */}
                      <span className="px-2">
                        <Icon icon="solar:calendar-outline" width="20" />
                      </span>
                      <span>{newsData?.createdAt || 'ไม่พบข้อมูล'}</span>
                    </li>

                    <li className="post-author">
                      {/* <i className="uil uil-user" /> */}
                      <span className="px-2">
                        <Icon icon="mdi:user-outline" width="auto" />
                      </span>
                      {/* <NextLink href="#" className="text-reset" title={<span>By 3DTV-Tech</span>} /> */}
                      {<span>By 3DTV-Tech</span>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== details section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  {/* <BlogContent /> */}
                  <div className="card">
                    <Image
                      width={960}
                      height={600}
                      src={newsData?.image || NOTFOUND.src}
                      className="card-img-top h-100"
                      alt={newsData?.title || 'blog-cover'}
                    />

                    <div className="card-body p-5 p-md-10">
                      <div className="" dangerouslySetInnerHTML={createMarkup()} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* test share dropdown 231103 */}
            <div className="container ">
              <div className="row my-5">
                <div className="col-xl-9 col-sm-12"></div>
                <div className="col-xl-3 col-sm-12">
                  {' '}
                  <div className="dropdown d-flex justify-content-center align-items-center">
                    <button
                      className="fs-18 btn  dropdown-toggle rounded-pill btn-icon btn-icon"
                      type="button"
                      id="dropdownShare"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderStyle: 'solid',
                        outlineStyle: 'solid',
                        outlineColor: 'red',
                        outlineWidth: '0px',
                        backgroundColor: '#3175D1',
                        width: '150px',
                        height: 'auto',
                        color: 'white'
                      }}
                    >
                      <Icon icon="material-symbols:share" className="" width="30" height="30" />
                      Share
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownShare">
                      <li className='px-5 d-flex justify-content-start align-items-center'>
                        <FacebookShareButton 
                          url="https://3dtv-tech.com/blogs/blogs-single-project/?id=1"
                          quote={'test'}
                          hashtag="#3DTVTech">
                          
                            <div className="" style={{
                             color: '#3175D1'
                            }}> Facebook</div>                          
                          {/* <FacebookIcon round={true}></FacebookIcon> */}
                        </FacebookShareButton>
                      </li>



                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <FooterMain />
    </Fragment>
  );
};

export default Page;
