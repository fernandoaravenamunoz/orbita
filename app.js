/* =========================================================
   Lógica del sitio. No necesitas editar este archivo:
   el material se agrega en datos.js
   ========================================================= */
(function () {
  "use strict";

  const TIPOS = {
    guia:         { plural: "Guías de reforzamiento", singular: "Guía",         icono: "▤", accion: "Abrir guía" },
    video:        { plural: "Videos",                 singular: "Video",        icono: "▶", accion: "Ver video" },
    solucionario: { plural: "Solucionarios y pautas", singular: "Solucionario", icono: "✓", accion: "Ver pauta" },
    simulacion:   { plural: "Simulaciones",           singular: "Simulación",   icono: "◎", accion: "Abrir simulación" }
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

  function contarMateriales(curso) {
    return (curso.unidades || []).reduce((n, u) => n + (u.materiales || []).length, 0);
  }

  function cursoPorId(id) { return SITIO.cursos.find((c) => c.id === id); }

  const planetaVacio = `<svg class="vacio__planeta" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="16" fill="#2C395C"/><ellipse cx="40" cy="40" rx="34" ry="10" fill="none" stroke="#B9A727" stroke-width="3" transform="rotate(-18 40 40)"/><circle cx="66" cy="20" r="4" fill="#FF5500"/></svg>`;

  /* ---------- tarjetas de material ---------- */
  function botonMaterial(m, etiqueta) {
    const url = esc(m.url);
    if (m.tipo === "video") {
      const id = idYoutube(m.url);
      if (id) return `<button class="boton boton--chico" data-visor="https://www.youtube-nocookie.com/embed/${id}?rel=0" data-externo="https://www.youtube.com/watch?v=${id}" data-titulo="${esc(m.titulo)}">${etiqueta}</button>`;
    }
    if (m.tipo === "simulacion") {
      return `<button class="boton boton--chico" data-visor="${esc(embedGeoGebra(m.url))}" data-externo="${url}" data-titulo="${esc(m.titulo)}">${etiqueta}</button>`;
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
    SITIO.cursos.forEach((c) => (c.unidades || []).forEach((u) => (u.materiales || []).forEach((m) => todos.push({ m, c, u }))));
    todos.sort((a, b) => String(b.m.fecha || "").localeCompare(String(a.m.fecha || "")));
    const recientes = todos.slice(0, 5);

    const novedades = recientes.length ? recientes.map(({ m, c, u }) => {
      const [, mes, dia] = String(m.fecha || "").split("-").map(Number);
      const t = TIPOS[m.tipo] || TIPOS.guia;
      return `
        <div class="novedad">
          <div class="novedad__fecha">${dia || "–"}<small>${mes ? MESES[mes - 1] : ""}</small></div>
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
          <div>
            <span class="heroe__etiqueta">Matemática · Física</span>
            <h1>${esc(SITIO.titulo).replace(/(\S+)$/, "<em>$1</em>")}</h1>
            <p>${esc(SITIO.subtitulo)}</p>
            <div class="heroe__botones">
              <a class="boton" href="#cursos">Buscar mi curso</a>
              <a class="boton boton--claro" href="#tareas">Entregar una tarea</a>
            </div>
          </div>
          <svg class="heroe__arte" viewBox="0 0 400 400" aria-hidden="true">
            <g class="estrellas"><circle cx="40" cy="60" r="2.5"/><circle cx="350" cy="40" r="2"/><circle cx="370" cy="300" r="3"/><circle cx="60" cy="340" r="2"/><circle cx="300" cy="370" r="1.8"/><circle cx="20" cy="200" r="1.6"/></g>
            <circle cx="200" cy="200" r="168" fill="none" stroke="#DEDED2" stroke-opacity=".18" stroke-width="2" stroke-dasharray="4 10"/>
            <g class="orbita-giro">
              <circle cx="200" cy="200" r="128" fill="none" stroke="#B9A727" stroke-width="2"/>
              <circle cx="328" cy="200" r="14" fill="#B9A727"/>
              <circle cx="110" cy="110" r="9" fill="#DEDED2"/>
            </g>
            <circle cx="200" cy="200" r="78" fill="#FF5500"/>
            <path d="M136 236 h128 M150 254 h100" stroke="#A92717" stroke-width="10"/>
            <ellipse cx="200" cy="200" rx="150" ry="34" fill="none" stroke="#DEDED2" stroke-width="7" transform="rotate(-16 200 200)"/>
            <text x="200" y="208" text-anchor="middle" font-family="Righteous, sans-serif" font-size="44" fill="#2C395C">π</text>
          </svg>
        </div>
      </section>

      <section class="seccion">
        <div class="contenedor">
          <div class="accesos">
            <a class="acceso" href="#cursos"><span class="acceso__icono">▤</span><h3>Material por curso</h3><p>Guías, videos, pautas y simulaciones ordenados por unidad.</p></a>
            <a class="acceso" href="#juegos"><span class="acceso__icono">✚</span><h3>Juegos</h3><p>Desafíos de cálculo mental, como los Kakoomas matemáticos.</p></a>
            <a class="acceso" href="#difusion"><span class="acceso__icono">✦</span><h3>Difusión científica</h3><p>Artículos y videos sobre matemáticas y ciencias.</p></a>
            <a class="acceso" href="#tareas"><span class="acceso__icono">↑</span><h3>Entregar tarea</h3><p>Sube tu trabajo y llega directo al profesor.</p></a>
          </div>
        </div>
      </section>

      <section class="seccion" style="padding-top:0">
        <div class="contenedor">
          <div class="seccion__cabecera"><h2>Lo más reciente</h2><p class="seccion__nota">Últimos materiales publicados</p></div>
          <div class="novedades">${novedades}</div>
        </div>
      </section>`;
  }

  function vistaCursos() {
    const secciones = [];
    SITIO.cursos.forEach((c) => { if (!secciones.includes(c.seccion)) secciones.push(c.seccion); });
    const grupos = secciones.map((s) => `
      <div class="grupo">
        <h2 class="grupo__titulo">${esc(s)}</h2>
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
      <section class="titulo-pagina"><div class="contenedor"><h1>Cursos</h1><p>Elige tu curso para ver el material de cada unidad.</p></div></section>
      <section class="seccion"><div class="contenedor">${grupos}</div></section>`;
  }

  function vistaCurso(id) {
    const c = cursoPorId(id);
    if (!c) return vistaNoEncontrada();
    const unidades = c.unidades || [];

    const cuerpo = unidades.length ? unidades.map((u, i) => {
      const mats = u.materiales || [];
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
          <summary>${esc(u.nombre)} <span class="insignia ${mats.length ? "" : "insignia--vacia"}">${mats.length || "Pronto"}</span></summary>
          <div class="unidad__cuerpo">${porTipo || `<div class="vacio">${planetaVacio}<p>Aún no hay material en esta unidad.</p></div>`}</div>
        </details>`;
    }).join("") : `<div class="vacio">${planetaVacio}<p>Pronto habrá material para este curso.</p></div>`;

    return `
      <section class="titulo-pagina">
        <div class="contenedor">
          <div class="migas"><a href="#cursos">← Todos los cursos</a></div>
          <h1>${esc(c.asignatura)} · ${esc(c.nombre)}</h1>
          <p>${esc(c.seccion)}</p>
        </div>
      </section>
      <section class="seccion"><div class="contenedor">${cuerpo}</div></section>`;
  }

  function vistaDifusion() {
    const items = (SITIO.difusion || []).slice().sort((a, b) => String(b.fecha || "").localeCompare(String(a.fecha || "")));
    const lista = items.length ? `<div class="lista">${items.map((d) => {
      const esVideo = d.tipo === "video";
      const meta = [d.fuente, d.fecha ? fechaLarga(d.fecha) : ""].filter(Boolean).map(esc).join(" · ");
      const boton = esVideo
        ? botonMaterial({ ...d, tipo: "video" }, "Ver video")
        : `<a class="boton boton--chico" href="${esc(d.url)}" target="_blank" rel="noopener">Leer artículo</a>`;
      return `
        <article class="item item--${esVideo ? "video" : "articulo"}">
          <span class="insignia" style="align-self:flex-start">${esVideo ? "Video" : "Artículo"}</span>
          <span class="item__titulo">${esc(d.titulo)}</span>
          ${meta ? `<span class="item__meta">${meta}</span>` : ""}
          ${d.descripcion ? `<p class="item__desc">${esc(d.descripcion)}</p>` : ""}
          <div class="item__acciones">${boton}</div>
        </article>`;
    }).join("")}</div>` : `<div class="vacio">${planetaVacio}<p>Pronto compartiremos artículos y videos.</p></div>`;

    return `
      <section class="titulo-pagina"><div class="contenedor"><h1>Difusión científica</h1><p>Matemáticas y ciencias más allá de la sala de clases.</p></div></section>
      <section class="seccion"><div class="contenedor">${lista}</div></section>`;
  }

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
      <section class="titulo-pagina"><div class="contenedor"><h1>Entregar tarea</h1><p>Tu trabajo llega directamente al profesor.</p></div></section>
      <section class="seccion"><div class="contenedor">${cuerpo}</div></section>`;
  }


  function vistaJuegos() {
    const cats = SITIO.juegos || [];
    const lista = cats.length ? `<div class="accesos">${cats.map((j) => `
      <a class="acceso" href="#juego-${encodeURIComponent(j.id)}">
        <span class="acceso__icono">✚</span><h3>${esc(j.nombre)}</h3><p>${esc(j.descripcion || "")}</p>
      </a>`).join("")}</div>` : `<div class="vacio">${planetaVacio}<p>Pronto habrá juegos.</p></div>`;
    return `
      <section class="titulo-pagina"><div class="contenedor"><h1>Juegos</h1><p>Entrena tu cálculo mental jugando.</p></div></section>
      <section class="seccion"><div class="contenedor">${lista}</div></section>`;
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
      <section class="titulo-pagina">
        <div class="contenedor">
          <div class="migas"><a href="#juegos">← Todos los juegos</a></div>
          <h1>${esc(j.nombre)}</h1><p>${esc(j.descripcion || "")}</p>
        </div>
      </section>
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
    else if (vista === "difusion") { html = vistaDifusion(); activa = "difusion"; titulo = "Difusión científica · " + SITIO.titulo; }
    else if (vista === "tareas") { html = vistaTareas(); activa = "tareas"; titulo = "Entregar tarea · " + SITIO.titulo; }
    else html = vistaNoEncontrada();

    main.innerHTML = html;
    const k = document.getElementById("kakooma");
    if (k) desmontarJuego = montarKakooma(k);
    document.title = titulo;
    document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("activo", a.dataset.ruta === activa));
    $("#nav").classList.remove("abierto");
    $("#menu-boton").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }

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
