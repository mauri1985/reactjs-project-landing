import { useParams } from "react-router-dom";
import { data } from "../../data/propiedades";
import {
  BedIcon,
  BathIcon,
  BorderStyle,
  CarGarage,
  Ruler,
  PinLocation,
} from "../../icons";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Mapa from "../mapa/Mapa";

function PropertyDetail() {
  const { id } = useParams();
  const property = data.find((p) => p.id === Number(id));

  if (!property) return <div>No encontrada</div>;

  const [current, setCurrent] = useState(0);

  const mensaje = encodeURIComponent(
    `Hola, me interesa la propiedad ${property.titulo} (Ref: ${property.ref})`
  );

  const [lat, lng] = property.coordenadas
    .split(",")
    .map((c) => parseFloat(c.trim()));

  // const next = () => {
  //   setCurrent((prev) => (prev === property.fotos.length - 1 ? 0 : prev + 1));
  // };

  // const prev = () => {
  //   setCurrent((prev) => (prev === 0 ? property.fotos.length - 1 : prev - 1));
  // };

  return (
    <div className="flex justify-center w-full p-3">
      <div className="flex flex-row w-full max-w-[1200px] gap-3">
        <div className="flex flex-col w-9/12 gap-4">
          {/* Galeria */}
          <div className="w-full bg-white shadow-md/30 rounded-xl p-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row w-full gap-3">
                <div className="w-4/6 min-h-[350px] rounded-md">
                  <img
                    src={property.fotos[0]}
                    onClick={() => setCurrent(0)}
                    className="object-cover h-full rounded-lg cursor-pointer border-1 border-gray-400/70"
                  />
                </div>
                <div className="flex flex-col w-2/6 gap-3">
                  <div className="h-1/2 rounded-md">
                    <img
                      src={property.fotos[1]}
                      className="object-cover rounded-lg cursor-pointer border-1 border-gray-400/70"
                    />
                  </div>
                  <div className="h-1/2 rounded-md">
                    <img
                      src={property.fotos[2]}
                      className="object-cover rounded-lg cursor-pointer border-1 border-gray-400/70"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full">
                {property.fotos.map(
                  (foto, index) =>
                    index > 2 &&
                    index <= 7 && (
                      <div className="">
                        <img
                          key={index}
                          src={foto}
                          onClick={() => setCurrent(index)}
                          className="object-cover rounded-lg cursor-pointer border-1 border-gray-400/70"
                        />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          {/* Título + Descripciones */}
          <div className="w-full bg-white shadow-md/30 rounded-xl p-6">
            <div className="flex flex-row md:justify-between md:items-start my-4 gap-">
              <div className="flex flex-row w-full">
                <div className="w-9/12">
                  <h1 className="text-3xl text-gray-700 font-bold pb-1 pl-1">
                    {property.titulo}
                  </h1>
                  <PinLocation
                    className="text-gray-500 inline"
                    width={"20px"}
                  />
                  <p className="text-gray-500 mt-3 inline text-base">
                    {property.calle} {property.nroPuerta}, {property.barrio},{" "}
                    {property.departamento}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-3/12 text-end">
                  {property.precioVenta > 0 && (
                    <div className="text-xl font-bold text-sky-600 ">
                      {property.monedaVenta}{" "}
                      {property.precioVenta.toLocaleString()}
                      <span className="block font-thin text-xs">
                        Precio de venta
                      </span>
                    </div>
                  )}
                  {property.precioAlquiler > 0 && (
                    <div className="text-xl font-bold text-sky-600">
                      {property.monedaAlquiler}{" "}
                      {property.precioAlquiler.toLocaleString()}
                      <span className="block font-thin text-xs">
                        Precio alquiler
                      </span>
                    </div>
                  )}
                  {property.expensas > 0 && (
                    <div className="text-xl font-bold text-sky-600">
                      + {property.monedaExpensas}{" "}
                      {property.expensas.toLocaleString()}{" "}
                      <span className="block font-thin text-xs">
                        Gastos comunes
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Datos rápidos */}
            <div className="flex flex-wrap justify-between gap-6 p-6 my-6 text-gray-700">
              <div className="flex flex-col">
                <BedIcon className="text-gray-500" width={"48px"} />
                <span className="text-md">{property.dormitorios} Dorm.</span>
              </div>
              <div className="flex flex-col items-center">
                <BathIcon className="text-gray-500" width={"48px"} />
                <span className="text-md">{property.banios} baños</span>
              </div>
              <div className="flex flex-col items-center">
                <Ruler className="text-gray-500" width={"48px"} />
                <span>Cons: {property.areaConstruida} m²</span>
              </div>
              <div className="flex flex-col items-center">
                <BorderStyle className="text-gray-500" width={"48px"} />
                <span>Tot: {property.areaTotal} m²</span>
              </div>
              <div className="flex flex-col items-center">
                <CarGarage className="text-gray-500" width={"48px"} />
                <span>{property.garages} Garages</span>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6 text-gray-600">
              <h2 className="text-xl font-semibold mb-2">Descripción</h2>
              <p className="leading-relaxed">{property.descripcion}</p>
            </div>
          </div>

          {/* Otros datos */}
          <div className="w-full bg-white shadow-md/30 rounded-xl p-6">
            {/* Características */}
            <div className="mb-8">
              <h2 className="text-xl text-gray-700 font-semibold mb-3">
                Características
              </h2>

              <ul className="flex flex-wrap gap-3">
                {property.caracteristicas.map((carcterisitca, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-sky-600 rounded-md text-md text-white text-shadow-md"
                  >
                    {carcterisitca}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ambientes */}
            <div className="mb-6">
              <h2 className="text-xl text-gray-700 font-semibold mb-3">
                Ambientes
              </h2>

              <ul className="flex flex-wrap gap-3">
                {property.ambientes.map((ambiente, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-sky-600 rounded-md text-md text-white text-shadow-md"
                  >
                    {ambiente}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full bg-white shadow-md/30 rounded-xl p-6 text-gray-700">
            {/* Ubicacion */}
            <div className="">
              <h2 className="text-xl font-semibold">Ubicación</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
              <div className="block text-sm font-semibold">
                Dirección:{" "}
                <span className="font-thin text-gray-500">
                  {property.calle} {property.nroPuerta}
                </span>
              </div>
              <div className="block text-sm font-semibold">
                Barrio:{" "}
                <span className="font-thin text-gray-500">
                  {property.barrio}
                </span>
              </div>
              <div className="block text-sm font-semibold">
                Departament:{" "}
                <span className="font-thin text-gray-500">
                  {property.departamento}
                </span>
              </div>
            </div>
            <div className="shadow-md/30 rounded-xl">
              <Mapa
                lat={lat}
                lng={lng}
                heigth={"400px"}
                popup={property.calle + " " + property.nroPuerta}
              />
            </div>
          </div>
        </div>
        {/* Formulario sencillo */}
        <div className="w-3/12">
          <div className="flex flex-col  gap-3">
            <div className="bg-white rounded-xl shadow-md/30 p-3 space-y-6">
              <ContactForm property={property} />
            </div>
            <div className="bg-white rounded-xl shadow-md/30 p-3">
              Anuncios similares...
            </div>
            <div className="bg-white rounded-xl shadow-md/30 p-3">
              Publicidad...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
