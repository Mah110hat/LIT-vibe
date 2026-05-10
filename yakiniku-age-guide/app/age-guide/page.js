import AgeGuideCard from "../_components/age-guide-card";
import PageHero from "../_components/page-hero";
import SectionHeader from "../_components/section-header";
import { ageGuides } from "../_data/yakiniku";

export const metadata = {
  title: "年代別おすすめ | YAKINIKU AGE GUIDE",
  description: "10代から50代以上まで、年代ごとに合う焼肉部位と食べ方を紹介します。",
};

export default function AgeGuidePage() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#080604] text-[#f7efe3]">
      <PageHero
        eyebrow="Age Pairing"
        title="年代ごとに、おいしさの重心は変わる。"
        description="若い世代には脂の甘みと満足感を。大人世代には赤身の香り、ほどよい脂、食後の軽さを。焼肉をもっと自分らしく楽しむための年代別ガイドです。"
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Course by Age"
            title="年代別のおすすめ部位"
            description="なぜその年代に合うのか、味の方向性、焼き方、食べ方まで一枚のカードにまとめました。"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {ageGuides.map((guide) => (
              <AgeGuideCard key={guide.age} guide={guide} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
