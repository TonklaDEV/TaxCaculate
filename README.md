# ระบบคำนวณภาษี
ระบบคำนวณภาษี เป็นระบบที่พัฒนาขึ้นเพื่อให้ผู้ใช้สร้างตรวจสอบภาษีของตนเองได้ด้วยตนเอง


## วิธีการติดตั้ง

1.  ดาวน์โหลดโปรเจกต์จาก GitHub Repository
```bash
    git clone https://github.com/TonklaDEV/TaxCaculate.git
    cd TaxCaculate 
 ```

2.  เปิดโปรเจกต์ใน IDE ที่คุณต้องการใช้งาน หรือ เปิดผ่าน Visual Studio Code
```bash
	 code .
 ```


## วิธีการใช้งาน
 1. ติดตั้ง Node.js เวอร์ชั่น 14 เปิด Terminal เพื่อทำการ run project
```bash
    npm start
 ```
 2. เปิด browser ที่ต้องการทำการใส่ path : http://localhost:4200/
3. หน้าแรก input-page ที่ type of filing จะทำการเลือก Ordinary filing เป็นค่าเริ่มต้น![enter image description here](https://i.imgur.com/RxxlHQL.png)
4. เมื่อเลือก type เป็น Additional Filing ที่ Tax Computation จะทำการเพิ่ม field ขึ้นมาดังรูป ![enter image description here](https://i.imgur.com/gvRtmNL.png)
5. ให้ผู้ใช้กรอกจำนวนเงินที่ field 1. 
![enter image description here](https://i.imgur.com/3WqD73x.png)
6. ผู้ใช้สามารถเพิ่ม หรือ ลด Total VAT to be remitted (7% of 1.) ได้จากที่แสดงไม่เกิน 20 ด้วยปุ่ม ^ v ด้านข้าง field
![enter image description here](https://i.imgur.com/kMHFg2W.png)
7. กดปุ่ม Next เพื่อตรวจสอบข้อมูลที่หน้า Review and Submit (Ordinary filing)
![enter image description here](https://i.imgur.com/l8nvSIw.png)
8. กดปุ่ม Next เพื่อตรวจสอบข้อมูลที่หน้า Review and Submit (Additional filing)
![enter image description here](https://i.imgur.com/5wuL3QM.png)
9. กดปุ่ม Confirm and Submit เพื่อแสดงข้อมูลเป็นแบบ Json message
![enter image description here](https://i.imgur.com/YcJ0tBn.png) 
 
