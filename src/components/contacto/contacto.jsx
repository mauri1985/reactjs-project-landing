import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerSvg from "../../assets/marker.svg";
import TituloAnimado from "../TituloAnimado/TituloAnimado";
import TextoAnimado from "../TextoAnimado/TextoAnimado";

const Contacto = () => {
  const svgIcon = L.icon({
    iconUrl: markerSvg,
    iconSize: [32, 48],
    iconAnchor: [16, 135],
    popupAnchor: [0, -48],
  });

  return (
    <div id="contacto" className="flex flex-col items-center gap-3 mb-5">
      <TituloAnimado texto="Contacto" color="text-gray-600" />
      <TextoAnimado
        color="text-gray-600"
        texto={
          "Para comunicarse con nosotros, puede elegir cualqueira de los siguientes medios"
        }
      />
      <div className="flex sm:flex-row flex-col gap-3 w-full">
        <div className="lg:w-1/2 w-full">
          <div className="flex lg:flex-row flex-col gap-1">
            <div className="lg:w-3/5 w-full">
              <div className="h-60 max-w-[400px] overflow-hidden shadow-md/30">
                <MapContainer
                  center={[-34.9011, -56.1645]}
                  zoom={15}
                  className="h-[400px] z-10"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-34.9011, -56.1645]} icon={svgIcon}>
                    <Popup>Casa Central</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <div className="lg:ml-2">
                <p className="text-xl mb-2 pb-2 text-gray-600">Casa central</p>
                <p className="mb-2 pb-2 text-xs text-gray-600">
                  <i className="bi bi-geo-alt-fill mr-2"></i>
                  Calle Falsa 1234
                </p>
                <p className="mb-2 pb-2 text-xs text-gray-600">
                  <i className="bi bi-telephone-fill mr-2"></i>
                  +598 099123456
                </p>
                <p className="mb-2 pb-2 text-xs text-gray-600">
                  <i className="bi bi-envelope-fill mr-2"></i>
                  info@Inmobiliariafeliz.com
                </p>
                <p className="mb-2 pb-2 text-xs text-gray-600">
                  <i className="bi bi-clock-fill mr-2"></i>
                  Lunes a Viernes 09:00 a 18:00 hs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
