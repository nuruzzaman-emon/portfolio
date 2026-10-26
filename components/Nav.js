"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme || "dark";
    document.documentElement.dataset.theme = theme;
    setIsDark(theme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setIsDark(nextTheme === "dark");
  }

  return (
    <header className="site-nav">
      <div className="site-nav-inner wrap">
        <a className="brand" href="#main">{profile.shortName}</a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
