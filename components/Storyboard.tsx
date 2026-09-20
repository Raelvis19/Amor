 "use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type Scene = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

/*
  ============================================================
  SOLO EDITA ESTA PARTE
  ============================================================
  Cambia title, description e image de cada escena.
  Puedes agregar o quitar escenas sin tocar la animación.
*/
const scenes: Scene[] = [
  {
    number: "01",
    eyebrow: "EL COMIENZO",
    title: "Todo comienza con una historia.",
    description:
      "Una imagen. Un instante. Y la sensación de que algo está a punto de suceder.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=90",
  },
  {
    number: "02",
    eyebrow: "EL CAMINO",
    title: "Cada paso cambia la perspectiva.",
    description:
      "El paisaje se transforma mientras avanzamos. La historia no se detiene.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",
  },
  {
    number: "03",
    eyebrow: "EL DESCUBRIMIENTO",
    title: "Entonces aparece algo inesperado.",
    description:
      "Un lugar que parece sacado de otra historia y que merece ser contado.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=90",
  },
  {
    number: "04",
    eyebrow: "EL MOMENTO",
    title: "Hay momentos que se quedan contigo.",
    description:
      "La luz cambia, el ruido desaparece y por unos segundos todo encaja.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",
  },
  {
    number: "05",
    eyebrow: "EL FINAL",
    title: "Y toda historia deja ganas de volver.",
    description:
      "Esto es solo el comienzo. La siguiente escena todavía está por escribirse.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90",
  },
];

function CinematicStory({ onActive }: { onActive: (index: number) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<{ height: number; stage: number } | null>(
    null
  );
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = containerRef.current;
        if (!el) return;
        const stage = window.innerHeight;
        setDims((prev) => {
          const next = { height: scenes.length * stage, stage };
          return prev &&
            prev.height === next.height &&
            prev.stage === next.stage
            ? prev
            : next;
        });

        const total = el.offsetHeight - stage;
        const rect = el.getBoundingClientRect();
        progress.set(
          total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    const index = Math.min(
      scenes.length - 1,
      Math.max(0, Math.floor(latest * scenes.length))
    );
    onActive(index);
  });

  return (
    <section
      ref={containerRef}
      className="story"
      style={
        {
          height: dims ? dims.height : undefined,
          "--scene-count": `${scenes.length}`,
          "--stage-height": dims ? `${dims.stage}px` : undefined,
        } as React.CSSProperties
      }
    >
      <div className="story-stage">
        {scenes.map((scene, index) => {
          const start = index / scenes.length;
          const end = (index + 1) / scenes.length;
          const fadeInStart = index === 0 ? 0 : start;
          const fadeInEnd = start + 0.08;
          const fadeOutStart = end - 0.08;
          const fadeOutEnd = end;

          const opacity = useTransform(
            progress,
            [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
            [index === 0 ? 1 : 0, 1, 1, index === scenes.length - 1 ? 1 : 0]
          );

          const scale = useTransform(
            progress,
            [start, end],
            [1.08, 1]
          );

          const x = useTransform(
            progress,
            [start, end],
            index % 2 === 0 ? ["0%", "-1.5%"] : ["1.5%", "0%"]
          );

          const textY = useTransform(
            progress,
            [start, start + 0.08, end - 0.08, end],
            ["35px", "0px", "0px", "-35px"]
          );

          const textOpacity = useTransform(
            progress,
            [start, start + 0.07, end - 0.07, end],
            [0, 1, 1, index === scenes.length - 1 ? 1 : 0]
          );

          return (
            <motion.div
              key={`${scene.number}-${scene.image}`}
              className="story-scene"
              style={{ opacity }}
            >
              <motion.div
                className="story-image"
                style={{ scale, x }}
              >
                <Image
                  src={scene.image}
                  alt=""
                  fill
                  priority={index < 2}
                  sizes="100vw"
                  className="image"
                />
              </motion.div>

              <div className="scene-shade" />

              <motion.div
                className="story-text"
                style={{ y: textY, opacity: textOpacity }}
              >
                <p className="eyebrow">
                  {scene.number} / {scene.eyebrow}
                </p>
                <h2>{scene.title}</h2>
                <p className="description">{scene.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="story-progress">
        {scenes.map((scene, index) => (
          <span key={scene.number} className={index === 0 ? "current-dot" : ""} />
        ))}
      </div>

      <DebugHud progress={progress} />
    </section>
  );
}

function DebugHud({ progress }: { progress: MotionValue<number> }) {
  const [info, setInfo] = useState("JS: loading…");

  useEffect(() => {
    (window as unknown as { __appReady?: boolean }).__appReady = true;
    let raf = 0;
    let errs: string[] = [];
    const onErr = (e: ErrorEvent) => errs.push(e.message.slice(0, 40));
    window.addEventListener("error", onErr);

    const tick = () => {
      setInfo(
        `BUILD v5 | JS ok | H=${window.innerHeight}x${window.innerWidth} P=${progress
          .get()
          .toFixed(3)} y=${Math.round(window.scrollY)} err=${
          errs.length ? errs.join(";") : "none"
        }`
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("error", onErr);
    };
  }, [progress]);

  return <div className="debug-hud">{info}</div>;
}

export default function Storyboard() {
  const [active, setActive] = useState(0);

  const goToScene = (index: number) => {
    const target = document.getElementById(`scene-anchor-${index}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#top">
          STORY<span>.</span>
        </a>
        <span className="build-tag">v5</span>
        <div className="counter">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <span>/ {String(scenes.length).padStart(2, "0")}</span>
        </div>
      </header>

      <nav className="scene-nav" aria-label="Escenas">
        {scenes.map((scene, index) => (
          <button
            key={scene.number}
            className={active === index ? "active" : ""}
            onClick={() => goToScene(index)}
            aria-label={`Ir a escena ${index + 1}`}
          >
            <span>{scene.number}</span>
          </button>
        ))}
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-content">
          <p className="eyebrow">A CINEMATIC STORYBOARD</p>
          <h1>
            Una página.
            <br />
            <em>Una historia.</em>
          </h1>
          <p className="hero-copy">
            Desplázate para descubrir una secuencia de escenas conectadas por
            imágenes, movimiento y texto.
          </p>
          <button className="start" onClick={() => goToScene(0)}>
            Comenzar <span>↓</span>
          </button>
        </div>
      </section>

      {/* Anchors invisibles para que la navegación lleve a cada escena */}
      <div className="story-wrapper">
        {scenes.map((scene, index) => (
          <div className="scene-anchor" id={`scene-anchor-${index}`} key={scene.number} />
        ))}
        <CinematicStory onActive={setActive} />
      </div>

      <footer className="ending">
        <p className="eyebrow">THE END</p>
        <h2>La siguiente historia es tuya.</h2>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Volver al inicio ↑
        </button>
      </footer>
    </main>
  );
}
