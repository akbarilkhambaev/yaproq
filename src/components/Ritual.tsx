const STEPS = [
  {
    n: "1",
    title: "Налейте в пиалу",
    text: "Сразу после заварки наливаем первую пиалу — пить её ещё рано.",
    className: "bg-white -rotate-1",
    textClass: "text-muted",
    numClass: "text-cobalt",
  },
  {
    n: "2",
    title: "Верните в чайник",
    text: "Чай выливают обратно — так он перемешивается и заваривается ровно.",
    className: "bg-sky rotate-1",
    textClass: "text-muted",
    numClass: "text-cobalt",
  },
  {
    n: "3",
    title: "Повторите трижды",
    text: "После третьего раза чай готов. Пиалу наливают наполовину — чтобы почаще подливать гостю.",
    className: "bg-saffron -rotate-[0.5deg]",
    textClass: "text-ink",
    numClass: "text-ink",
    note: "так вкуснее!",
  },
];

export default function Ritual() {
  return (
    <section id="ritual" className="container-yq pt-[clamp(72px,9vw,120px)]">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="yq-head flex flex-col gap-4">
          <span className="chip-dark">Ритуал</span>
          <h2 className="h-section">
            Кайтариш: три раза
            <br />
            туда и обратно
          </h2>
        </div>
        <p className="yq-head m-0 max-w-[400px] text-muted">
          Так заваривают чай в Узбекистане: свежий чай переливают из чайника в пиалу и обратно, пока он не раскроется.
        </p>
      </div>

      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 p-0">
        {STEPS.map((step) => (
          <li
            key={step.n}
            className={`yq-step lift relative flex flex-col gap-3 rounded-3xl border-[3px] border-ink p-7 shadow-sticker-md ${step.className}`}
          >
            <span className={`yq-num text-[88px] font-black leading-[0.9] ${step.numClass}`}>{step.n}</span>
            <h3 className="m-0 text-2xl font-black">{step.title}</h3>
            <p className={`m-0 ${step.textClass}`}>{step.text}</p>
            {step.note && (
              <span aria-hidden="true" className="absolute right-[18px] top-3.5 rotate-[8deg] font-hand text-[28px]">
                {step.note}
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
