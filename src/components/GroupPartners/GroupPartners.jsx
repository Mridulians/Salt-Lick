import Esperer from "../../assets/espererGroup_logo.png";
import "./GroupPartners.css";

export default function GroupPartners() {
  return (
    <section className="group-partners" aria-labelledby="group-partners-title">
      <div className="group-partners-inner">
        <div className="group-partners-identity">
          <p className="group-partners-eyebrow">A part of Esperer Group</p>
          <a
            className="group-partners-brand"
            href="https://www.espererworld.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Esperer Group (opens in a new tab)"
          >
            <img
              src={Esperer}
              alt="Esperer Group"
              width="2078"
              height="757"
            />
            <span className="group-partners-brand-arrow" aria-hidden="true">↗</span>
          </a>
          <p className="group-partners-parent-label">Our parent group</p>
        </div>

        <div className="group-partners-copy">
          <h2 id="group-partners-title">
            A global vision for
            <br />a healthier tomorrow.
          </h2>
          <p className="group-partners-description">
            Salt Lick is part of Esperer Group, a global oncology innovation
            group working across early risk assessment, nutrition and research.
          </p>
          <div className="group-partners-focus" aria-label="Group areas of focus">
            <span>Early risk assessment</span>
            <span>Nutrition</span>
            <span>Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
