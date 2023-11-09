import { Icon } from '@iconify/react';
import NextLink from 'components/reuseable/links/NextLink';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';

// ========================================================
type BlogCard2Props = {
  id?: number;
  link: string;
  title: string;
  catagories: string;
  content1: string;
  content2?: string;
  cardTop: ReactElement;
  createdAt: string;
};
// ========================================================

const Blogcard2: FC<BlogCard2Props> = (props) => {
  const { id, cardTop, title, catagories, content1, content2, link, createdAt } = props;

  return (
    <article className="post">
      <div className="card">
        {cardTop}

        <div className="card-body">
          <div className="post-header">
            <div className="post-category  text-line ">
              {/* <NextLink title={catagories} href="#" className="hover text-main" /> */}
              {catagories}
            </div>

            <h1 className="post-title mt-1 mb-0 text-main">
              {/* <NextLink title={title} className="link-dark" href={link} /> */}
              <NextLink title={title} className="" href={link} />

              {/* <Link href={link} style={{
                color: "#737373"
              }}>{title}</Link> */}
            </h1>
          </div>

          <div className="post-content">
            <p>
              {/* <NextLink title={description} className="link-dark" href={link} /> */}
              <NextLink title={content1} className="" href={link} />
            </p>

            {/* ไม่ได้ใช้แล้ว */}
            {/* <p>{description2}</p> */}
          </div>
        </div>

        <div className="card-footer">
          <div className="post-meta d-flex mb-0 ">


            {/* test shar button */}
            {/* <div>
            <span className="px-2">
                <FacebookShareButton url="https://3dtv-tech.com/blogs/blogs-single-project/?id=1" 
                quote={"Hello world"}
                hashtag="#3DTVTech">
                <FacebookIcon round={true}></FacebookIcon>
                </FacebookShareButton>
              </span>
            </div> */}

           




            <div className="post-date d-flex justify-content-center align-items-center">
              {/* icon calendar backup */}
              {/* <i className="uil uil-calendar-alt" /> */}
              <span className="px-2">
                <Icon icon="solar:calendar-outline" width="20" />
              </span>
              {/* <span>5 Jul 2022</span> */}
              <span>{createdAt}</span>
            </div>


{/* 
            <li className="ms-auto  d-flex justify-content-center align-items-center">
              <span className="px-2">
              <Icon icon="solar:calendar-outline" width="20" />
              </span>
              <span>{createdAt}</span>
            </li> */}


            <div className="ms-auto  d-flex justify-content-center align-items-center">
              {/* icon backup */}
              {/* <i className="uil uil-user" />  */}
              <span className="px-2">
                <Icon icon="mdi:user-outline" width="auto" />
              </span>
              <span>By 3DTV-Tech</span>
            </div>

            {/* ------icon technologo test--- */}
            {/* <li className="ms-auto">
            <i className="uil uil-box" /> 
            <span>{category}</span>
            </li> */}

            {/* <li className="post-author">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-user" />
                  <span>By Sandbox</span>
                </a>
              </Link>
            </li>

            

            <li className="post-comments">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-comment" /> 3<span> Comments</span>
                </a>
              </Link>
            </li>

            <li className="post-likes ms-auto">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-heart-alt" />3
                </a>
              </Link>
            </li> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blogcard2;
