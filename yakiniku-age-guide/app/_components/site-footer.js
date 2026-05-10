export default function SiteFooter() {
  return (
    <footer className="border-t border-[#c9a45c]/20 px-5 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight text-[#f7efe3] md:text-4xl">
            焼き方ひとつで、
            <br />
            同じ部位は別の表情を見せる。
          </p>
          <p className="mt-5 text-sm leading-7 text-[#d6c7ad]">
            年代、気分、火入れ。今夜の一枚を、少しだけ丁寧に選ぶための焼肉ガイド。
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.42em] text-[#c9a45c]">
            YAKINIKU AGE GUIDE
          </p>
          <p className="mt-3 text-sm text-[#8f806c]">Luxury cuts by age and taste.</p>
        </div>
      </div>
    </footer>
  );
}
