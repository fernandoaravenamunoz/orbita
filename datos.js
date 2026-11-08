/* =====================================================================
   DATOS DEL SITIO — este es el ÚNICO archivo que necesitas editar
   para agregar o quitar material.
   ---------------------------------------------------------------------
   Tipos de material disponibles:
     "guia"         → guía de reforzamiento (PDF u otro documento)
     "video"        → video de YouTube (se ve dentro del sitio)
     "solucionario" → pauta o solucionario (PDF u otro documento)
     "simulacion"   → PhET, GeoGebra u otra simulación (se abre dentro del sitio)

   Para agregar material, copia una línea de ejemplo, pégala en la
   unidad que corresponda y cambia los datos. Cuida las comas entre
   elementos y que cada texto vaya entre comillas.
   ===================================================================== */

const SITIO = {
  titulo: "Órbita Matemática",
  subtitulo: "Material de matemáticas y física para mis estudiantes",
  docente: "Prof. Fernando Aravena",
  colegio: "Temuco, Chile",

  /* Enlace al Formulario de Google para entregar tareas.
     Usa el link que da Google Forms en "Enviar" → pestaña "< >" (insertar),
     o el link normal terminado en /viewform. Déjalo vacío ("") mientras no lo tengas. */
  formularioTareas: "",

  /* ---------------------------------------------------------------
     CURSOS — agrupados por sección. Borra los que no uses.
     --------------------------------------------------------------- */
  cursos: [
    // ===== EDUCACIÓN BÁSICA =====
    { id: "7basico", seccion: "Educación Básica", nombre: "7° Básico", asignatura: "Matemática", unidades: [] },
    { id: "8basico", seccion: "Educación Básica", nombre: "8° Básico", asignatura: "Matemática", unidades: [] },

    // ===== EDUCACIÓN MEDIA =====
    {
      id: "1medio", seccion: "Educación Media", nombre: "I° Medio", asignatura: "Matemática",
      unidades: [
        {
          nombre: "Unidad 1 · Números",
          materiales: [
            { tipo: "guia", titulo: "Guía de reforzamiento: números racionales", url: "materiales/ejemplo-guia.pdf", fecha: "2026-11-06", descripcion: "Ejemplo: reemplaza este archivo por tu guía." },
            { tipo: "solucionario", titulo: "Solucionario: números racionales", url: "materiales/ejemplo-guia.pdf", fecha: "2026-11-06" }
          ]
        },
        {
          nombre: "Unidad 2 · Álgebra y funciones",
          materiales: [
            { tipo: "simulacion", titulo: "Graficando líneas (PhET)", url: "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_es.html", fecha: "2026-11-07", descripcion: "Explora la pendiente y el coeficiente de posición." }
            // Ejemplo de video (borra las dos barras // del inicio para activarlo):
            // ,{ tipo: "video", titulo: "Productos notables", url: "https://www.youtube.com/watch?v=CODIGO_DEL_VIDEO", fecha: "2026-11-07" }
          ]
        },
        { nombre: "Unidad 3 · Geometría", materiales: [] },
        { nombre: "Unidad 4 · Probabilidad y estadística", materiales: [] }
      ]
    },
    { id: "2medio", seccion: "Educación Media", nombre: "II° Medio", asignatura: "Matemática", unidades: [] },
    { id: "3medio", seccion: "Educación Media", nombre: "III° Medio", asignatura: "Matemática", unidades: [] },
    { id: "4medio", seccion: "Educación Media", nombre: "IV° Medio", asignatura: "Matemática", unidades: [] },

    // ===== FÍSICA =====
    { id: "fisica1m", seccion: "Física", nombre: "I° Medio", asignatura: "Física", unidades: [] },
    { id: "fisica2m", seccion: "Física", nombre: "II° Medio", asignatura: "Física", unidades: [] }
  ],

  /* ---------------------------------------------------------------
     JUEGOS — cada título lleva directo a la página del juego.
     url: archivo dentro de la carpeta "juegos" o un enlace externo (https://...).
     --------------------------------------------------------------- */
  juegos: [
    {
      nombre: "Kakoomas matemáticos",
      descripcion: "Encuentra el número que es la suma de otros dos. Rapidez mental y cálculo.",
      url: "juegos/kakoomas.html"
    },
    {
      nombre: "Cálculo mental",
      descripcion: "Contrarreloj, lluvia de meteoritos y cadena mental con las cuatro operaciones.",
      url: "juegos/calculo-mental.html"
    },
    {
      nombre: "Pirámide de ecuaciones",
      descripcion: "Elige 3 losetas y alcanza el número objetivo respetando la prioridad de las operaciones.",
      url: "juegos/piramide-ecuaciones.html"
    }
    // Para agregar otro juego: sube su archivo .html a la carpeta "juegos"
    // y copia uno de los bloques de arriba (con su coma).
  ],

  /* ---------------------------------------------------------------
     OBSERVATORIO (difusión científica) — artículos y videos de interés general.
     tipo: "articulo" o "video"
     --------------------------------------------------------------- */
  difusion: [
    { tipo: "articulo", titulo: "El número π", fuente: "Wikipedia", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_%CF%80", fecha: "2026-11-07", descripcion: "Historia y curiosidades de una de las constantes más famosas." },
    { tipo: "articulo", titulo: "Simulaciones interactivas PhET", fuente: "Universidad de Colorado", url: "https://phet.colorado.edu/es/", fecha: "2026-11-05", descripcion: "Cientos de simulaciones gratuitas de física y matemáticas." }
  ]
};
