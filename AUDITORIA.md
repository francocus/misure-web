# Auditoría integral — misura-web (bottegadevs.com)

Fecha: 2026-10-19 · MODO: solo-reporte (cero ediciones de código) · Auditor: orquestador Pi + 8 subagentes read-only.

## 1. Resumen ejecutivo

Sitio estático Astro 7.3.2 SSG + Tailwind 4.3.3 (vite), Node 24, deploy Vercel, 11 páginas, sin backend/DB/auth (formulario → Web3Forms desde el cliente). Superficie de ataque mínima y base técnica limpia; los riesgos están en la capa de entrega (headers, 404, preload) y en la falta de CI.

| Área | Nota |
| --- | --- |
| Tests | 2/10 — no existe suite ni CI; build y check verdes verificados a mano |
| Seguridad | 6/10 — superficie mínima ✓, headers ausentes ✗, GA4 corriendo contra la propia política de privacidad ✗ |
| Rendimiento | 8/10 — LH mobile 97-100, TBT 0, CLS ≤0.054; CSS blocking + fuentes sin preload |
| SEO | 7.5/10 — base sólida; 3 titles/descriptions fuera de rango, sin 404 |
| Accesibilidad | 8/10 — LH 98-100; 2 fallos AA de contraste/status, 1 riesgo de modal |
| UX | 7.5/10 — navegación completa sin huérfanos; dead-ends en casos; sin 404 |
| Congruencia | 8/10 — tokens limpios y voseo uniforme; terminología y Title Case con drift |
| Buenas prácticas | 8/10 — check 0 errores, deps 100% usadas, errores casi todos manejados |

**Top 5 urgentes:** F24 GA4 corriendo contra la política de privacidad (compliance) · F02 404 estilizada · F05 contraste `text-green/60` (AA fail) · F06 estado de envío sin `aria-live` · F04 preload de fuentes.

## 2. Tabla de hallazgos

| ID | Área | Sev | Título | Evidencia | Impacto | Cómo arreglarlo | Esf | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| F01 | Seguridad | Media | Sin CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy en producción | `curl -sI https://bottegadevs.com` (B + FASE 3): solo HSTS (`max-age=63072000`, sin includeSubDomains) y Server: Vercel | Mitigaciones ausentes si algo inyecta HTML/JS; en SSG sin input renderizado no hay exploit directo (FASE 4: sobreestimada, reclasificada) | `vercel.json` con `headers` (CSP base `default-src 'self'` + los 5 headers) | S | Verificado |
| F02 | SEO/UX | Alta | No hay página 404 propia | `ls dist/404.html` → ENOENT; `src/pages/404.astro` inexistente; en vivo `/pagina-inexistente-xyz` → 404 genérica de Vercel | Cada URL mal escrita o link roto aterriza en página ajena a la marca, sin vuelta al sitio | Crear `src/pages/404.astro` (Astro lo emite como `404.html`); contenido + link a home/contacto | S | Verificado |
| F03 | Rendimiento | Media | CSS render-blocking ~760 ms | Lighthouse `render-blocking-insight`: Footer.css 54.7 KiB (456 ms) + index css (306 ms) | Demora el primer pintado en todas las páginas | Inline del CSS crítico o split por página / media queries | M | Verificado |
| F04 | Rendimiento | Media | Fuentes woff2 sin preload (cadena doc→css→font) | LH `network-dependency-tree`; `grep rel="preload" dist/index.html` → 0; preload comentado en `BaseLayout.astro:127-131` no aterriza | LCP retrasado (~2 s home, texto de marca dependiente de la fuente) | `link rel="preload" as="font" crossorigin` de los 2 woff2 latin (37+27 KiB) | S | Verificado |
| F05 | A11y | Media | Contraste 1.4.3 AA falla: `text-green/60` = 3.50:1 | `CaseContrast.astro:23-24` (`<th>` `text-green/60 text-[0.65rem] uppercase`, ~10.4px); cálculo: cream `#f1e8db` vs green `#0e3b33` con alpha | Tabla antes/después ilegible para visión baja | Subir a `/75` (5.20:1) o color sólido; revisar `/70` (4.53:1, margen 0.03) en `ClientQuote.astro:26,38,41` | S | Verificado |
| F06 | A11y | Media | 4.1.3: estado de envío no anunciado | `grep aria-live\|role="status"\|aria-busy ContactForm.astro` → 0; solo label+disabled (`:494-520`); el repo ya lo hace bien en `ShareButton.astro:120` | Screen reader no anuncia "Enviando..." ni el cambio a error/éxito | `aria-live="polite"` + `aria-busy` en el botón o wrapper del estado | S | Verificado |
| F07 | Rendimiento | Media | ~2.5 MB de PNG muertos en el deploy | `find dist/_astro -name "*.png" -size +100k`: az-hero 744K, erp-dashboard 700K, dashboard 412K, landing-hero 408K, admin3 280K; los browsers piden los webp de 16-21 KiB | Peso de deploy + deploy/cache innecesario; riesgo de que algo los pida sin responsive | Excluir los PNG de `dist` (no son pedidos; Astro ya emite 136 webp responsive) | S-M | Verificado |
| F08 | SEO | Media | 3 titles >60c y 3 descriptions >160c | dist (FASE 3): titles index 67c, empresa-limpieza-rosario 68c, landing-empresa-limpieza 62c; descs crm-concesionaria 240c, gestion-legal 254c, landing-empresa-limpieza 175c | Truncado en SERP: pérdida de CTR y de mensaje | Acortar copy en `src/lib/content.ts` (targets: title ≤60, desc 120-160) | S | Verificado |
| F09 | A11y | Baja | Fallback del modal sin trampa de foco (2.1.2/2.4.3) | `ContactForm.astro:507-510` usa `showModal()` (top layer ✓) pero la rama sin soporte `:478-479` hace `setAttribute("open")` sin Escape/inert/trap (grep Escape/inert → 0 en el archivo) | En navegadores viejos el foco escapa al fondo del diálogo | Añadir trap + Escape + return focus en la rama fallback, o decidir sin-fallback | S | Verificado |
| F10 | A11y | Baja | Touch targets 32-36px (2.5.5 AAA; pasan AA 2.5.8 de 24px) | `Header.astro:80` burger ~32-34px, `:92` links móvil ~36px; CTA `:99` sí llega | Áreas táctiles incómodas en móvil | `min-h/min-w` 44px en burger y links del menú | S | Verificado |
| F11 | Seguridad | Media | Web3Forms `accessKey` público en repo y bundle, y la política no lo declara como procesador | `src/lib/content.ts:756` (`a6e7…`) + `ContactForm.astro:52-53` + historia git; público por diseño de Web3Forms | Cuota/spam (mitigado por `botcheck`) y faceta legal: Web3Forms procesa los datos de contacto y la política no lo declara (FASE 4) | Limitar el key por dominio en el dashboard; declarar Web3Forms como procesador en la política | S | Verificado |
| F12 | Seguridad | Info | Deps vulnerables solo build-time | `npm audit`: undici 8.0.0-8.10.1 (high, via `unifont`), devalue ≤5.9.2, http-cache-semantics ≤4.2.0, sharp <0.35.5 (librsvg), smol-toml (moderate) — FASE 4 confirmó: build-time, nada embarca en runtime | Sin ruta de explotación en SSG productivo (corren en build); hygiene pendiente | `npm audit fix` + audit con umbral en CI | S | Verificado |
| F13 | Calidad | Baja | `.then()` sin `.catch` en 2 lugares | `BrandBurn.astro:653` (`fuenteALista.then(...)`) y `Faq.astro:208` (`document.fonts?.ready.then(...)`) | Rechazo no manejado (low: fuentes no suelen rechazar); inconsistente con `Hero.astro:938`, `BrandOpening.astro:386`, `ScrollRail.astro:659` que sí llevan `.catch` | Agregar `.catch(() => {})` como en el resto | S | Verificado |
| F14 | DevOps | Media | Sin CI: no existe `.github/` | `ls .github` → no existe | El build/chequeo/audit dependen de ejecución manual | Workflow con `astro check` + `npm run build` + `npm audit --omit=dev` + test de links de dist | S-M | Verificado |
| F15 | Congruencia | Media | Terminología y Title Case con drift | `content.ts:326` "Sistemas de Gestión (ERP)" vs `:610` "sistema de gestión (ERP)"; "página web/sitio/landing" para lo mismo (`types.ts:14`, `content.ts:543,559`); "bottega" (`:225,259`) vs "BottegaDevs" (`:61,89,95`) | Mensaje de marca desalineado entre páginas | Glossario en content.ts + pasada de unificación | S-M | Verificado |
| F16 | SEO | Baja | Sin `manifest.webmanifest`; `favicon.ico` existe (2.9 KB) pero sin referencia en HTML | `ls dist/`: favicon.ico ✓, og-bottega-software.png ✓ (29 KB), apple-touch-icon ✓; manifest ENOENT | PWA/instalabilidad y algunas herramientas de SEO esperan manifest | Generar manifest mínimo o declarar que no aplica a un sitio de estudio | S | Verificado |
| F17 | UX | Media | Los 6 casos son dead-ends de comparación | Cada caso solo tiene back-link a `/proyectos` (`:189-204`) y CTA a contacto; sin prev/next | Comparar casos exige volver a la lista en cada paso | Prev/next entre casos (orden del portfolio) o "ver otro caso" | M | Verificado |
| F18 | UX | Baja | `/privacidad` sin salida interna | Sin links a contacto en la página; salida solo por Header/CTA global | Usuario que terminó de leer la política queda sin acción sugerida | Link de cierre a contacto | S | Verificado |
| F19 | UX | Info | StickyCta: solape posible en móvil | `StickyCta.astro:13` delega tamaño a Button; layout real NO VERIFICADO sin navegador | Riesgo de tapar contenido/CTAs en pantallas cortas | Verificación visual con navegador | S | No verificado |
| F20 | SEO | Info | JSON-LD sin WebSite/BreadcrumbList | `BaseLayout.astro:41` Organization ✓, `Faq.astro:8` FAQPage ✓ | Enhancements opcionales de SERP | Agregar WebSite + BreadcrumbList si se quiere | S | Verificado |
| F21 | Calidad | Baja | Falta script `check` en package.json | package.json scripts: dev/build/preview/astro; `@astrojs/check` presente en devDeps | El check verde depende de recordar el comando | `"check": "astro check"` + usarlo en CI | S | Verificado |
| F22 | Repo | Info | Working tree sucio + masters PNG ~3.7 MB versionados | `git status`: `image.png` borrado (cambio del autor, sin commitear) + 3 PNG de diseño untracked (`anillado.png`, `image preload.png`, `preload reference.jpg`); masters en `src/assets/proyectos/` 520-744K c/u (necesarios como source de Astro) | Ruido de estado; masters pesan en el clone (size-pack 8.4 MiB) | Decidir destino de los 3 untracked (gitignore) y limpiar `image.png` | S | Verificado |
| F23 | A11y | Baja | Contraste marginal: `text-green/70` = 4.53:1 | `ClientQuote.astro:26,38,41` (`text-xs`) | Pasa AA por 0.03: cualquier redondeo de fuente lo tira | Subir a `/75` (5.20:1) | S | Verificado |
| F24 | Privacidad/Compliance | Alta | GA4 carga sin consentimiento mientras la política de privacidad afirma que el sitio no usa cookies ni analítica | `BaseLayout.astro:58-60` carga `googletagmanager.com/gtag/js` + `:88` `gtag('config',…)` vía `set:html`; `content.ts:153-156` dice textual: "Este sitio no usa cookies, ni de seguimiento ni de publicidad, ni analítica de terceros. Si en algún momento sumamos analítica, va a ser con tu consentimiento previo" | Violación activa de la propia política (cookies `_ga` sin opt-in, sin banner, sin CMP); riesgo Ley 25.326/DNPDP (AAIP); el juez de FASE 4 lo marcó como lo más grave omitido | Decisión del autor: (a) quitar GA4, (b) banner de consentimiento previo (JS propio, sin librería), (c) analítica sin cookies; corregir la política al estado real y declarar Web3Forms (F11) | S-M | Verificado |

**Falsos positivos descartados en FASE 3:** ancla muerta `#pregunta-costo-mio` (el id existe: `Faq.astro:69`) · doble `<h1>` en la home (`index.astro:2-17` no incluye About; Hero es el único h1) · "sin honeypot" (existe: `botcheck` en `ContactForm.astro:57`).

## 3. Resultados de tests

- **Batería de tests: no existe.** `package.json` no define `test` (scripts: dev/build/preview/astro). Total: 0 tests, 0 pasan, 0 fallan.
- **Type check:** `npx astro check` → 65 files, 0 errores, 0 warnings, 0 hints.
- **Build producción:** 11 páginas, sitemap-index.xml generado, sin errores ni warnings (verificado hoy por el orquestador: `npm run build` → "Complete!").
- **Cobertura:** n/a — no hay código de test. Módulos críticos sin tests: `src/lib/content.ts` (1502 líneas de datos = la superficie más frágil), `ContactForm.astro` (flujo de conversión), links internos, meta/SEO del dist.
- **Tests faltantes más valiosos (orden por riesgo):** build en CI · astro check en CI · form POSTea a web3forms con access_key + botcheck en el HTML · links internos de dist resuelven · sitemap = 11 URLs = páginas · OG/meta por página · tipos estrictos de content.ts · `npm audit --omit=dev` con umbral · presupuesto de peso por página · copy fuera de content.ts no permitido.

## 4. Checks no verificados

| Check | Motivo | Comando para correrlo |
| --- | --- | --- |
| Lighthouse desktop | Solo se corrió mobile en /, /proyectos, /contacto | `npx lighthouse https://bottegadevs.com --form-factor=desktop --screenEmulation.desktop --only-categories=performance,accessibility,best-practices,seo` |
| INP real de campo | Lighthouse CLI no mide INP; requiere datos de campo | PageSpeed Insights (https://pagespeed.web.dev) contra bottegadevs.com |
| Headers de `/_astro/*` (cache immutable, brotli) | Solo 1 HEAD usado contra el HTML | `curl -sI https://bottegadevs.com/_astro/<archivo-hashed>.css` y `curl -sIH "Accept-Encoding: br" ...` |
| Responsive visual real (360/768/1024/1440), morph del wordmark al navbar, modal real, StickyCta, ScrollRail | Sin navegador en la auditoría (Playwright no instalado) | `npx playwright install chromium` + script de captura por viewport, o recorrido manual |
| Historia de git completa de secretos | Solo se greppeó `accessKey` por presupuesto | `npx gitleaks detect --source . --no-git` + `gitleaks git` |

## 5. Quick wins (todos < 30 min)

1. `vercel.json` con los 5 headers de seguridad (F01) — 15 min.
2. `src/pages/404.astro` (F02) — 20 min.
3. Preload de las 2 fuentes woff2 (F04) — 10 min.
4. `text-green/60` → `/75` en `CaseContrast.astro` (F05) — 5 min.
5. `aria-live` en el estado de envío de `ContactForm` (F06) — 10 min.
6. Acortar 3 titles y 3 descriptions (F08) — 15 min.
7. `npm audit fix` (F12) — 5 min.
8. Script `check` en package.json (F21) — 2 min.
9. **Decisión GA4 (F24):** quitar el snippet de `BaseLayout` (15 min) o banner de consentimiento (30 min) + corregir la política. Es decisión de producto: hoy el sitio promete algo que no cumple.

## 6. Plan de acción

**Tanda 1 — esta semana:** F24 (GA4 vs política: decisión + arreglo), F02 (404), F05 (contraste), F06 (aria-live), F08 (titles/descriptions), F01 (headers, ahora Media pero de 15 min), F04 (preload fuentes), F03 (CSS blocking: decidir inline vs split — máximo impacto de perf pendiente).

**Tanda 2 — este mes:** F14 (CI: check + build + audit + links), F07 (PNG muertos del deploy), F09 (modal fallback), F17 (prev/next en casos), F13 (`.catch`), F21 (script check), F11 (limitar key por dominio + declarar Web3Forms en la política).

**Tanda 3 — después:** F15 (glossario/terminología), F20 (WebSite/BreadcrumbList), F10 (targets 44px), F16 (manifest), F18 (salida de privacidad), F22 (higiene del working tree), medición desktop/INP de la sección 4.

## 7. Lo que está bien (no romper)

- **Higiene de código:** `astro check` 0 errores/0 warnings; cero `console.log`/`debugger`/TODO reales; las 6 dependencias runtime usadas; cero hex crudos en componentes (paleta 100% tokens, 24 definiciones en `global.css:4-32`).
- **Lighthouse mobile:** / 97-100-100-100, /proyectos 98-98-100-100, /contacto 100-100-100-100; TBT 0 ms en las tres; CLS ≤0.054; JS propio ~27 KiB.
- **SEO base:** sitemap 11 URLs 1:1 con las páginas, robots.txt ✓, canonical en home ✓, OG + twitter card + og:image (29 KB, existe en dist) ✓, JSON-LD Organization + FAQPage ✓, un `<h1>` por página ✓, `lang="es"` + viewport correcto en las 11 ✓.
- **A11y estructural:** skip link visible al foco (`Header.astro:9-12`) + `main tabindex="-1"` en las 11; `prefers-reduced-motion` neutralizado (no eliminado) en `global.css:275-284` con guards JS; `aria-current="page"` en nav; labels + `aria-describedby` + errores por campo; `<dialog>` nativo con trap de foco nativo; Escape + retorno de foco en menú móvil.
- **Seguridad de superficie:** SSG sin backend/DB/cookies → auth/IDOR/SQLi/CSRF/uploads N/A con evidencia; honeypot `botcheck`; formulario con estados (envío, error con retry, éxito modal, texto preservado, doble envío bloqueado); HSTS activo; sin cookies ni trackers de terceros en el head.
- **Proceso:** commits convencionales en español, README documentado (instalación, GA4/GSC, estructura), voseo 100% consistente, cero lorem/placeholder en content.

## 8. Uso de modelos



- El runtime no ofrece `deepseek-v4.1-flash`, `mimo-v2.6-flash`, `glm-5.3-flash` ni `kimi-k3` como subagentes; se usó el roster real con los roles equivalentes: `gentle-ai-verify` ×4 (A tests, B seguridad ×2, C rendimiento, E accesibilidad), `gentle-ai-explore` ×3 (D SEO, F UX, G congruencia), `jd-judge-a` ×1 (FASE 3 verificación cruzada).
- Dispatches: 11 en total (2 fallidos y relanzados: `review-risk` rechazó el formato de dispatch; B v1 abortó por un error de assistant; v2 completó). kimi-k3: no existe en el roster; la FASE 4 corrió con `jd-judge-b` (segundo juez adversarial, distinto del verificador de FASE 3) tras decisión del usuario.
- Verificación cruzada (FASE 3, `jd-judge-a`): 12 hallazgos revisados → 8 verificados, 2 falsos positivos, 1 falso positivo parcial (H3 a favor del segundo reporte), 1 con números corregidos (H9: 3/3, no 2/5).
- Revisión crítica (FASE 4, `jd-judge-b`, 8 comandos, read-only): reclasificó F01 Alta→Media y F12 Baja→Info, subió F11 por la faceta legal (Web3Forms no declarado como procesador), confirmó el abuso del form (botcheck bypaseable con curl, sin CAPTCHA/rate-limit, sin exfil ni redirect abierto ni adjuntos) y descubrió **F24**: GA4 corriendo sin consentimiento contra la promesa textual de `content.ts:153-156` — lo más grave que quedó fuera de las fases 1-3.

### 8.2 Ejecución de la tanda 2 (2026-10-20)

| Hallazgo | Estado | Evidencia |
| --- | --- | --- |
| F21 script check | Resuelto | `93f45e2`: `"check": "astro check"` + `"links": "node scripts/check-links.mjs"` en package.json |
| F14 CI | Resuelto | `93f45e2`: `.github/workflows/ci.yml` (push/PR a master): `npm ci` → check → build → `npm audit --omit=dev --audit-level=high` → links del dist. Sin pasos manuales: el repo se autogobierna |
| F12 deps | Resuelto completo | `npm audit fix` en `93f45e2`: undici/devalue/http-cache-semantics/sharp/smol-toml/source-map-js/svgo arreglados — **0 vulnerabilidades** en `--omit=dev` (FASE 4 decía build-time; el fix las cerró todas) y el build se mantiene verde |
| F13 .catch | Resuelto | `f20c3e5`: `.catch(() => {})` en la fuente de BrandBurn y el fonts.ready de Faq (patrón de Hero) |
| F09 modal fallback | Resuelto | `87bf725`: trampa mínima en la rama sin top layer (foco en el botón de cierre, Tab vuelve al botón, Escape cierra y el foco vuelve a donde estaba); la rama showModal queda nativa |
| F07 PNG muertos | Resuelto | `68ae1ac`: `<Image>` sin format dejaba la PNG master (hasta 761 KB) como src de fallback; con `format="webp"` en los 5 usos + paso post-build `scripts/saca-png-muertos.mjs` (dentro de `npm run build`) que saca del dist toda PNG de _astro sin referencias: dist/_astro 6.7M → **4.1M** (−2.55 MB), 6 PNG fuera, solo quedan los referenciados de la raíz |
| F17 prev/next | Resuelto | `fd652d2`: componente `CaseNav.astro` (anterior/siguiente según el orden de `caseStudies`, sin wrap en los extremos) insertado en las 6 fichas junto al back-link; los 10 links nuevos resuelven (links del dist: 286 → 296 OK) |
| F11 key | Mano del autor | Pendiente en el dashboard de Web3Forms (limitar por dominio); la declaración en la política ya estaba |

### 8.1 Ejecución de la tanda 1 (2026-10-20)

| Hallazgo | Estado | Evidencia |
| --- | --- | --- |
| F02 404 | Resuelto | `63c92cf`: `src/pages/404.astro` + doc odd; `dist/404.html` generado |
| F04 preload | Resuelto | `f368666`: preloads de los woff2 latin via import `?url` de fontsource; verificado en dist sin duplicados |
| F05 + F06 | Resuelto | `abebc5f`: `text-green/60→75` en CaseContrast; live region + `aria-busy` en ContactForm (patrón ShareButton) |
| F08 | Resuelto | `7e3eb85`: 3 titles + 3 descripciones del informe acortados; el barrido del dist detectó y acortó además 2 descripciones pediátricas (199c→143c, 185c→151c); 0 excesos finales |
| F01 headers | Resuelto (pendiente de verificar en vivo) | `2a25786`: `vercel.json` con CSP (scripts inline del sitio + web3forms en connect/form-action, GA4 ya no figura) + nosniff, X-Frame-Options, Referrer-Policy y Permissions-Policy + cache immutable para `/_astro/*`. HSTS deja el default de Vercel. Verificación con `curl` contra producción cuando se despliegue |
| F24 GA4 | Resuelto — decisión C | `417d440`: GA4 fuera, `<Analytics />` de `@vercel/analytics` v2.0.1 (script mismo dominio `/_vercel/insights/script.js`, sin cookies); `9c0c269`: política actualizada al estado real (octubre 2026). El usuario pidió métricas sin banner → analítica agregada sin cookies. Pendiente del lado del autor: Enable de Analytics en el panel de Vercel tras el deploy |
| F03 CSS blocking | Resuelto (recorte medido) | `2658460`: autohost de las 2 fuentes a subset latin (el index de fontsource volcaba 11 `@font-face` de todos los idiomas al chunk bloqueante; los paquetes quedaron desinstalados). Chunk compartido 55.0→**48.2 KiB**, coste bloqueante de Footer.css **456→305 ms** y TBT **70→50 ms** medidos con Lighthouse mobile en el mismo arnés (baseline y después sobre `astro preview:`). El inline de CSS crítico queda descartado por su costo de mantenimiento con LH 99-100 — a repasar con datos de campo reales post-deploy. Sanity anti-regresión: ←/→/✕ van en `--font-mono` (sistema, igual antes y después) y las rayas de BrandBurn son de comentarios |
| F11 (nota) | Sin cambio de código | La política actual ya declaraba a Web3Forms como intermediario ("Con quién se comparten") — la frase de FASE 4 quedaba obsoleta con el texto existente; sigue pendiente limitar la key por dominio en el dashboard (tanda 2, acción del autor) |
