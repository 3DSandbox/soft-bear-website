import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';

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
import FooterMain from 'components/3DTVTech/FooterMain';

type TBlog = {
  id: number;
  catagories: string;
  title: string;
  url: string;
  image: string;
  content1: string;
  content2: string;
  detail: string;
  createdAt: string;
};

const ProjectDetails: NextPage = () => {
  const { query } = useRouter();
  // ใช้วิธี any แก้แดงไปก่อน
  // const [newsData, setNewsData] = useState<TBlog>();
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
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title={newsData?.catagories || 'ไม่พบข้อมูล'} href="#" className="hover text-main" />
                  </div>

                  <h1 className="display-1 mb-4">{newsData?.title || 'ไม่พบข้อมูล'}</h1>

                  <ul className="post-meta mb-5">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>{newsData?.createdAt || 'ไม่พบข้อมูล'}</span>
                    </li>

                    <li className="post-author">
                      <i className="uil uil-user" />
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
                      src={newsData?.image || '/img/photos/3DTVTech/default/notfound1080.png'}
                      className="card-img-top"
                      alt="image title"
                    />
                    <div className="card-body p-5 p-md-10">
                      <div className="" dangerouslySetInnerHTML={createMarkup()} />
                    </div>
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

export default ProjectDetails;
