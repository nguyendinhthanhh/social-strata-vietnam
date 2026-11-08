"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SourceModal } from "@/components/SourceModal";
import { Scene1Hero } from "@/components/Scene1Hero";
import { Scene2Definition } from "@/components/Scene2Definition";
import { Scene3Laws } from "@/components/Scene3Laws";
import { Scene4Profiles } from "@/components/Scene4Profiles";
import { Scene5RiceChain } from "@/components/Scene5RiceChain";
import { Scene6TakeawayQuiz } from "@/components/Scene6TakeawayQuiz";

export default function HomePage() {
  const [sourceModalOpen, setSourceModalOpen] = useState(false);
  const [selectedSourceId, setSelectedSourceId] = useState<string | null>(null);

  const handleOpenSourceModal = (sourceId?: string) => {
    if (sourceId) {
      setSelectedSourceId(sourceId);
    } else {
      setSelectedSourceId(null);
    }
    setSourceModalOpen(true);
  };

  const handleCloseSourceModal = () => {
    setSourceModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-clip bg-chalk text-carbon selection:bg-vermilion selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenSourceModal={handleOpenSourceModal} />

      {/* Main Exhibition Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none w-full max-w-full overflow-x-clip">
        {/* Phân cảnh 01: Bức tranh Xã hội Việt Nam (Hero & Dẫn nhập) */}
        <Scene1Hero onOpenSourceModal={handleOpenSourceModal} />

        {/* Phân cảnh 02: Giải mã Tọa độ Xã hội (Định nghĩa & Tam giác Quan hệ) */}
        <Scene2Definition onOpenSourceModal={handleOpenSourceModal} />

        {/* Phân cảnh 03: Dòng chảy Biến chuyển (Ba Quy luật trong TKQĐ) */}
        <Scene3Laws onOpenSourceModal={handleOpenSourceModal} />

        {/* Phân cảnh 04: Lát cắt Đương đại (Hồ sơ 6 Lực lượng Xã hội) */}
        <Scene4Profiles onOpenSourceModal={handleOpenSourceModal} />

        {/* Phân cảnh 05: Hạt gạo Liên minh (Mô hình Sư phạm Chuỗi Giá trị) */}
        <Scene5RiceChain onOpenSourceModal={handleOpenSourceModal} />

        {/* Phân cảnh 06: Đúc kết Nhận thức & Thử thách Tương tác (Quiz 5 câu & Nguồn) */}
        <Scene6TakeawayQuiz onOpenSourceModal={handleOpenSourceModal} />
      </main>

      {/* Exhibition Footer */}
      <Footer onOpenSourceModal={handleOpenSourceModal} />

      {/* Global Academic Source Modal */}
      <SourceModal
        isOpen={sourceModalOpen}
        onClose={handleCloseSourceModal}
        initialSourceId={selectedSourceId}
      />
    </div>
  );
}
