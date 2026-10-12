import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-name">
      <div className="hero-text">
        <p className="hero-chip rise" style={{ "--d": "0ms" }}>{profile.location}</p>
        <h1 id="hero-name" className="hero-name rise" style={{ "--d": "90ms" }}>
          {profile.name}
        </h1>
        <p className="hero-role rise" style={{ "--d": "180ms" }}>{profile.role}</p>
        <p className="hero-tagline rise" style={{ "--d": "270ms" }}>{profile.tagline}</p>
        <div className="hero-actions rise" style={{ "--d": "360ms" }}>
          <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener noreferrer">
            View resume
          </a>
          <a className="btn" href="#projects">See projects</a>
        </div>
      </div>

      <div className="hero-photo pop" style={{ "--d": "200ms" }}>
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(max-width: 760px) 70vw, 360px"
        />
      </div>
    </section>
  );
}
