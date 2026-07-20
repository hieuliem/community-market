import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Heart, Sparkles, Utensils, Coffee } from "lucide-react";

export function WeekendTreat() {
  const sweetTreats = [
    { name: "Chè Đậu Ván", detail: "Sweet Rice & Beans", price: 5 },
    { name: "Chè Sâm Bổ Lượng", detail: "Refreshing Herbal Drink", price: 5 },
    { name: "Chè Thưng", detail: "Sweet Taro & Tapioca Soup", price: 5 },
    { name: "Chuối Hấp Nước Dừa", detail: "Steamed Banana w/ Coconut Sauce", price: 7 },
    { name: "Rau Câu Dừa", detail: "Coconut Jelly", price: 3 },
  ];

  const savoryBites = [
    { name: "Bánh Bột Lọc", detail: "Clear Shrimp & Pork Dumplings • Pack of 10", price: 10 },
    { name: "Bánh Cam", detail: "Sweet Sesame Balls • Pack of 6", price: 10 },
    { name: "Ya Ua", detail: "Vietnamese Yogurt • Pack of 20", price: 20 },
  ];

  return (
    <section className="py-16 px-4 bg-linear-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <span className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-1.5 rounded-full text-sm animate-pulse inline-flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-4 h-4" /> CHỈ CUỐI TUẦN NÀY!
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary font-heading">
            Quà Bánh Ngọt Ngào Sau Thánh Lễ
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium text-lg">
            <Calendar className="w-5 h-5 text-amber-500" />
            <span>Thứ Bảy & Chúa Nhật, ngày 25 & 26 tháng 7</span>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-base pt-2">
            Ghé qua Hội Trường Giáo Xứ sau giờ lễ để thưởng thức các món tráng miệng và ăn vặt truyền thống thơm ngon, tự tay gia đình trong cộng đoàn chuẩn bị! Rất thích hợp để chia sẻ cùng gia đình hoặc thưởng thức trên đường về nhà.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Món Ăn Nhẹ */}
          <Card className="border-2 border-primary/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="bg-primary/5 border-b border-primary/10 flex flex-row items-center gap-3 py-5">
              <div className="bg-primary/10 p-2.5 rounded-2xl text-primary">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-heading text-primary">Món Ăn Nhẹ</CardTitle>
                <CardDescription className="text-xs">Bánh mặn & yaourt thơm ngon</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col justify-between flex-1">
              <div className="divide-y divide-border/60">
                {savoryBites.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-base">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                    <span className="font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-3.5 py-1.5 rounded-2xl text-base shadow-xs">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-4 mt-auto">
                <img 
                  src="/vietnamese_snacks.jpg" 
                  alt="Vietnamese Snacks" 
                  className="w-full h-32 object-cover rounded-2xl border border-primary/10 shadow-xs" 
                />
              </div>
            </CardContent>
          </Card>

          {/* Sweet Chè & Desserts */}
          <Card className="border-2 border-primary/10 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col h-full">
            <CardHeader className="bg-primary/5 border-b border-primary/10 flex flex-row items-center gap-3 py-5">
              <div className="bg-primary/10 p-2.5 rounded-2xl text-primary">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-heading text-primary">Chè Ngọt & Món Tráng Miệng</CardTitle>
                <CardDescription className="text-xs">Chè truyền thống & thạch thanh mát</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="divide-y divide-border/60 p-6 flex-1">
              {sweetTreats.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-base">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                  <span className="font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-3.5 py-1.5 rounded-2xl text-base shadow-xs">
                    ${item.price}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 text-center space-y-4">
          <p className="text-sm md:text-base font-semibold text-amber-800 dark:text-amber-300 leading-relaxed max-w-xl mx-auto flex items-center justify-center gap-1.5">
            ✨ Số lượng có hạn, xin vui lòng đến sớm!
          </p>
        </div>
      </div>
    </section>
  );
}
