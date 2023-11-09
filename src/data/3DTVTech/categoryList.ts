import { COMPANY, EVENT, MUSEUM, SCHOOL } from 'assets';

const categoryList = [
    {
      id: 1,
      title: 'Software Solution',
    //   image: '/img/photos/3DTVTech/home/icon/ic_company.png',
      image: COMPANY.src,
      type: 'Software Solution',
    //   url: '/3DTVTech/demo-j-company'
    }
    ,
    {
        id: 2,
        title: 'Data Service',
        // image: '/img/photos/3DTVTech/home/icon/ic_event.png',
        image: EVENT.src,
        type: 'Data Service',
        // url: '/3DTVTech/demo-j-eventagency'
    }
    ,

    {
        id: 3,
        title: 'IOT',
        // image: '/img/photos/3DTVTech/home/icon/ic_museum.png',
        image: MUSEUM.src,
        type: 'IOT',
        // url: '/3DTVTech/demo-j-meuseumart'
    },
    {
        id:4    ,
        title: 'Artificial Intelligence (AI)',
        // image: '/img/photos/3DTVTech/home/icon/ic_school.png',
        image: SCHOOL.src,
        type: 'Artificial Intelligence (AI)',
        // url: '/3DTVTech/demo-j-schooleducational'
    }

    
    
  ];
  
  
  export { categoryList };