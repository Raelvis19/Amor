(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Storyboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Storyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/*
  ============================================================
  SOLO EDITA ESTA PARTE
  ============================================================
  Cambia title, description e image de cada escena.
  Puedes agregar o quitar escenas sin tocar la animación.
*/ const scenes = [
    {
        number: "01",
        eyebrow: "EL COMIENZO",
        title: "Todo comienza con un mensaje en tiktok.",
        description: "Un 23 de septiembre de 2025 el destino cruzaría nuestros caminos y comenzaría nuestra historia con un hola, que parecía un simple saludo pero que luego significaría mucho más. 💌",
        image: "/images/1-primer-mensaje1.jpg"
    },
    {
        number: "02",
        eyebrow: "EL CAMINO",
        title: "Comenzamos a conocernos.",
        description: "Comenzaron las cenas y las salidas y ambos empezamos a conocernos. Y yo, desde ese primer momento, sabía que no eras una chica del montón: tu aura, tu risa, tu manera de ser comenzó a moverme de una manera que nunca había sentido antes, y ahí comenzó a crecer el amor. 🌹",
        image: "/images/IMG_4786.JPG"
    },
    {
        number: "03",
        eyebrow: "EL DESCUBRIMIENTO",
        title: "Entonces aparece algo inesperado.",
        description: "Pasaban los meses y nuestro amor crecía. Nos tratábamos lindo, teníamos gestos lindos el uno por el otro, hablábamos mucho, nos juntábamos, hacíamos cosas juntos y lo nuestro creció a un ritmo increíble, pero por falta de comunicación, en diciembre de 2025 tuvimos que alejarnos. 💔",
        image: "/images/inesperado.JPG"
    },
    {
        number: "04",
        eyebrow: "EL MOMENTO",
        title: "Hay momentos que se quedan contigo.",
        description: "Empieza el 2026 y las cosas no van muy bien. Hablamos esporádicamente, muere tu abuela y tu situación anímica no está como para pensar en otras cosas, pero aun así seguimos en comunicación y no nos alejamos el uno del otro durante ese periodo; nos dimos apoyo mutuamente siempre que uno necesitaba del otro en algún momento difícil. 🤍",
        image: "/images/goida.JPG"
    },
    {
        number: "05",
        eyebrow: "LA RECONCILIACIÓN",
        title: "Una Historia que no podía Terminar.",
        description: "Llega julio, el mes de mi cumpleaños, y empezamos a hablar como nunca. El amor que había estado cultivándose todo ese tiempo empezó a salir: una Sonnifer cambiada, dispuesta a amar, empieza a confiar en mí y me ama de una manera que yo nunca había sentido antes, y me hace sentir el hombre más amado e importante del mundo. De una vez por todas, luego de tanto luchar, al fin estábamos juntos. 💖",
        image: "/images/IMG_7533.JPG"
    },
    {
        number: "06",
        eyebrow: "EL AMOR VERDADERO",
        title: "Una Historia, Un Amor.",
        description: "Después de tanto, por fin estábamos viviendo un amor bonito, bello, limpio y sano, como el que siempre quisimos tener. Te convertiste en mi oración contestada: todas esas lágrimas que había derramado pidiéndole a Dios habían sido escuchadas, porque tú tienes todas las cosas que yo necesito y que pedí con tanta fe. ✨",
        image: "/images/IMG_8629.JPG"
    },
    {
        number: "07",
        eyebrow: "LA EQUIVOCACIÓN",
        title: "Lo que no debía pasar.",
        description: "Sin justificación alguna cometí una estupidez y la cagué: rompí tu corazón y jodí toda la confianza que tenías en mí. Sin necesidad, te fallé a ti, a tu familia y hasta a Dios, cometiendo ese error, porque tú fuiste la mujer que tanto le pedí que me enviara. 😔",
        image: "/images/snoopy.jpg"
    },
    {
        number: "08",
        eyebrow: "EL PERDÓN",
        title: "La Redención.",
        description: "Sé que la confianza que me tenías no se va a recuperar de la noche a la mañana, pero estoy dispuesto a hacer todo lo que sea necesario para demostrarte que estoy arrepentido de corazón. Estoy dispuesto a ser un mejor hombre del que era, estoy dispuesto a darte todo lo que necesitas, a hacer que te sientas segura, a responder por ti si en algún momento sientes angustia, y a que te sientas igual o más segura que al principio de la relación. 🕊️",
        image: "/images/IMG_8688.JPG"
    },
    {
        number: "09",
        eyebrow: "EL AMOR",
        title: "Te Amo con mi vida, Sonnifer.",
        description: "Sonnifer, aunque ahora mismo tú no me lo creas, tú me salvaste. Eres la persona más importante en mi vida, la persona con la que veo proyectos a futuro, la mujer con la que me quiero casar, la madre de mis hijos. Tú eres mi todo, tú eres la mujer que amo, y no sé qué haría sin ti. Nunca me voy a cansar de pedirte perdón ni de demostrarte día a día que sé el valor y el tamaño de lo que hice, y que estoy dispuesto a asumir las consecuencias y a ser un buen hombre para ti. 💍",
        image: "/images/IMG_8874.JPG"
    },
    {
        number: "10",
        eyebrow: "LA OPORTUNIDAD",
        title: "El último baile.",
        description: "Sonnifer, aunque ahora mismo no estoy en posición de pedirte nada, vamos a darle una última oportunidad a lo nuestro: después de haber llegado hasta aquí, de haber luchado tanto para que se diera de ambas partes y de que tú pudieras abrirte conmigo, con lo difícil que es eso, yo no quería que te sintieras usada ni que sintieras que te vi la cara. Dame la oportunidad de cumplir todas las cosas que te he prometido y de ser el esposo que te acompañe a lo largo de tu vida. 💞",
        image: "/images/IMG_8788.JPG"
    }
];
function CinematicStory({ onActive }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dims, setDims] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CinematicStory.useEffect": ()=>{
            let raf = 0;
            const update = {
                "CinematicStory.useEffect.update": ()=>{
                    cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "CinematicStory.useEffect.update": ()=>{
                            const el = containerRef.current;
                            if (!el) return;
                            const stage = window.innerHeight;
                            setDims({
                                "CinematicStory.useEffect.update": (prev)=>{
                                    const next = {
                                        height: scenes.length * stage,
                                        stage
                                    };
                                    return prev && prev.height === next.height && prev.stage === next.stage ? prev : next;
                                }
                            }["CinematicStory.useEffect.update"]);
                            const total = el.offsetHeight - stage;
                            const rect = el.getBoundingClientRect();
                            progress.set(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
                        }
                    }["CinematicStory.useEffect.update"]);
                }
            }["CinematicStory.useEffect.update"];
            update();
            window.addEventListener("scroll", update, {
                passive: true
            });
            window.addEventListener("resize", update);
            window.addEventListener("orientationchange", update);
            return ({
                "CinematicStory.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("scroll", update);
                    window.removeEventListener("resize", update);
                    window.removeEventListener("orientationchange", update);
                }
            })["CinematicStory.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CinematicStory.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(progress, "change", {
        "CinematicStory.useMotionValueEvent": (latest)=>{
            const index = Math.min(scenes.length - 1, Math.max(0, Math.floor(latest * scenes.length)));
            onActive(index);
        }
    }["CinematicStory.useMotionValueEvent"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "story",
        style: {
            height: dims ? dims.height : undefined,
            "--scene-count": `${scenes.length}`,
            "--stage-height": dims ? `${dims.stage}px` : undefined
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "story-stage",
                children: scenes.map(_s1((scene, index)=>{
                    _s1();
                    const start = index / scenes.length;
                    const end = (index + 1) / scenes.length;
                    const fadeInStart = index === 0 ? 0 : start;
                    const fadeInEnd = start + 0.08;
                    const fadeOutStart = end - 0.08;
                    const fadeOutEnd = end;
                    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
                        fadeInStart,
                        fadeInEnd,
                        fadeOutStart,
                        fadeOutEnd
                    ], [
                        index === 0 ? 1 : 0,
                        1,
                        1,
                        index === scenes.length - 1 ? 1 : 0
                    ]);
                    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
                        start,
                        end
                    ], [
                        1.08,
                        1
                    ]);
                    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
                        start,
                        end
                    ], index % 2 === 0 ? [
                        "0%",
                        "-1.5%"
                    ] : [
                        "1.5%",
                        "0%"
                    ]);
                    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
                        start,
                        start + 0.08,
                        end - 0.08,
                        end
                    ], [
                        "35px",
                        "0px",
                        "0px",
                        "-35px"
                    ]);
                    const textOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
                        start,
                        start + 0.07,
                        end - 0.07,
                        end
                    ], [
                        0,
                        1,
                        1,
                        index === scenes.length - 1 ? 1 : 0
                    ]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "story-scene",
                        style: {
                            opacity
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "story-image",
                                style: {
                                    scale,
                                    x
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: scene.image,
                                    alt: "",
                                    fill: true,
                                    priority: index < 2,
                                    sizes: "100vw",
                                    className: "image"
                                }, void 0, false, {
                                    fileName: "[project]/components/Storyboard.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "scene-shade"
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "story-text",
                                style: {
                                    y: textY,
                                    opacity: textOpacity
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: [
                                            scene.number,
                                            " / ",
                                            scene.eyebrow
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: scene.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "description",
                                        children: scene.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${scene.number}-${scene.image}`, true, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, this);
                }, "Y3f24g34pMFWpHT3j9jKQnYugKs=", false, function() {
                    return [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
                    ];
                }))
            }, void 0, false, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "story-progress",
                children: scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: index === 0 ? "current-dot" : ""
                    }, scene.number, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Storyboard.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(CinematicStory, "CZkpqfuDxoLp31fh/WQWcKLP43M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = CinematicStory;
function Storyboard() {
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const goToScene = (index)=>{
        const target = document.getElementById(`scene-anchor-${index}`);
        target?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "logo",
                        href: "#top",
                        children: [
                            "R&S",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 276,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "counter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: String(active + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "/ ",
                                    String(scenes.length).padStart(2, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "scene-nav",
                "aria-label": "Escenas",
                children: scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: active === index ? "active" : "",
                        onClick: ()=>goToScene(index),
                        "aria-label": `Ir a escena ${index + 1}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: scene.number
                        }, void 0, false, {
                            fileName: "[project]/components/Storyboard.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    }, scene.number, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                id: "top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-grid"
                    }, void 0, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Sonnifer y Raelvis 💞"
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "Lo que una vez fue un Mensaje en Tiktok.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Hoy es una Historia."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-copy",
                                children: "Desplázate para descubrir un poquito de nuestra Historia Juntos."
                            }, void 0, false, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "start",
                                onClick: ()=>goToScene(0),
                                children: [
                                    "Comenzar ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↓"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Storyboard.tsx",
                                        lineNumber: 310,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Storyboard.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "story-wrapper",
                children: [
                    scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scene-anchor",
                            id: `scene-anchor-${index}`
                        }, scene.number, false, {
                            fileName: "[project]/components/Storyboard.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicStory, {
                        onActive: setActive
                    }, void 0, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "ending",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "THE END 🕊️"
                    }, void 0, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Eres mi niña y siempre lo serás, te amo con todas las fuerzas de mi corazón. 💗"
                    }, void 0, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }),
                        children: "Volver al inicio ↑"
                    }, void 0, false, {
                        fileName: "[project]/components/Storyboard.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Storyboard.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Storyboard.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s1(Storyboard, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c1 = Storyboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "CinematicStory");
__turbopack_context__.k.register(_c1, "Storyboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Storyboard.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Storyboard.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_Storyboard_tsx_0mmhpx7._.js.map