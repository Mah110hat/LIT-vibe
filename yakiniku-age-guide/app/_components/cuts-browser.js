"use client";

import { useMemo, useState } from "react";
import { cuts, filterCategories } from "../_data/yakiniku";
import CutCard from "./cut-card";

export default function CutsBrowser() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredCuts = useMemo(() => {
    if (activeCategory === "すべて") {
      return cuts;
    }

    return cuts.filter((cut) => cut.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="mb-9 flex gap-3 overflow-x-auto pb-3">
        {filterCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#e0b85a] ${
                isActive
                  ? "border-[#e0b85a] bg-[#e0b85a] text-[#140c07]"
                  : "border-[#c9a45c]/25 bg-black/35 text-[#d6c7ad] hover:border-[#c9a45c]/65 hover:bg-[#c9a45c]/10"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredCuts.map((cut) => (
          <CutCard key={cut.name} cut={cut} />
        ))}
      </div>
    </>
  );
}
