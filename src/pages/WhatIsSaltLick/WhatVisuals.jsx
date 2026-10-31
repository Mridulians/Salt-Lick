import styles from "./WhatIsSaltLick.module.css";
const c = (s) =>
  s
    .split(/\s+/)
    .map((name) => styles[name])
    .join(" ");
export function Icon({ type }) {
  const paths = {
    lifestyle: (
      <>
        <circle cx="23" cy="6" r="3" />
        <path d="m18 11-5 4-6-2m11-2 4 7h6M13 15l4 6-4 8m4-8 8 6M18 11l4-2" />
      </>
    ),
    family: (
      <>
        <circle cx="10" cy="10" r="4" />
        <circle cx="24" cy="10" r="3" />
        <path d="M3 27v-4a7 7 0 0 1 14 0v4m4 0v-5a5 5 0 0 1 9 0v5" />
      </>
    ),
    heart: (
      <>
        <path d="M16 28S3 20 3 11a7 7 0 0 1 13-4 7 7 0 0 1 13 4c0 9-13 17-13 17Z" />
        <path d="M4 16h7l3-6 5 12 3-6h6" />
      </>
    ),
    bio: (
      <>
        <path d="M12 3h8m-6 0v11L6 26q-2 3 2 3h16q4 0 2-3l-8-12V3M10 20h12" />
        <circle cx="13" cy="24" r="1" />
        <circle cx="20" cy="25" r="1" />
      </>
    ),
    tissue: (
      <>
        <path d="M5 6h22v20H5zM5 15h22M14 6v9m5 0v11" />
        <path d="m8 21 3 2m12-13 1 1" />
      </>
    ),
    chip: (
      <>
        <rect x="7" y="7" width="18" height="18" rx="4" />
        <path d="M12 2v5m8-5v5m-8 18v5m8-5v5M2 12h5m-5 8h5m18-8h5m-5 8h5" />
        <path d="m11 21 4-10h2l4 10m-8-4h6" />
      </>
    ),
    light: (
      <>
        <path d="m21 4 7 7-12 12-7-7L21 4Zm-4 4 7 7M7 21l-4 4m8-1-1 6M5 17l-4 1" />
      </>
    ),
    clock: (
      <>
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v9l6 4" />
      </>
    ),
    network: (
      <>
        <rect x="11" y="3" width="10" height="7" rx="2" />
        <rect x="2" y="23" width="10" height="7" rx="2" />
        <rect x="21" y="23" width="9" height="7" rx="2" />
        <path d="M16 10v7H7v6m9-6h9v6" />
      </>
    ),
    doctor: (
      <>
        <path d="M8 3v10a8 8 0 0 0 16 0V3M6 3h5m10 0h5M16 21v3a5 5 0 0 0 10 0v-6" />
        <circle cx="26" cy="15" r="3" />
      </>
    ),
    shield: (
      <>
        <path d="M16 2 28 7v9c0 8-12 14-12 14S4 24 4 16V7L16 2Z" />
        <path d="m10 16 4 4 8-9" />
      </>
    ),
    report: (
      <>
        <path d="M7 3h13l6 6v21H7V3Zm13 0v7h6M11 15h10m-10 5h10m-10 5h6" />
      </>
    ),
    oral: (
      <>
        <path d="M6 9q1-8 10-4 9-4 10 4c1 7-4 19-6 19s-1-11-4-11-2 11-4 11S5 16 6 9Z" />
        <path d="M7 10q9 7 18 0" />
      </>
    ),
    breast: (
      <>
        <path d="m11 3-2 9q-7 4-6 11 0 6 7 6t7-6M21 3l2 9q7 4 6 11 0 6-7 6-5 0-5-6M14 3l2 7 2-7" />
      </>
    ),
    cervical: (
      <>
        <path d="M4 6q6-6 12 4 6-10 12-4M4 6v5q0 6 7 7l3 7v5m14-24v5q0 6-7 7l-3 7v5M12 13l4 5 4-5" />
      </>
    ),
    lung: (
      <>
        <path d="M14 3v10L9 8C5 7 2 18 3 25q1 5 9 1l2-2V13m4-10v10l5-5c4-1 7 10 6 17q-1 5-9 1l-2-2V13M14 8h4" />
      </>
    ),
    prostate: (
      <>
        <path d="M8 3h16l-2 11-6 5-6-5L8 3Zm8 16v11M9 24q0-8 7-8t7 8q-7 6-14 0Z" />
      </>
    ),
    gut: (
      <>
        <path d="M13 2v8q-8-5-9 3-2 5 5 7h13q7 0 6 5-1 5-7 3H9q-6 1-5-5m13-21v10q9-2 11 3 1 5-5 5M10 16h10m-9 9h8" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 32 32"
      className={c("icon")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type] || paths.chip}
    </svg>
  );
}
export function GapDiagram({ early }) {
  return (
    <div className={c("timeline")} data-early={early}>
      <div className={c("timeline-top")}>
        <span>Salt Lick shifts the start line</span>
        <small>Earlier → Later</small>
      </div>
      <div className={c("timeline-windows")}>
        <span>Reversible window</span>
        <span>Disease & treatment window</span>
      </div>
      <div className={c("timeline-stages")}>
        <svg
          className={c("timeline-rail")}
          viewBox="0 0 1100 48"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M4 24H1095m-8-5 8 5-8 5" />
        </svg>
        <svg
          className={c("timeline-shift")}
          viewBox="0 0 1000 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M999 12H4m10-7L4 12l10 7" />
          <path
            className={c("shift-highlight")}
            pathLength="100"
            d="M999 12H4"
          />
        </svg>
        <div>
          <span className={c("start-flag")}>Salt Lick starts</span>
          <i />
          <strong>Risk signals emerge</strong>
        </div>
        <div>
          <i />
          <strong>Fragmented routine care</strong>
        </div>
        <div className={c("boundary")}>
          <i />
          <strong>Cancer becomes detectable</strong>
          <small className={c("mobile-treatment")}>
            Disease & treatment window
          </small>
        </div>
        <div>
          <span className={c("later-flag")}>Care starts today</span>
          <i />
          <strong>Diagnosis & care</strong>
        </div>
      </div>
    </div>
  );
}


export function SignalBoard({ signals, signal, setSignal }) {
  return (
    <div className={c("signal-board")}>
      <div className={c("board-heading")}>
        <span>One person. Connected context.</span>
        <span className={c("board-caption")}>
          <Icon type="report" />
          AI risk assessment
        </span>
      </div>
      <div className={c("assembly-layout")}>
        <div className={c("assembly-stage")} aria-hidden="true">
          <div className={c("assembly-floor")}>
            <i />
            <i />
            <i />
          </div>
          <div className={c("folio-frame")}>
            <span>Combined risk assessment</span>
            <div className={c("folio-corner corner-a")} />
            <div className={c("folio-corner corner-b")} />
          </div>
          <div className={c("folio-perspective")}>
            {signals.map((name, i) => (
              <div
                key={name}
                className={c("evidence-folio")}
                data-selected={signal === i}
                style={{
                  "--i": i,
                  "--row": `${(i - 2) * 61}px`,
                  "--fan": `${[-60, 47, -30, 59, -42][i]}px`,
                  "--tilt": `${[-7, 5, -3, 6, -5][i]}deg`,
                }}
              >
                <span className={c("folio-icon")}>
                  <Icon
                    type={["lifestyle", "family", "heart", "bio", "tissue"][i]}
                  />
                </span>
                <strong>{name}</strong>
                <div className={c("folio-script")}>
                  <i />
                  <i />
                  <i />
                </div>
                <small>0{i + 1}</small>
              </div>
            ))}
          </div>
          {/* <div className={c("assembly-caption")}>
            <span className={c("assembly-rule")} />
            <span>Context for clinician review</span>
          </div> */}
        </div>
        <div className={c("assembly-sidebar")}>
          <div className={c("assembly-title")}>
            <Icon type="network" />
            <strong>
              Combined risk
              <br />
              assessment
            </strong>
          </div>
          <div
            className={c("signal-inputs")}
            aria-label="Explore health signals"
          >
            {signals.map((name, i) => (
              <button
                key={name}
                aria-label={`${name} 0${i + 1}`}
                aria-pressed={signal === i}
                onClick={() => setSignal(i)}
              >
                <span>0{i + 1}</span>
                <Icon
                  type={["lifestyle", "family", "heart", "bio", "tissue"][i]}
                />
                <strong>{name}</strong>
                <b aria-hidden="true">↗</b>
              </button>
            ))}
          </div>
          {/* <p className={c("assembly-note")}>
            Context for clinician review · no sample score
          </p> */}
        </div>
      </div>
      {/* <div className={c("signal-detail")} aria-live="polite">
        <span>{signals[signal]} + the wider picture</span>
        <strong>Context for clinician review · no sample score</strong>
      </div> */}
    </div>
  );
}
export function Device({ type }) {
  return (
    <svg viewBox="0 0 320 200" className={c("device")} aria-hidden="true">
      <defs>
        <linearGradient id={`device-fill-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#edf4f8" />
          <stop offset="1" stopColor="#accbdf" />
        </linearGradient>
      </defs>
      <ellipse cx="163" cy="181" rx="110" ry="9" fill="#d9e6ee" opacity=".6" />
      {type === 0 && (
        <>
          <path
            d="M110 179h101m-83-10 8-24h48l8 24"
            fill="#d8e7f0"
            stroke="#9bb7cc"
          />
          <rect x="83" y="18" width="157" height="129" rx="12" fill="#accbdf" />
          <rect x="92" y="27" width="139" height="109" rx="6" fill="#fff" />
          <path d="M123 121q0-35 38-35t38 35" fill="#accbdf" />
          <path d="M145 72v22q17 12 33 0V72" fill="#f2c39d" />
          <ellipse cx="161" cy="61" rx="24" ry="31" fill="#f6d6bb" />
          <path
            d="M137 62q-5-40 26-36 28 0 22 42l-12-22q-15 12-36 16"
            fill="#263449"
          />
          <path
            d="M102 55V39h15m90 0h15v16m-120 54v16h15m90 0h15v-16"
            stroke="#7b9eb8"
            fill="none"
          />
          <path
            className={c("face-light")}
            d="M105 53h114"
            stroke="#3f9eab"
            strokeWidth="2"
          />
          <circle cx="229" cy="141" r="3" fill="#f2c39d" />
        </>
      )}
      {type === 1 && (
        <>
          <path
            d="m79 61 50-37 124 24-51 38Z"
            fill="#e8f0f5"
            stroke="#a5bfce"
          />
          <path
            d="m79 61 123 25v90L79 150Z"
            fill={`url(#device-fill-${type})`}
            stroke="#9ab6cb"
          />
          <path d="m202 86 51-38v92l-51 36Z" fill="#9cbdd3" />
          <path d="m100 86 77 16v42l-77-16Z" fill="#fff" />
          <path
            d="m111 104 52 10m-52 3 32 6"
            stroke="#accbdf"
            strokeWidth="4"
          />
          <path d="m221 83 13-10v44l-13 10Z" fill="#263449" />
          <g className={c("sample-drawer")}>
            <path d="m222 128 39-27 20 6-38 30Z" fill="#f2c39d" />
            <path d="m243 137 38-30v8l-38 29Z" fill="#dcac83" />
          </g>
          <circle
            className={c("device-status")}
            cx="190"
            cy="99"
            r="3"
            fill="#3f9eab"
          />
        </>
      )}
      {type === 2 && (
        <>
          <path
            d="m126 164 57-109 39 17-55 101Z"
            fill="#d9e8f1"
            stroke="#9cb9ca"
          />
          <path d="m131 162 32-2 26 14-4 9-65-12Z" fill="#accbdf" />
          <path
            d="m172 66 13-31q4-10 18-5l24 10q13 5 8 17l-12 25Z"
            fill="#accbdf"
            stroke="#809fb4"
          />
          <ellipse
            cx="205"
            cy="53"
            rx="19"
            ry="12"
            transform="rotate(22 205 53)"
            fill="#263449"
          />
          <ellipse
            cx="205"
            cy="53"
            rx="10"
            ry="6"
            transform="rotate(22 205 53)"
            fill="#f2c39d"
          />
          <path
            className={c("optical-beam")}
            d="m191 48-76-13-7 34 80-10"
            fill="#accbdf"
            opacity=".3"
          />
          <path d="m99 36 5 6m-11 8 7 1m-5 12 7-4" stroke="#b38e70" />
          <path
            d="M88 97q14-10 25 0-13 14-25 0Z"
            fill="none"
            stroke="#617386"
          />
        </>
      )}
      {type === 3 && (
        <>
          <path d="M80 159h132l10 15H71Z" fill="#d5e4ee" />
          <rect
            x="95"
            y="39"
            width="108"
            height="113"
            rx="10"
            fill="#accbdf"
            stroke="#90b0c7"
          />
          <rect x="104" y="49" width="90" height="77" rx="4" fill="#fff" />
          <path
            d="M122 74q28-22 53 0m-55 17q26-19 56 0m-55 17q28-17 54 0"
            stroke="#bfd6e4"
            fill="none"
          />
          <path
            className={c("optical-sweep")}
            d="M115 92h68"
            stroke="#3f9eab"
          />
          <circle cx="150" cy="139" r="4" fill="#f2c39d" />
          <path
            d="M205 129q24 15 34-6l-5-24"
            stroke="#6c8aa0"
            strokeWidth="3"
            fill="none"
          />
          <path d="m222 79 15-4 10 25-18 6Z" fill="#f2c39d" stroke="#c29d7e" />
          <circle
            className={c("device-status")}
            cx="234"
            cy="88"
            r="3"
            fill="#fff"
          />
        </>
      )}
    </svg>
  );
}
