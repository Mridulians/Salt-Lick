import { useState } from "react";
import logo from "../../assets/saltlick-logo.png";
import "./Header.css";
const links = [
  ["/what-is-salt-lick", "What Is Salt Lick"],
  ["/how-it-works", "How It Works"],
  ["/our-centres", "Our Centres"],
  ["/impact", "Impact"],
  ["/about-us", "About Us"],
  ["/our-team", "Our Team"],
];
export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a href="/" className="logo" aria-label="Salt Lick home">
        <img
          src={logo}
          width="1149"
          height="1369"
          alt="Salt Lick Healthcare — Intelligence to Intercept"
        />
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        Menu {open ? "−" : "+"}
      </button>
      <nav
        id="main-nav"
        aria-label="Main navigation"
        className={open ? "open" : ""}
      >
        {links.map(([url, label]) => (
          <a
            key={url}
            href={url}
            aria-current={path === url ? "page" : undefined}
          >
            {label}
          </a>
        ))}
        <a
          className="button"
          href="/partner-with-us"
          aria-current={path === "/partner-with-us" ? "page" : undefined}
        >
          Partner With Us <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
