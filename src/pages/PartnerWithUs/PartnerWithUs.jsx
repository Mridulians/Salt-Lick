import { useEffect, useRef, useState } from "react";
import campus from "../../assets/partner-campus.webp";
import "./PartnerWithUs.css";

const interests = [
  "Bringing Salt Lick screening to my country or region.",
  "A Salt Lick Centre in my region.",
  "Investment and partnerships.",
  "Media.",
  "Something else.",
];

export default function PartnerWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const confirmation = useRef(null);
  useEffect(() => {
    if (submitted) confirmation.current?.focus();
  }, [submitted]);
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="partner-page">
      <section
        className="partner-hero partner-wrap"
        aria-labelledby="partner-title"
      >
        <div className="partner-hero-copy">
          <p className="partner-label">Partner with us / A shared purpose</p>
          <h1 id="partner-title">
            Let's reduce the
            <br />
            cancer burden,
            <br />
            <em>together.</em>
          </h1>
          <p>
            Salt Lick works with governments, health ministries, and healthcare
            institutions worldwide.
          </p>
          <a className="button blue" href="#partnership-enquiry">
            Start a conversation <span aria-hidden="true">↓</span>
          </a>
          <div className="partner-response">
            <span aria-hidden="true">↗</span>
            <span>
              Our team aims to respond
              <br />
              <strong>within two working days.</strong>
            </span>
          </div>
        </div>
        <div className="partner-campus">
          <img
            src={campus}
            width="1536"
            height="1024"
            alt="Conceptual watercolor of a Salt Lick Centre within a hospital campus, with professionals arriving"
          />
          <div className="partner-campus-edge" aria-hidden="true" />
        </div>
      </section>
      <section
        className="partner-enquiry partner-wrap"
        id="partnership-enquiry"
        aria-labelledby="enquiry-title"
      >
        <div className="partner-form-card">
          {submitted ? (
            <div
              className="partner-success"
              ref={confirmation}
              tabIndex="-1"
              role="status"
              aria-live="polite"
            >
              <div className="partner-success-mark" aria-hidden="true">
                ✓
              </div>
              <p className="partner-label">Thank you for reaching out</p>
              <h2 id="enquiry-title">Successfully submitted.</h2>
              {/* <p>Your demo enquiry is complete.</p> */}
              <div className="partner-success-preview">
                <span>Confirmation preview</span>
                <p>
                  Thank you. A member of our team will be in touch within two
                  working days.
                </p>
              </div>
              <p className="partner-demo-note">
                This is a demonstration only. No information has been sent or
                stored, and no team response will be triggered.
              </p>
              <button
                className="button blue"
                onClick={() => setSubmitted(false)}
              >
                Start another enquiry <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : (
            <>
              <div className="partner-form-heading">
                <p className="partner-label">Tell us what you have in mind</p>
                <h2 id="enquiry-title">
                  Let's start
                  <br />
                  with a conversation.
                </h2>
                <p>A few details will help us understand your interest.</p>
              </div>
              {/* <div className="partner-demo-banner">
                <span>Demo form</span>
                <p>Try the experience. Your details won't be sent or stored.</p>
              </div> */}
              <form
                onSubmit={submit}
                className="partner-form"
                autoComplete="on"
              >
                <p className="partner-required-note">
                  Fields marked * are required.
                </p>
                <div className="partner-field partner-full">
                  <label htmlFor="partner-interest">
                    I am contacting you about <span>*</span>
                  </label>
                  <select
                    id="partner-interest"
                    name="interest"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your interest
                    </option>
                    {interests.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-name">
                    Full name <span>*</span>
                  </label>
                  <input
                    id="partner-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength="120"
                    placeholder="Your full name"
                    pattern=".*\S.*"
                  />
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-organisation">
                    Organisation <span>*</span>
                  </label>
                  <input
                    id="partner-organisation"
                    name="organisation"
                    autoComplete="organization"
                    required
                    maxLength="160"
                    placeholder="Organisation name"
                    pattern=".*\S.*"
                  />
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-designation">
                    Designation{" "}
                    <span className="partner-optional">Optional</span>
                  </label>
                  <input
                    id="partner-designation"
                    name="designation"
                    autoComplete="organization-title"
                    maxLength="120"
                    placeholder="Your role or title"
                  />
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-country">
                    Country <span>*</span>
                  </label>
                  <input
                    id="partner-country"
                    name="country"
                    autoComplete="country-name"
                    required
                    maxLength="100"
                    placeholder="Your country"
                    pattern=".*\S.*"
                  />
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-email">
                    Email <span>*</span>
                  </label>
                  <input
                    id="partner-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength="254"
                    placeholder="you@organisation.com"
                  />
                </div>
                <div className="partner-field">
                  <label htmlFor="partner-phone">
                    Phone <span className="partner-optional">Optional</span>
                  </label>
                  <input
                    id="partner-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength="40"
                    placeholder="Include country code"
                  />
                </div>
                <div className="partner-field partner-full">
                  <label htmlFor="partner-message">
                    How can we help? <span>*</span>
                  </label>
                  <textarea
                    id="partner-message"
                    name="message"
                    required
                    maxLength="3000"
                    rows="5"
                    placeholder="Tell us about your goals, region, or proposed collaboration."
                    aria-describedby="partner-message-hint"
                  />
                  <small id="partner-message-hint">
                    Please don't include patient information or medical records.
                  </small>
                </div>
                <div className="partner-form-bottom partner-full">
                  {/* <p>Demo only — no information leaves this page.</p> */}
                  <button className="button blue" type="submit">
                    Submit enquiry <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <aside
          className="partner-contact"
          aria-label="Organisation contact information"
        >
          <p className="partner-label">Connect with Salt Lick</p>
          <h2>
            One conversation.
            <br />
            New possibilities.
          </h2>
          <div className="partner-contact-block">
            <span className="partner-contact-label">Our organisation</span>
            <h3>Salt Lick Healthcare Pvt. Ltd.</h3>
            <address>
              4BA, 4th Floor, Gundecha Onclave,
              <br />
              Sakinaka, Andheri East,
              <br />
              Mumbai 400072, India.
            </address>
          </div>
          <div className="partner-contact-block">
            <span className="partner-contact-label">Write to us</span>
            <a
              className="partner-email"
              href="mailto:admin@saltlickhealthcare.com"
            >
              admin@saltlickhealthcare.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="partner-group">
            <span className="partner-contact-label">Part of Esperer Group</span>
            <h3>
              A global outlook.
              <br />A connected network.
            </h3>
            <p>Esperer Group offices</p>
            <div className="partner-countries">
              <span>India</span>
              <span>UAE</span>
              <span>Australia</span>
              <span>United States</span>
            </div>
          </div>
          <div className="partner-network">
            <span className="partner-contact-label">Our partners</span>
            <div>
              <strong>Health Voitho Technologies</strong>
              <span>Technology partner</span>
            </div>
            <div>
              <strong>EIOMS</strong>
              <span>Knowledge partner</span>
            </div>
          </div>
          <div className="partner-purpose">
            <span aria-hidden="true">↗</span>
            <p>
              Intelligence to intercept.
              <br />
              Partnerships to reach further.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
