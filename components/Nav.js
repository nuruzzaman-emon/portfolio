import { profile } from "@/data/portfolio";

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner wrap">
        <a className="brand" href="#main">{profile.shortName}</a>
        <nav aria-label="Sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
