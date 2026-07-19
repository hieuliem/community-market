"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CarWash() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 px-4 bg-primary/5 w-full" id="car-wash">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary font-heading">
          ✨ Dịch Vụ Rửa Xe Gây Quỹ ✨
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border/50 shadow-xl rounded-3xl overflow-hidden p-6 md:p-10">
          {/* Left: Flyer Image (Interactive Click to Zoom) */}
          <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image
                src="/images/car-wash-flyer.png"
                alt="Car Wash Flyer"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  🔍 Xem hình lớn
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info and Google Maps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
                <Heart className="w-3.5 h-3.5 fill-primary" />
                Your Donation Makes A Difference
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-secondary">
                Car Wash Fundraiser
              </h3>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Tất cả số tiền quyên góp từ dịch vụ rửa xe sẽ được chuyển trực tiếp vào quỹ xây dựng nhà thờ <span className="font-semibold">Các Thánh Tử Đạo Việt Nam tại Richmond, Virginia</span>. Hãy mang những chiếc xe yêu quý của bạn đến để được chăm sóc chu đáo bởi đội ngũ tình nguyện viên nhiệt huyết!
              </p>
            </div>

            {/* Event Info Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/40 p-5 rounded-2xl border border-border/40">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Thời gian</h4>
                  <p className="text-xs text-muted-foreground">Thứ Bảy, ngày 25 tháng 7</p>
                  <p className="text-xs text-muted-foreground">10:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Địa điểm</h4>
                  <p className="text-xs text-muted-foreground">Pho 79</p>
                  <p className="text-xs text-muted-foreground">6909 Staples Mill Rd, Richmond, VA 23228</p>
                </div>
              </div>
            </div>

            {/* Google Map Pinned */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm flex items-center gap-1.5 text-secondary">
                <MapPin className="w-4 h-4 text-primary" />
                Bản đồ đường đi (Pho 79)
              </h4>
              <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border/80 shadow-inner relative">
                <iframe
                  title="Google Map Pho 79 Car Wash"
                  src="https://maps.google.com/maps?q=Pho%2079%206909%20Staples%20Mill%20Rd,%20Richmond,%20VA%2023228&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="pt-2">
              <a href="#order-form" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto rounded-xl bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md hover:shadow-lg transition-all")}>
                👉 ĐẶT LỊCH RỬA XE NGAY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popover for Flyer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-lg w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-border/80">
              <h4 className="font-bold text-sm text-secondary">Car Wash Fundraiser Flyer</h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Modal Body / Image */}
            <div className="relative flex-1 min-h-[50vh] bg-zinc-900">
              <Image
                src="/images/car-wash-flyer.png"
                alt="Car Wash Flyer Large"
                fill
                className="object-contain"
                sizes="(max-w-768px) 100vw, 500px"
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
