import { useEffect, useRef, useState } from "react";
import community from "../../assets/what-community.webp";
import clinicians from "../../assets/what-clinicians.webp";
import nature from "../../assets/what-nature.webp";
import "./WhatIsSaltLick.css";

const signals = [
  "Lifestyle",
  "Family history",
  "Vital signs",
  "Blood chemistry",
  "Tissue changes",
];
const layers = [
  [
    "Contactless face scan",
    "60 seconds · 20+ vital signs",
    "A 60-second scan; more than 20 vital signs, including heart rate, heart-rate variability, oxygen saturation, breathing rate, blood-pressure trends, and stress indicators.",
    "01",
  ],
  [
    "Minimal-sample biochemical panel",
    "Metabolic health + tumour markers",
    "Metabolic health and tumour markers associated with breast, lung, prostate, gastrointestinal, and oral cancers.",
    "02",
  ],
  [
    "Radiation-free oral scan",
    "Autofluorescent light",
    "Autofluorescent light to identify suspicious changes in the mouth.",
    "03",
  ],
  [
    "Radiation-free breast scan",
    "Optical transillumination",
    "Optical transillumination to reveal abnormal blood-vessel patterns, cysts, and masses; described as taking place in a private, women-only space.",
    "04",
  ],
];
const differences = [
  [
    "Multi-signal",
    "Questionnaire, vital signs, biomarkers, and imaging assessed together.",
  ],
  ["Radiation-free", "Light-based oral and breast scans."],
  ["Results in minutes", "Risk report before the visitor leaves."],
  ["Works anywhere", "Offline operation and local-language support."],
  [
    "Clinician-guided",
    "Counselling, monitoring, or referral overseen by doctors.",
  ],
  [
    "Patented innovation",
    "The wireframe references Esperer Group patents, Health Voitho Technologies, and EIOMS. Patent scope and applicability require confirmation.",
  ],
];
const comparisons = [
  [
    "Risk history",
    "Patient recall and individual judgement",
    "Structured questionnaire and preliminary score",
  ],
  [
    "Vital signs",
    "Subtle changes may go unnoticed",
    "Contactless scan captures 20+ signals",
  ],
  [
    "Blood tests",
    "Results interpreted individually",
    "Metabolic and cancer markers read together",
  ],
  [
    "Oral and breast checks",
    "Specialist access and equipment may be required",
    "Light-based scans with AI support",
  ],
  ["Reporting", "Manual notes and waiting", "Digital report with a next step"],
];
export default function WhatIsSaltLick() {
  const root = useRef(null);
  const [early, setEarly] = useState(true);
  const [layer, setLayer] = useState(0);
  const [signal, setSignal] = useState(0);
  useEffect(() => {
    const page = root.current;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("what-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.13 },
    );
    page.querySelectorAll("[data-what-reveal]").forEach((el) => io.observe(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      page.querySelectorAll("[data-what-depth]").forEach((el) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty(
          "--what-depth",
          Math.max(
            -20,
            Math.min(20, (innerHeight / 2 - r.top - r.height / 2) * 0.06),
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
      io.disconnect();
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="what-page" ref={root}>
      <section className="what-hero what-wrap" aria-labelledby="what-title">
        <div className="what-hero-top">
          <div>
            <p className="what-label">
              What is Salt Lick / A different starting point
            </p>
            <h1 id="what-title">
              Salt Lick shifts
              <br />
              <em>the start line.</em>
            </h1>
          </div>
          <div className="what-hero-intro">
            <p>
              Salt Lick is an AI-enabled cancer risk assessment designed to
              identify risk before cancer becomes detectable — reading the whole
              person rather than one organ at a time.
            </p>
            <a className="button blue" href="/how-it-works">
              See How It Works <span aria-hidden="true">↗</span>
            </a>
            <small>Cancer risk assessment. Not a diagnosis.</small>
          </div>
        </div>
        <div className="what-community-scene" data-what-depth>
          <img
            src={community}
            width="1536"
            height="1024"
            alt="Conceptual watercolor of a diverse community arriving at a Salt Lick centre"
          />
          <div className="what-opening-panels" aria-hidden="true">
            <i />
            <i />
          </div>
          <div className="what-scene-label">
            <span>THE WHOLE PERSON</span>
            <strong>
              More context.
              <br />
              An earlier conversation.
            </strong>
          </div>
        </div>
      </section>
      <section className="what-gap" aria-labelledby="gap-title">
        <div className="what-wrap">
          <div className="what-heading" data-what-reveal>
            <div>
              <p className="what-label">01 / The intervention gap</p>
              <h2 id="gap-title">
                The gap isn't detection.
                <br />
                It's timing.
              </h2>
            </div>
            <p>
              Most care starts after risk has progressed, when prevention is
              harder and treatment is more likely. Salt Lick moves the start
              line to the reversible window.
            </p>
          </div>
          <div
            className="what-time-controls"
            aria-label="Compare the start of care"
          >
            <button aria-pressed={early} onClick={() => setEarly(true)}>
              Where Salt Lick starts
            </button>
            <button aria-pressed={!early} onClick={() => setEarly(false)}>
              Where care starts today
            </button>
          </div>
          <div className={"what-timeline " + (early ? "is-early" : "is-later")}>
            <div className="what-window">
              <span>Reversible window</span>
            </div>
            <div className="what-timeline-rail" />
            <div className="what-start-flag">
              <span>{early ? "Salt Lick starts" : "Care starts today"}</span>
              <i />
            </div>
            <div className="what-timeline-labels">
              <span>Risk signals emerge</span>
              <span>Cancer becomes detectable</span>
              <span>Diagnosis & care</span>
            </div>
          </div>
          <div className="what-gap-cards">
            <article data-active={!early}>
              <span>Today</span>
              <h3>Where care starts today.</h3>
              <p>
                Risk signals build up quietly. Routine care sees them in
                fragments. Action begins only once cancer is detectable and
                confirmed by diagnostic labs.
              </p>
            </article>
            <article data-active={early}>
              <span>Earlier</span>
              <h3>Where Salt Lick starts.</h3>
              <p>
                Salt Lick identifies risk before cancer becomes detectable. AI
                connects the signals while prevention can still change the
                course.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
        className="what-signals what-wrap"
        aria-labelledby="signals-title"
      >
        <div data-what-reveal>
          <p className="what-label">02 / Connecting the signals</p>
          <h2 id="signals-title">
            Risk signals exist early.
            <br />
            Today they stay fragmented.
          </h2>
          <p className="what-lead">
            Lifestyle, family history, vital signs, blood chemistry, and tissue
            changes each tell part of the story. Routine care may see these
            signals separately, and a single test may look normal while a
            broader pattern exists across results.
          </p>
          <p className="what-lead">
            Salt Lick's proprietary AI is designed to read signals together,
            cross-check them, and highlight people who may need attention first.
          </p>
        </div>
        <div className="what-signal-console">
          <div className="what-console-top">
            <span>One person. Connected context.</span>
            {/* <small>Illustrative model</small> */}
          </div>
          <div className="what-signal-inputs">
            {signals.map((name, i) => (
              <button
                aria-pressed={signal === i}
                key={name}
                onClick={() => setSignal(i)}
              >
                <span>0{i + 1}</span>
                {name}
                <b aria-hidden="true">→</b>
              </button>
            ))}
          </div>
          <div className="what-assembly" aria-hidden="true">
            {signals.map((_, i) => (
              <i key={i} style={{ "--tile": i }} />
            ))}
          </div>
          <div className="what-signal-output" aria-live="polite">
            <span>{signals[signal]} + the wider picture</span>
            <strong>Combined risk assessment</strong>
            <small>Context for clinician review · no sample score</small>
          </div>
        </div>
      </section>
      <section className="what-evidence" aria-labelledby="evidence-title">
        <div className="what-wrap">
          <div className="what-heading" data-what-reveal>
            <div>
              <p className="what-label">03 / Four layers of evidence</p>
              <h2 id="evidence-title">
                Four layers of evidence
                <br />
                in a single visit.
              </h2>
            </div>
            <p>
              Explore the four assessments that contribute to the whole-person
              picture.
            </p>
          </div>
          <div className="what-evidence-layout">
            <div className="what-evidence-art" aria-hidden="true">
              <div className="what-perspective-grid" />
              {layers.map(([name, , , n], i) => (
                <div
                  key={name}
                  className={
                    "what-evidence-slab " + (i === layer ? "selected" : "")
                  }
                  style={{ "--slab": i }}
                >
                  <span>{n}</span>
                  <strong>
                    {
                      [
                        "Vital signs",
                        "Biochemistry",
                        "Oral imaging",
                        "Breast imaging",
                      ][i]
                    }
                  </strong>
                  <i />
                </div>
              ))}
              {/* <div className="what-slab-base">A fuller picture</div> */}
            </div>
            <div className="what-evidence-cards">
              {layers.map(([name, sub, copy, n], i) => (
                <article key={name} className={layer === i ? "selected" : ""}>
                  <button
                    aria-expanded={layer === i}
                    aria-controls={"evidence-detail-" + i}
                    onClick={() => setLayer(i)}
                  >
                    <span>{n}</span>
                    <strong>{name}</strong>
                    <b aria-hidden="true">{layer === i ? "−" : "+"}</b>
                  </button>
                  <div id={"evidence-detail-" + i} hidden={layer !== i}>
                    <span>{sub}</span>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* <p className="what-approval">
            Medical and performance claims shown here are from the supplied
            wireframe and require formal approval before publication.
          </p> */}
        </div>
      </section>
      <section
        className="what-difference what-wrap"
        aria-labelledby="different-title"
      >
        <div className="what-difference-intro" data-what-reveal>
          <p className="what-label">04 / Why Salt Lick is different</p>
          <h2 id="different-title">
            Built from the ground up
            <br />
            for early risk assessment.
          </h2>
        </div>
        <div className="what-difference-grid">
          {differences.map(([title, copy], i) => (
            <article key={title} data-what-reveal>
              <div className={"what-fold-mark fold-" + i} aria-hidden="true">
                <i />
                <i />
              </div>
              <span className="what-index">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="what-clinicians" aria-labelledby="clinicians-title">
        <div className="what-wrap">
          <div className="what-clinician-intro">
            <div className="what-clinician-art" data-what-depth>
              <img
                src={clinicians}
                width="1536"
                height="1024"
                loading="lazy"
                alt="Fictional clinicians reviewing information together in a watercolor Salt Lick workspace"
              />
            </div>
            <div data-what-reveal>
              <p className="what-label">05 / Supporting clinicians</p>
              <h2 id="clinicians-title">
                Salt Lick does the sorting.
                <br />
                Doctors do the healing.
              </h2>
              <p className="what-lead">
                Salt Lick supports risk sorting and triage so clinicians can
                focus on diagnosis and treatment.
              </p>
              <div className="what-care-handoff" aria-hidden="true">
                <span>Risk context</span>
                <i>→</i>
                <span>Clinical judgement</span>
              </div>
            </div>
          </div>
          <div
            className="what-comparison-scroll"
            tabIndex="0"
            role="region"
            aria-label="Comparison of conventional workflows and Salt Lick"
          >
            <table>
              <caption>Supporting the care team</caption>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Traditional approach</th>
                  <th scope="col">With Salt Lick</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([area, before, after]) => (
                  <tr key={area}>
                    <th scope="row">{area}</th>
                    <td>{before}</td>
                    <td>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="what-approval">
            Proposed workflow comparison, subject to clinical approval. It does
            not establish diagnostic accuracy or superiority.
          </p>
        </div>
      </section>
      <section className="what-focus what-wrap" aria-labelledby="focus-title">
        <div data-what-reveal>
          <p className="what-label">06 / Cancers assessed</p>
          <h2 id="focus-title">
            Focused on the cancers
            <br />
            that affect the most lives.
          </h2>
          <p className="what-lead">
            The screening also reads diabetes and cardiovascular markers and may
            extend to other lifestyle diseases.
          </p>
          <p className="what-approval">
            Categories listed in the wireframe. Assessment scope and performance
            require clinical confirmation.
          </p>
        </div>
        <div className="what-cancer-index">
          {[
            "Oral",
            "Breast",
            "Cervical",
            "Lung",
            "Prostate",
            "Gastrointestinal",
          ].map((name, i) => (
            <div key={name} data-what-reveal>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
      <section className="what-nature" aria-labelledby="nature-title">
        <div className="what-nature-visual" data-what-depth>
          <img
            src={nature}
            width="1536"
            height="1024"
            loading="lazy"
            alt="Watercolor antelope visiting a natural mineral salt lick beside a pool"
          />
        </div>
        <div className="what-wrap">
          <div className="what-nature-copy" data-what-reveal>
            <p className="what-label">07 / The meaning of the name</p>
            <h2 id="nature-title">
              Inspired by nature's
              <br />
              instinct to stay well.
            </h2>
            <p>
              Animals visit natural salt licks for nutrients. Salt Lick takes
              inspiration from this instinct: an accessible place where
              communities can understand their health and act early.
            </p>
            <div className="what-nature-note">
              A name rooted in nature.
              <br />A purpose centred on people.
            </div>
          </div>
        </div>
      </section>
      <section
        className="what-final what-wrap"
        aria-labelledby="what-final-title"
      >
        <div>
          <p className="what-label">08 / From understanding to action</p>
          <h2 id="what-final-title">
            See how a Salt Lick
            <br />
            screening works.
          </h2>
        </div>
        <div>
          <div className="what-final-links">
            <a className="button blue" href="/how-it-works">
              How It Works <span aria-hidden="true">↗</span>
            </a>
            <a className="button what-outline" href="/partner-with-us">
              Partner With Us <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p>
            Salt Lick provides cancer risk assessments, not diagnoses.
            <br />
            Diagnosis is made by a qualified clinician.
          </p>
        </div>
      </section>
    </div>
  );
}
