import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerSvg from "../../assets/marker.svg";

const Contacto = () => {
  const svgIcon = L.icon({
    iconUrl: markerSvg,
    iconSize: [32, 48],
    iconAnchor: [16, 135],
    popupAnchor: [0, -48],
  });

  return (
    <div
      id="contacto"
      className="scroll-mt-24 lg:mx-5 mx-3 pt-3 lg:pt-5 mb-3 lg:mb-5"
    >
      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
        <div className="text-gray-500 col-span-1">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 lg:m-3">
              <div className="h-50 w-full rounded-xl overflow-hidden shadow-md/30">
                <MapContainer
                  center={[-34.9011, -56.1645]}
                  zoom={15}
                  className="h-[400px] rounded-xl z-10"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-34.9011, -56.1645]} icon={svgIcon}>
                    <Popup>Casa Central</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="flex-1 mx-2 text-md">
              <p className="text-xl mb-2 mt-2 md:py-1 text-gray-600">
                Casa central
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill mr-2"></i>
                Calle Falsa 1234
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone-fill mr-2"></i>
                +598 099123456
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-fill mr-2"></i>
                info@Inmobiliariafeliz.com
              </p>
              <p className="mb-2">
                <i className="bi bi-clock-fill mr-2"></i>
                Lunes a Viernes 09:00-18:00 hs <br />
                Sabados de 10:00 a 13:00 hs
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-500 col-span-1 md:mr-15">
          {/* Formulario */}
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
