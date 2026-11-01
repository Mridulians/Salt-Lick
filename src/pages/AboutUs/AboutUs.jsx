import { useEffect, useRef, useState } from "react";
import origin from "../../assets/about-human-hero.webp";
import science from "../../assets/about-science.webp";
import centre from "../../assets/about-centre.webp";
import portrait from "../../assets/team-portrait-placeholder.svg";
import "./AboutUs.css";
import AboutEcosystem from "./AboutEcosystem";

const values = [
  ["Science first", "Evidence and clinical oversight.", "science"],
  [
    "Access for all",
    "Screening that reaches people wherever they live.",
    "access",
  ],
  ["Care without fear", "A gentle and respectful experience.", "care"],
  ["Trust", "Consent, privacy, and transparency in data handling.", "trust"],
];
const roadmap = [
  [
    "Foundation",
    "Platform built and first centre launched.",
    "Completion status to be confirmed",
  ],
  [
    "National scale",
    "A network of 50 centres across India.",
    "Proposed target · not an achieved total",
  ],
  [
    "Global reach",
    "Expansion across the Middle East, Africa, Southeast Asia, and Australia.",
    "Expansion ambition · availability not confirmed",
  ],
  [
    "Beyond cancer",
    "Potential risk assessment for diabetes, heart disease, and other lifestyle diseases.",
    "Future possibility · not a current capability",
  ],
];
const leaders = [
  ["Dr. Raktim Chattopadhyay", "Founder"],
  ["Mr. Himanshu Dave", "CEO and Co-Founder"],
  ["Mr. Rupam Chattopadhyay", "Chief Technical Officer"],
];

function ValueIcon({ type }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {type === "science" && (
        <>
          <path d="M24 8h16M28 8v20L15 49q-3 7 5 7h24q8 0 5-7L36 28V8" />
          <path d="M22 39h20" />
          <path className="about-icon-detail" d="M25 48h4m6-3h4" />
        </>
      )}
      {type === "access" && (
        <>
          <path d="M9 55V26l23-17 23 17v29M24 55V35h16v20M5 55h54" />
          <path className="about-icon-detail" d="M28 24h8m-4-4v8" />
        </>
      )}
      {type === "care" && (
        <>
          <path d="M32 43S12 31 12 21a11 11 0 0 1 20-6 11 11 0 0 1 20 6c0 10-20 22-20 22Z" />
          <path className="about-icon-detail" d="M8 48l12 8h24l12-8M18 48h28" />
        </>
      )}
      {type === "trust" && (
        <>
          <path d="M32 7l21 9v16c0 13-21 25-21 25S11 45 11 32V16Z" />
          <path className="about-icon-detail" d="M23 31l7 7 13-15" />
        </>
      )}
    </svg>
  );
}

export default function AboutUs() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const node = root.current;
    const sections = node.querySelectorAll("[data-about-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    let frame = 0;
    const update = () => {
      frame = 0;
      node.querySelectorAll("[data-about-parallax]").forEach((element) => {
        const rect = element.getBoundingClientRect();
        const shift = Math.max(
          -18,
          Math.min(
            18,
            (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.045,
          ),
        );
        element.style.setProperty("--about-shift", shift + "px");
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="about-story" ref={root}>
      <section
        className="about-origin about-wrap"
        aria-labelledby="about-title"
      >
        <div className="about-origin-copy">
          <p className="about-label">About Salt Lick / Our purpose</p>
          <h1 id="about-title">
            Our purpose is to shift the <em>start line</em> of cancer care.
          </h1>
          <p>
            Headquartered in Mumbai and built for the world, Salt Lick
            Healthcare aims to help people and nations act on cancer risk before
            cancer becomes detectable.
          </p>
          <a href="#about-continuum" className="about-link">
            Discover our story <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure className="about-origin-art" data-about-parallax>
          <img
            src={origin}
            width="1536"
            height="1024"
            alt="Watercolor illustration of a clinician warmly welcoming three adults; fictional people"
          />
          {/* <figcaption>
            <span>01 / People at the heart of our purpose</span> Illustrative scene · fictional people.
          </figcaption> */}
          <div className="about-origin-frame" aria-hidden="true" />
        </figure>
        <div className="about-origin-bottom">
          <div className="about-journey-track" aria-hidden="true">
            <svg className="about-journey-arrow" viewBox="0 0 88 28" fill="none">
              <defs>
                <linearGradient id="about-arrow-tail" x1="0" y1="14" x2="78" y2="14" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f2c39d" stopOpacity="0" />
                  <stop offset="1" stopColor="#e8ae7e" />
                </linearGradient>
              </defs>
              <path d="M2 14H79" stroke="url(#about-arrow-tail)" strokeWidth="4" strokeLinecap="round" />
              <path d="M68 4L80 14L68 24" stroke="#e8ae7e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span>Mumbai, India</span>
          <span>Built for the world</span>
          <span>Intelligence to intercept</span>
        </div>
      </section>

      <section
        className="about-continuum about-wrap"
        id="about-continuum"
        aria-labelledby="continuum-title"
        data-about-reveal
      >
        <figure className="about-science-art" data-about-parallax>
          <img
            src={science}
            width="1536"
            height="1024"
            loading="lazy"
            alt="Conceptual watercolor illustration of a diverse clinical and scientific team collaborating"
          />
          {/* <figcaption>Illustrated collaboration · fictional people</figcaption> */}
        </figure>
        <div>
          <p className="about-label">01 / Part of something wider</p>
          <h2 id="continuum-title">
            Advancing the full continuum of cancer care.
          </h2>
          <p>
            Esperer Group brings together cancer-nutrition science, oncology
            research, and AI health technology. Salt Lick is the
            early-risk-assessment part of that continuum.
          </p>
          <div className="about-disciplines">
            <span>Nutrition science</span>
            <span>Oncology research</span>
            <span>AI health technology</span>
          </div>
          <a
            className="about-link"
            href="https://www.espererworld.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Esperer Group <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <AboutEcosystem />

      <section
        className="about-purpose about-wrap"
        aria-label="Mission and vision"
      >
        <div className="about-purpose-intro" data-about-reveal>
          <p className="about-label">03 / What moves us forward</p>
          {/* <span>Purpose, made clear.</span> */}
        </div>
        <div className="about-purpose-grid">
          <article className="about-mission" data-about-reveal>
            <span className="about-purpose-index">01 — Mission</span>
            <h2>
              To make early cancer risk assessment accessible to every person,
              in every community.
            </h2>
            <div className="about-open-door" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </article>
          <article className="about-vision" data-about-reveal>
            <span className="about-purpose-index">02 — Vision</span>
            <h2>
              A world where cancer risk is found long before it becomes a
              diagnosis.
            </h2>
            <div className="about-window" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </article>
        </div>
      </section>

      <section
        className="about-values about-wrap"
        aria-labelledby="values-title"
      >
        <div className="about-values-intro" data-about-reveal>
          <p className="about-label">04 / The way we work</p>
          <h2 id="values-title">Our values.</h2>
          <span className="about-values-rule" aria-hidden="true" />
        </div>
        <div className="about-values-list">
          {values.map(([name, copy, type], i) => (
            <article key={name} data-about-reveal>
              <span className="about-value-number">0{i + 1}</span>
              <ValueIcon type={type} />
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-roadmap" aria-labelledby="roadmap-title">
        <div className="about-wrap">
          <div className="about-section-heading" data-about-reveal>
            <div>
              <p className="about-label">05 / Looking ahead</p>
              <h2 id="roadmap-title">
                From the first centre
                <br />
                to a global network.
              </h2>
            </div>
            {/* <p className="about-status-note">
              Our proposed path. Milestone status and timing require
              confirmation; targets are not presented as achieved results.
            </p> */}
          </div>
          <div className="about-roadmap-layout">
            <figure className="about-centre-art" data-about-parallax>
              <img
                src={centre}
                width="1536"
                height="1024"
                loading="lazy"
                alt="Conceptual watercolor illustration of people welcomed at a healthcare building with Salt Lick signage"
              />
              {/* <figcaption>
                Conceptual Salt Lick centre · not an actual location
              </figcaption> */}
            </figure>
            <div className="about-milestones">
              {roadmap.map(([name, copy, status], i) => (
                <div
                  className={
                    "about-milestone " + (active === i ? "selected" : "")
                  }
                  key={name}
                >
                  <h3>
                    <button
                      aria-expanded={active === i}
                      aria-controls={"milestone-panel-" + i}
                      onClick={() => setActive(i)}
                    >
                      <span>0{i + 1}</span>
                      {name}
                      <b aria-hidden="true">{active === i ? "−" : "+"}</b>
                    </button>
                  </h3>
                  <div id={"milestone-panel-" + i} hidden={active !== i}>
                    <p>{copy}</p>
                    <span className="about-milestone-status">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-leaders about-wrap"
        aria-labelledby="about-leaders-title"
      >
        <div className="about-section-heading" data-about-reveal>
          <div>
            <p className="about-label">06 / People with purpose</p>
            <h2 id="about-leaders-title">
              Meet the people
              <br />
              behind Salt Lick.
            </h2>
          </div>
          <a className="about-link" href="/our-team">
            Meet Our Team <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-leader-grid">
          {leaders.map(([name, role]) => (
            <article key={name} data-about-reveal>
              <div className="about-leader-portrait">
                <img
                  src={portrait}
                  width="400"
                  height="440"
                  loading="lazy"
                  alt={"Placeholder illustration, not a portrait of " + name}
                />
                <span>Portrait to be supplied</span>
              </div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-closing about-wrap"
        aria-labelledby="about-closing-title"
        data-about-reveal
      >
        <div className="about-closing-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="about-label">07 / The next chapter starts together</p>
        <h2 id="about-closing-title">
          Join us in reducing
          <br />
          the world's cancer burden.
        </h2>
        <div className="actions">
          <a className="button aboutBtn blue" href="/partner-with-us">
            Partner With Us <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button outline"
            href="/about-us"
            aria-label="Explore more about us"
          >
            Explore More <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}


