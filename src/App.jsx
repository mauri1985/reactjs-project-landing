import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contacto from "./components/contacto/contacto";
import MainLayout from "./components/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";
import ListaAnuncios from "./components/ListaAnuncios/ListaAnuncios";
import PropertieDetails from "./components/propertieDetails/PropertyDetails";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/listado" element={<ListaAnuncios />} />
          <Route path="/propiedad/:id" element={<PropertieDetails />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
