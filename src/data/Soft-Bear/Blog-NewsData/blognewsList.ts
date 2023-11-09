import { BLOG01, BLOG01PIC01, BLOG01PIC02, BLOG01PIC03, BLOG01V2, BLOG02, BLOG02PIC01, BLOG02PIC02, BLOG02PIC03, BLOG02PIC04, BLOG02PIC05, BLOG02PIC06, BLOG02PIC07, BLOG02PIC08, BLOG02PIC09, BLOG02PIC10, BLOG02PIC11, BLOG03, LOGO } from "assets";

const blogNews = [
  {
    id: 1,
    catagories: 'Technology',
    title: '“Virtual Experience” เข้าสู่โลกเสมือนจริง ในยุค New Normal',
    url: 'https://3dtv-tech.com/blogs/blogs-single-project/?id=1',
    // image: '/img/photos/3DTVTech/blognews/Blog-virtual-01.png',
    image: BLOG01V2.src,
    content1:
      'ในยุค New Normal “Virtual Experience” จะกลายมาเป็นส่วนหนึ่งในชีวิตประจำวัน การทำงาน การเรียนรู้ การท่องที่ยว รวมถึงการเข้าสังคมของเรา ',
    content2: '',
    detail: ` <div style="width: 100%;"><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">ในยุค New Normal&nbsp;</span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">&ldquo;Virtual Experience&rdquo;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">&nbsp;จะกลายมาเป็นส่วนหนึ่งในชีวิตประจำวัน การทำงาน การเรียนรู้ การท่องที่ยว รวมถึงการเข้าสังคมของเรา&nbsp;<br><br></span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">การนำ &ldquo;Virtual Experience&rdquo; ไปประยุกต์ใช้<br></span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><br></span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">Hybrid Events</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">&nbsp;แม้ว่ากิจกรรมบนโลกความเป็นจริงจะกลับมาการจัดกิจกรรมแบบไฮบริดที่สามารถจัดแบบออนกราวด์และแบบเสมือนยังคงมีแนวโน้มที่จะได้รับ ความนิยมมากขึ้น &ldquo;Hybrid Events&rdquo; นี้สามารถขยายขอบเขตของผู้ร่วมงาน การเข้าถึง ของผู้ชมได้ในวงกว้างมากขึ้น ในขณะเดียวกันก็ยังรองรับการเข้าถึง &ldquo;</span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">Virtual Event&rdquo;&nbsp;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">ด้วยการรับชมการสตรีมมิ่งสดจากหน้างานจริง การสัมนาผ่านเว็บ และบูธแสดงสินค้าเสมือนจริง<br><br></span></div>
    
    <div style="width: 100%;">
    <p><img style="width: 100%;" src="${BLOG01PIC01.src}"></p>    <div style="text-align: center; color: #737373; font-size: 20px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><span style="font-size: 16px;">ตัวอย่าง &ldquo;บูธแสดงสินค้าเสมือนจริง&rdquo; ในงาน &ldquo;ACMECS ONLINE BUSINESS MATCHING&rdquo;การจับคู่ทางธุรกิจจากกลุ่มประเทศ CLMV ได้แก่ กัมพูชา ลาว พม่า เวียดนาม และไทยภายใต้ความร่วมมือระหว่างกระทรวงอุตสาหกรรมโดยสำนักงานปลัดกระทรวงอุตสาหกรรมและ AMECES Development Fund ของญี่ปุ่น</span></div>
    <div style="width: 100%;"><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><br></span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">Virtual Museum&nbsp;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">พิพิธภัณฑ์เสมือนจริงเป็นแพลตฟอร์มออนไลน์ที่จำลอง ประสบการณ์การเยี่ยมชมพิพิธภัณฑ์แบบดั้งเดิม หอศิลป์ หรือนิทรรศการ เป็น&nbsp;</span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">&rdquo;พิพิธภัณฑ์เสมือนจริง&rdquo;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">&nbsp;โดยใช้เทคโนโลยีเพื่อให้ผู้ใช้สามารถเข้าถึงงานศิลปะ ประวัติศาสตร์ วัฒนธรรม และเรื่องอื่นๆ ได้โดยไม่จำเป็นต้องเดินทางไปเยี่ยมชม พิพิธภัณฑ์หรือแกลเลอรีจริงๆ<br><br></span></div>
    <p><img style="width: 100%;" src="${BLOG01PIC02.src}"></p>
    <div style="text-align: center; color: #3175D1; font-size: 16px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><a href='https://www.museumsiam.org/virtualexhibition/DecodeThai_4/'>https://www.museumsiam.org/virtualexhibition/DecodeThai_4/</a></div>
    <div style="text-align: center; color: #737373; font-size: 20px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><span style="font-size: 16px;">ตัวอย่าง &ldquo;มิวเซียมเสมือนจริง&rdquo; ของมิวเซียมสยามที่จัดทำขึ้นให้ผู้คนสามารถเข้ามาเยี่ยมชมโดยที่ไม่ต้องเดินทางไปที่สถานที่จริง สามารถเยี่ยมชมมิวเซียมสยามได้ทุกที่ทุกมุมโลกหากรับชมผ่าน &ldquo;มิวเซียมเสมือนจริง&rdquo; แล้วอยากสัมผัสของจริงก็สามารถเดินทางไปเยี่ยมชมที่มิวเซียมสยามได้</span></div>
    <div style="width: 100%;"><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><br></span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">Metaverse&nbsp;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">จักรวาลเสมือนจริงที่อยู่คู่ขนานกับโลกความเป็นจริงเป็นที่สนใจของคน ทั่วโลกไม่กี่ปีที่ผ่านมา &ldquo;Metaverse&rdquo; มาจากคำว่า &ldquo;Meta&rdquo; กับ &ldquo;Verse&rdquo; รวกันแล้วหมายถึง &ldquo;จักรวาลที่อยู่เหนือจินตนาการ&rdquo; ด้วยการขยายการเชื่อมต่อในโลกดิจิทัล Metaverse มีเป้าหมายเพื่อเชื่อมโยงผู้คน ธุรกิจ และประสบการณ์ในสภาพแวดล้อมแบบดิจิทัลที่ราบรื่น โดยสามารถนำไปสู่รูปแบบใหม่ของการสื่อสาร การทำงานร่วมกัน และการสร้างชุมชนโดยไม่มีข้อจำกัดเหมือนโลกความจริง&nbsp;<br><br></span></div>
    <p><img style="width: 100%;" src="${BLOG01PIC03.src}"></p>
    <div style="text-align: center; color: #737373; font-size: 14px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">ตัวอย่าง &ldquo;Metaverse&rdquo; ที่พัฒนาโดยบริษัท 3DTV-Tech จำกัด

    <div style="width: 100%;"><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><br>ในขณะที่โลกกำลังพัฒนา เทคโนโลยีก็มีความก้าวหน้าอย่างต่อเนื่อง&nbsp;</span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">&ldquo;Virtual Experience&rdquo;&nbsp;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">หรือ&nbsp;</span><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">&ldquo;ประสบการณ์เสมือนจริง&rdquo;</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">&nbsp;จะมีแนวโน้มที่จะบูรณาการเข้ากับการใช้ชีวิตของเรามากยิ่งขึ้น</span></div>
    </div>`
    ,
    createdAt: 'September 19,2023'
  },
  {
    id: 2,
    catagories: ' EVENT TECHNOLOGY',
    title: '6 เทรนด์ Interactive Technology สำหรับงานอีเว้นท์',
    url: 'https://3dtv-tech.com/blogs/blogs-single-project/?id=2',
    // image: '/img/photos/3DTVTech/blognews/BlogKinect.png',
    image: BLOG02.src,
    content1:
      'อีเว้นท์ในปัจจุบันคงหนีไม่พ้นที่จะนำเทคโนโลยีเข้ามามีส่วนร่วมในการจัดงานเพื่อเพิ่มการสื่อสารอย่างมีประสิทธิภาพและการสร้างการจดจำแบรนด์/สินค้า และยังได้ทั้งความสะดวกสบายของผู้ร่วมงาน เพิ่มประสิทธิภาพให้กับงานอีเว้นท์',
    content2: '',
    detail: `<div style="width: 100%;"><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><p>อีเว้นท์ในปัจจุบันคงหนีไม่พ้นที่จะนำเทคโนโลยีเข้ามามีส่วนร่วมในการจัดงานเพื่อเพิ่มการสื่อสารอย่างมีประสิทธิภาพและการสร้างการจดจำแบรนด์/สินค้า และยังได้ทั้งความสะดวกสบายของผู้ร่วมงาน เพิ่มประสิทธิภาพให้กับงานอีเว้นท์</p></div>  <div><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;"><p>เรามาดูกันว่า 5 เทรนด์ Interactive Technology ที่นำมาใช้ในงานอีเว้นท์มีอะไรบ้าง</div></p> <div style="width: 100%;"><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><div style="width: 100%;"><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;"><p>1. Microsite Game <span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">เกมไมโครไซต์สำหรับแคมเปญการตลาดและการรับรู้แบรนด์ ให้ผู้เล่นหรือลูกค้ากลุ่มเป้าหมาย มีส่วนร่วมโดยการเล่นเกมและแจกของรางวัล ซึ่งสามารถนำมาใช้ร่วมกับระบบได้ ที่สำคัญสามารถเปลี่ยนกราฟิกให้เหมาะสมกับเป้าหมายแคมเปญของคุณ&nbsp;</p><p style="text-align: center;"><img style="width: 30%;" src="${BLOG02PIC01.src}">&nbsp; &nbsp; &nbsp;<img style="width: 30%;" src="${BLOG02PIC02.src}"></p> <div style={{width: 912, height: 102}}><span style="color: '#3175D1', fontSize: 20, fontFamily: 'Prompt', fontWeight: '600', wordWrap: 'break-word'"><div style="width: 100%;"><span style="color: #3175D1; font-size: 18px; font-family: Prompt; font-weight: 600; word-wrap: break-word;">2. Interactive Touchscreen</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"> เกมจอทีวีที่สามารถกดได้นั่นเอง อาจเป็นจอทีวีขนาด 40-70 นิ้ว โดยจะมีโปรแกรม Interactive ทำงานอยู่กับคอมพิวเตอร์ เช่น เกมตอบคำถาม หรือเกมอะไรง่ายๆ ที่สามารถสื่อสารถึงแบรนด์ได้ รวมทั้งสามารถนำมาประยุกต์ให้ของรางวัลแก่ผู้ที่ได้คะแนนสูงสุด </span></div><p style="text-align: center;"><img style="width: 30%;" src="${BLOG02PIC03.src}">&nbsp; &nbsp; &nbsp;<img style="width: 30%;" src="${BLOG02PIC04.src}"></p><p><p><p><div style={{width: 912, height: 102}}><span style="color: '#3175D1', fontSize: 20, fontFamily: 'Prompt', fontWeight: '600', wordWrap: 'break-word'">3. Mobile Control</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"> สนุกสุดมันไปกับการใช้มือถือเป็นJoystick ในการควบคุมการเล่นเกม สร้างประสบการณ์ใหม่ๆ ลดความจำเจ อีกทั้ง สามารถลดการสัมผัสโดยการใช้มือถือของ ตัวเองในการเล่นได้เลย</span></div><p style="text-align: center;"><img style="width: 30%;" src="${BLOG02PIC05.src}">&nbsp; &nbsp; &nbsp;<img style="width: 30%;" src="${BLOG02PIC06.src}"></p><div style={{width: 912, height: 102}}><span style="color: '#3175D1', fontSize: 20, fontFamily: 'Prompt', fontWeight: '600', wordWrap: 'break-word'">4. Interactive Kinect</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"> การสร้าง Interactive โดยการใช้การเคลื่อนไหวของร่างกาย (Motion) แทนการใช้ Joystick ได้เลย เพียงแค่เรากวาดมือซ้ายขวาหรือจะเต้น ตัวระบบเซ็นเซอร์จะแปลงการเคลื่อนที่ของร่างกาย ทำให้การเล่นเกมเป็นได้อย่างอิสระและเป็นธรรมชาติมากยิ่งขึ้น</span></div><p style="text-align: center;"><img style="width: 30%;" src="${BLOG02PIC07.src}">&nbsp; &nbsp; &nbsp;<img style="width: 30%;" src="${BLOG02PIC08.src}"></p><div style={{width: 912, height: 143}}><span style="color: '#3175D1', fontSize: 20, fontFamily: 'Prompt', fontWeight: '600', wordWrap: 'break-word'">5. Photo Booth</span><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"> สามารถสร้างความประทับใจให้กับผู้ร่วมงานโดยสามารถถ่ายรูปและสร้างประสบการณ์ถ่ายรูป ที่สนุกสนานและแชร์ต่อลงโซเซียลมีเดียได้ อีกทั้งสามารถปรับแต่งภาพ, ใส่กรอบหรือ เพิ่มเอฟเฟกต์ และที่พิเศษสุด คือ การนำ AI Remove Background มาใช้ เพื่อให้ได้ประสบการณ์ที่พิเศษกว่า<br/></span><span style="color: 'black', fontSize: 20, fontFamily: 'Prompt', fontWeight: '400', wordWrap: 'break-word'"><br/></span></div><p style="text-align: center;"><img style="width: 50%;" src="${BLOG02PIC09.src}"></p><div style={{width: 912, height: 143}}><span style="color: '#3175D1', fontSize: 20, fontFamily: 'Prompt', fontWeight: '600', wordWrap: 'break-word'">
    <p>6. Interactive Stage <span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">สามารถสร้างความตื่นเต้นสุดพิเศษบนเวทีได้ เพิ่มการมีส่วนร่วมและเพิ่มengagement โดยที่นิยมใช้กันบ่อยครั้ง คือ Live Vote และ Lucky draw&nbsp;</p><p></p><p><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;">ระบบ Live Vote จะทำให้ผู้ร่วมงาน มีส่วนร่วม รวมทั้งอาจจะมี session คำถามที่สามารถให้ผู้ร่วมงาน พิมพ์ถามสดๆขึ้นบนเวทีได้เลย<br></p>
    <p style="text-align: center;"><img style="width: 50%;" src="${BLOG02PIC10.src}"></p><div style={{width: 912, height: 143, color: 'black', fontSize: 20, fontFamily: 'Prompt', fontWeight: '400', wordWrap: 'break-word'}}><span style="color: #737373; font-size: 18px; font-family: Prompt; font-weight: 400; word-wrap: break-word;"><p></p>ระบบ Lucky draw การสุ่มรางวัลสุดเจ๋งเพื่อให้ผู้ร่วมงานมีส่วนร่วม โดยเราจะใช้ข้อมูลจากการ Register Online มาใช้เป็นรายชื่อ สร้างภาพลักษณ์ที่ทันสมัยให้กับองค์กร รวมทั้งหากเป็นการแจกรางวัล หลายๆรางวัล ก็สามารถ scan QR Code เพื่อตรวจรางวัลเองได้</div><p style="text-align: center;"><img style="width: 50%;" src="${BLOG02PIC11.src}";></p>`,
    createdAt: 'November 3,2023'
  },
  // {
  //   id: 3,
  //   catagories: 'Trend',
  //   title: 'เปิดตัว Iphone 15',
  //   // url: 'www.wfwfwfw.com',
  //   // image: '/img/photos/3DTVTech/blognews/BlogiPhone15.png',
  //   image: BLOG03.src,
  //   content1:
  //     'iPhone 15 เปิดตัวแล้ว เงินในกระเป๋าก็ว้าวุ่น 💸 นอกจากราคาที่มาแรงแซงทุกโค้ง ก็ยังมี feature ที่แรงไม่แพ้กัน 🔥 เรามาลองดูรายละเอียดที่ถูกเปิดเผยกัน',
  //   content2: '',
  //   detail:
  //     'iPhone 15 Pro เป็นสมาร์ทโฟนรุ่นแรกที่รองรับ ACES หรือ Academy Color Encoding System ซึ่งเป็นมาตรฐานด้านสีระดับโลกสำหรับงานโปรดักชั่นภาพยนตร์ และสามารถถ่ายวิดีโอแบบ 3D โดยใช้กล้องอัลตร้าไวด์และกล้องหลักสุดล้ำเพื่อให้คุณสามารถดูช่วงเวลาประทับใจได้บน Apple Vision Pro 🎮 A17 Pro ชิปสุดล้ำ ประสิทธิภาพถูกใจเหล่าเกมเมอร์ 🎮 🖤 iPhone 15 Pro และ iPhone 15 Pro Max สามารถรองรับเกมระดับ AAA ได้จากการอัพเกรดชิปที่ใช้เป็นรุ่นใหม่ล่าสุดในชื่อ A17 Pro ซึ่งได้รับยืนยันแล้วว่า จะสามารถเล่นเกมระดับ AAA ได้ 4 เกมในตอนนี้คือ Resident Evil 4 Remake, Resident Evil VILLAGE, Death Stranding และเกมใหม่ล่าสุด Assassins Creed Mirage 🖤 หลายๆ ท่าน คงไม่เข้าใจว่า ชิป A17 Pro คืออะไร ทำไมถึงเล่นเกมระดับ AAA ได้อย่างลื่นไหล นั้นเป็นเพราะว่า A17 Pro เป็นชิป 3 นาโนเมตรตัวแรกในอุตสาหกรรม  โดยชิป A17 Pro ได้รับการปรับปรุงใหม่ในทุกส่วน รวมถึงการออกแบบ GPU สามารถทำงานเร็วขึ้นสูงสุด 10% ขณะเดียวกัน Neural Engine ก็ทำงานเร็วขึ้นสูงสุด 2 เท่า อีกทั้งตอนนี้ยังรองรับเรย์เทรซิ่งหรือการจำลองธรรมชาติของแสงที่เร่งความเร็วด้วยฮาร์ดแวร์ ซึ่งเร็วกว่าเรย์เทรซิ่งแบบซอฟต์แวร์ถึง 4 เท่า ดังนั้น iPhone 15 Pro จึงให้กราฟิกที่ราบรื่นขึ้นและทำงานกับแอปพลิเคชัน AR หรือการเล่นเกมได้อย่างเต็มอิ่มสมจริงยิ่งขึ้น 😍 เห็นแบบนี้แล้วเงินในกระเป๋าก็ว้าวุ่นไปหมด  อย่าลืมกดติดตามเพจกันน้า ! แอดมินสัญญาจะมีข่าวสารเทคโนโลยีอัพเดทแบบปังๆ แน่นอน 💫',
  //   createdAt: 'September 13,2023'
  // }
];

// export const blogListmini = [
//   {
//     id: 1,
//     catagories : "Innovation",
//     title:"news 02",
//     url:"www.google.com",
//     image:"/img/photos/3DTVTech/blognews/blog1.png",
//     content1: "dawaadwa",
//     content2 : "awdad",
//     detail: "",
//     createdAt:"Octorber 31,2023"
//   },
//   {
//     id: 2,
//     catagories : "Innovation",
//     title:"news 02",
//     url:"www.google.com",
//     image:"/img/photos/3DTVTech/blognews/blog1.png",
//     content1: "dawaadwa",
//     content2 : "awdad",
//     detail: "",
//     createdAt:"Octorber 31,2023"
//   },
//   {
//     id: 3,
//     catagories : "Innovation",
//     title:"news 02",
//     url:"www.google.com",
//     image:"/img/photos/3DTVTech/blognews/blog1.png",
//     content1: "dawaadwa",
//     content2 : "awdad",
//     detail: "",
//     createdAt:"Octorber 31,2023"
//   }
// ]

export { blogNews };
