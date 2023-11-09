import { COMPANY, EVENT, MUSEUM, SCHOOL } from 'assets';

const categoryList = [
    {
      id: 1,
      title: 'Company / Business Organization',
    //   image: '/img/photos/3DTVTech/home/icon/ic_company.png',
      image: COMPANY.src,
      type: 'company',
    //   url: '/3DTVTech/demo-j-company'
    }
    ,
    {
        id: 2,
        title: 'Event Agency',
        // image: '/img/photos/3DTVTech/home/icon/ic_event.png',
        image: EVENT.src,
        type: 'event',
        // url: '/3DTVTech/demo-j-eventagency'
    }
    ,

    {
        id: 3,
        title: 'Museum / Art Gallery',
        // image: '/img/photos/3DTVTech/home/icon/ic_museum.png',
        image: MUSEUM.src,
        type: 'museum',
        // url: '/3DTVTech/demo-j-meuseumart'
    },
    {
        id:4    ,
        title: 'School / Educational Organization',
        // image: '/img/photos/3DTVTech/home/icon/ic_school.png',
        image: SCHOOL.src,
        type: 'school',
        // url: '/3DTVTech/demo-j-schooleducational'
    }

    
    
  ];
  
  
  export { categoryList };