import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Sparkles, Utensils, Coffee } from "lucide-react";

export function WeekendTreat() {
  const savoryItems = [
    { name: "Bánh Ướt", detail: "Fresh Rice Rolls", price: "$6", unit: "/ lb" },
    { name: "Chả Cá Nguyên Chất", detail: "Premium Fish Cake", price: "$20", unit: "/ lb" },
    { name: "Xôi Gấc", detail: "Red Sticky Rice", price: "$5", unit: "/ hộp" },
  ];

  const sweetItems = [
    { name: "Chè Bột Bán", detail: "Sweet Tapioca Pudding", price: "$5", unit: "/ ly" },
    { name: "Đậu Hũ Singapo", detail: "Singapore-Style Tofu Pudding", price: "$10", unit: "/ 5 ly" },
    { name: "Bánh Cam", detail: "Sweet Sesame Balls", price: "$10", unit: "/ 6 cái" },
    { name: "Ya Ua", detail: "Vietnamese Yogurt", price: "$20", unit: "/ 20 bịch" },
  ];

  return (
    <section className="py-20 px-4 bg-zinc-950" id="weekend-treat">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 space-y-5">
          <span className="bg-amber-500 text-black font-extrabold px-5 py-1.5 rounded-full text-sm tracking-widest uppercase inline-flex items-center gap-2 shadow-lg shadow-amber-500/30 animate-pulse">
            <Sparkles className="w-4 h-4" /> CUỐI TUẦN
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading drop-shadow-lg">
            Hương Vị <span className="text-amber-400">Quê Nhà</span>
          </h2>

          <div className="flex items-center justify-center gap-2 font-semibold text-lg text-amber-300">
            <Calendar className="w-5 h-5" />
            <span style={{ fontFamily: "var(--font-quicksand)", fontWeight: 700 }}>
              Thứ Bảy &amp; Chúa Nhật, ngày 15 &amp; 16 tháng 8
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed text-base pt-1">
            Ghé qua Hội Trường Giáo Xứ sau giờ lễ để thưởng thức các món ăn truyền thống thơm ngon, tự tay gia đình trong cộng đoàn chuẩn bị! Rất thích hợp để chia sẻ cùng gia đình hoặc thưởng thức trên đường về nhà.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Món Mặn */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 hover:shadow-amber-500/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="bg-white/5 border-b border-white/10 flex flex-row items-center gap-3 py-5">
              <div className="bg-amber-500/15 p-2.5 rounded-2xl text-amber-400">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-heading text-white">Món Mặn</CardTitle>
                <CardDescription className="text-xs text-zinc-400">Bánh ướt, chả cá &amp; xôi gấc</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="divide-y divide-zinc-800">
                {savoryItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-white text-base tracking-wide">{item.name}</h4>
                      <p className="text-xs text-zinc-500">{item.detail}</p>
                    </div>
                    <div className="shrink-0 ml-4 text-right">
                      <span className="font-extrabold text-black bg-amber-400 px-3.5 py-1.5 rounded-2xl text-base shadow-md shadow-amber-500/20 whitespace-nowrap">
                        {item.price}
                      </span>
                      <p className="text-[10px] text-zinc-500 mt-1 text-center">{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 mt-auto">
                <img
                  src="/weekend-food.jpg"
                  alt="Bánh Ướt, Chả Cá & Xôi Gấc"
                  className="w-full h-36 object-cover rounded-2xl border border-zinc-700 shadow-inner opacity-90"
                />
              </div>
            </CardContent>
          </Card>

          {/* Món Ngọt */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 hover:shadow-amber-500/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col h-full">
            <CardHeader className="bg-white/5 border-b border-white/10 flex flex-row items-center gap-3 py-5">
              <div className="bg-amber-500/15 p-2.5 rounded-2xl text-amber-400">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold font-heading text-white">Món Ngọt</CardTitle>
                <CardDescription className="text-xs text-zinc-400">Chè, đậu hũ, bánh &amp; ya ua</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="divide-y divide-zinc-800">
                {sweetItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-white text-base tracking-wide">{item.name}</h4>
                      <p className="text-xs text-zinc-500">{item.detail}</p>
                    </div>
                    <div className="shrink-0 ml-4 text-right">
                      <span className="font-extrabold text-black bg-amber-400 px-3.5 py-1.5 rounded-2xl text-base shadow-md shadow-amber-500/20 whitespace-nowrap">
                        {item.price}
                      </span>
                      <p className="text-[10px] text-zinc-500 mt-1 text-center">{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 mt-auto">
                <img
                  src="/weekend-sweet.jpg"
                  alt="Chè, Bánh Cam & Ya Ua"
                  className="w-full h-28 object-cover object-center rounded-2xl border border-zinc-700 shadow-inner opacity-90"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-10 border border-amber-500/25 bg-amber-500/5 rounded-3xl p-6 text-center">
          <p className="text-sm md:text-base font-semibold text-amber-300 leading-relaxed max-w-xl mx-auto flex items-center justify-center gap-2">
            ✨ Số lượng có hạn, xin mời ghé qua!
          </p>
        </div>

      </div>
    </section>
  );
}
