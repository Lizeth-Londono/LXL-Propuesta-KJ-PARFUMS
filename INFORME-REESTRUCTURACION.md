# Informe de reestructuración conservadora — KJ PARFUMS

## Base y alcance
Fuente única: ZIP original `KJ-PARFUMS-HTML-CSS-JS-IMG.zip` entregado por el propietario. Objetivo: preservar íntegramente el prototipo V2.

## Qué se modificó
- `index.html`: se introdujeron saltos e indentación únicamente entre determinados elementos estructurales (`body`, `header`, `main`, `section`, `footer`). Se preservaron las etiquetas, atributos, textos, enlaces y selectores.
- `JS/app.js`: se añadieron encabezados de comentario pedagógico para datos, estado, selectores/funciones, eventos, inicialización y recursos multimedia. No se modificaron las expresiones ni el orden del código ejecutable.
- Se añadió este informe.

## Qué no se modificó
- `CSS/styles.css` (idéntico, byte por byte).
- `IMG/logo-oficial.jpg`, `IMG/LEEME.txt` y `README.md` (idénticos, byte por byte).
- Ningún producto, precio, fotografía, video, integración o funcionalidad nueva.
- Recursos opcionales de Instagram y TikTok continúan ausentes, igual que en el original.

## Validación
- `node --check JS/app.js`: correcto.
- Parseo HTML: correcto.
- Comparación de nodos, atributos y textos no vacíos del HTML original y actualizado: coinciden.
- Comparación de JavaScript descontando comentarios añadidos y espacios de presentación: coinciden los tokens de texto.
- Hash SHA-256: CSS, logotipo, archivo LEEME y README coinciden con el original.
- Se intentó realizar comparación con Chromium/Playwright, pero el entorno bloqueó tanto `file://` como `http://127.0.0.1`, por lo que **no se pudo completar prueba visual en navegador**.

## Pendientes y riesgo
- Pendiente: comparación de capturas antes/después en un navegador autorizado, en resoluciones móviles, tablet y escritorio; eventos, animaciones y formularios.
- Riesgo residual: la inserción de espacios en el HTML podría alterar situaciones excepcionales de whitespace, aunque las etiquetas y el CSS permanecen intactos. No se declara equivalencia visual al 100 % sin la comparación real.
- La reestructuración es deliberadamente limitada: una reforma extensa requeriría navegador de comparación para asegurar que no aparecen regresiones.
