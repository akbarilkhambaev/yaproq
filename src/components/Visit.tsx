import { Arrow } from "./Symbols";
import { CONTACTS } from "@/data/site";

const tile = "yq-tile flex flex-col rounded-[28px] border-[3px] border-ink p-7 shadow-sticker-lg";
const label = "text-sm font-bold uppercase tracking-[0.06em]";

export default function Visit() {
  return (
    <section id="visit" className="container-yq py-[clamp(72px,9vw,120px)]">
      <div className="yq-head mb-10 flex flex-col gap-4">
        <span className="chip-dark">Как найти</span>
        <h2 className="h-section">Заходите на пиалу</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Адрес */}
        <div className="yq-tile relative flex min-h-[300px] flex-col justify-between gap-7 overflow-hidden rounded-[28px] border-[3px] border-ink bg-cobalt p-[clamp(24px,3vw,40px)] text-white shadow-sticker-lg md:col-span-2">
          <svg aria-hidden="true" width="220" height="220" className="yq-spin absolute -bottom-[50px] -right-10 opacity-25">
            <use href="#pakhta" />
          </svg>
          <div className="relative flex flex-col gap-2">
            <span className={`${label} text-sky`}>Адрес</span>
            <span className="text-[clamp(28px,3vw,40px)] font-black leading-[1.05]">{CONTACTS.address}</span>
            <span className="text-sky">Ориентир: {CONTACTS.landmark}</span>
          </div>
          <a
            href={CONTACTS.routeUrl}
            className="press relative inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-full border-[3px] border-ink bg-cream px-6 font-bold text-ink shadow-sticker-sm"
          >
            Построить маршрут
            <Arrow diagonal />
          </a>
        </div>

        {/* Часы */}
        <div className={`${tile} gap-2 bg-white`}>
          <span className={`${label} text-muted`}>Открыто</span>
          <span className="text-4xl font-black leading-[1.05]">{CONTACTS.hoursTitle}</span>
          <span className="text-[28px] font-black text-cobalt">{CONTACTS.hoursNote}</span>
          <span className="mt-auto font-hand text-[26px] text-cobalt">чайник всегда горячий</span>
        </div>

        {/* Сури */}
        <div className={`${tile} gap-2.5 bg-saffron`}>
          <span className={label}>Для компании</span>
          <span className="text-[30px] font-black leading-[1.05]">Сури на 6–8 человек</span>
          <span>Топчан с подушками и большой чайник на всех. Бронируйте заранее.</span>
          <a
            href={CONTACTS.bookingUrl}
            className="press mt-auto inline-flex min-h-[48px] items-center self-start rounded-full border-[3px] border-ink bg-ink px-5 font-bold text-cream"
          >
            Забронировать
          </a>
        </div>

        {/* Навынос */}
        <div className={`${tile} gap-2.5 bg-sky`}>
          <span className={`${label} text-muted`}>Навынос</span>
          <span className="text-[30px] font-black leading-[1.05]">Холодный чай в бутылках</span>
          <span className="text-muted">Заберите с собой — с айвой, мятой или лимоном.</span>
        </div>

        {/* Соцсети */}
        <div className={`${tile} gap-2.5 bg-white`}>
          <span className={`${label} text-muted`}>Мы в соцсетях</span>
          <span className="text-[30px] font-black leading-[1.05]">{CONTACTS.instagram}</span>
          <span className="text-muted">Новые чаи, сезонные вкусы и фото с наших сури.</span>
        </div>
      </div>
    </section>
  );
}
