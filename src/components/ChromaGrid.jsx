import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: "./assets/cloud.png",
      title: "Research Paper",
      subtitle: "Advancements in Cloud Computing",
      handle: "@CloudTech",
      borderColor: "#4F46E5",
      url: "https://ijsrem.com/download/future-and-advancements-in-cloud-computing/",
    },
    {
      image: "./assets/Agile.jpg",
      title: "Certification",
      subtitle: "Agile Methodologies",
      handle: "@DevTools",
      borderColor: "#10B981",
      url: "https://www.udemy.com/certificate/UC-1d91201d-f26f-47e2-bc7f-a448113cd184/",
    },
    {
      image: "./assets/cervical.png",
      title: "Research Paper",
      subtitle: "CelInsight:AI based Cervical Cancer Classification",
      handle: "@AI",
      borderColor: "#F59E0B",
      url: "https://ijsrem.com/download/celinsightai-powered-web-solution-for-cervical-cancer-classification/ ",
    },
    {
      image: "./assets/plant.png",
      title: "Research Paper",
      subtitle: "Medicinal Plant detection",
      handle: "@AI,CNN,RESNET50",
      borderColor: "#EF4444",
      url: "",
    },
    {
      image: "./assets/plant.pn",
      title: "Research Paper",
      subtitle: "upcoming",
      handle: "@AI",
      borderColor: "#EF4444",
      url: "",
    },
    {
      image: "./assets/sql.jpg",
      title: "Certification",
      subtitle: "SQL",
      handle: "@Database",
      borderColor: "#06B6D4",
      url: "ude.my/UC-beb23ee3-a267-4af7-a98a-eeed18b612d7",
    },
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Recent Publications & Certifications</h2>

      <div
        ref={rootRef}
        className={`chroma-grid ${className}`}
        style={{
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        }}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {data.map((c, i) => (
          <article
            key={i}
            className="chroma-card"
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            style={{
              "--card-border": c.borderColor || "transparent",
              cursor: c.url ? "pointer" : "default",
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
        <div className="chroma-overlay" />
        <div ref={fadeRef} className="chroma-fade" />
      </div>
    </section>
  );
};

export default ChromaGrid;
