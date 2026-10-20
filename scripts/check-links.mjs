// Verifica que todo <a href> interno del dist apunte a un archivo existente.
// Solo node stdlib: sin deps, corre en CI y a mano con `npm run links`.
// Un interno es href relativo ("/x", "x.html") o mismo host con el dominio
// del sitio; lo demás (mailto:, tel:, otros dominios, anchors) no se toca.

import { readdir, readFile, access } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

// El dominio del sitio, sacado de los canonical del propio dist: si cambia,
// este script sigue funcionando sin edición.
async function siteHost() {
  for await (const f of walk(dist)) {
    const html = await readFile(f, "utf8");
    const m = html.match(/rel="canonical" href="(https?:\/\/[^/]+)/);
    if (m) return m[1];
  }
  return null;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

// "/a/b?q=1#x" -> ["a/b"] sobre dist; "../../x" se resuelve contra la carpeta
// del html emisor.
function internoTargets(href, dirDelHtml) {
  if (href.startsWith("//")) return [];
  const sinFragmento = href.split("#")[0].split("?")[0];
  if (sinFragmento === "") return [];
  if (href.startsWith("/")) return [join(dist, sinFragmento.replace(/^\/+/, ""))];
  if (/^https?:\/\//i.test(href)) return [];
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return []; // mailto:, tel:, etc.
  const pathAbsoluto = resolve(dirDelHtml, sinFragmento);
  if (!pathAbsoluto.startsWith(dist)) return []; // escapa del dist: no es interno del sitio
  return [pathAbsoluto];
}

async function resuelve(target) {
  if (await exists(target)) return true;
  if (await exists(target + ".html")) return true;
  if (await exists(join(target, "index.html"))) return true;
  return false;
}

const host = await siteHost();
const rotos = [];
let revisados = 0;

for await (const htmlPath of walk(dist)) {
  const html = await readFile(htmlPath, "utf8");
  const dir = dirname(htmlPath);
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    const href = m[1];
    revisados++;
    const targets = [];
    for (const t of internoTargets(href, dir)) targets.push(t);
    if (host && href.startsWith(host)) {
      const ruta = href.slice(host.length).split("#")[0].split("?")[0];
      targets.push(join(dist, ruta.replace(/^\/+/, "")));
    }
    if (targets.length === 0) continue;
    const ok = (await Promise.all(targets.map(resuelve))).some(Boolean);
    if (!ok) rotos.push({ desde: htmlPath.replace(dist + "\\", "").replace(dist + "/", ""), href });
  }
}

if (rotos.length > 0) {
  console.error(`Links internos rotos (${rotos.length} de ${revisados}):`);
  for (const r of rotos) console.error(`  ${r.desde}  ->  ${r.href}`);
  process.exit(1);
}
console.log(`Links internos OK (${revisados} revisados en el dist).`);
