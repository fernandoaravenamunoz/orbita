# Órbita Matemática: resumen del proyecto

*Estado al 26 de noviembre de 2026. Sirve para retomar el trabajo en otra conversación o proyecto.*

## 1. Qué es

Sitio web de **Feñaño (Fernando J. Aravena Muñoz, matemáticas y física, Temuco)** para compartir con sus estudiantes guías, simulaciones, videos, juegos y divulgación científica.

- **Sitio publicado:** https://fernandoaravenamunoz.github.io/orbita/
- **Repositorio (público):** https://github.com/fernandoaravenamunoz/orbita
- **Hosting:** GitHub Pages, rama `main`, carpeta raíz.
- **Tecnología:** HTML, CSS y JavaScript sin frameworks ni compilación. **No usa Jekyll.** Es una aplicación de una sola página con rutas por `#`.
- El contenido del `.zip` adjunto es idéntico al repositorio. Se excluyen dos PDF antiguos que conviene borrar (ver §8).

## 2. Forma de trabajo acordada

- Feñaño sube los archivos a mano por la web de GitHub: **Add file → Upload files → Commit changes**. Prefiere no usar la terminal.
- En cada cambio se le entrega un `.zip` **solo con los archivos modificados**, conservando sus carpetas. Él lo descomprime y arrastra el contenido a la raíz del repositorio.
- Antes de editar `datos.js` hay que revisar la versión del repositorio, porque él a veces lo edita directamente. Nunca hay que pisar sus cambios.
- Si un cambio no se ve, recargar con **Ctrl + F5** o abrir en ventana de incógnito.
- Pide primero la opción que le signifique menos trabajo.
- Usar notación chilena (coma decimal) y español de Chile.
- No publicar datos de estudiantes.

## 3. Estructura de archivos

```
index.html                    estructura, menú y metadatos SEO/Open Graph
app.js                        vistas y rutas (no hace falta tocarlo para agregar contenido)
estilos.css                   diseño completo, controlado por variables en :root
datos.js                      TODO el contenido: cursos, guías, juegos, Órbita Curiosa, Observatorio
README.md                     instrucciones para el docente
sitemap.xml                   para Google (lista páginas y PDF)
googleef0239d5e0f1f3b2.html   archivo de verificación de Google Search Console
imagen-compartir.jpg          imagen de vista previa al compartir el link (1200×630)
juegos/                       10 juegos, cada uno es un .html independiente
simulaciones/                 19 simulaciones propias en HTML (fracciones, enteros, cuerpos-geometricos, homotecias, tales, euclides, pi, angulos, monedas, galton, arbol-paseos, combinaciones-arbol, combinatoria, isometrias, teselaciones, semejanza, trigonometria, circunferencia, cuadratica)
materiales/1medio/            15 PDF
materiales/2medio/            10 PDF
materiales/7basico/           4 PDF
materiales/fisica1m/          10 PDF y 3 infografías SVG (ondas, sonido, luz, universo)
materiales/fisica2m/          11 PDF y 3 infografías SVG (movimiento, fuerza, trabajo y energía)
materiales/miniaturas/        v01–v25.jpg (miniaturas de los videos del Observatorio)
materiales/curiosa/           oc01–oc10.svg (ilustraciones de Órbita Curiosa)
```

## 4. Secciones y rutas

| Ruta | Sección | Contenido |
|---|---|---|
| `#inicio` | Inicio | Portada y seis accesos: Cursos, Simulaciones, Juegos, Observatorio, Órbita Curiosa y Entregar tarea |
| `#simulaciones` | Simulaciones | Herramientas interactivas propias (`datos.js → simulaciones`), en tarjetas con lámina, temas y botón «Abrir simulación» (por decisión del profesor, sin curso ni OA). Hoy: Operando con fracciones, La recta de los enteros, Cuerpos geométricos 3D, Homotecias, Teorema de Tales, Teorema de Euclides, El número π, Ángulos de los polígonos, Lanzamiento de monedas y Tabla de Galton |
| `#cursos` / `#curso-ID` | Cursos | Por curso: **Guías por unidad** y una sección aparte de **Simulaciones y videos** |
| `#juegos` / `#juego-ID` | Juegos | Estilo arcade (cartuchos J01–J10); es la única sección con estética de videojuego |
| `#difusion` | Observatorio | Divulgación científica: 41 videos de YouTube (25 con miniatura local; los 16 de física del sitio antiguo usan la miniatura de YouTube) y 2 artículos, agrupados por categoría (incluye «Física: ondas y sonido», «Física: la Tierra y el universo» y «Física: movimiento y fuerza») |
| `#curiosa` | Órbita Curiosa | 10 fichas de investigaciones excéntricas o con Ig Nobel, filtrables por Física o Matemáticas |
| `#tareas` | Entregar tarea | Formulario de Google; `formularioTareas` en `datos.js` **todavía está vacío** |

### Cursos (`datos.js → cursos`)

- **Matemática:** 7° básico (5 unidades), 8° básico (vacío), I° medio (4 unidades), II° medio (4 unidades), III° y IV° medio (vacíos).
- **Física** (contenido del antiguo sitio profe-fernando.weebly.com, revisado y rehecho en el formato oficial de las guías: oficio 612×936, Carlito/Caladea, fondo de órbitas; generadores en Python con reportlab):
  - I° medio: U1 Ondas y sonido (resúmenes de ondas y de sonido, dos guías de alternativas, pauta, dos infografías), U2 La luz (resumen e infografía del espectro), U3 Dinámica terrestre (vacía), U4 El universo (resúmenes de sistema solar y universo, estructuras cósmicas, estrellas y galaxias). Simulaciones PhET: Onda en una cuerda, Ondas sonoras, Óptica geométrica.
  - II° medio: U1 El movimiento (resúmenes de escalares y vectores, MRU y MRUA; guías de MRU, MRUA y alternativas; solucionario; mapa conceptual e infografías de tipos de movimiento y de caída libre), U2 Fuerza (resúmenes de leyes de Newton y tipos de fuerza), U3 Trabajo y energía (guía y solucionario), U4 vacía. Simulaciones PhET: El hombre móvil (versión CheerpJ), Fuerzas y movimiento: fundamentos, Energía en la pista de patinaje: fundamentos.
  - Correcciones principales respecto de los originales: encabezados de otro liceo eliminados; objetivos que decían «ondas» en guías de movimiento; normal ≠ reacción del peso; problema resuelto de tensión (a = 4 m/s², T = 48 N); solucionario de trabajo y energía (unidades, ejercicios 14, 18, 19, 24); datos del Sol, del universo y de los planetas; nebulosa planetaria no es explosión; respuestas mal copiadas en la guía de MRUA; alternativas sin respuesta correcta.
- Tipos de material por unidad: `resumen`, `infografia` (SVG), `guia`, `solucionario` (además de `video` y `simulacion`, que van a la sección multimedia).
- Los niveles se muestran sin letra A/B/C, solo con el punto azul.
- **Simulaciones:**
  - 7° básico: GeoGebra, suma de ángulos de un triángulo.
  - I° medio: PhET, Graficando líneas.
  - II° medio: PhET, Graficando cuadráticas.
- `app.js` convierte los links de PhET, GeoGebra y YouTube (incluidas listas) en reproductores integrados.

### Simulaciones (`datos.js → simulaciones`)

- Cada simulación es un `.html` independiente en `simulaciones/`, con campos `nombre`, `descripcion`, `temas`, `url`, `dibujo` y `fecha` (sin curso ni OA).
- **Estilo de las simulaciones:** tema claro fijo (fondo blanco, paleta de azules, franja superior celeste #EAF2FB con borde #378ADD), aunque el dispositivo esté en modo oscuro.
- **Cuerpos geométricos 3D:** prismas, pirámides, cilindros y conos (girar, desarmar en red, cara seleccionada, áreas y volumen con desarrollo) y cuerpos de revolución (rectángulo, triángulo rectángulo, trapecio rectángulo, semicírculo). Tiene un botón «← Órbita Matemática» que vuelve a `#simulaciones`.
- **Operando con fracciones** (`fracciones.html`, 7° básico, OA 2 · OA 3): pestaña Multiplicación (paso 1: las dos fracciones por separado, columnas con achurado «/» y filas con achurado «\»; paso 2: animación que las junta una sobre otra; paso 3: el producto es el achurado cruzado; admite impropias y decimales con denominador 10) y pestaña División (modo «cubrir»: las copias del divisor se deslizan sobre el dividendo y el resto se mide en divisores; modo «repartir»: el dividendo se separa en partes iguales). Actualización 26-11: botón «Nuevo ejemplo» en ambas pestañas; en «Cubrir», el divisor se copia y pega sobre el dividendo («Copiar y pegar divisor» / «Quitar copia»), la copia que no cabe queda pintada adentro y blanca con borde afuera, y una línea punteada cuenta cuántas veces cabe.
- **La recta de los enteros** (`enteros.html`): pestaña Adición y sustracción (7° OA 1: flechas, restar = sumar el opuesto, contexto de dinero o temperatura) y pestaña Multiplicación y división (8° OA 1: repetir la flecha y girar 180° si el factor es negativo, secuencia de productos para descubrir la regla, tabla de signos). Actualización 26-11: la suma y resta se representan con un ratón que parte en el primer número, mira a la derecha (suma) o a la izquierda (resta) y avanza (número positivo) o retrocede (negativo) dando saltos; tabla «La regla del ratón» y recuadro «Regla de los signos en la adición». Recta con ventana ajustada (más espacio entre números). En la multiplicación, el primer factor es la flecha y el segundo dice cuántas veces se repite (gira si es negativo). Tabla de signos más grande.
- **Homotecias** (`homotecias.html`, I° medio, OA 8 · OA 11): figuras estrella, vela, árbol, casa, triángulo, cuadrilátero y pentágono (estas tres con vértices móviles); k de −3 a 3; centro O arrastrable; cámara oscura; medidas de OA′/OA, perímetro (× |k|), área (× k²) y ángulos. Pestaña vectorial: plano cartesiano, tabla OP → k · OP → P′, vector AB → A′B′ y composición de dos homotecias (k₁ · k₂). Actualización 26-11: el plano se mueve arrastrando el fondo y tiene zoom (rueda, pellizco o botones ＋/−), además de «Encuadrar». Actualización 26-11 (2): caja «Segmento destacado» para elegir un lado (o segmento entre puntos) de la figura o un segmento desde O (OA, OB…), también tocándolo en la figura; se destaca junto con su correspondiente en la imagen, con sus longitudes y la razón |k|. El centro O se «pega» a los vértices de la figura original al acercarlo. Se corrigió que los vértices de las figuras geométricas no aparecían para arrastrarlos. Actualización 26-11 (3): las medidas del segmento destacado y de su imagen van en cotas paralelas, una a cada lado, para que no se tapen cuando los segmentos quedan uno sobre otro (OA y OA′).
- **Teorema de Tales** (`tales.html`, I° medio, OA 9): casos «Paralelas y secantes» (r, s, t), «Triángulo con una paralela», «Triángulo rectángulo», «Secantes que se cruzan» y «Aplicación: sombras» (árbol de 5 m, sombra de 6 m, edificio a 30 m → 25 m). Se arrastran las paralelas y los puntos azules; se tocan dos vértices de una misma recta para elegir un segmento (hasta 4) y comparar razones; el panel lista las proporciones valorizadas con producto cruzado, y «Calcular x» oculta un segmento y lo despeja. Actualización 26-11: caso «Cuatro paralelas» (A–D y E–H), casos «Recíproco de Tales» y «Dividir un segmento en partes iguales», y «Nuevo ejercicio con medidas enteras».
- **Teorema de Euclides** (`euclides.html`, I° medio, semejanza): triángulo con ángulo recto en C, altura CD, proyecciones p (de a) y q (de b). Los seis datos (a, b, c, h, p, q) se cambian con barra o escribiéndolos; se mantiene fijo el último dato cambiado (o el que se elija) y se recalcula el resto para que siga siendo rectángulo, con aviso si el valor es imposible. Muestra h² = p·q, a² = p·c, b² = q·c, h = a·b/c, c = p + q y Pitágoras: fórmula, valores y resultados. Opción «Ver áreas» con cuadrados y rectángulos equivalentes.
- **El número π** (`pi.html`): radio ajustable (barra o texto) con r, d = 2r y C en una caja en la esquina. Pestaña «Desenrollar»: la circunferencia rueda y deja su borde como segmento; se copian 3 diámetros encima, una 4.ª copia no cabe, y una regla y una lupa miden lo que sobra (≈ 0,142 d). Pestaña «Acostar el diámetro»: el diámetro se curva sobre la circunferencia 3 veces y una huincha curva más una lupa (vista estirada) miden el trozo sin cubrir. Tabla de mediciones para comparar varios radios (C : d constante). Actualización 26-11: el perímetro se llama P; recuadros «Cálculo de la razón P : d» (números grandes, s : d explicado como medición aproximada) y «Notación» (r, d, P, s, π, ≈).
- **Ángulos de los polígonos** (`angulos.html`): triángulo, cuadrilátero, pentágono, hexágono y octágono (presets con ángulos enteros, «Otra forma» al azar, «Polígono regular», vértices arrastrables manteniendo convexidad). Cada esquina es una pieza de color que se arrastra o se toca para llevarla a la «mesa de armado», donde se acomoda junto a la anterior. Interiores: el triángulo forma un ángulo extendido (180°), el cuadrilátero un ángulo completo, y desde el pentágono cada vuelta va en su propio círculo (1.ª vuelta, 2.ª vuelta, media vuelta; la pieza que completa una vuelta se parte). Exteriores: prolongación punteada de cada lado; las piezas siempre completan 360°; opción de ver el interior junto al exterior (suplementarios). Panel con la suma valorizada (redondeo a 1 decimal que conserva la suma), tabla de los 5 polígonos y explicación con triangulación.
- **Lanzamiento de monedas** (`monedas.html`): de 1 a 7 monedas por lanzamiento, hasta 500 lanzamientos (botones 1, 10, 50, 100 y «Hasta 500»); monedas con «CARA» (azul) y «SELLO» (naranja); registro en matriz «En orden» o «Agrupados por número de caras»; tablas por número de caras y por resultado (hasta 4 monedas). Pestaña «Variable aleatoria»: X = número de caras, número de sellos, caras − sellos, al menos una cara (0/1) o moneda de la primera cara; tabla con casos, P(X = x), F(x), frecuencias; gráficos de la función de probabilidad y de la función de distribución (teórica en azul, experimental en ámbar). Actualización 26-11: frecuencias relativas en porcentaje (hasta 2 decimales) y valor experimental escrito sobre cada barra del gráfico de probabilidad.
- **Tabla de Galton** (`galton.html`): 10 a 14 niveles de clavos; soltar 100, 200, 400, 800 o 1000 bolitas (acumulables hasta 5000) con velocidad normal, rápida o instantánea; bolitas animadas que se apilan en los casilleros; distribución teórica binomial superpuesta; opción de triángulo de Pascal en los clavos; probabilidad de rebote a la derecha ajustable (0,1 a 0,9); tabla de casilleros con % obtenido, % teórico y número de caminos.
- **Diagrama de árbol y paseos aleatorios** (`arbol-paseos.html`): situaciones «Lanzar una moneda», «Paso a la izquierda o a la derecha» y «Paso adelante o atrás»; p ajustable (0,05 a 0,95, atajos 1/2, 1/4, 1/3, 2/3, 3/4); de 1 a 10 pasos (árbol hasta 6, malla de caminos desde 7); animación «Construir el árbol»; marcar una posición final (gráfico, hojas o lista) resalta todos sus caminos y muestra la probabilidad total; tocar un nodo da P(nodo), P(final | nodo), P(nodo y final) y P(nodo | final); paseos al azar animados (+10, +100) con frecuencias experimentales.
- **Contar con diagramas de árbol** (`combinaciones-arbol.html`): situaciones con íconos (menú, ropa, fila para la foto, podio, ordenar letras, clave de candado, helado de dos sabores, moneda y dado, «Arma tu situación»); árbol animado por etapas (con ramas plegadas si hay más de 36 resultados); conteo multiplicativo coloreado por etapa; resultado elegido con su camino; lista con puntos suspensivos si hay más de 25; en el helado, agrupación para mostrar que no importa el orden (12 : 2 = 6).
- **Combinatoria** (`combinatoria.html`): contextos curso (2 a 20 estudiantes), librería (2 a 10 libros) y letras de una palabra; preguntas ¿todos los elementos?, ¿importa el orden? (redactada según el contexto: cargos, lugares, letras) y ¿se repiten?; la situación se reescribe según las respuestas y explica por qué importa o no el orden; diagrama de decisión resaltado; total con BigInt; resultados (primeros, «⋮», últimos si hay más de 25); cálculo paso a paso y por qué esa estrategia (P, P con letras repetidas, V, VR, C, CR).
- **Transformaciones isométricas** (`isometrias.html`): objeto punto, segmento, figura (triángulo o cuadrilátero) u objeto cotidiano (velero); traslación (vector con inicio y punta arrastrables), reflexión (eje X, eje Y, y = x, y = −x o eje libre con dos puntos arrastrables) y rotación (centro en el origen o libre; ángulo de −180° a 360°, atajos 90°, 180°, 270°, −90°, 45°); todo se ajusta a la cuadrícula; construcción (vectores, perpendiculares con marcas, arcos), coordenadas, regla (x, y) → (x′, y′), tabla original → imagen, medidas que se conservan y orientación (se invierte en la reflexión); animación. Actualización 26-11 (3): nueva **reflexión central** (simetría puntual) respecto del origen o de un centro libre, con marcas de PO = OP′ y regla (x, y) → (2h − x, 2k − y). Nueva pestaña **«Composición»** (`#composicion`): secuencia de hasta 4 transformaciones (traslación, reflexión axial con eje X, Y, y = x, y = −x, x = c o y = c, reflexión central y rotación), editables escribiendo valores o arrastrando en el plano vectores, centros y ejes x = c / y = c; se ordenan con ↑ ↓, se quitan con ✕ y se invierten con «Invertir el orden». Muestra imágenes intermedias (′, ″, ‴, ⁗) con el color de cada paso, animación paso a paso, tabla de coordenadas por paso, regla de cada paso y la **isometría resultante** (identidad, traslación, rotación con su centro, reflexión central, reflexión con su eje o reflexión con deslizamiento); explica la orientación según el número de reflexiones axiales y si el orden cambia el resultado. Ejemplos: dos reflexiones con ejes paralelos o que se cortan, dos rotaciones, dos reflexiones centrales, dos traslaciones y «¿Importa el orden?». Con coordenadas decimales se usa punto y coma: (0,5; 5).
- **Teselaciones** (`teselaciones.html`): piso de 8 × 6, 12 × 8 o 16 × 10; baldosas triángulo, cuadrado, hexágono, pentágono, octógono, rectángulo, rombo, triángulo y cuadrilátero cualquiera; la baldosa se pega al lado libre más cercano (verde si cabe, roja si se monta; «Girar» o R cambia el lado); «Rellenar el piso»; patrones octógonos y cuadrados, hexágonos y triángulos, cuadrados y triángulos, ladrillos; marcas de vértices completos (360°), por completar y huecos imposibles; porcentaje cubierto; explicación con el ángulo interior y 360°.
- **Figuras semejantes** (`semejanza.html`): triángulos, cuadriláteros, polígonos regulares, irregulares o al azar; actividad «¿Son semejantes?» (responder sí o no, verificar con tabla de razones de lados y de ángulos, explicación de por qué no lo son: estiradas, cuadrado vs rectángulo, cuadrado vs rombo, distinto número de lados) y «Buscar el valor que falta» (figuras semejantes, x en un lado, comprobar la respuesta y solución con k y productos cruzados); ambas figuras a la misma escala, la segunda girada o reflejada.
- **Trigonometría** (`trigonometria.html`): pestaña «Razones trigonométricas»: triángulo rectángulo con ángulo recto en C, tríos de lados enteros (3-4-5, 6-8-10, 5-12-13, 8-15-17, 7-24-25, 20-21-29), A se arrastra en horizontal y B en vertical (de a 1 o de a 0,5) sin perder el ángulo recto; se elige el ángulo α (en A) o β (en B) y los lados se colorean como cateto opuesto (CO), cateto adyacente (CA) e hipotenusa (H); seno, coseno y tangente como fracción y decimal; desplegable con cosecante, secante y cotangente; relaciones (tan⁻¹, sen² + cos² = 1, complementarios). Pestaña «Triángulos semejantes»: tres triángulos con el mismo ángulo (k ajustable de 0,5 a 4), superpuestos o separados, con tabla que muestra que las razones son iguales. Actualización 26-11 (2): los lados se arrastran de a 0,1 (también de a 0,5 o 1); k puede ser 0 para ocultar un triángulo; sobre cada triángulo aparecen CO, CA y H medidos y, arriba, sus razones simplificadas para compararlas. Nueva pestaña «Problemas»: encontrar un lado, un ángulo o resolver contextos (escalera, sombra de un árbol, volantín, rampa, edificio, faro), con comprobación (dos decimales) y solución paso a paso. Actualización 26-11 (3): en «Triángulos semejantes», △1 se edita escribiendo sus catetos y △2 y △3 pueden «Ampliar △1 (razón k)», usar «Mis medidas» (catetos propios, con decimales) u «Ocultar»; ejemplos «Tres semejantes», «Uno no es semejante» y «Catetos intercambiados». Las razones de cada triángulo aparecen en tarjetas sobre la figura como sen α = cat. op./hip. = 3/5 = 0,6 (con «=» si el decimal es exacto y «≈» si no; con √ si la hipotenusa no es exacta). La tabla agrega α y la conclusión dice si cada triángulo es semejante a △1, si lo es con los catetos intercambiados o si no lo es (ángulo distinto). En la primera pestaña también se usa «=» cuando el decimal es exacto.
- **Circunferencia** (`circunferencia.html`): pestaña «Ángulos» con siete teoremas (inscrito y del centro, inscritos en el mismo arco, semicircunferencia, cuadrilátero inscrito, semiinscrito, interior, exterior) y pestaña «Segmentos» con cinco (cuerdas, secantes, tangente y secante, tangentes desde un punto exterior, radio perpendicular a una cuerda). Los puntos se arrastran sobre la circunferencia (de a 2°) y el punto exterior P por fuera; los valores y la comprobación se actualizan en vivo. Pestaña «Problemas»: problemas aleatorios con resultado entero para encontrar x (filtro ángulos/segmentos, comprobar, ver solución paso a paso; figura referencial).
- **Función cuadrática** (`cuadratica.html`): el estudiante escribe a, b y c (enteros, decimales con coma o fracciones) y presiona «Graficar»; se marcan cortes con el eje X (soluciones de la ecuación, con fórmula y discriminante), corte con el eje Y, vértice, eje de simetría y concavidad. Con a = 0 avisa que es una ecuación lineal y grafica la recta. Tras graficar aparece «Función inversa»: reflejo en y = x (relación que no es función) o rama restringida x ≥ h / x ≤ h con su fórmula f⁻¹; en el caso lineal, f⁻¹(x) = (x − c) : b. Plano con arrastre, zoom (rueda, botones, pellizco) y botón para encuadrar.
- **Contar con diagramas de árbol**: cada situación ahora trae un relato, los elementos a combinar con su emoji, las reglas (repetición y orden) y una explicación de «¿Por qué se combinan?».
- **Combinatoria**: el mapa de decisión ahora separa la permutación en dos ramas, con y sin elementos repetidos, cada una con su fórmula.
- **Modo clase** (todas): botón junto al título que oculta explicaciones y agranda la figura (solo en pantallas grandes; se recuerda en el navegador).
- Criterios comunes: avance paso a paso, modo **predecir** (oculta el resultado hasta revelarlo), sin modo desafío por decisión del profesor, y sin guardar datos de estudiantes.
- La lámina de la tarjeta es un SVG en `app.js` (`DIBUJOS_SIM`); si `dibujo` no existe, usa uno genérico.

### Juegos (`juegos/*.html`)

| N.º | Juego | Notas |
|---|---|---|
| J01 | Kakoomas matemáticos | |
| J02 | Cálculo mental | |
| J03 | Pirámide de ecuaciones | |
| J04 | Tetonor | Con pantalla "¿Cómo se juega?" y ejemplo |
| J05 | Gemelos Estelares | Incluye niveles de fracciones equivalentes y de fracciones ↔ decimales, **sin señuelos** (los señuelos aparecen desde el nivel mostrado 5) |
| J06 | Descomponedor de números | Factorización prima, con ejemplo 84 = 2²·3·7 |
| J07 | Cuenta Regresiva | Variante de "el 24": losetas y objetivo aleatorio siempre alcanzable. Básico: 4 losetas, + − · :. Intermedio: 5 losetas con paréntesis y objetivos negativos. Avanzado: 6 losetas con potencias (el exponente debe ser una loseta) y factorial |
| J08 | Batalla naval cartesiana | Contra un bot (aleatorio, cazador o estratega). Del primer cuadrante a los cuatro cuadrantes; fuego animado en los barcos alcanzados |
| J09 | Recta numérica | Ubicar fracciones, mixtos, decimales, negativos, raíces y múltiplos de π. Puntaje por cercanía, con explicación después de cada jugada |
| J10 | Cuadrados mágicos | 3×3 del 1 al 9; luego enteros con negativos; luego fracciones, decimales o 4×4. Siempre resoluble línea a línea; pistas y comprobación |

- Cada juego tiene una barra para volver (`../index.html#juegos`).
- Los récords se guardan en el `localStorage` del navegador.
- Las tipografías de los juegos son Righteous, Jost y Space Mono.

### Órbita Curiosa (`datos.js → curiosa`)

- Campos de cada ficha: `area`, `titulo` (original), `traduccion`, `autores`, `revista`, `anio`, `premio` (vacío si no ganó un Ig Nobel), `enlace` (DOI directo), `doi`, `contexto`, `resumen`, `conexion` (bloque "En la sala de clases"), `imagen` e `imagenAlt`.
- Si la imagen no existe, la tarjeta muestra el recuadro "Espacio para imagen".
- Los datos se verificaron contra las fuentes. Se corrigieron:
  - Nudos: la probabilidad se estanca cerca del 50 %, no es casi 100 %.
  - Urinarios: reducen las salpicaduras en ~98 %, no a cero.
  - Cacio e pepe: el DOI correcto es 10.1063/5.0255841.
  - Vacas: el título real es "Are cows more likely to lie down the longer they stand?" (2010).
  - "How often should you beat your kids?" es de **Don Zagier (1990)**, no de Newman (1960).
- El artículo de Poincaré (Monthly, 1981) existe, pero no se confirmó el autor "Kenneth R. Meyer"; su enlace abre una búsqueda en JSTOR.

## 5. Identidad visual

- **Pie de página (todas las páginas):** «Fernando J. Aravena Muñoz / Licenciado en ciencias exactas / Profesor de matemáticas y física / Temuco, Chile». En el sitio sale de `datos.js` (`docente`, `formacion`, `colegio`); en simulaciones y juegos está escrito al final de cada `.html` (claro en simulaciones, marino en juegos).

- **Estilo:** retrofuturismo Space Age editorial, con fondo crema, marino y acentos cálidos. Lleva una franja modular de figuras geométricas bajo las cabeceras.
- **Paleta** (`estilos.css`):
  - Crema `#E4DFD0`, crema clara `#ECE8DC`, crema oscura `#D6D0BF`.
  - Marino `#2C395C`.
  - Naranja `#E2571E`; naranja vivo `#FF5500`, solo para estados activos.
  - Óxido `#A92717`, terracota `#B4583A`, mostaza `#B9A727`.
- **Tipografías:**
  - Chakra Petch: títulos.
  - Jost: texto.
  - Space Mono: rótulos y datos.
  - Audiowide: solo en la sección Juegos.
- **Marca:** "Órbita Matemática", con un planeta con anillo como logo. El sitio no menciona el nombre del colegio, solo "Temuco, Chile".

## 6. Cómo agregar contenido (resumen del README)

- **Guía PDF:**
  1. Súbela a `materiales/<curso>/`, con nombre sin espacios ni tildes.
  2. En `datos.js`, copia una línea de recurso dentro de la unidad correspondiente.
- **Video o simulación:** usa un recurso con `tipo: "video"` o `tipo: "simulacion"` y el link normal; el sitio lo integra solo.
- **Simulación nueva:** pon el `.html` en `simulaciones/` y agrega un bloque al arreglo `simulaciones`.
- **Juego nuevo:** pon el `.html` en `juegos/` y agrega `{ nombre, descripcion, url }` al arreglo `juegos`.
- **Resumen o infografía:** igual que una guía, con `tipo: "resumen"` o `tipo: "infografia"` (la infografía puede ser .svg, .png o .pdf).
- **Observatorio:** agrega un objeto con `tipo` (`video` o `articulo`), `categoria`, `titulo`, `fuente`, `url`, `fecha`, `descripcion` y, si es video, una miniatura.
- **Órbita Curiosa:** agrega un objeto al arreglo `curiosa` con los campos de §4.
- Después de agregar PDF o páginas, conviene regenerar `sitemap.xml`.

## 7. SEO y Google

- `index.html` tiene descripción, palabras clave y etiquetas Open Graph con `imagen-compartir.jpg`.
- No hay `robots.txt`, porque el sitio vive en una subcarpeta (`/orbita/`).
- **Pendiente en Search Console:**
  1. Agregar la propiedad con prefijo de URL `https://fernandoaravenamunoz.github.io/orbita/`.
  2. Pulsar **Verificar** (el archivo de verificación ya está subido).
  3. Enviar `sitemap.xml`.

## 8. Pendientes

1. **Formulario de tareas:** pegar el link de Google Forms en `formularioTareas` (`datos.js`).
2. **Borrar del repositorio** dos archivos antiguos que ya no se usan: `materiales/Guía Sistemas de ecuaciones.pdf` y `materiales/ejemplo-guia.pdf`.
3. Completar Search Console (§7).
4. Cargar contenido de los cursos vacíos: 8° básico, III° y IV° medio; Física I° U3 (dinámica terrestre) y II° U4.

## 9. Ideas mencionadas, sin hacer

- Más juegos del mismo estilo, por ejemplo con otros contenidos del currículum.
- Reemplazar las ilustraciones de Órbita Curiosa por fotos propias. Basta subir otra imagen y cambiar la ruta en `imagen`.
