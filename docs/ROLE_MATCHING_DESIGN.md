# ĐẶC TẢ THIẾT KẾ NGHỆ THUẬT & QUY CHUẨN TƯƠNG TÁC
## MINI-GAME GIÁO DỤC: "GHÉP VAI TRÒ — NHỮNG MẢNH GHÉP XÃ HỘI"
### Tích hợp tại Phân cảnh 04 (`#scene-04`), Triển lãm số chuyên đề MLN131: VIỆT NAM ĐA TẦNG

*Chủ sở hữu tài liệu:* Senior Editorial Art Director & Experience Architect  
*Vị trí tệp:* [`docs/ROLE_MATCHING_DESIGN.md`](file:///d:/viet-nam-da-tang/docs/ROLE_MATCHING_DESIGN.md)  
*Căn cứ thẩm mỹ & học thuật:* [`spec/DESIGN_DIRECTION.md`](file:///d:/viet-nam-da-tang/spec/DESIGN_DIRECTION.md), [`.agents/rules/visual-editorial.md`](file:///d:/viet-nam-da-tang/.agents/rules/visual-editorial.md), [`.agents/rules/academic-integrity.md`](file:///d:/viet-nam-da-tang/.agents/rules/academic-integrity.md), [`docs/ART_DIRECTION.md`](file:///d:/viet-nam-da-tang/docs/ART_DIRECTION.md), [`docs/DESIGN_TOKENS.md`](file:///d:/viet-nam-da-tang/docs/DESIGN_TOKENS.md), [`content/IMAGE_REGISTRY.json`](file:///d:/viet-nam-da-tang/content/IMAGE_REGISTRY.json).  
*Phiên bản:* 1.0 (Production-Ready Specification)  

---

```
==================================================================================================
                 BẢN ĐỒ TỔNG THỂ KHÔNG GIAN TƯƠNG TÁC TẠI PHÂN CẢNH 04
==================================================================================================
 [PHÂN CẢNH 04: KHÁM PHÁ 6 CHÂN DUNG] ──► [BANNER DẪN NHẬP: THỬ THÁCH TƯƠNG TÁC]
                                                           │
                                                           ▼
                                         [MINI-GAME: GHÉP VAI TRÒ XÃ HỘI]
                                         ┌──────────────────────────────┐
                                         │ Desktop: Drag-Drop / Click   │
                                         │ Mobile:  Tap-to-Select Match │
                                         │ Scoring: 100đ / 60đ / 30đ    │
                                         └──────────────┬───────────────┘
                                                        │
                                                        ▼
                                         [MÀN HÌNH TỔNG KẾT & VINH DANH]
                                                        │
                                                        ▼
 [CHUYỂN CẢNH SANG PHÂN CẢNH 05] ◄────── [NÚT TIẾP TỤC: HẠT GẠO LIÊN MINH]
==================================================================================================
```

---

## 1. Tầm Nhìn Nghệ Thuật & So Sánh Hai Tuyến Thị Giác (Creative Vision & Route Selection)

### 1.1. Triết lý thiết kế: Documentary Workshop & Curatorial Archive
Mini-game "Ghép vai trò — Những mảnh ghép xã hội" không phải là một trò chơi điện tử giải trí thuần túy (Arcade game) hay ứng dụng đố vui học vẹt (Flashcard quiz). Nó được định vị như một **Xưởng thực nghiệm giám tuyển tương tác (Interactive Curatorial Workshop)** đặt ngay trong không gian triển lãm số đương đại của VIỆT NAM ĐA TẦNG.

Người học đóng vai trò như một nhà nghiên cứu xã hội học đang đối chiếu các nguồn tư liệu thực chứng: lật mở hồ sơ, liên kết những trọng trách lịch sử - kinh tế - chính trị của từng giai cấp, tầng lớp với con người thực tế đại diện cho lực lượng đó trong thời kỳ Đổi mới.

### 1.2. So sánh đối lập hai hướng tiếp cận thị giác (Two Visual Routes)

```
+---------------------------------------------------------------------------------------------------------+
|                                  SO SÁNH HAI TUYẾN THIẾT KẾ CHO MINI-GAME                               |
+----------------------------------------------------+----------------------------------------------------+
| Tuyến A (Route A): Curatorial Documentary Dossier  | Tuyến B (Route B): Gamified Arcade / Trivia SaaS   |
| (Hồ sơ Giám tuyển Tư liệu Đương đại) - ĐƯỢC CHỌN   | (Trò chơi Điện tử Thẻ bài Nổi phồng) - BÁC BỎ      |
+----------------------------------------------------+----------------------------------------------------+
| 1. Bảng màu: Nền Chalk ấm, than củi Carbon, đỏ son | 1. Bảng màu: Nền tím đậm chuyển sắc neon (Cyan,    |
|    Vermilion, xanh mạ Citron, viền đá Warm Stone.  |    Magenta), hiệu ứng phát sáng RGB lòe loẹt.      |
| 2. Hình ảnh: 100% ảnh tư liệu thực tế, người thật  | 2. Hình ảnh: Icon 3D bóng bẩy, nhân vật hoạt họa   |
|    từ slide MLN131 và kho lưu trữ Wikimedia CC.    |    chibi trẻ con, clipart phẳng thiếu sức sống.    |
| 3. Typography: Playfair Display + Be Vietnam Pro   | 3. Typography: Sans-serif bo tròn kiểu đồ chơi trẻ |
|    + JetBrains Mono chuẩn xác, phân cấp báo chí.   |    em, thiếu dấu tiếng Việt, nhạt nhòa.            |
| 4. Phản hồi: Tế nhị, khích lệ tư duy, không rung  | 4. Phản hồi: Rung màn hình bạo lực khi sai, pháo   |
|    lắc bạo lực, giải thích học thuật ngay khi đúng.|    hoa giấy (confetti) nổ tung tóe rẻ tiền.        |
| 5. Cảm xúc: Trang trọng, trí tuệ, hiện thực, sâu sắc| 5. Cảm xúc: Nông cạn, phân tâm, giống app game bài|
+----------------------------------------------------+----------------------------------------------------+
```

### 1.3. Lập luận kiên quyết loại bỏ các thói quen thiết kế AI generic
1. **Xóa bỏ định dạng "AI Cliché Gamification":**
   - Tuyệt đối không dùng các biểu tượng cảm xúc nhí nhố (emoji mặt cười, mặt khóc mếu máo, trái tim bay).
   - Tuyệt đối không dùng gradient bóng kính lòe loẹt (glassmorphism bão hòa cao) che khuất văn bản học thuật.
   - Không dùng hiệu ứng pháo hoa giấy (confetti particles) khi hoàn thành vì gây nhiễu thị giác, làm tầm thường hóa các nội dung chính trị - xã hội trang nghiêm.
2. **Loại bỏ hiệu ứng rung giật bạo lực (No violent screen shake):**
   - Khi ghép sai, giao diện phản hồi nhẹ nhàng bằng đường viền màu hổ phách dịu (`#D97706`) trong 300ms kèm lời gợi mở tư duy, không rung lắc cơ học gây mệt mỏi thị giác hoặc kích ứng với người dùng nhạy cảm tiền đình.
3. **Tôn trọng tính chân thực lịch sử và nhân phẩm người lao động:**
   - Mỗi token lực lượng mang ảnh chân dung tư liệu người thật (công nhân may, nông dân gặt lúa, kỹ sư phòng lab, doanh nhân xuất khẩu), có nhãn chú thích nguồn gốc slide giảng dạy rõ ràng.

---

## 2. Bảng Màu Thương Hiệu & Ma Trận Kiểm Định Tương Phản WCAG 2.1

Hệ màu của mini-game tuân thủ triệt để bảng màu nhận diện thương hiệu của dự án VIỆT NAM ĐA TẦNG, vận hành hoàn hảo trên cả 2 giao diện: **Light Chalk Mode (Giao diện Sáng - Giấy in)** và **Dark Exhibition Mode (Giao diện Tối - Triển lãm đêm)**.

### 2.1. Định nghĩa Mã màu (Design Tokens)

```css
:root {
  /* Nền và bề mặt */
  --game-bg-carbon: #121416;          /* Than củi chủ đạo phân cảnh tối */
  --game-bg-charcoal: #1C1F22;        /* Bề mặt thẻ / ô nhận trên nền tối */
  --game-bg-chalk: #F7F6F2;           /* Phấn nền giấy in cao cấp */
  --game-bg-stone: #E8E6DF;           /* Đá ấm bề mặt thẻ trung tính */
  --game-surface-card: #FFFFFF;       /* Bề mặt nổi khối thẻ bài */

  /* Màu nhấn thương hiệu */
  --game-accent-vermilion: #C8372D;   /* Đỏ chu sa: Focus, Active, Nút hành động */
  --game-accent-dark-red: #A62E2D;    /* Đỏ trầm: Nhãn phân loại, liên kết đọc */
  --game-accent-citron: #C8D668;      /* Vàng chanh: Điểm số, Thẻ đã khớp đúng */
  --game-accent-amber: #D97706;       /* Hổ phách: Cảnh báo chưa khớp nhẹ nhàng */

  /* Đường viền & Phân cách */
  --game-border-subtle: #D5D2C7;      /* Viền mảnh 1px chế độ sáng */
  --game-border-dark: #2A2F35;        /* Viền mảnh 1px chế độ tối */
  --game-border-active: #C8372D;      /* Viền khi token đang được chọn */
  --game-border-success: #2E7D32;     /* Viền thành công trên nền sáng */
  --game-border-success-dark: #C8D668;/* Viền thành công trên nền tối */

  /* Văn bản */
  --game-text-carbon: #121416;        /* Chữ đen trên nền Chalk / Stone */
  --game-text-chalk: #F7F6F2;         /* Chữ sáng trên nền Carbon */
  --game-text-muted: #5E656B;         /* Chú dẫn phụ trên nền sáng */
  --game-text-light-muted: #A2A8AE;   /* Chú dẫn phụ trên nền tối */
}
```

### 2.2. Ma trận kiểm định tỷ lệ tương phản WCAG 2.1 (Contrast Ratio Matrix)

Toàn bộ các cặp màu hiển thị trong mini-game đều được kiểm toán quang học tự động theo chuẩn WCAG 2.1:

| Cặp màu (Text / Background) | Trạng thái hiển thị trong Game | Tỷ lệ tương phản | Đánh giá WCAG 2.1 | Hướng dẫn ứng dụng |
|---|---|---|---|---|
| **Carbon (`#121416`) trên Chalk (`#F7F6F2`)** | Tiêu đề và văn bản mô tả vai trò (Light Mode) | **17.07:1** | **PASS AAA** | Dùng cho nội dung văn bản chính trong thẻ nhiệm vụ |
| **Chalk (`#F7F6F2`) trên Carbon (`#121416`)** | Tiêu đề và văn bản mô tả vai trò (Dark Mode) | **17.07:1** | **PASS AAA** | Dùng cho văn bản chính khi ở chế độ triển lãm đêm |
| **Citron (`#C8D668`) trên Carbon (`#121416`)** | Điểm số, Nhãn trạng thái `Matched` (Dark Mode) | **11.67:1** | **PASS AAA** | Dùng cho huy hiệu điểm và đường viền thành công nền tối |
| **Dark Red (`#A62E2D`) trên Chalk (`#F7F6F2`)** | Nhãn kicker `THỬ THÁCH TƯƠNG TÁC`, Ký hiệu vai trò | **6.37:1** | **PASS AA/AAA** | Dùng cho chữ kích thước thường và nhãn phân loại học thuật |
| **Vermilion (`#C8372D`) trên White (`#FFFFFF`)** | Nút hành động, Ký hiệu nhấn mạnh trong thẻ | **4.81:1** | **PASS AA** | Đạt chuẩn cho chữ đậm >= 16px và các thành phần UI |
| **Muted (`#5E656B`) trên Warm Stone (`#E8E6DF`)**| Metadata nguồn slide, số lần thử | **4.74:1** | **PASS AA** | Dùng cho thông tin bổ trợ, trích dẫn bài giảng |
| **Light Muted (`#A2A8AE`) trên Charcoal (`#1C1F22`)** | Metadata nguồn slide trên nền tối | **7.12:1** | **PASS AAA** | Dùng cho thông tin học thuật trong chế độ Dark Mode |
| **Citron (`#C8D668`) trên Chalk (`#F7F6F2`)** | *Không sử dụng* | **1.46:1** | **FAIL NGHIÊM NGẶT** | **CẤM TUYỆT ĐỐI:** Không bao giờ đặt Citron trên nền Chalk |

---

## 3. Hệ Thống Typography & Chiến Lược Fallback Tiếng Việt

### 3.1. Phân định Font Stacks
- **Font Tiêu đề & Cảm xúc (Display/Serif):** `Playfair Display`, `Fraunces`, `Georgia`, serif.  
  *Ứng dụng:* Tựa đề Banner dẫn nhập, Tên lực lượng xã hội trên thẻ đã ghép, Tựa đề màn hình vinh danh hoàn thành.
- **Font Văn bản & Thao tác (Body/Sans-serif):** `Be Vietnam Pro`, system-ui, -apple-system, sans-serif.  
  *Ứng dụng:* Nội dung đoạn trích vai trò, hướng dẫn thao tác tương tác, phản hồi giải thích học thuật.
- **Font Số liệu Kỹ thuật & Nhãn (Kicker/Mono):** `JetBrains Mono`, `SF Mono`, Menlo, monospace.  
  *Ứng dụng:* Bảng đếm điểm (+100đ, +60đ), chỉ số thứ tự [01/06], nhãn thể loại `[GIAI CẤP]`, `[GIAO THOA NHÂN KHẨU]`.

### 3.2. Chiến lược xử lý dấu thanh tiếng Việt (Vietnamese Diacritics Resilience)
- **Quy chuẩn `line-height` chống cắt dấu (No Diacritic Truncation):**
  - Tiêu đề Display lớn: `line-height: 1.22` đến `1.28`. Tuyệt đối không dùng `leading-none` hay `< 1.15` để tránh việc các ký tự nguyên âm viết hoa có dấu mũ/hỏi/ngã (`Đ`, `Ả`, `Ở`, `Ệ`, `Ứ`) chạm vào đường viền phía trên.
  - Nội dung thẻ nhiệm vụ: `line-height: 1.6` đến `1.65` tạo khoảng thở quang học khi người học đọc lướt nhanh để tìm từ khóa vai trò.
- **Quy chuẩn khoảng đệm viền (Bounding Box Padding):**
  - Mọi nút bấm và token đều có padding trên/dưới tối thiểu `8px` (`py-2`) để đảm bảo các dấu nặng và dấu mũ không bị cắt cụt bởi thuộc tính `overflow: hidden`.

---

## 4. Vị Trí Tích Hợp & Thiết Kế Banner Mở Đầu Trang Trọng

### 4.1. Neo vị trí kiến trúc trang web
Mini-game được tích hợp ở **đoạn kết của Phân cảnh 04 (`#scene-04`)**:
- **Phía trên:** Nằm ngay sau phần khám phá chi tiết 6 chân dung và hộp mở rộng *"Phân tích sâu về bối cảnh thực tiễn và chính sách Đảng – Nhà nước"*.
- **Phía dưới:** Nằm ngay trước thành phần chuyển tiếp phân cảnh `SceneTransition` từ Phân cảnh 04 sang Phân cảnh 05 (`Hạt gạo Liên minh`).
- **Mã nhận diện DOM:** `<section id="scene-04-role-matching" aria-label="Thử thách tương tác Ghép vai trò xã hội">`.

### 4.2. Đặc tả chi tiết Banner Dẫn Nhập (The Invitation Prologue Banner)

Banner được thiết kế như một **cánh cửa mở vào không gian thực nghiệm**, mang tính khích lệ học tập nhưng đĩnh đạc và chuẩn mực.

```
+---------------------------------------------------------------------------------------------------------+
| [Kicker]  THỬ THÁCH TƯƠNG TÁC · MLN131 WORKSHOP · KIỂM TRA ĐỘ THẤU HIỂU                                  |
|                                                                                                         |
| Tựa đề:   BẠN HIỂU VAI TRÒ CỦA CÁC GIAI TẦNG ĐẾN ĐÂU?                                                   |
| Lời dẫn:  Mỗi lực lượng trong cơ cấu xã hội Việt Nam thời kỳ quá độ đều gánh vác sứ mệnh và đóng góp    |
|           đặc thù. Hãy đối chiếu các nhiệm vụ lịch sử - kinh tế dưới đây với đúng lực lượng xã hội.    |
|                                                                                                         |
| [Nút CTA] [ BẮT ĐẦU GHÉP VAI TRÒ ➔ ]            [Huy hiệu] 6 Lực lượng · 600+ Điểm · Thử thách thực chứng |
+---------------------------------------------------------------------------------------------------------+
```

* **Quy chuẩn trực quan Banner:**
  - Nền: Khối chuyển sắc tinh tế từ Carbon `#121416` sang Charcoal `#1C1F22`, viền trên và dưới bằng đường kẻ đôi 1px màu `Warm Stone` `#E8E6DF` (hoặc Dark Border `#2A2F35`).
  - Kicker: `THỬ THÁCH TƯƠNG TÁC / MLN131 WORKSHOP` in hoa, font `JetBrains Mono`, màu đỏ son `Vermilion` (`#C8372D`), kích thước `12px`, giãn chữ `tracking-widest`.
  - Tiêu đề: `"Bạn hiểu vai trò của các giai tầng đến đâu?"`, font `Playfair Display`, kích thước fluid `clamp(1.75rem, 3.5vw, 2.5rem)`, trọng lượng `Bold`, màu phấn `Chalk` (`#F7F6F2`).
  - Lời dẫn (Deck): Giới hạn độ rộng đọc tối ưu `62ch`, màu `Light Muted` (`#A2A8AE`), kích thước `15px`, giãn dòng `1.6`.
  - Nút bấm khởi động (`Button Start`):
    - Nhãn: `"Bắt đầu ghép vai trò"` kèm icon mũi tên chuyển động nhẹ.
    - Màu sắc: Nền `Vermilion` (`#C8372D`), chữ trắng tinh khiết, viền mảnh 1px trong suốt.
    - Kích thước: Chiều cao `48px`, padding ngang `24px`, bo góc nhẹ `2px` (chuẩn kiến trúc triển lãm).
    - Hiệu ứng Hover: Sáng nhẹ `brightness(1.1)`, dịch chuyển nhẹ `translateY(-2px)`, đổ bóng màu đỏ ấm mờ `0 4px 12px rgba(200, 55, 45, 0.25)`.

---

## 5. Ngân Hàng Dữ Liệu 6 Mảnh Ghép Học Thuật (Academic Role Match Ledger)

Căn cứ theo giáo trình và tài liệu bài giảng chuẩn MLN131 Tiết 20 (Slides 5–10) cùng sổ đăng ký hình ảnh [`content/IMAGE_REGISTRY.json`](file:///d:/viet-nam-da-tang/content/IMAGE_REGISTRY.json), 6 mảnh ghép vai trò được định nghĩa chuẩn xác:

```
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| ID | Tên Lực lượng        | Phân loại Học thuật       | Vai trò & Nhiệm vụ Trọng tâm (Mission Snippet)  | Ảnh tư liệu xác thực (Source)   |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 01 | Giai cấp Công nhân   | Giai cấp cơ bản, Tiền     | Lãnh đạo cách mạng thông qua Đảng, đại diện PTSX| /images/portrait_worker_slide.jpg|
|    |                      | phong phương thức SX      | tiên tiến, tiên phong CNH - HĐH và hội nhập.    | (MLN131 Tiết 20 Slide 5)        |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 02 | Giai cấp Nông dân    | Giai cấp cơ bản, Trụ cột  | Chủ thể phát triển nông nghiệp sinh thái, xây   | /images/portrait_farmer_slide.jpg|
|    |                      | nông thôn & Lương thực    | dựng nông thôn mới và bảo đảm an ninh lương thực| (MLN131 Tiết 20 Slide 6)        |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 03 | Đội ngũ Trí thức     | Tầng lớp lao động trí óc  | Lao động sáng tạo đặc biệt quan trọng, dẫn dắt  | /images/portrait_intellectual_   |
|    |                      | sáng tạo khoa học         | kinh tế tri thức, chuyển giao công nghệ mới.    | slide.jpg (Tiết 20 Slide 7)     |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 04 | Đội ngũ Doanh nhân   | Tầng lớp tổ chức sản xuất | Tổ chức kết nối nguồn lực, tạo việc làm, đầu tàu| /images/portrait_entrepreneur_  |
|    |                      | kinh doanh & Thị trường   | lưu thông hàng hóa và thúc đẩy tăng trưởng GDP. | slide.jpg (Tiết 20 Slide 8)     |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 05 | Phụ nữ Việt Nam      | Nhóm xã hội giao thoa     | Lực lượng lao động to lớn, trụ cột giữ gìn hạnh | /images/portrait_women_slide.jpg|
|    |                      | theo Giới tính            | phúc gia đình và bình đẳng giới bền vững.       | (MLN131 Tiết 20 Slide 9)        |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
| 06 | Đội ngũ Thanh niên   | Nhóm xã hội giao thoa     | Rường cột của nước nhà, lực lượng xung kích     | /images/portrait_youth_slide.jpg|
|    |                      | theo Độ tuổi (16–30)      | đi đầu trong chuyển đổi số và bảo vệ Tổ quốc.   | (MLN131 Tiết 20 Slide 10)       |
+----+----------------------+---------------------------+-------------------------------------------------+---------------------------------+
```

> **Lưu ý Sư phạm Bắt buộc (Crucial Academic Disclaimer):**
> Trong suốt trải nghiệm game, hai token **Phụ nữ** và **Thanh niên** luôn mang nhãn phụ hiển thị thường trực:  
> `[NHÓM NHÂN KHẨU GIAO THOA — KHÔNG PHẢI GIAI CẤP RIÊNG BIỆT]`  
> nhằm củng cố tính chính xác lý luận của MLN131, tránh việc sinh viên nhầm lẫn đây là hai giai cấp độc lập.

---

## 6. Cơ Chế Tương Tác Đa Nền Tảng (Desktop Drag & Drop vs Mobile Tap-to-Match)

### 6.1. Kiến trúc Desktop (Màn hình rộng >= 1024px)
Trên màn hình lớn, giao diện mở ra một **bàn làm việc giám tuyển 2 cột đối xứng**:
- **Cột Trái (42% chiều rộng):** *Khay Token Lực Lượng Xã Hội (Social Forces Tokens Deck)*. Chứa 6 thẻ token nhỏ gọn, mỗi token hiển thị ảnh chân dung bo tròn, tên lực lượng và nhãn danh mục.
- **Cột Phải (58% chiều rộng):** *Lưới Ô Nhiệm Vụ Vai Trò (Target Mission Slots)*. Gồm 6 khung thẻ mở, hiển thị nội dung đặc tả vai trò cần giải mã.

```
========================= BỐ CỤC DESKTOP (>= 1024px) =========================
+-----------------------------------+----------------------------------------+
| KHAY TOKEN LỰC LƯỢNG (DRAGGABLE)  | CÁC Ô NHIỆM VỤ CẦN GHÉP (DROP TARGETS) |
+-----------------------------------+----------------------------------------+
| [●] Công nhân Việt Nam       ---┐ | [ Ô 01 ] "Lãnh đạo cách mạng qua Đảng..."|
| [●] Nông dân Việt Nam           │ | (Kéo token hoặc nhấp chọn để ghép vào) |
| [●] Đội ngũ Trí thức            │ |                                        |
| [●] Đội ngũ Doanh nhân          └─► [ Ô 02 ] "Chủ thể nông thôn mới..."    |
| [●] Phụ nữ Việt Nam (Giao thoa)   | [ Ô 03 ] "Lao động sáng tạo..."        |
| [●] Thanh niên (16-30 tuổi)       | [ Ô 04 ] "Tổ chức nguồn lực & GDP..."  |
|                                   | [ Ô 05 ] "Trụ cột gia đình & bình đẳng"|
|                                   | [ Ô 06 ] "Rường cột & xung kích số..." |
+-----------------------------------+----------------------------------------+
```

* **Cơ chế Kéo - Thả (Drag & Drop):**
  - Người dùng có thể kéo token trực tiếp vào ô nhiệm vụ tương ứng bằng chuột hoặc bút cảm ứng.
  - Khi token tiến vào vùng thả (Drop zone threshold: diện tích chồng lấn >= 35%), ô mục tiêu kích hoạt hiệu ứng hút vào (magnetic snap) với đường viền chuyển sang màu đỏ son hoặc vàng chanh.
  - Sử dụng đường cong SVG mềm mại (`Curved Bezier Line`) nối từ con trỏ/token đến ô đang được trỏ tới để tạo cảm quan dẫn truyền dòng năng lượng kết nối.
* **Cơ chế Nhấp chọn Tiếp cận (Click-to-match for Accessibility):**
  - Dành cho người dùng bàn phím, trackpad hoặc người dùng gặp khó khăn vận động:
    1. Nhấp (hoặc nhấn `Enter`/`Space`) vào 1 Token lực lượng -> Token chuyển sang trạng thái `Selected` (Viền đỏ Vermilion 2px nổi bật, rung sóng nhẹ).
    2. Nhấp vào 1 Ô nhiệm vụ -> Hệ thống tự động kích hoạt tiến trình kiểm tra ghép đôi.
    3. Hoặc ngược lại: Nhấp chọn Ô nhiệm vụ trước -> Nhấp chọn Token lực lượng sau.

### 6.2. Kiến trúc Mobile (Màn hình cảm ứng < 1024px & 320px–430px)
Trên điện thoại, **tuyệt đối không áp dụng kéo thả tự do** vì:
1. Thao tác ngón tay kéo vật thể nhỏ sẽ che mất văn bản trên màn hình.
2. Dễ xung đột với thao tác cuộn trang tự nhiên của hệ điều hành (Page scroll conflict).
3. Không đảm bảo chuẩn tiếp cận và gây mỏi ngón tay.

**Giải pháp Chạm Chọn Đôi Bước (Two-Step Tap Interaction):**
- **Giao diện 1 cột cuộn mượt mà:**
  1. **Vùng Đỉnh (Header Strip - Sticky):** Bảng tiến độ nhỏ gọn (Số câu đã ghép `x/6`, Tổng điểm tích lũy, Nút trợ giúp/xem lại quy luật).
  2. **Vùng Trọng tâm:** Lưới thẻ Nhiệm vụ (Mission Cards) hiển thị rõ ràng, cỡ chữ 14px–15px dễ đọc.
  3. **Vùng Đáy (Bottom Action Dock):** Khay chứa các Token lực lượng dạng thanh trượt hoặc lưới 2 cột chạm mở thuận tiện trong tầm với ngón tay cái (The Thumb Zone).

```
=============== BỐ CỤC MOBILE (390px x 844px) ===============
+-----------------------------------------------------------+
| [Header] Điểm: 260đ  ·  Đã ghép: [ 2 / 6 ]  ·  [Trợ giúp] |
+-----------------------------------------------------------+
| NHIỆM VỤ HIỆN TẠI / DANH SÁCH Ô NHIỆM VỤ:                 |
| ┌───────────────────────────────────────────────────────┐ |
| │ Ô SỐ 03:                                              │ |
| │ "Lực lượng lao động sáng tạo đặc biệt quan trọng..."  │ |
| │ [Chạm vào đây để chọn ghép] ◄ (Đang đợi chọn)         │ |
| └───────────────────────────────────────────────────────┘ |
|                                                           |
| KHAY LỰC LƯỢNG (CHẠM ĐỂ CHỌN) - Chiều cao nút >= 48px:    |
| ┌───────────────────────────┐ ┌─────────────────────────┐ |
| │ [Ảnh] Công nhân           │ │ [Ảnh] Nông dân          │ |
| └───────────────────────────┘ └─────────────────────────┘ |
| ┌───────────────────────────┐ ┌─────────────────────────┐ |
| │ [Ảnh] Trí thức  (CHỌN) ◄  │ │ [Ảnh] Doanh nhân        │ |
| └───────────────────────────┘ └─────────────────────────┘ |
| ┌───────────────────────────┐ ┌─────────────────────────┐ |
| │ [Ảnh] Phụ nữ [Giao thoa]  │ │ [Ảnh] Thanh niên [Tuổi] │ |
| └───────────────────────────┘ └─────────────────────────┘ |
+-----------------------------------------------------------+
```

* **Trình tự thao tác chuẩn trên Mobile:**
  - **Bước 1:** Người học chạm ngón cái vào thẻ Lực lượng (ví dụ: `Đội ngũ Trí thức`) -> Thẻ nhận trạng thái `Selected` (Viền Vermilion phát sáng, scale nhẹ 1.03, kích hoạt rung phản hồi xúc giác siêu nhẹ qua Haptic Feedback `navigator.vibrate(12)` trên thiết bị hỗ trợ).
  - **Bước 2:** Người học chạm tiếp vào Ô Nhiệm vụ mong muốn -> Kết quả lập tức được hiển thị.
  - Chiều cao vùng chạm tối thiểu của mọi nút và thẻ trên mobile là **48px x 48px**, khoảng cách giữa các phần tử tối thiểu **8px**, triệt tiêu hoàn toàn khả năng chạm nhầm.

---

## 7. Các Trạng Thái Phản Hồi & Động Lực Học Chuyển Động (States & Motion)

### 7.1. Bảng 4 trạng thái tương tác cốt lõi

```
+---------------+-----------------------------------------------+-----------------------------------------------+
| Trạng thái    | Biểu hiện Thị giác (Visual Treatment)         | Ý nghĩa Sư phạm & Hành vi Hệ thống            |
+---------------+-----------------------------------------------+-----------------------------------------------+
| 1. IDLE       | Nền Warm Stone `#E8E6DF` (hoặc Charcoal       | Sẵn sàng tương tác. Hiển thị nội dung đầy đủ, |
|    (Chờ đợi)  | `#1C1F22` ở Dark Mode). Viền mảnh 1px subtle. | có số chỉ mục La Mã và lời nhắc thao tác mờ.  |
+---------------+-----------------------------------------------+-----------------------------------------------+
| 2. SELECTED   | Viền đỏ son Vermilion `#C8372D` dày 2px.      | Báo hiệu phần tử đang được nhấc lên / chọn.   |
|    (Đang chọn)| Nâng độ cao (elevation z-index), bóng đổ ấm   | Cho phép người học huỷ chọn bằng cách chạm lại|
|               | nhẹ `0 6px 16px rgba(200,55,45,0.18)`.        | hoặc chuyển sang phần tử khác.                |
+---------------+-----------------------------------------------+-----------------------------------------------+
| 3. MATCHED    | Chuyển sang tông màu thành công: Viền Citron  | Ghép đôi chuẩn xác! Khóa thẻ không cho kéo lại|
|    (Khớp đúng)| `#C8D668` trên nền tối, hoặc Forest Green     | Hiện huy hiệu kiểm chứng [✔ ĐÃ XÁC THỰC].     |
|               | `#2E7D32` trên nền sáng. Ảnh chân dung trượt  | Hiện lập tức câu giải thích học thuật ngắn gọn|
|               | vào vị trí khóa cố định (Snap transition).    | (+100đ / +60đ / +30đ bay nhẹ lên rồi tan biến)|
+---------------+-----------------------------------------------+-----------------------------------------------+
| 4. MISMATCHED | Đổi viền sang màu hổ phách dịu `#D97706`      | Ghép chưa đúng. TUYỆT ĐỐI KHÔNG RUNG LẮC MẠNH.|
|    (Chưa đúng)| trong 800ms. Dịch chuyển ngang nhẹ nhàng      | Token tự động hồi về vị trí cũ sau 400ms.     |
|               | ±3px (1 chu kỳ 250ms). Xuất hiện gợi ý tư duy.| Hệ thống giữ nguyên số điểm, tăng số lần thử. |
+---------------+-----------------------------------------------+-----------------------------------------------+
```

### 7.2. Đặc tả câu chữ phản hồi nhân văn khi Mismatched (Positive Feedback Copy)
Tránh hoàn toàn các thông báo tiêu cực kiểu: *"Sai rồi!", "Bạn đã nhầm lẫn!".* Thay vào đó là ngôn ngữ định hướng học thuật:
- Nếu ghép nhầm **Công nhân** sang ô nông nghiệp:  
  *💡 "Giai cấp công nhân gắn liền với phương thức sản xuất công nghiệp và công nghệ hiện đại. Hãy tìm lực lượng gắn bó trực tiếp với ruộng đồng nông thôn!"*
- Nếu ghép nhầm **Phụ nữ / Thanh niên** sang vai trò lãnh đạo giai cấp:  
  *💡 "Lực lượng này là nhóm nhân khẩu học giao thoa trong mọi giai cấp, không giữ vị trí lãnh đạo chính trị độc lập. Hãy đọc lại phân loại nhân khẩu!"*
- Nếu ghép nhầm **Doanh nhân** sang nghiên cứu giống cây trồng:  
  *💡 "Doanh nhân là người tổ chức sản xuất và kết nối thị trường. Việc nghiên cứu khoa học cơ bản thuộc về một lực lượng sáng tạo khác!"*

### 7.3. Quy chuẩn Chuyển động Tôn trọng Người dùng (Motion Choreography & Reduced Motion)
- **Thời lượng chuyển động (Timing scale):**
  - Trạng thái Hover / Focus: `150ms ease-out`.
  - Trạng thái Nhấc / Chọn (Select / Lift): `200ms cubic-bezier(0.2, 0.8, 0.2, 1)`.
  - Trạng thái Hút vào ô (Snap into Slot): `300ms cubic-bezier(0.34, 1.56, 0.64, 1)`.
  - Trạng thái Đổi màu phản hồi: `350ms ease-in-out`.
- **Phương án Giảm chuyển động (`prefers-reduced-motion: reduce`):**
  - Vô hiệu hóa toàn bộ hiệu ứng biến dạng `scale`, hiệu ứng lò xo kéo dãn `spring` và dịch chuyển `transform: translate`.
  - Thay thế bằng chuyển đổi độ mờ đơn thuần (`opacity: 0 -> 1` trong `120ms`) và đổi màu đường viền tức thì.
  - Mọi thông tin phản hồi và điểm số được cập nhật lập tức trong cây DOM với thuộc tính `aria-live="polite"`.

---

## 8. Bảng Điểm Sư Phạm & Thuật Toán Tính Điểm (Scoring Engine)

### 8.1. Quy tắc tính điểm khuyến khích thử sai (Iterative Learning Scoring)
Trò chơi được thiết kế để khuyến khích sinh viên tự điều chỉnh nhận thức, không trừng phạt nặng nề việc chọn sai:

```
+------------------+------------------+-----------------------------------------------------------+
| Lần ghép đúng    | Điểm cộng        | Đánh giá Sư phạm                                          |
+------------------+------------------+-----------------------------------------------------------+
| Lần 1 (Đoán trúng)| +100 Điểm        | Xuất sắc! Nắm vững bản chất vai trò ngay từ lần đọc đầu.   |
| Lần 2 (Sau 1 gợi ý)| +60 Điểm         | Tốt! Khả năng tự đối chiếu và hiệu chỉnh thông tin nhanh.  |
| Lần 3 trở đi     | +30 Điểm         | Kiên trì! Đã nhận diện được mảnh ghép sau khi đối chiếu.  |
| Thưởng hoàn thành| +100 Điểm Thưởng | Hoàn thành trọn vẹn cả 6 mảnh ghép cơ cấu xã hội!        |
+------------------+------------------+-----------------------------------------------------------+
| TỔNG ĐIỂM TỐI ĐA | 700 ĐIỂM         | Điểm tuyệt đối vinh danh danh hiệu Am hiểu sâu sắc MLN131 |
+------------------+------------------+-----------------------------------------------------------+
```

### 8.2. Lưu trữ và Trạng thái Phiên chơi
- Điểm số được lưu tạm thời trong React Component State (`score`, `attemptsPerCard`, `matchedCount`).
- Tùy chọn lưu kỷ lục cá nhân vào `localStorage("vndt-matching-highscore")` để học viên có thể thử thách lại nhằm đạt điểm tuyệt đối 700/700.

---

## 9. Màn Hình Tổng Kết & Cầu Nối Khám Phá Scene 05 (Completion & Next Scene Bridge)

### 9.1. Giao diện Màn hình Tổng kết (Completion View)
Khi cả 6 lực lượng xã hội đều đã được ghép đúng (`matchedCount === 6`), giao diện mini-game chuyển cảnh mượt mà sang **Bảng Vinh Danh Thành Tích Tri Thức**:

```
+---------------------------------------------------------------------------------------------------------+
|                                    HOÀN THÀNH BẢN ĐỒ CƠ CẤU XÃ HỘI                                      |
|                                     ★ TỔNG ĐIỂM: 660 / 700 ĐIỂM ★                                       |
|                                                                                                         |
| Danh hiệu:   NHÀ PHÂN TÍCH THỰC CHỨNG XUẤT SẮC                                                          |
| Đúc kết:     "Sáu lực lượng xã hội không tồn tại biệt lập. Trong nền kinh tế thị trường định hướng      |
|              XHCN, họ vừa gắn kết chặt chẽ trong khối liên minh Công - Nông - Trí thức mở rộng, vừa      |
|              hỗ trợ nhau tạo nên sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc."                 |
|                                                                                                         |
| Thao tác:    [ ↺ Chơi lại thử thách ]       [ TIẾP TỤC: KHÁM PHÁ HẠT GẠO LIÊN MINH (PHÂN CẢNH 05) ➔ ]    |
+---------------------------------------------------------------------------------------------------------+
```

### 9.2. Thang phân loại danh hiệu học thuật
- **650 – 700 Điểm:** *Nhà Quan Sát Xã Hội Xuất Sắc* (Thấu hiểu sâu sắc bản chất từng giai tầng và nhóm nhân khẩu).
- **500 – 640 Điểm:** *Nhà Phân Tích Thực Chứng* (Nắm vững các mối liên hệ và vai trò sản xuất cốt lõi).
- **Dưới 500 Điểm:** *Người Khám Phá Kiên Trì* (Đã vượt qua thử thách và hoàn thành bức tranh tổng thể).

### 9.3. Cầu nối chuyển cảnh mượt mà sang Phân cảnh 05 (Bridge to Scene 05)
- Nút hành động chính (Primary CTA): `"Tiếp tục: Khám phá Chuỗi Hạt gạo Liên minh (#scene-05)"`.
- Khi người dùng nhấp vào nút này:
  - Hệ thống sử dụng lệnh cuộn mượt có bù trừ chiều cao thanh điều hướng:  
    `window.scrollTo({ top: document.getElementById("scene-05").offsetTop - 64, behavior: "smooth" })`.
  - Cập nhật URL hash `#scene-05` mà không làm tải lại trang.
  - Focus chuyển an toàn vào tiêu đề chính của Phân cảnh 05 (`tabIndex={-1}`) phục vụ người dùng trình đọc màn hình.

---

## 10. Bố Cục Không Gian Chi Tiết Theo Kích Thước Màn Hình (Responsive Breakpoints)

### 10.1. Màn hình Máy tính chuẩn: Desktop 1440 x 900 px
- **Bố cục tổng quan:** Khung chứa tối đa `1280px`, căn giữa màn hình, padding 2 bên `32px`.
- **Cột Trái (Khay Lực lượng - 5 cột / 12 cột):**
  - Danh sách 6 token lực lượng xếp thành 2 cột nhỏ (3 hàng x 2 cột) hoặc 1 cột dọc thanh thoát.
  - Mỗi token kích thước `w-full`, cao `72px`, gồm ảnh đại diện tròn `48px`, tên lực lượng in đậm font `Be Vietnam Pro` `14px`, nhãn phụ màu đỏ trầm hoặc xám `11px`.
- **Cột Phải (Lưới Nhiệm vụ - 7 cột / 12 cột):**
  - 6 ô nhiệm vụ xếp thành lưới 2 cột x 3 hàng.
  - Kích thước mỗi ô: Chiều cao tối thiểu `140px`, padding `16px`.
  - Phía trên mỗi ô có nhãn số thứ tự `[NHIỆM VỤ 01]` bằng font `JetBrains Mono`. Đoạn trích vai trò hiển thị nổi bật với kích thước chữ `14px`, giãn dòng `1.55`.

### 10.2. Màn hình Điện thoại chuẩn: Mobile 390 x 844 px (iPhone 12/13/14/15)
- **Bố cục tổng quan:** Chiều rộng 100%, padding ngang `16px`, không thanh cuộn ngang (`overflow-x-clip`).
- **Thanh tiến độ đỉnh:** Ghim nhẹ dạng sticky với chiều cao `40px`, nền bán trong suốt `backdrop-blur-md`, hiển thị điểm số và số lượng thẻ đã hoàn thành.
- **Vùng Nhiệm vụ:** Hiển thị danh sách các ô nhiệm vụ cuộn dọc. Mỗi ô có chiều cao vừa vặn `110px–125px`, có nút chạm chọn to bản `"Chạm để ghép lực lượng"`.
- **Khay Lực lượng dưới đáy:** Khay thẻ dạng lưới 2 cột (chiều cao mỗi nút `52px`) bám nhẹ ở đáy màn hình hoặc nằm ngay phía dưới danh sách nhiệm vụ.

### 10.3. Cửa thoát hiểm màn hình nhỏ: Small Mobile 320 x 568 px (iPhone SE gen 1)
- **Giải pháp bảo đảm không tràn layout (Escape Hatch):**
  - Giảm padding ngang màn hình xuống còn `10px`.
  - Ảnh chân dung trong token thu nhỏ từ `48px` về `36px` để tiết kiệm không gian.
  - Cỡ chữ nội dung nhiệm vụ tự động co về `13px` bằng hàm `clamp(0.8125rem, 2.5vw, 0.9375rem)`.
  - Khay lực lượng chuyển sang dạng danh sách 1 cột với chiều cao mỗi hàng `44px` (đúng chuẩn tối thiểu Apple HIG).
  - Loại bỏ các đường viền trang trí phụ và bóng đổ phức tạp để tăng tốc độ dựng hình trên vi xử lý cũ.

---

## 11. Đặc Tả Thành Phần Giao Diện & Mã Nguồn CSS Handoff (Code Specs)

### 11.1. TypeScript Interfaces & Trạng thái (Component Contracts)

```typescript
// Định nghĩa kiểu dữ liệu cho Mảnh ghép Vai trò
export interface RoleTarget {
  id: string;               // Ví dụ: "role-cong-nhan"
  correctForceId: string;   // Khớp với ID lực lượng: "cong-nhan"
  taskNumber: string;       // "01", "02",...
  taskTitle: string;        // "Phương thức sản xuất tiên tiến & Lãnh đạo cách mạng"
  taskDescription: string;  // Đoạn trích vai trò chuẩn MLN131
  hint: string;             // Gợi ý học thuật khi ghép chưa chính xác
  academicSlide: string;    // "MLN131 Tiết 20 Slide 5"
}

// Định nghĩa kiểu dữ liệu cho Token Lực lượng
export interface ForceToken {
  id: string;               // "cong-nhan", "nong-dan",...
  name: string;             // "Giai cấp Công nhân Việt Nam"
  shortName: string;        // "Công nhân"
  categoryLabel: string;    // "Giai cấp cơ bản" hoặc "Nhóm giao thoa"
  isDemographic: boolean;   // true nếu là Phụ nữ hoặc Thanh niên
  imageSrc: string;         // "/images/portrait_worker_slide.jpg"
  altText: string;          // Mô tả ảnh cho screen readers
}

// Trạng thái vận hành trò chơi
export interface RoleMatchingGameState {
  selectedTokenId: string | null;
  selectedTargetId: string | null;
  matchedPairs: Record<string, string>; // { [targetId]: forceId }
  attempts: Record<string, number>;    // Số lần thử của từng ô
  score: number;                       // Tổng điểm tích lũy
  isCompleted: boolean;                // true khi matchedCount === 6
  lastFeedback: {
    targetId: string;
    isCorrect: boolean;
    message: string;
  } | null;
}
```

### 11.2. Danh mục Lớp Phong cách Tailwind CSS Chuẩn mực

```html
<!-- Cấu trúc mẫu Thẻ Nhiệm Vụ (Mission Target Card) -->
<div 
  role="region"
  aria-label="Nhiệm vụ 01"
  class="relative p-4 sm:p-5 rounded-sm border transition-all duration-200
         bg-stone-warm/50 dark:bg-charcoal border-subtle dark:border-border-dark
         hover:border-vermilion/50 focus-within:ring-2 focus-within:ring-vermilion"
>
  <!-- Nhãn Kicker & Điểm số -->
  <div class="flex items-center justify-between text-xs font-mono text-muted dark:text-light-muted mb-2">
    <span class="font-bold text-vermilion">[ NHIỆM VỤ 01 ]</span>
    <span class="text-[11px]">MLN131 Tiết 20 Slide 5</span>
  </div>

  <!-- Nội dung mô tả vai trò -->
  <p class="text-sm sm:text-[15px] text-carbon dark:text-chalk leading-relaxed mb-4">
    Lãnh đạo cách mạng thông qua Đảng, đại diện cho phương thức sản xuất tiên tiến, giữ vị trí tiên phong trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước.
  </p>

  <!-- Khu vực Thả hoặc Chạm Ghép -->
  <div 
    class="min-h-[48px] rounded border border-dashed flex items-center justify-center p-2
           border-stone-400 dark:border-stone-600 bg-white/40 dark:bg-black/20 text-xs font-mono"
  >
    <!-- Trạng thái trống -->
    <span class="text-stone-500 flex items-center gap-1.5">
      <Compass className="w-4 h-4 text-vermilion" />
      Chạm hoặc kéo Lực lượng vào đây
    </span>
  </div>
</div>
```

### 11.3. Tiêu chuẩn Tiếp cận Bắt buộc (Accessibility Compliance Checklist)
- [x] **Điều hướng Bàn phím 100%:** Người dùng có thể hoàn thành trò chơi chỉ bằng phím `Tab`, `Enter`, `Space` và các phím mũi tên.
- [x] **Thông báo Động ARIA (`aria-live="polite"`):** Khi ghép đúng hoặc chưa đúng, bộ đọc màn hình đọc to thông báo điểm số và phản hồi giải thích.
- [x] **Độ lớn Mục tiêu Chạm (Touch Targets):** Mọi nút bấm và phần tử chạm đều có kích thước vật lý $\ge 44 \times 44$ px (đạt chuẩn WCAG 2.1 Success Criterion 2.5.5).
- [x] **Độ tương phản Văn bản:** Tất cả văn bản đạt tỷ lệ tương phản tối thiểu $4.5:1$ (AA) và hầu hết đạt $> 7.0:1$ (AAA).
- [x] **Hỗ trợ Giảm chuyển động:** Tôn trọng cài đặt `prefers-reduced-motion` của hệ điều hành.

---

## 12. Hướng Dẫn Bàn Giao Triển Khai (Frontend Handoff Guide)

1. **Vị trí tạo Component mới:**  
   `components/Scene4RoleMatching.tsx`
2. **Tích hợp vào Phân cảnh 04:**  
   Nhúng `<Scene4RoleMatching onComplete={() => ...} />` vào tệp [`components/Scene4Profiles.tsx`](file:///d:/viet-nam-da-tang/components/Scene4Profiles.tsx) tại dòng 515 (ngay trước `<div className="pt-6"><SceneTransition ... /></div>`).
3. **Hình ảnh sử dụng:**  
   Toàn bộ ảnh chân dung được lấy trực tiếp từ thư mục `public/images/` đã được tối ưu hóa trong Milestone 09, đảm bảo thời gian tải tức thì và giữ nguyên tính xác thực lịch sử.
4. **Kiểm thử Playwright bổ sung:**  
   Thêm bài test tương tác ghép nối tại `tests/interactions.spec.ts` để kiểm tra luồng click-to-match trên cả desktop 1440px và mobile 390px.

---
*Tài liệu được biên soạn và phê duyệt bởi Senior Editorial Art Director — Dự án VIỆT NAM ĐA TẦNG.*