import Link from 'next/link';
import LinkType from 'types/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';

// -------- data -------- //
import {
  demos,
  pages,
  blogsNavigation,
  blocksNavigation,
  projectsNavigation,
  documentionNavigation
} from 'data/navigationJ';
import { auto } from '@popperjs/core';
import Image from 'next/image';
import { LOGO } from 'assets';
import { Icon } from '@iconify/react';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const NavbarMain: FC<NavbarProps> = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';

  const fixedClassName = 'navbar navbar-expand-lg center-nav bg-white bg-opacity-100 navbar-dark navbar-clone fixed shadow-lg ';

  // render inner nav item links
  const renderLinks = (links: LinkType[]) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  };

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100 ">
        <Link href="/">
          <Image src={LOGO.src} width={192} height={56} alt="3DTV-Tech Logo"></Image>
        </Link>
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        style={{
          backgroundColor: '#FFFF'
        }}
      >
        <div className="offcanvas-header d-lg-none gap-3">
          <Image src={LOGO.src} width={188} height={26} alt="3DTV-Tech Logo" className="w-70 h-auto"></Image>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="bg-transparent border-0">
            <Icon icon="carbon:close-outline" width={24} height={24} color="white" />
          </button>
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100" 

        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link href="/" className="nav-link m-0 px-5 fs-22 d-md-none ">
                <div className="d-flex align-items-center gap-3 " style={{
                  color: "#FF8812"
                }}>
                  <Icon icon="mingcute:home-3-fill" width="25" />
                  Home
                </div>
              </Link>

              <Link href="/" className="nav-link m-0 px-5 d-none d-md-block " 
              style={{
                fontSize:"18px",
                color: "#FF8812"
                }}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/services" className="nav-link  px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3"   style={{
                    color: "#FF8812"
                  }}>
                  <Icon icon="ic:baseline-miscellaneous-services" width="25" 
                />
                  Services
                </div>
              </Link>

              <Link href="/services" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px", color: "#FF8812"}}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link m-0 px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3" style={{
                  color: "#FF8812" 
                }}>
                  <Icon icon="mdi:blogger" width="25" />
                  Case Study
                </div>
              </Link>

              <Link href="#" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px", color: "#FF8812"}}>
              Case Study
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3" style={{color:"#FF8812"}}>
                  <Icon icon="material-symbols:info" width="25" />
                Contact
                </div>
              </Link>

              <Link href="#" className="nav-link pm-0 px-5 d-none d-md-block" style={{fontSize:"18px", color: "#FF8812"}}>
              Contact
              </Link>
           </li>
          </ul>
     
       </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
         

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none ">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn" 
            style={{
              color: "#FF8812"
            }}>
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center ">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

// set deafult Props
NavbarMain.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto ',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light '
};

export default NavbarMain;
