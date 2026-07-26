export function TetTrungThu() {
  return (
    <section id="TetTrungThu" className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl shadow-2xl my-8">
      {/* Maintains the poster's portrait aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: "683/1024" }}>

        {/* ── Full-bleed poster image ── */}
        <img
          src="/tet-trung-thu-2026.png"
          alt="Tết Trung Thu 2026 – Miễn Phí Vào Cửa, 20 Tháng 9, 4PM–9PM tại Giáo Xứ Các Thánh Tử Đạo Việt Nam"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ── Bottom scrim for venue text legibility ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 70%, rgba(8,12,36,0.85) 100%)",
          }}
        />

        {/* ── Venue details anchored at the bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center px-4 pb-5">
          <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
            Giáo Xứ Các Thánh Tử Đạo Việt Nam
          </p>
          <p className="text-xs sm:text-sm font-bold mt-0.5" style={{ color: "#f5c518" }}>
            📍 12500 Patterson Ave, Richmond, VA 23238
          </p>
        </div>
      </div>
    </section>
  );
}
