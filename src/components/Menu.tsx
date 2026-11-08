"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CATEGORY_BG, MENU, TABS, type TeaCategory } from "@/data/menu";
import { Piyola } from "./Symbols";
import { prefersReducedMotion } from "./motion";

export default function Menu() {
  const [tab, setTab] = useState<TeaCategory | "all">("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const items = MENU.filter((tea) => tab === "all" || tea.category === tab);

  // Смена вкладки — карточки перетасовываются с пружинкой
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!gridRef.current || prefersReducedMotion()) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll("article"),
      { y: 30, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.6)", clearProps: "transform" }
    );
  }, [tab]);

  return (
    <section id="menu" className="container-yq pt-[clamp(72px,9vw,120px)]">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
        <div className="yq-head flex flex-col gap-4">
          <span className="chip-dark">Меню</span>
          <h2 className="h-section">
            Чай на любое
            <br />
            настроение
          </h2>
        </div>
        <div role="group" aria-label="Фильтр меню" className="yq-head flex flex-wrap gap-2.5">
          {TABS.map((t) => {
            const active = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={active}
                onClick={() => setTab(t.id)}
                className={`min-h-[46px] cursor-pointer rounded-full border-[3px] border-ink px-[18px] text-[15px] font-bold ${
                  active ? "bg-ink text-white" : "press bg-white text-ink shadow-sticker-sm"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-6">
        {items.map((tea) => (
          <article
            key={tea.name}
            className="lift flex flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-white shadow-sticker-md"
          >
            <div
              className="relative flex h-[170px] items-center justify-center border-b-[3px] border-ink"
              style={{ background: CATEGORY_BG[tea.category] }}
            >
              <Piyola liquid={tea.liquid} className="h-auto w-[150px]" />
              {tea.tag && (
                <span className="absolute left-3.5 top-3.5 rounded-full border-2 border-ink bg-saffron px-2.5 py-1 text-[13px] font-bold">
                  {tea.tag}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1.5 px-5 pb-5 pt-[18px]">
              <h3 className="m-0 text-[22px] font-black tracking-[-0.02em]">{tea.name}</h3>
              <p className="m-0 flex-1 text-[15px] text-muted">{tea.note}</p>
              <div className="mt-2.5 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-cobalt">{tea.price} сум</span>
                <button
                  type="button"
                  aria-label={`Добавить «${tea.name}» в заказ`}
                  className="press flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border-[3px] border-ink bg-saffron text-ink shadow-sticker-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
