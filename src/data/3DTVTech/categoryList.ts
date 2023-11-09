import { COMPANY, EVENT, IC_ARTIFICIALINTELLIGENCE, IC_DATASERVICE, IC_IOT, IC_SOFTWARESOLUTION, MUSEUM, SCHOOL } from 'assets';

const categoryList = [
    {
      id: 1,
      title: 'Software Solution',
      image: IC_SOFTWARESOLUTION.src,
      type: 'Software Solution',
      detail: 'การใช้ซอฟแวร์ในการแก้ไขปัญหา ปรับกระบวนการให้เหมาะสม เพื่อเพิ่มประสิทธิภาพ'
    }
    ,
    {
        id: 2,
        title: 'Data Service',
        image: IC_DATASERVICE.src,
        type: 'Data Service',
        detail: 'เราคือผู้สร้างสรรค์งานดิจิทัล แอนิเมชัน และสื่อ Interactive ในทุกรูปแบบ ทุกแพลตฟอร์ม'
    }
    ,

    {
        id: 3,
        title: 'IOT',
        image: IC_IOT.src,
        type: 'IOT',
        detail: 'เราคือผู้สร้างสรรค์งานดิจิทัล แอนิเมชัน และสื่อ Interactive ในทุกรูปแบบ ทุกแพลตฟอร์ม'
    },
    {
        id:4    ,
        title: 'Artificial Intelligence (AI)',
        image: IC_ARTIFICIALINTELLIGENCE.src,
        type: 'Artificial Intelligence (AI)',
        detail: 'เราคือผู้สร้างสรรค์งานดิจิทัล แอนิเมชัน และสื่อ Interactive ในทุกรูปแบบ ทุกแพลตฟอร์ม'
    }

    
    
  ];
  
  
  export { categoryList };