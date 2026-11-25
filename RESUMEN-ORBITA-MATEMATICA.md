# Órbita Matemática: resumen del proyecto

*Estado al 25 de noviembre de 2026. Sirve para retomar el trabajo en otra conversación o proyecto.*

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
simulaciones/                 10 simulaciones propias en HTML (fracciones, enteros, cuerpos-geometricos, homotecias, tales, euclides, pi, angulos, monedas, galton)
materiales/1medio/            15 PDF
materiales/2medio/            10 PDF
materiales/7basico/           4 PDF
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
| `#difusion` | Observatorio | Divulgación científica: 25 videos de YouTube con miniatura local y créditos, más 2 artículos, agrupados por categoría |
| `#curiosa` | Órbita Curiosa | 10 fichas de investigaciones excéntricas o con Ig Nobel, filtrables por Física o Matemáticas |
| `#tareas` | Entregar tarea | Formulario de Google; `formularioTareas` en `datos.js` **todavía está vacío** |

### Cursos (`datos.js → cursos`)

- **Matemática:** 7° básico (5 unidades), 8° básico (vacío), I° medio (4 unidades), II° medio (4 unidades), III° y IV° medio (vacíos).
- **Física:** I° y II° medio (vacíos).
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
- **Operando con fracciones** (`fracciones.html`, 7° básico, OA 2 · OA 3): pestaña Multiplicación (paso 1: las dos fracciones por separado, columnas con achurado «/» y filas con achurado «\»; paso 2: animación que las junta una sobre otra; paso 3: el producto es el achurado cruzado; admite impropias y decimales con denominador 10) y pestaña División (modo «cubrir»: las copias del divisor se deslizan sobre el dividendo y el resto se mide en divisores; modo «repartir»: el dividendo se separa en partes iguales).
- **La recta de los enteros** (`enteros.html`): pestaña Adición y sustracción (7° OA 1: flechas, restar = sumar el opuesto, contexto de dinero o temperatura) y pestaña Multiplicación y división (8° OA 1: repetir la flecha y girar 180° si el factor es negativo, secuencia de productos para descubrir la regla, tabla de signos).
- **Homotecias** (`homotecias.html`, I° medio, OA 8 · OA 11): figuras estrella, vela, árbol, casa, triángulo, cuadrilátero y pentágono (estas tres con vértices móviles); k de −3 a 3; centro O arrastrable; cámara oscura; medidas de OA′/OA, perímetro (× |k|), área (× k²) y ángulos. Pestaña vectorial: plano cartesiano, tabla OP → k · OP → P′, vector AB → A′B′ y composición de dos homotecias (k₁ · k₂).
- **Teorema de Tales** (`tales.html`, I° medio, OA 9): casos «Paralelas y secantes» (r, s, t), «Triángulo con una paralela», «Triángulo rectángulo», «Secantes que se cruzan» y «Aplicación: sombras» (árbol de 5 m, sombra de 6 m, edificio a 30 m → 25 m). Se arrastran las paralelas y los puntos azules; se tocan dos vértices de una misma recta para elegir un segmento (hasta 4) y comparar razones; el panel lista las proporciones valorizadas con producto cruzado, y «Calcular x» oculta un segmento y lo despeja.
- **Teorema de Euclides** (`euclides.html`, I° medio, semejanza): triángulo con ángulo recto en C, altura CD, proyecciones p (de a) y q (de b). Los seis datos (a, b, c, h, p, q) se cambian con barra o escribiéndolos; se mantiene fijo el último dato cambiado (o el que se elija) y se recalcula el resto para que siga siendo rectángulo, con aviso si el valor es imposible. Muestra h² = p·q, a² = p·c, b² = q·c, h = a·b/c, c = p + q y Pitágoras: fórmula, valores y resultados. Opción «Ver áreas» con cuadrados y rectángulos equivalentes.
- **El número π** (`pi.html`): radio ajustable (barra o texto) con r, d = 2r y C en una caja en la esquina. Pestaña «Desenrollar»: la circunferencia rueda y deja su borde como segmento; se copian 3 diámetros encima, una 4.ª copia no cabe, y una regla y una lupa miden lo que sobra (≈ 0,142 d). Pestaña «Acostar el diámetro»: el diámetro se curva sobre la circunferencia 3 veces y una huincha curva más una lupa (vista estirada) miden el trozo sin cubrir. Tabla de mediciones para comparar varios radios (C : d constante).
- **Ángulos de los polígonos** (`angulos.html`): triángulo, cuadrilátero, pentágono, hexágono y octágono (presets con ángulos enteros, «Otra forma» al azar, «Polígono regular», vértices arrastrables manteniendo convexidad). Cada esquina es una pieza de color que se arrastra o se toca para llevarla a la «mesa de armado», donde se acomoda junto a la anterior. Interiores: el triángulo forma un ángulo extendido (180°), el cuadrilátero un ángulo completo, y desde el pentágono cada vuelta va en su propio círculo (1.ª vuelta, 2.ª vuelta, media vuelta; la pieza que completa una vuelta se parte). Exteriores: prolongación punteada de cada lado; las piezas siempre completan 360°; opción de ver el interior junto al exterior (suplementarios). Panel con la suma valorizada (redondeo a 1 decimal que conserva la suma), tabla de los 5 polígonos y explicación con triangulación.
- **Lanzamiento de monedas** (`monedas.html`): de 1 a 7 monedas por lanzamiento, hasta 500 lanzamientos (botones 1, 10, 50, 100 y «Hasta 500»); monedas con «CARA» (azul) y «SELLO» (naranja); registro en matriz «En orden» o «Agrupados por número de caras»; tablas por número de caras y por resultado (hasta 4 monedas). Pestaña «Variable aleatoria»: X = número de caras, número de sellos, caras − sellos, al menos una cara (0/1) o moneda de la primera cara; tabla con casos, P(X = x), F(x), frecuencias; gráficos de la función de probabilidad y de la función de distribución (teórica en azul, experimental en ámbar).
- **Tabla de Galton** (`galton.html`): 10 a 14 niveles de clavos; soltar 100, 200, 400, 800 o 1000 bolitas (acumulables hasta 5000) con velocidad normal, rápida o instantánea; bolitas animadas que se apilan en los casilleros; distribución teórica binomial superpuesta; opción de triángulo de Pascal en los clavos; probabilidad de rebote a la derecha ajustable (0,1 a 0,9); tabla de casilleros con % obtenido, % teórico y número de caminos.
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
4. Cargar contenido de los cursos vacíos: 8° básico, III° y IV° medio, Física I° y II° medio.

## 9. Ideas mencionadas, sin hacer

- Más juegos del mismo estilo, por ejemplo con otros contenidos del currículum.
- Reemplazar las ilustraciones de Órbita Curiosa por fotos propias. Basta subir otra imagen y cambiar la ruta en `imagen`.
