import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    svgr(),
  ],
  assetsInclude: ["**/*.JPG", "**/*.MOV", "**/*.MP4"],
  server: { allowedHosts: ["daily-rare-halibut.ngrok-free.app"] },
});
