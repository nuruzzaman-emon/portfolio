"use client";

import { useEffect, useRef, useState } from "react";

// Fades and lifts its content into place once it scrolls into view.
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
