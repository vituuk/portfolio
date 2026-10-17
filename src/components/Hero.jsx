import React, { useState, useRef, useEffect } from "react";
import { Github, Gitlab, Linkedin, Mail, ChevronRight, Triangle, FileText } from "lucide-react";
import useTypewriter from "../hooks/useTypewriter";
import { TYPEWRITER_WORDS } from "../constants/portfolioData";

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(TYPEWRITER_WORDS);
  const cardRef = useRef(null);

  // 3D tilt & glare state
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  // Lanyard / Binding Cord spring physics state
  const [cordState, setCordState] = useState({
    x: 0,
    y: 0,
    angle: 0,
    isDragging: false,
    scrollY: 0,
  });

  const physicsRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    baseX: 0,
    baseY: 0,
    lastScrollY: typeof window !== "undefined" ? window.scrollY : 0,
    scrollTargetY: 0,
    scrollTargetX: 0,
    time: 0,
  });

  useEffect(() => {
    let rafId;

    const updateScrollTargets = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - physicsRef.current.lastScrollY;
      physicsRef.current.lastScrollY = currentScroll;

      const maxDocScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight - 140
      );
      const clampedScroll = Math.min(currentScroll, maxDocScroll);

      // The card follows scrollY down the entire page so the binding cord stretches super long!
      physicsRef.current.scrollTargetY = clampedScroll;
      // Gently tuck slightly toward the right margin when scrolled past Hero
      physicsRef.current.scrollTargetX =
        clampedScroll > 260 ? Math.min(95, (clampedScroll - 260) * 0.22) : 0;

      if (!physicsRef.current.isDragging && Math.abs(delta) > 0) {
        const clampedDelta = Math.max(-45, Math.min(45, delta));
        // Add extra elastic bounce and pendulum swing impulse on scroll
        physicsRef.current.vy += clampedDelta * 0.25;
        physicsRef.current.vx += Math.cos(currentScroll * 0.02) * clampedDelta * 0.32;
      }
    };

    const stepPhysics = () => {
      const p = physicsRef.current;
      p.time += 0.03;

      if (!p.isDragging) {
        // Continuous ambient breeze sway + spring toward current scroll position
        const ambientX = p.scrollTargetX + Math.sin(p.time) * 7;
        const ambientY = p.scrollTargetY + Math.cos(p.time * 1.3) * 5;

        const stiffness = 0.075;
        const damping = 0.84;

        const forceX = (ambientX - p.x) * stiffness;
        const forceY = (ambientY - p.y) * stiffness;

        p.vx = (p.vx + forceX) * damping;
        p.vy = (p.vy + forceY) * damping;

        p.x += p.vx;
        p.y += p.vy;
      }

      const relX = p.x - p.scrollTargetX;
      const swingAngle = Math.max(-22, Math.min(22, -relX * 0.12 - p.vx * 0.38));

      setCordState({
        x: p.x,
        y: p.y,
        angle: swingAngle,
        isDragging: p.isDragging,
        scrollY: p.scrollTargetY,
      });

      rafId = requestAnimationFrame(stepPhysics);
    };

    updateScrollTargets();
    window.addEventListener("scroll", updateScrollTargets, { passive: true });
    window.addEventListener("resize", updateScrollTargets, { passive: true });
    rafId = requestAnimationFrame(stepPhysics);

    return () => {
      window.removeEventListener("scroll", updateScrollTargets);
      window.removeEventListener("resize", updateScrollTargets);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handlePointerDown = (e) => {
    const p = physicsRef.current;
    p.isDragging = true;
    p.dragStartX = e.clientX;
    p.dragStartY = e.clientY;
    p.baseX = p.x;
    p.baseY = p.y;
    p.vx = 0;
    p.vy = 0;
    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    const p = physicsRef.current;

    if (p.isDragging) {
      const dx = e.clientX - p.dragStartX;
      const dy = e.clientY - p.dragStartY;
      // Allow pulling far in any direction around the current scroll position
      const maxPullX = 420;
      const maxPullY = 380;
      p.x = p.scrollTargetX + Math.max(-maxPullX, Math.min(maxPullX, (p.baseX - p.scrollTargetX + dx) * 0.85));
      p.y = Math.max(-80, p.scrollTargetY + Math.max(-maxPullY, Math.min(maxPullY, (p.baseY - p.scrollTargetY + dy) * 0.85)));
    }

    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = Math.max(0, Math.min(1, x / rect.width));
    const pctY = Math.max(0, Math.min(1, y / rect.height));

    const rotateY = (pctX - 0.5) * 20;
    const rotateX = (0.5 - pctY) * 20;

    setTilt({
      rotateX,
      rotateY,
      glareX: pctX * 100,
      glareY: pctY * 100,
      isHovered: true,
    });
  };

  const handlePointerUpOrLeave = (e) => {
    const p = physicsRef.current;
    if (p.isDragging) {
      p.isDragging = false;
      if (e.currentTarget.releasePointerCapture && e.pointerId !== undefined) {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
          // ignore if not captured
        }
      }
    }
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  // Binding Cord SVG coordinates inside the 320px wrapper
  // Anchor starts high up (-28px) so even in Hero the cord is long, and stretches thousands of px as you scroll!
  const anchorX = 160;
  const anchorY = -28;
  const baseAttachY = 112;
  const attachX = 160 + cordState.x;
  const attachY = baseAttachY + cordState.y;

  const stretchDist = Math.hypot(attachX - anchorX, attachY - anchorY);
  const slack = Math.max(0, 160 - stretchDist) * 0.25;
  const ctrlX = (anchorX + attachX) / 2 + (cordState.x - physicsRef.current.scrollTargetX) * 0.28;
  const ctrlY = (anchorY + attachY) / 2 + slack;

  const isScrolledPastHero = cordState.scrollY > 280;
  const baseScale = isScrolledPastHero ? 0.68 : 1;
  const scaleVal = cordState.isDragging
    ? Math.max(0.88, baseScale * 1.08)
    : tilt.isHovered
    ? Math.max(0.85, baseScale * 1.04)
    : baseScale;

  return (
    <section
      id="home"
      className="container hero-section"
      style={{
        minHeight: "86vh",
        display: "flex",
        alignItems: "center",
        gap: 48,
        paddingTop: 36,
        paddingBottom: 48,
      }}
    >
      <div style={{ flex: "1 1 520px" }}>
        <div className="fade-up section-label" style={{ marginBottom: 18 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          Available for Software Engineering Opportunities
        </div>

        <h1
          className="fade-up"
          style={{
            fontSize: "clamp(32px, 5.5vw, 54px)",
            lineHeight: 1.12,
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I'm <span style={{ color: "var(--accent)" }}>VITU UK</span>.
          <br />
          I build for the <span style={{ color: "var(--accent-2)" }}>web</span>.
        </h1>

        <div
          className="fade-up soft-inset"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "var(--text)",
            marginTop: 22,
            padding: "12px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            minWidth: 280,
          }}
        >
          <span style={{ color: "var(--accent-3)", fontWeight: 700 }}>&gt;</span>
          <span>{typed}</span>
          <span className="blink" style={{ color: "var(--accent)", fontWeight: 700 }}>
            |
          </span>
        </div>

        <p
          className="fade-up"
          style={{
            maxWidth: 560,
            color: "var(--text-dim)",
            lineHeight: 1.75,
            marginTop: 22,
            fontSize: 15.5,
          }}
        >
          Computer Science student at Royal University of Phnom Penh, passionate about
          full-stack development, clean architecture, and shipping reliable software
          with modern CI/CD workflows. I also build cross-platform apps with Flutter
          and pair them with Laravel APIs.
        </p>

        <div
          className="fade-up hero-actions"
          style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}
        >
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects <ChevronRight size={16} />
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("contact")}>
            Get in Touch <Mail size={16} />
          </button>
          <a
            href="/resume/VITU_UK_CV%20and%20Cover%20Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ textDecoration: "none" }}
          >
            View Resume <FileText size={16} />
          </a>
        </div>

        <div
          className="fade-up hero-socials"
          style={{ display: "flex", gap: 12, marginTop: 32 }}
        >
          {[
            { Icon: Github, href: "https://github.com/vituuk", label: "GitHub" },
            { Icon: Gitlab, href: "https://gitlab.com/users/vitu_ltng/projects", label: "GitLab" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/vitu-uk-b21877342/", label: "LinkedIn" },
            { Icon: Triangle, href: "https://vercel.com/ukvitu9999-7456s-projects", label: "Vercel" },
            { Icon: Mail, href: "#contact", label: "Contact" },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              title={label}
              className="soft-icon-btn"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Hanging Lanyard / Long Stretching Binding Cord + Soft UI Photo Badge */}
      <div
        className="fade-up hero-photo-wrap"
        style={{
          flex: "0 0 320px",
          width: 320,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingTop: baseAttachY,
          zIndex: 35,
        }}
      >
        {/* Dynamic SVG Long Binding Cord & Anchor Pin */}
        <svg
          width="320"
          height="300"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            overflow: "visible",
            zIndex: 4,
          }}
        >
          <defs>
            <linearGradient
              id="cordGrad"
              gradientUnits="userSpaceOnUse"
              x1={anchorX}
              y1={anchorY}
              x2={attachX}
              y2={attachY}
            >
              <stop offset="0%" stopColor="var(--accent-2)" />
              <stop offset="50%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>
            <filter
              id="cordShadow"
              filterUnits="userSpaceOnUse"
              x="-800"
              y="-200"
              width="2000"
              height="6000"
            >
              <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Left & Right Lanyard Ribbon Straps converging at the badge ring */}
          <path
            d={`M ${anchorX - 20} ${anchorY} Q ${ctrlX - 9} ${ctrlY} ${attachX} ${attachY - 6}`}
            fill="none"
            stroke="url(#cordGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            filter="url(#cordShadow)"
          />
          <path
            d={`M ${anchorX + 20} ${anchorY} Q ${ctrlX + 9} ${ctrlY} ${attachX} ${attachY - 6}`}
            fill="none"
            stroke="url(#cordGrad)"
            strokeWidth="7.5"
            strokeLinecap="round"
            filter="url(#cordShadow)"
          />
          {/* Subtle Center Stitch Highlight */}
          <path
            d={`M ${anchorX - 20} ${anchorY} Q ${ctrlX - 9} ${ctrlY} ${attachX} ${attachY - 6}`}
            fill="none"
            stroke="rgba(255,255,255,0.42)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          <path
            d={`M ${anchorX + 20} ${anchorY} Q ${ctrlX + 9} ${ctrlY} ${attachX} ${attachY - 6}`}
            fill="none"
            stroke="rgba(255,255,255,0.42)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />

          {/* Top Soft UI Wall Anchor Bar */}
          <rect
            x={anchorX - 32}
            y={anchorY - 8}
            width="64"
            height="15"
            rx="7.5"
            fill="var(--bg-elev)"
            stroke="var(--border)"
            strokeWidth="1.5"
            filter="url(#cordShadow)"
          />
          <circle cx={anchorX - 20} cy={anchorY - 0.5} r="3.5" fill="var(--accent-2)" />
          <circle cx={anchorX + 20} cy={anchorY - 0.5} r="3.5" fill="var(--accent)" />

          {/* Metal Clasp Ring & Badge Clip at Card Attachment Point */}
          <circle
            cx={attachX}
            cy={attachY - 6}
            r="7"
            fill="none"
            stroke="var(--text-dim)"
            strokeWidth="3"
            filter="url(#cordShadow)"
          />
          <rect
            x={attachX - 11}
            y={attachY - 2}
            width="22"
            height="18"
            rx="5"
            fill="var(--bg-elev)"
            stroke="var(--border)"
            strokeWidth="1.5"
            filter="url(#cordShadow)"
          />
          <circle cx={attachX} cy={attachY + 7} r="3" fill="var(--accent)" />
        </svg>

        {/* Draggable & Scroll-Following Soft UI ID Card */}
        <div
          ref={cardRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrLeave}
          onPointerCancel={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave}
          title="Scroll down to stretch the binding cord, or grab & pull!"
          style={{
            padding: "24px 16px 16px 16px",
            borderRadius: "34px",
            background: "var(--bg-elev)",
            border: "1px solid var(--border)",
            boxShadow: cordState.isDragging
              ? "var(--shadow-soft-hover)"
              : tilt.isHovered
              ? "var(--shadow-soft-hover)"
              : "var(--shadow-soft)",
            transform: `translate3d(${cordState.x.toFixed(1)}px, ${cordState.y.toFixed(1)}px, 0) rotateZ(${cordState.angle.toFixed(2)}deg) perspective(900px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(${scaleVal.toFixed(3)}, ${scaleVal.toFixed(3)}, ${scaleVal.toFixed(3)})`,
            transformOrigin: "top center",
            transition: cordState.isDragging
              ? "box-shadow 0.2s ease"
              : "box-shadow 0.35s ease",
            transformStyle: "preserve-3d",
            cursor: cordState.isDragging ? "grabbing" : "grab",
            position: "relative",
            userSelect: "none",
            touchAction: "none",
          }}
        >
          {/* Punched ID Badge Slot Hole at Top of Card */}
          <div
            style={{
              width: 48,
              height: 8,
              borderRadius: 999,
              background: "var(--bg)",
              boxShadow: "var(--shadow-inset-sm)",
              margin: "-8px auto 12px auto",
            }}
          />

          <div
            style={{
              width: 278,
              height: 348,
              borderRadius: "24px",
              boxShadow: "var(--shadow-inset)",
              padding: 6,
              background: "var(--bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              transform: "translateZ(18px)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="./imgs/profile.jpg"
                alt="VITU UK profile photo"
                draggable={false}
                className="photo-breathe"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                  display: "block",
                }}
              />
              {/* Always-on Continuous Light Sweep Shimmer */}
              <div className="photo-shimmer" />
            </div>

            {/* Interactive Cursor Glare Overlay on Hover */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                pointerEvents: "none",
                opacity: tilt.isHovered ? 1 : 0,
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0) 62%)`,
                transition: "opacity 0.3s ease",
                mixBlendMode: "overlay",
                zIndex: 3,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
