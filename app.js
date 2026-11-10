/* =========================================================
   Lógica del sitio. No necesitas editar este archivo:
   el material se agrega en datos.js
   ========================================================= */
(function () {
  "use strict";

  const TIPOS = {
    guia:         { plural: "Guías de reforzamiento", singular: "Guía",         icono: "G", accion: "Abrir guía" },
    video:        { plural: "Videos",                 singular: "Video",        icono: "V", accion: "Ver video" },
    solucionario: { plural: "Solucionarios y pautas", singular: "Solucionario", icono: "S", accion: "Ver pauta" },
    simulacion:   { plural: "Simulaciones",           singular: "Simulación",   icono: "Σ", accion: "Abrir simulación" }
  };
  const ORDEN_TIPOS = ["guia", "video", "solucionario", "simulacion"];
  const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

  const $ = (sel) => document.querySelector(sel);
  const main = $("#contenido");

  /* ---------- utilidades ---------- */
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function fechaLarga(f) {
    if (!f) return "";
    const [a, m, d] = f.split("-").map(Number);
    if (!a || !m || !d) return esc(f);
    return `${d} ${MESES[m - 1].toLowerCase()} ${a}`;
  }

  function idYoutube(url) {
    if (!url) return null;
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    if (m) return m[1];
    return /^[\w-]{11}$/.test(url) ? url : null;
  }

  function embedGeoGebra(url) {
    // geogebra.org/m/XXXX → versión para insertar
    const m = String(url).match(/geogebra\.org\/(?:m|material\/show\/id)\/(\w+)/);
    return m ? `https://www.geogebra.org/material/iframe/id/${m[1]}/width/1000/height/700/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/false/ld/false/sri/false` : url;
  }

  function embedSimulacion(url) {
    // PhET: la página de la simulación → la simulación en español para insertar
    const p = String(url).match(/phet\.colorado\.edu\/(?:[a-z_-]+\/)?simulations?\/([\w-]+)/i);
    if (p && !/\/sims\/html\//.test(url)) return `https://phet.colorado.edu/sims/html/${p[1]}/latest/${p[1]}_es.html`;
    return embedGeoGebra(url);
  }

  /* Guías y solucionarios van por unidad; simulaciones y videos tienen su propia sección. */
  const esMultimedia = (m) => m.tipo === "video" || m.tipo === "simulacion";

  function recursosDe(curso) {
    const lista = (curso.recursos || []).map((m) => ({ ...m }));
    (curso.unidades || []).forEach((u) => (u.materiales || []).filter(esMultimedia).forEach((m) => lista.push({ ...m, unidad: m.unidad || u.nombre })));
    return lista;
  }

  function contarMateriales(curso) {
    return (curso.unidades || []).reduce((n, u) => n + (u.materiales || []).length, 0) + (curso.recursos || []).length;
  }

  function cursoPorId(id) { return SITIO.cursos.find((c) => c.id === id); }


  /* ---------- Lámina del héroe ----------
     Semitono radial (afiche Atari), haces de órbitas paralelas (afiche Apollo 11)
     y tramado geométrico en el planeta (alfabeto modular). */
  function laminaHeroe() {
    const C = 200;
    // semitono: puntos que crecen hacia el planeta
    let puntos = "";
    for (let y = 10; y < 400; y += 11) for (let x = 10; x < 400; x += 11) {
      const d = Math.hypot(x - C, y - C);
      if (d < 70 || d > 196) continue;
      const r = 2.3 * (1 - (d - 70) / 126);
      if (r > 0.35) puntos += `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}"/>`;
    }
    // haz de anillos elípticos (mitad trasera completa, mitad delantera sobre el planeta)
    const anillos = [168, 176, 184, 192].map((rx, i) => ({ rx, ry: 38 + i * 4 }));
    const trasero = anillos.map((a) => `<ellipse cx="${C}" cy="${C}" rx="${a.rx}" ry="${a.ry}"/>`).join("");
    const delantero = anillos.map((a) => `<path d="M${C - a.rx} ${C} A${a.rx} ${a.ry} 0 0 0 ${C + a.rx} ${C}"/>`).join("");
    const orbitas = [140, 146, 152, 158].map((r) => `<circle cx="${C}" cy="${C}" r="${r}"/>`).join("");
    return `
      <svg viewBox="0 0 400 400">
        <defs>
          <pattern id="trama" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 0 V5" stroke="#A92717" stroke-width="1.6"/></pattern>
          <clipPath id="planeta-mitad"><path d="M136 200 A64 64 0 0 0 264 200 Z"/></clipPath>
        </defs>
        <g fill="#DEDED2" fill-opacity=".28">${puntos}</g>
        <g fill="none" stroke="#DEDED2">
          <path d="M200 8 V392 M8 200 H392" stroke-opacity=".22"/>
          <path d="M200 44 v8 M200 348 v8 M44 200 h8 M348 200 h8 M200 74 v6 M200 320 v6 M74 200 h6 M320 200 h6" stroke-opacity=".55"/>
          <path d="M200 200 L307 93" stroke="#B9A727" stroke-dasharray="3 4"/>
          <path d="M262 200 A62 62 0 0 0 244 156" stroke="#B9A727"/>
        </g>
        <g fill="none" stroke="#B9A727" stroke-width="1.1">${orbitas}</g>
        <g class="orbita-giro"><circle cx="93" cy="307" r="4" fill="#DEDED2"/></g>
        <g fill="none" stroke="#E2571E" stroke-width="1"><circle cx="307" cy="93" r="13"/><circle cx="307" cy="93" r="18"/><circle cx="307" cy="93" r="23"/></g>
        <circle cx="307" cy="93" r="8" fill="#B9A727"/>
        <g fill="none" stroke="#DEDED2" stroke-width="1.1" stroke-opacity=".85" transform="rotate(-18 ${C} ${C})">${trasero}</g>
        <circle cx="${C}" cy="${C}" r="64" fill="#E2571E"/>
        <rect x="136" y="200" width="128" height="64" fill="url(#trama)" clip-path="url(#planeta-mitad)" opacity=".55"/>
        <path d="M136 200 A64 64 0 0 1 264 200" fill="none" stroke="#A92717" stroke-width="1"/>
        <g fill="none" stroke="#DEDED2" stroke-width="1.1" stroke-opacity=".85" transform="rotate(-18 ${C} ${C})">${delantero}</g>
        <g fill="#DEDED2" font-family="Space Mono, monospace" font-size="11">
          <text x="212" y="22">y</text>
          <text x="378" y="192">x</text>
          <rect x="265" y="171" width="54" height="15" fill="#2C395C"/>
          <text x="269" y="182" fill="#B9A727">θ = 45°</text>
          <text x="318" y="64" fill="#B9A727">P(1, 1)</text>
          <text x="210" y="390" fill-opacity=".7">r = 1,0 UA</text>
          <text x="14" y="390" fill-opacity=".7">38°44′ S</text>
          <text x="14" y="24" fill-opacity=".7">72°36′ O</text>
          <text x="300" y="390" fill-opacity=".45" font-size="9">ORB-01 / 2026</text>
        </g>
      </svg>`;
  }

  /* haz de órbitas para las cabeceras de página */
  function orbitaCabecera() {
    const haz = [128, 136, 144, 152].map((rx, i) => `<ellipse cx="150" cy="150" rx="${rx}" ry="${46 + i * 4}" transform="rotate(-24 150 150)"/>`).join("");
    return `
        ${orbitaCabecera()}`;
  }

  /* cabecera editorial de cada página */
  function cabecera(num, etiqueta, titulo, bajada, migas) {
    return `
      <section class="titulo-pagina">
        <div class="contenedor titulo-pagina__interior">
          ${migas ? `<div class="migas">${migas}</div>` : ""}
          <p class="rotulo"><span class="rotulo__num">${num}</span>${etiqueta}</p>
          <h1>${titulo}</h1>
          ${bajada ? `<p class="titulo-pagina__bajada">${bajada}</p>` : ""}
        </div>
        <svg class="titulo-pagina__orbita" viewBox="0 0 300 300" aria-hidden="true">
          <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 6"/>
          <ellipse cx="150" cy="150" rx="140" ry="52" fill="none" stroke="currentColor" stroke-width="1" transform="rotate(-24 150 150)"/>
          <circle cx="150" cy="150" r="34" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="277" cy="94" r="5" fill="#B9A727" stroke="none"/>
          <path d="M150 10 v20 M150 270 v20 M10 150 h20 M270 150 h20" stroke="currentColor" stroke-width="1"/>
        </svg>
      </section>`;
  }

  function cabeceraSeccion(num, titulo, nota) {
    return `<div class="seccion__cabecera">
      <h2><span class="seccion__num">${num}</span>${titulo}</h2>
      ${nota ? `<p class="seccion__nota">${nota}</p>` : ""}
    </div>`;
  }

  function partesUnidad(nombre) {
    const m = String(nombre).match(/^\s*Unidad\s+(\d+)\s*[·:\-–—]?\s*(.*)$/i);
    return m ? { num: "U" + m[1].padStart(2, "0"), texto: m[2] || nombre } : { num: "", texto: nombre };
  }

  const planetaVacio = `<svg class="vacio__planeta" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" fill="none" stroke="#2C395C" stroke-width="1" stroke-dasharray="2 4"/><circle cx="40" cy="40" r="12" fill="#2C395C"/><ellipse cx="40" cy="40" rx="34" ry="10" fill="none" stroke="#B9A727" stroke-width="1.5" transform="rotate(-18 40 40)"/><circle cx="68" cy="30" r="3.5" fill="#E2571E"/></svg>`;

  /* ---------- tarjetas de material ---------- */
  function botonMaterial(m, etiqueta) {
    const url = esc(m.url);
    if (m.tipo === "video") {
      const id = idYoutube(m.url);
      const lista = (String(m.url).match(/[?&]list=([\w-]+)/) || [])[1];
      if (lista) {
        // lista de reproducción. Con "index=N" (posición del video en la lista, desde 1) se abre en ese video.
        const pos = parseInt((String(m.url).match(/[?&]index=(\d+)/) || [])[1], 10);
        const visor = id
          ? `https://www.youtube-nocookie.com/embed/${id}?list=${lista}&rel=0`
          : `https://www.youtube-nocookie.com/embed/videoseries?list=${lista}${pos ? `&index=${pos - 1}` : ""}&rel=0`;
        const externo = id ? `https://www.youtube.com/watch?v=${id}&list=${lista}` : `https://www.youtube.com/playlist?list=${lista}`;
        const texto = etiqueta === "Ver video" && !pos && !id ? "Ver lista de videos" : etiqueta;
        return `<button class="boton boton--chico" data-visor="${visor}" data-externo="${externo}" data-titulo="${esc(m.titulo)}">${texto}</button>`;
      }
      if (id) return `<button class="boton boton--chico" data-visor="https://www.youtube-nocookie.com/embed/${id}?rel=0" data-externo="https://www.youtube.com/watch?v=${id}" data-titulo="${esc(m.titulo)}">${etiqueta}</button>`;
    }
    if (m.tipo === "simulacion") {
      return `<button class="boton boton--chico" data-visor="${esc(embedSimulacion(m.url))}" data-externo="${url}" data-titulo="${esc(m.titulo)}">${etiqueta}</button>`;
    }
    return `<a class="boton boton--chico" href="${url}" target="_blank" rel="noopener">${etiqueta}</a>`;
  }

  function tarjetaMaterial(m) {
    const t = TIPOS[m.tipo] || TIPOS.guia;
    return `
      <article class="item item--${esc(m.tipo)}">
        <span class="item__titulo">${esc(m.titulo)}</span>
        ${m.fecha ? `<span class="item__meta">Publicado el ${fechaLarga(m.fecha)}</span>` : ""}
        ${m.descripcion ? `<p class="item__desc">${esc(m.descripcion)}</p>` : ""}
        <div class="item__acciones">${botonMaterial(m, t.accion)}</div>
      </article>`;
  }

  /* ---------- vistas ---------- */
  function vistaInicio() {
    const todos = [];
    SITIO.cursos.forEach((c) => {
      (c.unidades || []).forEach((u) => (u.materiales || []).forEach((m) => todos.push({ m, c, u })));
      (c.recursos || []).forEach((m) => todos.push({ m, c, u: { nombre: m.unidad || "Simulaciones y videos" } }));
    });
    todos.sort((a, b) => String(b.m.fecha || "").localeCompare(String(a.m.fecha || "")));
    const recientes = todos.slice(0, 5);

    const novedades = recientes.length ? recientes.map(({ m, c, u }) => {
      const [, mes, dia] = String(m.fecha || "").split("-").map(Number);
      const t = TIPOS[m.tipo] || TIPOS.guia;
      return `
        <div class="novedad">
          <div class="novedad__fecha"><span>${dia ? String(dia).padStart(2, "0") : "–"}</span><small>${mes ? MESES[mes - 1] : ""}</small></div>
          <div>
            <div class="novedad__titulo">${esc(m.titulo)}</div>
            <div class="novedad__curso">${t.singular} · ${esc(c.asignatura)} ${esc(c.nombre)} · ${esc(u.nombre)}</div>
          </div>
          ${botonMaterial(m, t.accion)}
        </div>`;
    }).join("") : `<div class="vacio">${planetaVacio}<p>Pronto habrá material nuevo.</p></div>`;

    return `
      <section class="heroe">
        <div class="heroe__interior">
          <div class="heroe__texto">
            <h1>${esc(SITIO.titulo).replace(/(\S+)$/, "<em>$1</em>")}</h1>
            <p class="heroe__bajada">${esc(SITIO.subtitulo)}</p>
            <div class="heroe__botones">
              <a class="boton" href="#cursos">Buscar mi curso <span aria-hidden="true">→</span></a>
              <a class="boton boton--claro" href="#tareas">Entregar una tarea</a>
            </div>
          </div>
          <figure class="heroe__arte" aria-hidden="true">
            ${laminaHeroe()}
            <figcaption>Fig. 1 — Órbita circular de radio unitario</figcaption>
          </figure>
        </div>
      </section>
      <div class="franja-modular" aria-hidden="true"></div>

      <section class="seccion">
        <div class="contenedor">
          ${cabeceraSeccion("§ 01", "Explorar", "Cinco rutas por el sitio")}
          <div class="accesos">
            <a class="acceso" href="#cursos"><span class="acceso__icono">01</span><h3>Material por curso</h3><p>Guías, videos, pautas y simulaciones ordenados por unidad.</p></a>
            <a class="acceso" href="#juegos"><span class="acceso__icono">02</span><h3>Juegos</h3><p>Desafíos de cálculo mental, como los Kakoomas matemáticos.</p></a>
            <a class="acceso" href="#difusion"><span class="acceso__icono">03</span><h3>Observatorio</h3><p>Artículos y videos sobre matemáticas y ciencias.</p></a>
            <a class="acceso" href="#curiosa"><span class="acceso__icono">04</span><h3>Órbita Curiosa</h3><p>Investigaciones reales y excéntricas, varias con Premio Ig Nobel.</p></a>
            <a class="acceso" href="#tareas"><span class="acceso__icono">05</span><h3>Entregar tarea</h3><p>Sube tu trabajo y llega directo al profesor.</p></a>
          </div>
        </div>
      </section>

      <section class="seccion" style="padding-top:0">
        <div class="contenedor">
          ${cabeceraSeccion("§ 02", "Lo más reciente", "Últimos materiales publicados")}
          <div class="novedades">${novedades}</div>
        </div>
      </section>`;
  }

  function vistaCursos() {
    const secciones = [];
    SITIO.cursos.forEach((c) => { if (!secciones.includes(c.seccion)) secciones.push(c.seccion); });
    const grupos = secciones.map((s, gi) => `
      <div class="grupo">
        <h2 class="grupo__titulo"><span class="grupo__punto" aria-hidden="true"></span>${esc(s)}</h2>
        <div class="rejilla">
          ${SITIO.cursos.filter((c) => c.seccion === s).map((c) => {
            const n = contarMateriales(c);
            return `
              <a class="curso" href="#curso-${encodeURIComponent(c.id)}">
                <span class="curso__asignatura">${esc(c.asignatura)}</span>
                <span class="curso__nombre">${esc(c.nombre)}</span>
                <span class="curso__conteo">
                  <span class="insignia ${n ? "" : "insignia--vacia"}">${n ? `${n} material${n === 1 ? "" : "es"}` : "Próximamente"}</span>
                  <span class="curso__flecha" aria-hidden="true">→</span>
                </span>
              </a>`;
          }).join("")}
        </div>
      </div>`).join("");

    return `
      ${cabecera("§ 01", "Índice de cursos", "Cursos", "Elige tu curso para ver el material de cada unidad.")}
      <div class="franja-modular" aria-hidden="true"></div>
      <section class="seccion"><div class="contenedor">${grupos}</div></section>`;
  }

  function vistaCurso(id) {
    const c = cursoPorId(id);
    if (!c) return vistaNoEncontrada();
    const unidades = c.unidades || [];

    const recursos = recursosDe(c);
    const totalDocs = unidades.reduce((n, u) => n + (u.materiales || []).filter((m) => !esMultimedia(m)).length, 0);

    const cuerpo = unidades.length ? unidades.map((u, i) => {
      const mats = (u.materiales || []).filter((m) => !esMultimedia(m));
      const porTipo = ORDEN_TIPOS.map((tipo) => {
        const lista = mats.filter((m) => (m.tipo || "guia") === tipo);
        if (!lista.length) return "";
        const t = TIPOS[tipo];
        return `
          <div class="tipo">
            <h3 class="tipo__titulo"><span class="tipo__icono" aria-hidden="true">${t.icono}</span>${t.plural}</h3>
            <div class="lista">${lista.map(tarjetaMaterial).join("")}</div>
          </div>`;
      }).join("");
      return `
        <details class="unidad" ${i === 0 || mats.length ? "open" : ""}>
          <summary>${(() => { const pu = partesUnidad(u.nombre); return `${pu.num ? `<span class="unidad__num">${pu.num}</span>` : ""}<span class="unidad__nombre">${esc(pu.texto)}</span>`; })()} <span class="insignia ${mats.length ? "" : "insignia--vacia"}">${mats.length ? `${mats.length} ${mats.length === 1 ? "recurso" : "recursos"}` : "Pronto"}</span></summary>
          <div class="unidad__cuerpo">${porTipo || `<div class="vacio">${planetaVacio}<p>Aún no hay guías en esta unidad.</p></div>`}</div>
        </details>`;
    }).join("") : `<div class="vacio">${planetaVacio}<p>Pronto habrá material para este curso.</p></div>`;

    const tarjetaRecurso = (m) => {
      const t = TIPOS[m.tipo] || TIPOS.simulacion;
      return `
        <article class="item item--${esc(m.tipo)}">
          <span class="insignia" style="align-self:flex-start">${t.singular}</span>
          <span class="item__titulo">${esc(m.titulo)}</span>
          ${m.unidad ? `<span class="item__meta">${esc(m.unidad)}</span>` : ""}
          ${m.descripcion ? `<p class="item__desc">${esc(m.descripcion)}</p>` : ""}
          <div class="item__acciones">${botonMaterial(m, t.accion)}</div>
        </article>`;
    };
    const multimedia = recursos.length
      ? `<div class="lista">${recursos.map(tarjetaRecurso).join("")}</div>`
      : `<div class="vacio">${planetaVacio}<p>Pronto habrá simulaciones y videos para este curso.</p></div>`;

    return `
      ${cabecera("§ 01", esc(c.seccion), `${esc(c.asignatura)} · ${esc(c.nombre)}`, [unidades.length ? `${unidades.length} unidad${unidades.length === 1 ? "" : "es"}` : "", `${totalDocs} ${totalDocs === 1 ? "guía o pauta" : "guías y pautas"}`, `${recursos.length} ${recursos.length === 1 ? "simulación o video" : "simulaciones y videos"}`].filter(Boolean).join(" · "), `<a href="#cursos">← Todos los cursos</a>`)}
      <div class="franja-modular" aria-hidden="true"></div>
      <nav class="saltos contenedor" aria-label="Secciones del curso">
        <a href="#curso-${encodeURIComponent(c.id)}" data-salto="sec-unidades">Guías por unidad</a>
        <a href="#curso-${encodeURIComponent(c.id)}" data-salto="sec-multimedia">Simulaciones y videos <span class="insignia ${recursos.length ? "" : "insignia--vacia"}">${recursos.length}</span></a>
      </nav>
      <section class="seccion seccion--curso" id="sec-unidades"><div class="contenedor">
        ${cabeceraSeccion("§ A", "Guías por unidad", "Guías de reforzamiento y solucionarios")}
        ${cuerpo}
      </div></section>
      <section class="seccion seccion--curso" id="sec-multimedia"><div class="contenedor">
        ${cabeceraSeccion("§ B", "Simulaciones y videos", "Para explorar y repasar a tu ritmo")}
        ${multimedia}
      </div></section>`;
  }

  function vistaDifusion() {
    const items = SITIO.difusion || [];
    const tarjeta = (d) => {
      const esVideo = d.tipo === "video";
      const esLista = esVideo && /[?&]list=/.test(d.url) && !/[?&]index=/.test(d.url) && !idYoutube(d.url);
      const boton = esVideo
        ? botonMaterial({ ...d, tipo: "video" }, "Ver video")
        : `<a class="boton boton--chico" href="${esc(d.url)}" target="_blank" rel="noopener">Leer artículo</a>`;
      // miniatura: la indicada en datos.js o, si es un video con enlace propio, la de YouTube
      const idv = esVideo ? idYoutube(d.url) : null;
      const mini = d.miniatura || (idv ? `https://i.ytimg.com/vi/${idv}/hqdefault.jpg` : "");
      const atributos = (boton.match(/data-visor="[^"]*" data-externo="[^"]*" data-titulo="[^"]*"/) || [""])[0];
      const figura = mini ? (atributos
        ? `<button class="item__mini" ${atributos} aria-label="Ver video: ${esc(d.titulo)}"><img src="${esc(mini)}" alt="" loading="lazy"><span class="item__play" aria-hidden="true">▶</span></button>`
        : `<a class="item__mini" href="${esc(d.url)}" target="_blank" rel="noopener"><img src="${esc(mini)}" alt="" loading="lazy"></a>`) : "";
      const credito = d.fuente ? `<span class="item__credito">${esVideo ? "Video" : "Fuente"}: <b>${esc(d.fuente)}</b>${esVideo ? " · YouTube" : ""}${d.duracion ? ` · ${esc(d.duracion)}` : ""}</span>` : "";
      return `
        <article class="item item--${esVideo ? "video" : "articulo"}${mini ? " item--con-mini" : ""}">
          ${figura}
          <span class="insignia" style="align-self:flex-start">${esVideo ? (esLista ? "Lista de videos" : "Video") : "Artículo"}</span>
          <span class="item__titulo">${esc(d.titulo)}</span>
          ${credito}
          ${d.descripcion ? `<p class="item__desc">${esc(d.descripcion)}</p>` : ""}
          <div class="item__acciones">${boton}</div>
        </article>`;
    };
    // agrupar por categoría, en el orden en que aparecen en datos.js
    const grupos = [];
    items.forEach((d) => {
      const cat = d.categoria || "Otros";
      let g = grupos.find((x) => x.cat === cat);
      if (!g) grupos.push(g = { cat, items: [] });
      g.items.push(d);
    });
    const indice = grupos.length > 1 ? `<nav class="saltos" aria-label="Temas del Observatorio" style="padding-top:0;margin-bottom:2rem">${grupos.map((g, i) =>
      `<a href="#difusion" data-salto="obs-${i}">${esc(g.cat)} <span class="insignia insignia--vacia">${g.items.length}</span></a>`).join("")}</nav>` : "";
    const cuerpo = items.length ? indice + grupos.map((g, i) => `
      <div class="obs-grupo" id="obs-${i}">
        ${grupos.length > 1 ? cabeceraSeccion(`§ ${String.fromCharCode(65 + i)}`, esc(g.cat), `${g.items.length} ${g.items.length === 1 ? "recurso" : "recursos"}`) : ""}
        <div class="lista">${g.items.map(tarjeta).join("")}</div>
      </div>`).join("")
      : `<div class="vacio">${planetaVacio}<p>Pronto compartiremos artículos y videos.</p></div>`;

    return `
      ${cabecera("§ 03", "Lecturas y videos", "Observatorio", "Matemáticas y ciencias más allá de la sala de clases.")}
      <div class="franja-modular" aria-hidden="true"></div>
      <section class="seccion"><div class="contenedor">${cuerpo}</div></section>`;
  }

  /* ---------- Órbita Curiosa ---------- */
  const marcoFoto = `<svg viewBox="0 0 120 80" aria-hidden="true"><rect x="1" y="1" width="118" height="78" fill="none" stroke="currentColor" stroke-dasharray="3 4"/><circle cx="60" cy="40" r="16" fill="none" stroke="currentColor"/><ellipse cx="60" cy="40" rx="30" ry="9" fill="none" stroke="currentColor" transform="rotate(-18 60 40)"/><circle cx="86" cy="31" r="2.6" fill="currentColor"/></svg>`;
  const claveArea = (a) => String(a || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  function vistaCuriosa() {
    const items = SITIO.curiosa || [];
    const areas = [];
    items.forEach((d) => { if (!areas.includes(d.area)) areas.push(d.area); });
    const premiados = items.filter((d) => d.premio).length;

    const ficha = (d, i) => {
      const num = String(i + 1).padStart(2, "0");
      const sello = d.premio
        ? `<span class="oc-sello"><span class="oc-sello__ig" aria-hidden="true">Ig</span>${esc(d.premio)}</span>`
        : `<span class="oc-sello oc-sello--otro">Curiosidad · sin premio</span>`;
      const foto = d.imagen
        ? `<img src="${esc(d.imagen)}" alt="${esc(d.imagenAlt || d.titulo)}" loading="lazy" onerror="this.closest('.oc-ficha__figura').classList.add('oc-ficha__figura--vacia');this.remove()">`
        : "";
      return `
        <article class="oc-ficha" data-area="${esc(claveArea(d.area))}" id="oc-${num}">
          <header class="oc-ficha__cabeza">
            <span class="oc-ficha__codigo">OC·${num}</span>
            <span class="oc-ficha__area">${esc(d.area)}</span>
            <span class="oc-ficha__anio">${esc(d.anio)}</span>
          </header>
          <figure class="oc-ficha__figura${foto ? "" : " oc-ficha__figura--vacia"}">
            ${sello}
            ${foto}
            <div class="oc-ficha__hueco" aria-hidden="true">${marcoFoto}<span>Espacio para imagen</span><small>${esc(d.imagen || "materiales/curiosa/…")}</small></div>
          </figure>
          <div class="oc-ficha__cuerpo">
            <h3 class="oc-ficha__titulo" lang="en">${esc(d.titulo)}</h3>
            ${d.traduccion ? `<p class="oc-ficha__traduccion">${esc(d.traduccion)}</p>` : ""}
            <dl class="oc-ficha__datos">
              <div><dt>Autores</dt><dd>${esc(d.autores)}</dd></div>
              <div><dt>Publicado en</dt><dd>${esc(d.revista)} · <b>${esc(d.anio)}</b></dd></div>
            </dl>
            <p class="oc-ficha__resumen">${esc(d.resumen)}</p>
            ${d.contexto ? `<div class="oc-ficha__contexto"><span class="oc-ficha__rotulo">Quiénes lo hicieron</span><p>${esc(d.contexto)}</p></div>` : ""}
            ${d.conexion ? `<p class="oc-ficha__clase"><span class="oc-ficha__rotulo">En la sala de clases</span>${esc(d.conexion)}</p>` : ""}
            <div class="oc-ficha__pie">
              <a class="boton boton--chico" href="${esc(d.enlace)}" target="_blank" rel="noopener">Leer el artículo original <span aria-hidden="true">↗</span></a>
              ${d.doi ? `<span class="oc-ficha__doi">DOI ${esc(d.doi)}</span>` : ""}
            </div>
          </div>
        </article>`;
    };

    const filtros = areas.length > 1 ? `
      <div class="oc-filtros" role="group" aria-label="Filtrar por área">
        <button type="button" class="oc-filtro" data-filtro="todas" aria-pressed="true">Todas <span class="insignia insignia--vacia">${items.length}</span></button>
        ${areas.map((a) => `<button type="button" class="oc-filtro" data-filtro="${esc(claveArea(a))}" aria-pressed="false">${esc(a)} <span class="insignia insignia--vacia">${items.filter((d) => d.area === a).length}</span></button>`).join("")}
      </div>` : "";

    const cuerpo = items.length ? `
      <aside class="oc-intro">
        <div class="oc-intro__sello" aria-hidden="true"><span>Ig</span><small>Nobel</small></div>
        <div>
          <h2>¿Qué es el Premio Ig Nobel?</h2>
          <p>Desde 1991, la revista <i>Annals of Improbable Research</i> premia investigaciones que <b>primero hacen reír y después hacen pensar</b>. Todas las de esta sección son reales y salieron en revistas científicas. ${premiados} de ellas ganaron un Ig Nobel; las demás son rarezas que merecían estar aquí.</p>
        </div>
      </aside>
      ${filtros}
      <div class="oc-rejilla">${items.map(ficha).join("")}</div>
      <p class="oc-vacio" hidden>No hay fichas en esta área.</p>`
      : `<div class="vacio">${planetaVacio}<p>Pronto habrá investigaciones curiosas.</p></div>`;

    return `
      ${cabecera("§ 04", "Ciencia improbable", "Órbita Curiosa", "Investigaciones reales, publicadas en revistas serias, sobre las preguntas más inesperadas de la física y la matemática.")}
      <div class="franja-modular" aria-hidden="true"></div>
      <section class="seccion"><div class="contenedor">${cuerpo}</div></section>`;
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-filtro]");
    if (!b) return;
    const f = b.dataset.filtro;
    document.querySelectorAll("[data-filtro]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    let visibles = 0;
    document.querySelectorAll(".oc-ficha").forEach((c) => { const ver = f === "todas" || c.dataset.area === f; c.hidden = !ver; if (ver) visibles++; });
    const v = document.querySelector(".oc-vacio"); if (v) v.hidden = visibles > 0;
  });

  function vistaTareas() {
    let url = (SITIO.formularioTareas || "").trim();
    let cuerpo;
    if (url) {
      if (/docs\.google\.com\/forms/.test(url) && !/embedded=true/.test(url)) {
        url += (url.includes("?") ? "&" : "?") + "embedded=true";
      }
      cuerpo = `
        <div class="aviso" style="margin-bottom:1.4rem">
          <h3>Antes de enviar</h3>
          <ul class="pasos">
            <li>Ingresa con tu cuenta de Google (la del colegio, si tienes una).</li>
            <li>Indica tu nombre, curso y la tarea que entregas.</li>
            <li>Sube tu archivo (PDF o foto clara) y presiona <strong>Enviar</strong>.</li>
          </ul>
          <a class="boton boton--chico boton--borde" href="${esc(url.replace("embedded=true", ""))}" target="_blank" rel="noopener">Abrir el formulario en pestaña nueva</a>
        </div>
        <div class="tareas-marco"><iframe src="${esc(url)}" title="Formulario de entrega de tareas" loading="lazy">Cargando…</iframe></div>`;
    } else {
      cuerpo = `
        <div class="aviso">
          <h3>El formulario de entrega aún no está activo</h3>
          <p>Mientras tanto, sigue las indicaciones de tu profesor en clases.</p>
        </div>`;
    }
    return `
      ${cabecera("§ 04", "Entregas", "Entregar tarea", "Tu trabajo llega directamente al profesor.")}
      <section class="seccion"><div class="contenedor">${cuerpo}</div></section>`;
  }


  /* ---------- Sección Juegos: estética arcade ---------- */
  function rayosArcade() {
    let l = "";
    for (let i = 0; i < 96; i++) {
      const ang = (i / 96) * Math.PI * 2 + (i % 3) * 0.012;
      const r0 = 150 + (i % 5) * 18, r1 = 1300;
      const x0 = 500 + Math.cos(ang) * r0, y0 = 300 + Math.sin(ang) * r0 * 0.62;
      const x1 = 500 + Math.cos(ang) * r1, y1 = 300 + Math.sin(ang) * r1 * 0.62;
      l += `<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke-width="${i % 4 === 0 ? 1.6 : 0.7}"/>`;
    }
    let d = "";
    for (let y = 6; y < 600; y += 12) for (let x = 6; x < 1000; x += 12) {
      const dist = Math.hypot((x - 500) / 1.6, y - 300);
      if (dist > 250) continue;
      const r = 2.6 * (1 - dist / 250);
      if (r > 0.3) d += `<circle cx="${x}" cy="${y}" r="${r.toFixed(2)}"/>`;
    }
    return `<svg class="arcade__rayos" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="#2C395C" stroke-opacity=".22">${l}</g>
      <g fill="#2C395C" fill-opacity=".5">${d}</g>
      <g fill="none" stroke="#2C395C" stroke-opacity=".5"><circle cx="500" cy="300" r="118"/><circle cx="500" cy="300" r="126" stroke-dasharray="2 5"/></g>
      <circle cx="500" cy="300" r="70" fill="#E2571E"/>
      <path d="M430 318 h140 M436 336 h128" stroke="#A92717" stroke-width="7"/>
    </svg>`;
  }

  function barras(ancho = 140) {
    const anchos = [2, 1, 3, 1, 1, 4, 1, 2, 1, 3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 3, 1, 1, 2, 4, 1, 2, 1, 3];
    let x = 0, r = "";
    anchos.forEach((w, i) => { if (i % 2 === 0) r += `<rect x="${x}" width="${w}" height="20"/>`; x += w + 1; });
    return `<svg class="arcade__barras" viewBox="0 0 ${x} 20" style="width:${ancho}px" aria-hidden="true"><g fill="#2C395C">${r}</g></svg>`;
  }

  function vistaJuegos() {
    const cats = SITIO.juegos || [];
    const lista = cats.length ? `<div class="cartuchos">${cats.map((j, ji) => {
      const href = j.url ? esc(j.url) : `#juego-${encodeURIComponent(j.id)}`;
      const externo = /^https?:/.test(j.url || "") ? ` target="_blank" rel="noopener"` : "";
      const n = String(ji + 1).padStart(2, "0");
      return `
      <a class="cartucho" href="${href}"${externo}>
        <span class="cartucho__etiqueta"><span>J${n}</span><span>1 jugador</span></span>
        <span class="cartucho__cuerpo">
          <h3 class="cartucho__titulo">${esc(j.nombre)}</h3>
          <p class="cartucho__desc">${esc(j.descripcion || "")}</p>
          <span class="cartucho__pie">
            <span class="cartucho__start">▶ Jugar</span>
            <span class="cartucho__codigo">ORB-J${n} · 2026</span>
          </span>
        </span>
      </a>`;
    }).join("")}</div>` : `<div class="vacio">${planetaVacio}<p>Pronto habrá juegos.</p></div>`;
    return `
      <section class="arcade">
        ${rayosArcade()}
        <div class="contenedor arcade__interior">
          <div class="arcade__datos arcade__datos--izq">SYS.ORBITA // 01<br>θ = 45° · r = 1,0<br>Δt = 60 s</div>
          <div class="arcade__datos arcade__datos--der">Créditos 00<br>Récord ———<br>Nivel ∞</div>
          <p class="arcade__sup">Órbita Matemática presenta</p>
          <h1 class="arcade__titulo" data-texto="Juegos">Juegos</h1>
          <p class="arcade__bajada">Entrena tu cálculo mental jugando</p>
          <p class="arcade__ficha">Inserta una ficha<span class="arcade__cursor">_</span></p>
          <div class="arcade__pie">
            <span>Cálculo · velocidad · precisión</span>
            ${barras(120)}
          </div>
        </div>
      </section>
      <section class="seccion seccion--arcade"><div class="contenedor">${lista}</div></section>`;
  }

  function vistaJuego(id) {
    const j = (SITIO.juegos || []).find((x) => x.id === id);
    if (!j) return vistaNoEncontrada();
    const enlaces = (j.enlaces || []).length ? `
      <div class="seccion__cabecera" style="margin-top:3rem"><h2>Más para jugar</h2></div>
      <div class="lista">${j.enlaces.map((e) => `
        <article class="item item--simulacion">
          <span class="item__titulo">${esc(e.titulo)}</span>
          ${e.descripcion ? `<p class="item__desc">${esc(e.descripcion)}</p>` : ""}
          <div class="item__acciones"><a class="boton boton--chico" href="${esc(e.url)}" target="_blank" rel="noopener">Jugar</a></div>
        </article>`).join("")}</div>` : "";
    return `
      ${cabecera("§ 02", "Juegos", esc(j.nombre), esc(j.descripcion || ""), `<a href="#juegos">← Todos los juegos</a>`)}
      <section class="seccion"><div class="contenedor">
        ${j.integrado === "kakooma" ? `<div id="kakooma"></div>` : ""}
        ${enlaces}
      </div></section>`;
  }

  /* ---------- Kakooma ---------- */
  const KAK_MODOS = {
    suma:   { nombre: "Suma",            op: (a, b) => a + b, signo: "+" },
    mult:   { nombre: "Multiplicación",  op: (a, b) => a * b, signo: "·" },
    entero: { nombre: "Números enteros", op: (a, b) => a + b, signo: "+" }
  };
  const KAK_NIVELES = {
    basico:     { nombre: "Básico",     cantidad: 4, max: { suma: 10, mult: 6,  entero: 8 } },
    intermedio: { nombre: "Intermedio", cantidad: 5, max: { suma: 25, mult: 10, entero: 15 } },
    avanzado:   { nombre: "Avanzado",   cantidad: 6, max: { suma: 60, mult: 15, entero: 30 } }
  };
  const RONDAS = 10;
  const azar = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const fmt = (n) => (n < 0 ? `(−${-n})` : String(n));
  const fmtNum = (n) => (n < 0 ? `−${-n}` : String(n));

  function soluciones(nums, op) {
    const sol = [];
    nums.forEach((x, i) => {
      for (let j = 0; j < nums.length; j++) for (let k = j + 1; k < nums.length; k++) {
        if (j !== i && k !== i && op(nums[j], nums[k]) === x) sol.push({ i, a: nums[j], b: nums[k] });
      }
    });
    return sol;
  }

  function generarRonda(modo, nivel) {
    const M = KAK_MODOS[modo], N = KAK_NIVELES[nivel], max = N.max[modo];
    const min = modo === "entero" ? -max : (modo === "mult" ? 2 : 1);
    for (let intento = 0; intento < 500; intento++) {
      let a = azar(min, max), b = azar(min, max);
      if (modo === "entero" && a >= 0 && b >= 0) a = -azar(1, max);
      const t = M.op(a, b);
      const set = new Set([a, b, t]);
      if (set.size < 3) continue;
      const lo = modo === "mult" ? 2 : min, hi = modo === "mult" ? max * max : (modo === "entero" ? max : max * 2);
      let guard = 0;
      while (set.size < N.cantidad && guard++ < 200) {
        // distractores cercanos al objetivo para que no sea obvio
        const d = Math.random() < 0.5 ? t + azar(-6, 6) : azar(lo, hi);
        if (d !== 0) set.add(d);
      }
      const nums = [...set].sort(() => Math.random() - 0.5);
      const sol = soluciones(nums, M.op);
      const unicos = new Set(sol.map((x) => x.i));
      if (unicos.size === 1 && nums.length === N.cantidad) return { nums, sol: sol[0] };
    }
    return generarRonda("suma", "basico");
  }

  function montarKakooma(raiz) {
    let modo = "suma", nivel = "basico", ronda = 0, aciertos = 0, inicio = 0, actual = null, bloqueado = false, reloj = null;

    function selector(nombre, opciones, valor) {
      return `<div class="kak__grupo" role="radiogroup" aria-label="${nombre}">${Object.entries(opciones).map(([k, v]) =>
        `<button class="kak__opcion ${k === valor ? "activa" : ""}" data-${nombre}="${k}" role="radio" aria-checked="${k === valor}">${v.nombre}</button>`).join("")}</div>`;
    }

    function pantallaInicio() {
      clearInterval(reloj);
      raiz.innerHTML = `
        <div class="kak">
          <div class="kak__panel">
            <h2>¿Cómo se juega?</h2>
            <p>En cada ronda aparecen varios números. <strong>Solo uno</strong> de ellos es el resultado de operar otros dos. ¡Encuéntralo lo más rápido que puedas!</p>
            <p class="kak__ejemplo">Ejemplo: <span>3</span><span>9</span><span>5</span><span>4</span> → la respuesta es <strong>9</strong>, porque 5 + 4 = 9.</p>
            <h3>Operación</h3>${selector("modo", KAK_MODOS, modo)}
            <h3>Nivel</h3>${selector("nivel", KAK_NIVELES, nivel)}
            <button class="boton kak__empezar" id="kak-empezar">¡Despegar! · ${RONDAS} rondas</button>
          </div>
        </div>`;
      raiz.querySelectorAll("[data-modo]").forEach((b) => b.onclick = () => { modo = b.dataset.modo; pantallaInicio(); });
      raiz.querySelectorAll("[data-nivel]").forEach((b) => b.onclick = () => { nivel = b.dataset.nivel; pantallaInicio(); });
      raiz.querySelector("#kak-empezar").onclick = empezar;
    }

    function empezar() {
      ronda = 0; aciertos = 0; inicio = Date.now();
      clearInterval(reloj);
      reloj = setInterval(() => { const t = raiz.querySelector("#kak-tiempo"); if (t) t.textContent = segundos(); }, 200);
      siguiente();
    }
    const segundos = () => ((Date.now() - inicio) / 1000).toFixed(1).replace(".", ",") + " s";

    function siguiente() {
      if (ronda >= RONDAS) return fin();
      ronda++; bloqueado = false;
      actual = generarRonda(modo, nivel);
      raiz.innerHTML = `
        <div class="kak">
          <div class="kak__marcador">
            <span>Ronda <strong>${ronda}</strong> de ${RONDAS}</span>
            <span>Aciertos <strong>${aciertos}</strong></span>
            <span>Tiempo <strong id="kak-tiempo">${segundos()}</strong></span>
          </div>
          <div class="kak__barra"><span style="width:${((ronda - 1) / RONDAS) * 100}%"></span></div>
          <p class="kak__consigna">¿Qué número es ${modo === "mult" ? "el producto" : "la suma"} de otros dos?</p>
          <div class="kak__tablero kak__tablero--${actual.nums.length}">
            ${actual.nums.map((n, i) => `<button class="kak__num" data-i="${i}">${fmtNum(n)}</button>`).join("")}
          </div>
          <p class="kak__retro" id="kak-retro" aria-live="polite">&nbsp;</p>
          <div class="kak__pie"><button class="boton boton--chico boton--borde" id="kak-salir">Salir</button></div>
        </div>`;
      raiz.querySelectorAll(".kak__num").forEach((b) => b.onclick = () => responder(+b.dataset.i, b));
      raiz.querySelector("#kak-salir").onclick = pantallaInicio;
    }

    function responder(i, boton) {
      if (bloqueado) return;
      const M = KAK_MODOS[modo], s = actual.sol;
      const retro = raiz.querySelector("#kak-retro");
      const explic = `${fmtNum(actual.nums[s.i])} = ${fmt(s.a)} ${M.signo} ${fmt(s.b)}`;
      const botones = raiz.querySelectorAll(".kak__num");
      if (i === s.i) {
        bloqueado = true; aciertos++;
        boton.classList.add("correcto");
        botones.forEach((b) => { const v = actual.nums[+b.dataset.i]; if (v === s.a || v === s.b) b.classList.add("parte"); });
        retro.innerHTML = `<strong>¡Correcto!</strong> ${explic}`;
        setTimeout(siguiente, 900);
      } else {
        bloqueado = true;
        boton.classList.add("error");
        raiz.querySelectorAll(".kak__num")[s.i].classList.add("correcto");
        retro.innerHTML = `<strong>Casi.</strong> La respuesta era ${explic}`;
        setTimeout(siguiente, 1900);
      }
    }

    function fin() {
      clearInterval(reloj);
      const t = segundos();
      const msj = aciertos === RONDAS ? "¡Misión perfecta!" : aciertos >= 7 ? "¡Gran vuelo!" : aciertos >= 4 ? "Buen intento, sigue practicando." : "Vuelve a intentarlo, ¡tú puedes!";
      raiz.innerHTML = `
        <div class="kak">
          <div class="kak__panel kak__panel--fin">
            <h2>${msj}</h2>
            <div class="kak__resultado">
              <div><span>${aciertos}/${RONDAS}</span>aciertos</div>
              <div><span>${t}</span>tiempo total</div>
            </div>
            <p>${KAK_MODOS[modo].nombre} · nivel ${KAK_NIVELES[nivel].nombre.toLowerCase()}</p>
            <div class="heroe__botones" style="justify-content:center">
              <button class="boton" id="kak-otra">Jugar otra vez</button>
              <button class="boton boton--borde" id="kak-config">Cambiar nivel</button>
            </div>
          </div>
        </div>`;
      raiz.querySelector("#kak-otra").onclick = empezar;
      raiz.querySelector("#kak-config").onclick = pantallaInicio;
    }

    pantallaInicio();
    return () => clearInterval(reloj);
  }
  let desmontarJuego = null;

  function vistaNoEncontrada() {
    return `
      <section class="seccion"><div class="contenedor">
        <div class="vacio">${planetaVacio}<h2>Perdidos en el espacio</h2><p>No encontramos esta página.</p><p style="margin-top:1rem"><a class="boton" href="#inicio">Volver al inicio</a></p></div>
      </div></section>`;
  }

  /* ---------- enrutador ---------- */
  function navegar() {
    const ruta = decodeURIComponent((location.hash || "").replace(/^#\/?/, ""));
    if (ruta === "contenido") { main.focus(); return; }
    const vista = ruta.startsWith("curso-") ? "curso" : ruta.startsWith("juego-") ? "juego" : (ruta || "inicio");
    if (desmontarJuego) { desmontarJuego(); desmontarJuego = null; }
    let html, activa = "inicio", titulo = SITIO.titulo;

    if (vista === "inicio") html = vistaInicio();
    else if (vista === "cursos") { html = vistaCursos(); activa = "cursos"; titulo = "Cursos · " + SITIO.titulo; }
    else if (vista === "curso") {
      const id = ruta.slice(6);
      const c = cursoPorId(id);
      html = vistaCurso(id); activa = "cursos";
      if (c) titulo = `${c.asignatura} ${c.nombre} · ${SITIO.titulo}`;
    }
    else if (vista === "juegos") { html = vistaJuegos(); activa = "juegos"; titulo = "Juegos · " + SITIO.titulo; }
    else if (vista === "juego") {
      const j = (SITIO.juegos || []).find((x) => x.id === ruta.slice(6));
      html = vistaJuego(ruta.slice(6)); activa = "juegos";
      if (j) titulo = `${j.nombre} · ${SITIO.titulo}`;
    }
    else if (vista === "difusion") { html = vistaDifusion(); activa = "difusion"; titulo = "Observatorio · " + SITIO.titulo; }
    else if (vista === "curiosa") { html = vistaCuriosa(); activa = "curiosa"; titulo = "Órbita Curiosa · " + SITIO.titulo; }
    else if (vista === "tareas") { html = vistaTareas(); activa = "tareas"; titulo = "Entregar tarea · " + SITIO.titulo; }
    else html = vistaNoEncontrada();

    main.innerHTML = html;
    main.dataset.vista = vista;
    const k = document.getElementById("kakooma");
    if (k) desmontarJuego = montarKakooma(k);
    document.title = titulo;
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("activo", a.dataset.ruta === activa));
    $("#nav").classList.remove("abierto");
    $("#menu-boton").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }

  /* ---------- saltos dentro de la página de un curso ---------- */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-salto]");
    if (!a) return;
    e.preventDefault();
    const destino = document.getElementById(a.dataset.salto);
    if (destino) destino.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------- visor de videos y simulaciones ---------- */
  const visor = $("#visor");
  const iframe = $("#visor-iframe");
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-visor]");
    if (!b) return;
    $("#visor-titulo").textContent = b.dataset.titulo || "Material";
    $("#visor-externo").href = b.dataset.externo || b.dataset.visor;
    iframe.src = b.dataset.visor;
    visor.showModal();
  });
  function cerrarVisor() { visor.close(); }
  $("#visor-cerrar").addEventListener("click", cerrarVisor);
  visor.addEventListener("close", () => { iframe.src = "about:blank"; });
  visor.addEventListener("click", (e) => { if (e.target === visor) cerrarVisor(); });

  /* ---------- menú móvil ---------- */
  $("#menu-boton").addEventListener("click", () => {
    const nav = $("#nav");
    const abierto = nav.classList.toggle("abierto");
    $("#menu-boton").setAttribute("aria-expanded", String(abierto));
  });

  /* ---------- inicio ---------- */
  $("#marca-titulo").textContent = SITIO.titulo;
  $("#pie-docente").textContent = SITIO.docente;
  $("#pie-colegio").textContent = SITIO.colegio;
  window.addEventListener("hashchange", navegar);
  navegar();
})();
