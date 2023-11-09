import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav from 'data/footer';
import SocialLinksMain from 'components/reuseable/SocialLinkMain';


const FooterMain: FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#FC8621'
      }}
    >
      <div className="container py-5 py-md-5">
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0 text-white">Copyright © 2023 Soft-Bear</p>
          <p className='mb-1 text-white'
          style={
            {
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: '1.5rem'
            }
          }
          >
            Soft Bear
          </p>

          {/* <SocialLinksMain className="nav social social-muted mb-0 text-md-end" /> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
