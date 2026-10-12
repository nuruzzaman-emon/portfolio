import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Reveal as="section" className="section wrap contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">Contact</h2>
      <div className="section-body">
        <p className="contact-lead">Want to work together or just say hello? Message me on LinkedIn.</p>
        <a
          className="contact-main"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
        <p className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </p>
      </div>
      <p className="footer muted">
        &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
      </p>
    </Reveal>
  );
}
