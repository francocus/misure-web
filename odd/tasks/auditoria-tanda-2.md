# auditoria-tanda-2 — CI, peso del deploy y cierres de a11y/UX (misura-web)

Creado: 2026-10-20 · Rama de trabajo: `master` (el usuario consolidó todo el repo en master el 20-10 y borró las ramas laterales; los commits de tanda 2 van por unidad sobre master) · Fuente: `AUDITORIA.md` tanda 2.

## Alcance

- Incluye: F14 (CI), F21 (script check), F07 (PNG muertos del deploy), F09 (foco del modal fallback), F17 (prev/next entre casos), F13 (`.catch` sueltos).
- No incluye: F11 (limitar la key de Web3Forms en el dashboard: lo maneja el author más tarde, decisión 20-10) ni el resto de la declaración de política (ya cumplida).
- Post-deploy: verificación de headers/404/analytics en vivo — queda para cuando el usuario avise.

## Autorización

- 2026-10-20: "hace todo lo que puedas hacer solo". Sin SDD.

## Regla de protección

- El working tree del autor: `image.png` borrado sin commitear + `test.html`/`test.png` untracked — no commitear ni stagegear jamás.
- Push: solo cuando el usuario lo pida.

## Tasks

| ID | Hallazgo | Descripción | Estado | Commit |
| --- | --- | --- | --- | --- |
| T1 | F21 | `"check": "astro check"` en package.json | done | 93f45e2 |
| T2 | F14 | Workflow CI (push/PR a master): npm ci → check → build → audit --omit=dev --audit-level=high → links del dist. Extra: npm audit fix cerró las 7 vulnerabilidades (0 en --omit=dev) con gates verdes — F12 completa | done | 93f45e2 |
| T3 | F13 | `.catch` en `BrandBurn.astro:653` y `Faq.astro:208` (patrón de Hero/BrandOpening/ScrollRail) | done | f20c3e5 |
| T4 | F09 | Trampa de foco + Escape + devolución de foco solo en la rama fallback del dialog (`open`): foco al botón de cierre, Tab vuelve al botón, foco devuelto al cerrar | done | 87bf725 |
| T5 | F07 | Causa: `<Image>` sin format dejaba la PNG master como src de fallback y el import emitía el original igual. Fix: format="webp" en los 5 usos + scripts/saca-png-muertos.mjs post-build (dentro de npm run build): dist/_astro 6.7M → 4.1M (−2.55 MB) | done | 68ae1ac |
| T6 | F17 | Prev/next: componente CaseNav.astro (orden de caseStudies, sin wrap en extremos) wireado en las 6 fichas junto al back-link; links del dist 286 → 296 OK | done | fd652d2 |
| T7 | cierre | AUDITORIA.md §8.2 escrito con todos los estados; queda solo F11 (mano del autor) | done | — |

## Commits esperados (unidades)

- C1 `chore(repo): script check y ci de verificacion` (T1+T2)
- C2 `fix(calidad): maneja el rechazo de las promesas sueltas` (T3)
- C3 `fix(contacto): trampa de foco en el fallback del modal` (T4)
- C4 `perf(assets): saca del deploy los png muertos` (T5)
- C5 `feat(casos): navegacion anterior y siguiente entre fichas` (T6)
- C6 `docs(audit): cierra la tanda 2` (T7)
