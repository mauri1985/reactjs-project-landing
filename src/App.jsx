import Home from "./components/home/home";
import Contacto from "./components/contacto/contacto";
import MainLayout from "./components/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";
import ListaAnuncios from "./components/ListaAnuncios/ListaAnuncios";
import PropertieDetails from "./components/propertieDetails/PropertyDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/listado" element={<ListaAnuncios />} />
        <Route path="/propiedad/:id" element={<PropertieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
