import React from "react";
import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerSvg from "../../assets/marker.svg";

const Mapa = ({ lat, lng, heigth, popup }) => {
  const svgIcon = L.icon({
    iconUrl: markerSvg,
    iconSize: [32, 48],
    iconAnchor: [16, 50],
    popupAnchor: [0, -48],
  });

  // 1. Creamos una referencia para el marcador
  const markerRef = useRef(null);

  useEffect(() => {
    // Pequeño delay para asegurar que el DOM de Leaflet esté listo
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`overflow-hidden rounded-xl h-[${heigth}]`}>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        className={`z-10 h-[${heigth}]`}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={svgIcon} ref={markerRef}>
          <Popup autoClose={false} closeOnClick={false}>
            {popup}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
