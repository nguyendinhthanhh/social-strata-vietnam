# Hệ Thống Biến Số Thiết Kế (Design Tokens)
## Dự án: VIỆT NAM ĐA TẦNG — Triển lãm số chuyên đề MLN131

*Chủ sở hữu tài liệu:* Art Director (`docs/DESIGN_TOKENS.md`)  
*Căn cứ kỹ thuật:* [`spec/DESIGN_DIRECTION.md`](file:///d:/viet-nam-da-tang/spec/DESIGN_DIRECTION.md), [`.agents/rules/visual-editorial.md`](file:///d:/viet-nam-da-tang/.agents/rules/visual-editorial.md), WCAG 2.1 Level AA/AAA.  
*Mục đích:* Cung cấp định nghĩa thông số chính xác (màu sắc, tương phản, typography clamp, khoảng cách, chuyển động) cho `frontend-engineer` triển khai CSS / Tailwind CSS.

---

## 1. Bảng Mã Màu Toàn Diện & Kiểm Định Tương Phản WCAG 2.1

Hệ màu của VIỆT NAM ĐA TẦNG được xây dựng theo cảm quan tài liệu phóng sự đương đại, ưu tiên sự tự nhiên của trang giấy in cao cấp (*Chalk* & *Warm Stone*), mực than chì (*Carbon*) và màu nhấn biên tập (*Vermilion*, *Dark Red*, *Citron*).

### 1.1. Bảng giá trị màu (Color Definitions)

| Token Name | Hex | RGB | HSL | Vai trò chủ đạo trong giao diện |
|---|---|---|---|---|
| `--color-carbon` | `#121416` | `rgb(18, 20, 22)` | `hsl(210, 10%, 8%)` | Màu chữ chính trên nền sáng, nền chính của các phân đoạn tối (Hero/Dark spreads) |
| `--color-charcoal-deep`| `#1C1F22` | `rgb(28, 31, 34)` | `hsl(210, 10%, 12%)`| Nền phụ cho khối tối, bề mặt thẻ hồ sơ trên nền Carbon |
| `--color-chalk` | `#F7F6F2` | `rgb(247, 246, 242)`| `hsl(48, 24%, 96%)` | Màu nền giấy in chủ đạo của toàn bộ trang web (Light background) |
| `--color-stone-warm` | `#E8E6DF` | `rgb(232, 230, 223)`| `hsl(47, 16%, 89%)` | Màu nền phụ, khối thông tin bổ trợ, nền thẻ trắc nghiệm |
| `--color-border-subtle`| `#D5D2C7` | `rgb(213, 210, 199)`| `hsl(47, 14%, 81%)` | Đường viền cấu trúc mảnh (1px), đường phân cách chương hồi |
| `--color-vermilion` | `#C8372D` | `rgb(200, 55, 45)` | `hsl(4, 63%, 48%)` | Màu nhấn biên tập: Tiêu đề lớn, số thứ tự, đường dẫn liên kết, viền focus |
| `--color-dark-red` | `#A62E2D` | `rgb(166, 46, 45)` | `hsl(0, 57%, 41%)` | Màu văn bản liên kết (anchor links), văn bản cảnh báo/nhấn mạnh trên nền sáng |
| `--color-citron` | `#C8D668` | `rgb(200, 214, 104)`| `hsl(68, 57%, 62%)`| Điểm sáng kỹ thuật: Huy hiệu tiến trình, điểm nhấn sơ đồ trên nền tối Carbon |
| `--color-text-muted` | `#5E656B` | `rgb(94, 101, 107)` | `hsl(208, 6%, 39%)`| Văn bản phụ, trích dẫn nguồn, ghi chú slide bài giảng trên nền Chalk |
| `--color-text-light-muted`| `#A2A8AE`| `rgb(162, 168, 174)`| `hsl(210, 7%, 66%)`| Văn bản phụ, chú thích ảnh tư liệu trên nền tối Carbon |
| `--color-paper-pure` | `#FFFFFF` | `rgb(255, 255, 255)`| `hsl(0, 0%, 100%)` | Bề mặt hộp nổi (modal/flyout), điểm sáng cực đại |

---

### 1.2. Ma trận kiểm định độ tương phản WCAG 2.1 (Contrast Matrix)

> **Ghi chú chuẩn WCAG 2.1:**
> - **WCAG AAA Văn bản thông thường:** Tỷ lệ tương phản tối thiểu **7.0:1**
> - **WCAG AA Văn bản thông thường (< 18pt / 24px thường hoặc < 14pt / 18.66px đậm):** Tối thiểu **4.5:1**
> - **WCAG AA Văn bản lớn (>= 18pt / 24px thường hoặc >= 14pt / 18.66px đậm) / Đồ họa tương tác:** Tối thiểu **3.0:1**

| Cặp màu (Text / Background) | Tỷ lệ đo lường | Đánh giá WCAG 2.1 | Hướng dẫn sử dụng chuẩn xác |
|---|---|---|---|
| **Carbon (`#121416`) trên Chalk (`#F7F6F2`)** | **17.07:1** | **PASS AAA** (Văn bản thường & lớn) | **Cặp màu đọc chính:** Sử dụng cho toàn bộ văn bản nội dung, bài luận, đoạn văn mô tả trên nền sáng. Đạt độ dễ đọc cao nhất. |
| **Carbon (`#121416`) trên Warm Stone (`#E8E6DF`)**| **14.78:1** | **PASS AAA** (Văn bản thường & lớn) | Sử dụng cho các khối thông tin phụ, hộp trích dẫn lý luận `[BAI_GIANG]`, phương án trắc nghiệm. |
| **Chalk (`#F7F6F2`) trên Carbon (`#121416`)** | **17.07:1** | **PASS AAA** (Văn bản thường & lớn) | **Cặp màu đọc nền tối:** Sử dụng cho tiêu đề và nội dung trên Hero và phân đoạn tối. |
| **Dark Red (`#A62E2D`) trên Chalk (`#F7F6F2`)** | **6.37:1** | **PASS AA** (Thường) / **AAA** (Lớn) | **Văn bản liên kết & Kicker:** Dùng an toàn cho chữ thường (body links), nhãn phân loại học thuật trên nền Chalk. |
| **Dark Red (`#A62E2D`) trên Warm Stone (`#E8E6DF`)**| **5.51:1**| **PASS AA** (Thường) / **AAA** (Lớn) | Dùng cho nhãn trạng thái và thông báo sư phạm bên trong thẻ phụ. |
| **Vermilion (`#C8372D`) trên Chalk (`#F7F6F2`)** | **4.81:1** | **PASS AA** (Thường & Lớn) | Dùng cho tiêu đề lớn, số thứ tự chương `01-06`, nút hành động (Button) và viền tiêu điểm `:focus-visible`. |
| **Vermilion (`#C8372D`) trên Carbon (`#121416`)** | **3.55:1** | **PASS UI / Large Text (>= 3.0:1)** | **KHÔNG DÙNG CHO CHỮ THƯỜNG NHỎ.** Chỉ dùng cho số chỉ mục lớn (>= 24px), viền thẻ hoặc biểu tượng đồ họa. |
| **Citron (`#C8D668`) trên Carbon (`#121416`)** | **11.67:1**| **PASS AAA** (Văn bản thường & lớn) | **Điểm nhấn trên nền tối:** Nhãn dữ liệu, huy hiệu, mắt xích liên minh nổi bật trên Hero hoặc Dark Spread. |
| **Citron (`#C8D668`) trên Charcoal Deep (`#1C1F22`)**| **10.46:1**| **PASS AAA** (Văn bản thường & lớn) | Dùng cho các nút trạng thái chọn lựa trong môi trường tối. |
| **Muted Text (`#5E656B`) trên Chalk (`#F7F6F2`)** | **5.47:1** | **PASS AA** (Văn bản thường & lớn) | Dùng cho thông tin bản quyền ảnh, chú dẫn nguồn slide bài giảng, ghi chú phụ trợ. |
| **Muted Text (`#5E656B`) trên Warm Stone (`#E8E6DF`)**| **4.74:1**| **PASS AA** (Văn bản thường & lớn) | Dùng cho nhãn metadata phụ trong khối thông tin thứ cấp. |
| **Light Muted (`#A2A8AE`) trên Carbon (`#121416`)**| **7.69:1** | **PASS AAA** (Văn bản thường & lớn) | Dùng cho văn bản chú dẫn nguồn ảnh và tài liệu học tập trong các khối tối. |
| **Paper Pure (`#FFFFFF`) trên Carbon (`#121416`)** | **18.46:1**| **PASS AAA** (Văn bản thường & lớn) | Dùng cho tiêu đề nổi bật tối đa trên nền tối. |
| **Citron (`#C8D668`) trên Chalk (`#F7F6F2`)** | **1.46:1** | **FAIL NGHIÊM NGẶT (CẤM SỬ DỤNG)** | **TUYỆT ĐỐI CẤM:** Không bao giờ đặt chữ Citron trên nền Chalk hoặc Warm Stone vì gây mờ mắt và vi phạm nặng chuẩn WCAG. |

---

## 2. Thang Typography Thích Ứng (Fluid Typography Scale)

Typography của VIỆT NAM ĐA TẦNG kết hợp giữa font có chân biểu cảm (*Playfair Display* / *Fraunces*) mang hơi thở báo chí hàn lâm và font không chân kỹ thuật (*Be Vietnam Pro*) tối ưu cho tiếng Việt hiện đại.

### 2.1. Font Stacks và Kiểm định Ký tự Tiếng Việt (Vietnamese Glyph Audit)

```css
/* Font Stacks định nghĩa trong CSS Variables */
--font-display: "Playfair Display", "Fraunces", "Georgia", "Times New Roman", serif;
--font-body: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, Monaco, Consolas, monospace;
```

#### Bảng Kiểm Định Ký Tự Tiếng Việt Có Dấu Phức Tạp:
Hệ thống hiển thị đã được kiểm định đầy đủ với bộ ký tự tiếng Việt đa thanh điệu:
- **Ký tự nguyên âm đặc thù:** `ă, â, ê, ô, ơ, ư, đ` và chữ hoa `Ă, Â, Ê, Ô, Ơ, Ư, Đ`.
- **Dấu thanh ghép phức hợp:**
  - Dấu ngã & hỏi trên chữ ơ/ư: `ỡ, ở, ữ, ử`, chữ hoa `Ỡ, Ở, Ữ, Sử`.
  - Dấu mũ và á kèm thanh điệu: `ắ, ằ, ẳ, ẵ, ặ`, `ấ, ầ, ổ, ỗ, ộ`, chữ hoa `Ắ, Ằ, Ẳ, Ẵ, Ặ`, `Ấ, Ầ, Ổ, Ỗ, Ộ`.
  - Phụ âm đ: `đ` và `Đ` (đặc biệt trong từ `VIỆT NAM`, `ĐA TẦNG`, `ĐẢNG CỘNG SẢN`).
- **Quy tắc Line-Height để chống cắt dấu (No Diacritic Clipping):**
  - **Display / Headings lớn:** `line-height: 1.18` đến `1.25` (tuyệt đối không đặt `< 1.15` để tránh việc dấu hỏi, ngã ở chữ hoa chạm vào dòng trên hoặc bị cắt cụt bởi `overflow: hidden`).
  - **Body Text:** `line-height: 1.6` đến `1.65` nhằm tạo khoảng thở thoáng đãng cho mắt khi đọc các đoạn văn bản lý luận dài.

---

### 2.2. Thang kích thước chữ co giãn linh hoạt (`clamp()`)

Được tính toán chính xác trên dải màn hình từ **320px** (Mobile nhỏ) đến **1440px** (Desktop chuẩn):

```css
:root {
  /* 1. Display Hero (Tựa đề chính Scene 1): 40px tại 320px -> 76px tại 1440px */
  --text-display-hero: clamp(2.500rem, 1.857rem + 3.214vw, 4.750rem);
  --leading-display-hero: 1.15;

  /* 2. Display 1 / H1 (Tiêu đề phân đoạn lớn): 32px tại 320px -> 54px tại 1440px */
  --text-display-1: clamp(2.000rem, 1.607rem + 1.964vw, 3.375rem);
  --leading-display-1: 1.20;

  /* 3. Display 2 / H2 (Tiêu đề từng Scene): 24px tại 320px -> 38px tại 1440px */
  --text-display-2: clamp(1.500rem, 1.250rem + 1.250vw, 2.375rem);
  --leading-display-2: 1.25;

  /* 4. Heading 3 / H3 (Tên lực lượng xã hội, tiểu mục): 20px tại 320px -> 28px tại 1440px */
  --text-heading-3: clamp(1.250rem, 1.107rem + 0.714vw, 1.750rem);
  --leading-heading-3: 1.30;

  /* 5. Lead / H4 (Lời đề từ, đoạn dẫn nhập trọng tâm): 18px tại 320px -> 22px tại 1440px */
  --text-lead: clamp(1.125rem, 1.054rem + 0.357vw, 1.375rem);
  --leading-lead: 1.55;

  /* 6. Body Text (Nội dung phân tích, văn bản đọc): 16px tại 320px -> 18px tại 1440px */
  --text-body: clamp(1.000rem, 0.964rem + 0.179vw, 1.125rem);
  --leading-body: 1.65;

  /* 7. Small / Caption (Chú thích ảnh, metadata, nhãn lực lượng): 13px tại 320px -> 14px tại 1440px */
  --text-caption: clamp(0.812rem, 0.795rem + 0.089vw, 0.875rem);
  --leading-caption: 1.45;

  /* 8. Kicker / Micro Tag (Mã học phần, nhãn phân loại [BAI_GIANG]): 11px tại 320px -> 12px tại 1440px */
  --text-kicker: clamp(0.688rem, 0.670rem + 0.089vw, 0.750rem);
  --leading-kicker: 1.35;
  --tracking-kicker: 0.08em; /* Giãn chữ biên tập */
}
```

---

## 3. Hệ Thống Khoảng Cách, Bo Góc, Đường Viền & Đổ Bóng

Tuân thủ nghiêm ngặt nguyên tắc **Biên tập Tối giản (Editorial Restraint)**, loại bỏ triệt để các góc bo tròn quá mức hay hiệu ứng bóng mờ thiếu chiều sâu.

### 3.1. Thang khoảng cách nhịp điệu (Spacing Scale - Base Grid 4px)

```css
:root {
  --space-1:  0.25rem; /*  4px: Viền trong nhãn cực nhỏ */
  --space-2:  0.50rem; /*  8px: Khoảng cách giữa các nhãn, padding nhỏ */
  --space-3:  0.75rem; /* 12px: Đệm trong thẻ trắc nghiệm mobile */
  --space-4:  1.00rem; /* 16px: Padding cơ sở trên Mobile, khoảng cách giữa các đoạn */
  --space-5:  1.25rem; /* 20px: Padding cạnh viền màn hình chuẩn Mobile 390px */
  --space-6:  1.50rem; /* 24px: Khoảng cách giữa các khối phụ */
  --space-8:  2.00rem; /* 32px: Đệm phân đoạn nhỏ, khoảng cách nhóm */
  --space-10: 2.50rem; /* 40px: Đệm giữa tiêu đề và văn bản */
  --space-12: 3.00rem; /* 48px: Chiều cao chuẩn vùng chạm cảm ứng lớn */
  --space-16: 4.00rem; /* 64px: Đệm phân cách giữa các Scene trên Mobile */
  --space-24: 6.00rem; /* 96px: Đệm phân cách giữa các Scene trên Desktop */
  --space-32: 8.00rem; /* 128px: Khoảng thở cực đại trên Desktop 1440px */
}
```

### 3.2. Quy chuẩn Bo Góc (Border Radius) & Đổ Bóng (Elevation)

* **Bo góc (Border Radius):**
  - `--radius-none`: `0px` (Khung ảnh tư liệu, viền phân cách, bảng dữ liệu - giữ nét sắc sảo).
  - `--radius-sm`: `2px` (Hộp nhập liệu, nút bấm biên tập, thẻ hồ sơ phụ).
  - `--radius-md`: `4px` (Thẻ phương án trắc nghiệm, hộp thông điệp sư phạm).
  - `--radius-pill`: `9999px` (Chỉ dùng cho huy hiệu tag nhỏ gọn, thanh tiến trình cuộn).
  - *Cấm tuyệt đối:* Không sử dụng `radius` từ `16px` trở lên cho các thẻ nội dung để tránh biến trang web thành giao diện ứng dụng đồ chơi.

* **Đổ bóng & Đường viền (Shadow & Borders):**
  - Chiều sâu được tạo ra chủ yếu bởi **đường viền mảnh (Hairline borders)** và độ tương phản màu sắc trang giấy, không lạm dụng bóng mờ.
  - `--border-hairline`: `1px solid var(--color-border-subtle)` (`#D5D2C7`).
  - `--border-active`: `1px solid var(--color-vermilion)` (`#C8372D`).
  - `--shadow-paper-subtle`: `0 1px 3px rgba(18, 20, 22, 0.05), 0 1px 2px rgba(18, 20, 22, 0.03)` (Độ nổi của trang sách).
  - `--shadow-elevated`: `0 8px 24px -4px rgba(18, 20, 22, 0.08)` (Chỉ dùng cho menu điều hướng hoặc modal tra cứu).

---

## 4. Hệ Thống Chuyển Động (Motion Tokens) & Khả Năng Tiếp Cận

```css
:root {
  /* 1. Thời lượng chuyển động (Durations) */
  --duration-instant: 100ms; /* Phản hồi trạng thái click */
  --duration-fast:    180ms; /* Hover nút bấm, đổi màu liên kết */
  --duration-medium:  380ms; /* Cuộn phân đoạn, mở thẻ hồ sơ */
  --duration-slow:    650ms; /* Chuyển động sơ đồ chuỗi giá trị */

  /* 2. Đường cong chuyển động (Editorial Easings) */
  /* Đường cong giảm tốc mượt mà phong cách tạp chí - dứt khoát ở điểm đến */
  --ease-editorial-out: cubic-bezier(0.16, 1, 0.3, 1);
  /* Đường cong mượt mà cho các chuyển động hai chiều */
  --ease-editorial-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

/* 3. Ghi đè bắt buộc cho chế độ Giảm Chuyển Động (prefers-reduced-motion) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Bảng Biến Số CSS Sẵn Sàng Triển Khai (`:root`)

Frontend Engineer có thể sao chép trực tiếp khối mã CSS dưới đây vào tệp giao diện gốc (`globals.css` / `tokens.css`):

```css
:root {
  /* Colors */
  --color-carbon: #121416;
  --color-charcoal-deep: #1C1F22;
  --color-chalk: #F7F6F2;
  --color-stone-warm: #E8E6DF;
  --color-border-subtle: #D5D2C7;
  --color-vermilion: #C8372D;
  --color-dark-red: #A62E2D;
  --color-citron: #C8D668;
  --color-text-muted: #5E656B;
  --color-text-light-muted: #A2A8AE;
  --color-paper-pure: #FFFFFF;

  /* Typography Stacks */
  --font-family-display: "Playfair Display", "Fraunces", Georgia, serif;
  --font-family-body: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-family-mono: "JetBrains Mono", Consolas, monospace;

  /* Fluid Font Sizes */
  --font-size-display-hero: clamp(2.500rem, 1.857rem + 3.214vw, 4.750rem);
  --font-size-display-1: clamp(2.000rem, 1.607rem + 1.964vw, 3.375rem);
  --font-size-display-2: clamp(1.500rem, 1.250rem + 1.250vw, 2.375rem);
  --font-size-heading-3: clamp(1.250rem, 1.107rem + 0.714vw, 1.750rem);
  --font-size-lead: clamp(1.125rem, 1.054rem + 0.357vw, 1.375rem);
  --font-size-body: clamp(1.000rem, 0.964rem + 0.179vw, 1.125rem);
  --font-size-caption: clamp(0.812rem, 0.795rem + 0.089vw, 0.875rem);
  --font-size-kicker: clamp(0.688rem, 0.670rem + 0.089vw, 0.750rem);

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.50rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1.00rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.50rem;
  --spacing-8: 2.00rem;
  --spacing-12: 3.00rem;
  --spacing-16: 4.00rem;
  --spacing-24: 6.00rem;

  /* Radius & Borders */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-pill: 9999px;
  --border-subtle: 1px solid var(--color-border-subtle);

  /* Transitions */
  --transition-fast: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-medium: 380ms cubic-bezier(0.16, 1, 0.3, 1);
}
```
