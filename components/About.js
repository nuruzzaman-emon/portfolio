import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Reveal as="section" className="section wrap" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">About</h2>
      <div className="section-body prose">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p className="muted">Based in {profile.location}.</p>
      </div>
    </Reveal>
  );
}
