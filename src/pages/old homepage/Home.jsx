import { useEffect, useState } from "react";
import source from "../../data/source.json";
import hero from "../../assets/illustrated-hero.webp";
import campusHero from "../../assets/partner-campus.webp";
import impactHero from "../../assets/how-consultation.webp";
import screening from "../../assets/illustrated-screening.webp";
import centres from "../../assets/illustrated-centres.webp";
import "./Home.css";
import GroupPartners from "../../components/GroupPartners/GroupPartners";

const sections = source.pages.home.sections;
const homeStats = source.pages.home.stats;
const signals = [
  "Lifestyle",
  "Vital signs",
  "Blood chemistry",
  "Tissue changes",
];

function SignalDrawing() {
  const [active, setActive] = useState(0);

  return (
    <div className="signal-drawing">
      <svg viewBox="0 0 500 400" aria-hidden="true">
        <g className="signal-orbits">
          <ellipse cx="250" cy="200" rx="155" ry="105" />
          <ellipse cx="250" cy="200" rx="105" ry="155" />
          <circle cx="405" cy="200" r="7" />
          <circle cx="250" cy="45" r="7" />
        </g>

        {[
          [70, 70],
          [430, 70],
          [70, 330],
          [430, 330],
        ].map(([x, y], index) => (
          <g key={index} className={active === index ? "active" : ""}>
            <path d={`M${x} ${y}Q250 ${y} 250 200`} className="signal-path" />
            <circle cx={x} cy={y} r="23" />
            <text x={x} y={y + 5}>
              {index + 1}
            </text>
          </g>
        ))}

        <rect
          x="195"
          y="145"
          width="110"
          height="110"
          rx="25"
          className="signal-chip"
        />
        <text x="250" y="210" className="signal-ai">
          AI
        </text>
      </svg>

      <div className="signal-options">
        {signals.map((signal, index) => (
          <button
            key={signal}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
          >
            <span>0{index + 1}</span>
            {signal}
          </button>
        ))}
      </div>

      <p className="caption">Illustrated signal model</p>
    </div>
  );
}

function HomeHero() {
  const [slide, setSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const labels = [
    "The gap isn't detection. It's timing.",
    "Salt Lick Centres",
    "Act earlier",
  ];
  useEffect(() => {
    if (hovered) return;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % 3),
      3000,
    );
    return () => window.clearInterval(timer);
  }, [slide, hovered]);
  const move = (direction) =>
    setSlide((current) => (current + direction + 3) % 3);
  return (
    <section
      className="home-carousel section"
      aria-label="Salt Lick highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div className="home-carousel-stage" aria-live="off">
        <div
          className="home-hero home-hero-slide"
          data-active={slide === 0}
          aria-hidden={slide !== 0}
          inert={slide !== 0}
          role="group"
          aria-roledescription="slide"
          aria-label="1 of 3: The gap isn't detection. It's timing."
        >
          <div>
            <div className="eyebrow">{sections[0].eyebrows[0]}</div>
            <h1>
              The gap isn't
              <br />
              detection.
              <br />
              <em>It's timing.</em>
            </h1>
            <p>{sections[0].paragraphs[0]}</p>
            <div className="actions">
              <a className="button" href="/what-is-salt-lick">
                Discover Salt Lick ↗
              </a>
              <a className="button outline" href="/partner-with-us">
                Partner With Us ↗
              </a>
            </div>
          </div>

          <div className="home-art">
            <img
              src={hero}
              alt="Watercolour illustration of a clinician consulting with a woman in everyday clothing, with a smaller scene of two adults walking"
              width="1536"
              height="1024"
            />
            <svg viewBox="0 0 650 450" aria-hidden="true">
              <path d="M40 300Q70 30 350 90T610 330" />
            </svg>
            {/* <span>INTELLIGENCE TO INTERCEPT</span> */}
          </div>
        </div>
        <div
          className="home-hero home-hero-slide home-added-slide"
          data-active={slide === 1}
          aria-hidden={slide !== 1}
          inert={slide !== 1}
          role="group"
          aria-roledescription="slide"
          aria-label="2 of 3: Salt Lick Centres"
        >
          <div>
            <div className="eyebrow">Salt Lick Centres</div>
            <h2>
              Breakthrough cancer screening,
              <br />
              <em>close to every community.</em>
            </h2>
            <p>
              Salt Lick Centres bring the complete assessment into the hospitals
              people already know and trust, with results in under 30 minutes.
            </p>
            <div className="actions">
              <a className="button" href="/our-centres">
                Explore Our Centres ↗
              </a>
            </div>
          </div>
          <div className="home-slide-art">
            <img
              src={campusHero}
              width="1536"
              height="1024"
              alt="Watercolor illustration of people arriving at a Salt Lick Centre within a hospital campus"
            />
          </div>
        </div>
        <div
          className="home-hero home-hero-slide home-added-slide"
          data-active={slide === 2}
          aria-hidden={slide !== 2}
          inert={slide !== 2}
          role="group"
          aria-roledescription="slide"
          aria-label="3 of 3: Act earlier"
        >
          <div>
            <div className="eyebrow">Salt Lick shifts the start line</div>
            <h2>
              Act Earlier.
              <br />
              <em>Before risk becomes cancer.</em>
            </h2>
            <p>
              With 20 million new cancer cases a year, the world cannot wait for
              symptoms. Salt Lick connects early risk signals so action can
              begin in the window where it matters most.
            </p>
            <div className="actions">
              <a className="button" href="/impact">
                See Our Impact ↗
              </a>
            </div>
          </div>
          <div className="home-slide-art">
            <img
              src={impactHero}
              width="1536"
              height="1024"
              alt="Watercolor clinician explaining a report to a visitor and his daughter"
            />
          </div>
        </div>
      </div>
      <div className="home-carousel-controls">
        <button
          className="home-carousel-arrow"
          onClick={() => move(-1)}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="home-carousel-dots" aria-label="Choose a slide">
          {labels.map((label, index) => (
            <button
              key={label}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${label}`}
              aria-current={slide === index ? "true" : undefined}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          className="home-carousel-arrow"
          onClick={() => move(1)}
          aria-label="Next slide"
        >
          →
        </button>
        <span className="home-slide-count" aria-hidden="true">
          0{slide + 1} / 03
        </span>
      </div>
    </section>
  );
}

function JourneySection() {
  const section = sections[2];
  const timeline = [
    "Early risk signals",
    "Routine care",
    "Detectability",
    "Salt Lick intervention",
  ];

  return (
    <section className="section home-gap">
      <div className="eyebrow">{section.eyebrows[0]}</div>
      <h2>Earlier in the story.</h2>
      <p className="home-gap-intro">{section.paragraphs[0]}</p>

      <div className="journey-cards">
        <div className="home-gap-cards">
          {section.cards.map((card, index) => (
            <article
              className={`home-gap-card home-gap-card-${index + 1}`}
              key={card.title}
            >
              <span className="home-gap-card-number">0{index + 1}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.paragraphs[0]}</p>
              </div>
            </article>
          ))}
        </div>

        <ol className="home-timeline" aria-label="Cancer risk timeline">
          {timeline.map((label, index) => (
            <li
              className={index === timeline.length - 1 ? "is-intervention" : ""}
              key={label}
            >
              <span className="home-timeline-marker" aria-hidden="true" />
              <span className="home-timeline-label">{label}</span>
              <span className="home-timeline-duration">
                {index === timeline.length - 1
                  ? "(Reversible window)"
                  : "(Years)"}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimingSection() {
  const section = sections[3];
  const stats = [
    {
      value: "1 in 5",
      label: "People will develop cancer in their lifetime",
    },
    ...homeStats.slice(0, 2),
    homeStats[3],
  ];

  return (
    <section className="home-timing">
      <div className="home-timing-inner">
        <div className="home-timing-copy">
          <div className="eyebrow">{section.eyebrows[0]}</div>
          <h2>{section.headings[0]}</h2>
          <p>{section.paragraphs[0]}</p>
        </div>

        <div className="home-timing-stats">
          {stats.map((stat) => (
            <article className="home-stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>

        {/* <p className="home-timing-source">
          Sources: GLOBOCAN 2022, IARC/WHO · JAMA Oncology (2023).
          <span>
            Figures and definitions require client approval before publication.
          </span>
        </p> */}
      </div>
    </section>
  );
}

function SignalSection() {
  return (
    <section className="section split home-intro">
      <SignalDrawing />
      <div>
        <div className="eyebrow">{sections[5].eyebrows[0]}</div>
        <h2>{sections[5].headings[0]}</h2>
        <p>{sections[5].paragraphs[0]}</p>
        <div className="actions">
          <a className="button blue" href="/what-is-salt-lick">
            Discover Salt Lick ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function ScreeningSection() {
  return (
    <section className="section split home-screening">
      <figure>
        <img
          src={screening}
          alt="Illustrated clinician and man reviewing an abstract tablet display"
          loading="lazy"
          width="1536"
          height="1024"
        />
        <figcaption className="caption">
          An illustrative view of the screening experience.
        </figcaption>
      </figure>

      <div>
        <div className="eyebrow">{sections[6].eyebrows[0]}</div>
        <h2>{sections[6].headings[0]}</h2>
        <div className="screening-list">
          {sections[6].cards.map((card, index) => (
            <article key={card.title}>
              <span className="number">0{index + 1}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.paragraphs[0]}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="button" href="/how-it-works">
          How It Works ↗
        </a>
      </div>
    </section>
  );
}

function CentresSection() {
  return (
    <section className="section split">
      <div>
        <div className="eyebrow">{sections[7].eyebrows[0]}</div>
        <h2>{sections[7].headings[0]}</h2>
        <p>{sections[7].paragraphs[0]}</p>
        <div className="actions">
          <a className="button blue" href="/our-centres">
            Explore Our Centres ↗
          </a>
        </div>
      </div>

      <figure>
        <img
          src={centres}
          alt="Conceptual illustrated health centre with diverse people in contemporary clothing, not an actual location"
          width="1536"
          height="1024"
          loading="lazy"
        />
        <figcaption className="caption">
          Conceptual illustration · not an actual centre.
        </figcaption>
      </figure>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* <div className="review-label">
        TYPE STUDY 01 / MANROPE · ILLUSTRATED JOURNEY
      </div> */}
      <HomeHero />
      <GroupPartners />
      <TimingSection />
      <JourneySection />
      <SignalSection />
      <ScreeningSection />
      <CentresSection />
    </div>
  );
}
