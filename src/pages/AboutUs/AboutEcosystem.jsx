import saltLickLogo from "../../assets/saltlick-logo.png";
import healthLogo from "../../assets/healtLogo.png";
import eiomsLogo from "../../assets/EIOMS_logo.png";
import nutritionLogo from "../../assets/esperer-nutrition-logo.png";
import researchLogo from "../../assets/esperer-bioresearch-logo.png";
import styles from "./AboutEcosystem.module.css";

const businesses = [
  {
    name: "Salt Lick",
    logo: saltLickLogo,
    tag: "You are here",
    description: "AI cancer risk assessment",
    href: "/what-is-salt-lick",
  },
  {
    name: "Health Voitho Technologies",
    logo: healthLogo,
    tag: "Technology partner",
    description: "Medtech and development",
    href: "https://www.healthvoitho.com/",
  },
  {
    name: "EIOMS",
    logo: eiomsLogo,
    tag: "Knowledge partner",
    description: "Knowledge institute",
    href: "https://www.espererworld.com/eioms",
  },
  {
    name: "Esperer Nutrition",
    logo: nutritionLogo,
    description: "Clinically validated cancer nutrition",
    href: "https://www.esperernutrition.com/",
  },
  {
    name: "Esperer BioResearch",
    logo: researchLogo,
    description: "Cancer formulations and research",
    href: "https://espererbioresearch.com/",
  },
];

export default function AboutEcosystem() {
  return (
    <section
      className={styles.ecosystem}
      id="about-ecosystem"
      aria-labelledby="ecosystem-title"
    >
      <div className={styles.wrap}>
        <div data-about-reveal>
          <p className={styles.eyebrow}>One group. Multiple capabilities.</p>
          <h2 className={styles.title} id="ecosystem-title">
            The Esperer<br />Group ecosystem.
          </h2>
          <p className={styles.description}>
            Specialised group companies dedicated to cancer care and metabolic
            sciences, each strengthening the others.
          </p>
        </div>
        <div className={styles.grid}>
          {businesses.map(({ name, logo, tag, description, href }) => (
            <a
              className={`${styles.card}${tag ? ` ${styles.highlighted}` : ""}`}
              key={name}
              href={href}
              target={href.startsWith("https://") ? "_blank" : undefined}
              rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
              aria-label={href.startsWith("https://")
                ? `Visit ${name} website (opens in a new tab)`
                : "Explore Salt Lick"}
              data-about-reveal
            >
              <img
                src={logo}
                alt={name}
                width="160"
                height="86"
                loading="lazy"
              />
              {tag && <span className={styles.tag}>{tag}</span>}
              <p>{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
