"use client";

import { useEffect, useRef, useState } from "react";

const CLOSE_DELAY_MS = 180;

/**
 * Drives a fixed-position flyout panel from a static toggle element that
 * already exists elsewhere in the DOM (the raw scraped navbar markup).
 * `triggerAttr` is a boolean data-attribute (e.g. "data-services-dropdown")
 * placed on that toggle's wrapper so this hook can find it.
 */
export function useHoverDropdown(triggerAttr: string) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const trigger = document.querySelector<HTMLElement>(`[${triggerAttr}="true"]`);
    const header = document.querySelector<HTMLElement>(".navbar-primary");
    if (!trigger || !header) return;

    const position = () => setTop(header.getBoundingClientRect().bottom - 1);

    const show = () => {
      window.clearTimeout(closeTimer.current);
      position();
      setOpen(true);
    };

    const hide = () => {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    trigger.addEventListener("mouseenter", show);
    trigger.addEventListener("mouseleave", hide);
    trigger.addEventListener("focus", show);
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(closeTimer.current);
      trigger.removeEventListener("mouseenter", show);
      trigger.removeEventListener("mouseleave", hide);
      trigger.removeEventListener("focus", show);
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [triggerAttr]);

  const keepOpen = () => window.clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  return { open, top, keepOpen, scheduleClose };
}
