// F07: los master PNG de los casos aterrizan en dist/_astro aunque nadie los
// pida. El import de astro:assets emite el archivo original (el src= de
// fallback lo referenciaba hasta que <Image> pasó a format="webp"), y de ahí
// no se puede prescindir: el master ES la fuente de los webp responsive.
// Este paso corre después del build (npm run build) y saca del dist toda
// PNG de _astro que ningún html/css referencie por su nombre con hash. Los
// de public/ no se tocan (referenciados con nombre fijo).

import { readdir, readFile, unlink, stat } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

async function* walk(dir, filtro) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p, filtro);
    else if (!filtro || filtro(entry.name)) yield p;
  }
}

const referencias = [];
for await (const f of walk(dist, (n) => n.endsWith(".html") || n.endsWith(".css"))) {
  referencias.push(await readFile(f, "utf8"));
}
const todoElTexto = referencias.join("\n");

let sacadas = 0;
let bytes = 0;
for await (const png of walk(join(dist, "_astro"), (n) => n.endsWith(".png"))) {
  const nombre = png.replace(/\\/g, "/").split("/").pop();
  if (!todoElTexto.includes(nombre)) {
    try {
      bytes += (await stat(png)).size;
    } catch {}
    await unlink(png);
    sacadas++;
  }
}

console.log(
  sacadas === 0
    ? "PNG muertos: nada para sacar."
    : `PNG muertos: ${sacadas} sacada(s) del dist (${(bytes / 1024 / 1024).toFixed(2)} MB).`,
);
