"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    image: "/images/slide1.jpg",
    title: "Các Thánh Tử Đạo Việt Nam Richmond, Virginia",
    subtitle: "Nơi nuôi dưỡng đức tin, lan tỏa tình yêu thương và kết nối cộng đồng tại Richmond, Virginia.",
    badge: "Chào Mừng Đến Với Giáo Xứ",
    primaryAction: {
      text: "👉 ĐẶT NGAY HÔM NAY",
      href: "#order-form",
    },
  },
  {
    image: "/images/slide2.jpg",
    title: "🌿 Hương Vị Quê Nhà",
    subtitle: "Bánh ướt dẻo thơm, Ya ua mát lạnh cùng các gian hàng đặc sản làm ấm lòng người xa xứ.",
    badge: "Ẩm Thực Cuối Tuần",
    primaryAction: {
      text: "👉 ĐẶT NGAY HÔM NAY",
      href: "#order-form",
    },
  },
  {
    image: "/images/slide3.jpg",
    title: "Chung Tay Xây Dựng Tương Lai",
    subtitle: "Dịch vụ Rửa xe gây quỹ phục vụ cuối tuần này.",
    badge: "Sự Kiện & Gây Quỹ",
    primaryAction: {
      text: "👉 ĐẶT NGAY HÔM NAY",
      href: "#order-form",
    },
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  return (
    <section
      className="relative w-full aspect-[16/10] sm:aspect-[2/1] md:aspect-auto md:h-[75vh] min-h-[320px] sm:min-h-[400px] md:min-h-[550px] max-h-[750px] overflow-hidden bg-zinc-950 text-white"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides images */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/75 z-20" />

              {/* Blurred background image layer to fill the sides dynamically */}
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover filter blur-2xl opacity-35 scale-110"
                sizes="100vw"
              />

              {/* Main 100% displayed foreground image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-contain object-top z-10"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Content overlay container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-3xl space-y-3 sm:space-y-6">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            if (!isActive) return null;
            return (
              <div
                key={idx}
                className="space-y-3 sm:space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700"
              >
                {/* Slide Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md text-primary text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  {slide.badge}
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.15] text-white">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-base md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4 flex flex-wrap gap-4 items-center">
                  <a
                    href={slide.primaryAction.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-lg rounded-xl px-5 py-4 sm:px-8 sm:py-6 font-bold shadow-lg transition-all hover:scale-[1.03] hover:shadow-primary/20"
                    )}
                  >
                    {slide.primaryAction.text}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Manual Slide Navigation Controls - Dots Only (Centered) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              current === idx
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            )}
            title={`Đến slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-25" />
    </section>
  );
}

