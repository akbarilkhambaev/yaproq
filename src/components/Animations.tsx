"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion";

/** Все анимации страницы на GSAP. Находит элементы по классам yq-*, ничего не рендерит. */
export default function Animations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const q = (sel: string) => gsap.utils.toArray<HTMLElement>(sel);

    const ctx = gsap.context(() => {
      // Первый экран: текст по очереди, подчёркивание рисуется, чайник и наклейки «прилетают»
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(q(".yq-hero"), { y: 50, opacity: 0, duration: 0.9, stagger: 0.12 });
      const line = document.querySelector<SVGPathElement>(".yq-underline");
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        intro.to(line, { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" }, 0.55);
      }
      intro.fromTo(
        q(".yq-pot-bg"),
        { scale: 0, xPercent: -50, yPercent: -50, x: 0, y: 0 },
        { scale: 1, xPercent: -50, yPercent: -50, duration: 0.9, ease: "back.out(1.6)", clearProps: "transform" },
        0.2
      );
      intro.from(q(".yq-pot-svg"), { opacity: 0, duration: 0.6 }, 0.45);
      intro.from(q(".yq-sticker"), { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(2.2)", clearProps: "transform" }, 0.9);

      // Чайник чуть отстаёт при прокрутке
      gsap.to(q(".yq-pot"), {
        y: 80,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });

      // Бегущая строка: ускоряется при прокрутке и едет обратно, если листать вверх
      const track = document.querySelector<HTMLElement>(".marquee");
      if (track) {
        gsap.set(track, { animation: "none" });
        const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
        ScrollTrigger.create({
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (st) => {
            const boost = Math.abs(st.getVelocity() / 300);
            const dir = st.direction < 0 ? -1 : 1;
            gsap.to(loop, { timeScale: gsap.utils.clamp(-6, 6, dir * (1 + boost)), duration: 0.3, overwrite: true });
            gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.3 });
          },
        });
      }

      // Заголовки секций
      q(".yq-head").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // Карточки меню падают с лёгким поворотом
      const cards = q("#menu article");
      gsap.set(cards, { y: 70, rotation: 3, opacity: 0 });
      ScrollTrigger.batch(cards, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            stagger: 0.08,
            clearProps: "transform",
          }),
      });

      // Конструктор: выбор выезжает слева, результат — справа
      gsap.from(q(".yq-fieldset"), {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: "#brew", start: "top 70%", once: true },
      });
      gsap.from(q(".yq-result"), {
        x: 80,
        rotation: 4,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#brew", start: "top 70%", once: true },
      });

      // Ритуал: карточки с разных сторон, цифры «подпрыгивают»
      q(".yq-step").forEach((el, i) => {
        const st = { trigger: "#ritual ol", start: "top 85%", once: true };
        gsap.from(el, { x: i % 2 ? 80 : -80, y: 40, opacity: 0, duration: 0.9, delay: i * 0.12, ease: "power3.out", clearProps: "transform", scrollTrigger: st });
        const num = el.querySelector(".yq-num");
        if (num)
          gsap.from(num, {
            scale: 0.2,
            opacity: 0,
            duration: 0.7,
            delay: 0.3 + i * 0.12,
            ease: "back.out(2.6)",
            transformOrigin: "left bottom",
            scrollTrigger: { ...st },
          });
      });

      // «Как найти»: плитки всплывают, узор крутится от прокрутки
      gsap.from(q(".yq-tile"), {
        y: 60,
        scale: 0.94,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.3)",
        clearProps: "transform",
        scrollTrigger: { trigger: "#visit", start: "top 75%", once: true },
      });
      gsap.to(q(".yq-spin"), {
        rotation: 180,
        ease: "none",
        scrollTrigger: { trigger: "#visit", start: "top bottom", end: "bottom top", scrub: true },
      });

      // Огромный логотип в подвале выезжает снизу
      gsap.from(q(".yq-word"), {
        yPercent: 60,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: "footer", start: "top 95%", end: "bottom bottom", scrub: true },
      });
    });

    // Пересчитать позиции после загрузки шрифтов
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);

    return () => ctx.revert();
  }, []);

  return null;
}
