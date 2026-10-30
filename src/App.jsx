import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import WhatIsSaltLick from "./pages/WhatIsSaltLick/WhatIsSaltLick";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurCentres from "./pages/OurCentres/OurCentres";
import Impact from "./pages/Impact/Impact";
import OurTeam from "./pages/OurTeam/OurTeam";
import PartnerWithUs from "./pages/PartnerWithUs/PartnerWithUs";
import "./App.css";
const routes = {
  "/": Home,
  "/what-is-salt-lick": WhatIsSaltLick,
  "/how-it-works": HowItWorks,
  "/about-us": AboutUs,
  "/our-centres": OurCentres,
  "/impact": Impact,
  "/our-team": OurTeam,
  "/partner-with-us": PartnerWithUs,
};
const currentPath = () => window.location.pathname;

export default function App() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const handleNavigation = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a");
      if (!link || link.target || link.hasAttribute("download")) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.hash) return;

      event.preventDefault();
      window.history.pushState({}, "", url.pathname + url.search);
      setPath(url.pathname);
    };

    const handlePopState = () => setPath(currentPath());

    document.addEventListener("click", handleNavigation);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleNavigation);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      (path === "/"
        ? "Salt Lick Healthcare"
        : path
            .slice(1)
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ")) + " — Intelligence to Intercept";
  }, [path]);
  const Page = routes[path];
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <Header key={path} path={path} />
      <main id="main" tabIndex="-1">
        {Page ? (
          <Page />
        ) : (
          <section className="section">
            <h1>Page not found.</h1>
            <a className="button" href="/">
              Return home
            </a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}








