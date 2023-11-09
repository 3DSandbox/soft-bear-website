/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  env:{
    NEXT_PUBLIC_GA_MEASUREMENT_ID:"G-2D3WW30X0M**-",
  },
  // basePath:"/app/2023/3dtvtech",
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash:true,
  domains: ["soft-bear.com","www.gforcesolution.com", "localhost"],
  exportPathMap: async function () {
      // setup static path for nextjs build
      const paths = {      
        "/": { page: "/" },
        "/services": { page: "/services" },
        "/blogs": { page: "/blogs" },
        "/aboutus": { page: "/aboutus" },
        "/career": {page: "/career"},
        "/contactus": {page: "contactus"},
        "/whoyouare": { page: "/whoyouare" },
        "/blogs/blogs-single-project": { page: "/blogs/blogs-single-project" },
        "/services/service-details-main": { page: "/services/service-details-main" },
        "/services/service-details-main/service-inside": { page: "/services/service-details-main/service-inside" },
        // เพิ่มที่หลัง
        "/services/virtual-experience" : { page: "/services/virtual-experience"},
        "/services/interactive" : { page: "/services/interactive"},
        "/services/interactive/game-controller" : { page: "/services/interactive/game-controller"},
        "/services/interactive/interactive-kinect" : { page: "/services/interactive/interactive-kinect"},
        "/services/interactive/interactive-touchscreen" : { page: "/services/interactive/interactive-touchscreen"},
        "/services/interactive/microsite-game" : { page: "/services/interactive/microsite-game"},
        "/services/interactive/mobile-control" : { page: "/services/interactive/mobile-control"},
        "/services/event-service" : { page: "/services/event-service"},
        "/services/reality-technology" : { page: "/services/reality-technology"},
        "/services/customer-relationship-management" : { page: "/services/customer-relationship-management"},
        "/services/cinema-technology" : { page: "/services/cinema-technology"},
        "/services/projection-mapping" : { page: "/services/projection-mapping"},
        "/services/learning-management-system" : { page: "/services/learning-management-system"},
        "/services/infographics-motiongraphics" : { page: "/services/infographics-motiongraphics"},
        "/services/software-development" : { page: "/services/software-development"},
        "/services/hardware-development" : { page: "/services/hardware-development"},

      };
  
      return paths;
    },
};

module.exports = nextConfig;
