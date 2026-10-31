import styles from "./Impact.module.css";
const c = (value) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

export function ImpactIcon({ type }) {
  const paths = {
    person: (
      <>
        <circle cx="16" cy="11" r="6" />
        <path d="M4 29v-3a12 12 0 0 1 24 0v3" />
      </>
    ),
    case: (
      <>
        <path d="M8 4h12l6 6v19H6V4ZM20 4v7h6M11 16h10m-10 5h7" />
      </>
    ),
    ribbon: (
      <>
        <path d="M12 17C5 7 10 1 15 1c7 0 10 6 2 16L7 30l-5-5L19 4M20 17l10 13-7 1-8-10" />
      </>
    ),
    globe: (
      <>
        <circle cx="16" cy="16" r="13" />
        <path d="M3 16h26M16 3q-12 13 0 26M16 3q12 13 0 26M6 8q10 6 20 0M6 24q10-6 20 0" />
      </>
    ),
    report: (
      <>
        <path d="M7 3h13l6 6v21H7V3Zm13 0v7h6M11 15h10m-10 5h10m-10 5h6" />
      </>
    ),
  };
  return (
    <svg
      className={c("icon")}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type] || paths.report}
    </svg>
  );
}

export function WorldFramework() {
  return (
    <svg
      className={c("world-framework")}
      viewBox="0 0 900 600"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="impact-map-clip">
          <rect x="230" y="15" width="650" height="225" />
        </clipPath>
      </defs>
      <g
        className={c("map-lines")}
        clipPath="url(#impact-map-clip)"
        stroke="#6d94b5"
        strokeOpacity=".17"
        strokeWidth=".8"
      >
        {[85, 122, 159, 196, 233].map((radius) => (
          <ellipse
            key={radius}
            cx="578"
            cy="208"
            rx="340"
            ry={radius}
            transform="rotate(-5 578 208)"
          />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <ellipse
            key={i}
            cx={500 + i * 68}
            cy="168"
            rx={55 + i * 20}
            ry="200"
            transform="rotate(-7 500 168)"
          />
        ))}
      </g>
      <path
        d="M235 55V38h17m553 423h17v-17"
        stroke="#9bb8cd"
        strokeOpacity=".7"
        strokeWidth="1"
      />
    </svg>
  );
}

const stages = [
  ["Found early", 92],
  ["Spread nearby", 62],
  ["Spread widely", 12],
];
const stageColors = [
  ["#accbdf", "#d4e5ef", "#83a6be"],
  ["#f2c39d", "#f9dfca", "#ccaa8c"],
  ["#7592aa", "#acc3d4", "#526e87"],
];

export function StageComparison() {
  return (
    <figure className={c("stage-chart")} data-impact-zone>
      <p className={c("chart-title")}>Time changes the picture</p>
      <figcaption>
        Approximate five-year survival by stage at diagnosis
      </figcaption>
      <svg
        className={c("stage-art")}
        viewBox="0 0 616 350"
        role="img"
        aria-labelledby="impact-stage-title impact-stage-description"
      >
        <title id="impact-stage-title">
          Approximate survival by stage at diagnosis
        </title>
        <desc id="impact-stage-description">
          Found early, approximately 92 percent; spread nearby, approximately 62
          percent; spread widely, approximately 12 percent. Illustrative figures
          supplied in the wireframe, not Salt Lick results.
        </desc>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M36 ${34 + i * 59}H582`}
            stroke="#eaf0f5"
            strokeWidth="1"
          />
        ))}
        {stages.map(([name, value], i) => {
          const x = 65 + i * 180,
            base = 270,
            height = (value / 100) * 236,
            y = base - height;
          const [front, cap, side] = stageColors[i];
          return (
            <g key={name}>
              <path
                d={`M${x - 9} ${base + 9}h140l15-10H${x + 9}Z`}
                fill="#edf3f7"
              />
              <g
                className={c("stage-column")}
                style={{ "--column-delay": `${i * 140}ms` }}
              >
                <rect x={x} y={y} width="105" height={height} fill={front} />
                <path d={`M${x} ${y}l14-9h105l-14 9Z`} fill={cap} />
                <path
                  d={`M${x + 105} ${y}l14-9v${height}l-14 9Z`}
                  fill={side}
                />
              </g>
              <text
                x={x + 52.5}
                y={y - 26}
                className={c("stage-value")}
                textAnchor="middle"
              >
                ~{value}%
              </text>
              <text
                x={x + 52.5}
                y="315"
                className={c("stage-name")}
                textAnchor="middle"
              >
                {name}
              </text>
            </g>
          );
        })}
      </svg>
      {/* <p className={c("chart-note")}>
        Illustrative wireframe figures; not Salt Lick results.
      </p> */}
    </figure>
  );
}

function Building({ x, y, width, height, depth, accent, index }) {
  const columns = Math.max(2, Math.floor(width / 26));
  return (
    <g
      className={c("hospital-building")}
      style={{ "--building-delay": `${index * 180}ms` }}
    >
      <defs>
        <clipPath id={`impact-facade-${index}`}>
          <rect x={x} y={y} width={width} height={height} />
        </clipPath>
      </defs>
      <path
        className={c("hospital-roof")}
        d={`M${x} ${y}l${depth}-15h${width}l-${depth} 15Z`}
        fill="#eef4f8"
        stroke="#aac3d5"
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#fff"
        stroke="#aac3d5"
      />
      <path
        d={`M${x + width} ${y}l${depth}-15v${height}l-${depth} 15Z`}
        fill="#c1d7e6"
        stroke="#a7c0d2"
      />
      <rect x={x + 8} y={y + 8} width={width - 16} height="6" fill={accent} />
      {Array.from({ length: columns * 2 }, (_, i) => (
        <rect
          key={i}
          x={x + 11 + ((i % columns) * (width - 20)) / columns}
          y={y + 30 + Math.floor(i / columns) * 25}
          width="12"
          height="15"
          fill="#d6e6f0"
        />
      ))}
      <rect
        x={x + width / 2 - 9}
        y={y + height - 27}
        width="18"
        height="27"
        fill="#accbdf"
      />
      <path d={`M${x + width / 2} ${y + height - 24}v22`} stroke="#fff" />
      {width > 90 && (
        <>
          <rect
            x={x + width / 2 - 10}
            y={y + 9}
            width="20"
            height="20"
            fill="#fff"
          />
          <path
            d={`M${x + width / 2 - 6} ${y + 19}h12m-6-6v12`}
            stroke="#7196b0"
            strokeWidth="2"
          />
        </>
      )}
      <g clipPath={`url(#impact-facade-${index})`}>
        <rect
          className={c("facade-light")}
          x={x - 23}
          y={y}
          width="22"
          height={height}
          fill="#ffffff"
          fillOpacity=".6"
          style={{
            "--light-delay": `${index * -1600}ms`,
            "--facade-travel": `${width + 48}px`,
          }}
        />
      </g>
    </g>
  );
}

function Person({ x, y, shirt }) {
  return (
    <g>
      <circle cx={x} cy={y} r="4.5" fill="#d0a17c" />
      <rect x={x - 5} y={y + 6} width="10" height="17" rx="3" fill={shirt} />
      <path
        d={`M${x - 2} ${y + 22}l-1 12m5-12 1 12`}
        stroke="#263449"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  );
}

export function HospitalGraphic() {
  return (
    <svg
      className={c("hospital-art")}
      viewBox="0 0 604 258"
      role="img"
      aria-labelledby="impact-hospital-title"
    >
      <title id="impact-hospital-title">
        Conceptual illustration of a health system using existing hospitals and
        infrastructure; not actual facilities or locations
      </title>
      <path
        d="M62 173 277 83 547 160 332 253Z"
        fill="#edf4f8"
        stroke="#dae6ee"
      />
      <path
        d="M170 197 259 159 382 195M310 121 409 159 484 126"
        stroke="#9bb9ce"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <Building
        x={238}
        y={43}
        width={136}
        height={112}
        depth={28}
        accent="#accbdf"
        index={0}
      />
      <Building
        x={116}
        y={128}
        width={82}
        height={69}
        depth={20}
        accent="#f2c39d"
        index={1}
      />
      <Building
        x={425}
        y={116}
        width={73}
        height={66}
        depth={17}
        accent="#accbdf"
        index={2}
      />
      <Person x={228} y={203} shirt="#7196b0" />
      <Person x={250} y={209} shirt="#f2c39d" />
      <Person x={390} y={165} shirt="#426782" />
    </svg>
  );
}
