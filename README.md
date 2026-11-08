# Órbita Matemática

Sitio de material para estudiantes: guías, videos, solucionarios, simulaciones, Observatorio (difusión científica) y entrega de tareas.

## Archivos

| Archivo | Para qué sirve | ¿Lo edito? |
|---|---|---|
| `datos.js` | Cursos, unidades y todo el material | **Sí, aquí se agrega todo** |
| `materiales/` | Carpeta para tus PDF (guías y pautas) | Sí, subes archivos aquí |
| `juegos/` | Páginas de los juegos (Kakoomas, Cálculo mental) | Solo para agregar juegos nuevos |
| `index.html`, `estilos.css`, `app.js` | Estructura, diseño y funcionamiento | No hace falta |

## Publicar en GitHub Pages (una sola vez)

1. Crea una cuenta en https://github.com (el nombre de usuario aparecerá en la dirección del sitio).
2. Arriba a la derecha: **+ → New repository**. Nombre: `orbita` (o el que quieras). Déjalo **Public** y presiona **Create repository**.
3. En el repositorio vacío, haz clic en **uploading an existing file**.
4. Arrastra **todo el contenido** de esta carpeta (los archivos y la carpeta `materiales`, no la carpeta que los contiene). Presiona **Commit changes**.
5. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. Presiona **Save**.
6. Espera uno o dos minutos y recarga la página: aparecerá la dirección del sitio, del tipo
   `https://tu-usuario.github.io/orbita/`

## Agregar material

1. **Guía o pauta en PDF:** entra a la carpeta `materiales` en GitHub → **Add file → Upload files** → sube el PDF.
   Usa nombres sin espacios ni tildes, por ejemplo `1medio-u2-productos-notables.pdf`.
2. Abre `datos.js` en GitHub → ícono del lápiz (✎) para editar.
3. Copia una línea de ejemplo dentro de la unidad que corresponde y cambia los datos:

```js
{ tipo: "guia", titulo: "Guía productos notables", url: "materiales/1medio-u2-productos-notables.pdf", fecha: "2026-11-10" },
```

- **Video:** sube el video a YouTube como *no listado* y pega su enlace en `url` con `tipo: "video"`.
- **Simulación PhET:** abre la simulación en español, copia la dirección y usa `tipo: "simulacion"`.
- **GeoGebra:** usa el enlace `https://www.geogebra.org/m/XXXXX` del recurso; el sitio lo inserta automáticamente.
- La `fecha` (año-mes-día) ordena la sección «Lo más reciente» del inicio.

4. Presiona **Commit changes**. En uno o dos minutos el sitio se actualiza.

> Cuida las comas: entre un material y otro va una coma. Si el sitio queda en blanco después de editar, casi siempre es una coma o comilla que falta.

## Entrega de tareas (Google Forms)

Un sitio en GitHub Pages no puede recibir archivos por sí solo. Para eso se usa un Formulario de Google:

1. Crea un formulario en https://forms.google.com con preguntas: *Nombre*, *Curso* (desplegable), *Tarea que entrega* y una pregunta de tipo **Subir archivo**.
2. Los archivos se guardan automáticamente en una carpeta de tu Google Drive.
3. Para recibir aviso en tu correo: pestaña **Respuestas → ⋮ → Recibir notificaciones por correo electrónico de nuevas respuestas**.
4. Presiona **Enviar**, copia el enlace y pégalo en `datos.js`, en `formularioTareas: "..."`.

Los estudiantes deben iniciar sesión con una cuenta de Google para subir archivos (lo exige Google Forms). Si el colegio usa Google Workspace, puedes restringir el formulario a cuentas del colegio.

## Recomendaciones

- No publiques nombres, notas ni fotos de estudiantes: el sitio es público.
- Tu correo no aparece en el sitio; las entregas llegan por el formulario.
