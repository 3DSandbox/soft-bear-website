import { describe } from "node:test";

// used in the portfolio-1 block
export const CompanyBussinessOrganization = [
    { id: 1, color: 'blue', category: 'Company / Business organization', title: 'E-Learning to train your employees', image: '/img/photos/3DTVTech/GalleryService/elearning.png' 
    , content1: "E-Learning สำหรับฝึกอบรมพนักงานสามารถเก็บข้อมูลจากการเรียนเพื่อมาประเมินผลในการพัฒนาองค์กรต่อไป"},

    { id: 2, color: 'blue', category: 'Company / Business organization', title: 'Line intergration', image: '/img/photos/3DTVTech/GalleryService/line.png'
, content1: "จัดการระบบธุรกิจของคุณด้วยระบบ Automation วางแผน ติตตาม ผลการทำงาน ของลูกค้าและพนักงานได้อย่างเป็นระบบ", content2: "", content3: "" },

    { id: 3, color: 'blue', category: 'Company / Business organization', title: 'Website Development', image: '/img/photos/3DTVTech/GalleryService/website.png'
, content1: "พัฒนาเว็ปไซต์ ดีไซน์", content2: "", content3: "" },

    { id: 4, color: 'blue', category: 'Company / Business organization', title: 'Virtual Exhibition / Virtual Event', image: '/img/photos/3DTVTech/GalleryService/virtualevent.png'
    , content1: "การจัดงานอีเว้นท์ที่ใช้สื่อในการปฏิสัมพันธ์กับผู้ใช้ให้ผู้ใช้สามารถเข้าถึงแบรนด์ได้ง่ายมีส่วนร่วมกับงานและสนุกมากยิ่งขึ้น" },

    { id: 5, color: 'blue', category: 'Company / Business organization', title: 'IOT Solution', image: '/img/photos/3DTVTech/GalleryService/iot.png' 
    , content1: "คือการเชื่อมต่อ และจัดการอุปกรณ์ต่างๆที่อยู่รอบตัวเรา โดยเราสามารถรวบรวมข้อมูล หรือสั่งงานอุปกรณ์เหล่านั้นผ่านระบบ internet" },

    { id: 6, color: 'blue', category: 'Company / Business organization', title: 'AI Training to use in particular tasks', image: '/img/photos/3DTVTech/GalleryService/aitraining.png' 
    , content1: "-  การเทรน AI (Artificial Intelligent) เพื่อใช้งานเฉพาะทาง เช่น แยกใบเสร็จที่ถูกต้อง" },

    { id: 7, color: 'blue', category: 'Company / Business organization', title: 'Data driven business -> Data Vitualisation', image: '/img/photos/3DTVTech/GalleryService/data.png'
    , content1: "ขับเคลื่อนธุรกิจของคุณไปกับการนำข้อมูลหรือ Data จากแหล่งต่าง ๆ มาวิเคราะห์ประมวลผลแล้วนำเสนอ" },
  ];
    
    // used in the portfolio-2 block
    export const EventAgency = [
      { id: 1, color: 'blue', category: 'Event / Agency', title: 'Interactive games', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "- touch screen", content2: "- mobile device as control", content3: "- hardware control eg, joy stick", content4:"- kinect Others"},
  
      { id: 2, color: 'blue', category: 'Event / Agency', title: 'Microsite game', image: '/img/photos/3DTVTech/GalleryService/micrositegame.png'
  , content1: "เกมส์มือถือ หรือ ไมโครไซต์" },
  
      { id: 3, color: 'blue', category: 'Event / Agency', title: 'Instagram Filter', image: '/img/photos/3DTVTech/interactivepage/i02.png'
  , content1: "สร้างเคมเปญหรือกิจกรรมสนุก ๆ ให้กับผู้ใช้งานผ่าน ฟิลเตอร์กล้องถ่ายภาพจาก Instagram" },
  
      { id: 4, color: 'blue', category: 'Event / Agency', title: 'Regsiteration / Checkin / Q and A / Lucky draw', image: '/img/photos/3DTVTech/GalleryService/regsiteration.png'
      , content1: "สร้างระบบสมัครสมาชิก / เช็คอิน / ระบบคำถามตอบ รวมถึงระบบจับรางวัล" },
  
      { id: 5, color: 'blue', category: 'Event / Agency', title: 'Tracking participate in the events', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "สร้าง Progress สำหรับการติดตามการมีส่วนร่วมในกิจกรรม สำหรับงานอีเว้นท์" },
  
      { id: 6, color: 'blue', category: 'Event / Agency', title: 'Photobooth / karaoke Booth', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "สร้างสรรค์ตู้หรือบูทสำหรับใช้เป็นสื่อปฏิสัมพันธ์กับผู้ใช้งานเพื่อให้เข้าถึงแบรนด์ได้อย่างง่ายและสนุกมากยิ่งขึ้น" },
  
      { id: 7, color: 'blue', category: 'Event / Agency', title: 'web based AR / VR', image: '/img/photos/3DTVTech/GalleryService/arvr.png' 
      , content1: "หยิบเทคโนโลยีเสมือนอย่าง AR หรือ VR มาเป็นสื่อในการปฏิสัมพันธ์แบรนด์ของคุณและลูกค้า" },
  
      { id: 8, color: 'blue', category: 'Event / Agency', title: 'Projection Mapping / Interactive Projection Mapping', image: '/img/photos/3DTVTech/GalleryService/projection.png' 
      , content1: "นำกระบวนการฉายภาพที่ไม่ใช่เพียงการฉายโปรเจคเตอร์ แต่อาศัยการนำศาสตร์หลายแขนงมารวมกัน เพื่อสร้างเป็นงานศิลป์ที่ผู้ชมสามารถมีส่วนร่วมได้" },
  
      { id: 9, color: 'blue', category: 'Event / Agency', title: 'Virtual Production', image: '/img/photos/3DTVTech/GalleryService/virtualproduct.png' 
      , content1: "การผสมกันระหว่างภาพ Live Footage ที่เราเห็นกับภาพ Digital ที่เห็นจากคอมพิวเตอร์แล้วผสมกัน เพื่อจะได้สร้างการตอบสนองแบบเรียลไทม์ (Real-time feedback)" },

    ];
    
    // used in the portfolio-3 block
    export const MuseumArtGallery = [
      { id: 1, color: 'blue', category: 'MuseumArtGallery', title: 'VIRTUAL MUSEUM', image: '/img/photos/3DTVTech/GalleryService/virtualmesuem.png'
      , content1: "การทำพิพิธภัณฑ์เสมือน สามารถมองได้แบบ 360 องศา"},
  
      { id: 2, color: 'blue', category: 'Museum / ArtGallery', title: 'Online Buying Ticket System', image: '/img/photos/3DTVTech/interactivepage/i02.png'
  , content1: "POS" },
  
      { id: 3, color: 'blue', category: 'Museum / ArtGallery', title: 'INTERACTIVE / GAME', image: '/img/photos/3DTVTech/interactivepage/i02.png'
  , content1: "- touch screen", content2: "- mobile device as control", content3: "- hardware control eg, joy stick", content4:"- kinect Others"},
  
      { id: 4, color: 'blue', category: 'Museum / ArtGallery', title: 'HARDWARE SET CONTROL', image: '/img/photos/3DTVTech/GalleryService/hardwareset.png'
      , content1: "ติดตั้งอุปกรณ์ฮาร์ดแวร์ต่าง ๆ ทั้งภายในอาคารหรือนอกสถานที่" },
  
      { id: 5, color: 'blue', category: 'Museum / ArtGallery', title: 'AID TOUR', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "ตัวช่วยในการสื่อสารกับชาวต่างชาติ สำหรับงานนิทรรศการของคุณ" },
  
      { id: 6, color: 'blue', category: 'Museum / ArtGallery', title: 'TRACKING PARTICIOANTS', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "สร้าง Progress สำหรับการติดตามผู้เข้าร่วม" },
  
      { id: 7, color: 'blue', category: 'Museum / ArtGallery', title: 'Collecting Data and Data analysis / Data driven', image: '/img/photos/3DTVTech/GalleryService/collectdata.png' 
      , content1: "เก็บข้อมูลและวิเคราะห์ข้อมูล เพื่อใช้สำหรับขับเคลื่อน" }
    ];
    
    // used in the portfolio-4 block
    export const SchoolEducational = [
      { id: 1, color: 'blue', category: 'School / Educational', title: 'E-Learning', image: '/img/photos/3DTVTech/GalleryService/elearning.png' 
      , content1: "การทำ E-Learning สำหรับองค์กร เพื่อการฝึกอบรมพนักงานสามารถเก็บข้อมูลจากการเรียนเพื่อมาประเมินผลในการพัฒนาองค์กรต่อไป"},
  
      { id: 2, color: 'blue', category: 'School / Educational', title: '3D / 4D Cinema', image: '/img/photos/3DTVTech/GalleryService/cinema.png'
  , content1: "ติดตั้งอุปกรณ์สำหรับโรงภาพยนต์ 3 มิติ และ 4 มิติ" },
  
      { id: 3, color: 'blue', category: 'School / Educational', title: 'Interactive', image: '/img/photos/3DTVTech/interactivepage/i02.png'
  , content1: "- touch screen", content2: "- mobile device as control", content3: "- hardware control eg, joy stick", content4:"- kinect Others"},
  
      { id: 4, color: 'blue', category: 'School / Educational', title: 'Other teaching aids', image: '/img/photos/3DTVTech/interactivepage/i02.png'
      , content1: "สร้างสื่ออุปกรณ์การเรียนการสอนต่าง ๆ สำหรับนันทนาการ" },
  
      { id: 5, color: 'blue', category: 'School / Educational', title: 'Aid tour such as simulator / ar / vr', image: '/img/photos/3DTVTech/interactivepage/i02.png' 
      , content1: "สร้างสื่อจำลองสำหรับไว้ใช้ในการเรียนการสอน" }
    ];
    