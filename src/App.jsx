import Home from "./components/home/home";
import Contacto from "./components/contacto/contacto";
import MainLayout from "./components/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";
import ListaAnuncios from "./components/ListaAnuncios/ListaAnuncios";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/listado" element={<ListaAnuncios />} />
      </Route>
    </Routes>
  );
}

export default App;
