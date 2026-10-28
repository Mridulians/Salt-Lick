import artwork from "../../assets/a-world-where.webp";
import "./AWorldWhere.css";

export default function AWorldWhere() {
  return (
    <section className="world-banner" aria-labelledby="world-heading">
      <div className="world-inner">
        <div className="world-copy">
          <h2 id="world-heading">
            A world where cancer risk is checked
            <br className="world-break" /> as routinely as blood pressure.
          </h2>
          <p>Join us in reducing the global cancer burden.</p>
          <div className="world-actions">
            <a className="world-button" href="/partner-with-us">
              Partner With Us <span aria-hidden="true">→</span>
            </a>
            <a
              className="world-button world-secondary"
              href="/about-us"
              aria-label="Careers — enquire by email"
            >
              Explore More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          className="world-art"
          src={artwork}
          width="1536"
          height="1024"
          loading="lazy"
          alt="Watercolor illustration of three people walking toward a curved, modern healthcare building; a conceptual location"
        />
      </div>
    </section>
  );
}
