# Órbita Matemática: registro del proceso

Registro del trabajo hecho con Claude en noviembre de 2026 sobre el sitio **Órbita Matemática** (fernandoaravenamunoz.github.io/orbita). Parte en la construcción de la versión anterior a la actual (las simulaciones) y sigue con cada cambio, en orden.

**Forma de trabajo:** Claude trabaja sobre una copia del sitio y entrega un `.zip` con los archivos nuevos o modificados, que Fernando sube a GitHub Pages. El historial detallado de cada pedido está en `RESUMEN-ORBITA-MATEMATICA.md`.

---

## Acuerdos de diseño (vigentes)

- **Idioma y notación:** español de Chile, con coma decimal.
- **Colores:** tema claro (fondo blanco y paleta de azules). Se descartó el tema oscuro.
- **Tarjetas:** sin etiquetas de curso ni de OA en las simulaciones, y sin «modo desafío».
- **Pie de página en todas las páginas:** Fernando J. Aravena Muñoz · Licenciado en ciencias exactas · Profesor de matemáticas y física · Temuco, Chile.
- **Datos de estudiantes:** nunca se publican.
- **Simulaciones:**
  - Son páginas HTML independientes en `simulaciones/`, hechas con SVG y JavaScript, sin librerías externas.
  - Funcionan en el computador y en el celular.
  - Tienen un botón «Modo clase» para proyectar.
- **Guías en PDF:** usan el formato oficial de la guía de fracciones:
  - Hoja oficio (612 × 936 pt) con fuentes Carlito y Caladea.
  - Fondo de órbitas (círculo naranjo y elipse dorada, transparentes).
  - Encabezado «Prof. Fernando J. Aravena Muñoz» y tabla Nombre / Curso / Fecha / OA trabajados.

---

## Etapa 1: construcción de las simulaciones (versión 11 y anteriores)

Se crearon las simulaciones del sitio con un generador común (`mk.py`), que pone a cada página la misma cabecera, el pie y el modo clase.

1. **Primeras diez:**
   - Fracciones (multiplicación y división).
   - Recta de enteros.
   - Cuerpos geométricos 3D.
   - Homotecias.
   - Teorema de Tales.
   - Teorema de Euclides.
   - Número π.
   - Ángulos.
   - Lanzamiento de monedas.
   - Tablero de Galton.
2. **Ajustes pedidos por Fernando:**
   - **Enteros:**
     - La suma y la resta se muestran como un ratón que salta por la recta numérica desde el primer sumando.
     - La recta quedó con más espacio entre los números.
     - En la multiplicación, el primer factor aparece en la recta.
     - Se agrandaron los cuadros de ley de los signos y se agregó uno para la adición y la sustracción.
   - **Homotecias:** el plano se mueve y tiene zoom.
   - **Fracciones:**
     - Se agregó un botón para pedir un nuevo ejemplo.
     - La división muestra cuántas veces «cabe» el divisor: barras copiadas, resto y línea punteada.
   - **Tales:** se agregó un caso con cuatro paralelas.
   - **Número π:**
     - El radio ahora cambia de verdad el tamaño de la circunferencia.
     - Los números son más grandes y se usa la letra P para el perímetro.
     - Se explica la parte del diámetro que sobra (medición aproximada).
   - **Monedas:** porcentajes con dos decimales y el valor teórico de la probabilidad escrito dentro del gráfico.
   - **Ángulos:** se rediseñó con trozos de papel rasgado para que la unión de los ángulos se vea natural.
3. **Simulaciones nuevas:**
   - Diagrama de árbol y paseos aleatorios (probabilidad condicionada, animación).
   - Contar con diagrama de árbol (menú, personas, letras, con íconos).
   - Combinatoria (contextos y mapa de decisión: si se usan todos los elementos, si se repiten y si importa el orden).
   - Transformaciones isométricas (punto, segmento, figura y objeto).
   - Teselaciones (embaldosar un plano).
   - Figuras semejantes (verificar o encontrar el valor que falta).
   - Trigonometría (razones, razones recíprocas y triángulos semejantes).
4. Con todo esto se entregó la **v11**: 17 simulaciones, `datos.js`, `app.js`, el sitemap y la documentación.

En paralelo se revisó el sitio antiguo **profe-fernando.weebly.com** y se dejó en pausa hasta recibir sus PDF.

## Etapa 2: v12 (26-11)

- **Combinatoria:** el mapa de decisión separa la permutación en dos ramas, con elementos repetidos, PR = n! : (a! · b! · …), y sin ellos, Pₙ = n!.
- **Relaciones métricas en la circunferencia** (simulación nueva, n.º 18):
  - **Ángulos:**
    - Inscrito y ángulo del centro.
    - Inscritos en el mismo arco.
    - Ángulo en la semicircunferencia.
    - Cuadrilátero inscrito.
    - Ángulo semiinscrito.
    - Ángulo interior.
    - Ángulo exterior.
  - **Segmentos:**
    - Teorema de las cuerdas.
    - Teorema de las secantes.
    - Tangente y secante.
    - Tangentes desde un punto exterior.
    - Radio perpendicular a una cuerda.
  - **Problemas:** encontrar x, con resultados enteros, comprobación y solución.
  - Los puntos se arrastran sobre la figura.

## Etapa 3: v13 (26-11)

- **Función cuadrática** (simulación nueva, n.º 19):
  - **Datos y gráfico:** se escriben A, B y C y se grafica la parábola, con sus cortes con los ejes, concavidad, discriminante, vértice y eje de simetría.
  - **Caso A = 0:** avisa que es una ecuación lineal y grafica la recta.
  - **Función inversa:** se activa después de graficar. Muestra el reflejo en y = x o la rama restringida, con su fórmula.
  - **Plano:** se arrastra y tiene zoom.
- **Contar con diagrama de árbol:** cada situación tiene ahora:
  - Un relato.
  - Los elementos que se combinan, con su emoji.
  - Las reglas de repetición y orden.
  - Una explicación de «¿Por qué se combinan?».

## Etapa 4: v14, integración del sitio antiguo de Física (26-11)

Fernando subió 19 PDF y 7 infografías del sitio Weebly.

- **Material:** todo se revisó, se corrigió y se rehízo en el formato oficial: 21 PDF y 6 infografías en SVG.
  - **Física I° medio:**
    - Ondas y sonido: resúmenes, dos guías de alternativas, pauta e infografías.
    - La luz: resumen e infografía del espectro electromagnético.
    - El universo: sistema solar y universo, estructuras cósmicas, estrellas y galaxias.
  - **Física II° medio:**
    - Movimiento: escalares y vectores, MRU y MRUA; guías de MRU, de MRUA y de alternativas; solucionario; mapa conceptual e infografías.
    - Fuerza: leyes de Newton y tipos de fuerza.
    - Trabajo y energía: guía y solucionario.
- **Correcciones principales:**
  - **Errores de física:** la normal no es la reacción del peso; el problema de bloques con polea da a = 4 m/s² y T = 48 N.
  - **Datos actualizados:** los del Sol, del universo y de los planetas.
  - **Solucionarios:** se corrigieron sus errores.
  - **Guías:**
    - Se arreglaron las respuestas mal copiadas.
    - Se corrigieron las alternativas que no tenían respuesta correcta.
    - Se cambiaron los datos irreales.
    - Se quitaron los encabezados de otro liceo.
- **Simulaciones PhET:** las versiones antiguas, en Java, se reemplazaron por las actuales:
  - Onda en una cuerda.
  - Ondas sonoras.
  - Óptica geométrica.
  - El hombre móvil.
  - Fuerzas y movimiento.
  - Energía en la pista de patinaje.
- **Observatorio:** 16 videos nuevos en las categorías de Física y Ciencia. Uno de los videos originales ya no existe en YouTube.
- **Sitio:** se agregaron dos tipos de material, `resumen` e `infografia`. Ahora cada unidad muestra resúmenes, infografías, guías y solucionarios.

## Etapa 5: versión completa (26-11)

- **Trigonometría:**
  - **Arrastre:** los lados se arrastran de a 0,1 (también de a 0,5 o 1), así que el movimiento es fluido y los lados pueden tener decimales.
  - **Triángulos semejantes:**
    - k puede ser 0 para ocultar un triángulo.
    - Sobre cada triángulo aparecen CO, CA y H medidos y, arriba, el seno, el coseno y la tangente de cada uno simplificados, para ver que son iguales.
  - **Problemas (pestaña nueva):**
    - **Tipos de problema:** calcular un lado, calcular un ángulo o resolver un problema en contexto (escalera, sombra de un árbol, volantín, rampa, edificio, faro).
    - **Respuestas:** se ingresan con dos decimales y se comprueban.
    - **Ayuda:** cada problema tiene una solución paso a paso.
- **Homotecias:**
  - **Segmento destacado:** se elige un lado de la figura o un segmento desde O (OA, OB…), o se toca en la figura.
    - Se destaca junto con su correspondiente en la imagen.
    - Se muestran las dos longitudes y la razón |k|.
  - **Centro O:** se pega a los vértices de la figura al acercarlo, y en ese caso se explica que el vértice queda fijo.
  - **Error corregido:** los vértices de las figuras geométricas no aparecían para arrastrarlos.
- **Entrega:** se empaquetó el sitio completo (`orbita-sitio-completo.zip`) junto con este registro.

## Etapa 6: ajustes a tres simulaciones (26-11)

- **Homotecias:** las medidas del segmento destacado y de su imagen se muestran en cotas paralelas, una a cada lado. Así no se tapan cuando los segmentos quedan uno sobre otro, como OA y OA′.
- **Trigonometría, triángulos semejantes:**
  - △1 se edita escribiendo sus catetos.
  - △2 y △3 se pueden ampliar desde △1 con una razón k, tener medidas propias (con decimales) u ocultarse.
  - Las razones de cada triángulo aparecen como fracción: sen α = cat. op./hip. = 3/5 = 0,6 («≈» si el decimal no es exacto).
  - La conclusión dice si cada triángulo es semejante a △1, si lo es con los catetos intercambiados o si no lo es.
  - Ejemplos: «Tres semejantes», «Uno no es semejante» y «Catetos intercambiados».
- **Transformaciones isométricas:**
  - **Reflexión central** (simetría puntual) respecto del origen o de un centro libre.
  - **Pestaña «Composición»:** hasta cuatro transformaciones seguidas, con imágenes intermedias, animación paso a paso, tabla de coordenadas y la isometría que resulta (traslación, rotación, reflexión o reflexión con deslizamiento).
  - Muestra si el orden de los pasos cambia el resultado («Invertir el orden») e incluye seis ejemplos.
  - Con coordenadas decimales se usa punto y coma: (0,5; 5).

---

## Pendientes conocidos

- **Física:**
  - Unidad 3 de I° medio (Dinámica terrestre), vacía.
  - Unidad 4 de II° medio, vacía.
- **Cursos sin contenido:** 8° básico, III° medio y IV° medio.
- **Por verificar en el sitio publicado:** si «El hombre móvil» (versión CheerpJ de PhET) carga dentro del visor; si no, se abre aparte.
- **Generadores de guías:** las guías de Física se generan con scripts de Python (reportlab). Si se quieren editar después, se pueden regenerar a partir de ellos.
