import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Ajoutez ici les modules que vous souhaitez externaliser
      ],
    },
  },
  publicDir: 'public'  // Assurez-vous que le dossier public est correctement configuré
});
