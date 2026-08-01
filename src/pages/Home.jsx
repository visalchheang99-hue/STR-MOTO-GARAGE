import React, { useEffect, useRef } from 'react';
import myImage from "../assets/image/Str.jpg";
import "../Style/Home.css";
import Services from "../assets/Icon/Services.jpg";
import performanceImg from "../assets/Icon/performance.jpg";
import repairs from "../assets/Icon/repair.jpg";
import Exhaust from "../assets/Icon/Exhaust.png";
import dyno from "../assets/Icon/dyno.jpg";
import Elect from "../assets/Icon/Elect.jpg";
import Wash from "../assets/Icon/Wash2.png";
import { Link } from "react-router-dom";

export function WhatWeDo() {
  const sectionRef = useRef(null);

  const services = [
    {
      id: "full-service",
      title: "Full Service",
      desc: "Oil changes, brake checks, and scheduled maintenance.",
      icon: Services
    },
    {
      id: "performance",
      title: "Performance Tuning",
      desc: "Upgrade Engine Pistons 56mm 57mm 59/3 60mm 66/5",
      icon: performanceImg
    },
    {
      id: "custom-builds",
      title: "Custom Builds",
      desc: "Custom Your Exhaust Setups, rebuild exhaust",
      icon: Exhaust
    },
    {
      id: "repairs",
      title: "Repairs",
      desc: "Engine rebuilds, and more.",
      icon: repairs
    },
    {
      id: "moto-wash",
      title: "Moto",
      desc: "FOAM MOTO WASH",
      icon: Wash
    },
    {
      id: "electrical",
      title: "Electrical Work",
      desc: "Wiring, lighting, and electrical diagnostics.",
      icon: Elect
    },
    {
      id: "dyno",
      title: "Dyno Tuning",
      desc: "Optimize your bike's performance with precision tuning.",
      icon: dyno
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('str-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.str-service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="str-whatwedo-section">
      <div className="str-whatwedo-container" ref={sectionRef}>

        {/* Header Section */}
        <div className="str-whatwedo-header">
          <h2 className="str-whatwedo-title">
            <span className="str-accent">Our</span> Services
          </h2>
          <div className="str-title-underline"></div>
        </div>

        {/* Service Cards Grid */}
        <div className="str-cards-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="str-service-card"
              style={{ '--card-delay': `${index * 120}ms` }}
            >
              {/* Animated border gradient */}
              <div className="str-card-border-glow"></div>

              {/* Card inner content */}
              <div className="str-card-inner">

                {/* Top glow line */}
                <div className="str-card-topline"></div>

                {/* Corner glow */}
                <div className="str-card-corner-glow"></div>

                {/* Icon */}
                <div className="str-card-icon-wrapper">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="str-card-icon-img"
                  />
                  <div className="str-card-icon-ring"></div>
                </div>

                {/* Title with reveal animation */}
                <h3 className="str-card-title">
                  <span className="str-card-title-text">{service.title}</span>
                </h3>

                {/* Divider */}
                <div className="str-card-divider"></div>

                {/* Description with reveal animation */}
                <p className="str-card-desc">{service.desc}</p>

                {/* Bottom arrow indicator */}
                <div className="str-card-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export function Cover() {
  return (
    <>
      <section
        className="relative min-h-[90vh] flex flex-col justify-center items-center -mt-[100px] pt-[120px] pb-12 bg-center bg-cover bg-no-repeat transition-all duration-[1200ms] ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${myImage})`
        }}
      >
        <div className="flex flex-col justify-center items-center text-white text-center p-4 max-w-4xl z-10">


          <h1 className="font-mono font-black mb-4 tracking-[2px] text-[clamp(2.5rem,8vw,5rem)] animate-[fadeSlideDown_2s_ease_both]">
            <span className="text-[#c90000] drop-shadow-[0_0_20px_rgba(201,0,0,0.8)]">STR</span> MOTO GARAGE
          </h1>

          <div className="overflow-hidden mb-4">
            <h2 className="inline-block whitespace-nowrap overflow-hidden font-mono text-[#d0d3d7] text-[clamp(1rem,3vw,1.5rem)] border-r-3 border-[#c90000] animate-[typing_3s_steps(25)_infinite_alternate,blink_0.8s_infinite] motion-reduce:animation-none motion-reduce:border-none motion-reduce:w-auto">
              Custom Your Own Engine
            </h2>
          </div>


          <div
            className="p-5 relative overflow-hidden animate-[fadeIn_0.8s_ease_both]"
            style={{ animationDelay: "600ms" }}
          >
            <p className="flex font-mono text-xl max-w-2x8 mx-auto leading-relaxed text-[#d0d3d7] animate-[fadeIn_0.8s_ease_both]">
              custom builds Garage Moto keeps your machine running strong and looking mean Precision work, honest pricing
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export function Buttom() {
  return (
    <nav className="flex items-center justify-center py-4text-white">
      <Link
        to="/services"
        className="!no-underline  py-2 text-center bg-black-599 cursor-pointer transition-all bg-gray-600 text-white px-3 py-4 rounded-lg border-red-400 border-b-[5px] hover:brightness-110 hover:translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:translate-y-[2px] hover:shadow-xl hover:shadow-red-300 active:none"
      >
        More Info
      </Link>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <Cover />
      <WhatWeDo />
      <Buttom />
    </div>
  );
}

export default Home;
