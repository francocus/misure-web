# Tipografía Royale Milano + wordmark deftcode

Fecha: 2026-10-29 · Rama: master (repo en ritmo post-integración) · Preview: /4332

## Objetivo

La tipografía descargada en el escritorio (Royale Milano demo, itálica regular, otf de 48 KB)
pasa a ser la tipografía display del H1 de marca que el autor pidió: la **palabra gigante que
abre la home** (`BrandOpening`, hoy en Lora), y el wordmark visible pasa de "bottega" a
"deftcode".

## Decisiones tomadas con el autor (2026-10-29)

1. **Tipografía va en la apertura gigante de la home** (no en el `<h1>` del hero ni en
   navbar/footer): Q&A con dos opciones, eligió la apertura.
2. **Renombre "todo el wordmark visible"**: apertura, navbar, footer, el sello del preload
   (`BrandBurn`) y las palabras de marca resaltadas en el copy (`BrandWord`: explore, about,
   FAQ, testimonio). La entrada del diccionario (`dictionaryEntry`: "bottega /bot-té-ga/")
   **queda como está** a propósito.
3. `legalName` "BottegaDevs", emails, dominio `bottegadevs.com`, metas, favicon circular "b"
   y og-images **quedan afuera** (renombre completo sería otra tarea con decisiones de
   dominio/mail).

## Cómo

- Autohost de la otf: `src/assets/fonts/royale-milano-demo-regular-italic.otf` (sin subset ni
  conversión: no hay fonttools en la máquina; 48 KB es liviano).
- `fonts.css`: una `@font-face` nueva, familia `Royale Milano Demo`, `font-style: normal` y
  `font-weight: 400` declarados (es demo monostilo itálica: los glifos itálics ya vienen horneados;
  declarar `normal` evita síntesis en Chromium/Firefox). `font-display: swap`.
- Token nuevo en `global.css`: `--font-wordmark-hero`, y una línea `font-family` dentro de
  `.wordmark-hero`. El `.wordmark` base (navbar/footer) **sigue en Lora**.
- Preload solo home: BaseLayout importa la otf con `?url` y emite el `<link rel="preload">`
  solo cuando `Astro.url.pathname === "/"` (Royale solo la usan BrandOpening y BrandBurn, ambas solo home).
- Texto: `site.name` = "deftcode"; BrandOpening y BrandBurn leen `{site.name}` (BrandBurn tenía
  el literal "bottega" hardcodeado). Navbar/footer y `BrandWord` siguen a `site.name`.
- Copy con la palabra marca (4 lugares): explore (línea ~226), about (~260), testimonio Clients
  (~482, "Con Bottega ahora..." → "Con deftcode..."), FAQ (~606).

## Impactos a ojo (verificar en captura)

- El sello del preload y la apertura comparten `.wordmark-hero`: mismo clamp 12rem/20vw; el
  runtime ya mide cajas reales (`offsetTop/offsetLeft`), el texto más largo se re-mide solo.
- NavBar: el fallback sin JS `scale(0.1664)` está calibrado para "bottega" a 685px; con
  "deftcode" (8 glifos) la caja crece ~10-15% → overflow de ~14px solo sin JS. pendiente: medir
  ancho real y recalibrar `114/ancho` si se ve.
- La entrada del diccionario debajo de la apertura sigue definiendo "bottega": inconsistencia
  editorial visible y aceptada por ahora.

## Pendientes fuera de esta tarea (avisadas al autor)

- Favicon circular "b" y `og-bottega-software.png` siguen siendo marca-gráfica vieja.
- Definición/diccionario para "deftcode" (no se puede inventar: necesita decisión editorial).
- Renombre completo de metas/dominio si el autor quiere llevar "deftcode" hasta ahí.

## Verificación (2026-10-29)

- `npx astro check`: 0 errores/0 warnings en los 6 archivos de esta tarea. El árbol trae 3
  errores preexistentes del WIP del autor en archivos FECHA fuera de superficie
  (`CaseNav.astro` ts7053 x2, `CaseStudyGallery.astro` ts2322): quedan sin tocar.
- `npx astro build`: limpio, 12 páginas (baseline viejo de 11 quedó atrás: ahora hay
  fichas de caso como páginas). La fuente sale con hash a `dist/_astro/` y el CSS la
  referencia; home lleva los 3 preloads, `/nosotros` solo los 2 woff2.
- Captura CDP en :4332 (1440x970): apertura = "deftcode" con familia computada
  `Royale Milano Demo` y `document.fonts.check` en true; navbar = "deftcode" en Lora;
  sello del burn = "deftcode"; plato de tinta en animación normal a los 700ms.
  Capturas: `%TEMP%/deftcode-burn.png`, `%TEMP%/deftcode-apertura.png`.
