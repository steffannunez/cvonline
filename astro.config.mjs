// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// IMPORTANTE para GitHub Pages:
//   - `site`: cambialo por https://TU_USUARIO.github.io
//   - `base`: si el repo se llama "cvonline", dejalo en '/cvonline'.
//            Si publicás en TU_USUARIO.github.io (repo especial),
//            poné base: '/' y site: 'https://TU_USUARIO.github.io'
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://steffannunez.github.io',
  base: '/cvonline',
});
