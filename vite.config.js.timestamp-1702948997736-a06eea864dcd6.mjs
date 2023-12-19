// vite.config.js
import { defineConfig } from "file:///C:/Users/rlarl/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/5%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/goobne/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/rlarl/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/5%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/goobne/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/rlarl/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/5%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/goobne/node_modules/@svgr/rollup/dist/index.js";
var vite_config_default = defineConfig({
  // root path 선언 필요: repository name과 동일하게 선언하기
  base: "/goobne",
  // vite에서 svg를 사용하기 위한 세팅
  plugins: [svgr(), react()],
  server: {
    // npm run dev 시 웹 브라우저 자동 열기
    open: true
  },
  build: {
    // 패키지 크기 압축
    chunkSizeWarningLimit: 1600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxybGFybFxcXFxPbmVEcml2ZVxcXFxcdUJDMTRcdUQwRDUgXHVENjU0XHVCQTc0XFxcXDVcdUNDMjggXHVENTA0XHVCODVDXHVDODFEXHVEMkI4XFxcXGdvb2JuZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccmxhcmxcXFxcT25lRHJpdmVcXFxcXHVCQzE0XHVEMEQ1IFx1RDY1NFx1QkE3NFxcXFw1XHVDQzI4IFx1RDUwNFx1Qjg1Q1x1QzgxRFx1RDJCOFxcXFxnb29ibmVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3JsYXJsL09uZURyaXZlLyVFQiVCMCU5NCVFRCU4MyU5NSUyMCVFRCU5OSU5NCVFQiVBOSVCNC81JUVDJUIwJUE4JTIwJUVEJTk0JTg0JUVCJUExJTlDJUVDJUEwJTlEJUVEJThBJUI4L2dvb2JuZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICdAc3Znci9yb2xsdXAnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyByb290IHBhdGggXHVDMTIwXHVDNUI4IFx1RDU0NFx1QzY5NDogcmVwb3NpdG9yeSBuYW1lXHVBQ0ZDIFx1QjNEOVx1Qzc3Q1x1RDU1OFx1QUM4QyBcdUMxMjBcdUM1QjhcdUQ1NThcdUFFMzBcclxuICBiYXNlOiAnL2dvb2JuZScsXHJcbiAgLy8gdml0ZVx1QzVEMFx1QzExQyBzdmdcdUI5N0MgXHVDMEFDXHVDNkE5XHVENTU4XHVBRTMwIFx1QzcwNFx1RDU1QyBcdUMxMzhcdUQzMDVcclxuICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIC8vIG5wbSBydW4gZGV2IFx1QzJEQyBcdUM2RjkgXHVCRTBDXHVCNzdDXHVDNkIwXHVDODAwIFx1Qzc5MFx1QjNEOSBcdUM1RjRcdUFFMzBcclxuICAgIG9wZW46IHRydWUsXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gXHVEMzI4XHVEMEE0XHVDOUMwIFx1RDA2Q1x1QUUzMCBcdUM1NTVcdUNEOTVcclxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTYwMCxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnWixTQUFTLG9CQUFvQjtBQUM3YSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsTUFBTTtBQUFBO0FBQUEsRUFFTixTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUFBLEVBQ3pCLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
