import portrait from "../../assets/team-portrait-placeholder.svg";
import esperer from "../../assets/espererGroup_logo.png";
import health from "../../assets/healtLogo.png";
import eioms from "../../assets/EIOMS_logo.png";
import "./OurTeam.css";

const leaders = [
  {
    name: "Dr. Raktim Chattopadhyay",
    role: "Founder, Salt Lick Healthcare",
    focus: "Professional background, expertise, and vision for Salt Lick",
    initials: "RC",
  },
  {
    name: "Mr. Himanshu Dave",
    role: "Chief Executive Officer and Co-Founder",
    focus: "Professional background and role in leading Salt Lick",
    initials: "HD",
  },
  {
    name: "Mr. Rupam Chattopadhyay",
    role: "Chief Technical Officer",
    focus: "Technology background and leadership of the platform",
    initials: "RC",
  },
];
const partners = [
  {
    name: "Esperer Group",
    role: "Parent group",
    logo: esperer,
    url: "https://www.espererworld.com/",
  },
  {
    name: "Health Voitho Technologies",
    role: "Technology partner",
    logo: health,
    url: "https://www.healthvoitho.com/",
  },
  {
    name: "EIOMS",
    role: "Knowledge partner",
    logo: eioms,
    url: "https://www.espererworld.com/eioms",
  },
];

function LeadershipGraphic() {
  return (
    <div
      className="team-graphic"
      role="img"
      aria-label="Animated illustration connecting oncology science, healthcare leadership, and technology"
    >
      <svg viewBox="0 0 520 440" aria-hidden="true">
        <circle cx="260" cy="220" r="180" fill="#f8fbfd" />
        <g className="team-orbit">
          <ellipse
            cx="260"
            cy="220"
            rx="200"
            ry="143"
            fill="none"
            stroke="#accbdf"
          />
          <circle cx="460" cy="220" r="7" fill="#eac09c" />
          <circle cx="60" cy="220" r="5" fill="#8dafc7" />
        </g>
        <path
          className="team-signal"
          d="M260 80L100 300H420Z"
          fill="none"
          stroke="#b6cddb"
          strokeWidth="2"
          strokeDasharray="5 9"
        />
        <circle
          cx="260"
          cy="220"
          r="73"
          fill="#fff"
          stroke="#f2c39d"
          strokeWidth="2"
        />
        <path
          d="M230 220h60m-30-30v60"
          stroke="#789fb9"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <g className="team-node team-node-one">
          <rect
            x="202"
            y="26"
            width="116"
            height="104"
            rx="26"
            fill="#e6f0f7"
            stroke="#c9dee9"
          />
          <path
            d="M240 48c0 22 40 22 40 44m0-44c0 22-40 22-40 44m4-35h32m-32 25h32"
            fill="none"
            stroke="#668ba5"
            strokeWidth="2.5"
          />
        </g>
        <g className="team-node team-node-two">
          <rect
            x="38"
            y="252"
            width="124"
            height="104"
            rx="26"
            fill="#fbeddf"
            stroke="#efd4bd"
          />
          <circle
            cx="100"
            cy="280"
            r="12"
            fill="none"
            stroke="#b78c69"
            strokeWidth="2.5"
          />
          <path
            d="M75 322v-9c0-23 50-23 50 0v9"
            fill="none"
            stroke="#b78c69"
            strokeWidth="2.5"
          />
        </g>
        <g className="team-node team-node-three">
          <rect
            x="358"
            y="252"
            width="124"
            height="104"
            rx="26"
            fill="#e6f0f7"
            stroke="#c9dee9"
          />
          <rect
            x="401"
            y="277"
            width="38"
            height="38"
            rx="7"
            fill="none"
            stroke="#668ba5"
            strokeWidth="2.5"
          />
          <path
            d="M411 267v10m18-10v10m-18 38v10m18-10v10m-38-38h10m-10 18h10m38-18h10m-10 18h10"
            stroke="#668ba5"
            strokeWidth="2.5"
          />
        </g>
      </svg>
      <span className="team-graphic-label science">Oncology science</span>
      <span className="team-graphic-label leadership">
        Healthcare 
      </span>
      <span className="team-graphic-label technology">Technology</span>
    </div>
  );
}

export default function OurTeam() {
  return (
    <div className="team-page">
      <section
        className="team-hero team-container"
        aria-labelledby="team-title"
      >
        <div className="team-hero-copy">
          <p className="team-kicker">Our team / Shared purpose</p>
          <h1 id="team-title">
            The people shifting the <em>start line</em> of cancer care.
          </h1>
          <p>
            The leadership team brings together oncology science, healthcare
            leadership, and technology around the belief that cancer care must
            begin before cancer does.
          </p>
          <a className="team-text-link" href="#leadership">
            Meet our leadership <span aria-hidden="true">↓</span>
          </a>
        </div>
        <LeadershipGraphic />
      </section>

      <section
        className="team-leadership team-container"
        id="leadership"
        aria-labelledby="leadership-heading"
      >
        <div className="team-section-top">
          <div>
            <p className="team-kicker">01 / Leadership</p>
            <h2 id="leadership-heading">
              One belief.
              <br />
              Different perspectives.
            </h2>
          </div>
          {/* <p className="team-edit-note">
            Meet the people leading Salt Lick.
            <br />
            Approved portraits and biographies coming soon.
          </p> */}
        </div>
        <div className="team-profile-grid">
          {leaders.map((leader, i) => (
            <article className="team-profile" key={leader.name}>
              <div className="team-portrait">
                <img
                  src={portrait}
                  width="400"
                  height="440"
                  alt={
                    "Illustrated placeholder, not a portrait of " + leader.name
                  }
                />
                <span className="team-profile-number">0{i + 1}</span>
                <span className="team-portrait-label">
                  Portrait placeholder
                </span>
              </div>
              <div className="team-profile-copy">
                <p className="team-role">{leader.role}</p>
                <h3>{leader.name}</h3>
                <div className="team-bio">
                  <p>{leader.focus}.</p>
                  {/* <span>
                    Client-approved biography to be supplied · 60–80 words.
                  </span> */}
                </div>
                <span
                  className="team-linkedin"
                  aria-label={leader.name + " LinkedIn profile link pending"}
                >
                  <b aria-hidden="true">in</b> LinkedIn{" "}
                  <small>Link to be supplied</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="team-network" aria-labelledby="network-title">
        <div className="team-container">
          <div className="team-section-top">
            <div>
              <p className="team-kicker">02 / Our wider network</p>
              <h2 id="network-title">
                Backed by Esperer Group
                <br />
                and our partners.
              </h2>
            </div>
            <svg
              className="team-network-art"
              viewBox="0 0 220 100"
              role="img"
              aria-label="Animated connections between three organisations"
            >
              <path
                className="team-signal"
                d="M25 65Q110-35 195 65M25 65H195"
                fill="none"
                stroke="#9ebed3"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
              <circle cx="25" cy="65" r="12" fill="#accbdf" />
              <circle
                className="team-pulse"
                cx="110"
                cy="15"
                r="12"
                fill="#f2c39d"
              />
              <circle cx="195" cy="65" r="12" fill="#accbdf" />
            </svg>
          </div>
          <div className="team-partner-grid">
            {partners.map((partner) => (
              <a
                className="team-partner"
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  partner.name + " — " + partner.role + " (opens in a new tab)"
                }
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width="260"
                  height="100"
                  loading="lazy"
                />
                <p>{partner.role}</p>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="team-cta team-container"
        aria-labelledby="team-cta-title"
      >
        <div>
          <p className="team-kicker">03 / Build what comes next</p>
          <h2 id="team-cta-title">
            Join the team
            <br />
            shifting the start line.
          </h2>
          <p>
            We are building a team of clinicians, technologists, and
            public-health specialists.
          </p>
          <div className="actions">
            <a
              className="button blue"
              href="/about-us"
              aria-label="Careers — enquire by email"
            >
              Explore More <span aria-hidden="true">↗</span>
            </a>
            <a className="button outline" href="/partner-with-us">
              Partner With Us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <svg
          className="team-horizon"
          viewBox="0 0 480 300"
          role="img"
          aria-label="Animated rising sun and paths representing a shared future"
        >
          <path
            d="M30 260A210 210 0 0 1 450 260"
            fill="none"
            stroke="#deebf3"
            strokeWidth="38"
          />
          <path
            className="team-signal"
            d="M30 260A210 210 0 0 1 450 260"
            fill="none"
            stroke="#8bafc7"
            strokeWidth="2"
            strokeDasharray="4 10"
          />
          <circle
            className="team-sun"
            cx="240"
            cy="170"
            r="67"
            fill="#f2c39d"
          />
          <path
            d="M0 260Q120 220 240 260T480 260"
            fill="none"
            stroke="#accbdf"
            strokeWidth="3"
          />
          <path
            d="M0 282Q120 242 240 282T480 282"
            fill="none"
            stroke="#edcfb6"
            strokeWidth="2"
          />
        </svg>
      </section>
    </div>
  );
}
