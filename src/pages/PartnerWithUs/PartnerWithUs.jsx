import { useEffect, useRef, useState } from "react";
import parsePhoneNumber from "libphonenumber-js/max";
import isEmail from "validator/es/lib/isEmail";
import campus from "../../assets/partner-campus-official-logo.webp";
import "./PartnerWithUs.css";

const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();

const interests = [
  "Bringing Salt Lick screening to my country or region.",
  "A Salt Lick Centre in my region.",
  "Investment and partnerships.",
  "Media.",
  "Something else.",
];

function getEmailError(value) {
  const email = value.trim();
  if (!email) return "Please enter your email address.";
  return isEmail(email, { allow_utf8_local_part: false })
    ? ""
    : "Enter a valid email address, for example name@company.com.";
}

function getPhoneError(value) {
  const phone = value.trim();
  if (!phone) return "";
  const parsed = phone.startsWith("+")
    ? parsePhoneNumber(phone, { extract: false })
    : undefined;
  return parsed?.isValid()
    ? ""
    : "Enter a valid phone number with + and its country code.";
}

export default function PartnerWithUs() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [contactErrors, setContactErrors] = useState({ email: "", phone: "" });
  const requestInFlight = useRef(false);
  const errorNotice = useRef(null);
  const confirmation = useRef(null);
  useEffect(() => {
    if (submitted) confirmation.current?.focus();
    else if (submissionError) errorNotice.current?.focus();
  }, [submitted, submissionError]);

  const validateContactField = (field) => {
    field.setCustomValidity("");
    const error = field.name === "email"
      ? getEmailError(field.value)
      : getPhoneError(field.value);
    const message = error || field.validationMessage;
    field.setCustomValidity(message);
    setContactErrors((previous) => ({ ...previous, [field.name]: message }));
    return !message;
  };

  const clearContactError = (event) => {
    const field = event.currentTarget;
    field.setCustomValidity("");
    setContactErrors((previous) => ({ ...previous, [field.name]: "" }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (requestInFlight.current) return;
    const emailField = form.elements.namedItem("email");
    const phoneField = form.elements.namedItem("phone");
    const emailValid = validateContactField(emailField);
    const phoneValid = validateContactField(phoneField);
    if (!form.reportValidity() || !emailValid || !phoneValid) return;

    const messageField = form.elements.namedItem("message");
    if (!messageField.value.trim()) {
      messageField.setCustomValidity("Please enter your message.");
      messageField.reportValidity();
      return;
    }
    if (!web3FormsKey) {
      setSubmissionError("Enquiries are temporarily unavailable. Please try again later.");
      return;
    }

    const formData = new FormData(form);
    formData.set("email", emailField.value.trim());
    formData.set("phone", phoneField.value.trim());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    requestInFlight.current = true;
    setSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          access_key: web3FormsKey,
          subject: "Salt Lick Healthcare — Partnership enquiry",
          from_name: "Salt Lick Healthcare website",
          botcheck: formData.has("botcheck"),
        }),
      });
      const result = await response.json().catch(() => null);
      if (response.ok && result?.success === true) {
        setSubmitted(true);
      } else if (response.status === 429) {
        setSubmissionError("Too many attempts. Please wait a while before trying again.");
      } else if (response.status >= 500) {
        setSubmissionError("Our enquiry service is temporarily unavailable. Please try again shortly.");
      } else {
        setSubmissionError("We couldn't confirm your submission. Please try again in a moment.");
      }
    } catch (error) {
      setSubmissionError(
        error.name === "AbortError"
          ? "Your request took too long. Please check your connection and try again."
          : "We couldn't reach our enquiry service. Please try again shortly.",
      );
    } finally {
      window.clearTimeout(timeout);
      requestInFlight.current = false;
      setSubmitting(false);
    }
  };
  return (
    <div className="partner-page">
      
      <section
        className="partner-hero partner-wrap"
        aria-labelledby="partner-title"
      >
        <div className="partner-hero-copy">
          <p className="partner-label">Partner with us</p>
          <h1 id="partner-title">
            Let's reduce the
            <br />
            cancer burden,
            <br />
            <em>together.</em>
          </h1>
          <p>
            We work with governments, health ministries and healthcare
            institutions worldwide. Tell us about your goals and our team will
            respond within two working days.
          </p>
          {/* <a className="button blue" href="#partnership-enquiry">
            Start a conversation <span aria-hidden="true">↓</span>
          </a>
          <div className="partner-response">
            <span aria-hidden="true">↗</span>
            <span>
              Our team aims to respond
              <br />
              <strong>within two working days.</strong>
            </span>
          </div> */}
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
                <span>Enquiry received</span>
                <p>
                  Thank you. A member of our team will be in touch within two
                  working days.
                </p>
              </div>
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
                aria-busy={submitting}
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="partner-botcheck"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
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
                    aria-invalid={Boolean(contactErrors.email)}
                    aria-describedby={contactErrors.email ? "partner-email-error" : undefined}
                    onBlur={(event) => validateContactField(event.currentTarget)}
                    onInvalid={(event) => validateContactField(event.currentTarget)}
                    onInput={clearContactError}
                  />
                  {contactErrors.email && (
                    <small className="partner-field-error" id="partner-email-error" role="alert">
                      {contactErrors.email}
                    </small>
                  )}
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
                    aria-invalid={Boolean(contactErrors.phone)}
                    aria-describedby={contactErrors.phone
                      ? "partner-phone-hint partner-phone-error"
                      : "partner-phone-hint"}
                    onBlur={(event) => validateContactField(event.currentTarget)}
                    onInvalid={(event) => validateContactField(event.currentTarget)}
                    onInput={clearContactError}
                  />
                  <small className="partner-contact-hint" id="partner-phone-hint">
                    Include + and country code, for example +91 98765 43210.
                  </small>
                  {contactErrors.phone && (
                    <small className="partner-field-error" id="partner-phone-error" role="alert">
                      {contactErrors.phone}
                    </small>
                  )}
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
                    onInput={(event) => event.currentTarget.setCustomValidity("")}
                  />
                  <small id="partner-message-hint">
                    Please don't include patient information or medical records.
                  </small>
                </div>
                <div className="partner-form-bottom partner-full">
                  {/* <p>Demo only — no information leaves this page.</p> */}
                  {submissionError && (
                    <p
                      className="partner-submit-error"
                      role="alert"
                      tabIndex="-1"
                      ref={errorNotice}
                    >
                      {submissionError}
                    </p>
                  )}
                  <button className="button blue" type="submit" disabled={submitting}>
                    {submitting ? "Sending enquiry…" : "Submit enquiry"}
                    <span aria-hidden="true">{submitting ? "…" : "↗"}</span>
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
