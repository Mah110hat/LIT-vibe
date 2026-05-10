"use client";

import { useState } from "react";
import { moodOptions } from "../_data/yakiniku";
import SectionHeader from "./section-header";

export default function Diagnosis() {
  const [selectedMood, setSelectedMood] = useState(moodOptions[0]);

  return (
    <section id="diagnosis" className="scroll-mt-28 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Taste Finder"
          title="今日の気分で、一皿を選ぶ。"
          description="気分に合わせてボタンを選ぶだけで、今夜の焼肉に合う部位を提案します。"
        />
        <div className="stone-panel rounded-lg p-6 md:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#c9a45c]">
                Question
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#f7efe3] md:text-4xl">
                今日はどんな焼肉気分ですか？
              </h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {moodOptions.map((option) => {
                  const isSelected = option.label === selectedMood.label;

                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setSelectedMood(option)}
                      className={`cursor-pointer rounded-lg border px-4 py-3 text-left text-sm font-semibold leading-6 transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#e0b85a] ${
                        isSelected
                          ? "border-[#e0b85a] bg-[#c9a45c]/18 text-[#fff4d1]"
                          : "border-white/10 bg-white/[0.035] text-[#d6c7ad] hover:border-[#c9a45c]/55 hover:bg-white/[0.07]"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="rounded-lg border border-[#c9a45c]/25 bg-black/35 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#c9a45c]">
                Recommendation
              </p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight text-[#f7efe3] md:text-5xl">
                {selectedMood.result}
              </p>
              <p className="mt-5 text-sm leading-8 text-[#d6c7ad]">{selectedMood.note}</p>
              <div className="mt-7 h-px bg-gradient-to-r from-transparent via-[#c9a45c]/60 to-transparent" />
              <p className="mt-6 text-sm leading-8 text-[#f2d690]">
                焼き始めは塩で輪郭を見て、二枚目からたれや薬味を合わせると、同じ部位でも表情の違いが楽しめます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
