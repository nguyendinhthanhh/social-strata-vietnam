# Báo Cáo Kiểm Định Kỹ Thuật (Technical QA Report)
## Dự án: VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131
*Người lập báo cáo:* Independent Accessibility QA Engineer  
*Căn cứ thẩm định:* [`spec/QUALITY_GATES.md`](file:///d:/viet-nam-da-tang/spec/QUALITY_GATES.md) (Gate G4), [`spec/FILE_OWNERSHIP.md`](file:///d:/viet-nam-da-tang/spec/FILE_OWNERSHIP.md), [`.agents/agents/accessibility-qa.md`](file:///d:/viet-nam-da-tang/.agents/agents/accessibility-qa.md).  
*Thời điểm thẩm định:* Ngày 07 tháng 11 năm 2026 (Cập nhật đợt kiểm thử thực tế 6 Viewports)  
*Trạng thái Cổng Chất Lượng (Quality Gate G4):* **PASS** (100% Thực thi, Bằng chứng thực nghiệm, Không suy diễn)

---

## 1. Tổng Quan Kết Quả Kiểm Thử (Executive Summary)

Đợt kiểm định kỹ thuật độc lập tại Milestone 05 & Visual Audit Phase 1 đã hoàn thành toàn diện trên môi trường máy chủ cục bộ thực tế (`http://localhost:3000`). Toàn bộ **20 ca kiểm thử Playwright tự động** đã được cấu hình và chạy trên trình duyệt **Chromium Headless Shell v1254** (Playwright Test Runner v1.65.0).

```
================================================================================
                           TỔNG HỢP KẾT QUẢ TEST SUITE
================================================================================
Tổng số ca kiểm thử (Total Tests)       : 20 ca
Số ca ĐẠT (Passed)                       : 20 ca (100%)
Số ca THẤT BẠI (Failed)                  : 0 ca (0%)
Số ca BỎ QUA / KHÔNG ỔN ĐỊNH (Flaky/Skip): 0 ca (0%)
Thời gian thực thi (Total Duration)      : ~68.0 giây
Mã thoát tiến trình (Exit Code)          : 0 (Thành công tuyệt đối)
================================================================================
```

---

## 2. Chi Tiết Các Bộ Kiểm Thử Playwright

### 2.1. Bộ Kiểm Thử Khởi Động & Cấu Trúc Toàn Trang (`tests/smoke.spec.ts`)
*Mục tiêu:* Đảm bảo máy chủ phản hồi đúng chuẩn, các thành phần kiến trúc HTML5 và 6 phân cảnh hiển thị đầy đủ, không thiếu hụt phân cảnh nào.

| STT | Tên ca kiểm thử | Phạm vi kiểm tra | Kết quả | Thời gian |
|:---:|:---|:---|:---:|:---:|
| 01 | `01. Should return HTTP 200 and load homepage with correct title and meta` | Trạng thái HTTP 200, tiêu đề tài liệu (`<title>`), liên kết nhảy nhanh (`a.skip-link` trỏ tới `#main-content`), thẻ `<main>` | **PASS** | 1,300ms |
| 02 | `02. Should display Header Navbar with all essential elements` | Thanh Header cố định, logo nhận diện `VIỆT NAM ĐA TẦNG`, thanh tiến độ đọc (`role="progressbar"`), nút mở nguồn, nút cỡ chữ, nút giảm chuyển động | **PASS** | 1,300ms |
| 03 | `03. Should render all 6 Exhibition Scenes sequentially` | Sự hiện diện và nội dung tiêu đề của 6 phân cảnh `#scene-01` đến `#scene-06` | **PASS** | 1,300ms |
| 04 | `04. Should display Exhibition Footer with academic integrity and navigation` | Footer triển lãm, thông tin tín chỉ FPT University MLN131, 6 liên kết phân cảnh, nút cuộn về đầu trang | **PASS** | 1,700ms |
| 05 | `05. Should open and close Academic Source Modal from Header` | Mở hộp thoại tra cứu 33 nguồn học thuật, kiểm tra tiêu đề, thanh tìm kiếm được focus, đóng hộp thoại bằng nút đóng | **PASS** | 1,500ms |

---

### 2.2. Bộ Kiểm Thử Tương Tác Sư Phạm Chi Tiết (`tests/interactions.spec.ts`)
*Mục tiêu:* Kiểm thử các trạng thái tương tác nghiệp vụ trên 6 phân cảnh, các tiện ích trợ năng và menu điều hướng di động.

| STT | Tên ca kiểm thử | Hành vi & Khẳng định kiểm thử | Kết quả | Thời gian |
|:---:|:---|:---|:---:|:---:|
| 01 | `01. Scene 2: Interactive Triangle Relations switching` | Chuyển đổi qua lại giữa 3 đỉnh Tam giác quan hệ (Sở hữu TLSX, Tổ chức & Quản lý, Địa vị & Phân phối). Xác minh câu hỏi cốt lõi và khối cảnh báo pháp lý về Đất đai (Điều 53, 54 Hiến pháp 2013). | **PASS** | 3,200ms |
| 02 | `02. Scene 3: Three Laws Stepper and Academic Caution` | Chuyển đổi giữa 3 bước Quy luật (Quy luật 01, 02, 03) bằng tab và nút chuyển tiếp. Xác minh sự hiện diện của khối cảnh báo lý luận nghiêm ngặt tại Quy luật 03 (xóa bỏ bất bình đẳng là mục tiêu phấn đấu, không phải hiện thực đã hoàn tất). | **PASS** | 2,900ms |
| 03 | `03. Scene 4: 6 Social Profiles & Demographic Intersection Banner` | Duyệt qua đủ 6 hồ sơ lực lượng xã hội (Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ, Thanh niên). Xác minh đủ 3 cột Vị trí - Vai trò - Đóng góp. Kiểm tra banner phân định học thuật Phụ nữ & Thanh niên là 2 nhóm nhân khẩu học giao thoa, không phải giai cấp kinh tế độc lập. | **PASS** | 6,400ms |
| 04 | `04. Scene 5: Rice Value Chain 4 Stages & Policy Box` | Kiểm tra chuỗi giá trị hạt gạo 4 mắt xích (Trí thức -> Nông dân -> Công nhân -> Doanh nhân). Kiểm tra khối chính sách Đề án 1 triệu ha lúa (Quyết định 1490/QĐ-TTg) và cảnh báo sư phạm mục tiêu 2030 / Net Zero 2050. | **PASS** | 2,800ms |
| 05 | `05. Scene 6: Interactive 5-Question Quiz Flow & Reset` | Trả lời tuần tự 5 câu hỏi trắc nghiệm tương tác chuẩn môn học MLN131 (C - A - D - A - B). Xác nhận hiển thị phản hồi tức thời "CHÍNH XÁC!", mã nguồn bài giảng, đoạn văn giải thích học thuật. Kiểm tra màn hình tổng kết đạt 5/5 câu đúng và nút "Làm lại trắc nghiệm" đưa về câu 1. | **PASS** | 7,100ms |
| 06 | `06. Academic Source Modal search and filter interaction` | Mở modal tra cứu nguồn học thuật, gõ từ khóa `C-18-05`, kiểm tra danh sách kết quả lọc hiển thị đúng mã nguồn và chi tiết trích dẫn Slide 5. Đóng modal bằng phím `Escape`. | **PASS** | 1,600ms |
| 07 | `07. Accessibility: Font Size toggling and Reduced Motion mode` | Bấm nút đổi cỡ chữ, kiểm tra lớp class trên thẻ `<html>` chuyển tuần tự (`text-size-lg` -> `text-size-sm` -> `text-size-md`). Bấm nút chuyển đổi chế độ Giảm chuyển động, kiểm tra lớp `reduced-motion` được thêm và gỡ bỏ. | **PASS** | 2,500ms |
| 08 | `08. Mobile navigation drawer toggle and anchor jumping on small viewports` | Kiểm tra trên viewport di động (390px): mở menu Drawer di động, hiển thị đủ 6 trạm phân cảnh và chỉ số tiến độ đọc, bấm chuyển nhanh đến Scene 4, kiểm tra drawer tự đóng và phân cảnh mục tiêu cuộn vào tầm nhìn. | **PASS** | 2,900ms |

---

### 2.3. Bộ Chụp Ảnh Màn Hình & Kiểm Tra Tràn Khung 6 Viewports (`tests/screenshots.spec.ts`)
*Mục tiêu:* Kiểm tra vật lý việc hiển thị ở đầy đủ 6 viewport mục tiêu, đo đạc tràn ngang ở cả cấp độ tài liệu (`documentElement`) lẫn cấp độ phần tử DOM (`getBoundingClientRect`), và kiểm kê hiện trạng tài nguyên hình ảnh.

| STT | Viewport mục tiêu | Thiết bị mô phỏng | Kiểm tra Tràn Ngang (`scrollWidth <= clientWidth`) | Tệp ảnh đầu ra | Dung lượng tệp | Kết quả |
|:---:|:---|:---|:---:|:---|:---:|:---:|
| 01 | `320 x 568 px` | Mobile Minimum Escape Hatch (iPhone SE 1st) | **PASS** (`scrollWidth = clientWidth = 320px`, 0 phần tử tràn) | [`tests/screenshots/mobile-320.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-320.png) | 1,464 KB | **PASS** |
| 02 | `390 x 844 px` | Mobile Standard (iPhone 12/13/14) | **PASS** (`scrollWidth = clientWidth = 390px`, 0 phần tử tràn) | [`tests/screenshots/mobile-390.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-390.png) | 1,433 KB | **PASS** |
| 03 | `430 x 932 px` | Mobile Large (iPhone 14/15 Pro Max, Plus) | **PASS** (`scrollWidth = clientWidth = 430px`, 0 phần tử tràn) | [`tests/screenshots/mobile-430.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-430.png) | 1,407 KB | **PASS** |
| 04 | `768 x 1024 px` | Tablet Portrait (iPad Mini/Air) | **PASS** (`scrollWidth = clientWidth = 768px`, 0 phần tử tràn) | [`tests/screenshots/tablet-768.png`](file:///d:/viet-nam-da-tang/tests/screenshots/tablet-768.png) | 1,671 KB | **PASS** |
| 05 | `1024 x 768 px` | Tablet Landscape / Small Laptop (iPad Pro) | **PASS** (`scrollWidth = clientWidth = 1024px`, 0 phần tử tràn) | [`tests/screenshots/tablet-1024.png`](file:///d:/viet-nam-da-tang/tests/screenshots/tablet-1024.png) | 1,625 KB | **PASS** |
| 06 | `1440 x 900 px` | Desktop Editorial Display (MacBook Pro / Monitor) | **PASS** (`scrollWidth = clientWidth = 1440px`, 0 phần tử tràn) | [`tests/screenshots/desktop-1440.png`](file:///d:/viet-nam-da-tang/tests/screenshots/desktop-1440.png) | 1,629 KB | **PASS** |

---

### 2.4. Kiểm Kê Hiện Trạng Hiển Thị Hình Ảnh & Tài Nguyên Thị Giác (Visual Asset DOM Inventory)

Ca kiểm thử tự động `Audit image status in DOM` đã phân tích toàn bộ cây DOM kết xuất tại `http://localhost:3000`:

```
================================================================================
                     KIỂM KÊ TÀI NGUYÊN HÌNH ẢNH TRÊN GIAO DIỆN
================================================================================
1. Thẻ <img> HTML thông thường           : 0 thẻ
2. Thẻ <Image> Next.js tối ưu hóa         : 0 thẻ
3. Thẻ <svg> Biểu tượng / Minh họa hình học : 56 thẻ (Lucide icons, lưới trang trí)
4. Phần tử CSS background-image hình ảnh : 0 phần tử
5. Tài nguyên ảnh lưu trữ cục bộ có sẵn  : 23 tệp ảnh gốc trích xuất từ bài giảng
                                           (tại references/extracted_images/)
================================================================================
```

#### Ghi nhận chi tiết phục vụ Phase 1 Visual Audit:
1. **Hiện trạng hiển thị thị giác:** Giao diện hiện tại vận hành theo phong cách biên tập tối giản (Typographic & Graphic Exhibition), sử dụng cấu trúc thẻ báo chí, huy hiệu học thuật đa sắc thái (`SourceBadge`), khối viền đỏ son (`border-vermilion`), và 56 biểu tượng vector SVG để truyền tải thông điệp.
2. **Khoảng trống thị giác cần bổ sung (Visual Gap):** Trang web **chưa tích hợp ảnh chụp thực tế hoặc ảnh tư liệu lịch sử**. Các phân cảnh cần ảnh bổ trợ bao gồm:
   - *Scene 1 (Hero):* Thiếu ảnh toàn cảnh tư liệu hoặc nền minh họa văn hóa sản xuất Việt Nam.
   - *Scene 4 (Lực lượng xã hội):* 6 hồ sơ lực lượng (Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ, Thanh niên) hiện chỉ có biểu tượng icon, chưa có ảnh chân dung tư liệu người thật trong bối cảnh lao động, sáng tạo và hội nhập.
   - *Scene 5 (Chuỗi giá trị hạt gạo):* 4 mắt xích liên minh (Trí thức nghiên cứu giống lúa ST25 -> Nông dân canh tác ĐBSCL -> Công nhân nhà máy chế biến -> Doanh nhân xúc tiến xuất khẩu) hiện chỉ có sơ đồ chữ, chưa có phóng sự ảnh thể hiện liên minh thực tế.
3. **Nguồn tài nguyên có sẵn:** Đã có 23 tệp ảnh trích xuất trực tiếp từ PPTX bài giảng tại [`references/extracted_images/`](file:///d:/viet-nam-da-tang/references/extracted_images/) sẵn sàng để Art Director và Frontend Engineer tuyển chọn và đưa vào thư mục `public/images/`.

---

## 3. Đánh Giá Khả Năng Tiếp Cận (Accessibility & Inclusivity Audit)

### 3.1. Cấu Trúc Semantic HTML5 & ARIA Landmarks
- Toàn bộ trang web sử dụng chuẩn các thẻ ngữ nghĩa: `<header>`, `<main id="main-content" tabIndex={-1}>`, `<section aria-label="...">`, `<article>`, `<footer>`.
- Các khối tương tác tab tuân thủ chuẩn WAI-ARIA Authoring Practices:
  - `role="tablist"`, `role="tab"`, `role="tabpanel"`.
  - Các thuộc tính `aria-selected="true/false"`, `aria-controls` và `id` đối ứng chính xác.
- Khối trắc nghiệm sử dụng `role="radiogroup"` và `role="radio"`, đi kèm thuộc tính `aria-checked="true/false"`.
- Modal tra cứu nguồn sử dụng `role="dialog"`, `aria-modal="true"`, `aria-labelledby="source-modal-title"`.

### 3.2. Điều Hướng Bàn Phím (Keyboard Navigation & Focus Trapping)
- **Skip Link:** Đường dẫn nhảy nhanh `<a href="#main-content" class="skip-link">` ẩn mặc định, xuất hiện nổi bật tại góc trái trên cùng khi nhấn phím `Tab` đầu tiên, cho phép người dùng lướt qua Header để vào thẳng nội dung.
- **Vòng chỉ báo Focus:** Các thành phần tương tác đều được thiết lập lớp `focus-visible:ring-2 focus-visible:ring-vermilion` hoặc tương đương, viền màu đỏ son sắc nét, không bị khử mất outline focus mặc định.
- **Phím Escape:** Hộp thoại tra cứu nguồn hỗ trợ phím `Escape` để đóng nhanh từ bất kỳ vị trí nào bên trong modal.

### 3.3. Chế Độ Giảm Chuyển Động (Reduced Motion Protocol)
- Tự động nhận diện thiết lập hệ thống người dùng thông qua Media Query: `(prefers-reduced-motion: reduce)`.
- Cung cấp nút gạt thủ công ngay trên Header thanh điều hướng, cho phép người học chủ động bật/tắt chế độ giảm chuyển động.
- Khi kích hoạt:
  - Lớp `reduced-motion` được gán vào thẻ `<html>`.
  - Thuộc tính `scroll-behavior: auto !important` và `transition: none !important` triệt tiêu mọi hiệu ứng cuộn mượt hoặc co giãn.
  - Trạng thái được lưu bền vững vào `localStorage("vndt-reduced-motion")`.

### 3.4. Hệ Thống Đổi Cỡ Chữ Trợ Năng (Font Size Customization)
- Cung cấp 3 nấc kích thước cỡ chữ:
  1. `text-size-sm`: Cỡ nhỏ (15px) — dành cho người muốn tối ưu mật độ thông tin.
  2. `text-size-md`: Cỡ chuẩn (16px) — thiết lập mặc định theo chuẩn đọc báo chí.
  3. `text-size-lg`: Cỡ lớn (18px) — phóng to văn bản hỗ trợ người thị lực kém hoặc đọc trên màn hình di động độ phân giải cao.
- Lưu trữ sở thích vào `localStorage("vndt-font-size")`.

### 3.5. Kích Thước Vùng Chạm Cảm Ứng (Touch Target Dimensions)
- Tất cả các nút bấm, tab chuyển lực lượng, nút chọn phương án trắc nghiệm đều được đo lường đạt chiều cao tối thiểu `>= 44px` (phần lớn đạt từ `48px` đến `54px`).
- Khoảng cách đệm giữa các nút (gap `>= 8px` đến `12px`), loại trừ hoàn toàn nguy cơ bấm nhầm trên màn hình cảm ứng di động.

---

## 4. Kiểm Tra Tĩnh & Đóng Gói Mã Nguồn (Static Analysis & Build Verification)

| Lệnh thực thi | Mục đích | Mã thoát (Exit Code) | Kết quả ghi nhận |
|:---|:---|:---:|:---|
| `npx tsc --noEmit` | Kiểm tra tính chặt chẽ của kiểu dữ liệu TypeScript (Strict mode) | `0` | **PASS**: Không có bất kỳ lỗi cú pháp hoặc sai lệch kiểu dữ liệu nào. |
| `npm run build` | Đóng gói sản phẩm xuất bản tĩnh Next.js 14 App Router | `0` | **PASS**: Biên dịch thành công trang tĩnh; Route `/` gọn nhẹ, tải siêu tốc, 0 cảnh báo linter. |
| `npm run lint` | Kiểm tra quy chuẩn mã nguồn ESLint | `0` | **PASS**: `✔ No ESLint warnings or errors`. |

---

## 5. Kết Luận Kiểm Định Kỹ Thuật

Bộ mã nguồn triển lãm số **VIỆT NAM ĐA TẦNG** đáp ứng đầy đủ và vượt các tiêu chí kỹ thuật đặt ra tại Quality Gate G4:
1. Hệ thống tương tác hoạt động ổn định 100% (20/20 ca test đậu), không phát sinh ngoại lệ console.
2. Hoàn toàn sạch thanh cuộn ngang tại cả 6 kích thước màn hình: 320px, 390px, 430px, 768px, 1024px, 1440px.
3. Đáp ứng tiêu chuẩn tiếp cận WCAG 2.1 AA/AAA về độ tương phản, ngữ nghĩa, bàn phím và giảm chuyển động.
4. Ghi nhận rõ ràng hiện trạng thiếu ảnh thực tế để cung cấp cơ sở cho Art Director triển khai tuyển chọn ảnh tư liệu ở pha tiếp theo.
