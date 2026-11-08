import { Leaf } from "./Symbols";

const links = [
  { href: "#menu", label: "Меню" },
  { href: "#brew", label: "Заварить" },
  { href: "#ritual", label: "Ритуал" },
  { href: "#visit", label: "Как найти" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-mist">
      <div className="container-yq flex flex-col gap-12 pb-10 pt-16">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_380px] flex-col gap-3.5">
            <h2 className="m-0 text-[clamp(28px,3vw,40px)] font-black leading-[1.05] tracking-[-0.03em] text-cream">
              Пришлём рецепт холодного чая с айвой
            </h2>
            {/* Форма-заглушка: подключить сервис рассылки */}
            <form className="flex max-w-[520px] flex-wrap gap-2.5">
              <label className="flex flex-[1_1_260px] flex-col gap-1.5">
                <span className="text-[13px] font-bold uppercase tracking-[0.06em]">Электронная почта</span>
                <input
                  type="email"
                  placeholder="you@mail.uz"
                  className="min-h-[54px] rounded-full border-[3px] border-cream bg-cream px-[18px] text-base font-medium text-ink"
                />
              </label>
              <button
                type="button"
                className="press min-h-[54px] cursor-pointer self-end rounded-full border-[3px] border-cream bg-saffron px-6 text-base font-bold text-ink"
              >
                Подписаться
              </button>
            </form>
          </div>
          <nav aria-label="Нижнее меню" className="flex flex-wrap content-start gap-x-8 gap-y-3.5 text-base">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-cream transition-colors hover:text-saffron">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          aria-hidden="true"
          className="yq-word flex items-center gap-[clamp(12px,2vw,28px)] text-[clamp(64px,15vw,220px)] font-black leading-[0.85] tracking-[-0.06em] text-cobalt"
        >
          <Leaf size="1em" className="flex-none" />
          YAPROQ
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-[#2B3770] pt-6 text-sm">
          <span>© 2026 YAPROQ · Ташкент</span>
          <span>Yaproq — «лист» по-узбекски</span>
        </div>
      </div>
    </footer>
  );
}
