"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      item: formData.get("item"),
      quantity: formData.get("quantity"),
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
    <section id="order-form" className="py-16 px-4 max-w-3xl mx-auto w-full">
      <Card className="rounded-2xl border-primary/20 shadow-lg">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl text-primary flex items-center justify-center gap-2">
            🛒 Giữ Chỗ Đơn Hàng Của Bạn
          </CardTitle>
          <CardDescription className="text-base text-red-500 font-medium mt-2">
            (Số lượng có hạn, thường hết sớm!)
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <Label htmlFor="item" className="text-base">Chọn món / Dịch vụ</Label>
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
               <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-base">Số lượng</Label>
                  <Input id="quantity" name="quantity" type="number" min="1" defaultValue="1" className="rounded-xl h-12" disabled={isLoading} />
               </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-base">Ghi chú thêm (Không bắt buộc)</Label>
              <Textarea id="notes" name="notes" placeholder="VD: Lấy lúc 10h sáng, ăn cay nhiều..." className="rounded-xl min-h-[100px]" disabled={isLoading} />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 rounded-xl text-lg font-bold shadow-md">
              {isLoading ? "Đang gửi..." : "🚀 GỬI ĐƠN HÀNG NGAY!"}
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Thanh toán tiền mặt hoặc Zelle khi nhận hàng/sử dụng dịch vụ tại Hội trường.
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
