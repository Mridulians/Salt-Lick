import Esperer from "../../assets/espererGroup_logo.png";
import Technology from "../../assets/healtLogo.png";
import knowledge from "../../assets/EIOMS_logo.png";
import "./GroupPartners.css";

const partners = [
  {
    name: "Esperer Group",
    role: "Parent Group",
    logo: Esperer,
    href: "https://www.espererworld.com/",
  },
  {
    name: "Health Voitho Technologies",
    role: "Technology Partner",
    logo: Technology,
    href: "https://www.healthvoitho.com/",
  },
  {
    name: "EIOMS",
    role: "Knowledge Partner",
    logo: knowledge,
    href: "https://www.espererworld.com/eioms",
  },
];

export default function GroupPartners() {
  return (
    <section className="group-partners" aria-labelledby="group-partners-title">
      <div className="group-partners-inner">
        <div className="group-partners-copy">
          <p className="group-partners-eyebrow">A part of Esperer Group</p>
          <h2 id="group-partners-title">
            A global vision for
            <br />a healthier tomorrow.
          </h2>
          <p className="group-partners-description">
            Salt Lick is part of Esperer Group, a global oncology innovation
            group working across early risk assessment, nutrition and research.
          </p>
          {/* <a className="group-partners-link" href="/about-us">
            Learn more about Esperer Group <span aria-hidden="true">→</span>
          </a> */}
        </div>
        <div className="group-partners-visual">
          <svg
            className="group-partners-wave"
            viewBox="0 0 800 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {Array.from({ length: 24 }, (_, i) => (
              <path
                key={i}
                d={`M-60 ${168 + i * 4} C100 ${-28 + i * 7} 210 ${38 + i * 6} 340 ${92 + i * 4} S600 ${-85 + i * 8} 720 ${30 + i * 4} S850 ${155 + i * 2} 900 ${80 + i * 4}`}
              />
            ))}
          </svg>
          <div className="group-partners-cards">
            {partners.map((partner) => (
              <a
                className="group-partner-card"
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} (opens in a new tab)`}
                key={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width="260"
                  height="100"
                />
                <p>{partner.role}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
