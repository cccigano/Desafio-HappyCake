import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home"; // Ajustar la ruta de importación
import Contacto from "./views/Contact";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
