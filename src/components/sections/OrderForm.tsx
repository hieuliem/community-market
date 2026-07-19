"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [pickupTime, setPickupTime] = useState("");
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      item: formData.get("item"),
      quantity: formData.get("quantity"),
      pickupTime: formData.get("pickupTime"),
      notes: formData.get("notes"),
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("API Error");
      
      const result = await res.json();
      if (result.success) {
        toast.success("Thành công!", {
          description: "Đơn hàng của bạn đã được ghi nhận. Cảm ơn bạn đã ủng hộ!",
        });
        (e.target as HTMLFormElement).reset(); // Xóa form sau khi gửi thành công
        setPickupTime(""); // Reset state
      }
    } catch (error) {
      console.error(error);
      toast.error("Đã xảy ra lỗi!", {
        description: "Không thể gửi đơn hàng lúc này. Vui lòng thử lại sau.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="order-form" className="py-16 px-4 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Form Card */}
        <Card className="lg:col-span-7 rounded-2xl border-primary/20 shadow-lg flex flex-col justify-between">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl text-primary flex items-center justify-center gap-2">
              🛒 Giữ Chỗ Đơn Hàng Của Bạn
            </CardTitle>
            <CardDescription className="text-base text-red-500 font-medium mt-2">
              (Số lượng có hạn, thường hết sớm!)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Họ và Tên <span className="text-red-500">*</span></Label>
                <Input id="name" name="name" placeholder="Ví dụ: Nguyễn Văn A" className="rounded-xl h-12" required disabled={isLoading} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">Số điện thoại <span className="text-red-500">*</span></Label>
                <Input id="phone" name="phone" type="tel" placeholder="Ví dụ: 123-456-7890" className="rounded-xl h-12" required disabled={isLoading} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="item" className="text-base">Chọn món / Dịch vụ <span className="text-red-500">*</span></Label>
                <Select name="item" defaultValue="yaua">
                  <SelectTrigger className="rounded-xl h-12" disabled={isLoading}>
                    <SelectValue placeholder="-- Vui lòng chọn --" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yaua">Ya Ua Việt Nam ($1/bịch)</SelectItem>
                    <SelectItem value="banhuot">Bánh Ướt Chả Lụa ($8/phần)</SelectItem>
                    <SelectItem value="aodai">Tư vấn Áo Dài</SelectItem>
                    <SelectItem value="ruaxe">Đặt lịch Rửa Xe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                     <Label htmlFor="quantity" className="text-base">Số lượng <span className="text-red-500">*</span></Label>
                     <Input id="quantity" name="quantity" type="number" min="1" defaultValue="1" required className="rounded-xl h-12" disabled={isLoading} />
                  </div>
              </div>

              {/* Radio group below Số lượng */}
              <div className="space-y-3">
                <Label className="text-base">Giờ Nhận Hàng Cuối Tuần</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: "9 PM (after 8 PM Mass)", label: "9 PM", desc: "Sau Thánh Lễ 8 PM" },
                    { value: "9 AM (after 8 AM Mass)", label: "9 AM", desc: "Sau Thánh Lễ 8 AM" },
                    { value: "11:30 AM (after 10:30 AM Mass)", label: "11:30 AM", desc: "Sau Thánh Lễ 10:30 AM" }
                  ].map((option) => {
                    const isSelected = pickupTime === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        disabled={isLoading}
                        onClick={() => setPickupTime(pickupTime === option.value ? "" : option.value)}
                        className={cn(
                          "flex flex-col items-center justify-center p-3 border-2 rounded-2xl cursor-pointer transition-all text-center select-none w-full",
                          isSelected 
                            ? "border-primary bg-primary/10 text-primary" 
                            : "border-border hover:border-primary/40 hover:bg-primary/5 text-secondary"
                        )}
                      >
                        <span className="font-bold text-sm">{option.label}</span>
                        <span className={cn("text-[10px] mt-0.5", isSelected ? "text-primary/80" : "text-muted-foreground")}>
                          {option.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="pickupTime" value={pickupTime} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-base">Ghi chú thêm</Label>
                <Textarea id="notes" name="notes" placeholder="VD: Lấy lúc 10h sáng, ăn cay nhiều..." className="rounded-xl min-h-[100px]" disabled={isLoading} />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 rounded-xl text-lg font-bold shadow-md">
                {isLoading ? "Đang gửi..." : "🚀 GỬI ĐƠN HÀNG NGAY!"}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Thanh toán tiền mặt hoặc Zelle khi nhận hàng / sử dụng dịch vụ tại Hội trường.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Right: Ya Ua Flyer Image */}
        <div 
          className="lg:col-span-5 relative group cursor-pointer flex flex-col justify-between" 
          onClick={() => setIsFlyerModalOpen(true)}
        >
          <div className="relative aspect-[3/4.2] w-full rounded-2xl overflow-hidden shadow-lg border border-border flex-1">
            <Image 
              src="/images/yaua-flyer.jpg" 
              alt="Ya Ua Flyer" 
              fill 
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                🔍 Xem hình lớn
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3 italic">Click để xem chi tiết tờ rơi Ya Ua</p>
        </div>

      </div>

      {/* Modal Popover for Ya Ua Flyer */}
      {isFlyerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-md w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border max-h-[95vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-b-border/80">
              <h4 className="font-bold text-sm text-secondary">Ya Ua Tươi Flyer</h4>
              <button 
                onClick={() => setIsFlyerModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Modal Body / Image */}
            <div className="relative flex-1 min-h-[60vh] bg-zinc-950">
              <Image 
                src="/images/yaua-flyer.jpg" 
                alt="Ya Ua Flyer Large" 
                fill 
                className="object-contain"
                sizes="(max-w-768px) 100vw, 400px"
              />
            </div>
            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-t-border/80 flex justify-end">
              <button 
                onClick={() => setIsFlyerModalOpen(false)}
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
