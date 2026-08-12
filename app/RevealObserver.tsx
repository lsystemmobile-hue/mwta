"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const hero = document.querySelector<HTMLElement>(".hero");

    root.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        root.classList.toggle("hero-in-view", entry.isIntersecting);
        root.classList.add("whatsapp-ready");
      },
      { threshold: 0.08 },
    );

    const frame = window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
      if (hero) heroObserver.observe(hero);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      heroObserver.disconnect();
      root.classList.remove("js");
      root.classList.remove("hero-in-view");
      root.classList.remove("whatsapp-ready");
    };
  }, []);

  return null;
}
