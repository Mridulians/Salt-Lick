import { useEffect, useRef, useState } from "react";
import consultation from "../../assets/how-consultation-official-logo.webp";
import faceScan from "../../assets/how-face-scan-official-logo.webp";
import laboratory from "../../assets/how-laboratory-official-logo.webp";
import "./HowItWorks.css";

const stages = [
  [
    "Register",
    "Digital sign-up and consent; national health ID where available.",
    "1 min",
    "Consent comes first",
  ],
  [
    "Risk profile",
    "Lifestyle, diet, tobacco, alcohol, and family history.",
    "2 min",
    "Your context matters",
  ],
  [
    "Face scan",
    "Contactless capture of 20+ vital signs.",
    "1–2 min",
    "A contactless moment",
  ],
  [
    "Biochemical panel",
    "Metabolic and cancer markers from a minimal sample.",
    "2–3 min",
    "Insights from a sample",
  ],
  [
    "Oral and breast scans",
    "Light-based imaging.",
    "2 min each",
    "Private, light-based scans",
  ],
  [
    "AI risk score",
    "Results combined into one score.",
    "Instant",
    "Signals brought together",
  ],
  [
    "Report",
    "Report delivered in print and via SMS, WhatsApp, and app.",
    "1 min",
    "Understand your next step",
  ],
];
const questions = [
  [
    "Is a Salt Lick screening a cancer diagnosis?",
    "No. It provides a cancer risk assessment. High-risk individuals are referred to a qualified clinician for diagnosis.",
  ],
  [
    "Is the screening safe?",
    "The screening described here uses light-based oral and breast scans and a minimal-sample biochemical panel. Your care team can explain what each assessment involves.",
  ],
  [
    "How long does it take?",
    "The screening is designed to be completed in under 30 minutes.",
  ],
  [
    "Who should be screened?",
    "Adults who feel healthy, especially those with lifestyle or family risk factors. Programmes define age ranges locally.",
  ],
  [
    "What happens to my data?",
    "The proposed system encrypts data, uses it with consent, and shares it with the care team. The detailed security and consent arrangements require technical and legal approval.",
  ],
];
const pathways = [
  [
    "Low risk",
    "Guidance for everyday life",
    "Personalised lifestyle and nutrition guidance and a date for the next screening.",
    "Guidance",
    "Next screening",
  ],
  [
    "Moderate risk",
    "Stay connected to care",
    "Clinician teleconsultation, monitoring, and repeat screening.",
    "Teleconsultation",
    "Monitoring",
  ],
  [
    "High risk",
    "A supported referral",
    "Priority referral to a partner hospital for diagnosis, tracked until the person reaches care.",
    "Priority referral",
    "Follow-up",
  ],
];
function StageArt({ stage }) {
  return (
    <div className={"how-stage-art art-" + stage} aria-hidden="true">
      <div className="how-art-back" />
      <div className="how-art-sheet">
        <span className="how-art-brand">Salt Lick</span>
        {stage === 0 ? (
          <>
            <b className="how-art-heading">Your consent</b>
            <i />
            <i />
            <span className="how-signature">✓</span>
          </>
        ) : stage === 1 ? (
          <>
            <b className="how-art-heading">Your profile</b>
            {["Lifestyle", "Family history", "Nutrition"].map((x) => (
              <div className="how-profile-row" key={x}>
                {x}
                <span>✓</span>
              </div>
            ))}
          </>
        ) : stage === 2 ? (
          <>
            <div className="how-face-outline">
              <span />
              <i />
            </div>
            <div className="how-scan-sweep" />
          </>
        ) : stage === 3 ? (
          <>
            <b className="how-art-heading">On-site analysis</b>
            <div className="how-sample-slots">
              <i />
              <i />
              <i />
            </div>
            <div className="how-analysis-track">
              <i />
            </div>
          </>
        ) : stage === 4 ? (
          <>
            <b className="how-art-heading">Light-based imaging</b>
            <div className="how-light-panel">
              <i />
              <i />
              <i />
            </div>
          </>
        ) : stage === 5 ? (
          <>
            <b className="how-art-heading">One risk assessment</b>
            <div className="how-signal-stack">
              <span>Profile</span>
              <span>Vital signs</span>
              <span>Scans & sample</span>
            </div>
          </>
        ) : (
          <>
            <b className="how-art-heading">Your report</b>
            <i />
            <i />
            <i />
            <span className="how-report-stamp">Next steps →</span>
          </>
        )}
      </div>
    </div>
  );
}
function Heading({ label, children, copy }) {
  return (
    <div className="how-heading" data-how-reveal>
      <div>
        <p className="how-label">{label}</p>
        <h2>{children}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export default function HowItWorks() {
  const [stage, setStage] = useState(0);
  const [pathway, setPathway] = useState(0);
  const root = useRef(null);
  useEffect(() => {
    const page = root.current;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("how-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    page
      .querySelectorAll("[data-how-reveal]")
      .forEach((el) => observer.observe(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      page.querySelectorAll("[data-how-depth]").forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty(
          "--how-depth",
          Math.max(
            -20,
            Math.min(20, (innerHeight / 2 - r.top - r.height / 2) * 0.065),
          ) + "px",
        );
      });
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="how-page" ref={root}>
      <section className="how-hero how-wrap" aria-labelledby="how-title">
        <div className="how-hero-copy">
          <p className="how-label">How it works / A visit with purpose</p>
          <h1 id="how-title">
            Act earlier,
            <br />
            <em>in a single visit.</em>
          </h1>
          <p>
            A gentle, radiation-free screening, designed to be completed in
            under 30 minutes — giving each person a picture of their cancer risk
            and a clear next step.
          </p>
          <a className="button blue" href="#screening-journey">
            Explore your visit <span aria-hidden="true">↓</span>
          </a>
          <div className="how-hero-note">Risk assessment, not a diagnosis.</div>
        </div>
        <div className="how-hero-scene" data-how-depth>
          <img
            src={consultation}
            width="1536"
            height="1024"
            alt="Watercolor clinician explaining a report to a visitor and his daughter"
          />
          <div className="how-visit-ticket" aria-hidden="true">
            <span>YOUR VISIT</span>
            <strong>
              Clarity.
              <br />
              Then a next step.
            </strong>
            <div>
              <i />
              <i />
              <i />
            </div>
            <small>Salt Lick</small>
          </div>
        </div>
        <div className="how-hero-strip">
          <span>01 / Understand your risk</span>
          <span>02 / Meet your care team</span>
          <span>03 / Know what comes next</span>
        </div>
      </section>
      <section
        className="how-screening"
        id="screening-journey"
        aria-labelledby="screening-title"
      >
        <div className="how-wrap">
          <Heading
            label="01 / The screening journey"
            copy="Seven connected steps, with your care team beside you. Select a stage to explore the visit."
          >
            <span id="screening-title">
              What happens during
              <br />a Salt Lick screening.
            </span>
          </Heading>
          <div
            className="how-stage-tabs"
            role="tablist"
            aria-label="Screening stages"
          >
            {stages.map(([name, , time], i) => (
              <button
                key={name}
                id={"stage-tab-" + i}
                role="tab"
                aria-selected={stage === i}
                tabIndex={stage === i ? 0 : -1}
                onKeyDown={(e) => {
                  let next;
                  if (e.key === "ArrowRight") next = (i + 1) % 7;
                  else if (e.key === "ArrowLeft") next = (i + 6) % 7;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = 6;
                  else return;
                  e.preventDefault();
                  setStage(next);
                  document.getElementById("stage-tab-" + next)?.focus();
                }}
                aria-controls="stage-panel"
                onClick={() => setStage(i)}
              >
                <span>0{i + 1}</span>
                <strong>{name}</strong>
                <small>{time}</small>
              </button>
            ))}
          </div>
          <div
            className="how-stage-panel"
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={"stage-tab-" + stage}
          >
            <StageArt key={stage} stage={stage} />
            <div className="how-stage-copy" key={"copy-" + stage}>
              <span className="how-stage-number">
                0{stage + 1} <small>/ 07</small>
              </span>
              <p className="how-label">{stages[stage][3]}</p>
              <h3>{stages[stage][0]}</h3>
              <p>{stages[stage][1]}</p>
              <span className="how-time">{stages[stage][2]}</span>
              <div className="how-stage-controls">
                <button
                  disabled={stage === 0}
                  onClick={() => setStage(stage - 1)}
                  aria-label="Previous screening stage"
                >
                  ←
                </button>
                <button
                  disabled={stage === 6}
                  onClick={() => setStage(stage + 1)}
                  aria-label="Next screening stage"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-face how-wrap" aria-labelledby="face-title">
        <div className="how-face-visual" data-how-depth>
          <img
            src={faceScan}
            width="1536"
            height="1024"
            loading="lazy"
            alt="Illustrated visitor using a contactless screening display with a clinician beside her"
          />
          <div className="how-scan-readout" aria-hidden="true">
            <span>Contactless assessment</span>
            <div className="how-wave-bars">
              {Array.from({ length: 18 }, (_, i) => (
                <i key={i} style={{ "--bar": i }} />
              ))}
            </div>
            {/* <small>Illustrative signal display</small> */}
          </div>
        </div>
        <div data-how-reveal>
          <p className="how-label">02 / Face scan</p>
          <h2 id="face-title">
            Vital signs,
            <br />
            read in 60 seconds.
          </h2>
          <p className="how-lead">
            Look into a screen while AI analyses subtle skin-colour changes
            associated with blood flow.
          </p>
          <ul className="how-signal-list">
            {[
              "Heart rate and heart-rate variability.",
              "Oxygen saturation and breathing rate.",
              "Blood-pressure trends.",
              "Stress indicators and metabolic risk signals.",
            ].map((x, i) => (
              <li key={x}>
                <span>0{i + 1}</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="how-lab" aria-labelledby="lab-title">
        <div className="how-wrap">
          <Heading
            label="03 / Biochemical panel"
            copy="A compact analyser processes samples on site, without sending them away."
          >
            <span id="lab-title">
              A full lab,
              <br />
              from a minimal sample.
            </span>
          </Heading>
          <div className="how-lab-composition">
            <div className="how-lab-image" data-how-depth>
              <img
                src={laboratory}
                width="1536"
                height="1024"
                loading="lazy"
                alt="Watercolor laboratory team working with a compact on-site sample analyser"
              />
            </div>
            <div className="how-lab-index">
              {[
                [
                  "01",
                  "Metabolic health",
                  "Blood sugar, HbA1c, and metabolic markers.",
                ],
                ["02", "Organ health", "Heart, kidney, and liver panels."],
                [
                  "03",
                  "Tumour markers",
                  "Markers associated with breast, lung, prostate, gastrointestinal, and oral cancers.",
                ],
                [
                  "04",
                  "Nutritional status",
                  "Vitamins and nutritional status.",
                ],
              ].map(([n, title, copy]) => (
                <article key={n} data-how-reveal>
                  <span>{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="how-light how-wrap" aria-labelledby="light-title">
        <Heading label="04 / Radiation-free scans">
          <span id="light-title">
            Seeing early change,
            <br />
            with light alone.
          </span>
        </Heading>
        <div className="how-light-grid">
          <article data-how-reveal>
            <div className="how-optical-art" aria-hidden="true">
              <div className="how-optical-device" />
              <div className="how-light-rays">
                <i />
                <i />
                <i />
              </div>
              <div className="how-optical-screen">
                <span>Optical view</span>
                <i />
              </div>
            </div>
            <span className="how-label">Oral scan</span>
            <h3>A closer look, with light.</h3>
            <p>Autofluorescent light highlights suspicious oral lesions.</p>
          </article>
          <article data-how-reveal>
            <div className="how-private-art" aria-hidden="true">
              <span>Salt Lick</span>
              <div className="how-private-door">
                <i />
              </div>
              <div className="how-curtain" />
              <small>Private screening suite</small>
            </div>
            <span className="how-label">Breast scan</span>
            <h3>Privacy at every step.</h3>
            <p>
              Optical transillumination is described as revealing abnormal
              blood-vessel patterns, cysts, and masses without X-rays or
              compression, in a private women-only space.
            </p>
          </article>
        </div>
      </section>
      <section className="how-pathways" aria-labelledby="path-title">
        <div className="how-wrap">
          <Heading
            label="05 / After the screening"
            copy="A risk result helps guide the next conversation. Diagnosis is made by a qualified clinician."
          >
            <span id="path-title">
              A clear next step
              <br />
              for every result.
            </span>
          </Heading>
          <div className="how-path-layout">
            <div className="how-path-choices">
              {pathways.map(([risk, title, copy], i) => (
                <button
                  key={risk}
                  aria-pressed={pathway === i}
                  onClick={() => setPathway(i)}
                >
                  <span>
                    0{i + 1} / {risk}
                  </span>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                  <b aria-hidden="true">↗</b>
                </button>
              ))}
            </div>
            <div className="how-report-folder" aria-live="polite">
              <div className="how-folder-tab">Your pathway</div>
              <div className="how-report-paper" key={pathway}>
                <span className="how-report-brand">Salt Lick</span>
                <small>Illustrative report · no patient data</small>
                <h3>{pathways[pathway][0]}</h3>
                <div className="how-paper-rule" />
                <p>{pathways[pathway][1]}</p>
                <div className="how-report-actions">
                  <span>
                    01 <strong>{pathways[pathway][3]}</strong>
                  </span>
                  <span>
                    02 <strong>{pathways[pathway][4]}</strong>
                  </span>
                </div>
                <div className="how-paper-sign">Your care team →</div>
              </div>
              <div className="how-folder-front" aria-hidden="true">
                A plan to take with you.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-tech how-wrap" aria-labelledby="tech-title">
        <div className="how-tech-intro" data-how-reveal>
          <p className="how-label">06 / Technology and data</p>
          <h2 id="tech-title">
            Clinical-grade technology.
            <br />
            Data that stays protected.
          </h2>
          <div className="how-tech-partners">
            <span>Health Voitho Technologies</span>
            <span>EIOMS</span>
          </div>
          {/* <p className="how-approval">
            Proposed capabilities — security, standards, consent, and
            integration statements require technical and legal approval.
          </p> */}
        </div>
        <div className="how-tech-grid">
          {[
            [
              "Explainable AI",
              "Risk scoring on the device, including offline operation and factors behind results.",
            ],
            [
              "Encrypted records",
              "Encryption at rest and in transit, plus a tamper-proof consent ledger.",
            ],
            [
              "Global standards",
              "HL7 FHIR integration with national health records.",
            ],
            [
              "Privacy by design",
              "Consent withdrawal and the stated 24-hour application across services.",
            ],
          ].map(([title, copy], i) => (
            <article key={title} data-how-reveal>
              <span className="how-tech-index">0{i + 1}</span>
              <div className={"how-tech-mark mark-" + i} aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="how-faq how-wrap" aria-labelledby="faq-title">
        <div data-how-reveal>
          <p className="how-label">07 / Your questions</p>
          <h2 id="faq-title">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="how-lead">
            Understanding the experience
            <br />
            before you arrive.
          </p>
        </div>
        <div className="how-faq-list">
          {questions.map(([q, a], i) => (
            <details key={q}>
              <summary>
                <span>0{i + 1}</span>
                {q}
                <b aria-hidden="true">+</b>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="how-final" aria-labelledby="final-title">
        <div className="how-wrap">
          <div className="how-final-ribbon" aria-hidden="true">
            <span>Understand</span>
            <i>→</i>
            <span>Assess</span>
            <i>→</i>
            <span>Act earlier</span>
          </div>
          <p className="how-label">08 / The next step, together</p>
          <h2 id="final-title">
            Bring Salt Lick screening
            <br />
            to your communities.
          </h2>
          <a className="button howItWorks blue" href="/partner-with-us">
            Partner With Us <span aria-hidden="true">↗</span>
          </a>
          <p className="how-disclaimer">
            Salt Lick provides cancer risk assessments, not diagnoses.
            <br />
            Diagnosis is made by a qualified clinician.
          </p>
        </div>
      </section>
    </div>
  );
}
