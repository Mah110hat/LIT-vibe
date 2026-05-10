"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../_data/yakiniku";

export default function SiteHeader() {
  const pathname = usePathname();
  const currentItem =
    navItems.find((item) => item.href !== "/#diagnosis" && item.href === pathname) || navItems[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c9a45c]/18 bg-[#080604]/78 px-4 py-3 backdrop-blur-xl md:px-8">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#e0b85a] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-[#140c07]"
      >
        メインコンテンツへ移動
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#e0b85a]"
            aria-label="YAKINIKU AGE GUIDE ホームへ"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a45c]/45 bg-[#c9a45c]/12">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e0b85a] shadow-[0_0_18px_rgba(224,184,90,0.8)]" />
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-[0.28em] text-[#f7efe3] transition group-hover:text-[#f2d690]">
                YAKINIKU
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.34em] text-[#c9a45c]">
                AGE GUIDE
              </span>
            </span>
          </Link>
          <div className="rounded-full border border-[#c9a45c]/25 bg-black/35 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d6c7ad] lg:hidden">
            現在地: <span className="text-[#e0b85a]">{currentItem.label}</span>
          </div>
        </div>

        <nav
          aria-label="サイト内ナビゲーション"
          className="flex gap-2 overflow-x-auto pb-1 lg:justify-center lg:overflow-visible lg:pb-0"
        >
          {navItems.map((item) => {
            const isActive = item.href !== "/#diagnosis" && item.href === pathname;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-xs font-bold tracking-[0.12em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#e0b85a] ${
                  isActive
                    ? "border-[#e0b85a] bg-[#e0b85a] text-[#140c07] shadow-[0_12px_30px_rgba(201,164,92,0.22)]"
                    : "border-white/10 bg-black/25 text-[#d6c7ad] hover:border-[#c9a45c]/55 hover:bg-[#c9a45c]/10 hover:text-[#f7efe3]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-48 rounded-full border border-[#c9a45c]/25 bg-black/35 px-4 py-2 text-right lg:block">
          <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[#8f806c]">
            現在地
          </span>
          <span className="block text-xs font-bold tracking-[0.14em] text-[#e0b85a]">
            {currentItem.current}
          </span>
        </div>
      </div>
    </header>
  );
}
