import Image from "next/image";
import Link from "next/link";
import Diagnosis from "./_components/diagnosis";
import SectionHeader from "./_components/section-header";
import { pageCards } from "./_data/yakiniku";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#080604] text-[#f7efe3]">
      <section className="relative flex min-h-dvh items-center px-5 py-28 md:min-h-[92vh] md:px-8 md:py-32">
        <Image
          src="/images/hero-yakiniku.png"
          alt="炭火で焼かれる上質な焼肉"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-black/50" />
        <div className="grill-lines absolute inset-x-0 bottom-0 h-64 opacity-65" />
        <div className="smoke-layer absolute left-10 top-20 h-80 w-80 rounded-full" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div className="max-w-3xl pt-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.42em] text-[#e0b85a]">
              YAKINIKU AGE GUIDE
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.12] text-white md:text-7xl lg:text-8xl">
              年代で変わる、
              <span className="gold-text block">焼肉の愉しみ方。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-9 text-[#f0dfc2] md:text-lg">
              脂の甘みを楽しむ若い世代から、赤身の旨味を味わう大人世代まで。あなたの年代に合った一皿を見つける焼肉ガイド。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/age-guide"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#c9a45c] to-[#e0b85a] px-7 py-3 text-sm font-bold tracking-[0.12em] text-[#160d08] shadow-[0_16px_42px_rgba(201,164,92,0.28)] transition duration-200 hover:translate-y-[-2px] hover:shadow-[0_20px_52px_rgba(201,164,92,0.38)] focus:outline-none focus:ring-2 focus:ring-[#f2d690]"
              >
                年代別を見る
              </Link>
              <Link
                href="/cuts"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c9a45c]/45 bg-black/35 px-7 py-3 text-sm font-bold tracking-[0.12em] text-[#f7efe3] backdrop-blur transition duration-200 hover:translate-y-[-2px] hover:border-[#e0b85a] hover:bg-[#c9a45c]/10 focus:outline-none focus:ring-2 focus:ring-[#f2d690]"
              >
                部位一覧を見る
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="stone-panel rounded-lg p-5">
              <div className="relative z-10 border-l border-[#c9a45c]/45 pl-5">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#c9a45c]">
                  Tonight's Course
                </p>
                <p className="mt-4 font-display text-3xl font-semibold leading-snug text-[#f7efe3]">
                  甘み、香り、余韻。
                  <br />
                  欲しい情報へすぐ進める焼肉ガイド。
                </p>
                <p className="mt-4 text-sm leading-8 text-[#d6c7ad]">
                  年代別、部位一覧、焼き方、共有レシピをページごとに整理。ホームでは全体像と診断から始められます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Explore"
            title="知りたい焼肉へ、迷わず進む。"
            description="年代で選ぶ、部位で比べる、焼き方を学ぶ、みんなの工夫を試す。目的に合わせてページを分けました。"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pageCards.map((card) => (
              <Link key={card.href} href={card.href} className="meat-card stone-panel group rounded-lg">
                <div className="relative aspect-[1.2/1] overflow-hidden rounded-t-lg bg-[#120b07]">
                  <Image
                    src={card.image}
                    alt={`${card.title}ページの概要`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover opacity-85 transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-[#c9a45c]/40 bg-black/55 px-3 py-1 text-xs font-semibold text-[#f4d88a] backdrop-blur">
                    {card.eyebrow}
                  </span>
                </div>
                <div className="relative p-6">
                  <h2 className="font-display text-2xl font-semibold text-[#f7efe3]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#d6c7ad]">{card.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-[#c9a45c]/25 bg-[#c9a45c]/10 px-3 py-1 text-xs font-semibold text-[#f2d690]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-bold tracking-[0.16em] text-[#e0b85a]">
                    ページを見る
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Diagnosis />
    </main>
  );
}
