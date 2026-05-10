import PageHero from "../_components/page-hero";
import ShareGrillingMethods from "../_components/share-grilling-methods";

export const metadata = {
  title: "みんなの焼き方共有 | YAKINIKU AGE GUIDE",
  description: "焼肉好きの焼き方を投稿、フィルター、ランダム選択できる共有ページです。",
};

export default function ShareGrillPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-hidden bg-[#080604] text-[#f7efe3]">
      <PageHero
        eyebrow="Shared Grill Notes"
        title="みんなの焼き方を、次の一皿へ。"
        description="焼き時間、火加減、薬味、休ませ方。自分の焼き方を投稿し、他の人の工夫から今夜試す一枚を選べます。"
      />
      <ShareGrillingMethods />
    </main>
  );
}
