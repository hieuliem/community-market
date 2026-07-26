"use client";

export function TetTrungThu() {
  return (
    <section
      className="relative overflow-hidden py-14 px-4"
      style={{ background: "linear-gradient(160deg, #0d1b4b 0%, #111d5e 50%, #0a1540 100%)" }}
    >
      {/* ── Decorative stars ── */}
      <Stars />

      {/* ── Moon glow (top-left) ── */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #ffe680 0%, transparent 70%)" }}
      />

      {/* ── Hanging lanterns (right side) ── */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-40 sm:w-56 flex flex-col items-end justify-start gap-6 pr-2 pt-4">
        <Lantern size="lg" rotate={-6} />
        <Lantern size="md" rotate={5} />
        <Lantern size="xl" rotate={-3} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">

        {/* Free admission badge */}
        <div className="inline-block">
          <p
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--font-quicksand, sans-serif)",
              color: "#ffe066",
              textShadow: "0 0 24px #ffd70088, 0 2px 0 #b8860b",
            }}
          >
            MIỄN PHÍ<br />VÀO CỬA
          </p>
        </div>

        {/* Activities list */}
        <p className="text-white/80 text-sm sm:text-base tracking-wide">
          Trò Chơi&nbsp;|&nbsp;Quà Thưởng&nbsp;|&nbsp;Ẩm Thực
          <br />
          Múa Lân&nbsp;|&nbsp;Rước Đèn
        </p>

        {/* Main title */}
        <div>
          <h2
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight"
            style={{
              fontFamily: "var(--font-quicksand, sans-serif)",
              color: "#f5c518",
              textShadow: "0 0 40px #ffd70055, 0 3px 0 #7a5c00",
            }}
          >
            TẾT TRUNG THU
          </h2>
        </div>

        {/* Date & time */}
        <div className="space-y-1">
          <p
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "var(--font-quicksand, sans-serif)" }}
          >
            20 THÁNG 9&nbsp;|&nbsp;2026
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-white/90">
            4 PM – 9 PM
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 justify-center">
          <span className="flex-1 h-px bg-white/20 max-w-[80px]" />
          <span className="text-yellow-400 text-lg">🏮</span>
          <span className="flex-1 h-px bg-white/20 max-w-[80px]" />
        </div>

        {/* Venue */}
        <div className="space-y-1">
          <p className="text-white/90 text-base sm:text-lg font-medium">
            Giáo Xứ Các Thánh Tử Đạo Việt Nam
          </p>
          <p
            className="text-base sm:text-lg font-bold"
            style={{ color: "#f5c518" }}
          >
            12500 Patterson Ave, Richmond, VA 23238
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─────────────────────────────────────────── */

function Stars() {
  const positions = [
    { top: "8%", left: "12%" }, { top: "15%", left: "55%" },
    { top: "5%", left: "75%" }, { top: "30%", left: "8%" },
    { top: "45%", left: "20%" }, { top: "60%", left: "5%" },
    { top: "70%", left: "30%" }, { top: "20%", left: "40%" },
    { top: "80%", left: "15%" }, { top: "90%", left: "45%" },
    { top: "55%", left: "50%" }, { top: "35%", left: "65%" },
  ];
  return (
    <>
      {positions.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute w-1 h-1 rounded-full bg-white/60 animate-pulse"
          style={{ top: s.top, left: s.left, animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </>
  );
}

function Lantern({ size, rotate }: { size: "md" | "lg" | "xl"; rotate: number }) {
  const dims = { md: 48, lg: 64, xl: 80 }[size];
  return (
    <div
      className="flex flex-col items-center gap-0"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* string */}
      <div className="w-px bg-yellow-400/60" style={{ height: 24 }} />
      {/* top cap */}
      <div
        className="rounded-sm"
        style={{
          width: dims * 0.45,
          height: 8,
          background: "linear-gradient(180deg, #d4960a, #f5c518)",
        }}
      />
      {/* body */}
      <div
        className="rounded-full relative"
        style={{
          width: dims,
          height: dims * 1.3,
          background: "radial-gradient(ellipse at 35% 35%, #ff8c2a 0%, #d44b00 60%, #8b2200 100%)",
          boxShadow: `0 0 ${dims * 0.4}px #ff6a0044, inset 0 0 ${dims * 0.3}px #ff9a4033`,
        }}
      >
        {/* ribs */}
        {[25, 50, 75].map((p) => (
          <div
            key={p}
            className="absolute rounded-full"
            style={{
              top: `${p}%`,
              left: "10%",
              width: "80%",
              height: 2,
              background: "#c04000aa",
            }}
          />
        ))}
      </div>
      {/* bottom cap */}
      <div
        className="rounded-sm"
        style={{
          width: dims * 0.45,
          height: 8,
          background: "linear-gradient(180deg, #f5c518, #d4960a)",
        }}
      />
      {/* tassel */}
      <div className="flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 3,
              height: dims * 0.4,
              background: "linear-gradient(180deg, #f5c518, #d4960a88)",
              marginTop: i === 1 ? 4 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
