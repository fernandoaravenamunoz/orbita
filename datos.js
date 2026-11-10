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
    },
    {
      nombre: "Descomponedor de números",
      descripcion: "Divide por números primos hasta llegar a 1 y encuentra la descomposición prima. Modo misión o maratón.",
      url: "juegos/descomponedor-numeros.html"
    },
    {
      nombre: "Cuenta Regresiva",
      descripcion: "Combina las losetas con operaciones, paréntesis, potencias y factoriales hasta llegar al número objetivo.",
      url: "juegos/cuenta-regresiva.html"
    },
    {
      nombre: "Batalla naval cartesiana",
      descripcion: "Hunde la flota del bot disparando a pares ordenados en el plano cartesiano, antes de que hunda la tuya.",
      url: "juegos/batalla-naval.html"
    },
    {
      nombre: "Recta numérica",
      descripcion: "Ubica fracciones, decimales, negativos y raíces en la recta. Mientras más cerca, más puntos.",
      url: "juegos/recta-numerica.html"
    },
    {
      nombre: "Cuadrados mágicos",
      descripcion: "Completa el cuadrado para que filas, columnas y diagonales sumen lo mismo. Con enteros, fracciones y decimales.",
      url: "juegos/cuadrados-magicos.html"
    }
    // Para agregar otro juego: sube su archivo .html a la carpeta "juegos"
    // y copia uno de los bloques de arriba (con su coma).
  ],

  /* ---------------------------------------------------------------
     ÓRBITA CURIOSA — investigaciones reales y excéntricas.
     area: "Física" o "Matemáticas" (sirve para el filtro).
     premio: texto del sello; déjalo "" si el artículo no ganó un Ig Nobel.
     imagen: ruta de la foto o gráfico. Si el archivo todavía no existe,
       la tarjeta muestra un recuadro "Espacio para imagen" en su lugar.
       Sube las imágenes a materiales/curiosa/ con estos mismos nombres.
     --------------------------------------------------------------- */
  curiosa: [
    {
      area: "Física",
      titulo: "Spontaneous knotting of an agitated string",
      traduccion: "Anudamiento espontáneo de una cuerda agitada",
      autores: "Dorian M. Raymer y Douglas E. Smith",
      revista: "Proceedings of the National Academy of Sciences (PNAS)",
      anio: 2007,
      premio: "Ig Nobel de Física 2008",
      enlace: "https://doi.org/10.1073/pnas.0611320104",
      doi: "10.1073/pnas.0611320104",
      contexto: "Físicos de la Universidad de California en San Diego. Raymer era estudiante de pregrado cuando partió el proyecto; el laboratorio de Smith estudia moléculas de ADN, que también se anudan solas.",
      resumen: "Metieron una cuerda en una caja que giraba, como ropa en una secadora, y repitieron el experimento más de 3.000 veces. Con cuerdas de menos de 46 cm no se formó ningún nudo. Desde ahí, la probabilidad sube rápido hasta los 1,5 m y luego se estanca cerca del 50 %. Con teoría de nudos identificaron 120 tipos distintos.",
      conexion: "Probabilidad experimental y frecuencia relativa; una función que crece y luego se estabiliza.",
      imagen: "materiales/curiosa/oc01-nudos.jpg",
      imagenAlt: "Cuerda anudada después de girar dentro de una caja, junto al diagrama del nudo"
    },
    {
      area: "Física",
      titulo: "Two-, Three-, and Four-Atom Exchange Effects in bcc ³He",
      traduccion: "Efectos de intercambio de dos, tres y cuatro átomos en helio-3 sólido",
      autores: "J. H. Hetherington y F. D. C. Willard",
      revista: "Physical Review Letters, vol. 35",
      anio: 1975,
      premio: "",
      enlace: "https://doi.org/10.1103/PhysRevLett.35.1442",
      doi: "10.1103/PhysRevLett.35.1442",
      contexto: "Jack H. Hetherington era físico de la Universidad Estatal de Míchigan. «F. D. C. Willard» era Chester, su gato siamés: las iniciales vienen de Felis domesticus Chester.",
      resumen: "Es un artículo serio de física cuántica a bajas temperaturas. Hetherington lo escribió a máquina usando «nosotros», pero la revista no aceptaba ese plural con un solo autor. En vez de reescribirlo entero, sumó a su gato como coautor. Así Chester se volvió uno de los pocos animales que firman un artículo científico.",
      conexion: "Cómo se publica la ciencia: autoría, revisión por pares y normas de las revistas.",
      imagen: "materiales/curiosa/oc02-chester.jpg",
      imagenAlt: "Gato siamés, en referencia a Chester, coautor del artículo"
    },
    {
      area: "Física",
      titulo: "Splash-free urinals for global sustainability and accessibility: Design through physics and differential equations",
      traduccion: "Urinarios sin salpicaduras: diseño con física y ecuaciones diferenciales",
      autores: "Kaveeshan Thurairajah, Randy C. Hurd, Tadd T. Truscott, Zhao Pan y otros",
      revista: "PNAS Nexus, vol. 4",
      anio: 2025,
      premio: "Ig Nobel de Física 2026",
      enlace: "https://doi.org/10.1093/pnasnexus/pgaf087",
      doi: "10.1093/pnasnexus/pgaf087",
      contexto: "Equipo liderado desde la Universidad de Waterloo (Canadá), con ingenieros de Weber State (EE. UU.) y KAUST (Arabia Saudita). La idea nació como broma de laboratorio en 2012, y a la ceremonia en Zúrich llegaron con impermeables amarillos.",
      resumen: "Las salpicaduras dependen del ángulo con que el chorro choca contra la pared. Resolviendo una ecuación diferencial obtuvieron superficies donde ese ángulo es siempre pequeño. Su mejor diseño, «Nautilus», sigue una espiral logarítmica, la misma curva de la concha del nautilo, y redujo las salpicaduras en cerca de un 98 % comparado con un urinario común.",
      conexion: "Ecuaciones diferenciales, ángulos de incidencia y la espiral logarítmica.",
      imagen: "materiales/curiosa/oc03-nautilus.jpg",
      imagenAlt: "Prototipo del urinario Nautilus, con forma de espiral"
    },
    {
      area: "Física",
      titulo: "Phase behavior of Cacio e Pepe sauce",
      traduccion: "Comportamiento de fases de la salsa cacio e pepe",
      autores: "G. Bartolucci, D. M. Busiello, M. Ciarchi, A. Corticelli, I. Di Terlizzi, F. Olmeda, D. Revignas y V. M. Schimmenti",
      revista: "Physics of Fluids, vol. 37",
      anio: 2025,
      premio: "Ig Nobel de Física 2025",
      enlace: "https://doi.org/10.1063/5.0255841",
      doi: "10.1063/5.0255841",
      contexto: "Ocho físicos italianos que investigan en distintos centros de Europa. Querían cocinar la receta para muchos amigos sin que fallara; hicieron los experimentos los fines de semana, en una cocina y pagando ellos mismos los ingredientes.",
      resumen: "La salsa de queso pecorino se arruina al calentarse: las proteínas se agrupan y forman grumos, lo que llamaron la «fase mozzarella». Midieron cuándo ocurre según la temperatura y la cantidad de almidón. Con menos de 1 % de almidón (respecto de la masa del queso) aparecen grumos; su receta usa entre 2 y 3 %.",
      conexion: "Porcentajes, diagramas de fase y control de variables en un experimento.",
      imagen: "materiales/curiosa/oc04-cacio.jpg",
      imagenAlt: "Plato de pasta cacio e pepe junto a muestras de salsa con y sin grumos"
    },
    {
      area: "Física",
      titulo: "How do wombats make cubed poo?",
      traduccion: "¿Cómo hacen los wombats caca en forma de cubo?",
      autores: "Patricia J. Yang, Miles Chan, Scott Carver y David L. Hu",
      revista: "71.ª reunión de la División de Dinámica de Fluidos de la APS (resumen de congreso)",
      anio: 2018,
      premio: "Ig Nobel de Física 2019",
      enlace: "https://archive.aps.org/dfd/2018/e19/1",
      doi: "",
      contexto: "Ingenieros del Instituto Tecnológico de Georgia (EE. UU.) y un ecólogo de la Universidad de Tasmania (Australia). Carver dio con los cubos al disecar wombats atropellados mientras estudiaba una enfermedad de la piel. El trabajo completo se publicó en 2021 en la revista Soft Matter.",
      resumen: "El wombat es el único animal conocido que hace caca en cubos, de unos 2 cm. No se debe a la forma del ano: los cubos se forman dentro del intestino, cuya pared tiene franjas más rígidas y otras más elásticas. Al contraerse, las zonas rígidas marcan las aristas. Los wombats usan esos cubos para marcar territorio sobre rocas y troncos.",
      conexion: "Geometría de prismas, elasticidad y modelos matemáticos de un fenómeno biológico.",
      imagen: "materiales/curiosa/oc05-wombat.jpg",
      imagenAlt: "Wombat junto a sus excrementos con forma de cubo"
    },
    {
      area: "Física",
      titulo: "Pressures produced when penguins pooh — calculations on avian defaecation",
      traduccion: "Presiones que producen los pingüinos al defecar: cálculos sobre la defecación de las aves",
      autores: "Victor Benno Meyer-Rochow y Jozsef Gal",
      revista: "Polar Biology, vol. 27",
      anio: 2003,
      premio: "Ig Nobel de Dinámica de Fluidos 2005",
      enlace: "https://doi.org/10.1007/s00300-003-0563-3",
      doi: "10.1007/s00300-003-0563-3",
      contexto: "Biólogos de la Universidad Internacional de Bremen (Alemania) y la Universidad Eötvös Loránd (Hungría). En los agradecimientos del artículo aparece el Programa Antártico Chileno (INACH).",
      resumen: "Los pingüinos de barbijo y de Adelia disparan sus excrementos lejos del nido para no ensuciarlo. A partir de cuán lejos llegan, a qué altura salen y qué tan viscosos son, calcularon la presión necesaria: entre 10 y 60 kPa. Para comparar, la presión sistólica de una persona ronda los 16 kPa.",
      conexion: "Lanzamiento horizontal, presión y conversión de unidades (kPa y mmHg).",
      imagen: "materiales/curiosa/oc06-pinguino.jpg",
      imagenAlt: "Diagrama de un pingüino y la trayectoria de sus excrementos"
    },
    {
      area: "Matemáticas",
      titulo: "An application of Poincaré's recurrence theorem to academic administration",
      traduccion: "Una aplicación del teorema de recurrencia de Poincaré a la administración académica",
      autores: "Kenneth R. Meyer",
      revista: "The American Mathematical Monthly, vol. 88, n.º 1, págs. 32-33",
      anio: 1981,
      premio: "",
      enlace: "https://www.jstor.org/action/doBasicSearch?Query=%22Poincare%27s+Recurrence+Theorem+to+Academic+Administration%22",
      doi: "",
      contexto: "Matemático de la Universidad de Cincinnati, especialista en sistemas dinámicos. La nota tiene solo dos páginas y es una broma escrita con todo el rigor de un artículo de matemáticas.",
      resumen: "El teorema de Poincaré dice que ciertos sistemas cerrados vuelven, tarde o temprano, a quedar muy cerca de su estado inicial. El autor trata la administración de una universidad como uno de esos sistemas y concluye, con humor, que tras cualquier reforma todo terminará volviendo a ser como antes.",
      conexion: "Fenómenos que se repiten, sucesiones periódicas y la idea de modelar con matemática.",
      imagen: "materiales/curiosa/oc07-poincare.jpg",
      imagenAlt: "Diagrama de una órbita que regresa cerca de su punto de partida"
    },
    {
      area: "Matemáticas",
      titulo: "The Peter principle revisited: A computational study",
      traduccion: "El principio de Peter revisado: un estudio computacional",
      autores: "Alessandro Pluchino, Andrea Rapisarda y Cesare Garofalo",
      revista: "Physica A: Statistical Mechanics and its Applications, vol. 389",
      anio: 2010,
      premio: "Ig Nobel de Administración 2010",
      enlace: "https://doi.org/10.1016/j.physa.2009.09.045",
      doi: "10.1016/j.physa.2009.09.045",
      contexto: "Investigadores de la Universidad de Catania (Italia). Usaron herramientas de la física estadística para simular organizaciones jerárquicas con muchos empleados.",
      resumen: "El principio de Peter dice que cada persona asciende hasta llegar a un puesto en el que es incompetente. Simularon empresas con distintas reglas de ascenso. Si el principio se cumple, ascender siempre al mejor baja la eficiencia, y elegir al azar, o alternar entre el mejor y el peor, da mejores resultados.",
      conexion: "Simulación, azar y comparación de estrategias con datos.",
      imagen: "materiales/curiosa/oc08-peter.jpg",
      imagenAlt: "Gráfico de la eficiencia de una organización según la regla de ascenso"
    },
    {
      area: "Matemáticas",
      titulo: "Are cows more likely to lie down the longer they stand?",
      traduccion: "¿Es más probable que una vaca se eche mientras más tiempo lleva de pie?",
      autores: "Bert J. Tolkamp, Marie J. Haskell, Fritha M. Langford, David J. Roberts y Colin A. Morgan",
      revista: "Applied Animal Behaviour Science, vol. 124",
      anio: 2010,
      premio: "Ig Nobel de Probabilidad 2013",
      enlace: "https://doi.org/10.1016/j.applanim.2010.02.004",
      doi: "10.1016/j.applanim.2010.02.004",
      contexto: "Investigadores del Scotland's Rural College (Escocia). Pusieron sensores en las patas de las vacas y registraron miles de veces en que se echaban y se paraban, para poder detectar a tiempo a los animales enfermos.",
      resumen: "Mientras más tiempo lleva echada una vaca, más probable es que se pare pronto: tiene hambre y solo puede comer de pie. Lo contrario no se cumple. Una vaca que lleva seis horas de pie tiene la misma probabilidad de echarse en los próximos 15 minutos que una que lleva solo una hora. Es un proceso «sin memoria».",
      conexion: "Probabilidad condicional y sucesos que no dependen de lo que ocurrió antes.",
      imagen: "materiales/curiosa/oc09-vacas.jpg",
      imagenAlt: "Vacas echadas y de pie en un potrero"
    },
    {
      area: "Matemáticas",
      titulo: "How often should you beat your kids?",
      traduccion: "¿Con qué frecuencia deberías ganarles a tus hijos?",
      autores: "Don Zagier",
      revista: "Mathematics Magazine, vol. 63, n.º 2, págs. 89-92",
      anio: 1990,
      premio: "",
      enlace: "https://www.jstor.org/stable/2691064",
      doi: "",
      contexto: "Matemático estadounidense, reconocido en teoría de números; en ese momento trabajaba en la Universidad de Maryland. En inglés, «beat» significa tanto «pegar» como «ganar»: el título es un doble sentido a propósito.",
      resumen: "Se juega con un mazo mitad rojo y mitad negro: antes de dar vuelta cada carta, hay que adivinar su color. Si siempre apuestas por el color que más queda en el mazo, le ganas a un niño que adivina al azar cerca del 85,4 % de las veces. Como eso es casi 6/7, el autor concluye que hay que ganarles «todos los días, menos el domingo».",
      conexion: "Probabilidad, estrategias óptimas y la fracción 6/7 ≈ 0,857.",
      imagen: "materiales/curiosa/oc10-cartas.jpg",
      imagenAlt: "Mazo de cartas rojas y negras sobre una mesa"
    }
  ],

  /* ---------------------------------------------------------------
     OBSERVATORIO (difusión científica) — artículos y videos de interés general.
     tipo: "articulo" o "video"
     categoria: agrupa las tarjetas por tema (en el orden en que aparecen aquí).
     Videos: pega el enlace normal del video (youtube.com/watch?v=… o youtu.be/…).
     La miniatura se toma sola desde YouTube; "miniatura" es opcional.
     fuente: canal o autor; aparece como crédito en la tarjeta.
     --------------------------------------------------------------- */
  difusion: [
    // —— Desafíos para resolver ——
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "El enigma del examen de admisión: ¿qué hace fallar al 90 %?", fuente: "Academia Internet", duracion: "7:37", url: "https://www.youtube.com/watch?v=Bul2Jhg3pkk", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v02.jpg", descripcion: "Un problema geométrico para calcular el valor de x. Intenta resolverlo antes de ver la solución." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "Cómo calcular raíces cuadradas sin calculadora", fuente: "Mates Mike", duracion: "8:11", url: "https://www.youtube.com/watch?v=sUyJnT3PbHo", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v03.jpg", descripcion: "Un truco para estimar raíces cuadradas de cabeza." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "El problema de Monty Hall", fuente: "Rho y Lambda", duracion: "3:46", url: "https://www.youtube.com/watch?v=mqLBFkzz5u8", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v11.jpg", descripcion: "El famoso dilema de las tres puertas: ¿conviene cambiar de puerta?" },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Puedes calcular el área sombreada?", fuente: "Academia Internet", duracion: "3:01", url: "https://www.youtube.com/watch?v=udou5JhFJ_E", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v17.jpg", descripcion: "Un problema de áreas con círculos, especial para el Día de π." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Qué número es mayor: 222³³³ o 333²²²?", fuente: "Academia Internet", duracion: "7:02", url: "https://www.youtube.com/watch?v=_U2SMP115xA", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v18.jpg", descripcion: "Compara dos potencias enormes sin usar calculadora." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Cuál es el área? Un problema de Singapur", fuente: "MindYourDecisions", duracion: "3:15", url: "https://www.youtube.com/watch?v=TOf35SRT1A4", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v19.jpg", descripcion: "Un problema de áreas con círculos inscritos en un cuadrado. Video en inglés." },
    { tipo: "video", categoria: "Desafíos para resolver", titulo: "¿Puedes resolver este problema turco de secundaria?", fuente: "Academia Internet", duracion: "4:08", url: "https://www.youtube.com/watch?v=aiDtgEjFdio", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v24.jpg", descripcion: "Un problema de pendientes tomado de un examen en Turquía." },
    // —— Curiosidades matemáticas ——
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "Teoremas matemáticos aplicados en el día a día", fuente: "Pablo Molinari", duracion: "15:27", url: "https://www.youtube.com/watch?v=mPWNtwpLWRc", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v04.jpg", descripcion: "Dónde aparecen Pitágoras y otros teoremas fuera de la sala de clases." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "Demostrar que 1 + 1 = 3", fuente: "Academia Internet", duracion: "0:51", url: "https://www.youtube.com/watch?v=t5tOPw0ApqI", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v09.jpg", descripcion: "Una «demostración» con un error escondido. ¿Puedes encontrarlo?" },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cuál es el número más grande que puedes pensar?", fuente: "Mates Mike", duracion: "12:39", url: "https://www.youtube.com/watch?v=De4s6cW4WE8", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v12.jpg", descripcion: "Números tan grandes que no caben en el universo." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cómo funciona JPEG? Las matemáticas de tus fotos", fuente: "Derivando", duracion: "7:23", url: "https://www.youtube.com/watch?v=_OF3LKJkYC8", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v13.jpg", descripcion: "La matemática que comprime las imágenes que compartes en redes sociales." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Para qué sirve el número π?", fuente: "BBC Mundo", duracion: "5:03", url: "https://www.youtube.com/watch?v=JGg3BXeb_Gc", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v22.jpg", descripcion: "Dónde se usa π y por qué sus decimales no terminan nunca." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "La incógnita de más de 2300 años de los números primos", fuente: "BBC Mundo", duracion: "4:22", url: "https://www.youtube.com/watch?v=GYXLIfiL6zs", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v23.jpg", descripcion: "Lo que aún no sabemos sobre los números primos." },
    { tipo: "video", categoria: "Curiosidades matemáticas", titulo: "¿Cuánto es cero elevado a cero?", fuente: "Derivando", duracion: "4:38", url: "https://www.youtube.com/watch?v=lqBXU-9Y3kU", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v25.jpg", descripcion: "Una pregunta con más debate del que parece." },
    // —— Historia de las matemáticas ——
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El mapa de las matemáticas", fuente: "Domain of Science", duracion: "11:06", url: "https://www.youtube.com/watch?v=OmJ-4B-mS-Y", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v05.jpg", descripcion: "Un recorrido visual por todas las ramas de la matemática y cómo se conectan. Video en inglés." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El curioso origen de los 360 grados del círculo", fuente: "Lemnismath", duracion: "10:41", url: "https://www.youtube.com/watch?v=Fyt2-7UytHU", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v06.jpg", descripcion: "Por qué un círculo tiene 360° y qué tiene que ver la base 60." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El misterio matemático de las palabras nueve y nuevo", fuente: "Lemnismath", duracion: "10:20", url: "https://www.youtube.com/watch?v=hpVK9wHPybU", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v14.jpg", descripcion: "Por qué se parecen tanto estas dos palabras en muchos idiomas." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "El primer número de la historia es más raro de lo que crees", fuente: "Lemnismath", duracion: "4:28", url: "https://www.youtube.com/watch?v=vi0QypYdelw", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v15.jpg", descripcion: "Los primeros registros de conteo de la humanidad." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "¿Quién inventó los números?", fuente: "CuriosaMente", duracion: "6:09", url: "https://www.youtube.com/watch?v=2GzNRY2iYNg", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v16.jpg", descripcion: "Breve historia de los sistemas de numeración." },
    { tipo: "video", categoria: "Historia de las matemáticas", titulo: "Cómo nació el cero y su larga batalla para convertirse en número", fuente: "BBC Mundo", duracion: "5:21", url: "https://www.youtube.com/watch?v=KD1_rWvZnzg", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v20.jpg", descripcion: "La historia del cero, desde Babilonia y la India hasta hoy." },
    // —— Ciencia ——
    { tipo: "video", categoria: "Ciencia", titulo: "Un aspecto curioso del principio de Arquímedes", fuente: "The Action Lab en Español", duracion: "7:01", url: "https://www.youtube.com/watch?v=JM2s08gNork", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v07.jpg", descripcion: "Un experimento con balanzas y agua que pone a prueba la flotación." },
    { tipo: "video", categoria: "Ciencia", titulo: "Qué son las ondas gravitacionales que predijo Einstein", fuente: "BBC Mundo", duracion: "5:33", url: "https://www.youtube.com/watch?v=0fHkEolNWFc", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v21.jpg", descripcion: "Qué son y cómo se confirmaron cien años después de ser predichas." },
    // —— Repaso y orientación ——
    { tipo: "video", categoria: "Repaso y orientación", titulo: "Qué son las medidas de posición y sus tipos", fuente: "unProfesor", duracion: "17:16", url: "https://www.youtube.com/watch?v=QggfcNEJYb8", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v01.jpg", descripcion: "Cuartiles, deciles y percentiles explicados paso a paso." },
    { tipo: "video", categoria: "Repaso y orientación", titulo: "El NEM y el Ranking explicados fácil", fuente: "Preu Cpech", duracion: "5:40", url: "https://www.youtube.com/watch?v=EAjvye10XEY", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v08.jpg", descripcion: "Cómo influyen tus notas de enseñanza media en la postulación a la universidad." },
    { tipo: "video", categoria: "Repaso y orientación", titulo: "Cómo armar un prisma pentagonal paso a paso", fuente: "ElProfeVenezolano", duracion: "3:27", url: "https://www.youtube.com/watch?v=pLXPPwuQ6dw", fecha: "2026-11-08", miniatura: "materiales/miniaturas/v10.jpg", descripcion: "Construcción de la red de un prisma pentagonal." },
    // —— Lecturas ——
    { tipo: "articulo", categoria: "Lecturas", titulo: "El número π", fuente: "Wikipedia", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_%CF%80", fecha: "2026-11-07", descripcion: "Historia y curiosidades de una de las constantes más famosas." },
    { tipo: "articulo", categoria: "Lecturas", titulo: "Simulaciones interactivas PhET", fuente: "Universidad de Colorado", url: "https://phet.colorado.edu/es/", fecha: "2026-11-05", descripcion: "Cientos de simulaciones gratuitas de física y matemáticas." }
  ]
};
