import Image from "next/image";

export default function AgeGuideCard({ guide }) {
  return (
    <article className="meat-card stone-panel flex h-full flex-col rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-[#120b07]">
        <Image
          src={guide.image}
          alt={`${guide.age}におすすめの焼肉部位`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover opacity-85 transition duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <p className="font-display text-4xl font-semibold text-white">{guide.age}</p>
          <span className="rounded-full border border-[#c9a45c]/50 bg-black/45 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#e0b85a]">
            AGE
          </span>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-8 text-[#f7efe3]">
          {guide.theme}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#d6c7ad]">{guide.catch}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {guide.cuts.map((cut) => (
            <span
              key={cut}
              className="rounded-full border border-[#c9a45c]/30 bg-[#c9a45c]/10 px-3 py-1 text-xs font-semibold text-[#f4d88a]"
            >
              {cut}
            </span>
          ))}
        </div>
        <dl className="mt-6 grid gap-4 text-sm leading-7">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
              Reason
            </dt>
            <dd className="mt-1 text-[#d6c7ad]">{guide.why}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
              Taste
            </dt>
            <dd className="mt-1 text-[#d6c7ad]">{guide.taste}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
              Grill
            </dt>
            <dd className="mt-1 text-[#d6c7ad]">{guide.grill}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
              Pairing
            </dt>
            <dd className="mt-1 text-[#d6c7ad]">{guide.pairing}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
