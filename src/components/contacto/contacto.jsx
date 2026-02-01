import React from "react";
import bgImg from "../../assets/02.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contacto = () => {
  return (
    <div id="contacto" className="p-3 md:p-5 mt-16 md:mt-20 flex scroll-mt-24">
      <div class="grid grid-cols-2 gap-4 px-8 mx-8">
        <div className="text-gray-500">
          <div className="flex">
            <div className="flex-1 m-3">
              <div className="w-full h-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-md/30">
                <MapContainer
                  center={[-34.9011, -56.1645]}
                  zoom={15}
                  className="h-[400px] rounded-xl z-10"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-34.9011, -56.1645]}>
                    <Popup>Casa Central</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="flex-1 m-1 text-xl">
              <p className="text-3xl md mb-2 mt-2 text-gray-600">
                Casa central
              </p>
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
          <div className="flex">
            <div className="flex-1 m-3">
              <div className="w-full h-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-md/30">
                <MapContainer
                  center={[-34.9011, -56.1645]}
                  zoom={15}
                  className="h-[400px] rounded-xl"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-34.9011, -56.1645]}>
                    <Popup>Casa Central</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="flex-1 m-1 text-xl">
              <p className="text-3xl md mb-2 mt-2 text-gray-600">
                Casa central
              </p>
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
          <div className="flex">
            <div className="flex-1 m-3">
              <div className="w-full h-[400px] md:h-[300px] rounded-xl overflow-hidden shadow-md/30">
                <MapContainer
                  center={[-34.9011, -56.1645]}
                  zoom={15}
                  className="h-[400px] rounded-xl"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[-34.9011, -56.1645]}>
                    <Popup>Casa Central</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="flex-1 m-1 text-xl">
              <p className="text-3xl md mb-2 mt-2 text-gray-600">
                Casa central
              </p>
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
