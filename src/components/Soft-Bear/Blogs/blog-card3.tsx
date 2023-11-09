import { FC } from 'react';
import Link from 'next/link';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import { Icon } from '@iconify/react';

// ========================================================
type BlogCard3Props = {
  id?: number;
  catagories?: string;
  title?: string;
  url?: string;
  image?: string;
  content1?: string;
  content2?: string;
  detail?: string;
  createdAt?: string;
};
// ========================================================

const Blogjcard3: FC<BlogCard3Props> = (props) => {
  const { id, title, catagories, image, content1, content2, createdAt } = props;

  return (
    <article className="item post col-md-6">
      <div className="card">
        <figure className="card-img-top overlay overlay-1 hover-scale">
          <Link href={`../blogs/blogs-single-project/?id=${id}`} passHref legacyBehavior>
            <a>
              {image && <FigureImage width={560} height={350} src={image}/>}
              <span className="bg" />
            </a>
          </Link>

          <figcaption>
            <h5 className="from-top mb-0">Read More</h5>
          </figcaption>
        </figure>

        <div className="card-body">
          <div className="post-header">
            <div className="post-category text-line ">
              <NextLink title={catagories || ''} href="#" className="hover" />
            </div>

            {/* <h1 className="post-title h3 mt-1 mb-3">
              <NextLink title={title || ""} className="link-dark" href="" />
            </h1> */}
            <h1 className="post-title h3 mt-1 mb-3 text-main">
              <NextLink title={title || ''} className="" href={`../blogs/blogs-single-project/?id=${id}`} />
            </h1>
          </div>

          <div className="post-content">
            {/* <p>{content1}</p> */}
            <NextLink title={content1 || ''} className="" href={`../blogs/blogs-single-project/?id=${id}`} />
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              {/* <i className="uil uil-calendar-alt" /> */}
              <span className="px-2"><Icon icon="solar:calendar-outline" width="20" /></span>
              <span>{createdAt}</span>
            </li>

            <li className="ms-auto">
              {/* <i className="uil uil-user" />  */}
              <span className="px-2"><Icon icon="mdi:user-outline" width="auto" /></span>
              <span>By 3DTV-Tech</span>
            </li>

            {/* <li className="post-comments">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-comment" />4
                </a>
              </Link>
            </li>

            <li className="post-likes ms-auto">
              <Link href="#" passHref legacyBehavior>
                <a>
                  <i className="uil uil-heart-alt" />5
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Blogjcard3;
