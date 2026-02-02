import React from "react";
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
    <div id="contacto" className="p-3 md:p-5 mt-16 md:mt-20 flex scroll-mt-24">
      <div class="flex flex-col md:grid grid-cols-2 gap-4 md:px-8 md:mx-8">
        <div className="text-gray-500">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 m-3">
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
              <p className="text-xl md mb-2 mt-2 text-gray-600">Casa central</p>
              <p className="mb-2">
                <i className="bi bi-geo-alt-fill mr-2"></i>
                Calle Falsa 1234 esq. Desconocida
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
                Lunes a Viernes 09:00 a 18:00 hs <br />
                Sabados de 10:00 a 13:00 hs
              </p>
            </div>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          quaerat maiores neque perferendis distinctio ducimus. Temporibus
          consectetur dolorem reprehenderit pariatur dicta ad, doloremque neque,
          odio laboriosam tempore praesentium maxime fugiat?
        </div>
      </div>
    </div>
  );
};

export default Contacto;
