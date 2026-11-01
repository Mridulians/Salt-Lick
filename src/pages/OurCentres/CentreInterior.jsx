import { useSyncExternalStore } from "react";
import logo from "../../assets/saltlick-logo.png";
import CentreRoomArt from "./CentreRoomArt";
import styles from "./CentreInterior.module.css";

const CYCLE = 28;
const ARRIVALS = [1.5, 5.5, 9.2, 13, 16.7, 20.8];
const MOBILE_QUERY = "(max-width:720px)";
function subscribeLayout(onChange) {
  const media = window.matchMedia(MOBILE_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
function mobileLayout() { return window.matchMedia(MOBILE_QUERY).matches; }

// The last 3.5 seconds hold the completed route before it starts again.
// Repeated coordinates create a genuine dwell in each room, rather than a
// marker that races past the stages. SVG handles interpolation, not JS frames.
const desktopTravel = [
  [16, 345, 0], [163, 345, 1.5], [163, 345, 4],
  [456, 345, 4.85], [456, 289, 5.5], [456, 289, 8],
  [456, 345, 8.4], [714, 345, 8.9], [714, 289, 9.2], [714, 289, 11.7],
  [714, 345, 12.1], [994, 345, 12.7], [994, 289, 13], [994, 289, 15.5],
  [994, 345, 16], [994, 558, 16.7], [994, 558, 19.2],
  [994, 345, 19.6], [456, 345, 20.3], [456, 558, 20.8], [456, 558, 23.3],
  [456, 345, 23.7], [16, 345, 24.5], [16, 345, 28],
];
const mobileTravel = [
  [300, 18, 0], [300, 270, .8], [150, 270, 1.5], [150, 270, 4],
  [300, 270, 4.7], [450, 270, 5.5], [450, 270, 8],
  [300, 270, 8.3], [300, 570, 8.9], [450, 570, 9.2], [450, 570, 11.7],
  [300, 570, 12.4], [150, 570, 13], [150, 570, 15.5],
  [300, 570, 15.8], [300, 870, 16.3], [150, 870, 16.7], [150, 870, 19.2],
  [300, 870, 19.9], [450, 870, 20.8], [450, 870, 23.3],
  [300, 870, 23.7], [300, 967, 24.5], [300, 967, 28],
];

function makeRoute(points) {
  let length = 0;
  const distances = points.map(([x, y], i) => {
    if (i) length += Math.hypot(x - points[i - 1][0], y - points[i - 1][1]);
    return length;
  });
  return {
    path: points.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" "),
    times: points.map((p) => p[2] / CYCLE).join(";"),
    positions: distances.map((d) => d / length).join(";"),
    offsets: distances.map((d) => 1 - d / length).join(";"),
  };
}
const routes = { desktop: makeRoute(desktopTravel), mobile: makeRoute(mobileTravel) };

function VisitorRoute({ mobile = false }) {
  const route = routes[mobile ? "mobile" : "desktop"];
  return <g>
    <path d={route.path} fill="none" stroke="#9EBBCD" strokeWidth={mobile ? "3" : "2"} strokeOpacity=".48" strokeLinejoin="round" strokeLinecap="round" />
    <path className={styles.routeTrace} d={route.path} fill="none" stroke="#D99B6C" strokeWidth={mobile ? "4" : "3"} strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1">
      <animate attributeName="stroke-dashoffset" values={route.offsets} keyTimes={route.times} calcMode="linear" dur={`${CYCLE}s`} repeatCount="indefinite" />
    </path>
    <g className={styles.visitor} data-centre-visitor={mobile ? "mobile" : "desktop"}>
      <animateMotion path={route.path} keyPoints={route.positions} keyTimes={route.times} calcMode="linear" dur={`${CYCLE}s`} repeatCount="indefinite" rotate="0" />
      <circle cy="-11" r="27" fill="#F2C39D" fillOpacity=".2" />
      <path d="M-17-12a17 17 0 1 1 34 0C17-3 5 5 0 9-5 5-17-3-17-12Z" fill="#101D32" stroke="#FFFFFF" strokeWidth="2" />
      <circle cy="-16" r="5.5" fill="#F2C39D" />
      <path d="M-9-2v-5q9-8 18 0v5" fill="#ACCBDF" />
    </g>
  </g>;
}

function Room({ x, y, width, height, index, title, mobile = false }) {
  const titleLines = index === 1 ? ["Face scan and", "risk profile"] : index === 4 ? ["Women-only", "screening"] : [title];
  const artScale = mobile ? .94 : index === 4 ? 1.05 : .92;
  const artX = index === 0 && !mobile ? 5 : (width - 240 * artScale) / 2;
  const artY = !mobile && index === 0 ? 115 : mobile ? 70 : index === 4 ? 30 : 42;
  const sideDoorY = mobile ? 220 : 245;
  const leftDoor = mobile ? [1, 2, 5].includes(index) : index === 0;
  const rightDoor = mobile ? [0, 3, 4].includes(index) : index === 0;
  const topDoor = !mobile && index >= 4;
  const doorX = index === 4 ? 399 : 146;
  const side = (at, door) => door ? `M${at} 10V${sideDoorY - 22}M${at} ${sideDoorY + 22}V${height}` : `M${at} 10V${height}`;
  return <g transform={`translate(${x} ${y})`} data-centre-room={index + 1} style={{ "--phase-delay": `${ARRIVALS[index]}s` }}>
    <rect x="5" y="7" width={width} height={height} rx="8" fill="#101D32" fillOpacity=".035" />
    <rect y="5" width={width} height={height} rx="7" fill="#FFFFFF" />
    <rect className={styles.roomGlow} x="1" y="6" width={width - 2} height={height - 2} rx="7" fill="#F2C39D" fillOpacity=".2" />
    <path d={topDoor ? `M0 10V0H${doorX - 25}v10ZM${doorX + 25} 10V0H${width}v10Z` : `M0 10V0H${width}v10Z`} fill="#DAE7F0" stroke="#A3BED1" strokeWidth="1.2" />
    <path d={`${side(1, leftDoor)}${side(width - 1, rightDoor)}`} stroke="#C9DCE9" strokeWidth="3" />
    <path d={`M12 ${height - 8}H${width / 2 - 27}m54 0H${width - 12}`} stroke="#AEC8DA" strokeWidth="3" />
    <text x="17" y="31" className={styles.roomNumber}>{String(index + 1).padStart(2, "0")}</text>
    {titleLines.map((line, i) => <text key={line} x="49" y={31 + i * 21} className={styles.roomTitle}>{line}</text>)}
    <g transform={`translate(${artX} ${artY}) scale(${artScale})`}><CentreRoomArt kind={index} /></g>
    {!mobile && index === 0 && <>
      <path d="M25 300h182M25 315h182M25 330h182" stroke="#E6EEF4" strokeWidth="1" />
      <path d="M28 391v25h52m103-25v25h-52" stroke="#ACCBDF" strokeWidth="2" />
      <rect x="29" y="380" width="51" height="20" rx="6" fill="#D9E8F1" />
      <rect x="132" y="380" width="51" height="20" rx="6" fill="#F5DDCA" />
    </>}
  </g>;
}

function FloorPlan({ facilities, mobile = false }) {
  const rooms = mobile ? [
    [20, 50, 248, 245, 0], [332, 50, 248, 245, 1],
    [332, 350, 248, 245, 2], [20, 350, 248, 245, 3],
    [20, 650, 248, 245, 4], [332, 650, 248, 245, 5],
  ] : [
    [45, 100, 240, 475, 0], [310, 100, 265, 215, 1],
    [595, 100, 265, 215, 2], [880, 100, 275, 215, 3],
    [595, 385, 560, 190, 4], [310, 385, 265, 190, 5],
  ];
  return <svg className={mobile ? styles.mobilePlan : styles.desktopPlan} viewBox={mobile ? "0 0 600 1000" : "0 0 1200 625"} fill="none" aria-hidden="true" focusable="false">
    {!mobile && <>
      <path d="M40 81h1125v507H40Z" fill="#EAF2F8" stroke="#B8CFDF" strokeWidth="1.2" />
      <path d="M39 588h1126v11H39Z" fill="#D7E5EF" />
      <path d="M31 82h9v507h-9Z" fill="#ACCBDF" fillOpacity=".6" />
      <text x="46" y="49" className={styles.planTitle}>A place for every step.</text>
      <text x="1159" y="49" textAnchor="end" className={styles.planLabel}>ILLUSTRATIVE CENTRE LAYOUT</text>
      <path d="M28 345h1140" stroke="#DFE9F1" strokeWidth="32" />
    </>}
    {mobile && <path d="M300 18v949" stroke="#EAF2F8" strokeWidth="30" strokeLinecap="round" />}
    {rooms.map(([x, y, width, height, index]) => <Room key={index} {...{x,y,width,height,index,mobile}} title={facilities[index][0]} />)}
    {!mobile && <>
      <path d="M31 324v42m-18-21h36m-6-6 6 6-6 6" stroke="#9DB9CC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="47" y="371" className={styles.entryLabel}>ENTRY / NEXT STEPS</text>
    </>}
    {mobile && <><text x="329" y="22" className={styles.entryLabel}>ENTRY</text><text x="329" y="978" className={styles.entryLabel}>NEXT STEPS</text></>}
    <VisitorRoute mobile={mobile} />
  </svg>;
}

export default function CentreInterior({ facilities }) {
  const mobile = useSyncExternalStore(subscribeLayout, mobileLayout, () => false);
  return <section className={styles.interior} id="inside-the-centre" aria-labelledby="inside-title">
    <div className={styles.wrap}>
      <div className={styles.heading}>
        <div><p className="centres-label">01 / Inside the centre</p><h2 id="inside-title">Designed around people,<br />not procedures.</h2></div>
        <p>A calm, private experience, from the waiting area to a report explained in person, in about 30 minutes.</p>
      </div>
      {/* A single SVG time container and its matching CSS highlights restart
          together on a layout change. Hidden SVGs would otherwise pause their
          SMIL clocks while the visible description-card clock kept advancing. */}
      <div key={mobile ? "mobile" : "desktop"} data-centre-tour={mobile ? "mobile" : "desktop"}>
      <div className={styles.planShell}>
        <div className={styles.planHeader}>
          <div className={styles.brand}><img src={logo} width="1149" height="1355" alt="Salt Lick — Intelligence to Intercept" /><div><span>A guided visit</span><strong>From welcome to a clear next step.</strong></div></div>
          <span className={styles.autoLabel}><i aria-hidden="true" />Your visit, step by step</span>
        </div>
        <div className={styles.planArt}><FloorPlan facilities={facilities} mobile={mobile} /></div>
      </div>
      <ol className={styles.facilities} aria-label="The six spaces in a Salt Lick Centre">
        {facilities.map(([name, copy], index) => <li className={styles.facility} key={name} style={{ "--phase-delay": `${ARRIVALS[index]}s` }}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{name}</h3><p>{copy}</p></div>
          <span className={styles.cardProgress} aria-hidden="true" />
        </li>)}
      </ol>
      </div>
    </div>
  </section>;
}
