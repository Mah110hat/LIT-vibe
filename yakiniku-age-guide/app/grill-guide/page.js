import PageHero from "../_components/page-hero";
import SectionHeader from "../_components/section-header";
import { grillGuides } from "../_data/yakiniku";

export const metadata = {
  title: "焼き方ガイド | YAKINIKU AGE GUIDE",
  description: "焼肉の部位タイプごとに火加減、焼き方、仕上げ方のコツを紹介します。",
};

export default function GrillGuidePage() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#080604] text-[#f7efe3]">
      <PageHero
        eyebrow="Grilling Method"
        title="焼き方で、同じ部位は別の表情になる。"
        description="火の強さ、返す回数、脂の落とし方。焼き台の上の数十秒が、肉の印象を決めます。"
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Heat Control"
            title="部位タイプごとの火入れ"
            description="タン、カルビ、赤身、ヒレ、ホルモン。焼き方の考え方を部位タイプ別に整理しました。"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {grillGuides.map((guide, index) => (
              <article key={guide.type} className="meat-card stone-panel rounded-lg p-6">
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9a45c]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-display text-3xl font-semibold text-[#f7efe3]">
                    {guide.type}
                  </h2>
                  <p className="mt-4 text-base font-semibold leading-7 text-[#f2d690]">
                    {guide.title}
                  </p>
                  <p className="mt-4 text-sm leading-8 text-[#d6c7ad]">{guide.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
