import Link from "next/link";

export default function PageHero({ eyebrow, title, description, backHref = "/", backLabel = "ホームへ戻る" }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(184,50,36,0.22),transparent_28rem),radial-gradient(circle_at_82%_10%,rgba(201,164,92,0.16),transparent_24rem)]" />
      <div className="grill-lines absolute inset-x-0 bottom-0 h-48 opacity-35" />
      <div className="relative mx-auto max-w-7xl">
        <Link
          href={backHref}
          className="inline-flex min-h-11 items-center rounded-full border border-[#c9a45c]/30 bg-black/30 px-5 text-sm font-bold text-[#d6c7ad] transition hover:border-[#e0b85a] hover:text-[#f7efe3] focus:outline-none focus:ring-2 focus:ring-[#e0b85a]"
        >
          {backLabel}
        </Link>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.42em] text-[#e0b85a]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.12] text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-9 text-[#f0dfc2] md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
