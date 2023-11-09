import Lamp from 'icons/solid-mono/Lamp';
import Puzzle from 'icons/solid-mono/Puzzle';
import PenTool from 'icons/solid-duo/PenTool';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
import { BANNER13, BANNER23, ELEARNING, IC_ACCESSIBILITY, IC_COSTEFFICIENCY, IC_GLOBALREACH, IMG_DETAILVIRTUAL, TYPEOFVIRTUALEVENT, VIRTUALEXPERIENCE } from 'assets';


export const detaildataList = [
  {
    id: 1,
    category: 'Virtual Experience',
    bgimage: BANNER13.src,
    image: VIRTUALEXPERIENCE.src,
    imagedetail: IMG_DETAILVIRTUAL.src,
    title: 'Virtual Experience',
    description1: 'สร้างประสบการณ์สุดล้ำสมัยด้วยเทคโนโลยี Virtual Exhibition / Virtual Museum และ Metaverse',
    description2: '',
    textfooter: '',
    detail1: 'จากสถานการโควิด 19 ระบาดที่ผ่านมา ทำให้ผู้เดินทางกันน้อยลง Event offline ลดลง และมีการจัด Event Online กันมากขึ้น ไม่แม้แต่มิวเซียมทั่วโลกก็หันมาทำ Virtual Museum กันอย่าง แพร่หลายเพื่อให้อยู่รอด และผู้คนจากทั่วมุมโลกสามารถเข้าถึงได้ เพียงแค่มีอินเทอร์เน็ต เป็นการสร้างประสบการณ์ระยะยาว ให้กับผู้คนได้มากขึ้น',
    detail2: '“Virtual Experience” หรือ “ประสบการณ์เสมือนจริง” กลายมาเป็นสิ่งสำคัญมากขึ้นต่อชีวิตประจำวันในด้านต่างๆ ผ่าน “โลกเสมือนจริง” ไม่ว่าจะเป็นการเรียน การทำงาน ความบันเทิง การท่องเที่ยวไปจนถึงการเยี่ยมชมพิพิธภัณฑ์ การชมงานศิลปะ ทั้งนี้ “Virtual Experience” จะกลายมาเป็น “New Normal” เนื่องจากสถานการณ์ต่างๆ ที่เกิดขึ้น ในปัจจุบัน',
    features: [
      { id: 1, image: IC_ACCESSIBILITY.src, name: 'Accessibility', detail: 'มีการเข้าถึงของผู้ใช้งาน “ประสบการณ์ เสมือนจริง” ในกิจกรรมต่างๆ ที่กว้าง มากขึ้น' },
      { id: 2, image: IC_COSTEFFICIENCY.src, name: 'Cost-Efficiency', detail: 'การเข้าถึง ”ประสบการณ์เสมือนจริง” มีต้นทุนในการผลิตน้อยกว่า ประสบการณ์จริง' },
      { id: 3, image: IC_GLOBALREACH.src, name: 'Global Reach', detail: 'สามารถเข้าได้จากทั่วทุกมุมโลก'}
    ],
    typeof: [
      { id: 1, image: TYPEOFVIRTUALEVENT.src, title: 'Virtual Event', url: ''}
    ]
  }
]