import { useEffect, useRef, useState } from "react";
import community from "../../assets/what-community.webp";
import clinicians from "../../assets/what-clinicians.webp";
import nature from "../../assets/what-nature.webp";
import logo from "../../assets/saltlick-logo.png";
import { signals, layers, differences, comparisons } from "./content.js";
import { Icon, GapDiagram, SignalBoard, Device } from "./WhatVisuals.jsx";
import styles from "./WhatIsSaltLick.module.css";
const c = (value) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

export default function WhatIsSaltLick() {
  const root = useRef(null);
  const [early, setEarly] = useState(true);
  const [signal, setSignal] = useState(0);
  useEffect(() => {
    const page = root.current;
    // Only one-time entrances need an observer; ambient CSS motion runs independently.
    if (!page || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.entered = "true";
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    page
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className={c("page")} ref={root}>
      <section className={c("hero wrap")} aria-labelledby="what-title">
        <div className={c("hero-copy")}>
          <p className={c("label")}>
            What is Salt Lick / A different starting point
          </p>
          <h1 id="what-title">
            Salt Lick shifts
            <br />
            <em>the start line.</em>
          </h1>
          <p className={c("hero-intro")}>
            Salt Lick is an AI-enabled cancer risk assessment designed to
            identify risk before cancer becomes detectable — reading the whole
            person rather than one organ at a time.
          </p>
          <a className={c("button")} href="/how-it-works">
            See How It Works <span aria-hidden="true">↗</span>
          </a>
          {/* <small>Cancer risk assessment. Not a diagnosis.</small> */}
        </div>
        <div className={c("hero-art")}>
          <div className={c("hero-photo")}>
            <img
              src={community}
              width="1536"
              height="1024"
              alt="Conceptual watercolor of a diverse community arriving at a Salt Lick centre"
            />
            <img
              className={c("campus-logo")}
              src={logo}
              alt="Salt Lick"
              width="1149"
              height="1369"
            />
          </div>
          <div className={c("hero-corner corner-one")} aria-hidden="true" />
          <div className={c("hero-corner corner-two")} aria-hidden="true" />
          <div className={c("hero-note")}>
            <Icon type="chip" />
            <div>
              <span>THE WHOLE PERSON</span>
              <strong>
                More context.
                <br />
                An earlier conversation.
              </strong>
            </div>
            <i aria-hidden="true" />
          </div>
          {/* <div className={c("hero-evidence")} aria-hidden="true">
            <Icon type="heart" />
            <span>Vital signs</span>
            <i />
            <Icon type="bio" />
            <span>Blood chemistry</span>
            <i />
            <Icon type="tissue" />
            <span>Tissue changes</span>
          </div> */}
        </div>
      </section>

      <section className={c("gap section")} aria-labelledby="gap-title">
        <div className={c("wrap")}>
          <div className={c("heading split-heading")} data-reveal>
            <div>
              <p className={c("label")}>01 / The intervention gap</p>
              <h2 id="gap-title">
                The gap isn't detection.
                <br />
                <em>It's timing.</em>
              </h2>
            </div>
            <p>
              Most care starts after risk has progressed, when prevention is
              harder and treatment is more likely. Salt Lick moves the start
              line to the reversible window.
            </p>
          </div>
          <div
            className={c("timeline-controls")}
            aria-label="Compare the start of care"
          >
            <button aria-pressed={early} onClick={() => setEarly(true)}>
              Where Salt Lick starts
            </button>
            <button aria-pressed={!early} onClick={() => setEarly(false)}>
              Where care starts today
            </button>
          </div>
          <GapDiagram early={early} />
          <div className={c("comparison-cards")}>
            <article data-reveal data-active={!early}>
              <span className={c("index")}>Today</span>
              <h3>Where care starts today.</h3>
              <p>
                Risk signals build up quietly. Routine care sees them in
                fragments. Action begins only once cancer is detectable and
                confirmed by diagnostic labs.
              </p>
            </article>
            <article data-reveal data-active={early}>
              <span className={c("index")}>Earlier</span>
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

      <section className={c("signals section")} aria-labelledby="signals-title">
        <div className={c("wrap")}>
          <div className={c("signals-heading")}>
            <div data-reveal>
              <p className={c("label")}>02 / Connecting the signals</p>
              <h2 id="signals-title">
                Risk signals exist early.
                <br />
                <em>Today they stay fragmented.</em>
              </h2>
            </div>
            <div className={c("signals-copy")} data-reveal>
              <p>
                Lifestyle, family history, vital signs, blood chemistry, and
                tissue changes each tell part of the story. Routine care may see
                these signals separately, and a single test may look normal
                while a broader pattern exists across results.
              </p>
              <p>
                Salt Lick's proprietary AI is designed to read signals together,
                cross-check them, and highlight people who may need attention
                first.
              </p>
            </div>
          </div>
          <SignalBoard
            signals={signals}
            signal={signal}
            setSignal={setSignal}
          />
        </div>
      </section>

      <section
        className={c("evidence section")}
        aria-labelledby="evidence-title"
      >
        <div className={c("wrap")}>
          <div className={c("heading split-heading")} data-reveal>
            <div>
              <p className={c("label")}>03 / Four layers of evidence</p>
              <h2 id="evidence-title">
                Four layers of evidence
                <br />
                <em>in a single visit.</em>
              </h2>
            </div>
            <p>
              Explore the four assessments that contribute to the whole-person
              picture.
            </p>
          </div>
          <div className={c("evidence-grid")}>
            {layers.map(([name, sub, copy], i) => (
              <article key={name} className={c("evidence-card")} data-reveal>
                <div className={c("device-frame")}>
                  <span className={c("device-number")}>0{i + 1}</span>
                  <Device type={i} />
                  <span className={c("device-cross")} aria-hidden="true">
                    +
                  </span>
                </div>
                <div className={c("evidence-copy")}>
                  <span className={c("index")}>
                    0{i + 1} / {sub}
                  </span>
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={c("section wrap")} aria-labelledby="different-title">
        <div className={c("heading")} data-reveal>
          <p className={c("label")}>04 / Why Salt Lick is different</p>
          <h2 id="different-title">
            Built from the ground up
            <br />
            <em>for early risk assessment.</em>
          </h2>
        </div>
        <div className={c("difference-grid")}>
          {differences.map(([name, copy], i) => (
            <article key={name} data-reveal>
              <div className={c("difference-top")}>
                <Icon
                  type={
                    ["chip", "light", "clock", "network", "doctor", "shield"][i]
                  }
                />
                <span className={c("index")}>0{i + 1}</span>
              </div>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={c("clinicians section")}
        aria-labelledby="clinicians-title"
      >
        <div className={c("wrap")}>
          <div className={c("clinician-intro")}>
            <div className={c("clinician-art")}>
              <img
                src={clinicians}
                width="1536"
                height="1024"
                loading="lazy"
                alt="Fictional clinicians reviewing information together in a watercolor Salt Lick workspace"
              />
              <img
                className={c("clinician-logo")}
                src={logo}
                width="1149"
                height="1369"
                alt="Salt Lick"
              />
              {/* <div className={c("handoff-card")} aria-hidden="true">
                <Icon type="report" />
                <span>Risk context</span>
                <b>→</b>
                <Icon type="doctor" />
                <span>Clinical judgement</span>
              </div> */}
            </div>
            <div data-reveal>
              <p className={c("label")}>05 / Supporting clinicians</p>
              <h2 id="clinicians-title">
                Salt Lick does the sorting.
                <br />
                <em>Doctors do the healing.</em>
              </h2>
              <p>
                Salt Lick supports risk sorting and triage so clinicians can
                focus on diagnosis and treatment.
              </p>
            </div>
          </div>
          <div
            className={c("table-scroll")}
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
                {comparisons.map(([name, before, after]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td>{before}</td>
                    <td>{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <p className={c("approval")}>
            Proposed workflow comparison, subject to clinical approval. It does
            not establish diagnostic accuracy or superiority.
          </p> */}
        </div>
      </section>

      <section
        className={c("focus section wrap")}
        aria-labelledby="focus-title"
      >
        <div data-reveal>
          <p className={c("label")}>06 / Cancers assessed</p>
          <h2 id="focus-title">
            Focused on the cancers
            <br />
            <em>that affect the most lives.</em>
          </h2>
          <p>
            The screening also reads diabetes and cardiovascular markers and may
            extend to other lifestyle diseases.
          </p>
          {/* <p className={c("approval")}>
            Categories listed in the wireframe. Assessment scope and performance
            require clinical confirmation.
          </p> */}
        </div>
        <div className={c("cancer-grid")}>
          {[
            "Oral",
            "Breast",
            "Cervical",
            "Lung",
            "Prostate",
            "Gastrointestinal",
          ].map((name, i) => (
            <div key={name} data-reveal>
              <Icon
                type={
                  ["oral", "breast", "cervical", "lung", "prostate", "gut"][i]
                }
              />
              <span className={c("index")}>0{i + 1}</span>
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={c("nature")} aria-labelledby="nature-title">
        <div className={c("nature-visual")}>
          <img
            src={nature}
            width="1536"
            height="1024"
            loading="lazy"
            alt="Watercolor antelope visiting a natural mineral salt lick beside a pool"
          />
        </div>
        <div className={c("wrap")}>
          <div className={c("nature-copy")} data-reveal>
            <p className={c("label")}>07 / The meaning of the name</p>
            <h2 id="nature-title">
              Inspired by nature's
              <br />
              <em>instinct to stay well.</em>
            </h2>
            <p>
              Animals visit natural salt licks for nutrients. Salt Lick takes
              inspiration from this instinct: an accessible place where
              communities can understand their health and act early.
            </p>
            <div className={c("nature-note")}>
              A name rooted in nature.
              <br />A purpose centred on people.
            </div>
          </div>
        </div>
      </section>

      <section
        className={c("final section")}
        aria-labelledby="what-final-title"
      >
        <div className={c("wrap final-inner")}>
          <div data-reveal>
            <p className={c("label")}>08 / From understanding to action</p>
            <h2 id="what-final-title">
              See how a Salt Lick
              <br />
              <em>screening works.</em>
            </h2>
          </div>
          <div>
            <div className={c("actions")}>
              <a className={c("button")} href="/how-it-works">
                How It Works <span aria-hidden="true">↗</span>
              </a>
              <a className={c("button outline")} href="/partner-with-us">
                Partner With Us <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p>
              Salt Lick provides cancer risk assessments, not diagnoses.
              <br />
              Diagnosis is made by a qualified clinician.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
