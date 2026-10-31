import { useEffect, useRef, useState } from "react";
import logo from "../../assets/saltlick-logo.png";
import esperer from "../../assets/espererGroup_logo.png";
import technologyLogo from "../../assets/healtLogo.png";
import knowledgeLogo from "../../assets/EIOMS_logo.png";
import human from "../../assets/medtech-human.webp";
import campus from "../../assets/medtech-campus.webp";
import consultation from "../../assets/medtech-consultation.webp";
import centres from "../../assets/illustrated-centres.webp";
import screening from "../../assets/illustrated-screening.webp";
import styles from "./Home.module.css";

// All homepage classes use Vite CSS Module names, including active states.
function homeClassName(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? "home-" + name)
    .join(" ");
}

// The observer starts entrances once. Ambient motion runs independently in CSS.
// Motion is decorative: it never changes selected inputs, copy, or clinical values.
function useHomepageMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const select = (name) => `.${styles[name]}`;
    const zones = [
      ...root.querySelectorAll(
        `[data-section], #signals-detail, #timeline-detail, ${select("stage-chart")}`,
      ),
    ];
    const revealGroups = [
      ["section-heading", "intro"],
      ["association-brand", "intro"],
      ["association-copy", "intro"],
      ["burden-heading", "intro"],
      ["advantage-copy", "intro"],
      ["signals-heading", "intro"],
      ["centres-copy", "intro"],
      ["comparison-card", "card"],
      ["screening-card", "card"],
      ["partner-card", "card"],
      ["impact-card", "card"],
      ["stat-number", "number"],
    ];
    const targets = new Set(zones);
    zones.forEach((zone) => {
      zone.dataset.motionZone = "";
    });
    revealGroups.forEach(([name, kind]) => {
      root.querySelectorAll(select(name)).forEach((element, index) => {
        element.dataset.reveal = kind;
        element.style.setProperty("--reveal-delay", `${(index % 4) * 120}ms`);
        targets.add(element);
      });
    });
    const observer = window.IntersectionObserver
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              target.dataset.motionVisible = String(isIntersecting);
              if (isIntersecting) target.dataset.entered = "true";
            });
          },
          { threshold: 0.12 },
        )
      : null;
    targets.forEach((target) => {
      if (observer) observer.observe(target);
      else target.dataset.entered = "true";
    });

    // Always on, with no preference-based disable switch or visibility-state gate.
    root.dataset.motion = "ready";
    return () => {
      observer?.disconnect();
      delete root.dataset.motion;
    };
  }, [rootRef]);
}

const signalData = [
  [
    "Lifestyle",
    "Lifestyle information is read alongside the other signals to build the broader picture.",
  ],
  [
    "Family history",
    "Family history adds context to the other information gathered during the visit.",
  ],
  [
    "Vital signs",
    "Vital signs form one layer of evidence, alongside the questionnaire, markers and scans.",
  ],
  [
    "Biomarkers",
    "Blood chemistry and markers are considered together with the other assessment inputs.",
  ],
  [
    "Oral scan",
    "Oral scan findings contribute to the combined assessment and the next step.",
  ],
  [
    "Breast scan",
    "Breast scan findings contribute to the combined assessment and the next step.",
  ],
];

const signalTracks = [
  "M245 40H350Q385 40 385 195H475",
  "M245 102H330Q370 102 370 195H475",
  "M245 164H350L415 195H475",
  "M245 226H350L415 195H475",
  "M245 288H330Q370 288 370 195H475",
  "M245 350H350Q385 350 385 195H475",
];
function IconLibrary() {
  return (
    <svg
      className={homeClassName("icon-library")}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M4 12h15m-6-6 6 6-6 6" />
        </symbol>
        <symbol id="i-life" viewBox="0 0 32 32">
          <path d="M8 27v-7l7-5 3 4h7M13 10l4-3 5 5M16 15l-4-3-5 4M17 19l-1 8" />
          <circle cx="23" cy="5" r="3" />
        </symbol>
        <symbol id="i-family" viewBox="0 0 32 32">
          <circle cx="10" cy="9" r="4" />
          <circle cx="23" cy="10" r="3" />
          <path d="M3 25v-3a7 7 0 0 1 14 0v3m3 0v-4a5 5 0 0 1 9 0v4M11 27h12" />
        </symbol>
        <symbol id="i-heart" viewBox="0 0 32 32">
          <path d="M16 27S3 18 3 10a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 8-13 17-13 17Z" />
          <path d="M5 16h7l3-6 4 12 3-6h5" />
        </symbol>
        <symbol id="i-bio" viewBox="0 0 32 32">
          <path d="M12 3h8m-6 0v12L5 27q-1 2 2 2h18q3 0 2-2L18 15V3M10 20h12" />
          <path d="M12 25h3m4-2h2" />
        </symbol>
        <symbol id="i-oral" viewBox="0 0 32 32">
          <path d="M6 7q3-6 10-3 7-3 10 3c3 6-2 21-5 21-2 0-2-10-5-10s-3 10-5 10C8 28 3 13 6 7Z" />
          <path d="M6 10q10 7 20 0" />
        </symbol>
        <symbol id="i-light" viewBox="0 0 32 32">
          <path d="M20 5l7 7-11 11-7-7 11-11ZM7 20l-3 3m7 1-1 5M4 17l-3 1" />
          <path d="m17 8 7 7" />
        </symbol>
        <symbol id="i-chip" viewBox="0 0 32 32">
          <rect x="7" y="7" width="18" height="18" rx="4" />
          <path d="M12 1v6m8-6v6M12 25v6m8-6v6M1 12h6m-6 8h6m18-8h6m-6 8h6" />
          <path d="m11 21 4-10h2l4 10m-8-4h6" />
        </symbol>
        <symbol id="i-report" viewBox="0 0 32 32">
          <path d="M8 3h12l6 6v20H6V3h2Zm12 0v7h6M11 15h10m-10 5h10m-10 5h6" />
        </symbol>
        <symbol id="i-hospital" viewBox="0 0 32 32">
          <path d="M8 29V4h16v25M3 29h26M12 29v-8h8v8M16 7v8m-4-4h8" />
          <path d="M2 29V14h6m16 0h6v15" />
        </symbol>
        <symbol id="i-network" viewBox="0 0 32 32">
          <rect x="11" y="3" width="10" height="8" rx="2" />
          <rect x="1" y="22" width="10" height="8" rx="2" />
          <rect x="21" y="22" width="10" height="8" rx="2" />
          <path d="M16 11v6H6v5m10-5h10v5" />
        </symbol>
        <linearGradient id="blue-wash" x1="0" x2="1" y2="1">
          <stop stopColor="#e5eff5" />
          <stop offset="1" stopColor="#accbdf" />
        </linearGradient>
        <linearGradient id="peach-wash" x1="0" x2="1" y2="1">
          <stop stopColor="#fdf5ed" />
          <stop offset="1" stopColor="#f2c39d" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function HomeHero() {
  const [slide, setSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (hovered) return;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % 3),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [slide, hovered]);
  const move = (direction) =>
    setSlide((current) => (current + direction + 3) % 3);
  const handleKeys = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  };
  return (
    <section
      className={homeClassName("hero-section")}
      id="hero"
      aria-label="Salt Lick highlights"
      aria-roledescription="carousel"
      data-section="Hero"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={handleKeys}
    >
      <div className={homeClassName("hero-slides wrap")}>
        <article
          className={homeClassName(
            "hero-slide" + (slide === 0 ? " active" : ""),
          )}
          data-slide="0"
          role="group"
          aria-roledescription="slide"
          aria-label="1 of 3"
          aria-hidden={slide !== 0}
          inert={slide !== 0}
        >
          <div className={homeClassName("hero-copy")}>
            <p className={homeClassName("eyebrow")}>
              <span></span>A breakthrough in cancer screening
            </p>
            <h1>
              The gap isn’t
              <br />
              detection.
              <br />
              <em>It’s timing.</em>
            </h1>
            <p className={homeClassName("lead")}>
              Most care begins after risk has already progressed. Salt Lick
              identifies cancer risk before cancer becomes detectable, while
              there is still time to change the course.
            </p>
            <div className={homeClassName("actions")}>
              <a className={homeClassName("button")} href="/what-is-salt-lick">
                Discover Salt Lick <span>↗</span>
              </a>
              <a
                className={homeClassName("button outline")}
                href="/partner-with-us"
              >
                Partner With Us <span>↗</span>
              </a>
            </div>
          </div>
          <div
            className={homeClassName("hero-visual human-visual")}
            role="img"
            aria-label="Illustrated human profile with labelled vital signs, biomarkers and AI assessment, representing health signals read together"
          >
            <div className={homeClassName("technical-grid")}></div>
            <img
              className={homeClassName("human-portrait")}
              src={human}
              alt=""
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <svg
              className={homeClassName("hero-connections")}
              viewBox="0 0 640 540"
              aria-hidden="true"
            >
              <path d="M90 142H190L266 195M94 335H205L266 282M465 180H526V307" />
              <path
                className={homeClassName("hero-flow")}
                d="M90 142H190L266 195M94 335H205L266 282M465 180H526V307"
                pathLength="100"
              />
              <path className={homeClassName("scan-sweep")} d="M210 230h284" />
              <path
                className={homeClassName("corner-ticks")}
                d="M248 126v-15h15M486 126v-15h-15M248 326v15h15M486 326v15h-15"
              />
            </svg>
            <div className={homeClassName("signal-label label-vitals")}>
              <span className={homeClassName("mini-label")}>Vital signs</span>
              <svg viewBox="0 0 100 25" aria-hidden="true">
                <path d="M0 15h18l8-9 8 18L44 2l10 13h46" />
              </svg>
            </div>
            <div className={homeClassName("signal-label label-bio")}>
              <svg className={homeClassName("icon")}>
                <use href="#i-bio" />
              </svg>
              <span>
                Blood chemistry
                <br />
                <small>One part of the picture</small>
              </span>
            </div>
            <div className={homeClassName("hero-ai-label")}>
              <svg className={homeClassName("icon")}>
                <use href="#i-chip" />
              </svg>
              <span>
                AI risk assessment<small>Signals, read together.</small>
              </span>
              <b>↗</b>
            </div>
            {/* <div className={homeClassName("technical-caption")}>
              <span>01 / THE WHOLE PERSON</span>
              <span>INTELLIGENCE TO INTERCEPT</span>
            </div> */}
          </div>
        </article>
        <article
          className={homeClassName(
            "hero-slide" + (slide === 1 ? " active" : ""),
          )}
          data-slide="1"
          role="group"
          aria-roledescription="slide"
          aria-label="2 of 3"
          aria-hidden={slide !== 1}
          inert={slide !== 1}
        >
          <div className={homeClassName("hero-copy")}>
            <p className={homeClassName("eyebrow")}>
              <span></span>Salt Lick Centres
            </p>
            <h2>
              Breakthrough cancer screening,
              <br />
              <em>close to every community.</em>
            </h2>
            <p className={homeClassName("lead")}>
              Salt Lick Centres bring the complete assessment into the hospitals
              people already know and trust, with results in under 30 minutes.
            </p>
            <div className={homeClassName("actions")}>
              <a className={homeClassName("button")} href="/our-centres">
                Explore Our Centres <span>↗</span>
              </a>
            </div>
          </div>
          <div className={homeClassName("hero-visual campus-visual")}>
            <div className={homeClassName("branded-art campus")}>
              <img
                src={campus}
                width="1536"
                height="1024"
                alt="Illustrated Salt Lick Centre within a hospital campus, with globally diverse visitors and clinicians"
              />
              <img
                className={homeClassName("official-art-logo")}
                src={logo}
                alt="Salt Lick"
              />
            </div>
            {/* <div className={homeClassName("technical-caption")}>
              <span>02 / CLOSER TO COMMUNITIES</span>
              <span>SALT LICK CENTRES</span>
            </div> */}
          </div>
        </article>
        <article
          className={homeClassName(
            "hero-slide" + (slide === 2 ? " active" : ""),
          )}
          data-slide="2"
          role="group"
          aria-roledescription="slide"
          aria-label="3 of 3"
          aria-hidden={slide !== 2}
          inert={slide !== 2}
        >
          <div className={homeClassName("hero-copy")}>
            <p className={homeClassName("eyebrow")}>
              <span></span>Salt Lick shifts the start line
            </p>
            <h2>
              Act earlier.
              <br />
              <em>Change the course of cancer.</em>
            </h2>
            <p className={homeClassName("lead")}>
              With 20 million new cancer cases a year, the world cannot wait for
              symptoms. Salt Lick connects early risk signals so action can
              begin in the window where it matters most.
            </p>
            <div className={homeClassName("actions")}>
              <a className={homeClassName("button")} href="/impact">
                See Our Impact <span>↗</span>
              </a>
            </div>
          </div>
          <div className={homeClassName("hero-visual consultation-visual")}>
            <div className={homeClassName("branded-art consultation")}>
              <img
                src={consultation}
                width="1536"
                height="1024"
                alt="Illustration of a clinician explaining a report to an older visitor and his daughter"
              />
              <img
                className={homeClassName("official-art-logo")}
                src={logo}
                alt="Salt Lick"
              />
            </div>
            {/* <div className={homeClassName("technical-caption")}>
              <span>03 / INTELLIGENCE INTO ACTION</span>
              <span>A CLEAR NEXT STEP</span>
            </div> */}
          </div>
        </article>
      </div>
      <div className={homeClassName("hero-controls wrap")}>
        <button
          className={homeClassName("circle-button")}
          data-prev
          onClick={() => move(-1)}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div
          className={homeClassName("slide-dots")}
          aria-label="Choose a slide"
        >
          <button
            data-dot="0"
            aria-label="Show slide 1"
            aria-current={slide === 0 ? "true" : undefined}
            onClick={() => setSlide(0)}
          >
            <span></span>
          </button>
          <button
            data-dot="1"
            aria-label="Show slide 2"
            aria-current={slide === 1 ? "true" : undefined}
            onClick={() => setSlide(1)}
          >
            <span></span>
          </button>
          <button
            data-dot="2"
            aria-label="Show slide 3"
            aria-current={slide === 2 ? "true" : undefined}
            onClick={() => setSlide(2)}
          >
            <span></span>
          </button>
        </div>
        <button
          className={homeClassName("circle-button")}
          data-next
          onClick={() => move(1)}
          aria-label="Next slide"
        >
          →
        </button>
        <span className={homeClassName("slide-counter")} aria-hidden="true">
          0{slide + 1} <i>/ 03</i>
        </span>
        {/* <p className={homeClassName("hero-bottom-note")}>
          Human insight. Connected intelligence.
        </p> */}
      </div>
    </section>
  );
}

function AdvantageSection() {
  return (
    <section
      className={homeClassName("advantage section wrap")}
      id="advantage"
      data-section="The advantage"
    >
      <div className={homeClassName("advantage-copy")}>
        <p className={homeClassName("eyebrow")}>
          <span></span>The advantage
        </p>
        <h2>
          Act earlier.
          <br />
          <em>Outcomes change.</em>
        </h2>
        <p>
          Cancer develops over years, and many of its risk factors can be
          measured long before symptoms appear. Up to 40% of cancers are linked
          to risks that can be identified and changed.
        </p>
        <p className={homeClassName("emphasis")}>
          The earlier risk is known, the earlier action begins.
        </p>
        <a className={homeClassName("text-link")} href="/impact">
          See why timing matters <span>→</span>
        </a>
      </div>
      <div className={homeClassName("stage-chart")}>
        <div className={homeClassName("chart-top")}>
          <svg className={homeClassName("icon")}>
            <use href="#i-heart" />
          </svg>
          <span>Timing changes the picture.</span>
        </div>
        <div className={homeClassName("bar-row")}>
          <div>
            <strong>Found early</strong>
            <span>~92%</span>
          </div>
          <div className={homeClassName("bar-track")}>
            <span
              style={{
                "--bar": "92%",
                "--bar-color": "#284e70",
              }}
            ></span>
          </div>
        </div>
        <div className={homeClassName("bar-row")}>
          <div>
            <strong>Spread nearby</strong>
            <span>~62%</span>
          </div>
          <div className={homeClassName("bar-track")}>
            <span
              style={{
                "--bar": "62%",
                "--bar-color": "#accbdf",
              }}
            ></span>
          </div>
        </div>
        <div className={homeClassName("bar-row")}>
          <div>
            <strong>Spread widely</strong>
            <span>~12%</span>
          </div>
          <div className={homeClassName("bar-track")}>
            <span
              style={{
                "--bar": "12%",
                "--bar-color": "#f2c39d",
              }}
            ></span>
          </div>
        </div>
        <p className={homeClassName("source-note")}>
          Approximate five-year survival by stage at diagnosis
        </p>
      </div>
    </section>
  );
}

function SignalSection() {
  const [active, setActive] = useState(0);
  return (
    <section
      className={homeClassName("signals-section")}
      id="connecting-signals"
      data-section="Introducing Salt Lick"
    >
      <div className={homeClassName("section wrap")}>
        <div className={homeClassName("signals-heading")}>
          <div>
            <p className={homeClassName("eyebrow")}>
              <span></span>Introducing Salt Lick
            </p>
            <h2>
              Connecting the signals
              <br />
              <em>before cancer sets in.</em>
            </h2>
          </div>
          <div>
            <p>
              Early risk signals already exist, scattered across lifestyle,
              vital signs, blood chemistry and tissue changes. Salt Lick brings
              them together in a single radiation-free visit, and our AI reads
              them as one to produce a personal cancer risk score and a clear
              next step.
            </p>
            <a className={homeClassName("text-link")} href="/what-is-salt-lick">
              Discover Salt Lick <span>→</span>
            </a>
          </div>
        </div>
        <div className={homeClassName("signal-board")} id="signals-detail">
          <div className={homeClassName("diagram-labels")}>
            <span>01 / THE SIGNALS</span>
            <span>02 / CONNECTED INTELLIGENCE</span>
            <span>03 / A CLEAR NEXT STEP</span>
          </div>
          <div className={homeClassName("signal-flow")}>
            <svg
              className={homeClassName("signal-connectors")}
              viewBox="0 0 1100 390"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g className={homeClassName("connector-tracks")}>
                <path d="M245 40H350Q385 40 385 195H475" />
                <path d="M245 102H330Q370 102 370 195H475" />
                <path d="M245 164H350L415 195H475" />
                <path d="M245 226H350L415 195H475" />
                <path d="M245 288H330Q370 288 370 195H475" />
                <path d="M245 350H350Q385 350 385 195H475" />
                <path d="M635 195H910" />
              </g>
              <g className={homeClassName("motion-input-tracks")}>
                {signalTracks.map((track, index) => (
                  <path
                    key={track}
                    d={track}
                    pathLength="100"
                    style={{ "--signal-delay": `${index * 0.75}s` }}
                  />
                ))}
              </g>
              <path
                className={homeClassName("connector-active")}
                d={signalTracks[active]}
              />
              <path
                className={homeClassName("connector-output")}
                d="M635 195H910"
              />
            </svg>
            <div
              className={homeClassName("signal-inputs")}
              role="group"
              aria-label="Explore the six health signals"
            >
              <button
                className={homeClassName(
                  "signal-input" + (active === 0 ? " selected" : ""),
                )}
                data-signal="0"
                aria-pressed={active === 0}
                onClick={() => setActive(0)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-life" />
                  </svg>
                </span>
                <span>Lifestyle</span>
                <b>01</b>
              </button>
              <button
                className={homeClassName(
                  "signal-input" + (active === 1 ? " selected" : ""),
                )}
                data-signal="1"
                aria-pressed={active === 1}
                onClick={() => setActive(1)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-family" />
                  </svg>
                </span>
                <span>Family history</span>
                <b>02</b>
              </button>
              <button
                className={homeClassName(
                  "signal-input" + (active === 2 ? " selected" : ""),
                )}
                data-signal="2"
                aria-pressed={active === 2}
                onClick={() => setActive(2)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-heart" />
                  </svg>
                </span>
                <span>Vital signs</span>
                <b>03</b>
              </button>
              <button
                className={homeClassName(
                  "signal-input" + (active === 3 ? " selected" : ""),
                )}
                data-signal="3"
                aria-pressed={active === 3}
                onClick={() => setActive(3)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-bio" />
                  </svg>
                </span>
                <span>Biomarkers</span>
                <b>04</b>
              </button>
              <button
                className={homeClassName(
                  "signal-input" + (active === 4 ? " selected" : ""),
                )}
                data-signal="4"
                aria-pressed={active === 4}
                onClick={() => setActive(4)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-oral" />
                  </svg>
                </span>
                <span>Oral scan</span>
                <b>05</b>
              </button>
              <button
                className={homeClassName(
                  "signal-input" + (active === 5 ? " selected" : ""),
                )}
                data-signal="5"
                aria-pressed={active === 5}
                onClick={() => setActive(5)}
              >
                <span className={homeClassName("input-icon")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-light" />
                  </svg>
                </span>
                <span>Breast scan</span>
                <b>06</b>
              </button>
            </div>
            <div className={homeClassName("processor-area")}>
              <div className={homeClassName("processor-layers")}>
                <span></span>
                <span></span>
                <div className={homeClassName("processor")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-chip" />
                  </svg>
                  <strong>
                    AI risk
                    <br />
                    assessment
                  </strong>
                  <div className={homeClassName("processor-bars")}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
              <p>Signals read together.</p>
            </div>
            <div className={homeClassName("report-area")}>
              <div className={homeClassName("risk-report")}>
                <img src={logo} alt="Salt Lick" width="1149" height="1369" />
                <p>
                  Personal
                  <br />
                  <strong>risk report</strong>
                </p>
                <div className={homeClassName("report-lines")}>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className={homeClassName("report-assessment")}>
                  <svg className={homeClassName("icon")}>
                    <use href="#i-report" />
                  </svg>
                  <span>
                    Assessment
                    <br />
                    &amp; next step
                  </span>
                </div>
              </div>
              <div className={homeClassName("report-next")}>
                <span>↗</span>Guidance, monitoring
                <br />
                or referral.
              </div>
            </div>
          </div>
          <div
            className={homeClassName("signal-description")}
            aria-live="polite"
          >
            <span className={homeClassName("active-signal-label")}>
              {signalData[active][0]}
            </span>
            <p className={homeClassName("active-signal-copy")}>
              {signalData[active][1]}
            </p>
            {/* <span className={homeClassName("signal-detail-hint")}>
              Select a signal to explore ↗
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const homeRef = useRef(null);
  useHomepageMotion(homeRef);
  return (
    <div ref={homeRef} className={homeClassName("home-medtech")}>
      <IconLibrary />
      <HomeHero />

      <section
        className={homeClassName("association")}
        data-section="Esperer Group association"
        id="esperer"
      >
        <div className={homeClassName("wrap association-inner")}>
          <div className={homeClassName("association-brand")}>
            <p className={homeClassName("eyebrow")}>A part of Esperer Group</p>
            <a
              href="https://www.espererworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Esperer Group"
            >
              <img
                src={esperer}
                alt="Esperer Group"
                width="2078"
                height="757"
              />
            </a>
            <span className={homeClassName("parent-note")}>
              Our parent group
            </span>
          </div>
          <div className={homeClassName("association-copy")}>
            <h2>
              A global vision for
              <br />a healthier tomorrow.
            </h2>
            <p>
              Salt Lick is part of Esperer Group, a global oncology innovation
              group committed to advancing the full continuum of cancer care,
              from early risk assessment to clinically validated nutrition and
              research.
            </p>
          </div>
        </div>
      </section>

      <section
        className={homeClassName("gap section wrap")}
        id="intervention-gap"
        data-section="The intervention gap"
      >
        <div className={homeClassName("section-heading")}>
          <p className={homeClassName("eyebrow")}>
            <span></span>The intervention gap
          </p>
          <h2>
            The gap isn’t detection.
            <br />
            <em>It’s timing.</em>
          </h2>
          <p>
            Most care starts after risk has progressed, when prevention is
            harder and treatment is more likely. Salt Lick moves the start line
            to the reversible window.
          </p>
        </div>
        <div className={homeClassName("timeline-panel")} id="timeline-detail">
          <div className={homeClassName("timeline-desktop")}>
            <svg
              viewBox="0 0 1000 320"
              role="img"
              aria-labelledby="timeline-title timeline-description"
            >
              <title id="timeline-title">Salt Lick shifts the start line</title>
              <desc id="timeline-description">
                Risk signals and fragmented routine care sit in the reversible
                window. A boundary marks when cancer becomes detectable.
                Confirmation follows in the disease and treatment window. Salt
                Lick starts earlier, at risk signals, while most care starts at
                confirmation.
              </desc>
              <defs>
                <marker
                  id="timeline-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path
                    d="M1 1 8 5 1 9"
                    fill="none"
                    stroke="#bc7850"
                    strokeWidth="1.6"
                  />
                </marker>
              </defs>
              <rect
                x="28"
                y="104"
                width="520"
                height="153"
                rx="8"
                fill="#eef5f9"
              />
              <rect
                x="548"
                y="104"
                width="424"
                height="153"
                rx="8"
                fill="#f5f6f8"
              />
              <text x="56" y="131" className={homeClassName("svg-zone")}>
                REVERSIBLE WINDOW
              </text>
              <text x="580" y="131" className={homeClassName("svg-zone grey")}>
                DISEASE AND TREATMENT WINDOW
              </text>
              <line
                x1="60"
                y1="176"
                x2="940"
                y2="176"
                pathLength="100"
                stroke="#bac5d1"
                strokeWidth="3"
              />
              <line
                x1="60"
                y1="176"
                x2="548"
                y2="176"
                pathLength="100"
                stroke="#284e70"
                strokeWidth="3"
              />
              <line
                x1="548"
                y1="90"
                x2="548"
                y2="263"
                stroke="#bc7850"
                strokeWidth="2"
                strokeDasharray="4 5"
              />
              <text
                x="548"
                y="78"
                className={homeClassName("svg-boundary")}
                textAnchor="middle"
              >
                Cancer becomes detectable
              </text>
              <rect
                x="43"
                y="18"
                width="188"
                height="34"
                rx="5"
                fill="#f2c39d"
              />
              <text
                x="137"
                y="40"
                className={homeClassName("svg-flag")}
                textAnchor="middle"
              >
                Salt Lick starts here
              </text>
              <path d="M137 52v111" stroke="#d49b71" strokeWidth="2" />
              <rect
                x="772"
                y="18"
                width="188"
                height="34"
                rx="5"
                fill="#e8ecf0"
              />
              <text
                x="866"
                y="40"
                className={homeClassName("svg-flag grey")}
                textAnchor="middle"
              >
                Most care starts here
              </text>
              <path d="M866 52v111" stroke="#aeb9c7" strokeWidth="2" />
              <path
                d="M749 35H254"
                stroke="#bc7850"
                strokeWidth="1.8"
                fill="none"
                markerEnd="url(#timeline-arrow)"
              />
              <path
                className={homeClassName("start-line-motion")}
                d="M620 35h-70"
                stroke="#f2c39d"
                strokeWidth="4"
                fill="none"
                markerEnd="url(#timeline-arrow)"
              />
              <text
                x="500"
                y="22"
                className={homeClassName("svg-shift")}
                textAnchor="middle"
              >
                SALT LICK SHIFTS THE START LINE
              </text>
              <g className={homeClassName("timeline-node")}>
                <circle cx="137" cy="176" r="9" fill="#eeb587" />
                <text x="137" y="212">
                  Risk signals
                </text>
                <text x="137" y="233" className={homeClassName("svg-detail")}>
                  accumulate before symptoms
                </text>
              </g>
              <g className={homeClassName("timeline-node")}>
                <circle cx="385" cy="176" r="8" fill="#284e70" />
                <text x="385" y="212">
                  Routine care
                </text>
                <text x="385" y="233" className={homeClassName("svg-detail")}>
                  signals remain fragmented
                </text>
              </g>
              <g className={homeClassName("timeline-node")}>
                <circle cx="674" cy="176" r="8" fill="#9eacbc" />
                <text x="674" y="212">
                  Cancer sets in
                </text>
                <text x="674" y="233" className={homeClassName("svg-detail")}>
                  disease becomes detectable
                </text>
              </g>
              <g className={homeClassName("timeline-node")}>
                <circle cx="866" cy="176" r="8" fill="#9eacbc" />
                <text x="866" y="212">
                  Confirmation
                </text>
                <text x="866" y="233" className={homeClassName("svg-detail")}>
                  labs confirm after onset
                </text>
              </g>
              <text x="29" y="291" className={homeClassName("svg-detail")}>
                ← Earlier
              </text>
              <text
                x="973"
                y="291"
                textAnchor="end"
                className={homeClassName("svg-detail")}
              >
                Later →
              </text>
            </svg>
          </div>
          <div
            className={homeClassName("timeline-mobile")}
            aria-label="Risk progression from earlier to later"
          >
            <p className={homeClassName("timeline-mobile-title")}>
              Salt Lick shifts the start line <span>↑ Earlier</span>
            </p>
            <div className={homeClassName("mobile-window early")}>
              <h3>Reversible window</h3>
              <div className={homeClassName("mobile-stop orange")}>
                <b>Salt Lick starts here</b>
                <strong>Risk signals</strong>
                <span>Accumulate before symptoms</span>
              </div>
              <div className={homeClassName("mobile-stop")}>
                <strong>Routine care</strong>
                <span>Signals remain fragmented</span>
              </div>
            </div>
            <p className={homeClassName("mobile-boundary")}>
              Cancer becomes detectable
            </p>
            <div className={homeClassName("mobile-window later")}>
              <h3>Disease and treatment window</h3>
              <div className={homeClassName("mobile-stop")}>
                <strong>Cancer sets in</strong>
                <span>Disease becomes detectable</span>
              </div>
              <div className={homeClassName("mobile-stop")}>
                <strong>Confirmation</strong>
                <span>Labs confirm after onset</span>
                <b>Most care starts here</b>
              </div>
            </div>
            <p className={homeClassName("timeline-mobile-end")}>Later ↓</p>
          </div>
        </div>
        <div className={homeClassName("comparison-grid")}>
          <article className={homeClassName("comparison-card")}>
            <span className={homeClassName("card-index")}>01 / TODAY</span>
            <h3>Where care starts today</h3>
            <p>
              Risk signals build up quietly. Routine care sees them in
              fragments. Action begins only once cancer is detectable and
              confirmed by diagnostic labs.
            </p>
          </article>
          <article className={homeClassName("comparison-card early-card")}>
            <span className={homeClassName("card-index")}>02 / EARLIER</span>
            <h3>Where Salt Lick starts</h3>
            <p>
              Salt Lick identifies risk before cancer becomes detectable. AI
              connects the signals while prevention can still change the course.
            </p>
          </article>
        </div>
      </section>

      <section
        className={homeClassName("burden")}
        id="why-timing"
        data-section="Why timing matters"
      >
        <div className={homeClassName("section wrap")}>
          <div className={homeClassName("burden-heading")}>
            <div>
              <p className={homeClassName("eyebrow")}>
                <span></span>Why timing matters
              </p>
              <h2>
                A global burden
                <br />
                shaped by late starts.
              </h2>
            </div>
            <p>
              One in five people will develop cancer in their lifetime. Most are
              diagnosed late, when treatment is hardest and costliest. Earlier
              action is the most powerful lever the world has.
            </p>
          </div>
          <div className={homeClassName("stats")}>
            <article>
              <span className={homeClassName("stat-number")}>
                20<span>M</span>
              </span>
              <p>
                New cancer cases
                <br />
                worldwide each year
              </p>
            </article>
            <article>
              <span className={homeClassName("stat-number")}>
                9.7<span>M</span>
              </span>
              <p>
                Lives lost to cancer
                <br />
                each year
              </p>
            </article>
            <article>
              <span className={homeClassName("stat-number")}>
                35<span>M+</span>
              </span>
              <p>
                New cases a year
                <br />
                expected by 2050
              </p>
            </article>
            <article>
              <span className={homeClassName("stat-number")}>
                $25.2<span>T</span>
              </span>
              <p>
                Global economic cost
                <br />
                of cancer, 2020–2050
              </p>
            </article>
          </div>
          <p className={homeClassName("source-note")}>
            Sources: GLOBOCAN 2022, IARC/WHO · JAMA Oncology, 2023
          </p>
        </div>
      </section>

      <AdvantageSection />
      <SignalSection />

      <section
        className={homeClassName("screening section wrap")}
        id="screening"
        data-section="The screening"
      >
        <div className={homeClassName("section-heading")}>
          <p className={homeClassName("eyebrow")}>
            <span></span>The screening
          </p>
          <h2>
            Under 30 minutes.
            <br />
            <em>Over 100 signals. Zero radiation.</em>
          </h2>
        </div>
        <div className={homeClassName("screening-grid")}>
          <article className={homeClassName("screening-card")}>
            <div className={homeClassName("device-art face-device")}>
              <svg
                viewBox="0 0 250 210"
                role="img"
                aria-label="Illustration of a contactless face scan display"
              >
                <ellipse cx="125" cy="189" rx="75" ry="8" fill="#e4ecf2" />
                <path d="M96 164h57l10 23H86Z" fill="#c5d6e3" />
                <rect
                  x="46"
                  y="21"
                  width="160"
                  height="143"
                  rx="10"
                  fill="#d4e3ed"
                  stroke="#7f9bb1"
                />
                <rect
                  x="54"
                  y="29"
                  width="144"
                  height="126"
                  rx="5"
                  fill="#fff"
                />
                <image
                  href={human}
                  x="58"
                  y="30"
                  width="133"
                  height="120"
                  preserveAspectRatio="xMidYMid slice"
                />
                <path
                  d="M107 66v-9h10m42 9v-9h-10m-42 48v9h10m42-9v9h-10"
                  fill="none"
                  stroke="#284e70"
                  strokeWidth="1.5"
                />
                <path
                  className={homeClassName("device-scan")}
                  d="M100 83h66"
                  stroke="#cf9b74"
                  strokeWidth="2"
                />
                <circle cx="127" cy="159" r="2" fill="#284e70" />
              </svg>
            </div>
            <div className={homeClassName("screening-card-copy")}>
              <span className={homeClassName("card-index")}>
                01 / CONTACTLESS
              </span>
              <h3>Contactless face scan</h3>
              <p>20+ vital signs from a 60-second scan.</p>
            </div>
          </article>
          <article className={homeClassName("screening-card")}>
            <div className={homeClassName("device-art")}>
              <svg
                viewBox="0 0 250 210"
                role="img"
                aria-label="Illustration of a compact on-site biochemical analyser"
              >
                <ellipse cx="125" cy="188" rx="79" ry="9" fill="#e4ecf2" />
                <path
                  d="m45 75 50-35 115 25-48 35Z"
                  fill="#e7f0f5"
                  stroke="#8ba6b9"
                />
                <path
                  d="M45 75v90l117 29v-94Z"
                  fill="url(#blue-wash)"
                  stroke="#8ba6b9"
                />
                <path
                  d="m162 100 48-35v93l-48 36Z"
                  fill="#a5bdcf"
                  stroke="#8ba6b9"
                />
                <path
                  d="m62 96 72 17v35l-72-17Z"
                  fill="#fff"
                  stroke="#8ba6b9"
                />
                <path
                  d="m72 110 45 10m-45 2 34 8"
                  stroke="#accbdf"
                  strokeWidth="3"
                />
                <path d="m176 111 19-14v33l-19 15Z" fill="#284e70" />
                <g className={homeClassName("sample-motion")}>
                  <path
                    d="M191 67v26q0 6 8 6t8-6V67"
                    fill="#f8d8bc"
                    stroke="#8b6e5b"
                  />
                  <path d="M189 65h20v6h-20Z" fill="#f2c39d" />
                </g>
                <path
                  d="m66 151 50 13m-50-5 50 13"
                  stroke="#93b3c9"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className={homeClassName("screening-card-copy")}>
              <span className={homeClassName("card-index")}>
                02 / BIOCHEMISTRY
              </span>
              <h3>Biochemical panel</h3>
              <p>Metabolic and cancer markers from a minimal sample.</p>
            </div>
          </article>
          <article className={homeClassName("screening-card")}>
            <div className={homeClassName("device-art")}>
              <svg
                viewBox="0 0 250 210"
                role="img"
                aria-label="Illustration of light-based scanning equipment"
              >
                <ellipse cx="126" cy="189" rx="76" ry="8" fill="#e4ecf2" />
                <path
                  d="m63 162 26-37 54 13-27 39Z"
                  fill="#cadce8"
                  stroke="#8ba6b9"
                />
                <path d="m63 162 53 15v8l-53-15Z" fill="#a2bacd" />
                <path
                  d="m124 139 30-87"
                  stroke="#52758d"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="m150 49 30-6 26 17-9 28-28 4-26-18Z"
                  fill="url(#blue-wash)"
                  stroke="#8ba6b9"
                />
                <ellipse
                  cx="174"
                  cy="70"
                  rx="19"
                  ry="14"
                  transform="rotate(-16 174 70)"
                  fill="#284e70"
                />
                <ellipse
                  cx="174"
                  cy="70"
                  rx="12"
                  ry="8"
                  transform="rotate(-16 174 70)"
                  fill="#f2c39d"
                />
                <path
                  className={homeClassName("light-motion")}
                  d="m151 76-29 9m34 0-25 16m30-7-18 20"
                  stroke="#e6b58e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M43 45v78M49 37v92M55 45v78"
                  stroke="#e1ecf3"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className={homeClassName("screening-card-copy")}>
              <span className={homeClassName("card-index")}>
                03 / LIGHT-BASED
              </span>
              <h3>Oral and breast scans</h3>
              <p>Light-based imaging. No radiation, no discomfort.</p>
            </div>
          </article>
          <article className={homeClassName("screening-card")}>
            <div className={homeClassName("device-art")}>
              <svg
                viewBox="0 0 250 210"
                role="img"
                aria-label="Illustration of a Salt Lick risk report"
              >
                <ellipse cx="125" cy="189" rx="73" ry="8" fill="#e4ecf2" />
                <path
                  d="m75 35 119 12-12 143-119-12Z"
                  fill="#d6e5ee"
                  stroke="#abc3d4"
                />
                <g className={homeClassName("paper-motion")}>
                  <path
                    d="m61 24 120 11-12 144-120-11Z"
                    fill="#fff"
                    stroke="#9bb3c4"
                  />
                  <image href={logo} x="70" y="39" width="21" height="26" />
                  <path
                    d="m101 47 49 4m-49 4 40 4"
                    stroke="#284e70"
                    strokeWidth="3"
                  />
                  <path
                    d="m68 82 85 7m-86 4 67 6m-68 8 83 7m-84 4 46 4"
                    stroke="#c5d9e7"
                    strokeWidth="4"
                  />
                  <path d="m64 134 79 7" stroke="#f2c39d" strokeWidth="9" />
                </g>
              </svg>
            </div>
            <div className={homeClassName("screening-card-copy")}>
              <span className={homeClassName("card-index")}>
                04 / CONNECTED INSIGHT
              </span>
              <h3>AI risk report</h3>
              <p>A clear score and next step, in minutes.</p>
            </div>
          </article>
        </div>
        <div className={homeClassName("section-bottom")}>
          <p>One visit. A more connected picture.</p>
          <a className={homeClassName("text-link")} href="/how-it-works">
            How It Works <span>→</span>
          </a>
        </div>
      </section>

      <section
        className={homeClassName("centres-section")}
        id="centres"
        data-section="Salt Lick Centres"
      >
        <div className={homeClassName("wrap centres-inner")}>
          <div className={homeClassName("centres-copy")}>
            <p className={homeClassName("eyebrow")}>
              <span></span>Salt Lick Centres
            </p>
            <h2>
              Earlier starts
              <br />
              need easier access.
            </h2>
            <p>
              Timing depends on reach. Salt Lick Centres are set up within
              district and city hospitals, so early cancer risk assessment is
              available where communities already go for care.
            </p>
            <a className={homeClassName("button")} href="/our-centres">
              Explore Our Centres <span>↗</span>
            </a>
          </div>
          <div className={homeClassName("centres-art branded-art")}>
            <img
              src={centres}
              alt="Conceptual illustrated community visiting a welcoming modern healthcare centre"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <img
              className={homeClassName("official-art-logo")}
              src={logo}
              alt="Salt Lick"
            />
          </div>
        </div>
      </section>

      <section
        className={homeClassName("partners section wrap")}
        id="partners"
        data-section="Our partners"
      >
        <div className={homeClassName("section-heading")}>
          <p className={homeClassName("eyebrow")}>
            <span></span>Our partners
          </p>
          <h2>
            Built on science.
            <br />
            <em>Powered by technology.</em>
          </h2>
        </div>
        <div className={homeClassName("partner-grid")}>
          <article className={homeClassName("partner-card")}>
            <div className={homeClassName("partner-top")}>
              <img
                src={technologyLogo}
                alt="Health Voitho Technologies"
                width="1490"
                height="1051"
              />
              <svg className={homeClassName("icon")}>
                <use href="#i-chip" />
              </svg>
            </div>
            <p className={homeClassName("eyebrow")}>Technology partner</p>
            <h3>Health Voitho Technologies</h3>
            <p>
              Salt Lick’s AI platform and device integration are developed with
              Health Voitho Technologies, the medtech and development company of
              Esperer Group. Together we build secure, explainable technology
              that works anywhere, online or offline.
            </p>
            <a
              className={homeClassName("text-link")}
              href="https://www.healthvoitho.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Health Voitho Technologies <span>↗</span>
            </a>
          </article>
          <article className={homeClassName("partner-card")}>
            <div className={homeClassName("partner-top")}>
              <img src={knowledgeLogo} alt="EIOMS" width="1214" height="552" />
              <svg className={homeClassName("icon")}>
                <use href="#i-bio" />
              </svg>
            </div>
            <p className={homeClassName("eyebrow")}>Knowledge partner</p>
            <h3>
              Esperer Institute of Oncology
              <br />
              and Metabolic Sciences
            </h3>
            <p>
              EIOMS, the knowledge institute of Esperer Group, guides the
              clinical science behind Salt Lick, from the risk factors we assess
              to the evidence behind every action pathway.
            </p>
            <a
              className={homeClassName("text-link")}
              href="https://www.espererworld.com/eioms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit EIOMS <span>↗</span>
            </a>
          </article>
        </div>
      </section>

      <section
        className={homeClassName("impact-section")}
        id="impact"
        data-section="Impact"
      >
        <div className={homeClassName("section wrap")}>
          <div className={homeClassName("section-heading")}>
            <p className={homeClassName("eyebrow")}>
              <span></span>Impact
            </p>
            <h2>
              Earlier answers.
              <br />
              <em>Lighter burden.</em>
            </h2>
          </div>
          <div className={homeClassName("impact-grid")}>
            <article className={homeClassName("impact-card")}>
              <div className={homeClassName("network-art")}>
                <svg
                  viewBox="0 0 500 220"
                  role="img"
                  aria-label="Conceptual health centre network connected to a population reporting dashboard"
                >
                  <path
                    d="M40 89 65 55l39-8 19 12 32-23 40 14 24-17 34 23 26-8 21 30 42 10 8 30 38 24-19 18-55-5-21 20-51-4-24-26-28-4-20-28-32 8-8-24-32 4Z"
                    fill="#e2eef5"
                  />
                  <path
                    d="m129 85 86 42 84-47m-84 47 15 43m69-90 49 51m-133-4 187-17"
                    fill="none"
                    stroke="#9db9cd"
                    strokeWidth="1.5"
                  />
                  <g className={homeClassName("network-building")}>
                    <path d="M113 65h33v30h-33Z" fill="#fff" stroke="#284e70" />
                    <path
                      d="M124 72h11m-6-5v11m-8 17v-11h16v11"
                      fill="none"
                      stroke="#284e70"
                    />
                  </g>
                  <g className={homeClassName("network-building")}>
                    <path
                      d="M199 109h33v30h-33Z"
                      fill="#fff"
                      stroke="#284e70"
                    />
                    <path
                      d="M210 116h11m-6-5v11m-8 17v-11h16v11"
                      fill="none"
                      stroke="#284e70"
                    />
                  </g>
                  <g className={homeClassName("network-building")}>
                    <path d="M283 61h33v30h-33Z" fill="#fff" stroke="#284e70" />
                    <path
                      d="M294 68h11m-6-5v11m-8 17V80h16v11"
                      fill="none"
                      stroke="#284e70"
                    />
                  </g>
                  <rect
                    x="371"
                    y="69"
                    width="111"
                    height="100"
                    rx="7"
                    fill="#fff"
                    stroke="#b7cbd9"
                  />
                  <path
                    d="M383 89h37m-37 6h53"
                    stroke="#c1d5e4"
                    strokeWidth="3"
                  />
                  <path
                    d="M386 148v-24m18 24v-36m18 36v-20m18 20v-44m18 44v-31"
                    stroke="#accbdf"
                    strokeWidth="9"
                  />
                  <path
                    className={homeClassName("network-packet")}
                    d="M232 127 402 110"
                    stroke="#d6a27b"
                    strokeWidth="3"
                    strokeDasharray="10 180"
                  />
                </svg>
              </div>
              <div className={homeClassName("impact-card-copy")}>
                <span className={homeClassName("card-index")}>FOR NATIONS</span>
                <h3>A lighter burden on health systems.</h3>
                <p>
                  Fewer late-stage cases, lower treatment costs, less pressure
                  on hospitals, and a live picture of cancer risk across the
                  population.
                </p>
              </div>
            </article>
            <article className={homeClassName("impact-card")}>
              <div className={homeClassName("people-art")}>
                <img
                  src={screening}
                  alt="Illustration of a clinician and visitor discussing information together"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
              </div>
              <div className={homeClassName("impact-card-copy")}>
                <span className={homeClassName("card-index")}>FOR PEOPLE</span>
                <h3>Clarity, comfort and a plan.</h3>
                <p>
                  A clear understanding of personal risk in under 30 minutes,
                  without radiation, and a plan for what to do next.
                </p>
              </div>
            </article>
          </div>
          <div className={homeClassName("section-bottom")}>
            <span></span>
            <a className={homeClassName("text-link")} href="/impact">
              See the Impact <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={homeClassName("final-cta section wrap")}
        id="partnership"
        data-section="Final partnership CTA"
      >
        <div className={homeClassName("cta-mark")} aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>
          Shift the start line
          <br />
          <em>in your country.</em>
        </h2>
        <p>
          We partner with governments and health institutions to bring early
          cancer risk assessment to entire populations.
        </p>
        <a className={homeClassName("button")} href="/partner-with-us">
          Partner With Us <span>↗</span>
        </a>
      </section>
    </div>
  );
}
