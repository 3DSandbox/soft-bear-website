import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// animate css
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // manage loading status
  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Soft-Bear</title>
        <meta
          name="description"
          content="เราคือบริษัทผู้พัฒนาสื่อ New Media และพัฒนาระบบออนไลน์ทุกประเภท เพียบพร้อมหลาย Platform ด้วยประสบการณ์อันยาวนานด้านการพัฒนา Hardware และ Sofware."
        />
        <meta
          name="keywords"
          content="รับทำเว็บไซต์ ,รับพัฒนาเว็บไซต์, ,รับทำเกม, รับพัฒนาเกม,รับทำโปรแกรม, รับพัฒนาโปรแกรม ,รับทำสื่อการเรียนการสอน ,รับทำสื่อออนไลน์, รับทำสื่อมัลติมีเดีย, รับทำงานอีนเวนท์ ,รับทำงานอีเวนต์, รับทำงาน Event ,Graphics Design, New Media, สื่อออนไลน์, Front End , Back End, Mobile Application, Web application, Info Graphics, Motion Graphics, Digital Marketing, Event Agency, Event, Virtual Production, Interactive, Metaverse, Virtual Event, Virtual Museum, Software Development, Hardware Development,VR"/>
     
      <meta property='og:url' content='https://3dtv-tech.com/'></meta>
      <meta property='og:type' content='website'></meta>
      <meta property='og:title' content='3DTV-Tech -  “Creative Thinking and Technological Expertise”'></meta>
      <meta property='og:description' content='เราคือบริษัทผู้พัฒนาสื่อ New Media และพัฒนาระบบออนไลน์ทุกประเภท เรายินดีพร้อมให้บริการเสมอ '></meta>
      <meta property='og:image' content='https://3dtv-tech.com/public/og/cover.jpg'></meta>
      </Head>

      <ThemeProvider>
        {/* <div className="page-loader" /> */}
        {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
