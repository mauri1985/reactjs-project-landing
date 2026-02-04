import Home from "./components/home/home";
import Contacto from "./components/contacto/contacto";
import MainLayout from "./components/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
