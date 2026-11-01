import { useEffect, useRef, useState } from "react";
import arrival from "../../assets/centres-arrival.webp";
import report from "../../assets/centres-report.webp";
import partnership from "../../assets/centres-partnership.webp";
import "./OurCentres.css";
import CentreInterior from "./CentreInterior";

const facilities = [
  [
    "Experience lounge",
    "Self-registration and local-language support.",
    "Welcome",
  ],
  [
    "Face scan and risk profile",
    "Contactless vital signs and questionnaire.",
    "Risk profile",
  ],
  ["Biochemistry room", "Sample analysis on site.", "Biochemistry"],
  ["Oral scan", "Light-based screening.", "Oral scan"],
  ["Women-only screening", "Private breast screening suite.", "Private suite"],
  ["Report desk", "Results explained with a next step.", "Your report"],
];
const locations = [
  ["District hospitals", "Early risk assessment across districts.", "district"],
  [
    "Medical colleges",
    "Integration with academic and teaching hospitals.",
    "college",
  ],
  ["City hospitals", "Access for urban populations.", "city"],
  [
    "Community outreach",
    "Local health workers invite and register people.",
    "community",
  ],
];
const journey = [
  [
    "Arrive and register",
    "Sign in and provide digital consent.",
    "Your visit",
    "Registration & consent",
    "A clear starting point",
  ],
  [
    "Complete the assessment",
    "Questionnaire, face scan, sample, and scans in private rooms.",
    "Your assessment",
    "Private, guided steps",
    "One step at a time",
  ],
  [
    "Receive your report",
    "Results explained in person before leaving.",
    "Your report",
    "Explained with you",
    "Understanding comes first",
  ],
  [
    "Follow your pathway",
    "Guidance, monitoring, or referral with follow-up.",
    "Your next step",
    "A pathway forward",
    "Guidance · monitoring · referral",
  ],
];
const systems = [
  [
    "Always available",
    "Offline operation and secure syncing when connectivity returns.",
  ],
  ["One health record", "A single record across visits."],
  ["Referral tracking", "Track each referral until care is reached."],
  ["Live dashboard", "Population risk reporting for health authorities."],
];

function PlaceDrawing({ type }) {
  return (
    <svg viewBox="0 0 200 130" aria-hidden="true" fill="none">
      <path d="M8 117H192" stroke="#c6dbe8" strokeWidth="2" />
      {type === "district" && (
        <>
          <path
            d="M35 117V46h130v71"
            fill="#edf5fa"
            stroke="#9fbfd4"
            strokeWidth="2"
          />
          <path
            d="M25 46l75-27 75 27"
            fill="#f7e1ce"
            stroke="#e4bb99"
            strokeWidth="2"
          />
          <path d="M88 117V83h24v34" fill="#fff" stroke="#9fbfd4" />
          <path
            d="M52 64h20m56 0h20M100 34v15m-7-7h14"
            stroke="#8aacc2"
            strokeWidth="3"
          />
        </>
      )}
      {type === "college" && (
        <>
          <path
            d="M27 117V52h146v65"
            fill="#f7e6d7"
            stroke="#d9b99f"
            strokeWidth="2"
          />
          <path
            d="M18 52l82-32 82 32H18Z"
            fill="#e7f1f8"
            stroke="#9fbfd4"
            strokeWidth="2"
          />
          {[42, 78, 114, 150].map((x) => (
            <path key={x} d={`M${x} 61v45`} stroke="#fff" strokeWidth="12" />
          ))}
          <path d="M21 109h158" stroke="#9fbfd4" strokeWidth="3" />
        </>
      )}
      {type === "city" && (
        <>
          <path
            d="M25 117V53h48V18h69v99"
            fill="#e6f0f7"
            stroke="#9fbfd4"
            strokeWidth="2"
          />
          <path
            d="M142 69h33v48"
            fill="#f5dfca"
            stroke="#dfbd9f"
            strokeWidth="2"
          />
          {[37, 58, 79].map((y) => (
            <path
              key={y}
              d={`M87 ${y}h13m15 0h13`}
              stroke="#abc8dc"
              strokeWidth="6"
            />
          ))}
          <path d="M102 117V98h15v19" fill="#fff" stroke="#9fbfd4" />
        </>
      )}
      {type === "community" && (
        <>
          <path
            d="M65 117V53l35-24 35 24v64"
            fill="#eaf3f8"
            stroke="#a4c2d5"
            strokeWidth="2"
          />
          <path d="M85 117V81h30v36" fill="#f9e3cf" stroke="#debc9e" />
          {[35, 165].map((x) => (
            <g key={x}>
              <path d={`M${x - 12} 117v-19q12-17 24 0v19`} fill="#c2d9e8" />
              <path d={`M${x - 6} 78q6-7 12 0v8q-6 8-12 0Z`} fill="#edceb3" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export default function OurCentres() {
  const root = useRef(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const page = root.current;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("centre-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    page
      .querySelectorAll("[data-centre-reveal]")
      .forEach((el) => observer.observe(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      page.querySelectorAll("[data-centre-depth]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty(
          "--centre-depth",
          Math.max(
            -18,
            Math.min(18, (innerHeight / 2 - rect.top - rect.height / 2) * 0.05),
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
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div className="centres-page" ref={root}>
      <section
        className="centres-hero centres-wrap"
        aria-labelledby="centres-title"
      >
        <div className="centres-hero-copy">
          <p className="centres-label">Our centres / Care within reach</p>
          <h1 id="centres-title">
            Breakthrough cancer screening,
            <br />
            <em>close to every community.</em>
          </h1>
          <p>
            Salt Lick Centres are positioned within hospitals communities
            already trust, making early risk assessment more accessible.
          </p>
          <a className="button centrepage blue" href="/partner-with-us">
            Bring a Centre to Your Region <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="centres-hero-art" data-centre-depth>
          <div className="centres-photo-sheet">
            <img
              src={arrival}
              width="1536"
              height="1024"
              alt="Conceptual watercolor reception with Salt Lick signage and people being welcomed"
            />
          </div>
          <div className="centres-paper-back" aria-hidden="true" />
        </div>
        {/* <div className="centres-hero-foot">
          <span>Familiar hospitals</span>
          <span>Private spaces</span>
          <span>A clear next step</span>
        </div> */}
      </section>

      <CentreInterior facilities={facilities} />

      <section
        className="centres-locations centres-wrap"
        aria-labelledby="locations-title"
      >
        <div className="centres-location-intro" data-centre-reveal>
          <p className="centres-label">02 / Where care can happen</p>
          <h2 id="locations-title">
            Within the hospitals
            <br />
            communities already trust.
          </h2>
          {/* <p className="centres-context">
            Deployment settings described in the wireframe. Specific centre
            locations and availability are to be confirmed.
          </p> */}
        </div>
        <div className="centres-location-grid">
          {locations.map(([name, copy, type], i) => (
            <article key={name} data-centre-reveal>
              <div className="centres-place-art">
                <PlaceDrawing type={type} />
              </div>
              <span className="centres-small-index">0{i + 1}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="centres-journey" aria-labelledby="journey-title">
        <div className="centres-wrap">
          <div className="centres-heading" data-centre-reveal>
            <div>
              <p className="centres-label">03 / A visit, step by step</p>
              <h2 id="journey-title">
                What to expect
                <br />
                at a Salt Lick Centre.
              </h2>
            </div>
            <p>
              From arrival to a clear pathway forward.
              <br />
              Choose a step to see what happens next.
            </p>
          </div>
          <div className="centres-journey-layout">
            <div className="centres-journey-scene" data-centre-depth>
              <img
                src={report}
                width="1536"
                height="1024"
                alt="Illustrated clinician explaining a report in person to a woman and family member"
              />
              <div
                className="centres-phone"
                aria-label="Illustrative report interface, not a real patient report"
              >
                <div className="centres-phone-speaker" aria-hidden="true" />
                <div className="centres-phone-brand">
                  Salt Lick <span>Design preview</span>
                </div>
                <div className="centres-phone-screen" key={step}>
                  <span className="centres-phone-step">0{step + 1} / 04</span>
                  <h3>{journey[step][2]}</h3>
                  <div className="centres-phone-document" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <strong>{journey[step][3]}</strong>
                  <p>{journey[step][4]}</p>
                  <div className="centres-phone-progress" aria-hidden="true">
                    {journey.map((_, i) => (
                      <i key={i} className={i <= step ? "filled" : ""} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="centres-journey-steps">
              {journey.map(([name, copy], i) => (
                <button
                  key={name}
                  aria-pressed={step === i}
                  onClick={() => setStep(i)}
                >
                  <span>0{i + 1}</span>
                  <span>
                    <strong>{name}</strong>
                    <span>{copy}</span>
                  </span>
                  <b aria-hidden="true">{step === i ? "−" : "+"}</b>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="centres-network centres-wrap"
        aria-labelledby="network-title"
      >
        <div className="centres-network-copy" data-centre-reveal>
          <p className="centres-label">04 / Connected, wherever care happens</p>
          <h2 id="network-title">
            Every centre, every result,
            <br />
            one secure system.
          </h2>
          <div
            className="centres-system-visual"
            aria-label="Illustrative flow from centre record through secure sync to referral follow-up"
          >
            <div className="centres-record">
              <span>Centre record</span>
              <i />
              <i />
              <i />
            </div>
            <div className="centres-sync-lane" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="centres-record centres-record-end">
              <span>Connected care</span>
              <strong>Secure sync</strong>
              <small>Referral follow-up</small>
            </div>
            <p>Illustrative system flow</p>
          </div>
        </div>
        <div className="centres-system-list">
          {systems.map(([title, copy], i) => (
            <article key={title} data-centre-reveal>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="centres-partnership" aria-labelledby="pilot-title">
        <div className="centres-wrap">
          <div className="centres-pilot-intro">
            <div data-centre-reveal>
              <p className="centres-label">05 / Government partnerships</p>
              <h2 id="pilot-title">
                Starting with a pilot.
                <br />
                Built to scale nationwide.
              </h2>
              <p>
                Under the proposed public-private model, partners provide space
                and workforce in existing hospitals. Salt Lick establishes
                centres, supplies technology, and delivers assessments.
              </p>
              <span className="centres-proposal">
                Proposed rollout · not an announcement of active centres
              </span>
            </div>
            <div className="centres-pilot-art" data-centre-depth>
              <img
                src={partnership}
                width="1536"
                height="1024"
                loading="lazy"
                alt="Conceptual illustration of hospital teams planning a centre, with Salt Lick signage"
              />
            </div>
          </div>
          <div className="centres-rollout">
            {[
              [
                "Pilot",
                "Two to three centres in selected high-burden districts.",
                "Proposed starting point",
              ],
              [
                "Review",
                "Review after three to six months, including screening numbers, high-risk identification, and completed referrals.",
                "Learn from evidence",
              ],
              [
                "Scale",
                "Expand regionally and nationally, supported by live reporting.",
                "Proposed expansion",
              ],
            ].map(([name, copy, label], i) => (
              <article key={name} data-centre-reveal>
                <span className="centres-rollout-index">0{i + 1}</span>
                <span className="centres-rollout-label">{label}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          
          <div className="centres-pilot-action">
            <p>Build the next chapter of accessible care.</p>
            <a className="button centrepage blue" href="/partner-with-us">
              Start a Pilot <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
