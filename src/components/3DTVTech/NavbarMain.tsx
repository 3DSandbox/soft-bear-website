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

  // dynamically render the logo
  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark';
  // dynamically added navbar classname

  // backuop navbar เดิมใส
  // const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed ';

  const fixedClassName = 'navbar navbar-expand-lg center-nav bg-black bg-opacity-50  navbar-dark navbar-clone fixed ';

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
        {/* <NextLink href="/" title={<img alt="logo" src={`/img/${logo}.png`} srcSet={`/img/${logo}@2x.png 2x`} />} /> */}
        {/* <img src='/img/photos/3DTVTech/logo/logovector.png' srcSet='/img/photos/3DTVTech/logo/logovector@x2.png 2x mt-2' className=''
        style={{
          width: auto,
          height: auto
        }}
        ></img> */}

        <Link href="/">
          <Image src={LOGO.src} width={188} height={26} alt="3DTV-Tech Logo"></Image>
        </Link>
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        style={{
          backgroundColor: '#3175D1'
        }}
      >
        <div className="offcanvas-header d-lg-none gap-3">
          {/* <h3 className="text-white fs-30 mb-0">3DTVTech</h3> */}
          <Image src={LOGO.src} width={188} height={26} alt="3DTV-Tech Logo" className="w-70 h-auto"></Image>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="bg-transparent border-0">
            <Icon icon="carbon:close-outline" width={24} height={24} color="white" />
          </button>
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* ===================== demos nav item ===================== */}
            <li className="nav-item ">
              <Link href="/" className="nav-link m-0 px-5 fs-22 d-md-none " style={{}}>
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="mingcute:home-3-fill" width="25" />
                  Home
                </div>
              </Link>

              <Link href="/" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px"}}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/services" className="nav-link  px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="ic:baseline-miscellaneous-services" width="25" />
                  Services
                </div>
              </Link>

              <Link href="/services" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px"}}>
                Services
              </Link>
            </li>

            {/* <li className="nav-item">
              <a href="/home" className="nav-link m-0 px-5">
                Portfolio
              </a>
            </li> */}

            {/* ===================== blocks nav item ===================== */}
            <li className="nav-item">
              <Link href="/blogs" className="nav-link m-0 px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="mdi:blogger" width="25" />
                  Blogs
                </div>
              </Link>

              <Link href="/blogs" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px"}}>
                Blogs
              </Link>
            </li>


            {/* ===================== blocks nav item ===================== */}

            {/* ปิดชั่วคราว */}
            <li className="nav-item">
              <Link href="/career" className="nav-link m-0 px-5 fs-22 d-md-none" style={{fontSize:"18px"}}>
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="material-symbols:info" width="25" />
                  Career
                </div>
              </Link>

              <Link href="/career" className="nav-link m-0 px-5 d-none d-md-block" style={{fontSize:"18px"}}>
              Career
              </Link>
            </li>




            {/* temporary disable */}
            {/* <li className="nav-item">
              <Link href="#" className="nav-link px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="material-symbols:info" width="25" />
                  Careers
                </div>
              </Link>

              <Link href="#" className="nav-link pm-0 px-5 d-none d-md-block">
                Careers
              </Link>
            </li> */}



            <li className="nav-item">
              <Link href="/aboutus" className="nav-link px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="material-symbols:info" width="25" />
                  About Us
                </div>
              </Link>

              <Link href="/aboutus" className="nav-link pm-0 px-5 d-none d-md-block" style={{fontSize:"18px"}}>
                About Us
              </Link>
            </li>

            {/* ปิดชั่วคราว */}
            {/* <li className="nav-item">
              <Link href="/contactus" className="nav-link px-5 fs-22 d-md-none">
                <div className="d-flex align-items-center gap-3">
                  <Icon icon="material-symbols:info" width="25" />
                  Contact Us
                </div>
              </Link>

              <Link href="/contactus" className="nav-link pm-0 px-5 d-none d-md-block">
                Contact Us
              </Link>
            </li> */}

          </ul>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= language dropdwown ============= */}

          {/* ============= info button ============= */}
          {/* {info && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                <i className="uil uil-info-circle" />
              </a>
            </li>
          )} */}

          {/* ============= search icon button ============= */}
          {/* {search && (
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                <i className="uil uil-search" />
              </a>
            </li>
          )} */}

          {/* ============= contact button ============= */}
          {/* {button && <li className="nav-item d-none d-md-block">{button}</li>} */}

          {/* ============= shopping cart button ============= */}
          {/* {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )} */}

          {/* ============= social icons link ============= */}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
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
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default NavbarMain;
