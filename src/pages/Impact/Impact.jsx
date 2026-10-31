import { useEffect, useRef, useState } from "react";
import world from "../../assets/impact-world.webp";
import people from "../../assets/impact-people.webp";
import community from "../../assets/impact-community.webp";
import { burden, benefits, progress } from "./content.js";
import {
  ImpactIcon,
  WorldFramework,
  StageComparison,
  HospitalGraphic,
} from "./ImpactGraphics.jsx";
import styles from "./Impact.module.css";

const c = (value) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

export default function Impact() {
  const root = useRef(null);
  const [scenarioOpen, setScenarioOpen] = useState(true);

  useEffect(() => {
    const page = root.current;
    // The observer only starts entrances. Repeating CSS effects run independently.
    if (!page || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.dataset.entered = "true";
          observer.unobserve(target);
        });
      },
      { threshold: 0.12 },
    );
    page
      .querySelectorAll("[data-reveal], [data-impact-zone]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={c("page")} ref={root}>
      <section className={c("hero")} aria-labelledby="impact-title">
        <div className={c("hero-art")}>
          <div className={c("hero-illustration")}>
            <img
              src={world}
              width="1536"
              height="1024"
              alt="Watercolor illustration of a diverse global community with a subtle world map; fictional people"
            />
          </div>
          <WorldFramework />
          {/* <div className={c("hero-note")} aria-hidden="true">
            <ImpactIcon type="globe" />
            <div>
              <span>Earlier attention</span>
              <i>
                <b />
              </i>
            </div>
          </div> */}
        </div>
        <div className={c("wrap hero-content")}>
          <div className={c("hero-copy")}>
            <p className={c("label")}>Our impact / Why earlier matters</p>
            <h1 id="impact-title">
              When care starts
              <br />
              <em>changes everything.</em>
            </h1>
            <p className={c("hero-intro")}>
              New cancer cases are projected to rise by 77% by 2050 compared
              with 2022. Health systems need to shift attention towards earlier
              risk assessment.
            </p>
            <a className={c("button")} href="#global-burden">
              Understand the challenge <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        {/* <div className={c("wrap hero-strip")}>
          <span>Global challenge</span>
          <span>Earlier attention</span>
          <span>Human purpose</span>
        </div> */}
      </section>

      <section
        className={c("burden section")}
        id="global-burden"
        aria-labelledby="burden-title"
      >
        <div className={c("wrap")}>
          <div className={c("section-heading split-heading")} data-reveal>
            <div>
              <p className={c("label")}>01 / The global cancer burden</p>
              <h2 id="burden-title">
                The scale of
                <br />
                <em>the challenge.</em>
              </h2>
            </div>
            <p>
              Behind every number is a person.
              <br />
              And a health system working to respond.
            </p>
          </div>
          <div className={c("stat-grid")}>
            {burden.map(([number, label, copy, index], i) => (
              <article className={c("stat")} key={label}>
                <div className={c("stat-top")}>
                  <span className={c("index")}>{index}</span>
                  <ImpactIcon type={["person", "case", "ribbon", "globe"][i]} />
                </div>
                <div
                  className={c("number-mask")}
                  data-reveal="number"
                  style={{ "--reveal-delay": `${i * 120}ms` }}
                >
                  <strong className={c("stat-value")} aria-label={number}>
                    {number.startsWith("INT ") ? (
                      <>
                        <small>INT</small>
                        <span>{number.slice(4)}</span>
                      </>
                    ) : (
                      number
                    )}
                  </strong>
                </div>
                <h3>{label}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className={c("source-line")}>
            Sources: GLOBOCAN 2022, IARC/WHO · JAMA Oncology, 2023
          </p>
        </div>
      </section>

      <section className={c("timing section")} aria-labelledby="timing-title">
        <div className={c("wrap timing-layout")}>
          <div className={c("timing-copy")} data-reveal>
            <p className={c("label")}>02 / Time changes the picture</p>
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
            {/* <div className={c("timing-note")}>
              <i aria-hidden="true" />
              <p>Approximate five-year survival by stage at diagnosis</p>
            </div> */}
          </div>
          <StageComparison />
        </div>
      </section>

      <section
        className={c("benefits section")}
        aria-labelledby="benefits-title"
      >
        <div className={c("wrap")}>
          <div className={c("section-heading")} data-reveal>
            <p className={c("label")}>03 / The intended difference</p>
            <h2 id="benefits-title">
              For health systems.
              <br />
              <em>For everyday lives.</em>
            </h2>
          </div>
          <div className={c("benefit-grid")}>
            {["nations", "people"].map((audience, i) => (
              <article
                className={c("benefit-card")}
                key={audience}
                data-reveal="card"
                style={{ "--reveal-delay": `${i * 120}ms` }}
                aria-labelledby={`impact-${audience}-title`}
              >
                <div className={c("benefit-art")}>
                  {audience === "nations" ? (
                    <HospitalGraphic />
                  ) : (
                    <div className={c("care-depth")}>
                      <img
                        className={c("care-illustration")}
                        src={people}
                        width="1536"
                        height="1024"
                        loading="lazy"
                        alt="Illustrated clinician discussing a care plan with an older woman and her son; fictional people"
                      />
                    </div>
                  )}
                </div>
                <div className={c("benefit-copy")}>
                  <p className={c("card-label")}>
                    {audience === "nations" ? "For nations" : "For people"}
                  </p>
                  <h3 id={`impact-${audience}-title`}>
                    {audience === "nations"
                      ? "A lighter burden on health systems."
                      : "Clarity, comfort and a plan."}
                  </h3>
                  <ol className={c("benefit-list")}>
                    {benefits[audience].map(([title, copy], index) => (
                      <li key={title}>
                        <span aria-hidden="true">0{index + 1}</span>
                        <div>
                          <h4>{title}</h4>
                          <p>{copy}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={c("value section")} aria-labelledby="value-title">
        <div className={c("wrap")}>
          <div className={c("section-heading split-heading")} data-reveal>
            <div>
              <p className={c("label")}>04 / The value of earlier attention</p>
              <h2 id="value-title">
                Acting earlier saves
                <br />
                <em>lives and resources.</em>
              </h2>
            </div>
            <p className={c("scenario-kicker")}>India / Proposed scenario</p>
          </div>
          <div className={c("cost-board")} data-impact-zone>
            {[
              [
                "Early-stage treatment",
                "₹0.75",
                "Approximate cost per patient",
                "7.5%",
              ],
              ["Late-stage treatment", "₹10", "Up to, per patient", "100%"],
            ].map(([label, amount, copy, cost]) => (
              <div className={c("cost-block")} key={label}>
                <p className={c("cost-label")}>{label}</p>
                <div className={c("cost-amount")}>
                  <strong>{amount}</strong>
                  <span>lakh</span>
                </div>
                <p className={c("cost-caption")}>{copy}</p>
                <div className={c("cost-track")} aria-hidden="true">
                  <i style={{ "--cost": cost }} />
                </div>
              </div>
            ))}
          </div>
          <div className={c("scenario-board")}>
            <button
              type="button"
              className={c("scenario-trigger")}
              onClick={() => setScenarioOpen(!scenarioOpen)}
              aria-expanded={scenarioOpen}
              aria-controls="impact-scenario-body"
            >
              Explore the proposed 10% reduction scenario{" "}
              <span aria-hidden="true">{scenarioOpen ? "−" : "+"}</span>
            </button>
            <div
              className={c("scenario-collapse")}
              data-open={scenarioOpen}
              aria-hidden={!scenarioOpen}
              id="impact-scenario-body"
            >
              <div className={c("scenario-inner")}>
                <div className={c("scenario-content")}>
                  <p>If new cases fell by just 10%,</p>
                  <div>
                    <strong>~160,000</strong>
                    <p>people spared annually</p>
                  </div>
                  <div>
                    <strong>~₹4,800 crore</strong>
                    <p>
                      annual treatment costs saved
                      <br />
                      (about US$550 million, as supplied)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p className={c("projection-note")}>
            Illustrative projection, not measured Salt Lick results. Source and
            methodology approval pending.
          </p> */}
        </div>
      </section>

      <section className={c("section")} aria-labelledby="progress-title">
        <div className={c("wrap progress-layout")}>
          <div className={c("progress-intro")} data-reveal>
            <p className={c("label")}>05 / Evidence, as it develops</p>
            <h2 id="progress-title">
              Results from
              <br />
              <em>the field.</em>
            </h2>
            <p>Verified pilot data will be published here when available.</p>
            <div className={c("progress-mark")} aria-hidden="true">
              <ImpactIcon type="report" />
              <span>
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
          <div className={c("progress-grid")}>
            {progress.map((label, i) => (
              <article
                key={label}
                data-reveal="metric"
                style={{ "--reveal-delay": `${i * 100}ms` }}
              >
                <span className={c("index")}>0{i + 1}</span>
                <strong aria-label="Data not yet available">—</strong>
                <h3>{label}</h3>
                <p>Not yet published</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={c("closing")} aria-labelledby="impact-closing-title">
        <div className={c("closing-art")}>
          <svg
            className={c("closing-scene")}
            viewBox="356 300 1180 724"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-labelledby="impact-community-art-title"
          >
            <title id="impact-community-art-title">
              Watercolor illustration of people outside a conceptual community
              centre; fictional people
            </title>
            <image href={community} x="0" y="0" width="1536" height="1024" />
          </svg>
        </div>
        <div className={c("wrap closing-content")}>
          <p className={c("label")}>06 / A shared ambition</p>
          <h2 id="impact-closing-title">
            A world where cancer risk
            <br className={c("desktop-break")} /> is checked as routinely
            <br className={c("desktop-break")} /> <em>as blood pressure.</em>
          </h2>
          <a className={c("button")} href="/partner-with-us">
            Partner With Us <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
