import logo from "../../assets/saltlick-logo.png";
import espererLogo from "../../assets/espererGroup_logo.png";
import healthVoithoLogo from "../../assets/healtLogo.png";
import eiomsLogo from "../../assets/EIOMS_logo.png";
import "./Footer.css";

const exploreLinks = [
  ["/what-is-salt-lick", "What Is Salt Lick"],
  ["/how-it-works", "How It Works"],
  ["/our-centres", "Our Centres"],
  ["/impact", "Impact"],
];

const organisationLinks = [
  ["/about-us", "About Us"],
  ["/our-team", "Our Team"],
  ["/about-us", "Esperer Group ↗"],
  ["/partner-with-us", "Partner With Us"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
      <div className="footer-main">
        <section className="footer-identity" aria-label="Salt Lick contact">
          <a className="footer-logo" href="/" aria-label="Salt Lick Healthcare home">
            <img
              src={logo}
              width="1149"
              height="1369"
              alt="Salt Lick — Intelligence to Intercept"
            />
          </a>
          <p className="footer-tagline">The gap isn&apos;t detection. It&apos;s timing.</p>
          <address>
            Mumbai, India
            <br />
            <a href="mailto:admin@saltlickhealthcare.com">
              admin@saltlickhealthcare.com
            </a>
          </address>
        </section>

        <nav className="footer-nav" aria-label="Explore">
          <h2>Explore</h2>
          {exploreLinks.map(([url, label]) => (
            <a href={url} key={url}>
              {label}
            </a>
          ))}
        </nav>

        <nav className="footer-nav" aria-label="Organisation">
          <h2>Organisation</h2>
          {organisationLinks.map(([url, label]) => (
            <a href={url} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <section className="footer-network" aria-label="Group and partners">
          <div className="footer-network-group">
            <p className="footer-kicker">A part of</p>
            <a
              className="footer-partner-logo footer-partner-logo--group"
              href="/about-us"
              aria-label="Esperer Group"
            >
              <img src={espererLogo} alt="Esperer Group" width="2078" height="757" />
            </a>
          </div>
          <div className="footer-network-group">
            <p className="footer-kicker">Our partners</p>
            <div className="footer-partner-logos">
              <a
                className="footer-partner-logo"
                href="https://www.healthvoitho.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Voitho Technologies (opens in a new tab)"
              >
                <img
                  src={healthVoithoLogo}
                  alt="Health Voitho Technologies"
                  width="2048"
                  height="1365"
                />
              </a>
              <a
                className="footer-partner-logo"
                href="https://www.espererworld.com/eioms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EIOMS (opens in a new tab)"
              >
                <img src={eiomsLogo} alt="EIOMS" width="1214" height="552" />
              </a>
            </div>
            <p className="footer-role-note">Technology partner · Knowledge partner</p>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Salt Lick Healthcare Pvt. Ltd.</p>
        <p className="footer-disclaimer">
          Salt Lick provides cancer risk assessments, not diagnoses.
        </p>
      </div>
      </div>
    </footer>
  );
}
