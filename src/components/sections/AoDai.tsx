"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Heart, Sparkles, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AoDai() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-background w-full" id="ao-dài">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-heading">
          👗 Áo Dài Yêu Thương 👗
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border/50 shadow-xl rounded-3xl overflow-hidden p-6 md:p-10">
          
          {/* Left: Description & Program Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
                <Heart className="w-3.5 h-3.5 fill-primary" />
                100% Lợi Nhuận Gây Quỹ Xây Trường
              </span>
              
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary">
                Mỗi Tà Áo Dài - Một Ngôi Trường Mới
              </h3>
              
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Mỗi tà áo dài bạn trao đi là một bước đến gần hơn tới ngôi trường mới cho các em nhỏ. Dự án <strong>Áo Dài Yêu Thương</strong> được tổ chức bởi Giáo Xứ Các Thánh Tử Đạo Việt Nam tại Richmond, VA nhằm quyên góp toàn bộ lợi nhuận cho quỹ xây trường học.
              </p>
            </div>

            {/* Donor & Buyer Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/30 p-5 rounded-2xl border border-border/40">
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-secondary flex items-center gap-1.5 border-b border-border pb-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Nhận Quyên Góp
                </h4>
                <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
                  <li>Áo dài mới còn nguyên tem, nhãn</li>
                  <li>Áo dài đã qua sử dụng còn đẹp</li>
                  <li>Mọi màu sắc, mọi kích cỡ</li>
                  <li>Áo dài người lớn & trẻ em</li>
                  <li>Cả bộ hoặc rời (áo + quần)</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-secondary flex items-center gap-1.5 border-b border-border pb-1">
                  <Heart className="w-4 h-4 text-primary" />
                  Bạn Có Thể
                </h4>
                <ul className="text-xs space-y-1.5 text-muted-foreground list-disc list-inside">
                  <li>Mua áo dài với giá cực ưu đãi</li>
                  <li>Mặc thử trực tiếp tại gian hàng</li>
                  <li>Tìm áo dài cho lễ, Tết, hội chợ</li>
                  <li>Đóng góp trực tiếp cho các bé</li>
                </ul>
              </div>
            </div>

            {/* Contact Call to Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-primary/5 p-4 rounded-xl border border-primary/20">
              <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-secondary">Liên hệ Thùy Dương</p>
                <a href="tel:8043160552" className="text-lg font-bold text-primary hover:underline">
                  (804) 316-0552
                </a>
                <p className="text-xs text-muted-foreground">Gọi hoặc nhắn tin để quyên góp, mua áo, hoặc đặt lịch mặc thử</p>
              </div>
            </div>

            <p className="text-xs text-center md:text-left text-muted-foreground italic">
              "Mọi đóng góp, dù nhỏ, đều tạo nên sự khác biệt lớn lao cho các em!" — Giáo Xứ Các Thánh Tử Đạo Việt Nam, Richmond, VA
            </p>
          </div>

          {/* Right: Flyer Image (Interactive Click to Zoom) */}
          <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="relative aspect-[3/4.2] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image 
                src="/images/aodai-flyer.jpg" 
                alt="Ao Dai Flyer" 
                fill 
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  🔍 Xem hình lớn
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3 italic">Click để xem chi tiết tờ rơi</p>
          </div>

        </div>
      </div>

      {/* Modal Popover for Flyer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-md w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border max-h-[95vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-border/80">
              <h4 className="font-bold text-sm text-secondary">Áo Dài Yêu Thương Flyer</h4>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Modal Body / Image */}
            <div className="relative flex-1 min-h-[60vh] bg-zinc-950">
              <Image 
                src="/images/aodai-flyer.jpg" 
                alt="Ao Dai Flyer Large" 
                fill 
                className="object-contain"
                sizes="(max-w-768px) 100vw, 400px"
              />
            </div>
            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-border/80 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className={cn(buttonVariants({ variant: "outline" }), "rounded-xl")}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
