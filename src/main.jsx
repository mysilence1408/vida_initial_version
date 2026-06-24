import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ReactLenis from "lenis/react";

createRoot(document.getElementById("root")).render(
  <Suspense>
    <ReactLenis root options={{ lerp: 0.05 }}>
      <StrictMode>
        <NavBar />
        <App />
        <Footer />
      </StrictMode>
    </ReactLenis>
  </Suspense>
);
