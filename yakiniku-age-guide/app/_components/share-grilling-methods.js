"use client";

import { useMemo, useState } from "react";
import { recipeFilters, sharedGrillRecipes } from "../_data/yakiniku";
import SectionHeader from "./section-header";

export default function ShareGrillingMethods() {
  const [activeRecipeFilter, setActiveRecipeFilter] = useState("すべて");
  const [recipes, setRecipes] = useState(sharedGrillRecipes);
  const [randomRecipe, setRandomRecipe] = useState(sharedGrillRecipes[0]);
  const [statusMessage, setStatusMessage] = useState("");
  const [draft, setDraft] = useState({
    title: "",
    author: "",
    cut: "タン",
    heat: "中火",
    time: "",
    sauce: "",
    note: "",
    steps: "",
  });

  const filteredRecipes = useMemo(() => {
    if (activeRecipeFilter === "すべて") {
      return recipes;
    }

    return recipes.filter((recipe) => recipe.cut === activeRecipeFilter);
  }, [activeRecipeFilter, recipes]);

  function updateDraft(field, value) {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function pickRandomRecipe() {
    const currentKey = randomRecipe ? `${randomRecipe.title}-${randomRecipe.author}` : "";
    const pool =
      recipes.length > 1
        ? recipes.filter((recipe) => `${recipe.title}-${recipe.author}` !== currentKey)
        : recipes;
    const nextRecipe = pool[Math.floor(Math.random() * pool.length)];

    setRandomRecipe(nextRecipe);
    setStatusMessage(`${nextRecipe.title} を選びました。`);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!draft.title.trim() || !draft.time.trim() || !draft.note.trim()) {
      setStatusMessage("タイトル、焼き時間、こだわりを入力してください。");
      return;
    }

    const steps = draft.steps
      .split("\n")
      .map((step) => step.trim())
      .filter(Boolean);

    const nextRecipe = {
      title: draft.title.trim(),
      author: draft.author.trim() || "焼肉好き",
      cut: draft.cut,
      heat: draft.heat,
      time: draft.time.trim(),
      sauce: draft.sauce.trim() || "塩",
      note: draft.note.trim(),
      steps: steps.length ? steps : ["網をよく熱する", "焼きすぎる前に皿へ移す"],
      likes: 0,
    };

    setRecipes((current) => [nextRecipe, ...current]);
    setRandomRecipe(nextRecipe);
    setActiveRecipeFilter("すべて");
    setDraft({
      title: "",
      author: "",
      cut: "タン",
      heat: "中火",
      time: "",
      sauce: "",
      note: "",
      steps: "",
    });
    setStatusMessage("焼き方をシェアしました。");
  }

  return (
    <section className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,164,92,0.12),transparent_26rem),radial-gradient(circle_at_84%_34%,rgba(139,30,22,0.22),transparent_30rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Shared Grill Notes"
          title="みんなの焼き方を、ひと皿の知恵に。"
          description="火加減、焼き時間、薬味、休ませ方。焼肉好きの小さな工夫を投稿カードとして残せる、焼き方共有スペースです。"
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <form onSubmit={handleSubmit} className="stone-panel rounded-lg p-6 md:p-8">
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#c9a45c]">
                Share
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#f7efe3]">
                焼き方を投稿する
              </h3>

              <div className="mt-7 grid gap-5">
                <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                  タイトル
                  <input
                    value={draft.title}
                    onChange={(event) => updateDraft("title", event.target.value)}
                    className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    placeholder="例: ハラミの片面強火焼き"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                    投稿者名
                    <input
                      value={draft.author}
                      onChange={(event) => updateDraft("author", event.target.value)}
                      className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                      placeholder="例: 赤身好き"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                    部位タイプ
                    <select
                      value={draft.cut}
                      onChange={(event) => updateDraft("cut", event.target.value)}
                      className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    >
                      {recipeFilters.slice(1).map((filter) => (
                        <option key={filter} value={filter} className="bg-[#120b07]">
                          {filter}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                    火加減
                    <select
                      value={draft.heat}
                      onChange={(event) => updateDraft("heat", event.target.value)}
                      className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    >
                      {["弱火", "中火", "中強火", "強火"].map((heat) => (
                        <option key={heat} value={heat} className="bg-[#120b07]">
                          {heat}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                    焼き時間
                    <input
                      value={draft.time}
                      onChange={(event) => updateDraft("time", event.target.value)}
                      className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                      placeholder="例: 表45秒、裏20秒"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                  おすすめの食べ方
                  <input
                    value={draft.sauce}
                    onChange={(event) => updateDraft("sauce", event.target.value)}
                    className="min-h-12 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 text-base font-medium text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    placeholder="例: 塩、わさび、レモン"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                  こだわり
                  <textarea
                    value={draft.note}
                    onChange={(event) => updateDraft("note", event.target.value)}
                    className="min-h-28 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 py-3 text-base font-medium leading-7 text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    placeholder="焼きすぎないポイントや香ばしく仕上げるコツ"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#f2d690]">
                  手順
                  <textarea
                    value={draft.steps}
                    onChange={(event) => updateDraft("steps", event.target.value)}
                    className="min-h-32 rounded-lg border border-[#c9a45c]/25 bg-black/35 px-4 py-3 text-base font-medium leading-7 text-[#f7efe3] outline-none transition placeholder:text-[#8f806c] focus:border-[#e0b85a] focus:ring-2 focus:ring-[#e0b85a]/30"
                    placeholder={"網をよく熱する\n表面に焼き目をつける\n皿で少し休ませる"}
                  />
                </label>

                <button
                  type="submit"
                  className="min-h-12 cursor-pointer rounded-full bg-gradient-to-r from-[#c9a45c] to-[#e0b85a] px-6 text-sm font-bold tracking-[0.14em] text-[#160d08] shadow-[0_16px_42px_rgba(201,164,92,0.2)] transition duration-200 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#f2d690]"
                >
                  焼き方をシェア
                </button>

                <p className="min-h-6 text-sm font-semibold text-[#d6c7ad]" aria-live="polite">
                  {statusMessage}
                </p>
              </div>
            </div>
          </form>

          <div>
            <div className="stone-panel mb-6 rounded-lg p-5 md:p-6">
              <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9a45c]">
                    Random Pick
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#f7efe3]">
                    今日の焼き方をランダムに選ぶ
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#d6c7ad]">
                    投稿された焼き方から一つ選びます。迷った夜の最初の一枚に。
                  </p>
                </div>
                <button
                  type="button"
                  onClick={pickRandomRecipe}
                  className="min-h-12 cursor-pointer rounded-full border border-[#e0b85a] bg-[#e0b85a] px-6 text-sm font-bold tracking-[0.12em] text-[#140c07] transition duration-200 hover:translate-y-[-2px] hover:shadow-[0_16px_38px_rgba(201,164,92,0.26)] focus:outline-none focus:ring-2 focus:ring-[#f2d690]"
                >
                  ランダムに選ぶ
                </button>
              </div>

              <div className="relative mt-6 rounded-lg border border-[#c9a45c]/25 bg-black/35 p-5" aria-live="polite">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#c9a45c]">
                      Selected Method
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold leading-tight text-[#f7efe3]">
                      {randomRecipe.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#8f806c]">
                      {randomRecipe.cut} / by {randomRecipe.author}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-[#d6c7ad] sm:min-w-52">
                    <p>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#c9a45c]">
                        Heat
                      </span>
                      {randomRecipe.heat}
                    </p>
                    <p>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#c9a45c]">
                        Time
                      </span>
                      {randomRecipe.time}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-8 text-[#d6c7ad]">{randomRecipe.note}</p>
              </div>
            </div>

            <div className="mb-6 flex gap-3 overflow-x-auto pb-3">
              {recipeFilters.map((filter) => {
                const isActive = activeRecipeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveRecipeFilter(filter)}
                    className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#e0b85a] ${
                      isActive
                        ? "border-[#e0b85a] bg-[#e0b85a] text-[#140c07]"
                        : "border-[#c9a45c]/25 bg-black/35 text-[#d6c7ad] hover:border-[#c9a45c]/65 hover:bg-[#c9a45c]/10"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {filteredRecipes.map((recipe) => (
                <article key={`${recipe.title}-${recipe.author}`} className="meat-card stone-panel rounded-lg p-6">
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9a45c]">
                          {recipe.cut}
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#f7efe3]">
                          {recipe.title}
                        </h3>
                      </div>
                      <span className="whitespace-nowrap rounded-full border border-[#c9a45c]/35 bg-[#c9a45c]/10 px-3 py-1 text-xs font-semibold text-[#f4d88a]">
                        {recipe.likes} 保存
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#8f806c]">by {recipe.author}</p>
                    <p className="mt-5 text-sm leading-8 text-[#d6c7ad]">{recipe.note}</p>

                    <div className="mt-6 grid gap-3 border-y border-[#c9a45c]/15 py-5 text-sm text-[#d6c7ad] sm:grid-cols-3">
                      <p>
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#c9a45c]">
                          Heat
                        </span>
                        {recipe.heat}
                      </p>
                      <p>
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#c9a45c]">
                          Time
                        </span>
                        {recipe.time}
                      </p>
                      <p>
                        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#c9a45c]">
                          Pairing
                        </span>
                        {recipe.sauce}
                      </p>
                    </div>

                    <ol className="mt-5 grid gap-3 text-sm leading-7 text-[#d6c7ad]">
                      {recipe.steps.map((step, index) => (
                        <li key={step} className="flex gap-3">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c9a45c]/35 text-xs font-bold text-[#e0b85a]">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
