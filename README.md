# Next Storyboard — Cinematic

Landing page de una sola página hecha con Next.js + TypeScript + Motion.

## 1. Instalar

```bash
npm install
```

## 2. Ejecutar

```bash
npm run dev
```

Abre:

http://localhost:3000

## 3. Personalizar

Solo edita el array `scenes` al principio de:

`components/Storyboard.tsx`

Cada escena tiene:

```ts
{
  number: "01",
  eyebrow: "EL COMIENZO",
  title: "Tu título",
  description: "Tu texto",
  image: "/images/scene-01.jpg"
}
```

Puedes cambiar el texto y la imagen sin tocar el resto del código.

### Usar tus propias imágenes

Crea:

`public/images/`

Y coloca allí:

- `scene-01.jpg`
- `scene-02.jpg`
- `scene-03.jpg`
- etc.

Después cambia:

```ts
image: "/images/scene-01.jpg"
```

No necesitas tocar CSS ni la animación.

## Tamaño recomendado para iPhone

Para este diseño, las imágenes ocupan prácticamente toda la pantalla.

### Recomendación principal

Usa imágenes de:

**2160 × 3840 px**

Relación:

**9:16**

Es una excelente base para móviles modernos porque permite recortar sin perder demasiado detalle.

### Si quieres una sola imagen para móvil y PC

Usa:

**2400 × 1600 px**

Relación:

**3:2**

El sitio hará el recorte automáticamente con `object-fit: cover`, pero tendrás que colocar el sujeto importante cerca del centro.

### Para máxima calidad sin archivos enormes

Puedes usar:

**1440 × 2560 px** para móvil.

Para la mayoría de los casos es más que suficiente.

### Formato

Preferencia:

1. `.webp`
2. `.avif`
3. `.jpg` de buena calidad

Evita PNG para fotografías porque suele pesar demasiado.

### Regla importante de composición

No pongas caras, logos o texto importante pegados a los bordes.

Deja aproximadamente:

- 10% de margen lateral
- 15% de margen superior/inferior

El motivo es que `object-fit: cover` recorta partes diferentes de la imagen según el tamaño de pantalla.

### Zona segura

Piensa en algo así:

┌─────────────────────┐
│   zona no segura    │
│ ┌─────────────────┐ │
│ │                 │ │
│ │   SUJETO        │ │
│ │    IMPORTANTE   │ │
│ │                 │ │
│ └─────────────────┘ │
│   zona no segura    │
└─────────────────────┘

Mantén el elemento principal dentro del rectángulo central.

## Para una web turística

Si las imágenes son fotografías de paisajes, recomiendo:

**2160 × 3840 px, 9:16**

y colocar el punto de interés aproximadamente en el centro.

Si quieres aprovechar mejor pantallas grandes, puedes crear dos versiones:

`scene-01-mobile.webp` → 1440×2560

`scene-01-desktop.webp` → 2400×1600

y usar `<picture>`/CSS para servir la adecuada.

## Cómo funciona la transición

La página tiene una "cámara" fija mientras haces scroll.

La escena anterior:

`opacity 1 → 0`

La siguiente:

`opacity 0 → 1`

Al mismo tiempo la imagen hace un pequeño:

`scale 1.08 → 1`

y el texto:

`translateY(35px) → 0`

Esto produce el efecto de que una escena se transforma suavemente en la siguiente, en vez de parecer un slideshow normal.

## Nota

Las imágenes de demostración son de Unsplash. Para producción, recomiendo descargar/optimizar tus propias imágenes y guardarlas en `public/images`.
