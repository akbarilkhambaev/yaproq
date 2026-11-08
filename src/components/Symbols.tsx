/** Общие SVG-символы: узор «пахта» (хлопковая коробочка с узбекского фарфора) и листик-логотип.
 *  Подключаются один раз на странице, дальше используются через <use href="#pakhta" />. */
export default function Symbols() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <symbol id="pakhta" viewBox="-20 -20 40 40">
          <path
            d="M0 -15 C6 -15 9 -9 6 -5 C11 -7 16 -2 13 4 C11 9 5 9 3 6 C3 12 -3 15 -6 10 C-10 13 -16 8 -13 3 C-16 -2 -11 -8 -6 -5 C-9 -10 -6 -15 0 -15 Z"
            fill="#2340B8"
          />
          <circle cx="0" cy="-7" r="2.4" fill="#FFFFFF" />
          <circle cx="6" cy="1" r="2.4" fill="#FFFFFF" />
          <circle cx="-6" cy="1" r="2.4" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="2.4" fill="#FFFFFF" />
          <path d="M-3 13 Q0 19 4 14" fill="none" stroke="#0E1B4D" strokeWidth="1.8" strokeLinecap="round" />
        </symbol>
        <symbol id="leaf" viewBox="0 0 40 40">
          <path
            d="M6 34 C6 16 18 6 36 4 C36 22 26 34 6 34 Z"
            fill="#2340B8"
            stroke="#0E1B4D"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path d="M8 32 C16 24 24 16 32 8" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}

export const Pakhta = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} aria-hidden="true" className={className}>
    <use href="#pakhta" />
  </svg>
);

export const Leaf = ({ size = 30, className }: { size?: number | string; className?: string }) => (
  <svg width={size} height={size} aria-hidden="true" className={className}>
    <use href="#leaf" />
  </svg>
);

export const Arrow = ({ size = 18, diagonal = false }: { size?: number; diagonal?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={diagonal ? "M7 17L17 7M9 7h8v8" : "M5 12h14M13 6l6 6-6 6"} />
  </svg>
);

/** Пиала с узором; цвет чая задаётся снаружи */
export const Piyola = ({ liquid, className, liquidClassName }: { liquid: string; className?: string; liquidClassName?: string }) => (
  <svg viewBox="0 0 160 100" aria-hidden="true" className={className}>
    <ellipse cx="80" cy="92" rx="52" ry="6" fill="#0E1B4D" opacity="0.18" />
    <path
      d="M14 30 H146 C140 80 112 90 80 90 C48 90 20 80 14 30 Z"
      fill="#FFFFFF"
      stroke="#0E1B4D"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <use href="#pakhta" x="34" y="44" width="22" height="22" />
    <use href="#pakhta" x="69" y="50" width="22" height="22" />
    <use href="#pakhta" x="104" y="44" width="22" height="22" />
    <ellipse cx="80" cy="30" rx="66" ry="12" fill="#FFFFFF" stroke="#0E1B4D" strokeWidth="5" />
    <ellipse className={liquidClassName} cx="80" cy="31" rx="56" ry="7" fill={liquid} />
  </svg>
);
