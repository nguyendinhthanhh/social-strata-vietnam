# Báo Cáo Thẩm Định & Đánh Giá Tính Trực Quan (Visual Audit Report)
## Triển lãm số chuyên đề MLN131: VIỆT NAM ĐA TẦNG (Chương V, Chủ đề 07)

*Chủ trì thẩm định:* Senior Editorial Art Director  
*Thời điểm thẩm định:* Tháng 11 năm 2026 (Milestone 08 — Phase 1 Visual Audit)  
*Môi trường khảo sát:* Ứng dụng Next.js vận hành trên môi trường nội bộ (`http://localhost:3000`)  
*Căn cứ thẩm định thực nghiệm:*  
- Ảnh chụp màn hình thực tế độ phân giải gốc: [`tests/screenshots/desktop-1440.png`](file:///d:/viet-nam-da-tang/tests/screenshots/desktop-1440.png) (1440 x 900 px), [`tests/screenshots/mobile-390.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-390.png) (390 x 844 px), [`tests/screenshots/mobile-320.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-320.png) (320 x 568 px).  
- Tài liệu quy chuẩn thiết kế: [`spec/DESIGN_DIRECTION.md`](file:///d:/viet-nam-da-tang/spec/DESIGN_DIRECTION.md), [`.agents/rules/visual-editorial.md`](file:///d:/viet-nam-da-tang/.agents/rules/visual-editorial.md), [`docs/ART_DIRECTION.md`](file:///d:/viet-nam-da-tang/docs/ART_DIRECTION.md), [`docs/DESIGN_TOKENS.md`](file:///d:/viet-nam-da-tang/docs/DESIGN_TOKENS.md).  
- Báo cáo kiểm định chất lượng: [`docs/VISUAL_QA.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_QA.md), [`docs/TECH_QA.md`](file:///d:/viet-nam-da-tang/docs/TECH_QA.md).

---

## 1. Tóm Lược Nhận Định Giám Tuyển Nghệ Thuật (Executive Curatorial Summary)

Qua kiểm tra trực tiếp các ảnh chụp màn hình trình duyệt thực tế được kết xuất từ máy chủ phát triển nội bộ, nhóm Art Direction ghi nhận:

1. **Thành tựu cấu trúc & trợ năng:**  
   Website đã xây dựng thành công bộ khung typographic chuẩn mực, hệ thống biến số màu sắc đạt chuẩn tương phản cao nhất (WCAG 2.1 AAA: 16.8:1 đối với văn bản đọc chính), logic phân cấp thông tin bài giảng chặt chẽ, thanh điều khiển triển lãm (Exhibition Control Bar) cùng các tương tác SVG tam giác và sơ đồ chuỗi giá trị vận hành ổn định, không có hiện tượng vỡ khung hay tràn ngang trên bất kỳ thiết bị nào (kể cả màn hình cực nhỏ 320px).

2. **Khuyết tật thị giác cốt lõi (The Core Visual Deficit):**  
   Mặc dù triết lý nghệ thuật ban đầu xác định dự án là một **"Bản phóng sự thị giác đương đại / Không gian triển lãm số (Contemporary Editorial Documentary / Curatorial Exhibition)"**, giao diện thực tế hiện tại **hoàn toàn vắng bóng các hình ảnh tư liệu phóng sự chân thực**.  
   Toàn bộ 6 phân cảnh hiện tại được xây dựng hoàn toàn từ các khối hộp màu nền (*Chalk*, *Warm Stone*, *Carbon*), đường viền mảnh 1px, văn bản và các biểu tượng vector (Lucide icons).

3. **Hệ quả sư phạm & trải nghiệm người dùng:**  
   Sự thiếu hụt hình ảnh con người và hiện thực sản xuất khiến không gian triển lãm có nguy cơ biến thành một "bản đề cương giáo trình điện tử nâng cao" (Enhanced LMS Syllabus) hoặc một giao diện phần mềm công nghiệp khô khan, thiếu đi "nhịp đập đời sống" và xúc cảm nhân văn cần thiết để sinh viên thế hệ mới cảm thụ sâu sắc môn Triết học & Chủ nghĩa xã hội khoa học.

---

## 2. Đánh Giá Tính Trực Quan Chi Tiết Từng Phân Cảnh (Scene-by-Scene Visual Audit)

```
+-------------------------------------------------------------------------------------------------------------------+
|                                  BẢNG ĐÁNH GIÁ TÍNH TRỰC QUAN HIỆN TẠI (PHASE 1)                                   |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| Scene | Tên phân cảnh           | Điểm mạnh thị giác hiện tại     | Điểm nghẽn thị giác & Thiếu hụt trực quan     |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 01    | Bức tranh Xã hội VN     | Typography uy nghiêm, tương phản| 100% text/vector, thiếu cụm ảnh tư liệu       |
|       | (Hero & Dẫn nhập)       | Carbon-Citron, watermark chìm   | mở đầu; chưa tạo được "cú hích thị giác" ban  |
|       |                         | sắc sảo, mục lục 6 trạm rõ ràng.| đầu (Visual Hook / Hero Documentary Spread).  |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 02    | Giải mã Tọa độ Xã hội   | Sơ đồ SVG tam giác 3 quan hệ    | Toàn bộ diễn giải sở hữu, quản lý, phân phối  |
|       | (Khái niệm & Tam giác)  | trực quan, chuyển đỉnh mượt mà, | là chữ và gạch đầu dòng; thiếu ảnh đối trọng  |
|       |                         | cảnh báo pháp lý đất đai rõ nét.| về thực thể sản xuất và sở hữu tại Việt Nam.  |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 03    | Dòng chảy Biến chuyển   | Stepper 3 quy luật mạch lạc, sơ | Tiến trình lịch sử kinh tế đổi mới vĩ mô      |
|       | (Ba Quy luật TKQĐ)      | đồ mũi tên logic, so sánh lý    | cực kỳ giàu chất liệu nhưng lại bị "hộp hóa"  |
|       |                         | luận - thực tiễn chuẩn khoa học.| thành các ô chữ tĩnh, thiếu sức sống thời đại.|
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 04    | Lát cắt Đương đại       | Phân biệt giai cấp vs nhân khẩu | THIẾU HỤT NGHIÊM TRỌNG NHẤT: Gọi là "Hồ sơ    |
|       | (Hồ sơ 6 Lực lượng XH)  | giao thoa, 3 cột Vị trí - Vai   | chân dung" nhưng KHÔNG CÓ BỨC ẢNH CHÂN DUNG   |
|       |                         | trò - Đóng góp sư phạm tối ưu.  | NÀO! Chỉ có icon vector đại diện tượng trưng. |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 05    | Hạt gạo Liên minh       | Hai chế độ xem (Chuỗi & Mạng    | Chủ đề lúa gạo ĐBSCL rất giàu hình ảnh nhưng  |
|       | (Mô hình Sư phạm Lúa)   | lưới) độc đáo, bám sát Quyết    | chỉ thể hiện qua các khối text màu xám nhạt,  |
|       |                         | định 1490/QĐ-TTg của Thủ tướng. | thiếu hình ảnh cánh đồng, viện lúa, cảng biển.|
+-------+-------------------------+---------------------------------+-----------------------------------------------+
| 06    | Đúc kết & Thử thách     | Trắc nghiệm 5 câu tương tác mượt| 3 thẻ bài học đúc kết tĩnh; vùng kết quả thi  |
|       | (3 Bài học & Quiz)      | mà, giải thích sư phạm cặn kẽ,  | chưa có huy hiệu thị giác vinh danh xứng tầm; |
|       |                         | thanh đo lường trực quan.       | thiếu ảnh biểu trưng cho Khối Đại đoàn kết.   |
+-------+-------------------------+---------------------------------+-----------------------------------------------+
```

---

### Phân tích sâu từng phân cảnh:

### 2.1. Phân cảnh 01: Bức tranh Xã hội Việt Nam (Hero & Dẫn nhập)
* **Thực trạng qua ảnh chụp:**  
  Màn hình desktop 1440px tràn ngập tông đen than chì (*Carbon* `#121416`), tiêu đề chữ lớn `VIỆT NAM ĐA TẦNG` tương phản sắc sảo cùng màu vàng chanh (*Citron* `#C8D668`) và đỏ son (*Vermilion* `#C8372D`). Chữ chìm `VIET NAM` mờ phía sau tạo nét báo chí tinh tế.
* **Vấn đề thẩm mỹ:**  
  Trong bản thiết kế định hướng (`spec/DESIGN_DIRECTION.md`), phân cảnh Hero được quy hoạch: *"Hero full-bleed documentary photo/collage with strong statement + section index"*. Hiện tại, cột phải và toàn bộ nền vắng bóng hoàn toàn yếu tố nhiếp ảnh. Kết quả là người học nhìn vào cảm thấy như đang đọc trang bìa của một cuốn sách chuyên luận hơn là bước chân vào một cuộc triển lãm số tương tác.
* **Đề xuất Art Direction:**  
  Bổ sung cụm tác phẩm nhiếp ảnh tư liệu phức hợp (Documentary Composition Spread) tại khu vực dẫn nhập hoặc làm nền với kỹ thuật phủ lớp lọc tối (*dark duotone mask*), khắc họa nhịp sống đa ngành của nhân dân lao động Việt Nam ngay từ giây đầu tiên tiếp cận.

---

### 2.2. Phân cảnh 02: Giải mã Tọa độ Xã hội (Định nghĩa & Tam giác Quan hệ)
* **Thực trạng qua ảnh chụp:**  
  Cột trái phân biệt Cơ cấu xã hội tổng thể và Cơ cấu xã hội – giai cấp; phần dưới là sơ đồ SVG tam giác 3 quan hệ tương tác nhấp chọn 3 đỉnh.
* **Vấn đề thẩm mỹ:**  
  Khi người học chọn đỉnh "Sở hữu TLSX" hoặc "Tổ chức & Quản lý", toàn bộ nội dung hiển thị trong bảng điều khiển bên phải là văn bản gạch đầu dòng dài. Vấn đề "Sở hữu toàn dân về đất đai" hay "Quản lý dây chuyền công nghiệp hiện đại" là những thực thể vật chất sinh động, nhưng người học không thấy được bất kỳ hình ảnh nào về nhà xưởng, hạ tầng cảng biển, ruộng đồng được cấp quyền sử dụng đất.
* **Đề xuất Art Direction:**  
  Tích hợp các khung ảnh phóng sự minh chứng trực quan đi liền với từng đỉnh quan hệ: Ảnh hạ tầng năng lượng/công nghiệp quốc gia cho đỉnh Sở hữu; ảnh buồng điều khiển trung tâm tự động hóa cho đỉnh Quản lý; ảnh lễ ký kết thỏa ước lao động và đại biểu công nhân cho đỉnh Địa vị & Phân phối.

---

### 2.3. Phân cảnh 03: Dòng chảy Biến chuyển (Ba Quy luật Biến đổi)
* **Thực trạng qua ảnh chụp:**  
  Bộ Stepper 3 bước dẫn dắt người học qua 3 quy luật. Cấu trúc so sánh giữa Căn cứ lý luận Mác – Lênin và Biểu hiện thực tiễn tại Việt Nam được bố trí theo dạng thẻ đối sánh ngang hoặc dọc trên mobile.
* **Vấn đề thẩm mỹ:**  
  Quá trình Đổi mới từ năm 1986 đến nay là một cuộc chuyển mình vĩ đại của lịch sử dân tộc: từ nền nông nghiệp lạc hậu tự cung tự cấp sang nền kinh tế nhiều thành phần, kinh tế số và liên minh giai cấp hiện đại. Tuy nhiên, giao diện hiện tại thể hiện sự chuyển dịch này bằng những chiếc hộp văn bản phẳng và sơ đồ mũi tên ký tự (`->`), khiến sự biến chuyển lịch sử bị khô cứng, thiếu tính kịch tính của nghệ thuật kể chuyện thị giác (Scrollytelling).
* **Đề xuất Art Direction:**  
  Thiết kế layout tạp chí 2 cột (Editorial Split Screen) cho từng bước quy luật: một cột dành cho văn bản lý luận cô đọng, cột còn lại dành cho ảnh tư liệu lịch sử – đương đại thể hiện sự tương phản rõ nét giữa nông nghiệp truyền thống và các đại công trường công nghệ mới.

---

### 2.4. Phân cảnh 04: Lát cắt Đương đại (Hồ sơ 6 Lực lượng Xã hội)
* **Thực trạng qua ảnh chụp:**  
  Giao diện gồm thanh chuyển bộ lọc (Tất cả / 4 Giai tầng / 2 Nhóm giao thoa), 6 nút chọn hồ sơ lực lượng, và panel mở rộng 3 cột (*Vị trí - Vai trò - Đóng góp*).
* **Vấn đề thẩm mỹ:**  
  **Đây là thiếu hụt lớn nhất về tính trực quan của toàn bộ trang web.** Một phân cảnh mang tên *"Hồ sơ Chân dung Lực lượng Xã hội (Social Forces Dossier)"* nhưng hoàn toàn không có khuôn mặt, không có ánh mắt, không có hình ảnh người lao động bằng xương bằng thịt! Các biểu tượng vector như cặp tài liệu hay chiếc búa không thể thay thế được xúc cảm chân thực của một người công nhân lắp ráp vi mạch bán dẫn, một nhà khoa học nữ bên kính hiển vi, một lão nông thời đại 4.0 hay một nữ doanh nhân điều hành doanh nghiệp toàn cầu.
* **Đề xuất Art Direction:**  
  Bổ sung cấu trúc **Chân dung phóng sự báo chí (Editorial Portrait Spread)**: Mỗi lực lượng sở hữu một bức ảnh chân dung phóng sự độc bản khổ dọc (tỷ lệ 4:5 hoặc 3:4), ghi lại khoảnh khắc lao động thực tế với ánh sáng tự nhiên, góc chụp trang nghiêm, có nhãn lưu trữ tác phẩm và nguồn trích dẫn pháp lý rõ ràng.

---

### 2.5. Phân cảnh 05: Hạt gạo Liên minh (Mô hình Sư phạm Chuỗi Giá trị)
* **Thực trạng qua ảnh chụp:**  
  Mô hình chuỗi lúa gạo 4 bước (*Trí thức -> Nông dân -> Công nhân -> Doanh nhân*) và chế độ xem mạng lưới liên minh 6 lực lượng xã hội được thể hiện logic và bài bản.
* **Vấn đề thẩm mỹ:**  
  Hạt gạo ST25, đề án 1 triệu héc-ta lúa chất lượng cao phát thải thấp tại ĐBSCL theo Quyết định 1490/QĐ-TTg là niềm tự hào lớn của nền kinh tế Việt Nam. Tuy nhiên, toàn bộ 4 công đoạn hiện chỉ hiển thị dưới dạng các thẻ màu xám nhạt với icon nhỏ. Người học không cảm nhận được màu xanh của cánh đồng mẫu lớn, sự tinh vi của phòng nuôi cấy mô giống lúa, sự hoành tráng của tổ hợp nhà máy sấy lúa tự động hay nhịp điệu bốc dỡ hàng tại cảng Cát Lái/Cái Mép.
* **Đề xuất Art Direction:**  
  Bố cục lại mỗi công đoạn thành một thẻ phóng sự tài liệu: Ảnh nền thu nhỏ hoặc ảnh đối xứng chất lượng cao ghi nhận thực địa chuỗi giá trị gạo Việt Nam.

---

### 2.6. Phân cảnh 06: Đúc kết Nhận thức & Thử thách (Quiz 5 câu)
* **Thực trạng qua ảnh chụp:**  
  Phần đúc kết gồm 3 hộp bài học cốt lõi Chương V, tiếp theo là khung trắc nghiệm tương tác 5 câu hỏi có thanh chỉ số tiến trình và bảng giải thích học thuật sâu sắc.
* **Vấn đề thẩm mỹ:**  
  Khu vực đúc kết 3 bài học còn đơn điệu về mặt thị giác. Vùng kết quả sau khi hoàn thành bài thi chưa tạo được điểm rơi cảm xúc hân hoan (Curatorial Climax) xứng đáng cho người học.
* **Đề xuất Art Direction:**  
  Bổ sung bức ảnh đại diện toàn cảnh cho **Khối Đại đoàn kết toàn dân tộc** gắn liền với bài học liên minh giai cấp; thiết kế huy hiệu chứng nhận thị giác (Curatorial Completion Badge) trang trọng khi người học hoàn thành bài thi.

---

## 3. Danh Mục Đề Xuất 17 Hình Ảnh Tư Liệu Phóng Sự Chân Thực (Curatorial Asset Catalog)

Để giải quyết triệt để sự thiếu hụt hình ảnh trong Phase 2, Art Director xây dựng danh mục **17 hình ảnh tư liệu phóng sự chân thực**, đáp ứng đầy đủ yêu cầu khắt khe về bản quyền, tính chính xác học thuật MLN131 và nghệ thuật thị giác đương đại:

```
+-------------------------------------------------------------------------------------------------------------------------+
|                                    DANH MỤC ĐỀ XUẤT 17 HÌNH ẢNH TƯ LIỆU PHÓNG SỰ CHÂN THỰC                              |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| ID | Scene  | Tên tư liệu        | Mô tả khuôn hình & Nội dung phóng sự     | Tỷ lệ khung | Mục tiêu sư phạm MLN131     |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 01 | Sc. 01 | Nhịp sống Đa tầng  | Toàn cảnh nhịp sống lao động Việt Nam    | 21:9 / 16:9 | Hero Visual Hook: Khẳng định|
|    |        | (Hero Spread)      | đan xen công nghiệp, nông nghiệp, đô thị | Panorama    | con người là trung tâm lịch |
|    |        |                    | và nghiên cứu khoa học; ánh sáng rực rỡ. |             | sử và chủ thể thời đại mới. |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 02 | Sc. 01 | Sớm mai Đất nước   | Nhịp bước công nhân, sinh viên, nông dân | 16:9        | Curatorial Prologue: Minh   |
|    |        | (Prologue Vignette)| bắt đầu ngày mới trên dải đất hình chữ S.| Landscape   | họa đoạn văn dẫn nhập mở đầu|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 03 | Sc. 02 | Nền tảng Quốc gia  | Tổ hợp công nghiệp huyết mạch / Công     | 16:9        | Đỉnh Sở hữu TLSX: Đất đai,  |
|    |        | (Tư liệu sản xuất) | trình năng lượng quốc gia sở hữu toàn dân| Landscape   | tài nguyên là tài sản công. |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 04 | Sc. 02 | Trí tuệ Điều hành  | Kỹ sư và chuyên gia điều hành trung tâm  | 16:9        | Đỉnh Tổ chức & Quản lý: Hợp |
|    |        | (Quản lý sản xuất) | giám sát tự động hóa thông minh.         | Landscape   | tác bình đẳng công nghệ cao.|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 05 | Sc. 02 | Làm chủ Xã hội     | Đại biểu công nhân và người lao động     | 16:9        | Đỉnh Địa vị & Phân phối: Vai|
|    |        | (Địa vị & Phúc lợi)| tham gia đối thoại, thụ hưởng an sinh.   | Landscape   | trò lãnh đạo và an sinh XH. |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 06 | Sc. 03 | Chuyển dịch Cơ cấu | Đối sánh cánh đồng truyền thống và đại   | 16:9        | Quy luật 1: Cơ cấu kinh tế  |
|    |        | (Quy luật 1)       | công trường khu công nghiệp ven biển.    | Landscape   | quy định cơ cấu giai tầng.  |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 07 | Sc. 03 | Tầng lớp Mới       | Doanh nhân công nghệ, chuyên gia phần    | 16:9        | Quy luật 2: Đa dạng hóa các |
|    |        | (Quy luật 2)       | mềm trong không gian đổi mới sáng tạo.   | Landscape   | thành phần & tầng lớp mới.  |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 08 | Sc. 03 | Nhịp cầu Xích lại  | Lớp đào tạo số hóa cho thanh niên nông   | 16:9        | Quy luật 3: Xu thế xích lại |
|    |        | (Quy luật 3)       | thôn và công nhân kỹ thuật.              | Landscape   | gần nhau về tri thức & sống.|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 09 | Sc. 04 | Chân dung Công nhân| Người thợ cơ khí chính xác/bán dẫn trong | 4:5         | Hồ sơ 01: Giai cấp tiên     |
|    |        | (Industrial Pro)   | đồng phục bảo hộ, ánh mắt tự tin làm chủ.| Portrait    | phong, giữ vai trò lãnh đạo.|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 10 | Sc. 04 | Chân dung Nông dân | Lão nông số bên vườn ươm công nghệ cao,  | 4:5         | Hồ sơ 02: Lực lượng chủ thể,|
|    |        | (Smart Farmer)     | sử dụng thiết bị số điều khiển tưới tiêu.| Portrait    | chuyển đổi kinh tế nông thôn|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 11 | Sc. 04 | Chân dung Trí thức | Nhà khoa học nữ trong phòng thí nghiệm   | 4:5         | Hồ sơ 03: Lao động sáng tạo,|
|    |        | (Scientist/Lab)    | công nghệ sinh học nông nghiệp.          | Portrait    | đưa KH thành LLSX trực tiếp.|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 12 | Sc. 04 | Chân dung Doanhnhân| Nữ/nam doanh nhân tại nhà máy sản xuất   | 4:5         | Hồ sơ 04: Tổ chức sản xuất, |
|    |        | (Entrepreneur)     | xuất khẩu hiện đại, phong thái hội nhập. | Portrait    | tạo việc làm, động lực lớn. |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 13 | Sc. 04 | Chân dung Phụ nữ   | Nữ kỹ sư điều hành công trình trọng điểm | 4:5         | Hồ sơ 05: Giao thoa giới,   |
|    |        | (Women Workforce)  | hoặc nữ lãnh đạo hợp tác xã kiểu mới.    | Portrait    | hiện diện trong mọi giai cấp|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 14 | Sc. 04 | Chân dung Thanhniên| Kỹ sư trẻ lập trình robot công nghiệp    | 4:5         | Hồ sơ 06: Giao thoa tuổi trẻ|
|    |        | (Youth Innovator)  | hoặc thanh niên tình nguyện chuyển đổi số| Portrait    | (16-30), xung kích đổi mới. |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 15 | Sc. 05 | Mầm xanh Liên minh | Nhà khoa học nông nghiệp cùng nông dân   | 16:9        | Chặng 1 & 2: Liên minh Trí  |
|    |        | (Trí thức & Nôngdân| kiểm tra giống lúa ST25 ngay trên ruộng. | Landscape   | thức - Nông dân trên đồng.  |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 16 | Sc. 05 | Vươn khơi Giá trị  | Dây chuyền chế biến tự động và container | 16:9        | Chặng 3 & 4: Liên minh Công |
|    |        | (Côngnhân&Doanhnhân| gạo thương hiệu Việt xếp tại cảng biển.  | Landscape   | nhân - Doanh nhân xuất khẩu.|
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
| 17 | Sc. 06 | Khối Đại Đoàn Kết  | Toàn cảnh các tầng lớp nhân dân trong    | 16:9        | Đúc kết bài học: Liên minh  |
|    |        | (National Unity)   | ngày hội đại đoàn kết dân tộc trang trọng| Landscape   | là nền tảng đại đoàn kết.   |
+----+--------+--------------------+------------------------------------------+-------------+-----------------------------+
```

---

## 4. Đặc Tả Chi Tiết Từng Tư Liệu & Tiêu Chuẩn Biên Tập (Editorial Specifications)

### 4.1. Nhóm Tư Liệu Scene 01: Hero & Dẫn Nhập
* **`IMG-01: hero-documentary-panoramic.webp`**
  - **Vị trí hiển thị:** Scene 01 Hero, lớp nền bán trong suốt phía sau tiêu đề chính trên desktop, hoặc cụm thẻ ảnh đối xứng cạnh tiêu đề.
  - **Mô tả chi tiết:** Toàn cảnh một công trình trọng điểm quốc gia trong buổi sớm mai: ánh nắng rực rỡ chiếu rọi trên các cẩu trục cảng biển, phía xa là đồng lúa xanh ngát và những nhịp cầu vượt hiện đại nối liền đô thị. Thể hiện nhịp thở công nghiệp hóa và hiện đại hóa.
  - **Quy chuẩn hiển thị:** Tỷ lệ 21:9 (desktop) / 16:9 (mobile); có lớp phủ gradient đen than chì (`from-carbon/95 via-carbon/80 to-carbon/40`) để đảm bảo tiêu đề `VIỆT NAM ĐA TẦNG` đạt độ tương phản chuẩn WCAG AAA.
  - **Alt-text chuẩn trợ năng:** *"Toàn cảnh bức tranh lao động sản xuất Việt Nam thời kỳ công nghiệp hóa hiện đại hóa với cảng biển, nhà máy và đồng ruộng giao hòa dưới ánh bình minh."*
  - **Huy hiệu nguồn:** `[MINH_HOA] Phóng sự ảnh tư liệu lao động Việt Nam đương đại`.

* **`IMG-02: morning-workforce-prologue.webp`**
  - **Vị trí hiển thị:** Cột trái trong khối Lời Mở dẫn (Curatorial Prologue).
  - **Mô tả chi tiết:** Cận cảnh những bước chân người lao động bước vào ca làm việc buổi sáng tại khu công nghệ cao: áo bảo hộ lao động phản quang, thẻ nhân viên, balo trên vai, toát lên sự hăng say và kỷ luật công nghiệp.
  - **Tỷ lệ:** 16:9 landscape; kích thước tối đa 640px.

---

### 4.2. Nhóm Tư Liệu Scene 02: Tam Giác 3 Quan Hệ Cơ Bản
* **`IMG-03: ownership-public-infrastructure.webp`** (Đỉnh Sở hữu TLSX)
  - **Mô tả:** Tổ hợp cảng hàng không hoặc nhà máy nhiệt điện / thủy điện quốc gia mang cờ đỏ sao vàng, minh chứng cho các tư liệu sản xuất huyết mạch thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu.
  - **Thông điệp lý luận:** Minh chứng thực tiễn cho nội dung Điều 53 Hiến pháp 2013 và bản chất chế độ công hữu về các TLSX chủ yếu.
* **`IMG-04: management-automated-control.webp`** (Đỉnh Tổ chức & Quản lý)
  - **Mô tả:** Kỹ sư điều khiển dây chuyền đóng gói vi mạch hoặc dược phẩm qua màn hình cảm ứng SCADA công nghiệp; phân công lao động khoa học, bình đẳng.
* **`IMG-05: status-distribution-welfare.webp`** (Đỉnh Địa vị & Phân phối)
  - **Mô tả:** Người lao động tham gia biểu quyết tại Hội nghị Người lao động hoặc nhận nhà ở xã hội dành cho công nhân khu chế xuất; biểu trưng cho nguyên tắc phân phối công bằng và an sinh xã hội.

---

### 4.3. Nhóm Tư Liệu Scene 03: Ba Quy Luật Biến Đổi
* **`IMG-06: law1-economic-restructuring.webp`** (Quy luật 1)
  - **Mô tả:** Hình ảnh tương phản nghệ thuật: một bên là cánh đồng lúa nước truyền thống, một bên là tổ hợp nhà máy sản xuất linh kiện bán dẫn hiện đại ven đô thị.
  - **Thông điệp:** Sự dịch chuyển cơ cấu kinh tế (CNH, HĐH) kéo theo sự dịch chuyển cơ cấu lao động từ nông thôn sang công nghiệp, dịch vụ.
* **`IMG-07: law2-emerging-classes-entrepreneurs.webp`** (Quy luật 2)
  - **Mô tả:** Nhóm chuyên gia phần mềm và doanh nhân trẻ làm việc sôi nổi bên bảng sơ đồ chiến lược số tại một trung tâm đổi mới sáng tạo quốc gia.
* **`IMG-08: law3-alliance-convergence.webp`** (Quy luật 3)
  - **Mô tả:** Kỹ sư nông nghiệp hướng dẫn nông dân điều khiển máy bay không người lái (drone) bón phân vi sinh; biểu tượng của sự xích lại gần nhau giữa lao động trí óc và lao động chân tay.

---

### 4.4. Nhóm Tư Liệu Scene 04: Chân Dung 6 Lực Lượng Xã Hội (Trọng Tâm Cốt Lõi)
Mỗi lực lượng trong phân cảnh 04 được trang bị một bức ảnh chân dung phóng sự độc bản với quy chuẩn khắt khe:

* **`IMG-09: portrait-worker-industrial.webp` — Giai cấp Công nhân Việt Nam**
  - **Nhân vật:** Chân dung cận trung (medium portrait) một nam/nữ kỹ thuật viên cơ khí chính xác tại nhà máy sản xuất ô tô/điện tử.
  - **Bối cảnh:** Nhà xưởng sạch chuẩn công nghiệp 4.0, hậu cảnh mờ nhẹ (bokeh), máy CNC phía sau.
  - **Biểu cảm:** Ánh mắt cương nghị, tập trung, gương mặt sáng ngời tri thức làm chủ công nghệ cao.
  - **Bố cục hiển thị:** Đặt tại cột trái của panel hồ sơ chi tiết (kích thước chiếm 35% chiều rộng trên desktop; toàn màn hình ngang trên mobile).
  - **Ý nghĩa môn học:** Thể hiện rõ nét vị trí giai cấp lãnh đạo cách mạng, đội ngũ tiên phong trong sự nghiệp CNH, HĐH đất nước.

* **`IMG-10: portrait-farmer-smart-agriculture.webp` — Giai cấp Nông dân Việt Nam**
  - **Nhân vật:** Lão nông tri điền thời đại mới đứng bên ruộng lúa trĩu bông hoặc trang trại công nghệ cao.
  - **Bối cảnh:** Cánh đồng mẫu lớn ngút ngàn phù sa, có thiết bị quan trắc thổ nhưỡng tự động.
  - **Chi tiết nhân văn:** Bàn tay rám nắng cầm chiếc điện thoại thông minh theo dõi độ ẩm đất; nụ cười rạng rỡ của người chủ thể nông thôn mới.
  - **Ý nghĩa môn học:** Khẳng định người nông dân là "chủ thể của quá trình phát triển nông nghiệp, kinh tế nông thôn và xây dựng nông thôn mới".

* **`IMG-11: portrait-intellectual-laboratory.webp` — Đội ngũ Trí thức Việt Nam**
  - **Nhân vật:** Nữ tiến sĩ nông nghiệp / công nghệ sinh học trong áo choàng trắng phòng thí nghiệm.
  - **Bối cảnh:** Phòng lab vô trùng, các ống nghiệm cấy mô giống cây trồng, kính hiển vi quang học.
  - **Biểu cảm:** Thao tác tỉ mỉ, tập trung cao độ vào công trình lai tạo giống.
  - **Ý nghĩa môn học:** Lực lượng lao động sáng tạo đặc biệt quan trọng, đưa khoa học – công nghệ trở thành lực lượng sản xuất trực tiếp.

* **`IMG-12: portrait-entrepreneur-modern.webp` — Đội ngũ Doanh nhân Việt Nam**
  - **Nhân vật:** Nữ hoặc nam doanh nhân trong trang phục công sở hiện đại, trao đổi cùng các đối tác quốc tế tại cảng logistics hoặc sàn giao dịch thương phẩm.
  - **Bối cảnh:** Hậu cảnh là các container hàng hóa xuất khẩu mang dòng chữ *"Made in Vietnam"*.
  - **Ý nghĩa môn học:** Lực lượng tổ chức sản xuất, tạo công ăn việc làm, đóng góp lớn vào ngân sách quốc gia và nâng tầm vị thế dân tộc trên trường quốc tế.

* **`IMG-13: portrait-women-crosscutting.webp` — Phụ nữ Việt Nam (Nhóm Giao thoa Giới tính)**
  - **Nhân vật:** Nữ kỹ sư điều hành công trường hoặc nữ giám đốc hợp tác xã nông sản tiêu biểu.
  - **Bối cảnh:** Đội mũ bảo hộ lao động, tay cầm bản vẽ kỹ thuật hoặc mẫu nông sản sạch.
  - **Huy hiệu đi kèm:** Bắt buộc gắn thẻ `[NHÓM NHÂN KHẨU GIAO THOA THEO GIỚI TÍNH]`.
  - **Ý nghĩa môn học:** Phụ nữ hiện diện ở mọi giai cấp và tầng lớp, giữ vai trò trụ cột trong cả kinh tế và gia đình, không phải một giai cấp kinh tế riêng biệt.

* **`IMG-14: portrait-youth-future.webp` — Đội ngũ Thanh niên Việt Nam (Nhóm Giao thoa Độ tuổi)**
  - **Nhân vật:** Nhóm sinh viên kỹ thuật / kỹ sư trẻ thuộc lứa tuổi 16–30 đang lập trình thiết bị bay drone phục vụ nông nghiệp.
  - **Bối cảnh:** Khuôn viên giảng đường đại học công nghệ kết hợp thực địa ruộng thử nghiệm.
  - **Biểu cảm:** Tràn đầy năng lượng, ánh mắt hướng về tương lai số.
  - **Ý nghĩa môn học:** Rường cột của nước nhà, lực lượng xung kích giao thoa trên mọi ngành nghề, tiên phong trong công cuộc chuyển đổi số quốc gia.

---

### 4.5. Nhóm Tư Liệu Scene 05 & Scene 06
* **`IMG-15: rice-chain-seed-lab.webp` — Liên minh Khoa học & Canh tác**
  - **Nội dung:** Kỹ sư nông nghiệp cùng nông dân xã viên đo đạc chiều cao bông lúa ST25 trên đồng ruộng Tây Nam Bộ.
  - **Ý nghĩa:** Minh họa trực tiếp cho chặng 1 & 2 của chuỗi giá trị: Trí thức chuyển giao mầm giống sạch, Nông dân canh tác trên đất thuộc sở hữu toàn dân.
* **`IMG-16: rice-chain-processing-export.webp` — Liên minh Chế biến & Vươn ra Thế giới**
  - **Nội dung:** Dây chuyền sấy và đóng gói chân không của nhà máy gạo công nghiệp hiện đại, phía trước là xe cẩu container tại cảng biển quốc tế.
  - **Ý nghĩa:** Minh họa cho chặng 3 & 4: Công nhân vận hành máy móc công nghiệp chế biến sâu, Doanh nhân xúc tiến xuất khẩu gạo sang EU và Hoa Kỳ theo Quyết định 1490/QĐ-TTg.
* **`IMG-17: national-great-unity.webp` — Khối Đại Đoàn Kết Toàn Dân Tộc**
  - **Nội dung:** Đại diện tiêu biểu của các giai cấp và tầng lớp nhân dân (công nhân, nông dân, trí thức, doanh nhân, cựu chiến binh, phụ nữ, thanh niên) trong trang phục trang trọng dưới cờ Tổ quốc.
  - **Ý nghĩa:** Kết luận then chốt của MLN131 Chương V: Liên minh giai cấp, tầng lớp là cơ sở chính trị - xã hội vững chắc của Khối Đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.

---

## 5. Quy Chuẩn Kỹ Thuật & Thẩm Mỹ Biên Tập Hình Ảnh (Photo Art Direction Standards)

Để đảm bảo tính nhất quán và loại bỏ hoàn toàn các lỗi thị giác "rác AI" hay "hoài cổ giả tạo", mọi hình ảnh áp dụng trong Phase 2 phải tuân thủ nghiêm ngặt 5 quy chuẩn:

```
+-------------------------------------------------------------------------------------------------------------------+
|                                 5 QUY CHUẨN XỬ LÝ HÌNH ẢNH BIÊN TẬP (PHOTO STANDARDS)                              |
+---+----------------------------+----------------------------------------------------------------------------------+
| # | Tiêu chí kỹ thuật          | Quy định bắt buộc của Art Director                                               |
+---+----------------------------+----------------------------------------------------------------------------------+
| 1 | Phong cách màu sắc         | Tone màu tự nhiên, chân thực, ấm áp nhẹ (*Warm Natural Light*);                  |
|   |                            | Tuyệt đối không dùng hiệu ứng Sepia ngả vàng hoài cổ giả tạo;                    |
|   |                            | Không dùng hiệu ứng Cyberpunk neon sặc sỡ, không biến dạng da người.              |
+---+----------------------------+----------------------------------------------------------------------------------+
| 2 | Loại trừ sản phẩm AI rác   | Tuyệt đối cấm sử dụng ảnh do AI sinh tự do có bàn tay dị dạng (6 ngón),         |
|   | (Anti-AI Hallucination)    | ánh mắt vô hồn, bối cảnh phi thực tế hoặc các chi tiết máy móc không có thật.   |
|   |                            | Ảnh phải là phóng sự người thực, bối cảnh thực tại Việt Nam thời kỳ Đổi mới.     |
+---+----------------------------+----------------------------------------------------------------------------------+
| 3 | Tỷ lệ & Cắt cúp (Cropping) | - Ảnh chân dung nhân vật Scene 04: Cắt cúp dọc tỷ lệ 4:5 hoặc 3:4.              |
|   |                            | - Ảnh chuỗi lúa gạo Scene 05: Tỷ lệ 16:9 ngang để đồng bộ dòng chảy.             |
|   |                            | - Trọng tâm khuôn mặt / mắt nhân vật luôn nằm ở 1/3 trên của khung hình.         |
+---+----------------------------+----------------------------------------------------------------------------------+
| 4 | Định dạng & Tối ưu hóa     | - Định dạng chuẩn web: Next-gen `.webp` nén chất lượng cao (quality 85%).        |
|   | (Performance & WebP)       | - Kích thước tối đa: Không vượt quá 1600px cho Desktop, 800px cho Mobile.        |
|   |                            | - Dung lượng mỗi tệp ảnh khống chế dưới 180 KB để đảm bảo tốc độ tải trang.      |
+---+----------------------------+----------------------------------------------------------------------------------+
| 5 | Thẻ ghi nhận bản quyền     | Mọi hình ảnh hiển thị đều phải có nhãn nguồn nhỏ góc dưới (`[MINH_HOA]`),        |
|   | (Asset Credit & Ledger)    | chú thích ảnh rõ ràng và được ghi nhận đầy đủ trong `docs/ASSET_LEDGER.md`.      |
+---+----------------------------+----------------------------------------------------------------------------------+
```

---

## 6. Lộ Trình Triển Khai Chuyển Giao Cho Frontend Engineer (Phase 2 Hand-off Plan)

Nhóm Art Direction đề xuất kế hoạch thực thi kỹ thuật chi tiết cho Phase 2:

### Bước 1: Chuẩn bị Thư mục Tài nguyên Ảnh Thực tế
* Tạo thư mục chuyên dụng: `public/images/documentary/` và `public/images/portraits/`.
* Tiếp nhận và chuẩn hóa 17 tệp ảnh đúng danh pháp quy định (`hero-documentary-panoramic.webp`, `portrait-worker-industrial.webp`, ...).
* Cập nhật đầy đủ thông tin bản quyền và giấy phép vào [`docs/ASSET_LEDGER.md`](file:///d:/viet-nam-da-tang/docs/ASSET_LEDGER.md).

### Bước 2: Nâng cấp Cấu trúc Giao diện Scene 04 (`components/Scene4Profiles.tsx`)
* Chuyển đổi khối hồ sơ chi tiết từ cấu trúc 1 cột thuần text thành **Bố cục Phóng sự Tạp chí 2 Cột (Editorial Spread 2-Columns)**:
  - **Cột trái (35% - 40% desktop):** Khung ảnh chân dung phóng sự khổ dọc 4:5, có nhãn phân loại học thuật ghim góc trên, nhãn lưu trữ góc dưới, hiệu ứng viền ảnh sắc nét 1px màu `--color-border-subtle`.
  - **Cột phải (60% - 65% desktop):** 3 cột thông tin *Vị trí - Vai trò - Đóng góp*, ví dụ thực tiễn sinh động và cảnh báo học thuật.
  - **Trên Mobile 390px:** Ảnh hiển thị toàn chiều rộng phía trên thẻ hồ sơ với chiều cao `~260px`, bo nhẹ góc, có lớp gradient chuyển êm xuống phần văn bản phân tích bên dưới.

### Bước 3: Nâng cấp Cấu trúc Scene 05 (`components/Scene5RiceChain.tsx`)
* Tích hợp ảnh tư liệu thực nghiệm tại mỗi chặng của chuỗi giá trị:
  - Chặng 01 (Trí thức): Tích hợp `IMG-15` (giống lúa & phòng lab).
  - Chặng 02 (Nông dân): Tích hợp ảnh cánh đồng mẫu lớn và ứng dụng công nghệ số.
  - Chặng 03 (Công nhân): Tích hợp `IMG-16` (nhà máy chế biến và sấy lúa).
  - Chặng 04 (Doanh nhân): Tích hợp ảnh container xuất khẩu cảng biển.

### Bước 4: Nâng cấp Scene 01 Hero (`components/Scene1Hero.tsx`)
* Thêm cụm ảnh phóng sự tài liệu đối xứng tại khu vực dẫn nhập hoặc làm lớp nền nghệ thuật phía sau tiêu đề với độ mờ được kiểm soát (`opacity-25` kèm blend mode `luminosity`), đảm bảo văn bản giữ vững 100% độ tương phản WCAG AAA.

### Bước 5: Kiểm định Hồi quy Toàn diện (Regression Gate)
* Sau khi frontend-engineer tích hợp ảnh vào mã nguồn:
  - Chạy lại kiểm thử Playwright: Đảm bảo không phát sinh lỗi tràn ngang tại 320px và 390px.
  - Kiểm tra thuộc tính `alt` của toàn bộ thẻ ảnh bằng Playwright accessibility scan.
  - Chụp lại ảnh màn hình thực tế và cập nhật vào `tests/screenshots/`.

---

## 7. Kết Luận & Đề Xuất Phê Duyệt

Báo cáo Thẩm định Tính trực quan (Phase 1 Visual Audit) đã xác định chính xác điểm nghẽn thẩm mỹ lớn nhất của website triển lãm hiện tại là **sự thiếu hụt hình ảnh tư liệu phóng sự chân thực**.  
Bằng việc phê duyệt danh mục **17 hình ảnh tư liệu phóng sự** và quy chuẩn biên tập ảnh nói trên, dự án sẽ hoàn tất bước chuyển mình quyết định: từ một bản giao diện web lý luận tĩnh trở thành một **không gian triển lãm số sống động, giàu cảm xúc nhân văn, đáp ứng chuẩn mực cao nhất của môn học MLN131**.

*Hồ sơ bàn giao đính kèm:*  
- Báo cáo thẩm định: [`docs/VISUAL_AUDIT.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_AUDIT.md)  
- Hệ thống biến số thiết kế: [`docs/DESIGN_TOKENS.md`](file:///d:/viet-nam-da-tang/docs/DESIGN_TOKENS.md)  
- Khung tiêu chí thẩm định: [`docs/VISUAL_REVIEW.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_REVIEW.md)  
- Hướng dẫn phong cách nghệ thuật: [`docs/ART_DIRECTION.md`](file:///d:/viet-nam-da-tang/docs/ART_DIRECTION.md)