"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ADDITIONS, BASES, MAX_ADDITIONS, type BaseId } from "@/data/menu";
import { prefersReducedMotion } from "./motion";

const CIRCUMFERENCE = 326.73; // 2π × 52

function mixHex(from: string, to: string, t: number) {
  const parse = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const a = parse(from);
  const b = parse(to);
  return (
    "#" +
    a
      .map((v, i) => Math.round(v + (b[i] - v) * t))
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
  );
}

const legendClass = "mb-3 p-0 text-sm font-bold uppercase tracking-[0.06em] text-mist";

export default function BrewBuilder() {
  const [baseId, setBaseId] = useState<BaseId>("green");
  const [adds, setAdds] = useState<string[]>([]);
  const [brewing, setBrewing] = useState(false);
  const [done, setDone] = useState(false);

  const base = BASES.find((b) => b.id === baseId) ?? BASES[0];
  const total = base.minutes * 60;
  const [remaining, setRemaining] = useState(total);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const liquidRef = useRef<SVGEllipseElement>(null);
  const cupRef = useRef<SVGSVGElement>(null);
  const mounted = useRef(false);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => stop, [stop]);

  // Новая основа — таймер заново
  const pickBase = (id: BaseId) => {
    stop();
    const next = BASES.find((b) => b.id === id) ?? BASES[0];
    setBaseId(id);
    setBrewing(false);
    setDone(false);
    setRemaining(next.minutes * 60);
  };

  const toggleAdd = (name: string) => {
    setAdds((prev) => {
      if (prev.includes(name)) return prev.filter((a) => a !== name);
      if (prev.length >= MAX_ADDITIONS) return prev;
      return [...prev, name];
    });
  };

  const start = () => {
    if (brewing) {
      stop();
      setBrewing(false);
      return;
    }
    if (done || remaining <= 0) setRemaining(total);
    setDone(false);
    setBrewing(true);
    stop();
    timer.current = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
  };

  // Время вышло — останавливаем таймер
  useEffect(() => {
    if (brewing && remaining === 0) {
      stop();
      setBrewing(false);
      setDone(true);
    }
  }, [brewing, remaining, stop]);

  const reset = () => {
    stop();
    setBrewing(false);
    setDone(false);
    setRemaining(total);
  };

  // Новая основа или добавка — чай в пиале «плещется»
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!liquidRef.current || prefersReducedMotion()) return;
    gsap.fromTo(
      liquidRef.current,
      { scaleY: 0.3, transformOrigin: "50% 50%" },
      { scaleY: 1, duration: 0.9, ease: "elastic.out(1, 0.35)" }
    );
  }, [baseId, adds]);

  // Таймер дошёл до нуля — пиала подпрыгивает
  useEffect(() => {
    if (!done || !cupRef.current || prefersReducedMotion()) return;
    gsap.fromTo(cupRef.current, { y: 0 }, { y: -18, duration: 0.25, yoyo: true, repeat: 3, ease: "power2.out" });
  }, [done]);

  const progress = done ? 1 : brewing || remaining < total ? 1 - remaining / total : 0;
  const liquid = mixHex("#EEF2FB", base.color, 0.2 + 0.8 * progress);
  const timeLabel = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`;
  const blendName =
    `${base.label} чай` + (adds.length ? ` с ${adds.map((a) => a.toLowerCase()).join(", ")}` : "");
  const full = adds.length >= MAX_ADDITIONS;

  return (
    <section id="brew" className="mt-[clamp(72px,9vw,120px)] border-t-[3px] border-ink bg-ink text-cream">
      <div className="container-yq flex flex-wrap items-stretch gap-12 py-[clamp(64px,8vw,112px)]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-8">
          <div className="yq-head flex flex-col gap-4">
            <span className="self-start rounded-full bg-saffron px-3 py-[5px] text-[13px] font-bold uppercase tracking-[0.06em] text-ink">
              Конструктор
            </span>
            <h2 className="h-section">
              Заварите
              <br />
              свой чайник
            </h2>
            <p className="m-0 max-w-[460px] text-mist">
              Выберите основу и до трёх добавок — покажем, как назовётся ваш чай и сколько его заваривать.
            </p>
          </div>

          <fieldset className="yq-fieldset m-0 border-0 p-0">
            <legend className={legendClass}>1 · Основа</legend>
            <div className="flex flex-wrap gap-2.5">
              {BASES.map((b) => {
                const active = b.id === baseId;
                return (
                  <button
                    key={b.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => pickBase(b.id)}
                    className={`inline-flex min-h-[52px] cursor-pointer items-center gap-2.5 rounded-full border-[3px] px-5 text-base font-bold ${
                      active ? "border-cream bg-cream text-ink" : "border-line bg-transparent text-cream"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-4 w-4 rounded-full border-2 ${active ? "border-ink" : "border-cream"}`}
                      style={{ background: b.color }}
                    />
                    {b.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="yq-fieldset m-0 border-0 p-0">
            <legend className={legendClass}>
              2 · Добавки · {adds.length} из {MAX_ADDITIONS}
            </legend>
            <div className="flex flex-wrap gap-2.5">
              {ADDITIONS.map((name) => {
                const on = adds.includes(name);
                const locked = !on && full;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={on}
                    disabled={locked}
                    onClick={() => toggleAdd(name)}
                    className={`inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-full border-[3px] px-4 text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-40 ${
                      on ? "border-saffron bg-saffron text-ink" : "border-line bg-transparent text-cream"
                    }`}
                  >
                    {on && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    )}
                    {name}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Результат и таймер */}
        <div className="yq-result flex min-w-0 flex-[1_1_420px] flex-col gap-[22px] rounded-[28px] border-[3px] border-cream bg-cream p-[clamp(24px,3vw,36px)] text-ink shadow-cobalt">
          <div className="relative flex min-h-[200px] items-center justify-center rounded-[20px] border-[3px] border-ink bg-sky">
            <svg ref={cupRef} viewBox="0 0 220 150" role="img" aria-label="Пиала с вашим чаем" className="h-auto w-[min(260px,80%)]">
              {brewing && (
                <g className="steam" fill="none" stroke="#0E1B4D" strokeWidth="4" strokeLinecap="round" opacity="0.7">
                  <path d="M90 40 C80 26 100 18 90 2" />
                  <path d="M112 40 C102 26 122 18 112 2" />
                  <path d="M134 40 C124 26 144 18 134 2" />
                </g>
              )}
              <ellipse cx="110" cy="140" rx="74" ry="7" fill="#0E1B4D" opacity="0.18" />
              <path
                d="M20 56 H200 C192 118 152 134 110 134 C68 134 28 118 20 56 Z"
                fill="#FFFFFF"
                stroke="#0E1B4D"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <use href="#pakhta" x="46" y="74" width="30" height="30" />
              <use href="#pakhta" x="95" y="82" width="30" height="30" />
              <use href="#pakhta" x="144" y="74" width="30" height="30" />
              <ellipse cx="110" cy="56" rx="90" ry="16" fill="#FFFFFF" stroke="#0E1B4D" strokeWidth="6" />
              <ellipse ref={liquidRef} cx="110" cy="57" rx="78" ry="10" fill={liquid} />
            </svg>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-muted">Ваш чай</span>
            <div aria-live="polite" className="text-[clamp(24px,2.4vw,32px)] font-black leading-[1.1] tracking-[-0.02em]">
              {blendName}
            </div>
            <span className="text-muted">
              Заваривать {base.minutes} мин при {base.temp}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <svg viewBox="0 0 130 130" role="img" aria-label={`Осталось ${timeLabel}`} className="h-[120px] w-[120px] flex-none">
              <circle cx="65" cy="65" r="52" fill="#FFFFFF" stroke="#DCE5FF" strokeWidth="12" />
              <circle
                cx="65"
                cy="65"
                r="52"
                fill="none"
                stroke="#2340B8"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={(CIRCUMFERENCE * (1 - progress)).toFixed(2)}
                transform="rotate(-90 65 65)"
              />
              <text x="65" y="73" textAnchor="middle" fontFamily="var(--font-rubik), sans-serif" fontWeight="900" fontSize="26" fill="#0E1B4D">
                {timeLabel}
              </text>
            </svg>
            <div className="flex flex-[1_1_160px] flex-col gap-3">
              <span aria-live="polite" className="font-bold">
                {done
                  ? "Готово! Теперь кайтариш — и наливайте."
                  : brewing
                    ? "Заваривается…"
                    : "Нажмите «Заварить», чтобы запустить таймер"}
              </span>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={start}
                  className="press min-h-[50px] cursor-pointer rounded-full border-[3px] border-ink bg-cobalt px-[22px] text-base font-bold text-white shadow-sticker-sm"
                >
                  {brewing ? "Пауза" : done ? "Ещё раз" : "Заварить"}
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="press min-h-[50px] cursor-pointer rounded-full border-[3px] border-ink bg-white px-[22px] text-base font-bold text-ink shadow-sticker-sm"
                >
                  Сначала
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
