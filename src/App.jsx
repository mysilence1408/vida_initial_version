import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dynamically import pages
const pages = import.meta.glob("./pages/*.jsx", { eager: true });

const routes = Object.entries(pages).map(([path, module]) => {
  const routePath = path
    .replace("./pages", "")
    .replace(".jsx", "")
    .replace("/index", "");
  return { path: routePath || "/", Component: module.default };
});

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
