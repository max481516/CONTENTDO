"use client";

import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

export default function OverlayScrollbarsProvider() {
  useEffect(() => {
    const os = OverlayScrollbars(document.body, {
      scrollbars: {
        autoHide: "scroll",
        clickScroll: true,
        theme: "os-theme-light",
      },
    });
    return () => {
      try {
        os?.destroy();
      } catch {}
    };
  }, []);

  return null;
}
