# HƯỚNG DẪN BÀN GIAO & VẬN HÀNH CỤC BỘ (LOCAL RUN & HANDOFF GUIDE)
## Dự án: VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131
*Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam*

- **Chủ sở hữu tài liệu:** Release Engineer (`docs/FINAL_HANDOFF.md`)
- **Đối tượng bàn giao:** Người học, Giảng viên bộ môn MLN131, Nhà phát triển kế thừa và Hội đồng đánh giá
- **Phiên bản mã nguồn:** 1.0.0 (Production Release)
- **Tình trạng đóng gói:** Đã nghiệm thu toàn diện tại [`docs/RELEASE.md`](file:///d:/viet-nam-da-tang/docs/RELEASE.md) (Gates G0 - G5: PASS)

---

## 1. HƯỚNG DẪN KHỞI CHẠY CỤC BỘ NHANH (QUICK START GUIDE)

Dự án được xây dựng dưới dạng ứng dụng web độc lập, tự vận hành hoàn chỉnh trên máy tính cá nhân (localhost) mà **không cần kết nối bất kỳ cơ sở dữ liệu bên ngoài hay dịch vụ đám mây trả phí nào**.

### 1.1. Yêu cầu môi trường tối thiểu
- **Hệ điều hành:** Windows 10/11, macOS 12+ hoặc Linux (Ubuntu 20.04+).
- **Node.js:** Phiên bản `v18.17.0` trở lên (Đã thẩm định hoàn hảo trên `Node v22.21.1` và `v20.14.0`).
- **npm:** Phiên bản `v9.0.0` trở lên (Đã thẩm định trên `npm 10.9.4`).
- **Trình duyệt web:** Bất kỳ trình duyệt hiện đại nào (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

---

### 1.2. Các bước cài đặt và khởi chạy máy chủ

Mở ứng dụng dòng lệnh (PowerShell, Command Prompt, macOS Terminal hoặc Linux Bash) tại thư mục gốc của dự án:

```bash
# 1. Di chuyển vào thư mục dự án (nếu chưa đứng tại thư mục)
cd d:\viet-nam-da-tang

# 2. Cài đặt các thư viện phụ thuộc (Deterministic Installation)
npm install
```

#### Cách A: Chạy chế độ Phát triển (Development Mode)
Thích hợp cho việc xem nhanh mã nguồn và chỉnh sửa trực tiếp với cơ chế Fast Refresh:
```bash
npm run dev
```
- Mở trình duyệt web và truy cập: **`http://localhost:3000`**
- *Lưu ý:* Nếu cổng `3000` đang bận, bạn có thể chỉ định cổng khác:
  ```bash
  npx next dev -p 3001
  ```

#### Cách B: Chạy bản Đóng gói Tối ưu (Production Mode - Khuyến nghị)
Thích hợp cho việc trình diễn bài học, chấm điểm triển lãm với tốc độ tải trang cao nhất:
```bash
# Biên dịch gói sản phẩm tối ưu
npm run build

# Khởi chạy máy chủ sản xuất
npm start
```
- Mở trình duyệt web và truy cập: **`http://localhost:3000`**

---

## 2. HƯỚNG DẪN CHẠY BỘ KIỂM THỬ TỰ ĐỘNG PLAYWRIGHT

Dự án đã thiết lập sẵn 16 ca kiểm thử tự động toàn diện bao gồm: Kiểm tra trạng thái máy chủ (Smoke), Kiểm tra toàn bộ tính năng tương tác (Interactions) và Chụp ảnh màn hình thực tế (Screenshots).

### 2.1. Chạy kiểm thử tự động trong nền (Terminal)
*Điều kiện:* Đảm bảo máy chủ cục bộ đang chạy ở cổng 3000 (`npm run dev` hoặc `npm start`). Mở một cửa sổ terminal mới và gõ:
```bash
npx playwright test
```
- Kết quả mong đợi: `22 passed` (100% thành công trong ~1.3 phút).

### 2.2. Chạy kiểm thử với giao diện trực quan (Interactive UI Mode)
Cho phép người dùng quan sát từng bước click chuột, cuộn trang và xem visual trace trực tiếp:
```bash
npx playwright test --ui
```

### 2.3. Xem báo cáo chi tiết dạng trang web (HTML Test Report)
```bash
npx playwright show-report
```

---

## 3. HƯỚNG DẪN XEM BẰNG CHỨNG THẨM ĐỊNH THỊ GIÁC (AUDITED SCREENSHOTS)

Để kiểm chứng tính chân thực của giao diện phản hồi (Responsive Design) và 2 chế độ Sáng/Tối trên các thiết bị thực tế, các tệp ảnh chụp màn hình độ phân giải gốc được lưu trữ tại thư mục:

📁 **`tests/screenshots/`**

| Tên tệp ảnh | Kích thước Viewport | Mô phỏng thiết bị thực tế | Chế độ | Đặc điểm nổi bật đã kiểm chứng |
| :--- | :---: | :--- | :---: | :--- |
| [`mobile-320.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-320.png) | `320 x 568 px` | iPhone SE (Màn hình siêu nhỏ / Escape Hatch) | Sáng | Chiều rộng trang đo đạc đúng 320px; hoàn toàn sạch thanh cuộn ngang; khoảng đệm lề an toàn 16px. |
| [`mobile-390.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-390.png) | `390 x 844 px` | iPhone 12 / 13 / 14 (Mobile Tiêu chuẩn) | Sáng | Trải nghiệm cuộn dọc tự nhiên, ngón tay chạm nút bấm `>= 48px`, font chữ rõ ràng, không đứt dấu tiếng Việt. |
| [`mobile-390-dark.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-390-dark.png) | `390 x 844 px` | iPhone 12 / 13 / 14 (Phòng trưng bày Tối) | Tối | Nền than đen sâu `#0E1012`, chữ phấn trắng `#F7F6F2`, nút bấm màu vàng chanh Citron phát sáng sắc nét. |
| [`mobile-430.png`](file:///d:/viet-nam-da-tang/tests/screenshots/mobile-430.png) | `430 x 932 px` | iPhone Pro Max / Plus (Màn hình lớn) | Sáng | Tỷ lệ co giãn fluid linh hoạt, các thẻ hồ sơ nhân vật và chuỗi giá trị gạo tự căn giữa tuyệt đối. |
| [`tablet-768.png`](file:///d:/viet-nam-da-tang/tests/screenshots/tablet-768.png) | `768 x 1024 px` | iPad Mini / iPad Air (Máy tính bảng dọc) | Sáng | Bố cục chuyển dịch 2 cột hài hòa, các khối luận điểm và số liệu cân đối, vùng thở thoáng đạt. |
| [`tablet-1024.png`](file:///d:/viet-nam-da-tang/tests/screenshots/tablet-1024.png) | `1024 x 768 px` | iPad Pro / Laptop nhỏ (Tablet ngang) | Sáng | Chuyển dịch lưới mượt mà, menu điều hướng 6 phân cảnh thu gọn hiển thị số hiệu trực quan. |
| [`desktop-1440.png`](file:///d:/viet-nam-da-tang/tests/screenshots/desktop-1440.png) | `1440 x 900 px` | Desktop Màn hình rộng (Báo chí & Triển lãm) | Sáng | Dàn trang phong cách tạp chí phóng sự đương đại (*Editorial Documentary*), loại trừ lối mòn thẻ SaaS. |
| [`desktop-1440-dark.png`](file:///d:/viet-nam-da-tang/tests/screenshots/desktop-1440-dark.png) | `1440 x 900 px` | Desktop Màn hình rộng (Phòng trưng bày Tối) | Tối | Trải nghiệm triển lãm bảo tàng đêm, tương phản AAA (17.2:1), ảnh tư liệu nổi bật trên nền than sâu. |

> Xem phân tích chi tiết từng góc nhìn thị giác tại: [`docs/VISUAL_QA.md`](file:///d:/viet-nam-da-tang/docs/VISUAL_QA.md).

---

## 4. BẢNG TRA CỨU TỆP TIN & KIẾN TRÚC DỰ ÁN (DIRECTORY LOOKUP TABLE)

```
d:\viet-nam-da-tang\
├── app/                        # Kiến trúc Next.js 14 App Router
│   ├── globals.css             # Định nghĩa Design Tokens, CSS Variables & Fluid Typography
│   ├── layout.tsx              # Root Layout, Thiết lập thẻ Meta, Ngữ nghĩa HTML5
│   └── page.tsx                # Trang chủ tích hợp 6 Phân cảnh triển lãm
│
├── components/                 # 9 Thành phần giao diện biên tập chuyên dụng
│   ├── Navbar.tsx              # Header cố định, Logo, Thanh tiến độ đọc, Cỡ chữ & Giảm chuyển động
│   ├── Footer.tsx              # Chân trang triển lãm, Tín chỉ môn học, Liên kết phân cảnh
│   ├── SourceModal.tsx         # Hộp thoại tra cứu nhanh 45 nguồn học thuật với tìm kiếm tức thời
│   ├── TriadRelations.tsx      # Tương tác Tam giác 3 quan hệ cơ bản (Phân cảnh 02)
│   ├── ThreeLawsStepper.tsx    # Bộ điều hướng 3 quy luật biến đổi khách quan (Phân cảnh 03)
│   ├── SocialProfiles.tsx      # Lưới 6 hồ sơ lực lượng xã hội & Banner giao thoa (Phân cảnh 04)
│   ├── RiceValueChain.tsx      # Sơ đồ chuỗi giá trị lúa gạo 4 mắt xích & Đề án 1490 (Phân cảnh 05)
│   ├── QuizEngine.tsx          # Cỗ máy trắc nghiệm 5 câu hỏi có phản hồi sư phạm (Phân cảnh 06)
│   └── SourceBadge.tsx         # Huy hiệu trích dẫn học thuật tương tác mở Modal
│
├── content/                    # Ngữ liệu biên tập đã kiểm định học thuật
│   ├── STORY_FINAL.md          # Toàn văn kịch bản 6 phân cảnh triển lãm (54.8 KB)
│   ├── QUIZ_FINAL.json         # Dữ liệu 5 câu hỏi trắc nghiệm, đáp án và giải thích chi tiết
│   ├── SOURCE_MAP.json         # Danh mục liên kết 33 nguồn được hiển thị trực tiếp
│   └── COPY_SEED.md            # Bản thảo sơ khởi đối chiếu
│
├── lib/                        # Mã logic bổ trợ & Kho từ điển
│   ├── sources.ts              # Cơ sở dữ liệu nguồn học thuật có kiểu dữ liệu TypeScript
│   ├── data.ts                 # Dữ liệu kịch bản, hồ sơ lực lượng và chuỗi giá trị
│   └── utils.ts                # Các hàm tiện ích định dạng và tính toán
│
├── docs/                       # Hệ thống hồ sơ kiểm định và tiêu chuẩn (11 tài liệu)
│   ├── RELEASE.md              # Báo cáo đóng gói phát hành chi tiết (Quality Gate G5)
│   ├── FINAL_HANDOFF.md        # Hướng dẫn bàn giao & vận hành cục bộ (Tài liệu này)
│   ├── ACADEMIC_AUDIT.md       # Báo cáo kiểm định học thuật MLN131 (258 dòng phân tích đối soát)
│   ├── SOURCE_LEDGER.md        # Sổ cái 45 mã nguồn học thuật gốc
│   ├── ART_DIRECTION.md        # Hướng dẫn chỉ đạo nghệ thuật (Chọn Route A, loại trừ thẻ SaaS)
│   ├── DESIGN_TOKENS.md        # Bảng quy chuẩn mã màu WCAG AAA và tỷ lệ co giãn font
│   ├── VISUAL_REVIEW.md        # Bộ tiêu chí thẩm định mỹ thuật
│   ├── TECH_QA.md              # Báo cáo kiểm định kỹ thuật & 16 test case
│   ├── VISUAL_QA.md            # Báo cáo thẩm định thị giác trên 4 tệp ảnh thực tế
│   ├── ASSET_LEDGER.md         # Sổ kiểm kê quyền tài sản truyền thông
│   └── DECISION_LOG.md         # Nhật ký quyết định kiến trúc & biên tập
│
├── references/course/          # 3 slide bài giảng gốc của Giảng viên (Authoritative inputs)
│   ├── MLN131_Tiet_18.pptx     # Bài giảng Tiết 18 (15 slides)
│   ├── MLN131_Tiet_19.pptx     # Bài giảng Tiết 19 (12 slides)
│   └── MLN131_Tiet_20.pptx     # Bài giảng Tiết 20 (19 slides)
│
├── spec/                       # Đặc tả yêu cầu dự án của Hội đồng & Antigravity
│   ├── QUALITY_GATES.md        # Định nghĩa 6 cổng chất lượng G0 - G5
│   ├── FILE_OWNERSHIP.md       # Phân định quyền sở hữu tệp giữa các sub-agents
│   ├── TASK_BOARD.md           # Bảng tiến độ 8 mốc công việc (Milestones 00 - 07)
│   ├── CONTENT_REQUIREMENTS.md # Yêu cầu cốt lõi về nội dung lý luận
│   ├── DESIGN_DIRECTION.md     # Định hướng thiết kế triển lãm
│   └── PROJECT_BRIEF.md        # Đề bài tổng quan dự án
│
├── tests/                      # Bộ mã kiểm thử tự động Playwright
│   ├── smoke.spec.ts           # 5 ca kiểm thử khói và tính toàn vẹn cấu trúc
│   ├── interactions.spec.ts    # 7 ca kiểm thử tính năng tương tác nghiệp vụ
│   ├── screenshots.spec.ts     # 4 ca kiểm thử tràn ngang và chụp ảnh màn hình
│   └── screenshots/            # 4 tệp ảnh màn hình thực tế (mobile-320, 390, tablet-768, desktop-1440)
│
├── package.json                # Cấu hình dự án, lệnh scripts và gói phụ thuộc
├── package-lock.json           # Khóa phiên bản gói phụ thuộc chính xác
├── tsconfig.json               # Cấu hình TypeScript Strict Mode
├── tailwind.config.ts          # Thiết lập bảng màu và phông chữ Design Tokens
├── postcss.config.js           # Cấu hình tiền xử lý CSS Tailwind/Autoprefixer
└── next.config.mjs             # Thiết lập trình biên dịch Next.js 14
```

---

## 5. CÁC TÍNH NĂNG TRẢI NGHIỆM ĐẶC QUYỀN TRÊN GIAO DIỆN

Khi duyệt trang web trên trình duyệt, người dùng có thể tương tác với các tính năng chuyên sâu:

1. **Thanh tiến độ đọc trực quan (Reading Progress Bar):**
   - Nằm ngay dưới thanh điều hướng, tự động tính toán tỷ lệ cuộn trang từ 0% đến 100% kèm nhãn ARIA `role="progressbar"`.
2. **Hộp thoại tra cứu nguồn học thuật (Source Modal):**
   - Nhấp vào nút "Mã nguồn học thuật" trên Header hoặc bấm vào bất kỳ huy hiệu nguồn nào (`[BAI_GIANG]`, `[VAN_KIEN]`, `[DU_LIEU]`, `[MINH_HOA]`).
   - Cung cấp ô tìm kiếm tức thời theo mã nguồn (ví dụ gõ: `C-18-05` hoặc `1490/QĐ-TTg`).
   - Hỗ trợ đóng nhanh bằng phím `Escape` hoặc nút đóng.
3. **Bộ chuyển đổi kích thước chữ trợ năng (A11y Font Resizer):**
   - Nhấp nút "Cỡ chữ" trên thanh Header để chuyển đổi tuần tự:
     - `A-` (Nhỏ - 15px): Phù hợp người thích mật độ thông tin dày.
     - `A` (Vừa - 16px): Mặc định chuẩn biên tập.
     - `A+` (Lớn - 18px): Hỗ trợ mắt kém hoặc đọc trên màn hình di động độ phân giải cao.
   - Trạng thái được ghi nhớ tự động qua các phiên đọc (`localStorage`).
4. **Chế độ giảm chuyển động chủ động (Reduced Motion Switch):**
   - Nhấp nút "Giảm chuyển động" trên thanh Header để tắt hoàn toàn các hiệu ứng chuyển động và cuộn mượt, ngăn ngừa hiện tượng hoa mắt.
5. **Cỗ máy trắc nghiệm tương tác 5 câu hỏi (Quiz Engine):**
   - Trả lời tuần tự 5 câu hỏi then chốt của môn học MLN131.
   - Nhận phản hồi giải thích khoa học lập tức sau mỗi câu trả lời kèm trích dẫn bài giảng.
   - Màn hình tổng kết hiển thị điểm số và nút "Làm lại trắc nghiệm" đưa về câu đầu tiên để ôn tập.

---

## 6. HƯỚNG DẪN MỞ RỘNG & TÙY BIẾN CHO NHÀ PHÁT TRIỂN (DEVELOPER EXTENSION)

### 6.1. Thêm câu hỏi trắc nghiệm mới
Để bổ sung câu hỏi vào phân cảnh 06, mở tệp [`content/QUIZ_FINAL.json`](file:///d:/viet-nam-da-tang/content/QUIZ_FINAL.json) và thêm đối tượng câu hỏi theo cấu trúc:
```json
{
  "id": 6,
  "question": "Nội dung câu hỏi mới...",
  "options": [
    { "key": "A", "text": "Phương án A..." },
    { "key": "B", "text": "Phương án B..." },
    { "key": "C", "text": "Phương án C..." },
    { "key": "D", "text": "Phương án D..." }
  ],
  "correctAnswer": "A",
  "explanation": "Giải thích chi tiết căn cứ theo bài giảng...",
  "sourceRef": "C-19-04"
}
```

### 6.2. Thêm nguồn trích dẫn học thuật mới
Mở tệp [`lib/sources.ts`](file:///d:/viet-nam-da-tang/lib/sources.ts) và thêm mã nguồn vào mảng `ACADEMIC_SOURCES`:
```typescript
{
  id: "C-NEW-01",
  category: "VAN_KIEN",
  citation: "Tên văn kiện / Tài liệu trích dẫn...",
  details: "Chi tiết điều khoản, số trang hoặc bối cảnh trích dẫn.",
  typeLabel: "Văn kiện Đảng"
}
```

### 6.3. Khởi tạo cấu hình ESLint độc lập (cho CI/CD)
Nếu nhóm phát triển muốn tích hợp thêm khâu kiểm tra tự động mã nguồn vào pipeline GitHub Actions, hãy tạo một tệp `.eslintrc.json` tại thư mục gốc với nội dung:
```json
{
  "extends": "next/core-web-vitals"
}
```
Sau đó lệnh `npm run lint` sẽ chạy hoàn toàn tự động ở chế độ không tương tác (non-interactive).

---

## 7. THÔNG TIN BÀN GIAO & LIÊN HỆ BẢO TRÌ

- **Dự án:** VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131
- **Đơn vị bảo trợ học thuật:** Đại học FPT (FPT University)
- **Tình trạng nghiệm thu:** Hoàn thành 100% yêu cầu đặc tả (Spec), toàn bộ 16 kiểm thử tự động ĐẠT, toàn bộ 4 ảnh chụp màn hình thực tế ĐẠT.
- **Sẵn sàng:** Phục vụ nghiên cứu, giảng dạy, học tập và triển lãm chuyên đề trực quan.