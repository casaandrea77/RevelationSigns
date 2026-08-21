"use client";

import { useEffect, useState } from "react";

type SavedStudy = {
  open: number[];
  complete: boolean;
  reflection: string;
};

export function useStudyProgress(slug: string) {
  const storageKey = `revelation-signs:study:${slug}`;
  const [open, setOpen] = useState<number[]>([0]);
  const [complete, setComplete] = useState(false);
  const [reflection, setReflection] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SavedStudy>;
        if (Array.isArray(parsed.open)) setOpen(parsed.open);
        if (typeof parsed.complete === "boolean") setComplete(parsed.complete);
        if (typeof parsed.reflection === "string") setReflection(parsed.reflection);
      }
    } catch {
      // The study remains fully usable if browser storage is unavailable.
    } finally {
      setReady(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ open, complete, reflection } satisfies SavedStudy),
      );
    } catch {
      // Saving progress is an enhancement, not a requirement for reading.
    }
  }, [complete, open, ready, reflection, storageKey]);

  const toggle = (index: number) =>
    setOpen((items) =>
      items.includes(index)
        ? items.filter((item) => item !== index)
        : [...items, index],
    );

  return {
    open,
    complete,
    reflection,
    setComplete,
    setReflection,
    toggle,
  };
}
