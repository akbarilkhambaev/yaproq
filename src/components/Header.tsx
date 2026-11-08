import { Leaf } from "./Symbols";
import { CONTACTS } from "@/data/site";

const navLinks = [
  { href: "#menu", label: "Меню" },
  { href: "#brew", label: "Заварить" },
  { href: "#ritual", label: "Ритуал" },
  { href: "#visit", label: "Как найти" },
];

export default function Header() {
  return (
    <>
      <div className="bg-ink text-sm text-cream">
        <div className="container-yq flex flex-wrap justify-center gap-x-7 gap-y-1.5 py-2.5">
          <span>{CONTACTS.address}</span>
          <span>{CONTACTS.hoursLine}</span>
          <span>В зале, навынос и на сури</span>
        </div>
      </div>

      <header className="container-yq py-[18px]">
        <div className="flex items-center justify-between gap-5 rounded-full border-[3px] border-ink bg-white py-2.5 pl-5 pr-3 shadow-sticker">
          <a href="#top" className="flex items-center gap-2">
            <Leaf size={30} />
            <span className="text-2xl font-black tracking-[-0.02em]">YAPROQ</span>
          </a>
          <nav aria-label="Основное меню" className="hidden gap-7 text-base font-medium md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-cobalt">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#visit"
            className="press inline-flex min-h-[46px] items-center rounded-full border-[3px] border-ink bg-saffron px-5 text-[15px] font-bold text-ink shadow-sticker-sm"
          >
            Забронировать сури
          </a>
        </div>
      </header>
    </>
  );
}
