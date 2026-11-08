import type { Metadata, Viewport } from "next";
import { Playfair_Display, Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-family-display",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIỆT NAM ĐA TẦNG — Triển Lãm Số Chuyên Đề MLN131 (Chủ Đề 07, Chương V)",
  description:
    "Không gian Triển lãm Số Chuyên đề: Cơ cấu Xã hội – Giai cấp và Liên minh Giai cấp trong Thời kỳ Quá độ lên Chủ nghĩa Xã hội ở Việt Nam. Học phần MLN131, FPT University.",
  keywords: [
    "VIỆT NAM ĐA TẦNG",
    "MLN131",
    "Chủ nghĩa xã hội khoa học",
    "Cơ cấu xã hội giai cấp",
    "Liên minh giai cấp",
    "Công nhân",
    "Nông dân",
    "Trí thức",
    "Doanh nhân",
    "Phụ nữ",
    "Thanh niên",
    "Hạt gạo liên minh",
  ],
  authors: [{ name: "FPT University MLN131 Academic Team" }],
};

export const viewport: Viewport = {
  themeColor: "#121416",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${beVietnamPro.variable} ${jetbrainsMono.variable} min-h-screen bg-chalk text-carbon antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Chuyển nhanh đến nội dung chính
        </a>
        {children}
      </body>
    </html>
  );
}
