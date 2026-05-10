import CutsBrowser from "../_components/cuts-browser";
import PageHero from "../_components/page-hero";
import SectionHeader from "../_components/section-header";

export const metadata = {
  title: "部位一覧 | YAKINIKU AGE GUIDE",
  description: "焼肉部位をカテゴリ、脂の強さ、食べ応え、おすすめ年代で比較できます。",
};

export default function CutsPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#080604] text-[#f7efe3]">
      <PageHero
        eyebrow="Cuts Library"
        title="部位一覧を、味の方向で選ぶ。"
        description="脂の甘み、赤身の旨味、さっぱりした歯切れ、希少部位の奥行き、ホルモンの香ばしさ。気分に合わせて絞り込めます。"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,30,22,0.24),transparent_28rem),radial-gradient(circle_at_92%_10%,rgba(201,164,92,0.13),transparent_24rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Filter & Compare"
            title="脂、赤身、希少部位まで横断する。"
            description="カードのメーターで脂の強さと食べ応えを比べながら、今日の気分に合う部位を見つけられます。"
          />
          <CutsBrowser />
        </div>
      </section>
    </main>
  );
}
