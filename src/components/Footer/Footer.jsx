import { useRef, useState} from "react";
import logo from "../../assets/saltlick-logo.png";
import "./Footer.css";

// const careers = "mailto:admin@saltlickhealthcare.com?subject=Careers%20enquiry";
export default function Footer() {
  const dialog = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [policy, setPolicy] = useState("");
  // function openPolicy(title) {
  //   setPolicy(title);
  //   dialog.current.showModal();
  // }
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a href="/" aria-label="Salt Lick Healthcare home">
            <img
              src={logo}
              width="1149"
              height="1369"
              alt="Salt Lick — Intelligence to Intercept"
            />
          </a>
          <address>
            Mumbai, India
            <br />
            <a href="mailto:admin@saltlickhealthcare.com">
              admin@saltlickhealthcare.com
            </a>
          </address>
        </div>
        <nav aria-label="Explore">
          <h2>Explore</h2>
          <a href="/what-is-salt-lick">What Is Salt Lick</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/our-centres">Our Centres</a>
          <a href="/impact">Impact</a>
        </nav>
        <nav aria-label="Organisation">
          <h2>Organisation</h2>
          <a href="/about-us">About Us</a>
          <a href="/our-team">Our Team</a>
          <a href="/about-us">Esperer Group</a>
          {/* <a href={careers} aria-label="Careers — enquire by email">
            Careers
          </a> */}
          <a href="/partner-with-us">Partner With Us</a>
        </nav>
        <div className="footer-partners">
          <h2>Group and partners</h2>
          <p>Esperer Group</p>
          <p>Health Voitho Technologies</p>
          <p>EIOMS</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Salt Lick Healthcare Pvt. Ltd.</p>
        {/* <div className="footer-policies">
          {["Privacy Policy", "Terms of Use", "Medical Disclaimer"].map(
            (title) => (
              <button key={title} onClick={() => openPolicy(title)}>
                {title}
              </button>
            ),
          )}
        </div> */}
        <p className="footer-disclaimer">
          Salt Lick provides cancer risk assessments, not diagnoses.
        </p>
      </div>
      {/* <p className="footer-review">
        Illustrations depict fictional people and conceptual locations.
      </p> */}
      <dialog
        ref={dialog}
        className="footer-dialog"
        aria-labelledby="policy-heading"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        {/* <h2 id="policy-heading">{policy}</h2> */}
        <p>
          {policy === "Medical Disclaimer"
            ? "Salt Lick provides cancer risk assessments, not diagnoses."
            : "Client-approved policy content is pending. This design preview does not yet include the published policy."}
        </p>
        <form method="dialog">
          <button className="button blue">Close</button>
        </form>
      </dialog>
    </footer>
  );
}
