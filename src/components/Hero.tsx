import { Arrow, Pakhta } from "./Symbols";

const POT_MOTIFS = [
  { x: 96, y: 160, s: 46 },
  { x: 176, y: 140, s: 50 },
  { x: 256, y: 164, s: 46 },
  { x: 128, y: 230, s: 50 },
  { x: 214, y: 226, s: 54 },
  { x: 292, y: 244, s: 40 },
  { x: 78, y: 252, s: 40 },
  { x: 170, y: 296, s: 44 },
];

/** Фарфоровый чайник с узором «пахта» */
function Teapot() {
  return (
    <svg
      viewBox="0 0 420 380"
      role="img"
      aria-label="Фарфоровый чайник с узбекским узором «пахта»"
      className="bob yq-pot-svg relative h-auto w-full max-w-[440px]"
    >
      <defs>
        <clipPath id="pot-body">
          <ellipse cx="200" cy="230" rx="126" ry="104" />
        </clipPath>
      </defs>
      <g className="steam" fill="none" stroke="#0E1B4D" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <path d="M372 104 C362 88 382 78 372 60" />
        <path d="M392 110 C382 92 402 82 392 64" />
        <path d="M352 110 C342 94 362 84 352 66" />
      </g>
      <ellipse cx="205" cy="346" rx="130" ry="14" fill="#0E1B4D" opacity="0.15" />
      <path d="M86 176 C24 176 26 262 92 264" fill="none" stroke="#0E1B4D" strokeWidth="22" strokeLinecap="round" />
      <path d="M86 176 C24 176 26 262 92 264" fill="none" stroke="#2340B8" strokeWidth="12" strokeLinecap="round" />
      <path
        d="M306 214 C346 206 360 170 374 120 L396 126 C384 196 360 248 312 262 Z"
        fill="#FFFFFF"
        stroke="#0E1B4D"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <ellipse cx="200" cy="230" rx="126" ry="104" fill="#FFFFFF" stroke="#0E1B4D" strokeWidth="6" />
      <g clipPath="url(#pot-body)">
        {POT_MOTIFS.map((m) => (
          <use key={`${m.x}-${m.y}`} href="#pakhta" x={m.x} y={m.y} width={m.s} height={m.s} />
        ))}
      </g>
      <path d="M90 196 C150 184 250 184 310 196" fill="none" stroke="#2340B8" strokeWidth="7" />
      <ellipse cx="200" cy="130" rx="72" ry="20" fill="#2340B8" stroke="#0E1B4D" strokeWidth="6" />
      <path d="M150 128 C160 100 240 100 250 128" fill="#FFFFFF" stroke="#0E1B4D" strokeWidth="6" />
      <circle cx="200" cy="96" r="16" fill="#F5A524" stroke="#0E1B4D" strokeWidth="6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="container-yq pb-[clamp(56px,7vw,96px)] pt-[clamp(32px,5vw,72px)]">
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-[26px]">
          <span className="yq-hero inline-flex items-center gap-2 self-start rounded-full border-2 border-ink bg-sky px-3.5 py-1.5 text-sm font-bold">
            <Pakhta size={18} />
            Чайная · Ташкент
          </span>

          <h1 className="yq-hero m-0 text-[clamp(56px,8vw,120px)] font-black leading-[0.92] tracking-[-0.045em]">
            Ещё одну{" "}
            <span className="relative inline-block text-cobalt">
              пиалу?
              <svg
                aria-hidden="true"
                viewBox="0 0 300 24"
                preserveAspectRatio="none"
                className="absolute inset-x-0 -bottom-3.5 h-5 w-full"
              >
                <path
                  className="yq-underline"
                  d="M4 16 C70 4 160 4 296 12"
                  fill="none"
                  stroke="#F5A524"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="yq-hero m-0 max-w-[520px] text-[clamp(17px,1.4vw,20px)] text-muted [text-wrap:pretty]">
            YAPROQ — чайная, где ko&apos;k choy заваривают по-настоящему: в фарфоровом чайнике, с кайтаришем и без
            спешки. А ещё холодные чаи, карак и свежая выпечка.
          </p>

          <div className="yq-hero flex flex-wrap gap-3.5">
            <a
              href="#menu"
              className="press inline-flex min-h-[58px] items-center gap-2.5 rounded-full border-[3px] border-ink bg-cobalt px-7 font-bold text-white shadow-sticker"
            >
              Смотреть меню
              <Arrow />
            </a>
            <a
              href="#brew"
              className="press inline-flex min-h-[58px] items-center rounded-full border-[3px] border-ink bg-white px-7 font-bold text-ink shadow-sticker"
            >
              Заварить свой чай
            </a>
          </div>
        </div>

        <div className="yq-pot relative flex min-w-0 flex-[1_1_440px] justify-center py-5">
          <div
            aria-hidden="true"
            className="yq-pot-bg absolute left-1/2 top-1/2 aspect-square w-[min(460px,92%)] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-sky"
          />
          <Teapot />

          <div className="lift yq-sticker absolute bottom-[8%] left-0 -rotate-[4deg] rounded-[18px] border-[3px] border-ink bg-white px-4 py-3.5 shadow-sticker">
            <div className="text-lg font-black">Ko&apos;k choy</div>
            <div className="text-sm text-muted">чайник на двоих</div>
            <div className="mt-1.5 text-[22px] font-black text-cobalt">18 000 сум</div>
          </div>
          <div className="yq-sticker absolute right-[2%] top-[6%] rotate-6 rounded-full border-[3px] border-ink bg-saffron px-4 py-2.5 text-[15px] font-bold shadow-sticker-sm">
            3 минуты — и готово
          </div>
          <span
            aria-hidden="true"
            className="yq-sticker absolute bottom-[4%] right-[4%] -rotate-6 font-hand text-[30px] text-cobalt"
          >
            наливаем с любовью
          </span>
        </div>
      </div>
    </section>
  );
}
