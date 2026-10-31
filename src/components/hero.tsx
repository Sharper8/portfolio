"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(COMMAND);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) window.clearInterval(id);
    }, 120);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="prompt">
        <b>oxy@devprocore</b>:~$ {typed}
        <span className="cursor" />
      </div>
      <h1>
        OxY<span className="dim"> — systems &amp; infrastructure engineer.</span>
      </h1>
      <p className="tagline">
        I design systems that stay up when things go wrong: disaster recovery,
        zero-trust backups, observability pipelines.{" "}
        <b>Apprentice SRE at a CAC40 software group</b>, building my own agent
        infrastructure on the side. Anonymous here on purpose — the work is the
        résumé.
      </p>
      <div className="cta-row">
        <a className="btn" href="#work">
          ./view_work
        </a>
        <a className="btn ghost" href="#contact">
          ./contact
        </a>
      </div>
    </section>
  );
}
