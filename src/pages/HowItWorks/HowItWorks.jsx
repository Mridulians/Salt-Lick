import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import technologyPartnerLogo from "../../assets/healtLogo.png";
import knowledgePartnerLogo from "../../assets/EIOMS_logo.png";
import consultation from "../../assets/how-consultation-official-logo.webp";
import faceScan from "../../assets/how-face-scan-official-logo.webp";
import laboratory from "../../assets/how-laboratory-official-logo.webp";
import "./HowItWorks.css";

const stages = [
  [
    "Register",
    "Digital sign-up and consent, linked to a national health ID where available.",
    "1 min",
  ],
  [
    "Risk profile",
    "Questions on lifestyle, diet, tobacco, alcohol and family history.",
    "2 min",
  ],
  [
    "Face scan",
    "20+ vital signs from a 60-second contactless scan.",
    "1–2 min",
  ],
  [
    "Biochemical panel",
    "Metabolic and cancer markers from a minimal sample.",
    "2–3 min",
  ],
  [
    "Oral and breast scans",
    "Light-based imaging with no radiation.",
    "2 min each",
  ],
  ["AI risk score", "Every result read together into one score.", "Instant"],
  ["Report", "In print and by SMS, WhatsApp and app.", "1 min"],
];
const technologyFeatures = [
  [
    "Explainable AI",
    "Scores risk on the device in seconds, even offline, and shows clinicians the factors behind every result.",
    "ai",
  ],
  [
    "Encrypted records",
    "Data is encrypted at rest and in transit, with a tamper-proof ledger for every consent.",
    "lock",
  ],
  [
    "Global standards",
    "Built on HL7 FHIR to connect with national health records.",
    "globe",
  ],
  [
    "Privacy by design",
    "Consent can be withdrawn at any time and applies across all services within 24 hours.",
    "privacy",
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
const resultPathways = [
  {
    risk: "Low risk",
    copy: "Personalised lifestyle and nutrition guidance, with a date for the next screening.",
    kind: "low",
  },
  {
    risk: "Moderate risk",
    copy: "Teleconsultation with a clinician, regular monitoring and repeat screening.",
    kind: "moderate",
  },
  {
    risk: "High risk",
    copy: "Priority referral to a partner hospital for diagnosis, tracked until the person reaches care.",
    kind: "high",
  },
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
function RadiationScanArtwork({ type }) {
  const oral = type === "oral";
  return (
    <div className={`how-scan-art how-scan-art--${type}`}>
      <svg
        viewBox="0 0 560 340"
        role="img"
        aria-label={
          oral
            ? "Conceptual illustration of light-based oral screening, with a handheld instrument and an optical display"
            : "Conceptual illustration of a private screening suite, with a fully clothed visitor and a clinician"
        }
      >
        <defs>
          <linearGradient
            id={`how-scan-${type}-backdrop`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#172F50" />
            <stop offset="1" stopColor="#101D32" />
          </linearGradient>
          <linearGradient id={`how-scan-${type}-blue`} x1="0" x2="1" y2="1">
            <stop stopColor="#F5FAFE" />
            <stop offset="1" stopColor="#ACCBDF" />
          </linearGradient>
          <linearGradient id={`how-scan-${type}-light`} x1="0" x2="1">
            <stop stopColor="#F2C39D" stopOpacity="0" />
            <stop offset=".7" stopColor="#F2C39D" stopOpacity=".45" />
            <stop offset="1" stopColor="#F2C39D" />
          </linearGradient>
          <linearGradient id={`how-scan-${type}-curtain`}>
            <stop stopColor="#244B70" />
            <stop offset=".35" stopColor="#537FA4" />
            <stop offset=".7" stopColor="#23476A" />
            <stop offset="1" stopColor="#416C93" />
          </linearGradient>
          <pattern
            id={`how-scan-${type}-grid`}
            width="34"
            height="34"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M34 0H0V34"
              fill="none"
              stroke="#ACCBDF"
              strokeOpacity=".09"
            />
          </pattern>
          <clipPath id={`how-scan-${type}-display`}>
            <rect x="395" y="126" width="103" height="105" rx="9" />
          </clipPath>
        </defs>
        <rect
          width="560"
          height="340"
          fill={`url(#how-scan-${type}-backdrop)`}
        />
        <rect width="560" height="340" fill={`url(#how-scan-${type}-grid)`} />
        {oral ? (
          <>
            <path d="M0 292 560 242V340H0Z" fill="#234366" opacity=".45" />
            <ellipse
              cx="281"
              cy="291"
              rx="209"
              ry="13"
              fill="#071426"
              opacity=".5"
            />
            {/* A stylised profile and instrument: illustration, not a patient scan. */}
            <g className="how-scan-profile">
              <path
                d="M86 282c5-40 31-65 70-68l27-1 34 22 17 47Z"
                fill="#668FB2"
              />
              <path d="m147 195-1 37 25 18 27-20-8-40Z" fill="#C8A58D" />
              <path
                d="M134 88c37-25 82-2 82 38v23l17 24-8 10 8 9-14 6-3 14c-2 15-25 25-43 12l-23-24c-25-6-37-24-38-51-2-28 2-45 22-61Z"
                fill={`url(#how-scan-${type}-blue)`}
              />
              <path
                d="M119 152c-17-57 22-92 65-76 22 8 35 28 32 51-23-1-42-14-53-28-9 25-24 40-44 53Z"
                fill="#0B192E"
                stroke="#537B9E"
                strokeWidth="1.2"
              />
              <path
                d="m207 150 7 1m-2 36 13-1"
                stroke="#365E7E"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M168 161c-10-10-20 5-12 14"
                fill="none"
                stroke="#7E9FB6"
                strokeWidth="2"
              />
              <path d="m146 232 25 18 27-20 17 52H127Z" fill="#DCEBF5" />
              <path d="m170 250 5 32" stroke="#8BADCA" strokeWidth="2" />
            </g>
            <path
              d="m230 178 65-28v61l-65-22Z"
              fill={`url(#how-scan-${type}-light)`}
              className="how-scan-light-cone"
            />
            <g
              className="how-scan-light-flow"
              stroke="#F2C39D"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="m265 160-9 15 9 17" />
              <path d="m284 154-12 21 12 24" opacity=".6" />
            </g>
            <g className="how-scan-instrument">
              <path d="m295 153 49-9 23 23-4 29-54 9-14-15Z" fill="#537FA4" />
              <path
                d="m295 149 47-8 21 22-7 26-51 9-13-15Z"
                fill="#F8FCFF"
                stroke="#ACCBDF"
                strokeWidth="2"
              />
              <path d="m286 158 14-2 5 24-14 3Z" fill="#F2C39D" />
              <path
                d="m323 194 11 51-19 4-15-51Z"
                fill="#ACCBDF"
                stroke="#7C9DB8"
              />
              <path
                d="m309 153 23-4"
                stroke="#CADDEB"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="339" cy="169" r="4" fill="#E6AE7E" />
            </g>
            <path
              d="M349 190h20v-24h16"
              stroke="#ACCBDF"
              strokeWidth="1.5"
              fill="none"
              opacity=".5"
            />
            <g>
              <path d="m385 80 132 8v165l-132-7Z" fill="#587C9C" />
              <rect
                x="380"
                y="77"
                width="132"
                height="171"
                rx="13"
                fill="#EAF3FA"
                stroke="#ACCBDF"
                strokeWidth="2"
              />
              <text
                x="396"
                y="107"
                fill="#244B66"
                fontSize="11"
                fontFamily="Inter, sans-serif"
              >
                Optical view
              </text>
              <rect
                x="395"
                y="126"
                width="103"
                height="105"
                rx="9"
                fill="#172F50"
              />
              <g clipPath={`url(#how-scan-${type}-display)`}>
                <g fill="none" stroke="#ACCBDF" strokeWidth="1.5" opacity=".7">
                  <path d="m397 149 22-12 22 12v25l-22 12-22-12Zm44 0 22-12 22 12v25l-22 12-22-12ZM419 186l22-12 22 12v25l-22 12-22-12Z" />
                  <path d="m375 186 22-12 22 12v25l-22 12-22-12Zm88 0 22-12 22 12v25l-22 12-22-12Z" />
                </g>
                <rect
                  className="how-scan-display-light"
                  x="395"
                  y="128"
                  width="103"
                  height="22"
                  fill={`url(#how-scan-${type}-light)`}
                />
                <path
                  className="how-scan-display-light"
                  d="M395 148H498"
                  stroke="#F2C39D"
                  strokeWidth="2"
                />
              </g>
              <path d="m433 249-3 24-24 6h84l-26-7-2-23" fill="#86A9C4" />
              <path
                d="M406 279h84"
                stroke="#C4DBEA"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
            {/* <rect x="38" y="27" width="65" height="69" rx="8" fill="#fff" /> */}
            {/* <image href={saltLickLogo} x="46" y="31" width="49" height="59" preserveAspectRatio="xMidYMid meet" /> */}
            {/* <path d="M524 35v18m-9-9h18" stroke="#F2C39D" strokeWidth="2" opacity=".8" /> */}
          </>
        ) : (
          <>
            <path d="m30 61 333-15 164 37v210L30 277Z" fill="#EAF2F9" />
            <path d="m363 46 164 37v210l-164-46Z" fill="#C2D8E8" />
            <path d="m30 277 333-30 164 46-313 38Z" fill="#F2C39D" />
            <path d="m215 331 1-55 147-29 164 46" fill="#FADEC5" />
            <path d="M49 93h100v185H49Z" fill="#294E72" />
            <path d="M59 103h80v172H59Z" fill="#456F95" />
            <path
              d="M126 184v20"
              stroke="#F2C39D"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* <rect x="72" y="42" width="55" height="59" rx="6" fill="#fff" /> */}
            {/* <image href={saltLickLogo} x="78" y="46" width="43" height="51" preserveAspectRatio="xMidYMid meet" /> */}
            <text
              x="173"
              y="85"
              fill="#244B66"
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              Private screening suite
            </text>
            <rect
              x="175"
              y="98"
              width="147"
              height="59"
              rx="5"
              fill="#fff"
              stroke="#C2D8E8"
            />
            <path
              d="M190 143h116m-106-45v59m31-59v59m31-59v59m31-59v59"
              stroke="#E1ECF4"
            />
            <path
              className="how-scan-room-light"
              d="m177 100 145 1-60 153-87 7Z"
              fill="#fff"
              opacity=".32"
            />
            <ellipse
              cx="301"
              cy="279"
              rx="111"
              ry="14"
              fill="#244B66"
              opacity=".12"
            />
            {/* Fully clothed adult visitor in a calm, private room. */}
            <g>
              <rect
                x="203"
                y="183"
                width="78"
                height="72"
                rx="17"
                fill="#335D85"
              />
              <path
                d="m216 253-6 39m58-39 8 39"
                stroke="#244B66"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path d="m219 229 9 45h24l8-45Z" fill="#163453" />
              <path
                d="m227 271 1 23m22-23 8 23"
                stroke="#1F3D5D"
                strokeWidth="11"
                strokeLinecap="round"
              />
              <path
                d="m222 292 17 2m13-2 18 1"
                stroke="#101D32"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path d="M212 190c0-23 57-23 57 0l-5 46h-45Z" fill="#F2C39D" />
              <path
                d="m216 190-10 36 26 7m33-43 9 31-23 10"
                stroke="#DCA77E"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M236 162v14" stroke="#CF9A78" strokeWidth="12" />
              <ellipse cx="239" cy="147" rx="21" ry="25" fill="#D6A383" />
              <path
                d="M218 150c-11-37 26-53 43-25 5 9 3 18 1 25-7-2-13-14-15-20-5 10-13 18-29 20Z"
                fill="#253044"
              />
              <path
                d="M221 151v17m38-17v17"
                stroke="#253044"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="m243 153 5 1"
                stroke="#93664E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g>
              <path
                d="m347 236-7 55m30-55 8 55"
                stroke="#244B66"
                strokeWidth="13"
                strokeLinecap="round"
              />
              <path
                d="m337 291 16 2m20-2 16 2"
                stroke="#101D32"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M327 178c0-19 51-21 58 0l1 72h-64Z"
                fill="#fff"
                stroke="#C3D7E6"
                strokeWidth="1.5"
              />
              <path d="m345 173 10 24 12-25" fill="#7B9DB8" />
              <path
                d="m347 167 1 11m14-12v12"
                stroke="#93654F"
                strokeWidth="8"
              />
              <ellipse cx="355" cy="146" rx="20" ry="24" fill="#A9775B" />
              <path
                d="M335 145c-3-29 34-39 41-10l-5 16-5-15-24 1-7 8Z"
                fill="#172B42"
              />
              <circle cx="375" cy="133" r="9" fill="#172B42" />
              <path
                d="m361 153 5 1"
                stroke="#754D3C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="m331 186-17 29 27 11m41-39 7 27-23 9"
                stroke="#EDF5FA"
                strokeWidth="13"
                fill="none"
                strokeLinecap="round"
              />
              <g className="how-scan-clinician-note">
                <path
                  d="m334 207 30-9 13 32-32 8Z"
                  fill="#244B66"
                  stroke="#7195B4"
                />
                <path
                  d="m342 213 15-4m-12 11 16-5m-13 11 11-3"
                  stroke="#ACCBDF"
                  strokeWidth="2"
                />
              </g>
              <path
                d="m340 190 1 15m28-15-1 15"
                stroke="#7A9BB4"
                strokeWidth="2"
              />
            </g>
            <path
              d="M409 75h105"
              stroke="#101D32"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <g className="how-scan-privacy-curtain">
              <path
                d="M421 79h84v199l-16 5-17-6-17 5-17-6-17 4Z"
                fill={`url(#how-scan-${type}-curtain)`}
              />
              <path
                d="M434 82v194m15-194v197m16-197v193m16-193v197m14-197v192"
                stroke="#8EB1CC"
                strokeWidth="2"
                opacity=".3"
              />
              <path d="M421 79h84" stroke="#F2C39D" strokeWidth="4" />
            </g>
            <path
              d="M34 302h69m-38-8v16"
              stroke="#ACCBDF"
              strokeWidth="2"
              opacity=".6"
            />
          </>
        )}
      </svg>
    </div>
  );
}

function ResultPathwayIcon({ kind }) {
  return (
    <span className="how-risk-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {kind === "low" ? (
          <>
            <path d="M5 19C5 10 10 5 20 4c-.5 10-5.5 15-15 15Z" />
            <path d="m5 19 8-8" />
          </>
        ) : kind === "moderate" ? (
          <>
            <path d="M4 5h16v11H9l-5 4V5Z" />
            <path d="M8 9.5h8M8 12.5h5" />
          </>
        ) : (
          <>
            <path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2" />
            <circle cx="20" cy="11" r="2" />
          </>
        )}
      </svg>
    </span>
  );
}

function RunningResultBorder() {
  return (
    <svg className="how-risk-border" aria-hidden="true" focusable="false">
      <rect
        className="how-risk-border-base"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="7"
        pathLength="100"
      />
      <rect
        className="how-risk-border-run"
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="7"
        pathLength="100"
      />
    </svg>
  );
}

function WireframeProcessIcon({ kind }) {
  return (
    <span className="how-wireframe-icon" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {kind === "register" ? (
          <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="2.2" />
            <path d="M5.8 16c.7-1.3 1.8-2 3.2-2s2.5.7 3.2 2M14.5 10h4M14.5 13.5h3" />
          </>
        ) : kind === "profile" ? (
          <>
            <path d="M4 5h16v11H9l-5 4V5ZM8 9.5h8M8 12.5h5" />
          </>
        ) : kind === "face" ? (
          <>
            <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
            <circle cx="12" cy="11" r="4" />
            <path d="M8.5 18c1-1.6 2.2-2.3 3.5-2.3s2.5.7 3.5 2.3" />
          </>
        ) : kind === "sample" ? (
          <>
            <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11ZM9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
          </>
        ) : kind === "light" ? (
          <>
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
          </>
        ) : kind === "ai" ? (
          <>
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M10 14l2-4 2 4m-3.4-1.2h2.8" />
          </>
        ) : kind === "lock" ? (
          <>
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </>
        ) : kind === "globe" ? (
          <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17M12 3.5c2.5 2.8 2.5 14.2 0 17M12 3.5c-2.5 2.8-2.5 14.2 0 17" />
          </>
        ) : kind === "privacy" ? (
          <>
            <path d="m12 3 7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </>
        ) : (
          <>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M9 8h6M9 12h6M9 16h3" />
          </>
        )}
      </svg>
    </span>
  );
}

function ScreeningJourney() {
  const [active, setActive] = useState(null);
  const [position, setPosition] = useState(null);
  const scroller = useRef(null);
  const preview = useRef(null);
  const trigger = useRef(null);
  const timer = useRef(null);
  const skipFocus = useRef(false);
  const cancelClose = useCallback(() => window.clearTimeout(timer.current), []);
  const dismiss = useCallback(() => {
    window.clearTimeout(timer.current);
    setActive(null);
  }, []);
  const open = useCallback((index, element) => {
    window.clearTimeout(timer.current);
    trigger.current = element;
    const rect = element.getBoundingClientRect();
    const width = Math.min(560, window.innerWidth - 32);
    if (window.innerWidth <= 600) {
      setPosition({ left: 12, bottom: 12, width: window.innerWidth - 24 });
    } else {
      const above = rect.top >= 330;
      setPosition({
        left: Math.max(
          16,
          Math.min(rect.left - 16, window.innerWidth - width - 16),
        ),
        top: above
          ? Math.max(16, rect.top - 320)
          : Math.max(16, Math.min(rect.bottom + 12, window.innerHeight - 320)),
        width,
      });
    }
    setActive(index);
  }, []);
  const updatePreviewPosition = useCallback(() => {
    if (active === null || !trigger.current) return;
    const rect = trigger.current.getBoundingClientRect();
    const bounds = scroller.current.getBoundingClientRect();
    if (
      rect.right <= bounds.left ||
      rect.left >= bounds.right ||
      rect.bottom <= 0 ||
      rect.top >= window.innerHeight
    )
      dismiss();
    else open(active, trigger.current);
  }, [active, dismiss, open]);
  const scheduleClose = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      if (
        !preview.current?.contains(document.activeElement) &&
        document.activeElement !== trigger.current
      )
        setActive(null);
    }, 220);
  }, []);
  const closeAndRestoreFocus = useCallback(() => {
    const restore = preview.current?.contains(document.activeElement);
    dismiss();
    if (
      restore &&
      trigger.current &&
      document.activeElement !== trigger.current
    ) {
      skipFocus.current = true;
      trigger.current.focus({ preventScroll: true });
      skipFocus.current = false;
    }
  }, [dismiss]);
  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndRestoreFocus();
      }
    };
    const onOutside = (event) => {
      if (
        !scroller.current?.contains(event.target) &&
        !preview.current?.contains(event.target)
      )
        dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onOutside);
    window.addEventListener("scroll", updatePreviewPosition, { passive: true });
    window.addEventListener("resize", dismiss);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onOutside);
      window.removeEventListener("scroll", updatePreviewPosition);
      window.removeEventListener("resize", dismiss);
    };
  }, [active, closeAndRestoreFocus, dismiss, updatePreviewPosition]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <section
      className="how-screening how-wireframe-section"
      id="screening-journey"
      aria-labelledby="screening-title"
    >
      <div className="how-wireframe-wrap">
        <p className="how-wireframe-label">The screening journey</p>
        <h2 id="screening-title">
          What happens during
          <br />a Salt Lick screening.
        </h2>
        <div
          className="how-journey-scroller"
          ref={scroller}
          onScroll={updatePreviewPosition}
        >
          <ol
            className="how-journey-steps"
            aria-label="Screening journey steps"
          >
            {stages.map(([name, copy, time], index) => (
              <li key={name}>
                <button
                  type="button"
                  data-journey-step={index}
                  aria-haspopup="dialog"
                  aria-expanded={active === index}
                  aria-controls={
                    active === index ? "screening-step-preview" : undefined
                  }
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "touch")
                      open(index, event.currentTarget);
                  }}
                  onPointerLeave={scheduleClose}
                  onPointerDown={(event) => {
                    if (event.pointerType === "touch")
                      open(index, event.currentTarget);
                  }}
                  onFocus={(event) => {
                    if (skipFocus.current) return;
                    const element = event.currentTarget;
                    requestAnimationFrame(() => {
                      if (document.activeElement === element)
                        open(index, element);
                    });
                  }}
                  onBlur={(event) => {
                    if (!preview.current?.contains(event.relatedTarget))
                      scheduleClose();
                  }}
                  onKeyDown={(event) => {
                    let next;
                    if (event.key === "ArrowRight")
                      next = (index + 1) % stages.length;
                    else if (event.key === "ArrowLeft")
                      next = (index + stages.length - 1) % stages.length;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = stages.length - 1;
                    else if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      open(index, event.currentTarget);
                      return;
                    } else return;
                    event.preventDefault();
                    const button = scroller.current.querySelector(
                      `[data-journey-step="${next}"]`,
                    );
                    button.scrollIntoView({
                      block: "nearest",
                      inline: "nearest",
                      behavior: "auto",
                    });
                    button.focus({ preventScroll: true });
                  }}
                >
                  <WireframeProcessIcon
                    kind={
                      [
                        "register",
                        "profile",
                        "face",
                        "sample",
                        "light",
                        "ai",
                        "report",
                      ][index]
                    }
                  />
                  <strong>{name}</strong>
                  <span className="how-journey-description">{copy}</span>
                  <em>{time}</em>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {active !== null &&
        position &&
        createPortal(
          <div
            className="how-journey-preview"
            id="screening-step-preview"
            role="dialog"
            aria-modal="false"
            aria-labelledby="screening-preview-title"
            aria-describedby="screening-preview-copy"
            ref={preview}
            style={position}
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
            onFocus={cancelClose}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                !scroller.current?.contains(event.relatedTarget)
              )
                scheduleClose();
            }}
          >
            <button
              className="how-journey-preview-close"
              type="button"
              aria-label="Close step preview"
              onClick={closeAndRestoreFocus}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m5 5 10 10M15 5 5 15" />
              </svg>
            </button>
            <div className="how-journey-art-box">
              <StageArt key={active} stage={active} />
            </div>
            <div className="how-journey-preview-copy">
              <h3 id="screening-preview-title">{stages[active][0]}</h3>
              <p id="screening-preview-copy">{stages[active][1]}</p>
              <em>{stages[active][2]}</em>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

function TechnologyNetworkDiagram() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Illustrative network of screening units connected to a population risk dashboard"
    >
      <rect width="640" height="420" fill="#eaf2f8" />
      <path
        d="M40 120 q60 -70 150 -50 t140 30 q40 60 10 120 t-90 110 q-80 30 -150 -20 t-60 -190z"
        fill="#cfe3d6"
      />
      <path
        d="M90 150 q40 -30 90 -10 t90 30"
        stroke="#b2cdbc"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M80 250 q50 10 100 -10 t110 0"
        stroke="#b2cdbc"
        strokeWidth="2"
        fill="none"
      />
      <g
        stroke="#123f8f"
        strokeWidth="2"
        strokeDasharray="4 5"
        fill="none"
        opacity=".55"
        className="how-technology-links"
      >
        <path d="M120 150 L230 120 L300 200 L180 270 L120 150" />
        <path d="M230 120 L400 120" />
        <path d="M300 200 L400 200" />
        <path d="M180 270 L400 280" />
      </g>
      <g className="how-technology-pin how-technology-pin-0">
        <path
          d="M120 150 c-9 -12 -14 -18 -14 -26 a14 14 0 0 1 28 0 c0 8 -5 14 -14 26z"
          fill="#ee8a1f"
        />
        <circle cx="120" cy="124" r="5" fill="#fff" />
      </g>
      <g className="how-technology-pin how-technology-pin-1">
        <path
          d="M230 120 c-9 -12 -14 -18 -14 -26 a14 14 0 0 1 28 0 c0 8 -5 14 -14 26z"
          fill="#0f7a74"
        />
        <circle cx="230" cy="94" r="5" fill="#fff" />
      </g>
      <g className="how-technology-pin how-technology-pin-2">
        <path
          d="M300 200 c-9 -12 -14 -18 -14 -26 a14 14 0 0 1 28 0 c0 8 -5 14 -14 26z"
          fill="#ee8a1f"
        />
        <circle cx="300" cy="174" r="5" fill="#fff" />
      </g>
      <g className="how-technology-pin how-technology-pin-3">
        <path
          d="M180 270 c-9 -12 -14 -18 -14 -26 a14 14 0 0 1 28 0 c0 8 -5 14 -14 26z"
          fill="#0f7a74"
        />
        <circle cx="180" cy="244" r="5" fill="#fff" />
      </g>
      <g className="how-technology-pin how-technology-pin-4">
        <path
          d="M250 330 c-9 -12 -14 -18 -14 -26 a14 14 0 0 1 28 0 c0 8 -5 14 -14 26z"
          fill="#ee8a1f"
        />
        <circle cx="250" cy="304" r="5" fill="#fff" />
      </g>
      <rect
        x="400"
        y="70"
        width="210"
        height="280"
        rx="16"
        fill="#fff"
        stroke="#d5dde6"
        strokeWidth="2"
      />
      <text
        x="420"
        y="102"
        fontFamily="How Wireframe Body, Segoe UI, Arial, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="#15171c"
      >
        Population risk
      </text>
      <text
        x="420"
        y="122"
        fontFamily="How Wireframe Body, Segoe UI, Arial, sans-serif"
        fontSize="11.5"
        fill="#5d6472"
      >
        Live · illustrative
      </text>
      <g>
        <rect x="424" y="250" width="26" height="70" rx="4" fill="#23883f" />
        <rect x="462" y="210" width="26" height="110" rx="4" fill="#0f7a74" />
        <rect x="500" y="230" width="26" height="90" rx="4" fill="#ee8a1f" />
        <rect x="538" y="270" width="26" height="50" rx="4" fill="#c23b2a" />
      </g>
      <rect x="420" y="140" width="170" height="44" rx="8" fill="#f1f6fa" />
      <text
        x="434"
        y="168"
        fontFamily="How Wireframe Body, Segoe UI, Arial, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="#123f8f"
      >
        Referrals tracked
      </text>
      <circle
        cx="572"
        cy="162"
        r="7"
        fill="#23883f"
        className="how-technology-status"
      />
    </svg>
  );
}

export default function HowItWorks() {
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
          <p className="how-label">How it works</p>
          <h1 id="how-title">
            Act earlier,
            <br />
            <em>in a single visit.</em>
          </h1>
          <p>
            Gentle, radiation-free and finished in under 30 minutes. Every
            person leaves with a clear picture of their cancer risk and a clear
            next step, while there is still time to change the course.
          </p>
          <a className="button blue" href="#screening-journey">
            Explore your visit <span aria-hidden="true">↓</span>
          </a>
          {/* <div className="how-hero-note">Risk assessment, not a diagnosis.</div> */}
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
        {/* <div className="how-hero-strip">
          <span>01 / Understand your risk</span>
          <span>02 / Meet your care team</span>
          <span>03 / Know what comes next</span>
        </div> */}
      </section>

      <ScreeningJourney />

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
          <p className="how-label">Face scan</p>
          <h2 id="face-title">
            Vital signs,
            <br />
            read in 60 seconds.
          </h2>
          <p className="how-lead">
            The person simply looks into a screen. AI reads tiny changes in skin
            colour caused by blood flow and turns them into more than 20
            measurements.
          </p>
          <ul className="how-signal-list">
            {[
              "Heart rate and heart-rate variability.",
              "Oxygen saturation and breathing rate.",
              "Blood-pressure trends.",
              "Stress indicators and metabolic risk signals.",
            ].map((x) => (
              <li key={x}>
                {/* <span>0{i + 1}</span> */}
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="how-lab" aria-labelledby="lab-title">
        <div className="how-wrap">
          <Heading
            label="Biochemical panel"
            copy="A compact analyser delivers results in minutes, on site, without sending samples away."
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
                  "Tumour markers linked to breast, lung, prostate, gastrointestinal, and oral cancers.",
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
        <Heading label="Radiation-free scans">
          <span id="light-title">
            Seeing early change,
            <br />
            with light alone.
          </span>
        </Heading>
        <div className="how-light-grid">
          <article
            className="how-scan-card how-scan-card--oral"
            data-how-reveal
          >
            <RadiationScanArtwork type="oral" />
            <div className="how-scan-copy">
              <h3>Oral scan</h3>
              <p>
                {" "}
                Autofluorescent light highlights suspicious lesions in the
                mouth, one of the most common cancer sites in many parts of the
                world.
              </p>
            </div>
          </article>
          <article
            className="how-scan-card how-scan-card--breast"
            data-how-reveal
          >
            <RadiationScanArtwork type="breast" />
            <div className="how-scan-copy">
              <h3>Breast scan</h3>
              <p>
                Optical transillumination reveals abnormal blood-vessel
                patterns, cysts and masses, with no X-rays and no compression,
                in a private women-only space.
              </p>
            </div>
          </article>
        </div>
      </section>


      <section className="how-pathways" aria-labelledby="path-title">
        <div className="how-wrap">
          <p className="how-risk-label">After the screening</p>
          <h2 id="path-title">
            A clear next step
            <br />
            for every result.
          </h2>
          <div className="how-risk-grid">
            {resultPathways.map(({ risk, copy, kind }) => (
              <article
                className={`how-risk-card how-risk-card--${kind}`}
                key={kind}
              >
                <RunningResultBorder />
                <ResultPathwayIcon kind={kind} />
                <h3>{risk}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="how-technology how-wireframe-section"
        aria-labelledby="tech-title"
      >
        <div className="how-wireframe-wrap how-technology-layout">
          <div>
            <p className="how-wireframe-label">Technology and data</p>
            <h2 id="tech-title">
              Clinical-grade technology.
              <br />
              Data that stays protected.
            </h2>
            <div className="how-technology-partners">
              <div className="how-technology-partner">
                <span>Technology partner</span>
                <img
                  src={technologyPartnerLogo}
                  alt="Health Voitho Technologies"
                  width="2048"
                  height="1365"
                />
              </div>
              <div className="how-technology-partner">
                <span>Knowledge partner</span>
                <img
                  src={knowledgePartnerLogo}
                  alt="EIOMS"
                  width="1214"
                  height="552"
                />
              </div>
            </div>
            <div className="how-technology-features">
              {technologyFeatures.map(([title, copy, kind]) => (
                <article key={title}>
                  <WireframeProcessIcon kind={kind} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="how-technology-diagram">
            <TechnologyNetworkDiagram />
          </div>
        </div>
      </section>
      <section className="how-faq how-wrap" aria-labelledby="faq-title">
        <div data-how-reveal>
          <p className="how-label">Questions</p>
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
          {/* <p className="how-label">08 / The next step, together</p> */}
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
