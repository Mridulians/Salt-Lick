import source from "../data/source.json";
import hero from "../assets/illustrated-hero.webp";
import screening from "../assets/illustrated-screening.webp";
import centres from "../assets/illustrated-centres.webp";

const links = {
  home: "/",
  what: "/what-is-salt-lick",
  how: "/how-it-works",
  units: "/our-centres",
  impact: "/impact",
  about: "/about-us",
  team: "/our-team",
  contact: "/partner-with-us",
};

const labels = {
  what: "What Is Salt Lick",
  how: "How It Works",
  units: "Our Centres",
  impact: "Impact",
  about: "About Us",
  team: "Our Team",
  contact: "Partner With Us",
};

const faqQuestions = [
  "Is a Salt Lick screening a cancer diagnosis?",
  "Is the screening safe?",
  "How long does it take?",
  "Who should be screened?",
  "What happens to my data?",
];

const types = {
  what: "02 / GEORGIA · EDITORIAL",
  how: "03 / ARIAL · TECHNICAL",
  about: "04 / TREBUCHET MS · HUMANIST",
};

function getIllustration(page) {
  if (page === "how") return screening;
  if (page === "units" || page === "about") return centres;
  return hero;
}

function TeamCards({ section }) {
  return (
    <div className="cards">
      {section.headings.map((name, index) => (
        <article className="card" key={name}>
          <span className="number">0{index + 1}</span>
          <h3>{name}</h3>
          <p>{section.paragraphs[index * 2]}</p>
          <p className="source-note">
            Biography and portrait awaiting client approval.
          </p>
        </article>
      ))}
    </div>
  );
}

function SectionContent({ page, index, section }) {
  if (page === "how" && index === 6) {
    return (
      <div className="faq-list">
        {section.paragraphs.map((paragraph, questionIndex) => (
          <details key={paragraph}>
            <summary>{faqQuestions[questionIndex]}</summary>
            <p>{paragraph}</p>
          </details>
        ))}
      </div>
    );
  }

  if (page === "team" && index === 0) {
    return <TeamCards section={section} />;
  }

  const cardParagraphs = new Set(
    section.cards.flatMap((card) => card.paragraphs),
  );
  const paragraphs = section.paragraphs.filter(
    (paragraph) => !cardParagraphs.has(paragraph),
  );

  return (
    <>
      <div className="prose-stack">
        {paragraphs.map((paragraph, paragraphIndex) =>
          page === "how" && index === 0 ? (
            <div className="process-step" key={paragraph}>
              <span className="number">
                {String(paragraphIndex + 1).padStart(2, "0")}
              </span>
              <p>{paragraph}</p>
            </div>
          ) : (
            <p key={paragraphIndex}>{paragraph}</p>
          ),
        )}
      </div>

      {section.cards.length > 0 && (
        <div className="cards">
          {section.cards.map((card, cardIndex) => (
            <article className="card" key={cardIndex}>
              <span className="number">
                {String(cardIndex + 1).padStart(2, "0")}
              </span>
              {card.title && <h3>{card.title}</h3>}
              {card.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      )}
    </>
  );
}

function PageSection({ page, section, index }) {
  const heading = section.headings[0];
  const isTeamIntro = page === "team" && index === 0;
  const hasContent =
    section.paragraphs.length > 0 || section.cards.length > 0;
  const pageButtons = section.buttons.filter((button) => links[button.page]);

  return (
    <section className={`section body-section body-${index}`}>
      <div className="eyebrow">
        {String(index + 1).padStart(2, "0")} / {labels[page]}
      </div>

      {section.headings.length > 0 && !isTeamIntro && <h2>{heading}</h2>}

      <SectionContent page={page} index={index} section={section} />

      {!hasContent && (
        <p className="notice">
          This section is reserved for client-approved content from the
          complete wireframe review.
        </p>
      )}

      {pageButtons.length > 0 && (
        <div className="page-links">
          {pageButtons.map((button, buttonIndex) => (
            <a
              className="button"
              href={links[button.page]}
              key={buttonIndex}
            >
              {button.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default function SourcePage({ page }) {
  const sections = source.pages[page].sections;
  const illustration = getIllustration(page);

  return (
    <div className={`inner-page typography-${page}`}>
      {types[page] && (
        <div className="review-label">TYPE STUDY {types[page]}</div>
      )}

      <section className="section split page-hero">
        <div>
          <div className="eyebrow">{labels[page]}</div>
          <h1>{sections[0].headings[0]}</h1>
          {sections[0].paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {page === "contact" && (
            <div className="actions">
              <a
                className="button"
                href="mailto:admin@saltlickhealthcare.com"
              >
                Email our team ↗
              </a>
            </div>
          )}
        </div>

        <figure>
          <img
            src={illustration}
            alt="Watercolour healthcare illustration with diverse fictional people in contemporary clothing"
            width="1536"
            height="1024"
          />
          <figcaption className="caption">
            Illustrative scene · not actual patients, staff or centres.
          </figcaption>
        </figure>
      </section>

      {sections.slice(1).map((section, index) => (
        <PageSection
          key={index}
          page={page}
          section={section}
          index={index}
        />
      ))}

      <section className="section">
        <p className="source-note">
          Content reproduced from the supplied wireframe for design review.
          Clinical statements and programme details remain subject to client
          approval.
        </p>
      </section>
    </div>
  );
}
