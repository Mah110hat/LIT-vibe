import Image from "next/image";
import RatingBars from "./rating-bars";

export default function CutCard({ cut }) {
  return (
    <article className="meat-card stone-panel rounded-lg">
      <div className="relative aspect-[1.28/1] overflow-hidden rounded-t-lg bg-[#120b07]">
        <Image
          src={cut.image}
          alt={`${cut.name}の焼肉部位`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover opacity-90 transition duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/10" />
        <span className="absolute left-4 top-4 rounded-full border border-[#c9a45c]/40 bg-black/55 px-3 py-1 text-xs font-semibold text-[#f4d88a] backdrop-blur">
          {cut.category}
        </span>
      </div>
      <div className="relative p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-[#f7efe3]">{cut.name}</h3>
          <span className="mt-1 whitespace-nowrap text-xs font-semibold tracking-[0.18em] text-[#c9a45c]">
            CUT
          </span>
        </div>
        <p className="mt-3 min-h-20 text-sm leading-7 text-[#d6c7ad]">{cut.description}</p>
        <div className="mt-5 grid gap-4">
          <RatingBars value={cut.fat} label="脂の強さ" />
          <RatingBars value={cut.texture} label="食べ応え" />
        </div>
        <div className="mt-6 grid gap-3 border-t border-[#c9a45c]/15 pt-5 text-sm text-[#d6c7ad]">
          <p>
            <span className="mr-2 text-[#c9a45c]">おすすめ年代</span>
            {cut.age}
          </p>
          <p>
            <span className="mr-2 text-[#c9a45c]">焼き加減</span>
            {cut.doneness}
          </p>
          <p>
            <span className="mr-2 text-[#c9a45c]">食べ方</span>
            {cut.pairing}
          </p>
        </div>
      </div>
    </article>
  );
}
