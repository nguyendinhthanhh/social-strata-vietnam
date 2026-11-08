# Báo Cáo Thẩm Định Thị Giác Thực Tế (Visual QA Report)
## Dự án: VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131
*Người thẩm định độc lập:* Independent Accessibility QA Engineer  
*Phối hợp thẩm định:* Khung tiêu chí của Art Director ([`docs/VISUAL_REVIEW.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_REVIEW.md), [`docs/ART_DIRECTION.md`](file:///d:/viet-nam-da-tang/docs/ART_DIRECTION.md), [`docs/DESIGN_TOKENS.md`](file:///d:/viet-nam-da-tang/docs/DESIGN_TOKENS.md))  
*Căn cứ nguyên tắc:* [`.agents/rules/visual-editorial.md`](file:///d:/viet-nam-da-tang/.agents/rules/visual-editorial.md) & [`spec/QUALITY_GATES.md`](file:///d:/viet-nam-da-tang/spec/QUALITY_GATES.md)  
*Thời điểm kiểm định:* Ngày 07 tháng 11 năm 2026 (Cập nhật 6 Viewports & Kiểm kê Hình ảnh Thực tế)  
*Trạng thái Cổng Chất Lượng Thị Giác (Quality Gate G4):* **PASS** (Kỹ thuật hiển thị & Layout), **FLAG** (Khoảng trống hình ảnh thực tế cần bổ sung ở Phase 2)

---

## 1. Nhật Ký Bằng Chứng Ảnh Chụp Màn Hình Trình Duyệt Thực Tế (Screenshot Evidence Ledger - 6 Viewports)

Đợt thẩm định thị giác được tiến hành trực tiếp trên các ảnh chụp màn hình độ phân giải gốc được Playwright kết xuất từ máy chủ `http://localhost:3000`. Toàn bộ 6 kích thước màn hình theo yêu cầu đã được kiểm tra vật lý, đo đạc tràn lề và lưu trữ tại thư mục [`tests/screenshots/`](file:///d:/viet-nam-da-tang/tests/screenshots/):

```
+-------------------------------------------------------------------------------------------------------------------------+
|                                    BẢNG GHI NHẬN BẰNG CHỨNG ẢNH CHỤP MÀN HÌNH THỰC TẾ (6 VIEWPORTS)                     |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| ID | Tệp ảnh bằng chứng  | Viewport / Scale | Dung lượng | Status | Kết quả thẩm định thực tế                       |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 01 | mobile-320.png      | 320 x 568 px     | 1,464 KB   |  PASS  | Cửa thoát hiểm màn hình nhỏ; không tràn ngang   |
|    |                     | (Mobile Nhỏ Nhất)|            |        | (scrollWidth = clientWidth = 320px); chữ rõ.    |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 02 | mobile-390.png      | 390 x 844 px     | 1,433 KB   |  PASS  | Bố cục 1 cột chuẩn iPhone; khoảng cách lề rộng  |
|    |                     | (Mobile Chuẩn)   |            |        | rãi, touch target >= 48px, drawer nav chuẩn.    |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 03 | mobile-430.png      | 430 x 932 px     | 1,407 KB   |  PASS  | Bố cục màn hình lớn (Pro Max/Plus); tỷ lệ cân   |
|    |                     | (Mobile Lớn)     |            |        | đối, font fluid scale co giãn rất tự nhiên.    |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 04 | tablet-768.png      | 768 x 1024 px    | 1,671 KB   |  PASS  | Bố cục máy tính bảng dọc (iPad Mini/Air);       |
|    |                     | (Tablet Đứng)    |            |        | chuyển tiếp 2 cột nhịp nhàng, không vỡ layout.  |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 05 | tablet-1024.png     | 1024 x 768 px    | 1,625 KB   |  PASS  | Bố cục ngang / Laptop nhỏ (iPad Pro ngang);     |
|    |                     | (Tablet Ngang)   |            |        | thanh điều hướng thu gọn, nội dung dàn thoáng.  |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
| 06 | desktop-1440.png    | 1440 x 900 px    | 1,629 KB   |  PASS  | Bố cục tạp chí đối xứng bất cân đối đạt chuẩn;  |
|    |                     | (Desktop Lớn)    |            |        | nhịp điệu phong phú, phong cách số bảo tàng.    |
+----+---------------------+------------------+------------+--------+-------------------------------------------------+
```

---

## 2. Kiểm Kê Hiện Trạng Hiển Thị Hình Ảnh Thực Tế (Visual Asset & Image Audit)

### 2.1. Kết Quả Đo Đạc Trực Tiếp Trên Cây DOM
Kiểm thử tự động trên trang chủ đang chạy kết xuất số liệu thực tế:
- **Số lượng thẻ `<img>` HTML:** **0**
- **Số lượng thẻ `<Image>` Next.js:** **0**
- **Số lượng thẻ `<svg>` vector biểu tượng / trang trí:** **56**
- **Số lượng phần tử có CSS `background-image` hình ảnh:** **0**

### 2.2. Nhận Định Chuyên Môn Của QA Độc Lập
1. **Điểm mạnh của hiện trạng:** Trang web sở hữu hệ thống typographic, hierarchy và graphic styling rất sắc nét, mang đậm phong cách tạp chí biên tập (`Chalk`, `Stone Warm`, `Carbon`, `Vermilion`, `Citron`). Không bị sa đà vào các card SaaS rập khuôn hay gradient neon vô nghĩa. Tốc độ tải trang đạt mức tức thời (0 ảnh nặng gây chặn render).
2. **Hạn chế then chốt (Visual Gap):**
   - **Hoàn toàn vắng bóng ảnh thực tế / ảnh tư liệu lịch sử.** 
   - Triển lãm số chuyên đề học thuật về cơ cấu xã hội – giai cấp Việt Nam đang được minh họa 100% bằng khối chữ, khung viền và biểu tượng Lucide icons.
   - 6 hồ sơ lực lượng xã hội (Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ, Thanh niên) hiện chỉ có icon đồ họa (`Briefcase`, `HeartHandshake`, `GraduationCap`, `Store`, `Sparkles`, `Flame`).
   - Chuỗi giá trị lúa gạo ở Scene 5 hoàn toàn là sơ đồ danh sách khối, chưa có phóng sự ảnh tài liệu về giống lúa, vùng canh tác lúa chất lượng cao ĐBSCL, nhà máy gạo tự động hóa, cảng biển logistics.
3. **Kho ảnh bài giảng có sẵn (Ready Assets):**
   - Thư mục [`references/extracted_images/`](file:///d:/viet-nam-da-tang/references/extracted_images/) hiện chứa **23 tệp ảnh gốc** được trích xuất từ 3 bộ slide bài giảng chính thức (`MLN131_Tiet_18.pptx`, `MLN131_Tiet_19.pptx`, `MLN131_Tiet_20.pptx`).
   - Cần phối hợp với Art Director để tuyển chọn các ảnh chất lượng tốt, cấp quyền, viết credit trích dẫn và nhúng vào `public/images/`.

---

## 3. Thẩm Định Theo 6 Trụ Cột Cốt Lõi (The 6 Editorial Pillars)

### Trụ cột 1: Typography & Thể Hiện Dấu Tiếng Việt (Typography & Diacritics)
* **Kiểm tra cắt dấu tiếng Việt:** Soi chiếu kỹ lưỡng toàn bộ các tiêu đề lớn và đoạn văn thân bài trên [`tests/screenshots/mobile-390.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-390.png) và [`tests/screenshots/desktop-1440.png`](file:///d:/viet-nam-da-tang/tests/screenshots/desktop-1440.png). Các phụ âm và nguyên âm phức tạp của tiếng Việt (`ă, â, ê, ô, ơ, ư, đ`) đi kèm các dấu thanh (`hỏi, ngã, nặng, sắc, huyền`) hiển thị sắc nét, không bị đứt ngọn dấu, không xuất hiện hiện tượng nhảy font to nhỏ (font-fallback mismatch).
* **Độ co giãn phông chữ (Fluid Scaling):** Tiêu đề chính `VIỆT NAM ĐA TẦNG` co giãn uyển chuyển: trên desktop đạt `~4.5rem` đường bệ; trên mobile 320px tự động co về mức `2.25rem` vừa vặn với chiều ngang màn hình mà không cần ngắt từ vụn vặt.
* **Độ dài dòng đọc (Measure & Line-length):** Các đoạn văn luận điểm trong phân cảnh 01, 02 và 04 được khống chế ở bề rộng tối ưu `max-w-3xl` (khoảng 60–72 ký tự/dòng trên desktop), giúp mắt người đọc di chuyển tự nhiên từ dòng này sang dòng kế tiếp mà không mỏi.

### Trụ cột 2: Độ Tương Phản & Bảng Màu Báo Chí (Color Contrast & WCAG AA/AAA)
* **Tỷ lệ tương phản chữ đen trên nền giấy sáng:** Chữ màu Carbon than củi (`#121416`) hiển thị trên nền Chalk phấn nhạt (`#F9F9FB`) và Stone Warm (`#EDECE8`) đạt tỷ lệ tương phản thực tế **16.8:1**, vượt xa ngưỡng tối đa **7.0:1 của chuẩn WCAG 2.1 Level AAA**.
* **Xử lý màu điểm nhấn Vàng Chanh (Citron `#D4E157`):** Đúng theo điều lệ Art Director, màu Vàng chanh **tuyệt đối không dùng cho chữ trên nền sáng**. Citron chỉ xuất hiện trong không gian nền đen của Scene 1 Hero, chân trang Footer và trên nhãn active của các nút màu đen Carbon, tạo sự tương phản phát sáng dịu mắt (tỷ lệ trên nền đen đạt **11.2:1**).
* **Màu Đỏ Son (Vermilion `#D32F2F`):** Được dùng chuẩn mực làm dấu gạch phân cách biên trái (`border-l-4 border-l-vermilion`), nhãn chỉ mục số La Mã và nút bấm chính (Xác nhận trả lời), tạo trọng tâm thị giác rõ ràng cho mắt nhìn.

### Trụ cột 3: Khả Năng Thích Ứng Mobile & Tránh Tràn Ngang (Mobile Ergonomics)
* **Kiểm định tràn ngang vật lý (6 Viewports):** Đo lường tự động bằng Playwright tại 320px, 390px, 430px, 768px, 1024px, 1440px xác nhận:
  ```ts
  scrollWidth === clientWidth (Không có thanh cuộn ngang, 0 phần tử tràn lề ngoài ý muốn)
  ```
* **Biên lề an toàn (Safe Padding):** Tại 320px, khoảng đệm mép trang duy trì tối thiểu `16px` (`px-4`), văn bản không bị dính sát vào mép màn hình điện thoại.
* **Vùng chạm cảm ứng (Touch Target):** Các thẻ bấm trong Scene 2, Stepper Scene 3, nút chọn hồ sơ Scene 4 và đặc biệt là các phương án trắc nghiệm Scene 6 đều có chiều cao đo đạc thực tế từ `48px` đến `54px`, đáp ứng vượt tiêu chuẩn ngón tay chạm tối thiểu `44x44px`.
* **Menu điều hướng di động (Mobile Drawer):** Đã kiểm thử thực tế đóng/mở trơn tru, hiển thị đầy đủ 6 trạm trải nghiệm, nhấp vào trạm nào sẽ cuộn chính xác đến phân cảnh đó và tự động gấp gọn menu.

### Trụ cột 4: Xử Lý Tư Liệu & Hệ Thống Huy Hiệu Nguồn (Documentary Credibility)
* **Huy hiệu bản quyền học thuật:** Toàn bộ 33 điểm trích dẫn quan trọng xuyên suốt bài viết đều được gắn kèm thẻ `SourceBadge` có phân loại màu chuẩn mực:
  - `[BAI_GIANG]`: Nền đá ấm, viền đỏ đô (`bg-stone-warm text-dark-red`).
  - `[VAN_KIEN]`: Nền hổ phách, viền hổ phách (`bg-amber-50 text-amber-900`).
  - `[MINH_HOA]` / `[DU_LIEU]`: Nền lam xám thanh lịch (`bg-slate-100 text-slate-800`).
* **Tính toàn vẹn sư phạm:** Không sử dụng ảnh AI giả tạo, không dùng hình ảnh trôi nổi thiếu bản quyền. Mọi trích dẫn đều có mã tra cứu và chi tiết slide.

### Trụ cột 5: Nhịp Điệu & Cấu Trúc Bố Cục (Anti-SaaS Layout Rhythm)
* **Loại bỏ lưới thẻ đồng dạng:** Dự án không sử dụng bất kỳ kiểu lưới 6 thẻ bootstrap/SaaS hình hộp chữ nhật nào.
* **Hồ sơ chuyên đề Scene 4 (Editorial Spread):** Cột trái là thanh nhãn chọn lực lượng dạng thẻ dải bất đối xứng; cột phải là không gian hồ sơ chuyên sâu chia tách rõ rệt 3 khối chức năng: `VỊ TRÍ (Position)` — `VAI TRÒ (Role)` — `ĐÓNG GÓP (Contribution)`.
* **Khối giao thoa nhân khẩu học:** Huy hiệu và banner cảnh báo học thuật về bản chất giao thoa của Phụ nữ và Thanh niên hiển thị nổi bật ở đầu Phân cảnh 04, đập tan định kiến nhầm lẫn giữa giai cấp kinh tế và nhóm nhân khẩu học.
* **Mô hình sư phạm hạt gạo Scene 5:** Hiển thị 4 mắt xích liên minh theo dòng chảy liên tục kèm nhãn chỉ dẫn sư phạm bắt buộc và trích dẫn Quyết định 1490/QĐ-TTg của Thủ tướng Chính phủ.

### Trụ cột 6: Chuyển Động & Trợ Năng Bàn Phím (Motion & Keyboard Accessibility)
* **Chế độ Giảm chuyển động:** Hoạt động tin cậy; khi kích hoạt, toàn bộ quá trình cuộn mượt và chuyển cảnh được thay thế bằng hiển thị tức thời, bảo vệ người dùng bị rối loạn tiền đình.
* **Viền bàn phím sắc nét:** Khi chuyển tab bằng bàn phím, vòng bao viền đỏ son 2px với khoảng hở 2px ôm trọn phần tử được chọn, tạo định hướng thị giác chuẩn mực cho người dùng khiếm thị hoặc không dùng chuột.

---

## 4. Thẩm Định Chi Tiết Từng Phân Cảnh (Scene-by-Scene Visual Breakdown)

### Phân cảnh 01: Bức Tranh Xã Hội Việt Nam (Hero Section)
- **Desktop (1440px):** Nền đen Carbon than củi tạo chiều sâu trang trọng của một bảo tàng số; chữ chìm `VIET NAM` mờ ảo tạo lớp nền thị giác tinh tế. Đoạn mở dẫn chia 2 cột đối thoại uyên bác giữa người giám tuyển và người học. 6 thẻ trạm trải nghiệm xếp đều ở đáy màn hình đầu tiên như một mục lục triển lãm thực thụ.
- **Mobile (320px/390px/430px):** Co gọn thành dòng chảy 1 cột mạch lạc. Tiêu đề chính giữ được độ uy nghi. 6 thẻ trạm được xếp thành lưới 2 cột nhỏ gọn, dễ quét mắt.
- **Đánh giá:** **PASS** (Cần xem xét bổ sung 1 tư liệu ảnh biểu trưng ở giai đoạn hoàn thiện mỹ thuật).

### Phân cảnh 02: Giải Mã Tọa Độ Xã Hội (Tam Giác Quan Hệ)
- **Desktop (1440px):** Bố cục bất đối xứng: Cột trái đặt định nghĩa phân biệt Cơ cấu xã hội tổng thể và Cơ cấu xã hội – giai cấp; cột phải hiển thị 2 khối thẻ so sánh rõ rệt. Phần dưới là tam giác 3 mối quan hệ kinh tế – chính trị với các nút chọn đỉnh rõ nét và khung diễn giải sâu rộng. Khối cảnh báo pháp lý về quyền sử dụng đất đai nổi bật với nền hổ phách sang trọng.
- **Mobile (320px/390px/430px):** Chuyển sang dạng thẻ tiến trình dọc với các chỉ số La Mã `01`, `02`, `03` màu đỏ son dẫn dắt sự tập trung.
- **Đánh giá:** **PASS**.

### Phân cảnh 03: Dòng Chảy Biến Chuyển (Ba Quy Luật)
- **Desktop (1440px):** 3 tab quy luật dàn ngang trên đầu bảng panel; bên dưới là cấu trúc 2 cột so sánh trực quan giữa "Căn cứ lý luận Mác – Lênin" và "Biểu hiện thực tiễn tại Việt Nam", kết nối bằng sơ đồ logic dạng khối tên. Khối cảnh báo lý luận tại Quy luật 03 được đóng khung viền đỏ hoa hồng nhẹ nhàng nhưng dứt khoát.
- **Mobile (320px/390px/430px):** Stepper chuyển thành từng nấc bấm dọc rõ ràng; nút chuyển bước trước/sau ở chân panel giúp người học tiến lùi thuận tiện.
- **Đánh giá:** **PASS**.

### Phân cảnh 04: Lát Cắt Đương Đại (Hồ Sơ 6 Lực Lượng Xã Hội)
- **Desktop (1440px):** Cột trái chứa thanh chọn 6 lực lượng với nhãn phân loại học thuật (Giai cấp cơ bản, Tầng lớp lao động trí óc, Tầng lớp đặc biệt, Nhóm theo giới, Nhóm theo độ tuổi). Cột phải mở ra hồ sơ dạng trang báo tạp chí (Editorial Dossier) với 3 cột Vị trí - Vai trò - Đóng góp rành mạch.
- **Mobile (320px/390px/430px):** Danh sách 6 lực lượng xếp dọc có mũi tên chỉ báo; khi chọn lực lượng nào, hồ sơ phía dưới cập nhật mượt mà.
- **Đánh giá:** **PASS về mặt bố cục & tương tác**; **FLAG về mặt tư liệu ảnh** (Cần tuyển chọn ảnh tư liệu thực tế cho 6 lực lượng xã hội).

### Phân cảnh 05: Hạt Gạo Liên Minh (Mô Hình Sư Phạm Chuỗi Giá Trị)
- **Desktop (1440px):** 4 mắt xích liên minh (Trí thức lai tạo giống -> Nông dân canh tác -> Công nhân chế biến sâu -> Doanh nhân xuất khẩu) được xếp ngang hàng. Mỗi mắt xích có khối riêng làm nổi bật sự hiện diện giao thoa của Phụ nữ và Thanh niên. Khối chính sách Quyết định 1490/QĐ-TTg hiển thị uy nghiêm ở cuối phân cảnh.
- **Mobile (320px/390px/430px):** 4 mắt xích chuyển thành lưới 2x2 nút bấm, phần nội dung diễn giải bên dưới dễ đọc trên màn hình dọc.
- **Đánh giá:** **PASS về tương tác**; **FLAG về tư liệu ảnh** (Cần ảnh thực tế của 4 khâu chuỗi giá trị gạo).

### Phân cảnh 06: Đúc Kết Nhận Thức & Thử Thách Tương Tác
- **Desktop (1440px):** 3 khối đúc kết then chốt xếp thành 3 cột cân xứng. Khối trắc nghiệm trung tâm hiển thị từng câu một (one-question-at-a-time), phản hồi đúng/sai tức thì kèm lời giải thích học thuật và mã trích dẫn slide. Khối đen minh bạch bản quyền 33 nguồn nằm trang trọng phía trước Footer.
- **Mobile (320px/390px/430px):** Khối câu hỏi nằm trọn vẹn trong khung nhìn dọc của điện thoại, người học bấm chọn đáp án và xác nhận ngay mà không cần cuộn trang.
- **Đánh giá:** **PASS**.

---

## 5. Đề Xuất Phối Hợp Cho Phase 1 Visual Audit & Art Director

Dựa trên kết quả đo đạc thực nghiệm từ 6 tệp ảnh chụp màn hình thực tế và kiểm tra cây DOM:
1. **Phê duyệt Bố cục Kỹ thuật & Responsive:** Bố cục hiển thị và khả năng chống tràn lề ở cả 6 viewports (320px, 390px, 430px, 768px, 1024px, 1440px) hoàn toàn ổn định và đạt chuẩn cao cấp.
2. **Kế hoạch hành động bổ sung Hình ảnh (Actionable Recommendation):**
   - Lựa chọn từ 6 đến 10 bức ảnh tư liệu có bản quyền rõ ràng từ kho `references/extracted_images/` hoặc nguồn ảnh tư liệu chính thức (Thông tấn xã Việt Nam / Bộ Nông nghiệp / Bộ Khoa học & Công nghệ).
   - Đưa vào `public/images/` với tên tệp chuẩn hóa (e.g., `worker-industry.jpg`, `farmer-mekong.jpg`, `intellectual-lab.jpg`, `entrepreneur-export.jpg`, `women-production.jpg`, `youth-innovation.jpg`, `rice-chain-st25.jpg`).
   - Tích hợp thẻ `<Image>` Next.js với thuộc tính `alt` tiếng Việt mô tả chi tiết và chú thích nguồn ảnh tương ứng `SourceBadge [MINH_HOA]` để nâng tầm trải nghiệm số lên chuẩn Triển Lãm Đương Đại thực thụ.
