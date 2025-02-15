import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 5173,
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //     }
    //   }
    // }
  };
});