import { FC, Fragment } from 'react';
import Plyr from 'plyr-react';
import Image from 'next/image';
// -------- custom components -------- //
import Pagination from 'components/reuseable/Pagination';


// -------- data -------- //
import { blogList4 } from 'data/blog';
import { blogNews } from 'data/3DTVTech/Blog-NewsData/blognewsList';
import Blogjcard3 from './blog-card3';
import Blogcard2 from './blog-card2';
import Blogsidebar from './blog-sidebar';

const Blogmain: FC = () => {
  return (
    
    <div className="row gx-lg-8 gx-xl-12 justify-content-center">
      <div className="col-lg-10">
        <div className="blog classic-view ">      
          <Blogcard2
            // link={`/blogs/blogs-single-project/?id=${blogNews[0].id}`}
            link={`/blogs/blogs-single-project/?id=${blogNews[1].id}`}
            catagories={blogNews[1].catagories}
            title={blogNews[1].title}
            content1={blogNews[1].content1}
            content2={blogNews[1].content2}
            createdAt={blogNews[1].createdAt}
            cardTop={
              <figure className="card-img-top overlay overlay-1 hover-scale">
               {/* <a className="link-dark" href={`/blogs/blogs-single-project/?id=${blogNews[0].id}`}> */}
               <a className="link-dark" href={`/blogs/blogs-single-project/?id=${blogNews[1].id}`}>
                  <Image
                    width={960}
                    height={600}
                    src={blogNews[1].image}
                    alt={blogNews[1].title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <span className="bg" />
                </a>

                <figcaption>
                  <h5 className="from-top mb-0">Read More</h5>
                </figcaption>
              </figure>
            }
          />
          
        </div>

        <div className="blog grid grid-view">
          <div className="row isotope gx-md-8 gy-8 mb-8">
            {blogNews.map((item) => (
              <Fragment key={item.id}>
                {item.id != 2 && <Blogjcard3 {...item} key={item.id} title={item?.title}/>}
                </Fragment>
            ))}
          </div>
        </div>

        {/* <Pagination className="justify-content-start" altStyle /> */}
      </div>

      <aside className="col-lg-4 sidebar mt-8 mt-lg-0">
        {/* <Blogsidebar thumbnail="" /> */}
      </aside>
    </div>
  );
};

export default Blogmain;
