import saltLickLogo from "../../assets/saltlick-logo.png";
import espererLogo from "../../assets/espererGroup_logo.png";
import styles from "./AboutEcosystem.module.css";

const businesses = [
  { name: "Health Voitho Technologies", role: "Medtech and development", number: "02", kind: "technology", href: "https://www.healthvoitho.com/" },
  { name: "EIOMS", role: "Knowledge institute", number: "03", kind: "knowledge", href: "https://www.espererworld.com/eioms" },
  { name: "Esperer Nutrition", role: "Cancer nutrition", number: "04", kind: "nutrition", href: "https://www.esperernutrition.com/" },
  { name: "Esperer BioResearch", role: "Cancer formulations and research", number: "05", kind: "research", href: "https://espererbioresearch.com/" },
];

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

// Conceptual vector illustrations, not representations of product results or live data.
function BusinessArtwork({ kind }) {
  return (
    <svg className={styles.artwork} viewBox="0 0 300 150" fill="none" aria-hidden="true" focusable="false">
      <ellipse cx="158" cy="135" rx="96" ry="8" fill="#101D32" opacity=".045" />
      {kind === "technology" && <>
        <path d="M32 103h39V79h30M221 63h39v39h14" stroke="#ACCBDF" strokeWidth="1.5" />
        <rect className={styles.signal} x="40" y="100" width="16" height="5" rx="2.5" fill="#F2C39D" />
        <g className={styles.device}>
          <path d="m108 24 97 9 13 83-98-8Z" fill="#ACCBDF" />
          <path d="m99 20 97 9 13 83-98-8Z" fill="white" stroke="#7D9FB7" />
          <path d="m109 33 77 7 9 54-76-6Z" fill="#EAF3F8" />
          <path d="m115 69 15 1 5-11 8 23 8-32 8 22 16 2" stroke="#426782" strokeWidth="2" strokeLinejoin="round" />
          <path className={styles.trace} d="m115 69 15 1 5-11 8 23 8-32 8 22 16 2" stroke="#D99968" strokeWidth="2.5" strokeLinejoin="round" pathLength="1" />
          <path d="m145 111 2 14-30 5 67 6 15-5-35-5-2-13" fill="#ACCBDF" stroke="#7D9FB7" />
          <path d="m124 99 45 4" stroke="#ACCBDF" strokeWidth="3" />
        </g>
        <rect x="224" y="45" width="31" height="31" rx="7" fill="#F7E7DA" />
        <path d="M239.5 53v15m-7.5-7.5h15" stroke="#BC8152" strokeWidth="2" />
      </>}
      {kind === "knowledge" && <>
        <g className={styles.book}>
          <path d="m59 56 78-17 20 10 75 11 9 55-82 15-91-16Z" fill="#ACCBDF" />
          <path d="m62 49 72-14 23 10 74 10 6 54-80 14-90-17Z" fill="white" stroke="#7D9FB7" />
          <path d="m134 35 23 10v78l-24-14-66-3-5-57Z" fill="#EFF5F9" />
          <path d="M157 45v78m-79-61 43-9m-40 20 40-9m-38 20 36-7m57-17 38 5m-38 7 40 5m-40 7 30 4" stroke="#ACCBDF" strokeWidth="2" strokeLinecap="round" />
          <path className={styles.underline} d="m176 98 33 4" stroke="#D99968" strokeWidth="3" strokeLinecap="round" pathLength="1" />
          <path className={styles.page} d="m157 45 63-20 11 30-74 68Z" fill="#F2C39D" fillOpacity=".45" stroke="#E5B38D" strokeWidth=".8" />
        </g>
        <path d="m228 30 14-8 14 8v16l-14 8-14-8Z" fill="#101D32" />
        <path d="m236 37 5 5 8-10" stroke="#F2C39D" strokeWidth="2" />
      </>}
      {kind === "nutrition" && <>
        <g>
          <path d="M92 79h119c-2 35-25 50-59 50S95 114 92 79Z" fill="#ACCBDF" stroke="#7D9FB7" />
          <ellipse cx="151.5" cy="79" rx="59.5" ry="12" fill="#F8E7D9" stroke="#DFAF89" />
          <path d="M116 92c4 12 13 20 25 23" stroke="white" strokeWidth="3" strokeLinecap="round" opacity=".8" />
          <g className={styles.nutrients}>
            <ellipse cx="128" cy="76" rx="15" ry="7" transform="rotate(-25 128 76)" fill="#F2C39D" />
            <ellipse cx="159" cy="73" rx="15" ry="7" transform="rotate(20 159 73)" fill="#E4AB7F" />
            <ellipse cx="180" cy="78" rx="12" ry="5" transform="rotate(-15 180 78)" fill="#ACCBDF" />
            <path d="M151 72c-19-5-24-17-22-30 15 1 25 10 22 30Zm3-7c-2-18 7-29 22-32 0 17-6 27-22 32Z" fill="#7296AE" />
          </g>
        </g>
        <g className={styles.spoon}><rect x="205" y="35" width="7" height="57" rx="3.5" fill="#426782" /><ellipse cx="208.5" cy="28" rx="11" ry="18" fill="#ACCBDF" stroke="#7D9FB7" /></g>
        <path d="M65 58v34m-7-22 7 6 7-6m-14 10 7 6 7-6" stroke="#DCA77D" strokeWidth="2" strokeLinecap="round" />
      </>}
      {kind === "research" && <>
        <path d="m101 105 94-12 41 24-103 16-48-20Z" fill="#ACCBDF" fillOpacity=".65" stroke="#7D9FB7" />
        {[0, 1, 2].map((i) => <g key={i} className={styles.vial} style={{ "--vial-delay": `${i * -.9}s` }} transform={`translate(${113 + i * 31} ${25 - i * 2})`}>
          <path d="M0 8h19v66a9.5 9.5 0 0 1-19 0Z" fill="white" stroke="#7D9FB7" />
          <path d="M3 44h13v29a6.5 6.5 0 0 1-13 0Z" fill={i === 1 ? "#F2C39D" : "#ACCBDF"} />
          <rect x="-2" width="23" height="12" rx="2" fill={i === 1 ? "#DFAF89" : "#426782"} />
          <path d="M5 21v14" stroke="#ACCBDF" strokeWidth="2" strokeLinecap="round" />
        </g>)}
        <path d="m217 35 15 9v18l-15 9-16-9V44Zm15 9 18-10m-18 28 18 10" stroke="#DFAF89" strokeWidth="1.5" />
        <circle className={styles.molecule} cx="251" cy="33" r="5" fill="#F2C39D" /><circle cx="251" cy="73" r="5" fill="#ACCBDF" />
      </>}
    </svg>
  );
}

function SaltLickArtwork() {
  return <svg className={styles.featureArtwork} viewBox="0 0 340 290" fill="none" aria-hidden="true" focusable="false">
    <path d="M24 245h292M41 254h258" stroke="#ACCBDF" strokeOpacity=".12" />
    <g className={styles.report}>
      <path d="m104 36 136 18 17 176-138-18Z" fill="#ACCBDF" fillOpacity=".45" />
      <path d="m97 29 136 18 17 176-138-18Z" fill="#F7FBFD" stroke="#ACCBDF" />
      <path d="m108 40 115 15 14 153-115-15Z" fill="white" />
      <image href={saltLickLogo} x="145" y="56" width="55" height="62" preserveAspectRatio="xMidYMid meet" />
      <path d="m132 132 74 10m-73 2 74 10m-73 2 49 7" stroke="#ACCBDF" strokeWidth="3" strokeLinecap="round" />
      <path className={styles.reportAccent} d="m135 182 71 10" stroke="#F2C39D" strokeWidth="5" strokeLinecap="round" pathLength="1" />
    </g>
    <g className={styles.featureSheet}>
      <path d="m49 125 57-7 8 63-57 7Z" fill="#ACCBDF" stroke="#D8E9F4" />
      <rect x="66" y="136" width="25" height="26" rx="5" fill="#101D32" />
      <path d="M73 149h11m-5.5-5.5v11" stroke="#F2C39D" strokeWidth="2" strokeLinecap="round" />
    </g>
    <g className={styles.featureTag}>
      <path d="m224 169 65-7 7 48-65 7Z" fill="#F2C39D" />
      <path d="m238 184 36-4m-34 13 24-3" stroke="#8B603E" strokeWidth="2" strokeLinecap="round" />
    </g>
    <path d="M33 86h34v21m199-10h36v40" stroke="#ACCBDF" strokeOpacity=".4" strokeWidth="1.5" />
    <path className={styles.featurePath} d="M33 86h34v21m199-10h36v40" stroke="#F2C39D" strokeWidth="2.5" strokeDasharray="12 100" />
  </svg>;
}

export default function AboutEcosystem() {
  return (
    <section className={styles.ecosystem} id="about-ecosystem" aria-labelledby="ecosystem-title">
      <div className={styles.wrap}>
        <div className={styles.heading} data-about-reveal>
          <div>
            <p className="about-label">02 / Connected expertise</p>
            <h2 className={styles.title} id="ecosystem-title">The Esperer Group<br />ecosystem.</h2>
          </div>
          <div className={styles.groupIntro}>
            <a className={styles.parentLink} href="https://www.espererworld.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Esperer Group website (opens in a new tab)">
              <img src={espererLogo} width="2078" height="934" alt="Esperer Group" />
              <Arrow />
            </a>
            <p>Specialised group companies in cancer care and metabolic sciences support one another.</p>
          </div>
        </div>
        <div className={styles.grid}>
          <article className={styles.feature} data-about-reveal>
            <div className={styles.featureTop}><span className={styles.number}>01</span><span>Our place in the group</span></div>
            <div className={styles.featureScene}><SaltLickArtwork /></div>
            <div className={styles.featureCopy}>
              <h3>Salt Lick</h3>
              <p>AI cancer risk assessment</p>
              <a className={styles.featureLink} href="/what-is-salt-lick">Explore Salt Lick <Arrow /></a>
            </div>
          </article>
          {businesses.map(({ name, role, number, kind, href }) => (
            <a className={`${styles.card} ${styles[kind]}`} href={href} target="_blank" rel="noopener noreferrer" key={name} aria-label={`Visit ${name} website (opens in a new tab)`}>
              <div className={styles.cardTop}><span className={styles.number}>{number}</span><span className={styles.arrow}><Arrow /></span></div>
              <div className={styles.scene}><BusinessArtwork kind={kind} /></div>
              <div className={styles.cardCopy}><h3>{name}</h3><p>{role}</p></div>
              <span className={styles.visit}>Visit website <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
