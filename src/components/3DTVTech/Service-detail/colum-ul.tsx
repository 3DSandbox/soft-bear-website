import NavbarMain from 'components/3DTVTech/NavbarMain';
import PageProgress from 'components/common/PageProgress';
import { FC, Fragment, use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useLightBox from 'hooks/useLightBox';
import { servicesType } from 'data/3DTVTech/Services/dataList';
import FooterMain from 'components/3DTVTech/FooterMain';

import Image, { StaticImageData } from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { NOTFOUND, QRLINE } from 'assets';
import Head from 'next/head';
import { detaildataList } from 'data/3DTVTech/Services/_SerivsbyType/detail-dataList';
import Link from 'next/link';


import QuickPackageMain from 'components/3DTVTech/Service-detail/quick-package-main';
import { title } from 'process';
import PortfolioInsideMain from '../../../../pages/porfolio-inside-main';
import FeaturesInsideMain from '../../../../pages/features-inside-main';
import { TCol } from '../../../../pages/services/service-details-main';


// ..



const Page: FC = () => {

  return (
    <Fragment>
      <main className="container">
              <div className="row">
               <ul>
                <li>
               


                </li>
               </ul>
              </div>   
      </main>
    </Fragment>
  );
};

export default Page;

