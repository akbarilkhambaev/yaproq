import { Fragment } from "react";
import { Leaf } from "./Symbols";

const WORDS = ["Ko'k choy", "Карак", "Чай с айвой", "Чабрец", "Холодный чай", "Пиала за пиалой"];

export default function Marquee() {
  // Список повторён дважды, чтобы лента прокручивалась бесшовно
  const items = [...WORDS, ...WORDS];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y-[3px] border-ink bg-cobalt py-[18px] text-white">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap text-[28px] font-black uppercase tracking-[0.01em]">
        {items.map((word, i) => (
          <Fragment key={i}>
            <span>{word}</span>
            <Leaf size={30} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
