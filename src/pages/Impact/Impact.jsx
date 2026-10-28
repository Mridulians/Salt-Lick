import { useEffect, useRef, useState } from "react";
import world from "../../assets/impact-world.webp";
import people from "../../assets/impact-people.webp";
import community from "../../assets/impact-community.webp";
import "./Impact.css";

// const IARC =
//   "https://www.iarc.who.int/news-events/global-cancer-burden-growing-amidst-mounting-need-for-services";
// const JAMA =
//   "https://jamanetwork.com/journals/jamaoncology/fullarticle/2801798";


const burden = [
  [
    "1 in 5",
    "Lifetime risk",
    "People expected to develop cancer during their lifetime.",
    "01",
  ],
  ["20M", "New cases", "Estimated new cases worldwide in 2022.", "02"],
  ["9.7M", "Lives lost", "Estimated cancer deaths worldwide in 2022.", "03"],
  [
    "INT $25.2T",
    "Economic cost",
    "Modeled cumulative global cost, 2020–2050; 2017 international dollars.",
    "04",
  ],
];
const benefits = {
  people: [
    ["Time for clarity", "A personal risk assessment in under 30 minutes."],
    [
      "Comfort matters",
      "Radiation-free screening with minimal discomfort, as described in the wireframe.",
    ],
    ["A next step", "A defined next step for each result."],
    ["Close to home", "Screening in trusted local hospitals."],
  ],
  nations: [
    [
      "Treatment costs",
      "Late-stage treatment costs three to five times more. Source and applicability require confirmation.",
    ],
    [
      "Capacity for care",
      "Fewer late-stage cases may reduce pressure on specialist hospitals.",
    ],
    ["Population insight", "Population data can show where risk is rising."],
    [
      "Built around existing care",
      "The approach is designed to use existing health workers and infrastructure.",
    ],
  ],
};
const progress = [
  "People screened",
  "High-risk individuals identified",
  "Referrals completed",
  "Salt Lick Centres active",
];

export default function Impact() {
  const root = useRef(null);
  const [audience, setAudience] = useState("people");
  useEffect(() => {
    const element = root.current;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("impact-in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.15 },
    );
    element
      .querySelectorAll("[data-impact-reveal]")
      .forEach((item) => observer.observe(item));
    let frame = 0;
    const update = () => {
      frame = 0;
      element.querySelectorAll("[data-impact-depth]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        const shift = Math.max(
          -22,
          Math.min(22, (innerHeight / 2 - rect.top - rect.height / 2) * 0.06),
        );
        item.style.setProperty("--impact-depth", shift + "px");
      });
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div className="impact-story" ref={root}>

      <section className="impact-hero" aria-labelledby="impact-title">
        <div className="impact-hero-scene" data-impact-depth>
          <img
            src={world}
            width="1536"
            height="1024"
            alt="Watercolor illustration of a diverse global community with a subtle world map; fictional people"
          />
        </div>
        <div className="impact-hero-shade" aria-hidden="true" />
        <div className="impact-hero-content impact-wrap">
          <p className="impact-eyebrow">Our impact / Why earlier matters</p>
          <h1 id="impact-title">
            When care starts
            <br />
            <em>changes everything.</em>
          </h1>
          <p className="impact-hero-intro">
            New cancer cases are projected to rise by 77% by 2050 compared with
            2022. Health systems need to shift attention towards earlier risk
            assessment.
          </p>
          <a className="impact-text-link" href="#global-burden">
            Understand the challenge <span aria-hidden="true">↓</span>
          </a>
          {/* <p className="impact-hero-source">
            Projection: IARC / WHO, GLOBOCAN 2022.{" "}
            <a href={IARC} target="_blank" rel="noopener noreferrer">
              Read the source ↗
            </a>
          </p> */}
        </div>
        <div className="impact-hero-strip">
          <span>Global challenge</span>
          <span>Earlier attention</span>
          <span>Human purpose</span>
        </div>
      </section>

      <section
        className="impact-burden impact-wrap"
        id="global-burden"
        aria-labelledby="burden-title"
      >
        <div className="impact-heading-row" data-impact-reveal>
          <div>
            <p className="impact-eyebrow">01 / The global cancer burden</p>
            <h2 id="burden-title">
              The scale of
              <br />
              the challenge.
            </h2>
          </div>
          <p>
            Behind every number is a person.
            <br />
            And a health system working to respond.
          </p>
        </div>
        <div className="impact-stat-grid">
          {burden.map(([number, label, copy, index]) => (
            <article className="impact-stat" key={label} data-impact-reveal>
              <span className="impact-stat-index">{index}</span>
              <strong>{number}</strong>
              <h3>{label}</h3>
              <p>{copy}</p>
              <div className="impact-stat-art" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} style={{ "--bar": i }} />
                ))}
              </div>
            </article>
          ))}
        </div>
        {/* <div className="impact-source-line">
          Sources:{" "}
          <a href={IARC} target="_blank" rel="noopener noreferrer">
            GLOBOCAN 2022 · IARC / WHO ↗
          </a>
          <span>and</span>
          <a href={JAMA} target="_blank" rel="noopener noreferrer">
            JAMA Oncology (2023) ↗
          </a>
        </div> */}
      </section>

      <section className="impact-timing" aria-labelledby="timing-title">
        <div className="impact-wrap impact-timing-layout">
          <div className="impact-timing-copy" data-impact-reveal>
            <p className="impact-eyebrow">02 / Time changes the picture</p>
            <h2 id="timing-title">
              The same disease.
              <br />A different moment.
              <br />
              <em>A different ending.</em>
            </h2>
            <p>
              Survival can differ substantially by stage at diagnosis. Earlier
              risk assessment and a cancer diagnosis are different steps in
              care.
            </p>
            <div className="impact-timing-steps" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <figure className="impact-survival" data-impact-reveal>
            {/* <div className="impact-review-tag">
              Wireframe data · validation pending
            </div> */}
            <figcaption>
              Approximate five-year survival by stage at diagnosis
            </figcaption>
            <div className="impact-chart">
              {[
                ["Found early", 92],
                ["Spread nearby", 62],
                ["Spread widely", 12],
              ].map(([name, value], i) => (
                <div className="impact-chart-column" key={name}>
                  <div className="impact-chart-space">
                    <div
                      className={"impact-chart-bar impact-chart-bar-" + i}
                      style={{
                        "--height": value + "%",
                        "--delay": i * 0.18 + "s",
                      }}
                    >
                      <strong>~{value}%</strong>
                    </div>
                  </div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            {/* <p className="impact-chart-note">
              Illustrative figures supplied in the wireframe. Cancer type,
              population, study period, and source must be confirmed before
              publication. These are not all-cancer survival rates or Salt Lick
              outcomes.
            </p> */}
          </figure>
        </div>
      </section>

      <section
        className="impact-benefits impact-wrap"
        aria-labelledby="benefits-title"
      >
        <div className="impact-heading-row" data-impact-reveal>
          <div>
            <p className="impact-eyebrow">03 / The intended difference</p>
            <h2 id="benefits-title">
              For health systems.
              <br />
              For everyday lives.
            </h2>
          </div>
          <div
            className="impact-audience-switch"
            role="group"
            aria-label="Explore intended benefits"
          >
            <button
              aria-pressed={audience === "people"}
              onClick={() => setAudience("people")}
            >
              For people
            </button>
            <button
              aria-pressed={audience === "nations"}
              onClick={() => setAudience("nations")}
            >
              For nations
            </button>
          </div>
        </div>
        <div className="impact-benefit-layout">
          <figure className="impact-people-frame" data-impact-depth>
            <img
              src={people}
              width="1536"
              height="1024"
              loading="lazy"
              alt="Illustrated clinician discussing a care plan with an older woman and her son; fictional people"
            />
            {/* <figcaption>
              Illustrative care conversation · fictional people
            </figcaption> */}
            <div className="impact-frame-tab" aria-hidden="true" />
          </figure>
          <div
            className="impact-benefit-content"
            key={audience}
            aria-live="polite"
          >
            <h3>
              {audience === "people"
                ? "Clarity, comfort and a plan."
                : "A lighter burden on health systems."}
            </h3>
            <div className="impact-benefit-list">
              {benefits[audience].map(([title, copy], i) => (
                <article key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            {/* <p className="impact-small-note">
              Intended benefits and service descriptions from the wireframe;
              clinical and operational claims require approval.
            </p> */}
          </div>
        </div>
      </section>

      <section className="impact-value" aria-labelledby="value-title">
        <div className="impact-wrap">
          <div className="impact-heading-row" data-impact-reveal>
            <div>
              <p className="impact-eyebrow">
                04 / The value of earlier attention
              </p>
              <h2 id="value-title">
                Acting earlier saves
                <br />
                lives and resources.
              </h2>
            </div>
            {/* <p>
              The wireframe explores what earlier action could mean for people
              and treatment costs in India. These estimates are not measured
              Salt Lick results.
            </p> */}
          </div>
          <div className="impact-projection-board" data-impact-reveal>
            {/* <div className="impact-projection-heading">
              <span>India / Wireframe scenario</span>
              <span className="impact-review-tag">
                Client approval required
              </span>
            </div> */}
            <div className="impact-cost-layout">
              <div className="impact-cost-block">
                <span>Early-stage treatment</span>
                <strong>
                  ₹0.75 <small>lakh</small>
                </strong>
                <p>Approximate cost per patient</p>
                <div className="impact-cost-track">
                  <i style={{ "--cost": "7.5%" }} />
                </div>
              </div>
              <div className="impact-cost-block">
                <span>Late-stage treatment</span>
                <strong>
                  ₹10 <small>lakh</small>
                </strong>
                <p>Up to, per patient</p>
                <div className="impact-cost-track">
                  <i style={{ "--cost": "100%" }} />
                </div>
              </div>
            </div>
            <details className="impact-assumptions">
              <summary>
                Explore the proposed 10% reduction scenario{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <div className="impact-scenario">
                <p>If new cases fell by just 10%,</p>
                <div>
                  <strong>~160,000</strong>
                  <span>people spared annually</span>
                </div>
                <div>
                  <strong>~₹4,800 crore</strong>
                  <span>
                    annual treatment costs saved
                    <br />
                    (about US$550 million, as supplied)
                  </span>
                </div>
              </div>
              {/* <p>
                Unverified scenario: sources, baseline population, exchange
                rate, methodology, and assumptions are pending. Confirm whether
                it models prevention, earlier detection, or another
                intervention. Earlier detection does not itself establish a
                reduction in new cancer cases.
              </p> */}
            </details>
            {/* <p className="impact-projection-note">
              All amounts and projections in this panel require source and
              methodology approval before publication. Treatment costs vary;
              these are not quotes, guarantees, or demonstrated savings.
            </p> */}
          </div>
        </div>
      </section>

      <section
        className="impact-progress impact-wrap"
        aria-labelledby="progress-title"
      >
        <div className="impact-progress-intro" data-impact-reveal>
          <p className="impact-eyebrow">05 / Evidence, as it develops</p>
          <h2 id="progress-title">
            Results from
            <br />
            the field.
          </h2>
          <p>Verified pilot data will be published here when available.</p>
          {/* <span className="impact-data-status">
            <i aria-hidden="true" />
            Awaiting verified pilot data
          </span> */}
        </div>
        <div className="impact-progress-grid">
          {progress.map((label, i) => (
            <article key={label} data-impact-reveal>
              <span className="impact-metric-index">0{i + 1}</span>
              <strong aria-label="Data not yet available">—</strong>
              <h3>{label}</h3>
              <span className="impact-metric-status">Not yet published</span>
            </article>
          ))}
        </div>
      </section>

      <section
        className="impact-closing"
        aria-labelledby="impact-closing-title"
      >
        <div className="impact-closing-art" data-impact-depth>
          <img
            src={community}
            width="1536"
            height="1024"
            loading="lazy"
            alt="Watercolor illustration of people outside a conceptual community centre with Salt Lick signage"
          />
        </div>
        <div className="impact-closing-shade" aria-hidden="true" />
        <div className="impact-wrap impact-closing-copy">
          <p className="impact-eyebrow">06 / A shared ambition</p>
          <h2 id="impact-closing-title">
            A world where cancer risk is checked as routinely as blood pressure.
          </h2>
          <a className="button blue" href="/partner-with-us">
            Partner With Us <span aria-hidden="true">↗</span>
          </a>
          {/* <p className="impact-small-note">
            Conceptual illustration · not an actual centre.
          </p> */}
        </div>
      </section>
    </div>
  );
}
