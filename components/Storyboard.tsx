"use client";

import Image from "next/image";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
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
    title: "Todo comienza con un mensaje en tiktok.",
    description:
      "Un 23 de septiembre de 2025 el destino cruzaría nuestros caminos y comenzaría nuestra historia con un hola, que parecía un simple saludo pero que luego significaría mucho más. 💌",
    image: "/images/1-primer-mensaje1.jpg",
  },
  {
    number: "02",
    eyebrow: "EL CAMINO",
    title: "Comenzamos a conocernos.",
    description:
      "Comenzaron las cenas y las salidas y ambos empezamos a conocernos. Y yo, desde ese primer momento, sabía que no eras una chica del montón: tu aura, tu risa, tu manera de ser comenzó a moverme de una manera que nunca había sentido antes, y ahí comenzó a crecer el amor. 🌹",
    image:
      "/images/IMG_4786.JPG",
  },
  {
    number: "03",
    eyebrow: "EL DESCUBRIMIENTO",
    title: "Entonces aparece algo inesperado.",
    description:
      "Pasaban los meses y nuestro amor crecía. Nos tratábamos lindo, teníamos gestos lindos el uno por el otro, hablábamos mucho, nos juntábamos, hacíamos cosas juntos y lo nuestro creció a un ritmo increíble, pero por falta de comunicación, en diciembre de 2025 tuvimos que alejarnos. 💔",
    image:
      "/images/inesperado.JPG",
  },
  {
    number: "04",
    eyebrow: "EL MOMENTO",
    title: "Hay momentos que se quedan contigo.",
    description:
      "Empieza el 2026 y las cosas no van muy bien. Hablamos esporádicamente, muere tu abuela y tu situación anímica no está como para pensar en otras cosas, pero aun así seguimos en comunicación y no nos alejamos el uno del otro durante ese periodo; nos dimos apoyo mutuamente siempre que uno necesitaba del otro en algún momento difícil. 🤍",
    image:
      "/images/goida.JPG",
  },
  {
    number: "05",
    eyebrow: "LA RECONCILIACIÓN",
    title: "Una Historia que no podía Terminar.",
    description:
      "Llega julio, el mes de mi cumpleaños, y empezamos a hablar como nunca. El amor que había estado cultivándose todo ese tiempo empezó a salir: una Sonnifer cambiada, dispuesta a amar, empieza a confiar en mí y me ama de una manera que yo nunca había sentido antes, y me hace sentir el hombre más amado e importante del mundo. De una vez por todas, luego de tanto luchar, al fin estábamos juntos. 💖",
    image:
      "/images/IMG_7533.JPG",
  },
  {
    number: "06",
    eyebrow: "EL AMOR VERDADERO",
    title: "Una Historia, Un Amor.",
    description:
      "Después de tanto, por fin estábamos viviendo un amor bonito, bello, limpio y sano, como el que siempre quisimos tener. Te convertiste en mi oración contestada: todas esas lágrimas que había derramado pidiéndole a Dios habían sido escuchadas, porque tú tienes todas las cosas que yo necesito y que pedí con tanta fe. ✨",
    image:
      "/images/IMG_8629.JPG",
  },
  {
    number: "07",
    eyebrow: "LA EQUIVOCACIÓN",
    title: "Lo que no debía pasar.",
    description:
      "Sin justificación alguna cometí una estupidez y la cagué: rompí tu corazón y jodí toda la confianza que tenías en mí. Sin necesidad, te fallé a ti, a tu familia y hasta a Dios, cometiendo ese error, porque tú fuiste la mujer que tanto le pedí que me enviara. 😔",
    image:
      "/images/snoopy.jpg",
  },
  {
    number: "08",
    eyebrow: "EL PERDÓN",
    title: "La Redención.",
    description:
      "Sé que la confianza que me tenías no se va a recuperar de la noche a la mañana, pero estoy dispuesto a hacer todo lo que sea necesario para demostrarte que estoy arrepentido de corazón. Estoy dispuesto a ser un mejor hombre del que era, estoy dispuesto a darte todo lo que necesitas, a hacer que te sientas segura, a responder por ti si en algún momento sientes angustia, y a que te sientas igual o más segura que al principio de la relación. 🕊️",
    image:
      "/images/IMG_8688.jpg",
  },
  {
    number: "09",
    eyebrow: "EL AMOR",
    title: "Te Amo con mi vida, Sonnifer.",
    description:
      "Sonnifer, aunque ahora mismo tú no me lo creas, tú me salvaste. Eres la persona más importante en mi vida, la persona con la que veo proyectos a futuro, la mujer con la que me quiero casar, la madre de mis hijos. Tú eres mi todo, tú eres la mujer que amo, y no sé qué haría sin ti. Nunca me voy a cansar de pedirte perdón ni de demostrarte día a día que sé el valor y el tamaño de lo que hice, y que estoy dispuesto a asumir las consecuencias y a ser un buen hombre para ti. 💍",
    image:
      "/images/IMG_8874.jpg",
  },
  {
    number: "10",
    eyebrow: "LA OPORTUNIDAD",
    title: "El último baile.",
    description:
      "Sonnifer, aunque ahora mismo no estoy en posición de pedirte nada, vamos a darle una última oportunidad a lo nuestro: después de haber llegado hasta aquí, de haber luchado tanto para que se diera de ambas partes y de que tú pudieras abrirte conmigo, con lo difícil que es eso, yo no quería que te sintieras usada ni que sintieras que te vi la cara. Dame la oportunidad de cumplir todas las cosas que te he prometido y de ser el esposo que te acompañe a lo largo de tu vida. 💞",
    image:
      "/images/IMG_8788.JPG",
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
    </section>
  );
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
          R&S<span>.</span>
        </a>
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
          <p className="eyebrow">Sonnifer y Raelvis 💞</p>
          <h1>
            Lo que una vez fue un Mensaje en Tiktok.
            <br />
            <em>Hoy es una Historia.</em>
          </h1>
          <p className="hero-copy">
            Desplázate para descubrir un poquito de nuestra Historia Juntos.
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
        <p className="eyebrow">THE END 🕊️</p>
        <h2>Eres mi niña y siempre lo serás, te amo con todas las fuerzas de mi corazón. 💗</h2>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Volver al inicio ↑
        </button>
      </footer>
    </main>
  );
}