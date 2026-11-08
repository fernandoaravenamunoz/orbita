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
    {
      id: "7basico", seccion: "Educación Básica", nombre: "7° Básico", asignatura: "Matemática",
      unidades: [
        {
          nombre: "Unidad 0 · Diagnóstico y repaso",
          materiales: [
            { tipo: "guia", titulo: "Diagnóstico: reactivación de contenidos de 6° básico", url: "materiales/7basico/u0-diagnostico-reactivacion.pdf", fecha: "2026-11-08", descripcion: "Preguntas de alternativas para reactivar lo aprendido en 6° básico." },
            { tipo: "guia", titulo: "Repaso: multiplicación, división y prioridad de las operaciones", url: "materiales/7basico/u0-repaso-multiplicacion-division.pdf", fecha: "2026-11-08", descripcion: "Operatoria con números naturales. Actividad formativa (OA de 5° y 6° básico)." }
          ]
        },
        { nombre: "Unidad 1 · Números", materiales: [] },
        {
          nombre: "Unidad 2 · Álgebra y ecuaciones",
          materiales: [
            { tipo: "guia", titulo: "Lenguaje algebraico, términos semejantes, valorización y ecuaciones", url: "materiales/7basico/u2-lenguaje-algebraico-ecuaciones.pdf", fecha: "2026-11-08", descripcion: "Expresiones algebraicas, reducción de términos semejantes, valorización y ecuaciones. OA 6 · OA 7 · OA 9." }
          ]
        },
        {
          nombre: "Unidad 3 · Geometría",
          materiales: [
            { tipo: "guia", titulo: "Plano cartesiano, vectores, polígonos, ángulos y áreas", url: "materiales/7basico/u3-plano-cartesiano-poligonos-areas.pdf", fecha: "2026-11-08", descripcion: "Puntos y vectores en el plano, polígonos, ángulos y cálculo de áreas. OA 10 · OA 13 · OA 14." }
          ]
        },
        { nombre: "Unidad 4 · Probabilidad y estadística", materiales: [] }
      ]
    },
    { id: "8basico", seccion: "Educación Básica", nombre: "8° Básico", asignatura: "Matemática", unidades: [] },

    // ===== EDUCACIÓN MEDIA =====
    {
      id: "1medio", seccion: "Educación Media", nombre: "I° Medio", asignatura: "Matemática",
      unidades: [
        {
          nombre: "Unidad 1 · Números y álgebra",
          materiales: [
            { tipo: "guia", titulo: "Repaso: operatoria con números decimales", url: "materiales/1medio/u1-operatoria-decimales-repaso.pdf", fecha: "2026-11-08", descripcion: "Adición, sustracción, multiplicación y división de decimales. OA 1." },
            { tipo: "guia", titulo: "Productos notables I", url: "materiales/1medio/u1-productos-notables-1.pdf", fecha: "2026-11-08", descripcion: "Binomios con término común, suma por diferencia y cuadrado de binomio. OA 3." },
            { tipo: "guia", titulo: "Productos notables II", url: "materiales/1medio/u1-productos-notables-2.pdf", fecha: "2026-11-08", descripcion: "Cuadrado de binomio, suma por diferencia y áreas. OA 3." },
            { tipo: "solucionario", titulo: "Solucionario: operatoria con números decimales", url: "materiales/1medio/u1-operatoria-decimales-solucionario.pdf", fecha: "2026-11-08", descripcion: "Resultados de la guía de repaso de decimales." }
          ]
        },
        {
          nombre: "Unidad 2 · Álgebra y funciones",
          materiales: [
            { tipo: "guia", titulo: "Sistemas de ecuaciones lineales 2×2", url: "materiales/1medio/u2-sistemas-de-ecuaciones.pdf", fecha: "2026-11-08", descripcion: "Ecuaciones lineales y sistemas de dos ecuaciones con dos incógnitas. OA 4." },
            { tipo: "simulacion", titulo: "Graficando líneas (PhET)", url: "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_es.html", fecha: "2026-11-07", descripcion: "Explora la pendiente y el coeficiente de posición." }
            // Ejemplo de video (borra las dos barras // del inicio para activarlo):
            // ,{ tipo: "video", titulo: "Productos notables", url: "https://www.youtube.com/watch?v=CODIGO_DEL_VIDEO", fecha: "2026-11-07" }
          ]
        },
        {
          nombre: "Unidad 3 · Geometría",
          materiales: [
            { tipo: "guia", titulo: "Homotecia y homotecia vectorial", url: "materiales/1medio/u3-homotecias.pdf", fecha: "2026-11-08", descripcion: "Homotecias en el plano cartesiano y con vectores. OA 8 · OA 11." },
            { tipo: "guia", titulo: "Semejanza, homotecia, Euclides, Tales y escalas", url: "materiales/1medio/u3-semejanza-tales-escalas.pdf", fecha: "2026-11-08", descripcion: "Polígonos semejantes, teoremas de Euclides y Tales, y escalas. OA 8 · OA 9 · OA 10 · OA 11." }
          ]
        },
        {
          nombre: "Unidad 4 · Probabilidad y estadística",
          materiales: [
            { tipo: "guia", titulo: "Probabilidades I: regla de Laplace y espacio muestral", url: "materiales/1medio/u4-probabilidades-1.pdf", fecha: "2026-11-08", descripcion: "Espacio muestral y cálculo de probabilidades con la regla de Laplace. OA 14." },
            { tipo: "guia", titulo: "Probabilidades II: reglas aditiva y multiplicativa", url: "materiales/1medio/u4-probabilidades-2.pdf", fecha: "2026-11-08", descripcion: "Principio multiplicativo y reglas aditiva y multiplicativa. OA 14." }
          ]
        }
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
    },
    {
      nombre: "Tetonor",
      descripcion: "Descubre los pares de la tira: cada uno aparece una vez como suma y otra como producto.",
      url: "juegos/tetonor.html"
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
