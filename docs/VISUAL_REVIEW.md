# Báo Cáo Thẩm Định Giao Diện & Thị Giác (Visual Review)
## Dự án: VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131

*Chủ sở hữu tài liệu:* Art Director (`docs/VISUAL_REVIEW.md`)  
*Căn cứ thẩm định:* [`spec/DESIGN_DIRECTION.md`](file:///d:/viet-nam-da-tang/spec/DESIGN_DIRECTION.md), [`.agents/rules/visual-editorial.md`](file:///d:/viet-nam-da-tang/.agents/rules/visual-editorial.md), [`docs/ART_DIRECTION.md`](file:///d:/viet-nam-da-tang/docs/ART_DIRECTION.md), [`docs/DESIGN_TOKENS.md`](file:///d:/viet-nam-da-tang/docs/DESIGN_TOKENS.md).  
*Trạng thái hiện tại:* **TIỀN THẨM ĐỊNH (PRE-IMPLEMENTATION PROTOCOL)** — Sẵn sàng cho đợt kiểm thử giao diện thực tế tại Milestone 05.

> **Tuyên ngôn trung thực của Art Director:**  
> Tại thời điểm Milestone 03, mã nguồn giao diện chưa được lập trình (thuộc Milestone 04). Báo cáo này **tuyệt đối không đưa ra các nhận định cảm tính hoặc khẳng định đã kiểm tra ảnh chụp màn hình khi ảnh chưa thực sự được chụp**. Tài liệu thiết lập khung thẩm định nghiêm ngặt, bảng tiêu chí đo lường định lượng và khuôn mẫu ghi nhận bằng chứng cho các kích thước viewport mục tiêu: **320px, 390px, 768px, 1024px, 1440px**.

---

## 1. Khung Tiêu Chí Thẩm Định Thị Giác (Visual Review Rubric)

Mọi ảnh chụp màn hình thu được từ Playwright / Trình duyệt thực tế sẽ được chấm điểm và đánh giá theo 6 trụ cột cốt lõi sau:

```
+-----------------------------------------------------------------------------------------+
|                         6 TRỤ CỘT THẨM ĐỊNH GIAO DIỆN THỰC TẾ                            |
+---+----------------------------+--------------------------------------------------------+
| # | Trụ cột kiểm tra           | Tiêu chuẩn chấp thuận (PASS Criteria)                   |
+---+----------------------------+--------------------------------------------------------+
| 1 | Typography & Dấu Tiếng Việt| Không cụt dấu (ă, â, ê, ô, ơ, ư, đ); line-height chuẩn;|
|   |                            | độ rộng dòng đọc 50–75ch trên desktop; không ngắt dòng |
|   |                            | mồ côi (widows/orphans) ở tiêu đề chính.               |
+---+----------------------------+--------------------------------------------------------+
| 2 | Độ Tương Phản & Bảng Màu   | Đạt 100% tỷ lệ tương phản WCAG 2.1 AA/AAA theo token;  |
|   |                            | Tuyệt đối không dùng chữ Citron trên nền Chalk;        |
|   |                            | Màu Vermilion chỉ dùng cho chữ lớn và điểm nhấn.       |
+---+----------------------------+--------------------------------------------------------+
| 3 | Khả Năng Thích Ứng Mobile  | Không xuất hiện thanh cuộn ngang (horizontal scrollbar)|
|   | (320px - 390px - 430px)    | ở bất kỳ màn hình nào; vùng chạm cảm ứng >= 44x44px;   |
|   |                            | Khoảng cách biên an toàn (padding >= 14px tại 320px).  |
+---+----------------------------+--------------------------------------------------------+
| 4 | Xử Lý Ảnh & Huy Hiệu Nguồn | Ảnh phóng sự chân thực, không có rác đồ họa AI;        |
|   |                            | Cắt cúp chân dung giữ đúng trọng tâm nhân vật;         |
|   |                            | Huy hiệu bản quyền [MINH_HOA] hiển thị rõ ràng.        |
+---+----------------------------+--------------------------------------------------------+
| 5 | Nhịp Điệu & Cấu Trúc Scene | Không dùng lưới 6 thẻ giống hệt nhau (anti-SaaS card); |
|   |                            | Phụ nữ & Thanh niên có huy hiệu "Giao thoa xã hội";    |
|   |                            | Sơ đồ lúa gạo có nhãn minh họa sư phạm rõ rệt.         |
+---+----------------------------+--------------------------------------------------------+
| 6 | Chuyển Động & Tiếp Cận     | Khi bật prefers-reduced-motion: nội dung giữ nguyên vẹn|
|   |                            | 100%, không bị giấu sau animation; viền focus bàn phím |
|   |                            | sắc nét 2px Vermilion với offset 3px.                  |
+---+----------------------------+--------------------------------------------------------+
```

---

## 2. Bảng Kiểm Tra Chi Tiết Từng Scene (Scene-by-Scene Gate Checklist)

### Scene 1: Bức Tranh Xã Hội Việt Nam (Hero Section)
- [ ] **Desktop 1440px:**
  - Tiêu đề `VIỆT NAM ĐA TẦNG` hiển thị uy nghi, font Serif co giãn theo fluid clamp (`~4.75rem`), không bị xuống dòng vụn vặt.
  - Cụm ảnh tài liệu đối trọng cân bằng ở cột phải, có nhãn lưu trữ ở góc ảnh.
  - Thanh chỉ mục (Index Strip) ghim tự nhiên ở chân màn hình đầu tiên, phản ánh đủ 6 trạm nội dung.
- [ ] **Mobile 390px:**
  - Bố cục 1 cột dọc: Ảnh chân dung hiển thị gọn phía trên (`~42vh`), tiêu đề và lời đề từ hiển thị rõ ràng ngay bên dưới.
  - Vùng chữ có đủ tương phản, không bị chìm vào chi tiết ảnh nền.
- [ ] **Thoát hiểm 320px:**
  - Không có hiện tượng tràn khung ngang (`overflow-x: hidden` toàn cục hoạt động chuẩn).
  - Tựa đề co về `2.1rem` - `2.5rem`, hiển thị đầy đủ trên màn hình nhỏ mà không cần zoom.

---

### Scene 2: Khái Niệm Cơ Cấu Xã Hội – Giai Cấp & 3 Quan Hệ Cơ Bản
- [ ] **Desktop 1440px:**
  - Bố cục 2 cột bất đối xứng: Cột trái chứa đoạn văn định nghĩa và trích dẫn `[BAI_GIANG]`, cột phải hiển thị "Tam Giác Quan Hệ".
  - Sơ đồ tương tác 3 quan hệ (Sở hữu TLSX - Tổ chức quản lý - Địa vị chính trị) làm nổi bật rõ ràng khi tương tác.
- [ ] **Mobile 390px:**
  - Chuyển sang dạng thẻ tiến trình dọc với 3 tab/accordion có chỉ số La Mã `01`, `02`, `03` màu đỏ son (*Vermilion*).
  - Vùng chạm mở thông tin có chiều cao tối thiểu 48px.
- [ ] **Thoát hiểm 320px:**
  - Chữ trong các tab không bị chồng chéo, các đường viền ngăn cách phân định rõ ràng nội dung.

---

### Scene 3: Ba Quy Luật Biến Đổi Của Cơ Cấu Xã Hội – Giai Cấp
- [ ] **Desktop 1440px:**
  - Trục hoành 3 pha (3-Moment Narrative Progression) hiển thị so le mỹ thuật, không dùng component timeline generic của bootstrap.
  - Mỗi pha có hình ảnh minh chứng tài liệu nhỏ kèm trích chú slide bài giảng.
- [ ] **Mobile 390px:**
  - Tiến trình cuộn dọc dạng trục chỉ dẫn (Editorial Stepper) mượt mà, vệt đỏ son chạy dọc lề trái dẫn dắt ánh nhìn.
- [ ] **Thoát hiểm 320px:**
  - Trục chỉ dẫn lùi sát mép 8px, dành không gian tối đa cho việc đọc văn bản quy luật.

---

### Scene 4: Chân Dung 6 Lực Lượng Xã Hội (Dossier)
- [ ] **Desktop 1440px:**
  - **Kiểm định tuyệt đối:** Không được xuất hiện lưới 6 thẻ tròn hoặc 6 thẻ hộp đồng dạng!
  - Hồ sơ phóng sự chuyên đề (Editorial Spread) hiển thị: Ảnh chân dung thực tế bên trái, bảng cấu trúc 3 phần bên phải: `VỊ TRÍ` - `VAI TRÒ` - `ĐÓNG GÓP`.
  - Hai nhóm **Phụ nữ** và **Thanh niên** bắt buộc phải có huy hiệu chỉ dẫn học thuật: `[NHÓM XÃ HỘI GIAO THOA - KHÔNG PHẢI GIAI CẤP RIÊNG BIỆT]`.
- [ ] **Mobile 390px:**
  - Thanh chọn lực lượng dạng nhãn trượt ngang (pill navigation) dễ vuốt chạm.
  - Thẻ hồ sơ chân dung hiển thị theo chiều dọc, tỷ lệ ảnh 16:9 sắc nét, phân tách rõ ràng 3 khối Vị trí / Vai trò / Đóng góp.
- [ ] **Thoát hiểm 320px:**
  - Thanh trượt nhãn không bị tràn vỡ giao diện; phông chữ thông tin chân dung duy trì tối thiểu 14px để đảm bảo tính dễ đọc.

---

### Scene 5: Chuỗi Giá Trị Lúa Gạo — Minh Họa Tính Liên Minh
- [ ] **Desktop 1440px:**
  - Sơ đồ dòng chảy giá trị thể hiện rõ 4 mắt xích liên minh: Nông dân -> Trí thức -> Công nhân -> Doanh nhân.
  - Nhãn sư phạm bắt buộc: `[MÔ HÌNH MINH HỌA SƯ PHẠM - BÀI HỌC VỀ LIÊN MINH GIAI CẤP]` hiển thị ở góc trên của sơ đồ.
  - Phụ nữ và Thanh niên được tích hợp khéo léo như những chủ thể hiện diện xuyên suốt chuỗi giá trị.
- [ ] **Mobile 390px:**
  - Dòng chảy xếp dọc tuần tự từng trạm dừng (Station Cards), liên kết bằng đường gạch nối tối giản.
- [ ] **Thoát hiểm 320px:**
  - Các khối mắt xích giữ khoảng cách đệm an toàn, không bị co ép chữ hoặc tràn mép.

---

### Scene 6: Tổng Kết, Trắc Nghiệm Củng Cố & Bản Quyền
- [ ] **Desktop 1440px:**
  - Khối 3 đúc kết chính sách hiển thị trang trọng trên nền giấy tối Carbon.
  - Giao diện Quiz hiển thị **từng câu một (One-question-at-a-time)** kèm thanh chỉ số `01/05`, phản hồi Đúng/Sai kèm trích dẫn slide bài giảng ngay khi chọn.
  - Bảng tra cứu nguồn học thuật và bản quyền ảnh dạng 3 cột chuẩn mực.
- [ ] **Mobile 390px:**
  - Khối Quiz nằm trọn trong khung nhìn màn hình để người học không phải cuộn trang khi suy nghĩ và trả lời.
  - Các nút phương án có diện tích bấm rộng rãi (chiều cao >= 52px).
- [ ] **Thoát hiểm 320px:**
  - Phương án trắc nghiệm không bị mất chữ, padding trong nút tối ưu để hiển thị trọn vẹn văn bản câu hỏi.

---

## 3. Nhật Ký Đánh Giá Ảnh Chụp Màn Hình Trình Duyệt Thực Tế (Screenshot Evidence Ledger)

*Khu vực này được cập nhật trực tiếp từ đợt kiểm tra ảnh chụp màn hình thực tế (Milestone 05 và Phase 1 Visual Audit) tại `tests/screenshots/`.*

```
+---------------------------------------------------------------------------------------------------------------------------------------+
|                                             BẢNG GHI NHẬN BẰNG CHỨNG THỊ GIÁC THỰC TẾ                                                  |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
| ID | Tệp ảnh bằng chứng  | Viewport / Thiết bị | Status | Lỗi thị giác / Thiếu hụt trực quan  | Chỉ đạo Art Director khắc phục            |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
| 01 | desktop-1440.png    | 1440 x 900 px    | AUDITED| 100% text/vector; hoàn toàn thiếu  | Phase 2 bổ sung cụm 17 ảnh tư liệu phóng  |
|    | (1,616 KB)          | (Desktop Lớn)    |        | ảnh tư liệu chân dung và sản xuất. | sự (IMG-01 -> IMG-17), tạo layout 2 cột. |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
| 02 | mobile-390.png      | 390 x 844 px     | AUDITED| Trực quan bị khô cứng, thiếu chân  | Tích hợp ảnh chân dung 16:9 / 4:5 phía    |
|    | (1,363 KB)          | (Mobile Chuẩn)   |        | dung người thực, các thẻ text dài. | trên hồ sơ Scene 4; tối ưu ngón tay chạm. |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
| 03 | mobile-320.png      | 320 x 568 px     | PASS   | Thoát hiểm hoàn hảo: không tràn    | Duy trì cấu trúc fluid clamp; đảm bảo     |
|    | (1,387 KB)          | (Escape Hatch)   |        | ngang, font co giãn chuẩn xác.     | khi thêm ảnh không phá vỡ max-w-full.     |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
| 04 | tablet-768.png      | 768 x 1024 px    | AUDITED| Khung lưới chuẩn nhưng phân đoạn   | Bổ sung ảnh tư liệu cân đối 2 cột tại     |
|    | (1,640 KB)          | (Tablet Đứng)    |        | text chiếm ưu thế, thiếu ảnh thực. | Scene 2, Scene 3 và Scene 5.              |
+----+---------------------+------------------+--------+------------------------------------+-------------------------------------------+
```

### Chi tiết các phát hiện thẩm định trực quan Phase 1:
1. **Scene 01 Hero:** Màn hình uy nghi nhưng 100% text; cần thêm ảnh tư liệu phóng sự toàn cảnh đất nước (`IMG-01`, `IMG-02`).
2. **Scene 02 Tam giác:** Tương tác SVG tốt nhưng phần diễn giải sở hữu đất đai và dây chuyền cần ảnh tư liệu đối trọng (`IMG-03`, `IMG-04`, `IMG-05`).
3. **Scene 03 Ba quy luật:** Tiến trình Đổi mới bị "hộp hóa" thành text, cần ảnh lịch sử - hiện đại hóa chuyển dịch kinh tế (`IMG-06`, `IMG-07`, `IMG-08`).
4. **Scene 04 Hồ sơ 6 lực lượng:** **Điểm thiếu hụt nghiêm trọng nhất** — gọi là hồ sơ chân dung nhưng chỉ có icon vector; bắt buộc bổ sung 6 bức ảnh chân dung phóng sự độc bản cho Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ, Thanh niên (`IMG-09` đến `IMG-14`).
5. **Scene 05 Chuỗi lúa gạo:** Thiếu hình ảnh đồng ruộng, giống lúa ST25, nhà máy sấy lúa và cảng xuất khẩu gạo (`IMG-15`, `IMG-16`).
6. **Scene 06 Đúc kết & Quiz:** Cần hình ảnh đại đoàn kết toàn dân tộc (`IMG-17`) và huy hiệu vinh danh hoàn thành bài học.

*Xem chi tiết toàn bộ danh mục và quy chuẩn biên tập tại:* [`docs/VISUAL_AUDIT.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_AUDIT.md).

### Hướng dẫn hành động khi phát hiện lỗi thị giác (Remediation Protocol):
1. **Nếu phát hiện vỡ chữ hoặc cắt dấu tiếng Việt:** Yêu cầu `frontend-engineer` tăng `line-height` trong token tương ứng lên tối thiểu `1.22` đối với heading hoặc `1.65` đối với body, kiểm tra font fallback trên Linux/Windows.
2. **Nếu phát hiện tràn ngang tại 320px:** Kiểm tra các thành phần cố định chiều rộng (`w-[...]`), chuyển toàn bộ sang hệ thống phần trăm (`w-full`), `max-w-full` và `min-w-0` trên các container flex/grid.
3. **Nếu phát hiện nút bấm < 44px trên mobile:** Bổ sung `min-h-[44px]` và padding ngón tay chạm (`p-3` hoặc `p-4`).
4. **Nếu phát hiện ảnh thiếu huy hiệu bản quyền:** Đánh dấu **GATE BLOCKED**, yêu cầu bổ sung component `DocumentaryCreditBadge` trước khi cho phép bàn giao.
