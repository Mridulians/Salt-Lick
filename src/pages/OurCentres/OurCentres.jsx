import { useEffect, useRef, useState } from "react";
import arrival from "../../assets/centres-arrival-official-logo.webp";
import report from "../../assets/centres-report-official-logo.webp";
import partnership from "../../assets/centres-partnership-official-logo.webp";
import networkBrandLogo from "../../assets/saltlick-logo.png";
import "./OurCentres.css";
import CentreInterior from "./CentreInterior";

const facilities = [
  [
    "Experience lounge",
    "A calm waiting area with self-registration kiosks and local-language support.",
    "Welcome",
  ],
  [
    "Face scan and risk profile",
    "Contactless vital signs and a guided risk questionnaire.",
    "Risk profile",
  ],
  [
    "Biochemistry room",
    "A minimal sample, analysed on site for metabolic and cancer markers.",
    "Biochemistry",
  ],

  [
    "Oral scan",
    "Radiation-free autofluorescence screening of the mouth.",
    "Oral scan",
  ],

  [
    "Women-only screening",
    "Radiation-free breast screening in a private, women-only suite.",
    "Private suite",
  ],

  [
    "Report desk",
    "Every result explained in person, with a clear next step.",
    "Your report",
  ],
];
const locations = [
  [
    "District hospitals",
    "Bringing early risk assessment to every district.",
    "district",
  ],
  [
    "Medical colleges",
    "Working alongside academic and teaching hospitals.",
    "college",
  ],
  ["City hospitals", "Easy access for busy urban populations.", "city"],
  [
    "Community outreach",
    "Local health workers invite and register people for screening.",
    "community",
  ],
];
const journey = [
  [
    "Arrive and register",
    "Sign in at the kiosk and give consent digitally.",
    "Your visit",
    "Registration & consent",
    "A clear starting point",
  ],
  [
    "Complete the assessment",
    "Questionnaire, face scan, minimal sample and radiation-free scans, in private rooms.",
    "Your assessment",
    "Private, guided steps",
    "One step at a time",
  ],
  [
    "Receive your report",
    "Your results are explained in person before you leave.",
    "Your report",
    "Explained with you",
    "Understanding comes first",
  ],
  [
    "Follow your pathway",
    " Guidance, monitoring or a referral, with follow-up until you reach care.",
    "Your next step",
    "A pathway forward",
    "Guidance · monitoring · referral",
  ],
];
const systems = [
  [
    "Always available",
    "Screening continues even when connectivity drops and syncs securely once restored.",
  ],
  [
    "One health record",
    "Every person keeps a single, secure record across visits.",
  ],
  [
    "Referral tracking",
    "Each referral is followed until the person reaches care.",
  ],
  ["Live dashboard", "Health authorities see population risk in real time."],
];

function PlaceDrawing({ type }) {
  return (
    <svg viewBox="0 0 200 130" aria-hidden="true" fill="none">

      <path d="M8 117H192" stroke="#15171c" strokeWidth="2" />
      {type === "district" && (
        <>
          <path
            d="M35 117V46h130v71"
            fill="#edf5fa"
            // fill="#15171c"
            // stroke="#9fbfd4"
            stroke="#15171c"
            strokeWidth="2"
          />
          <path
            d="M25 46l75-27 75 27"
            // fill="#f7e1ce"
            fill="#f2c39d"
            // stroke="#e4bb99"
            stroke="#15171c"
            strokeWidth="2"
          />
          <path d="M88 117V83h24v34" fill="#fff" stroke="#15171c" strokeWidth="2" />
          <path
            d="M52 64h20m56 0h20M100 34v15m-7-7h14"
            stroke="#15171c"
            strokeWidth="3"
          />
        </>
      )}
      {type === "college" && (
        <>
          <path
            d="M27 117V52h146v65"
            fill="#f2c39d"
            stroke="#15171c"
            strokeWidth="2"
          />
          <path
            d="M18 52l82-32 82 32H18Z"
            fill="#e7f1f8"
            stroke="#15171c"
            strokeWidth="2"
          />
          {[42, 78, 114, 150].map((x) => (
            <path key={x} d={`M${x} 61v45`} stroke="#15171c" strokeWidth="4" />
          ))}
          <path d="M21 109h158" stroke="#15171c" strokeWidth="3" />
        </>
      )}
      {type === "city" && (
        <>
          <path
            d="M25 117V53h48V18h69v99"
            fill="#e6f0f7"
            stroke="#15171c"
            strokeWidth="2"
          />
          <path
            d="M142 69h33v48"
            fill="#f2c39d"
            stroke="#15171c"
            strokeWidth="2"
          />
          {[37, 58, 79].map((y) => (
            <path
              key={y}
              d={`M87 ${y}h13m15 0h13`}
              stroke="#15171c"
              strokeWidth="6"
            />
          ))}
          <path d="M102 117V98h15v19" fill="#fff" stroke="#15171c" />
        </>
      )}
      {type === "community" && (
        <>
          <path
            d="M65 117V53l35-24 35 24v64"
            fill="#eaf3f8"
            stroke="#15171c"
            strokeWidth="2"
          />
          <path d="M85 117V81h30v36" fill="#f2c39d" stroke="#15171c" />
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

function CentreNetworkIcon({ kind }) {
  return (
    <span className="centres-network-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        {kind === "offline" ? <><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.8 16a5 5 0 0 1 6.4 0" /><circle cx="12" cy="19.5" r="1" /></>
        : kind === "record" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2.2" /><path d="M5.8 16c.7-1.3 1.8-2 3.2-2s2.5.7 3.2 2M14.5 10h4M14.5 13.5h3" /></>
        : kind === "referral" ? <><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" /></>
        : <><path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" /></>}
      </svg>
    </span>
  );
}

function NetworkCentreBuilding({ x, y, warm = false }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="72" cy="112" rx="71" ry="9" fill="#0f2a5c" opacity=".07" />
      <path d="m0 20 14-10h124l-14 10Z" fill={warm ? "#f6c89b" : "#7babc8"} />
      <path d="m124 20 14-10v91l-14 10Z" fill="#b7d2e3" />
      <rect y="20" width="124" height="91" rx="3" fill="#fff" stroke="#acc6d9" strokeWidth="1.5" />
      <path d="M0 20h124v24H0Z" fill={warm ? "#ee8a1f" : "#0f2a5c"} />
      <path d="M14 27v11m-5.5-5.5h11" stroke="#fff" strokeWidth="2.5" />
      <rect x="43" y="14" width="38" height="46" rx="4" fill="#fff" stroke="#d5e1eb" />
      <image href={networkBrandLogo} x="46" y="17" width="32" height="39" preserveAspectRatio="xMidYMid meet" />
      <g fill="#d8e9f3" stroke="#b3cddd" strokeWidth="1.2">
        <rect x="12" y="55" width="22" height="25" rx="2" />
        <rect x="90" y="55" width="22" height="25" rx="2" />
        <rect x="49" y="68" width="26" height="43" rx="2" />
      </g>
      <path d="M23 56v23m-10-11h20m68-12v23m-10-11h20M62 69v40" stroke="#fff" strokeWidth="1.5" />
      <path d="M6 111h112" stroke="#a9c7dc" strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

function ConnectedCentreIllustration() {
  const routes = [
    "M180 126H210Q222 126 222 138V151H245",
    "M180 315H209Q222 315 222 302V263H245",
    "M388 209H442",
    "M317 313V350Q317 362 329 362H443",
  ];
  return (
    <div className="centres-network-illustration">
      <svg viewBox="0 0 640 430" role="img" aria-label="Conceptual illustration of Salt Lick centres connected to one protected health record, referral follow-up and a reporting dashboard; no patient data">
        <defs>
          <linearGradient id="centres-connected-paper" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff" /><stop offset="1" stopColor="#f0f7fb" />
          </linearGradient>
          <linearGradient id="centres-connected-side" x1="0" x2="1" y2="1">
            <stop stopColor="#c6deed" /><stop offset="1" stopColor="#accbdf" />
          </linearGradient>
        </defs>
        <rect width="640" height="430" fill="#eaf2f8" />
        <path d="M30 371 588 335l29 35-544 36Z" fill="#dbeaf3" />
        <g fill="none" stroke="#8cafc8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {routes.map((route) => <path key={route} d={route} />)}
        </g>
        <g fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {routes.map((route, index) => (
            <path key={route} d={route} pathLength="100" className={`centres-network-flow centres-network-flow-${index}`} stroke={index % 2 ? "#0f7a74" : "#ee8a1f"} />
          ))}
        </g>
        <NetworkCentreBuilding x={42} y={56} />
        <NetworkCentreBuilding x={42} y={245} warm />
        <ellipse cx="324" cy="324" rx="94" ry="12" fill="#0f2a5c" opacity=".08" />
        <path d="m257 93 147 7v200l-147 8Z" fill="url(#centres-connected-side)" />
        <rect x="251" y="101" width="143" height="210" rx="12" fill="#fff" stroke="#accbdf" strokeWidth="1.5" />
        <rect x="242" y="111" width="143" height="202" rx="12" fill="url(#centres-connected-paper)" stroke="#b8cfdf" strokeWidth="1.5" />
        <path d="M254 111h119q12 0 12 12v6H242v-6q0-12 12-12Z" fill="#0f2a5c" />
        <circle cx="270" cy="151" r="13" fill="#d9eaf5" />
        <circle cx="270" cy="147" r="4.5" fill="#537fa0" />
        <path d="M262 159c0-9 16-9 16 0" fill="#537fa0" />
        <path d="M294 146h65m-65 10h45M260 179h98m-98 12h70" stroke="#accbdf" strokeWidth="4" strokeLinecap="round" />
        <path d="M299 237v-21a23 23 0 0 1 46 0v21" stroke="#0f2a5c" strokeWidth="8" fill="none" strokeLinecap="round" />
        <rect x="288" y="231" width="69" height="56" rx="12" fill="#ee8a1f" />
        <path d="M299 233h47" stroke="#ffc991" strokeWidth="3" strokeLinecap="round" />
        <circle cx="322.5" cy="253" r="5" fill="#0f2a5c" />
        <path d="M322.5 258v9" stroke="#0f2a5c" strokeWidth="4" strokeLinecap="round" />
        <path d="M269 298h33m40 0h16" stroke="#c6dce9" strokeWidth="3" strokeLinecap="round" />
        <rect x="447" y="116" width="157" height="203" rx="14" fill="#bdd4e4" />
        <rect x="440" y="109" width="157" height="203" rx="14" fill="#fff" stroke="#c4d5e2" strokeWidth="1.5" />
        <path d="M454 109h129q14 0 14 14v12H440v-12q0-14 14-14Z" fill="#0f2a5c" />
        <g fill="#accbdf"><circle cx="453" cy="122" r="2.5" /><circle cx="463" cy="122" r="2.5" /><circle cx="473" cy="122" r="2.5" /></g>
        <rect x="455" y="151" width="125" height="29" rx="6" fill="#eef5f9" />
        <path d="M465 161h59m-59 9h42" stroke="#accbdf" strokeWidth="3" strokeLinecap="round" />
        <circle cx="567" cy="165" r="5" fill="#23883f" className="centres-network-status" />
        <path d="M456 284h124" stroke="#dbe5ed" strokeWidth="1.5" />
        <rect x="460" y="244" width="20" height="39" rx="4" fill="#23883f" />
        <rect x="490" y="204" width="20" height="79" rx="4" fill="#0f7a74" />
        <rect x="520" y="221" width="20" height="62" rx="4" fill="#ee8a1f" />
        <rect x="550" y="251" width="20" height="32" rx="4" fill="#c23b2a" />
        <circle cx="582" cy="110" r="17" fill="#23883f" stroke="#fff" strokeWidth="3" />
        <path d="m575 110 5 5 9-11" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="443" y="337" width="120" height="50" rx="12" fill="#fff" stroke="#c4d5e2" strokeWidth="1.5" />
        <path d="m459 358 4-4a7 7 0 0 1 10 10l-4 4m-2-8-4 4a7 7 0 0 1-10-10l4-4" stroke="#0f7a74" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M484 362h32m-5-5 5 5-5 5" stroke="#accbdf" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="527" y="348" width="27" height="27" rx="8" fill="#e7f3f2" />
        <path d="M540.5 355v13m-6.5-6.5h13" stroke="#0f7a74" strokeWidth="2.2" strokeLinecap="round" />
        <g fill="#0f7a74" stroke="#fff" strokeWidth="2">
          <circle cx="242" cy="151" r="4" /><circle cx="242" cy="263" r="4" /><circle cx="385" cy="209" r="4" /><circle cx="317" cy="313" r="4" />
        </g>
      </svg>
    </div>
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
          <p className="centres-label">Salt Lick Centres</p>
          <h1 id="centres-title">
            Breakthrough cancer screening,
            <br />
            <em>close to every community.</em>
          </h1>
          <p>
            An earlier start is only possible when screening is within reach.
            Salt Lick Centres are set up within the hospitals communities
            already trust, so cancer risk can be found in time.
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
          <p className="centres-label">Where our centres are</p>
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
              <p className="centres-label">Your visit</p>
              <h2 id="journey-title">
                What to expect
                <br />
                at a Salt Lick Centre.
              </h2>
            </div>
            {/* <p>
              From arrival to a clear pathway forward.
              <br />
              Choose a step to see what happens next.
            </p> */}
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

      <section className="centres-network" aria-labelledby="network-title">
        <div className="centres-network-inner">
          <div>
            <p className="centres-network-label">Connected by design</p>
            <h2 id="network-title">Every centre, every<br />result, one secure system.</h2>
            <div className="centres-network-features">
              {systems.map(([title, copy], index) => (
                <article key={title}>
                  <CentreNetworkIcon kind={["offline", "record", "referral", "dashboard"][index]} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <ConnectedCentreIllustration />
        </div>
      </section>

      <section className="centres-partnership" aria-labelledby="pilot-title">
        <div className="centres-wrap">
          <div className="centres-pilot-intro">
            <div data-centre-reveal>
              <p className="centres-label">Partnering with governments</p>
              <h2 id="pilot-title">
                Starting with a pilot.
                <br />
                Built to scale nationwide.
              </h2>
              <p>
                Salt Lick works with governments through public-private
                partnerships. Partners provide space and health workforce within
                existing hospitals. Salt Lick sets up the centres, brings the
                technology and delivers the assessments.
              </p>
              {/* <span className="centres-proposal">
                Proposed rollout · not an announcement of active centres
              </span> */}
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
                "Two to three Salt Lick Centres in high-burden districts chosen together.",
                "Proposed starting point",
              ],
              [
                "Review",
                "Results reviewed within three to six months: people screened, high-risk identified, referrals completed.",
                "Learn from evidence",
              ],
              [
                "Scale",
                "Expansion across the region and nation, with live reporting throughout.",
                "Proposed expansion",
              ],
            ].map(([name, copy], i) => (
              <article key={name} data-centre-reveal>
                <span className="centres-rollout-index">0{i + 1}</span>
                {/* <span className="centres-rollout-label">{label}</span> */}
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
