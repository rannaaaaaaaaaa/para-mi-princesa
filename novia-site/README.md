# Para mi princesa 🐟🌸

Mini sitio con fondo de estanque de peces koi, cartas y minijuegos.

## Estructura
```
index.html      → portada "Para mi princesa"
cartas.html      → tus cartas, en formato de tarjetas
juegos.html      → pesca un piropo, memoria y ruleta de razones
css/style.css     → estilos y animaciones del estanque
js/pond.js       → genera el fondo animado (peces, nenúfares, ondas)
js/games.js      → lógica de los tres minijuegos
```

## Cómo subirlo a GitHub Pages

1. Creá un repositorio nuevo en GitHub (puede ser privado si querés que solo ella lo vea con el link, o público).
2. Desde esta carpeta, en la terminal:
   ```bash
   git init
   git add .
   git commit -m "Para mi princesa"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```
3. En GitHub: entrá al repo → **Settings** → **Pages** → en "Branch" elegí `main` y carpeta `/ (root)` → **Save**.
4. En un par de minutos el sitio va a estar en:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

Ese es el link que le mandás. Andá probándolo en el celular antes, para que se vea todo bien.

## Si querés editar algo
- Los textos de las cartas están directamente en `cartas.html`.
- Los piropos del juego de pesca y las razones de la ruleta están al principio de `js/games.js`, en las listas `PIROPOS` y `RAZONES` — podés agregar o sacar las que quieras.
- Los colores del estanque están como variables arriba de `css/style.css` (`:root`), por si querés ajustar algún tono.
