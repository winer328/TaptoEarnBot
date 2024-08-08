// vite.config.js
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "file:///D:/NewFolder(3)/workspace/telegram-game%20-vasili/client/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig, transformWithEsbuild } from "file:///D:/NewFolder(3)/workspace/telegram-game%20-vasili/client/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/NewFolder(3)/workspace/telegram-game%20-vasili/client/vite.config.js";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Workaround
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) {
          return null;
        }
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
          // 👈 this is important
        });
      }
    }
    // End workaround
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
    // basicSsl(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  publicDir: "./public",
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    // host: true,
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src")
      // "react-native": "react-native-webView",
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxOZXdGb2xkZXIoMylcXFxcd29ya3NwYWNlXFxcXHRlbGVncmFtLWdhbWUgLXZhc2lsaVxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXE5ld0ZvbGRlcigzKVxcXFx3b3Jrc3BhY2VcXFxcdGVsZWdyYW0tZ2FtZSAtdmFzaWxpXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovTmV3Rm9sZGVyKDMpL3dvcmtzcGFjZS90ZWxlZ3JhbS1nYW1lJTIwLXZhc2lsaS9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgdHJhbnNmb3JtV2l0aEVzYnVpbGQgfSBmcm9tIFwidml0ZVwiO1xyXG4vLyBpbXBvcnQgYmFzaWNTc2wgZnJvbSAnQHZpdGVqcy9wbHVnaW4tYmFzaWMtc3NsJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvXCIsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgLy8gQWxsb3dzIHVzaW5nIFJlYWN0IGRldiBzZXJ2ZXIgYWxvbmcgd2l0aCBidWlsZGluZyBhIFJlYWN0IGFwcGxpY2F0aW9uIHdpdGggVml0ZS5cclxuICAgIC8vIGh0dHBzOi8vbnBtanMuY29tL3BhY2thZ2UvQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXHJcbiAgICByZWFjdCgpLFxyXG4gICAgLy8gV29ya2Fyb3VuZFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImxvYWQrdHJhbnNmb3JtLWpzLWZpbGVzLWFzLWpzeFwiLFxyXG4gICAgICBhc3luYyB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcclxuICAgICAgICBpZiAoIWlkLm1hdGNoKC9zcmNcXC8uKlxcLmpzJC8pKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVzZSB0aGUgZXhwb3NlZCB0cmFuc2Zvcm0gZnJvbSB2aXRlLCBpbnN0ZWFkIG9mIGRpcmVjdGx5XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtaW5nIHdpdGggZXNidWlsZFxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1XaXRoRXNidWlsZChjb2RlLCBpZCwge1xyXG4gICAgICAgICAgbG9hZGVyOiBcImpzeFwiLFxyXG4gICAgICAgICAganN4OiBcImF1dG9tYXRpY1wiLCAvLyBcdUQ4M0RcdURDNDggdGhpcyBpcyBpbXBvcnRhbnRcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBFbmQgd29ya2Fyb3VuZFxyXG4gICAgLy8gQWxsb3dzIHVzaW5nIHNlbGYtc2lnbmVkIGNlcnRpZmljYXRlcyB0byBydW4gdGhlIGRldiBzZXJ2ZXIgdXNpbmcgSFRUUFMuXHJcbiAgICAvLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Adml0ZWpzL3BsdWdpbi1iYXNpYy1zc2xcclxuICAgIC8vIGJhc2ljU3NsKCksXHJcbiAgXSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGVzYnVpbGRPcHRpb25zOiB7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgIFwiLmpzXCI6IFwianN4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHVibGljRGlyOiBcIi4vcHVibGljXCIsXHJcbiAgc2VydmVyOiB7XHJcbiAgICAvLyBVbmNvbW1lbnQgdGhpcyBsaW5lIGlmIHlvdSB3YW50IHRvIGV4cG9zZSB5b3VyIGRldiBzZXJ2ZXIgYW5kIGFjY2VzcyBpdCBmcm9tIHRoZSBkZXZpY2VzXHJcbiAgICAvLyBpbiB0aGUgc2FtZSBuZXR3b3JrLlxyXG4gICAgLy8gaG9zdDogdHJ1ZSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgXCIuL3NyY1wiKSxcclxuICAgICAgLy8gXCJyZWFjdC1uYXRpdmVcIjogXCJyZWFjdC1uYXRpdmUtd2ViVmlld1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLFNBQVMsZUFBZTtBQUNqWSxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxjQUFjLDRCQUE0QjtBQUgwSyxJQUFNLDJDQUEyQztBQU85USxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUE7QUFBQTtBQUFBLElBR1AsTUFBTTtBQUFBO0FBQUEsSUFFTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUN4QixZQUFJLENBQUMsR0FBRyxNQUFNLGNBQWMsR0FBRztBQUM3QixpQkFBTztBQUFBLFFBQ1Q7QUFJQSxlQUFPLHFCQUFxQixNQUFNLElBQUk7QUFBQSxVQUNwQyxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUE7QUFBQSxRQUNQLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLFFBQVEsY0FBYyx3Q0FBZSxDQUFDLEdBQUcsT0FBTztBQUFBO0FBQUEsSUFFL0Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
