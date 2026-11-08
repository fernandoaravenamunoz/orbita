/* =====================================================================
   DATOS DEL SITIO — este es el ÚNICO archivo que necesitas editar
   para agregar o quitar material.
   ---------------------------------------------------------------------
   Tipos de material disponibles:
     "guia"         → guía de reforzamiento (PDF u otro documento)
     "video"        → video de YouTube (se ve dentro del sitio)
     "solucionario" → pauta o solucionario (PDF u otro documento)
     "simulacion"   → PhET, GeoGebra u otra simulación (se abre dentro del sitio)

   Las guías y solucionarios van dentro de cada UNIDAD.
   Las simulaciones y videos van en la lista "recursos" de cada CURSO,
   y aparecen en la sección "Simulaciones y videos". Puedes indicar
   a qué unidad corresponden con  unidad: "Unidad 2 · ..."
   Para PhET o GeoGebra basta con pegar el enlace normal de la página.

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
      ],
      // Simulaciones y videos del curso (aparecen en su propia sección)
      recursos: [
        { tipo: "simulacion", titulo: "Suma de los ángulos de un triángulo (GeoGebra)", unidad: "Unidad 3 · Geometría", url: "https://www.geogebra.org/m/g99frcsn", fecha: "2026-11-08", descripcion: "Mueve los vértices y comprueba que los ángulos interiores siempre suman 180°." }
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
            { tipo: "guia", titulo: "Repaso: multiplicación y división de fracciones", url: "materiales/1medio/u1-fracciones-multiplicacion-division-repaso.pdf", fecha: "2026-11-08", descripcion: "Multiplicación y división entre fracciones, con simplificación del resultado. OA 1." },
            { tipo: "guia", titulo: "Productos notables I", url: "materiales/1medio/u1-productos-notables-1.pdf", fecha: "2026-11-08", descripcion: "Binomios con término común, suma por diferencia y cuadrado de binomio. OA 3." },
            { tipo: "guia", titulo: "Productos notables II", url: "materiales/1medio/u1-productos-notables-2.pdf", fecha: "2026-11-08", descripcion: "Cuadrado de binomio, suma por diferencia y áreas. OA 3." },
            { tipo: "solucionario", titulo: "Solucionario: operatoria con números decimales", url: "materiales/1medio/u1-operatoria-decimales-solucionario.pdf", fecha: "2026-11-08", descripcion: "Resultados de la guía de repaso de decimales." }
          ]
        },
        {
          nombre: "Unidad 2 · Álgebra y funciones",
          materiales: [
            { tipo: "guia", titulo: "Repaso: resolución de ecuaciones lineales", url: "materiales/1medio/u2-ecuaciones-lineales-repaso.pdf", fecha: "2026-11-08", descripcion: "Ecuaciones lineales de una incógnita como base para los sistemas. OA 9 de 7° básico." },
            { tipo: "guia", titulo: "Sistemas de ecuaciones lineales 2×2", url: "materiales/1medio/u2-sistemas-de-ecuaciones.pdf", fecha: "2026-11-08", descripcion: "Ecuaciones lineales y sistemas de dos ecuaciones con dos incógnitas. OA 4." }
          ]
        },
        {
          nombre: "Unidad 3 · Geometría",
          materiales: [
            { tipo: "guia", titulo: "Homotecia y homotecia vectorial", url: "materiales/1medio/u3-homotecias.pdf", fecha: "2026-11-08", descripcion: "Homotecias en el plano cartesiano y con vectores. OA 8 · OA 11." },
            { tipo: "guia", titulo: "Semejanza, homotecia, Euclides, Tales y escalas", url: "materiales/1medio/u3-semejanza-tales-escalas.pdf", fecha: "2026-11-08", descripcion: "Polígonos semejantes, teoremas de Euclides y Tales, y escalas. OA 8 · OA 9 · OA 10 · OA 11." },
            { tipo: "guia", titulo: "Taller: teorema de Tales", url: "materiales/1medio/u3-taller-teorema-tales.pdf", fecha: "2026-11-08", descripcion: "Cálculo de segmentos con rectas paralelas cortadas por transversales. OA 9." },
            { tipo: "guia", titulo: "Área y volumen de conos y pirámides", url: "materiales/1medio/u3-area-volumen-conos-piramides.pdf", fecha: "2026-11-08", descripcion: "Cálculo de áreas y volúmenes de conos y pirámides. OA 7." }
          ]
        },
        {
          nombre: "Unidad 4 · Probabilidad y estadística",
          materiales: [
            { tipo: "guia", titulo: "Repaso: tablas de frecuencia y medidas de tendencia central", url: "materiales/1medio/u4-tendencia-central-repaso.pdf", fecha: "2026-11-08", descripcion: "Media, moda y mediana a partir de colecciones de datos. OA 16 · OA 17 de 7° básico." },
            { tipo: "guia", titulo: "Medidas de posición: percentiles, cuartiles y diagrama de cajón", url: "materiales/1medio/u4-medidas-de-posicion.pdf", fecha: "2026-11-08", descripcion: "Percentiles, cuartiles y construcción del diagrama de cajón. OA 15 de 8° básico." },
            { tipo: "guia", titulo: "Probabilidades I: regla de Laplace y espacio muestral", url: "materiales/1medio/u4-probabilidades-1.pdf", fecha: "2026-11-08", descripcion: "Espacio muestral y cálculo de probabilidades con la regla de Laplace. OA 14." },
            { tipo: "guia", titulo: "Probabilidades II: reglas aditiva y multiplicativa", url: "materiales/1medio/u4-probabilidades-2.pdf", fecha: "2026-11-08", descripcion: "Principio multiplicativo y reglas aditiva y multiplicativa. OA 14." }
          ]
        }
      ],
      // Simulaciones y videos del curso (aparecen en su propia sección)
      recursos: [
        { tipo: "simulacion", titulo: "Graficando líneas (PhET)", unidad: "Unidad 2 · Álgebra y funciones", url: "https://phet.colorado.edu/es/simulations/graphing-lines", fecha: "2026-11-07", descripcion: "Explora la pendiente y el coeficiente de posición." }
        // Ejemplo de video (borra las dos barras // del inicio para activarlo):
        // ,{ tipo: "video", titulo: "Productos notables", unidad: "Unidad 1 · Números y álgebra", url: "https://www.youtube.com/watch?v=CODIGO_DEL_VIDEO", fecha: "2026-11-08" }
      ]
    },
    {
      id: "2medio", seccion: "Educación Media", nombre: "II° Medio", asignatura: "Matemática",
      unidades: [
        {
          nombre: "Unidad 1 · Números",
          materiales: [
            { tipo: "guia", titulo: "Reactivación: conjuntos numéricos y operatoria con números racionales", url: "materiales/2medio/u1-reactivacion-numeros-racionales.pdf", fecha: "2026-11-08", descripcion: "Repaso de conjuntos numéricos y operatoria combinada con racionales. OA 1 de I° medio." },
            { tipo: "guia", titulo: "Números enteros y racionales: operatoria combinada", url: "materiales/2medio/u1-numeros-enteros-y-racionales.pdf", fecha: "2026-11-08", descripcion: "Ejercicios de alternativas con operatoria combinada de enteros y racionales. OA 1 de I° medio." },
            { tipo: "guia", titulo: "Números racionales", url: "materiales/2medio/u1-numeros-racionales.pdf", fecha: "2026-11-08", descripcion: "Operatoria y problemas con números racionales. OA 1 de I° medio." },
            { tipo: "guia", titulo: "Guía PAES: números racionales", url: "materiales/2medio/u1-paes-numeros-racionales.pdf", fecha: "2026-11-08", descripcion: "Problemas en contexto con formato de alternativas, tipo PAES. OA 1 de I° medio." },
            { tipo: "guia", titulo: "Operatoria con raíces", url: "materiales/2medio/u1-operatoria-con-raices.pdf", fecha: "2026-11-08", descripcion: "Reducción de expresiones con raíces y descomposición. OA 1 · OA 2." },
            { tipo: "guia", titulo: "Síntesis: operatoria con raíces", url: "materiales/2medio/u1-sintesis-operatoria-con-raices.pdf", fecha: "2026-11-08", descripcion: "Ejercicios de síntesis para repasar toda la operatoria con raíces. OA 1 · OA 2." },
            { tipo: "guia", titulo: "Prueba formativa: raíces enésimas", url: "materiales/2medio/u1-prueba-formativa-raices-enesimas.pdf", fecha: "2026-11-08", descripcion: "Autoevaluación de cálculo y propiedades de raíces enésimas. OA 1 · OA 2." }
          ]
        },
        {
          nombre: "Unidad 2 · Álgebra y funciones",
          materiales: [
            { tipo: "guia", titulo: "Ecuación cuadrática: resolución y problemas", url: "materiales/2medio/u2-ecuacion-cuadratica.pdf", fecha: "2026-11-08", descripcion: "Cálculo de raíces de ecuaciones de segundo grado y problemas. OA 4." },
            { tipo: "guia", titulo: "Problemas de ecuación cuadrática", url: "materiales/2medio/u2-problemas-ecuacion-cuadratica.pdf", fecha: "2026-11-08", descripcion: "Problemas en contexto que se modelan con una ecuación cuadrática. OA 4." }
          ]
        },
        {
          nombre: "Unidad 3 · Geometría",
          materiales: [
            { tipo: "guia", titulo: "Razones trigonométricas en el triángulo rectángulo", url: "materiales/2medio/u3-razones-trigonometricas.pdf", fecha: "2026-11-08", descripcion: "Seno, coseno y tangente en el triángulo rectángulo y sus aplicaciones. OA 8 · OA 9." }
          ]
        },
        { nombre: "Unidad 4 · Probabilidad y estadística", materiales: [] }
      ],
      // Simulaciones y videos del curso (aparecen en su propia sección)
      recursos: [
        { tipo: "simulacion", titulo: "Graficando cuadráticas (PhET)", unidad: "Unidad 2 · Álgebra y funciones", url: "https://phet.colorado.edu/es/simulations/graphing-quadratics", fecha: "2026-11-08", descripcion: "Explora cómo cambian la parábola, su vértice, eje de simetría y raíces al modificar los coeficientes." }
      ]
    },
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
    },
    {
      nombre: "Gemelos Estelares",
      descripcion: "Encuentra las parejas de cantidades que valen lo mismo aunque estén escritas de otra forma.",
      url: "juegos/gemelos-estelares.html"
    }
    // Para agregar otro juego: sube su archivo .html a la carpeta "juegos"
    // y copia uno de los bloques de arriba (con su coma).
  ],

  /* ---------------------------------------------------------------
     OBSERVATORIO (difusión científica) — artículos y videos de interés general.
     tipo: "articulo" o "video"
     categoria: agrupa las tarjetas por tema (en el orden en que aparecen aquí).
     Videos de la lista de YouTube: list=… &index=N, donde N es la posición
     del video en la lista (1, 2, 3…). Si reordenas la lista en YouTube,
     actualiza los números. Un enlace normal de un video también sirve.
     miniatura: imagen de vista previa (opcional). Con un enlace normal de
     YouTube, la miniatura se toma sola desde YouTube.
     fuente: canal o autor; aparece como crédito en la tarjeta.
     --------------------------------------------------------------- */
  difusion: [
    // —— Desafíos para resolver ——
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "El enigma del examen de admisión: ¿qué hace fallar al 90 %?", fuente: "Academia Internet", duracion: "7:37", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=2", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v02.jpg", descripcion: "Un problema geométrico para calcular el valor de x. Intenta resolverlo antes de ver la solución." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "Cómo calcular raíces cuadradas sin calculadora", fuente: "Mates Mike", duracion: "8:11", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=3", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v03.jpg", descripcion: "Un truco para estimar raíces cuadradas de cabeza." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "El problema de Monty Hall", fuente: "Rho y Lambda", duracion: "3:46", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=11", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v11.jpg", descripcion: "El famoso dilema de las tres puertas: ¿conviene cambiar de puerta?" },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Puedes calcular el área sombreada?", fuente: "Academia Internet", duracion: "3:01", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=17", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v17.jpg", descripcion: "Un problema de áreas con círculos, especial para el Día de π." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Qué número es mayor: 222³³³ o 333²²²?", fuente: "Academia Internet", duracion: "7:02", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=18", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v18.jpg", descripcion: "Compara dos potencias enormes sin usar calculadora." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Cuál es el área? Un problema de Singapur", fuente: "MindYourDecisions", duracion: "3:15", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=19", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v19.jpg", descripcion: "Un problema de áreas con círculos inscritos en un cuadrado. Video en inglés." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Puedes resolver este problema turco de secundaria?", fuente: "Academia Internet", duracion: "4:08", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=24", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v24.jpg", descripcion: "Un problema de pendientes tomado de un examen en Turquía." },
    // —— Curiosidades matemáticas ——
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "Teoremas matemáticos aplicados en el día a día", fuente: "Pablo Molinari", duracion: "15:27", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=4", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v04.jpg", descripcion: "Dónde aparecen Pitágoras y otros teoremas fuera de la sala de clases." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "Demostrar que 1 + 1 = 3", fuente: "Academia Internet", duracion: "0:51", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=9", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v09.jpg", descripcion: "Una «demostración» con un error escondido. ¿Puedes encontrarlo?" },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cuál es el número más grande que puedes pensar?", fuente: "Mates Mike", duracion: "12:39", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=12", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v12.jpg", descripcion: "Números tan grandes que no caben en el universo." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cómo funciona JPEG? Las matemáticas de tus fotos", fuente: "Derivando", duracion: "7:23", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=13", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v13.jpg", descripcion: "La matemática que comprime las imágenes que compartes en redes sociales." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Para qué sirve el número π?", fuente: "BBC Mundo", duracion: "5:03", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=22", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v22.jpg", descripcion: "Dónde se usa π y por qué sus decimales no terminan nunca." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "La incógnita de más de 2300 años de los números primos", fuente: "BBC Mundo", duracion: "4:22", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=23", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v23.jpg", descripcion: "Lo que aún no sabemos sobre los números primos." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cuánto es cero elevado a cero?", fuente: "Derivando", duracion: "4:38", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=25", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v25.jpg", descripcion: "Una pregunta con más debate del que parece." },
    // —— Historia de las matemáticas ——
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El mapa de las matemáticas", fuente: "Domain of Science", duracion: "11:06", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=5", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v05.jpg", descripcion: "Un recorrido visual por todas las ramas de la matemática y cómo se conectan." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El curioso origen de los 360 grados del círculo", fuente: "Lemnismath", duracion: "10:41", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=6", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v06.jpg", descripcion: "Por qué un círculo tiene 360° y qué tiene que ver la base 60." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El misterio matemático de las palabras nueve y nuevo", fuente: "Lemnismath", duracion: "10:20", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=14", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v14.jpg", descripcion: "Por qué se parecen tanto estas dos palabras en muchos idiomas." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El primer número de la historia es más raro de lo que crees", fuente: "Lemnismath", duracion: "4:28", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=15", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v15.jpg", descripcion: "Los primeros registros de conteo de la humanidad." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "¿Quién inventó los números?", fuente: "CuriosaMente", duracion: "6:09", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=16", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v16.jpg", descripcion: "Breve historia de los sistemas de numeración." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "Cómo nació el cero y su larga batalla para convertirse en número", fuente: "BBC Mundo", duracion: "5:21", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=20", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v20.jpg", descripcion: "La historia del cero, desde Babilonia y la India hasta hoy." },
    // —— Ciencia ——
    { tipo: "video", categoria: "Ciencia", titulo: "Un aspecto curioso del principio de Arquímedes", fuente: "The Action Lab en Español", duracion: "7:01", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=7", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v07.jpg", descripcion: "Un experimento con balanzas y agua que pone a prueba la flotación." },
    { tipo: "video", categoria: "Ciencia", titulo: "Qué son las ondas gravitacionales que predijo Einstein", fuente: "BBC Mundo", duracion: "5:33", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=21", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v21.jpg", descripcion: "Qué son y cómo se confirmaron cien años después de ser predichas." },
    // —— Repaso y orientación ——
    { tipo: "video", categoria: "Repaso y orientación", titulo: "Qué son las medidas de posición y sus tipos", fuente: "unProfesor", duracion: "17:16", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=1", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v01.jpg", descripcion: "Cuartiles, deciles y percentiles explicados paso a paso." },
    { tipo: "video", categoria: "Repaso y orientación", titulo: "El NEM y el Ranking explicados fácil", fuente: "Preu Cpech", duracion: "5:40", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=8", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v08.jpg", descripcion: "Cómo influyen tus notas de enseñanza media en la postulación a la universidad." },
    { tipo: "video", categoria: "Repaso y orientación", titulo: "Cómo armar un prisma pentagonal paso a paso", fuente: "ElProfeVenezolano", duracion: "3:27", url: "https://www.youtube.com/playlist?list=PLflo218FO_6su_M-lwXjSAguN2CoyLl1X&index=10", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v10.jpg", descripcion: "Construcción de la red de un prisma pentagonal." },
    // —— Lecturas ——
    { tipo: "articulo", categoria: "Lecturas", titulo: "El número π", fuente: "Wikipedia", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_%CF%80", fecha: "2026-11-07", descripcion: "Historia y curiosidades de una de las constantes más famosas." },
    { tipo: "articulo", categoria: "Lecturas", titulo: "Simulaciones interactivas PhET", fuente: "Universidad de Colorado", url: "https://phet.colorado.edu/es/", fecha: "2026-11-05", descripcion: "Cientos de simulaciones gratuitas de física y matemáticas." }
  ]
};
