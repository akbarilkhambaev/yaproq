export type TeaCategory = "green" | "black" | "herbal" | "cold";

export interface Tea {
  category: TeaCategory;
  name: string;
  note: string;
  price: string;
  /** цвет чая в пиале */
  liquid: string;
  tag?: string;
}

export const TABS: { id: TeaCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "green", label: "Зелёный" },
  { id: "black", label: "Чёрный" },
  { id: "herbal", label: "Травяной" },
  { id: "cold", label: "Холодный" },
];

/** фон карточки за пиалой — по категории */
export const CATEGORY_BG: Record<TeaCategory, string> = {
  green: "#E9F0D2",
  black: "#F6E2D2",
  herbal: "#F3E0E6",
  cold: "#DCE5FF",
};

// Меню и цены — примерные (концепт)
export const MENU: Tea[] = [
  { category: "green", name: "Ko'k choy", note: "Классический зелёный в чайнике на двоих", price: "18 000", liquid: "#D9B63C", tag: "хит" },
  { category: "green", name: "Зелёный с чабрецом", note: "Ko'k choy с горным чабрецом", price: "22 000", liquid: "#C9AE3E" },
  { category: "green", name: "Жасминовый", note: "Цветочный и лёгкий, к сладкому", price: "24 000", liquid: "#E0C45A" },
  { category: "black", name: "Qora choy", note: "Крепкий чёрный, как дома", price: "18 000", liquid: "#8A3B12" },
  { category: "black", name: "Карак", note: "Чёрный чай с молоком и кардамоном", price: "26 000", liquid: "#B07A4A", tag: "новинка" },
  { category: "black", name: "Чёрный с айвой", note: "Сушёная айва и капля мёда", price: "25 000", liquid: "#9C4A1A" },
  { category: "herbal", name: "Мята и мёд", note: "Без кофеина — на вечер", price: "22 000", liquid: "#B9C46A" },
  { category: "herbal", name: "Шиповник", note: "Кисло-сладкий и согревающий", price: "20 000", liquid: "#C0412B" },
  { category: "cold", name: "Холодный с айвой", note: "Со льдом, лимоном и айвой", price: "28 000", liquid: "#E39A3B", tag: "летом" },
  { category: "cold", name: "Ледяной ko'k choy", note: "Зелёный со льдом и мятой", price: "26 000", liquid: "#CFC25A" },
];

/** Конструктор заварки */
export const BASES = [
  { id: "green", label: "Зелёный", color: "#D9B63C", minutes: 3, temp: "80 °C" },
  { id: "black", label: "Чёрный", color: "#8A3B12", minutes: 4, temp: "95 °C" },
  { id: "herbal", label: "Травяной", color: "#C0412B", minutes: 5, temp: "100 °C" },
] as const;

export type BaseId = (typeof BASES)[number]["id"];

export const ADDITIONS = ["Чабрец", "Лимон", "Мята", "Мёд", "Имбирь", "Кардамон", "Айва"];
export const MAX_ADDITIONS = 3;
