import esperer from "../../assets/espererGroup_logo.png";
import health from "../../assets/healtLogo.png";
import eioms from "../../assets/EIOMS_logo.png";
import Raktim from "../../assets/Raktim.jpeg";
import Rupam from "../../assets/Rupam.jpeg"
import Himanshu from "../../assets/Himanshu.jpg";
import Shashi from "../../assets/Shashi-Sinha.jpg";
import "./OurTeam.css";

const leaders = [
  {
    name: "Dr. Raktim Chattopadhyay",
    title: "Founder",
    role: "Founder, Salt Lick · Founder and CEO, Esperer Group",
    biography: [
      "Dr. Raktim Chattopadhyay is a researcher and entrepreneur with more than two decades of experience in cancer nutrition, integrative care and evidence-based therapeutic strategy.",
      "As Founder and CEO of Esperer Group, he has built an integrated oncology ecosystem spanning Esperer Nutrition, Esperer BioResearch and Health Voitho Technologies, including a dedicated cancer nutrition research centre in Hyderabad.",
      "He is the architect of precision molecular nutrition frameworks that bring biosensitivity insights into clinical practice. His pioneering work, including the DiNI Axis hypothesis, has shaped clinically validated nutrition platforms that improve outcomes across treatment, recovery and survivorship.",
      "With Salt Lick, he takes that vision upstream, to the years before cancer begins.",
    ],
    tags: [
      "Cancer nutrition",
      "Translational healthcare",
      "Precision molecular nutrition",
    ],
    detailLabel: "Leadership footprint",
    detail: "Founder and CEO, Esperer Group, including Esperer Nutrition, Esperer BioResearch and Health Voitho Technologies",
    image: Raktim,
    linkedinUrl: "https://www.linkedin.com/in/dr-raktim-chattopadhyay-phd-0730b448",
  },
  {
    name: "Mr. Himanshu Dave",
    title: "CEO and Co-Founder",
    role: "Chief Executive Officer and Co-Founder",
    biography: [
      "Himanshu Dave is a strategic healthcare leader with more than 35 years of experience across pharmaceuticals and public health systems.",
      "His leadership footprint spans Wockhardt, Astellas and the Fairfax Financial Holdings Foundation. Throughout, he has designed scalable healthcare delivery models that bring private-sector innovation together with public health priorities.",
      "He led the creation of India's largest rural free-dialysis network, expanding access to life-saving care for nearly one-third of the country's population.",
      "At Salt Lick, he leads the mission to make early cancer risk assessment available to entire populations.",
    ],
    tags: [
      "Pharmaceutical and healthcare leadership",
      "Public health delivery",
      "Social impact and access strategy",
    ],
    detailLabel: "Leadership footprint",
    detail: "Wockhardt · Astellas · Fairfax Financial Holdings (Foundation)",
    image: Himanshu,
    linkedinUrl: "https://www.linkedin.com/in/himanshudave",
  },
  {
    name: "Mr. Rupam Chattopadhyay",
    title: "Chief Technical Officer",
    role: "Chief Technical Officer",
    biography: [
      "Rupam Chattopadhyay leads the technology behind Salt Lick. A health-tech entrepreneur and AI strategist, he is focused on building intelligent healthcare systems that make quality care accessible, affordable and available to every community.",
      "He has been instrumental in conceptualising and developing AI-powered diagnostic platforms for early disease detection, predictive risk assessment and integrated patient care, bringing together artificial intelligence, medical devices, cloud platforms and evidence-driven clinical workflows.",
      "Before health-tech, he built a career in enterprise consulting and digital transformation, leading large-scale technology programmes for global organisations. Today he brings clinicians, researchers, industry and policymakers together to turn breakthrough technology into scalable, clinically relevant care.",
    ],
    tags: [
      "AI in healthcare",
      "Digital health platforms",
      "Digital transformation",
    ],
    detailLabel: "Leadership footprint",
    detail: "Enterprise consulting and digital transformation for global organisations",
    image: Rupam,
    linkedinUrl: "https://www.linkedin.com/in/rupam-chattopadhyay-cspo",
  },
];

const mentor = {
  name: "Mr. Shashi Sinha",
  title: "Mentor",
  role: "Former Chairman and CEO, IPG Mediabrands India",
  biography: [
    "Shashi Sinha has spent nearly four decades shaping India's media and advertising industry. An engineer from IIT Kanpur and a management graduate of IIM Bangalore, he began his career in consumer goods before moving into advertising.",
    "In the early 1990s he founded Lodestar, India's first specialised media planning and buying agency, putting data, research and accountability at the heart of media decisions. He went on to lead IPG Mediabrands India as Chairman and CEO until July 2026, building it into the country's second-largest media agency group, managing around 20% of India's media spend.",
    "He has helped set the standards the industry runs on: as Immediate Past Chairman of the Broadcast Audience Research Council (BARC), Past President of The Ad Club Bombay, Past Chairman of the Media Research Users Council and the Audit Bureau of Circulations, and through key roles at ASCI and AAAI.",
    "As mentor to Salt Lick, he brings unmatched experience in building trusted institutions and communicating with millions.",
  ],
  tags: [
    "Brand and media strategy",
    "Industry governance",
    "Institution building",
  ],
  detailLabel: "Honours",
  detail: "AAAI Lifetime Achievement Award (2023) · IAA India Chapter Hall of Fame (2022) · Distinguished Alumnus Award, IIT Kanpur and IIM Bangalore",
  image: Shashi,
};

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
            stroke="#101d32"
          />
          <circle cx="460" cy="220" r="7" fill="#eac09c" />
          <circle cx="60" cy="220" r="5" fill="#8dafc7" />
        </g>
        <path
          className="team-signal"
          d="M260 80L100 300H420Z"
          fill="none"
          stroke="#101d32"
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
          stroke="#f2c39d"
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
            fill="#101d32"
            stroke="#101d32"
          />
          <path
            d="M240 48c0 22 40 22 40 44m0-44c0 22-40 22-40 44m4-35h32m-32 25h32"
            fill="none"
            stroke="#fff"
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
            fill="#f2c39d"
            stroke="#f2c39d"
          />
          <circle
            cx="100"
            cy="280"
            r="12"
            fill="none"
            stroke="#000"
            strokeWidth="2.5"
          />
          <path
            d="M75 322v-9c0-23 50-23 50 0v9"
            fill="none"
            stroke="#000"
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
            fill="#101d32"
            stroke="#101d32"
          />
          <rect
            x="401"
            y="277"
            width="38"
            height="38"
            rx="7"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
          />
          <path
            d="M411 267v10m18-10v10m-18 38v10m18-10v10m-38-38h10m-10 18h10m38-18h10m-10 18h10"
            stroke="#fff"
            strokeWidth="2.5"
          />
        </g>
      </svg>
      <span className="team-graphic-label science">Oncology science</span>
      <span className="team-graphic-label leadership">Healthcare</span>
      <span className="team-graphic-label technology">Technology</span>
    </div>
  );
}

function Profile({ profile, headingId, NameHeading = "h2" }) {
  return (
    <article className="team-leader-row" aria-labelledby={headingId}>
      {profile.image ? (
        <img
          className="team-leader-photo"
          src={profile.image}
          alt={profile.name}
          width="560"
          height="700"
          loading="lazy"
        />
      ) : (
        <div
          className="team-leader-portrait"
          role="img"
          aria-label={`Portrait placeholder for ${profile.name}`}
        >
          <span className="team-leader-initials" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="team-leader-portrait-label" aria-hidden="true">
            Portrait photo
          </span>
        </div>
      )}
      <div className="team-leader-copy">
        <p className="team-leader-eyebrow">{profile.title}</p>
        <NameHeading className="team-leader-name" id={headingId}>
          {profile.name}
        </NameHeading>
        <p className="team-leader-role">{profile.role}</p>
        {profile.biography.map((paragraph) => (
          <p className="team-leader-bio" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <div className="team-leader-tags">
          {profile.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="team-leader-footprint">
          <strong>{profile.detailLabel}</strong>
          {profile.detail}
        </div>
        {profile.linkedinUrl ? (
          <a
            className="team-leader-link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View LinkedIn profile for ${profile.name} (opens in a new tab)`}
          >
            View LinkedIn profile <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <button
            className="team-leader-link"
            type="button"
            disabled
            title="LinkedIn profile link to be supplied"
            aria-label={`${profile.name} — LinkedIn profile link to be supplied`}
          >
            View LinkedIn profile <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </article>
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
          <p className="team-kicker">Our team</p>
          <h1 id="team-title">
            The people shifting the <em>start line</em> of cancer care.
          </h1>
          <p>
            The leadership team brings together oncology science, healthcare
            leadership, and technology around the belief that cancer care must
            begin before cancer does.
          </p>
          {/* <a className="team-text-link" href="#leadership">
            Meet our leadership <span aria-hidden="true">↓</span>
          </a> */}
        </div>
        <LeadershipGraphic />
      </section>

      <section
        className="team-leadership"
        id="leadership"
        aria-label="Leadership profiles"
      >
        <div className="team-leaders">
          {leaders.map((leader, index) => (
            <Profile key={leader.name} profile={leader} headingId={`team-leader-${index}`} />
          ))}
        </div>
      </section>

      <section
        className="team-leadership team-mentor"
        id="mentor"
        aria-labelledby="mentor-title"
      >
        <div className="team-leaders">
          <h2 className="team-mentor-title" id="mentor-title">Mentor</h2>
          <Profile profile={mentor} headingId="team-mentor-name" NameHeading="h3" />
        </div>
      </section>

      <section className="team-network" aria-labelledby="network-title">
        <div className="team-container">
          <div className="team-section-top">
            <div>
              <p className="team-kicker">Supported by</p>
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
                stroke="#101d32"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
              <circle cx="25" cy="65" r="12" fill="#101d32" />
              <circle
                className="team-pulse"
                cx="110"
                cy="15"
                r="12"
                fill="#f2c39d"
              />
              <circle cx="195" cy="65" r="12" fill="#101d32" />
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
          {/* <p className="team-kicker">03 / Build what comes next</p> */}
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
              className="button teamPage blue"
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
            stroke="#101d32"
            strokeWidth="38"
          />
          <path
            className="team-signal"
            d="M30 260A210 210 0 0 1 450 260"
            fill="none"
            stroke="#fff"
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
            stroke="#101d32"
            strokeWidth="3"
          />
          <path
            d="M0 282Q120 242 240 282T480 282"
            fill="none"
            stroke="#f2c39d"
            strokeWidth="2"
          />
        </svg>
      </section>
    </div>
  );
}
