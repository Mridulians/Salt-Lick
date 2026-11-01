import styles from "./CentreInterior.module.css";

// Original conceptual room illustrations. Devices contain no patient results.
function Person({ x, y, outfit = "#ACCBDF", skin = "#C89474", coat = false, seated = false, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cx="0" cy={seated ? 89 : 108} rx="19" ry="4" fill="#101D32" fillOpacity=".07" />
    {seated ? <>
      <path d="M-11 62v15h27v26M5 64v8h25v31" stroke="#304963" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 103h12m2 0h9" stroke="#101D32" strokeWidth="5" strokeLinecap="round" />
    </> : <>
      <path d="m-8 66-3 38M8 66l4 38" stroke="#304963" strokeWidth="10" strokeLinecap="round" />
      <path d="M-18 106h12m13 0h14" stroke="#101D32" strokeWidth="5" strokeLinecap="round" />
    </>}
    <path d="M-18 34Q0 23 18 34l6 36h-47Z" fill={coat ? "#FFFFFF" : outfit} stroke={coat ? "#B5CDDD" : outfit} />
    {coat && <><path d="m-6 31 6 23 7-23" fill={outfit} /><path d="M-10 43v13q7 8 14 0V42" stroke="#426782" strokeWidth="1.6" /><circle cx="4" cy="56" r="3" fill="#426782" /></>}
    <path d="m-18 38-6 22 16 5m26-27 8 20-17 8" stroke={coat ? "#FFFFFF" : outfit} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m-7 65 4 1m11 0-4 1" stroke={skin} strokeWidth="6" strokeLinecap="round" />
    <path d="M-4 26v7h8v-7" fill={skin} />
    <ellipse cy="15" rx="12" ry="14" fill={skin} />
    <path d="M-12 14q-2-16 12-16t12 17Q4 4-12 14Z" fill="#263449" />
    <path d="M-2 22q3 2 6 0" stroke="#92684F" strokeWidth="1.3" strokeLinecap="round" />
  </g>;
}

function Chair({ x, y, orange = false }) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M0 24v37m39-34v36" stroke="#7F9EB3" strokeWidth="3" />
    <rect x="-5" y="-3" width="43" height="39" rx="7" fill={orange ? "#F2C39D" : "#ACCBDF"} stroke={orange ? "#DAB18E" : "#89AABE"} />
    <path d="m-5 32 39-4 13 12-42 5Z" fill={orange ? "#F8DCC5" : "#D7E6EF"} stroke={orange ? "#DAB18E" : "#89AABE"} />
  </g>;
}

function Monitor({ x, y, small = false }) {
  const width = small ? 39 : 58;
  return <g transform={`translate(${x} ${y})`}>
    <path d={`M${width / 2} 35v18m-15 0h30`} stroke="#87A7BD" strokeWidth="4" strokeLinecap="round" />
    <rect x="0" y="0" width={width} height="38" rx="5" fill="#101D32" />
    <rect x="4" y="4" width={width - 8} height="29" rx="2" fill="#DCEBF4" />
    <path d={`M10 13h${width - 21}m-${width - 21} 7h${width - 27}`} stroke="#8DADC3" strokeWidth="2" strokeLinecap="round" />
    <path className={styles.deviceAccent} d={`M10 26h${width - 21}`} stroke="#E1AC81" strokeWidth="2.5" strokeLinecap="round" pathLength="1" />
  </g>;
}

export default function CentreRoomArt({ kind }) {
  return <g>
    {kind === 0 && <>
      <path d="m17 120 197-5 18 14-196 5Z" fill="#EEF4F8" />
      <Chair x={35} y={51} /><Chair x={100} y={51} orange />
      <Person x={43} y={19} seated scale={.78} outfit="#557C98" skin="#9F6F53" />
      <Person x={109} y={19} seated scale={.78} outfit="#E7B58F" skin="#D7AB8E" />
      <g>
        <path d="m178 34 25 5v72l-25-5Z" fill="#7F9EB3" />
        <path d="m170 30 26 5v70l-26-4Z" fill="#426782" />
        <path d="m174 39 17 3v30l-17-3Z" fill="#E2EFF7" />
        <path className={styles.deviceAccent} d="m177 52 11 2m-11 7 7 1" stroke="#E1AC81" strokeWidth="2" strokeLinecap="round" pathLength="1" />
        <path d="m166 102 28 4 9 8-31-3Z" fill="#ACCBDF" />
      </g>
      <path d="M37 7h73m-73 5h44" stroke="#D5E4EE" strokeWidth="2" />
    </>}
    {kind === 1 && <>
      <Chair x={29} y={63} />
      <Person x={38} y={29} seated scale={.75} outfit="#E7B58F" skin="#A4775D" />
      <path d="M87 104h59m-30-2v-17" stroke="#8BAABD" strokeWidth="4" strokeLinecap="round" />
      <g className={styles.scanStand}>
        <path d="m99 21 39 4v53l-39-4Z" fill="#ACCBDF" stroke="#7699B2" />
        <path d="m104 29 28 3v31l-28-3Z" fill="#F7FBFD" />
        <path d="m110 36 14 1m-14 19 14 1M110 36v5m14-4v5m-14 9v5m14-4v5" stroke="#7295AF" strokeWidth="1.5" />
        <path className={styles.deviceAccent} d="m108 47 20 2" stroke="#DFAC83" strokeWidth="2" pathLength="1" />
      </g>
      <Person x={193} y={11} coat scale={.88} skin="#D0A487" outfit="#ACCBDF" />
      <path d="m159 78 19-7 17 12-20 8Z" fill="#F2C39D" stroke="#D9AD8A" />
    </>}
    {kind === 2 && <>
      <path d="M17 76h134v53H17Z" fill="#D6E6F0" stroke="#94B2C7" />
      <path d="m13 67 134-3 12 14H17Z" fill="#FFFFFF" stroke="#94B2C7" />
      <path d="M59 83v40m44-40v40M27 90h20m24 0h20m24 0h25" stroke="#A8C5D9" strokeWidth="2" />
      <g>
        <path d="m38 22 58 3 16 18v30l-74-3Z" fill="#F7FBFD" stroke="#87A6BD" />
        <path d="m96 25 16 18v30l-16-6Z" fill="#ACCBDF" />
        <path d="m47 32 35 2v22l-35-2Z" fill="#101D32" />
        <path className={styles.deviceAccent} d="m52 41 22 1m-22 8 15 1" stroke="#F2C39D" strokeWidth="2" pathLength="1" />
        <path d="m55 64 26 1" stroke="#B1CBDD" strokeWidth="3" />
      </g>
      <path d="M126 45v18m9-18v18m-12-19h6m3 0h6" stroke="#D5A581" strokeWidth="4" strokeLinecap="round" />
      <Person x={192} y={9} coat scale={.91} skin="#986D56" outfit="#EBC2A2" />
    </>}
    {kind === 3 && <>
      <path d="M64 102v23m77-18v18" stroke="#86A6BC" strokeWidth="5" />
      <path d="m56 55 28-7 24 40 51 5 9 16-71 3Z" fill="#ACCBDF" stroke="#789DB7" />
      <path d="m63 61 18-5 24 40 46 4" stroke="#D8E8F3" strokeWidth="7" strokeLinecap="round" />
      <circle cx="70" cy="49" r="10" fill="#D1A084" />
      <path d="m78 57 26 34 32 7" stroke="#E8BC9A" strokeWidth="17" strokeLinecap="round" />
      <path d="m137 99 28 9" stroke="#426782" strokeWidth="12" strokeLinecap="round" />
      <Person x={32} y={4} coat scale={.88} skin="#B98A6E" outfit="#B4CEDF" />
      <path d="m50 58 15-8" stroke="#9F7B62" strokeWidth="5" strokeLinecap="round" />
      <path d="m65 47 9 4" stroke="#426782" strokeWidth="5" strokeLinecap="round" />
      <path className={styles.lightBeam} d="m74 49 17-5-2 18Z" fill="#F2C39D" fillOpacity=".45" />
      <g transform="translate(181 53)"><Monitor x={0} y={0} small /></g>
    </>}
    {kind === 4 && <>
      <path d="M15 11h211M20 11v114m201-114v114" stroke="#A1BDCF" strokeWidth="2" />
      <g className={styles.curtain}>
        <path d="M17 15h45v107H17Z" fill="#DBE9F2" />
        <path d="M28 17v103m12-103v103m12-103v103" stroke="#B5CEDF" strokeWidth="3" />
        <path d="M193 15h32v107h-32Z" fill="#F8DFCB" />
        <path d="M202 17v103m12-103v103" stroke="#E9C3A5" strokeWidth="3" />
      </g>
      <Chair x={96} y={60} orange />
      <Person x={103} y={24} seated scale={.8} outfit="#E1AD85" skin="#D4A48A" />
      <Person x={161} y={10} coat scale={.86} outfit="#ACCBDF" skin="#956A54" />
      <path d="M77 39v59m-8 0h16" stroke="#8AAABD" strokeWidth="3" />
      <rect x="68" y="25" width="17" height="22" rx="5" fill="#E7F0F6" stroke="#9FBDCF" />
      <path d="M74 32v8m-4-4h8" stroke="#BC8F6E" strokeWidth="1.5" />
    </>}
    {kind === 5 && <>
      <Chair x={36} y={69} orange /><Chair x={179} y={69} />
      <Person x={43} y={23} seated scale={.78} outfit="#E6B38B" skin="#D7AA8E" />
      <Person x={186} y={23} seated coat scale={.78} outfit="#ACCBDF" skin="#A67961" />
      <path d="M72 80v48m89-47v47" stroke="#8BAABD" strokeWidth="3" />
      <path d="m60 69 101-4 17 21-102 5Z" fill="#F8E7D9" stroke="#DDB797" />
      <Monitor x={104} y={20} small />
      <g className={styles.paper}>
        <path d="m79 66 26-3 9 13-27 4Z" fill="#FFFFFF" stroke="#B8D1E1" />
        <path d="m86 68 14-1m-11 5 10-1" stroke="#9FBDD1" strokeWidth="1.5" />
      </g>
      <path d="m57 69 28 2m88 0-18 6" stroke="#BF9274" strokeWidth="5" strokeLinecap="round" />
    </>}
  </g>;
}
