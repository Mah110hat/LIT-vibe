export default function RatingBars({ value, label }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6c7ad]">
        <span>{label}</span>
        <span className="text-[#e0b85a]">{value}/5</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5" aria-label={`${label} ${value} / 5`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-full ${
              index < value ? "bg-gradient-to-r from-[#c9a45c] to-[#f0cf79]" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
