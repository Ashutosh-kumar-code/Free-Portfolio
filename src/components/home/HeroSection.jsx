import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import person from "../../assets/images/port-imag4.jpg";
import Button from "../ui/Button";
import ProfesstionalUser from "../ProfesstionalUser";

const roles = ["Full Stack Developer", "React Specialist", "WordPress Expert", "UI/UX Enthusiast"];

const HeroSection = ({ scrollToSection, refs }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="hero-wrapper relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <Container>
        <div
          ref={refs.home_section}
          id="home_section"
          className="relative z-10 lg:flex lg:flex-row-reverse gap-10 lg:justify-center lg:items-center pb-10 lg:pb-16 xl:pb-0 xl:justify-between lg:py-0 pt-8"
        >
          {/* ── IMAGE SIDE ── */}
          <div className="xl:w-[46%] flex justify-center reveal-right">
            <div className="hero-img-frame">
              {/* rotating ring */}
              <div className="hero-ring" />
              {/* availability badge */}
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for Work
              </div>
              <img src={person} alt="Ashutosh Kumar" className="hero-img float-animation" />
            </div>
          </div>

          {/* ── TEXT SIDE ── */}
          <div className="flex flex-col items-center lg:items-start">
            {/* greeting chip */}
            <div className="hero-chip hero-text-1">
              👋 &nbsp;Hello, I'm
            </div>

            <h1 className="hero-text-1 text-4xl leading-tight font-extrabold text-[#132238] sm:text-[48px] text-center lg:text-start mt-2">
              Ashutosh <span className="hero-name-gradient">Kumar</span>
            </h1>

            {/* typewriter role */}
            <div className="hero-text-2 flex items-center gap-2 mt-3 mb-2">
              <span className="hero-role-prefix">I'm a </span>
              <span className="hero-role-text">
                {displayed}
                <span className="hero-cursor">|</span>
              </span>
            </div>

            <p className="hero-text-2 py-4 sm:text-[17px] text-[#556070] text-center lg:text-start lg:w-[430px] xl:w-[520px] leading-relaxed">
              Turning ideas into captivating digital experiences — I craft
              stunning web applications that are as functional as they are
              beautiful.
            </p>

            {/* CTA buttons */}
            <div className="hero-text-3 flex gap-3 flex-wrap justify-center lg:justify-start mt-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutosh.wevdev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text={"Get in Touch"} />
              </a>
              <button
                onClick={() => scrollToSection(refs.ourProjects)}
                className="px-4 py-2 text-base font-semibold border-2 border-[#A53DFF] text-[#A53DFF] rounded hover:bg-[#A53DFF] hover:text-white transition-all duration-300"
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-3 gap-3 mt-10 w-full max-w-sm lg:max-w-none">
              {[
                { value: "5+", label: "Years Exp.", icon: "🏆" },
                { value: "10+", label: "Projects", icon: "🚀" },
                { value: "8+", label: "Happy Clients", icon: "😊" },
              ].map((stat, i) => (
                <div key={i} className="hero-stat-card group">
                  <span className="hero-stat-icon">{stat.icon}</span>
                  <h3 className="hero-stat-value">{stat.value}</h3>
                  <p className="hero-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <ProfesstionalUser scrollToSection={scrollToSection} refs={refs} />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
