import Reveal from "@/components/Reveal";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Reveal as="section" className="section wrap" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">Skills</h2>
      <dl className="section-body skills">
        {skills.map((row) => (
          <div className="skill-row" key={row.group}>
            <dt>{row.group}</dt>
            <dd>
              <ul className="skill-chips">
                {row.items.map((item, i) => (
                  <li key={item} style={{ "--i": i }}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
