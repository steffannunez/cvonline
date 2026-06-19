# CV Online — B. Estefan Núñez Maturana

CV interactivo con animaciones de scroll, construido con [Astro](https://astro.build) y desplegado en GitHub Pages.

- **Stack:** Astro + TypeScript + CSS nativo (sin frameworks pesados)
- **Animaciones:** scroll reveal (`IntersectionObserver`), parallax y barra de progreso — todo nativo, con respeto a `prefers-reduced-motion`
- **Contenido:** centralizado y tipado en `src/data/cv.ts`

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # previsualiza el build
```

## Editar tu contenido

Todo el contenido del CV vive en **un solo archivo**: `src/data/cv.ts`.
Editás ahí y la vista se actualiza sola. No toques los componentes para cambiar datos.

## Desplegar en GitHub Pages

1. Crear el repo en GitHub (ej: `cvonline`) y subir este proyecto:
   ```bash
   git init
   git add .
   git commit -m "feat: cv online con astro"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cvonline.git
   git push -u origin main
   ```

2. Editar `astro.config.mjs` con tus datos:
   - `site: 'https://TU_USUARIO.github.io'`
   - `base: '/cvonline'` (el nombre de tu repo).
     Si en cambio publicás en el repo especial `TU_USUARIO.github.io`,
     usá `base: '/'`.

3. En GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

4. El workflow `.github/workflows/deploy.yml` se ejecuta en cada push a `main`
   y publica automáticamente. Tu CV quedará en:
   `https://TU_USUARIO.github.io/cvonline/`

## Estructura

```
src/
├─ data/cv.ts            # ← fuente única de verdad (editá acá)
├─ layouts/Layout.astro  # head, fuentes, scripts de scroll
├─ components/           # Nav, Hero, Skills, Experience, Projects, Education, Contact
├─ styles/global.css     # design tokens + animaciones
└─ pages/index.astro     # ensambla todo
```
