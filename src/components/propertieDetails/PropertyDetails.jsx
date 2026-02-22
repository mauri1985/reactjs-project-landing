import { useParams } from "react-router-dom";
import { data } from "../../data/propiedades";
import useWindowSize from "../../useWindowSize/useWindowSize";
import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Mapa from "../mapa/Mapa";
import MyGallery from "../myGallery/MyGallery";
import {
  BedIcon,
  BathIcon,
  BorderStyle,
  CarGarage,
  Ruler,
  PinLocation,
} from "../../icons";

function PropertyDetail() {
  const { id } = useParams();
  const property = data.find((p) => p.id === Number(id));
  const { screenWidth, screenHeight, isMobile } = useWindowSize();

  if (!property) return <div>No encontrada</div>;

  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const mensaje = encodeURIComponent(
    `Hola, me interesa la propiedad ${property.titulo} (Ref: ${property.ref})`
  );

  const [lat, lng] = property.coordenadas
    .split(",")
    .map((c) => parseFloat(c.trim()));

  const openGallery = (index) => {
    setIsOpen(true);
    setCurrent(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center w-full py-4">
      <div className="flex lg:flex-row flex-col w-full max-w-[1200px] gap-3">
        <div className="flex flex-col lg:w-9/12 w-full lg:p-0 px-3 gap-4">
          {/* Titulo + precio */}
          <div className="w-full outline-2 outline-sky-500/50 bg-white shadow-blue-500/75 shadow-md/30 rounded-2xl lg:p-8 p-4">
            <div className="flex flex-row md:justify-between md:items-start gap-3">
              <div className="flex lg:flex-row flex-col w-full gap-3">
                <div className="lg:w-9/12 w-full lg:text-left text-center">
                  <h1 className="line-clamp-5 lg:text-3xl text-xl text-gray-600 font-bold pb-1 pl-1">
                    {property.titulo}
                  </h1>
                  <div className="lg:block flex flex-col lg:pt-3 pb-3">
                    <div>
                      <PinLocation
                        className="text-gray-500 inline"
                        width={"20px"}
                      />
                    </div>
                    <div>
                      <p className="text-gray-500 mt-3 inline lg:text-base text-sm">
                        {property.calle} {property.nroPuerta}, {property.barrio}
                        , {property.departamento}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:w-3/12 w-full lg:text-end text-center">
                  {property.precioVenta > 0 && (
                    <div className="text-2xl font-bold text-sky-600 ">
                      {property.monedaVenta}{" "}
                      {property.precioVenta.toLocaleString()}
                      <span className="block text-gray-500 font-thin text-xs">
                        Precio de venta
                      </span>
                    </div>
                  )}
                  {property.precioAlquiler > 0 && (
                    <div className="text-2xl font-bold text-sky-600">
                      {property.monedaAlquiler}{" "}
                      {property.precioAlquiler.toLocaleString()}
                      <span className="block text-gray-500 font-thin text-xs">
                        Precio de alquiler
                      </span>
                    </div>
                  )}
                  {property.expensas > 0 && (
                    <div className="text-2xl font-bold text-sky-600">
                      + {property.monedaExpensas}{" "}
                      {property.expensas.toLocaleString()}{" "}
                      <span className="block text-gray-500 font-thin text-xs">
                        Gastos comunes
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Galeria */}
          <div className="lg:block hidden w-full bg-white shadow-blue-500/75 shadow-md/30 rounded-2xl lg:p-8 p-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row w-full gap-3">
                <div className="w-4/6 min-h-[350px] rounded-2xl">
                  <img
                    src={property.fotos[0]}
                    onClick={() => openGallery(0)}
                    className="object-cover h-full rounded-2xl cursor-zoom-in border-1 border-gray-400/70 transition delay-100 duration-150 ease-in-out hover:scale-102"
                  />
                </div>
                <div className="flex flex-col w-2/6 gap-3">
                  <div className="h-1/2 rounded-md">
                    <img
                      src={property.fotos[1]}
                      onClick={() => openGallery(1)}
                      className="object-cover rounded-2xl cursor-zoom-in border-1 border-gray-400/70 transition delay-100 duration-150 ease-in-out hover:scale-102"
                    />
                  </div>
                  <div className="h-1/2 rounded-md">
                    <img
                      src={property.fotos[2]}
                      onClick={() => openGallery(2)}
                      className="object-cover rounded-2xl cursor-zoom-in border-1 border-gray-400/70 transition delay-100 duration-150 ease-in-out hover:scale-102"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 w-full">
                {property.fotos.map(
                  (foto, index) =>
                    index > 2 &&
                    index <= 5 && (
                      <div className="col-span-1">
                        <img
                          key={index}
                          src={foto}
                          onClick={() => openGallery(index)}
                          className="object-cover rounded-2xl cursor-zoom-in border-1 border-gray-400/70 transition delay-100 duration-150 ease-in-out hover:scale-102"
                        />
                      </div>
                    )
                )}
              </div>
              <div className="flex justify-center pt-1">
                <button
                  onClick={() => openGallery(0)}
                  className="bg-sky-500 text-white text-sm px-3 py-1 text-shadow-md/30 outline-2 outline-black/50 rounded-full cursor-pointer 
                transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-sky-600 hover:text-bold"
                >
                  Mostrar todas las fotos
                </button>
              </div>
            </div>
          </div>
          {/* Galeria mobile */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="lg:hidden block w-full"
          >
            <MyGallery
              images={property.fotos}
              showThumbnails={true}
              startIndex={current}
              showFullscreenButton={false}
            />
          </div>

          {/* Datos rapidos + descripcion */}
          <div className="flex flex-col w-full bg-white shadow-blue-500/75 shadow-md/30 rounded-2xl lg:p-8 p-4">
            {/* Descripción */}
            <div className="my-6 text-left text-gray-600">
              <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            </div>
            {/* Iconos + mini descripcion */}
            <div className="lg:flex lg:flex-wrap grid grid-cols-3 lg:justify-between justify-center gap-5 text-gray-700 w-full lg:text-md text-xs">
              <div>
                <BedIcon className="text-gray-500" width={"48px"} />
                <span>{property.dormitorios} Dorm.</span>
              </div>
              <div>
                <BathIcon className="text-gray-500" width={"48px"} />
                <span>{property.banios} baños</span>
              </div>
              <div>
                <Ruler className="text-gray-500" width={"48px"} />
                <span>Cons: {property.areaConstruida} m²</span>
              </div>
              <div>
                <BorderStyle className="text-gray-500" width={"48px"} />
                <span>Tot: {property.areaTotal} m²</span>
              </div>
              <div>
                <CarGarage className="text-gray-500" width={"48px"} />
                <span>{property.garages} Garages</span>
              </div>
            </div>
            <div className="my-6 text-gray-600">
              <p className="leading-relaxed">{property.descripcion}</p>
            </div>
          </div>

          {/* Otros datos */}
          <div className="w-full bg-white shadow-blue-500/75 shadow-md/30 rounded-2xl lg:p-8 p-4">
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
          {/* Ubicacion + mapa */}
          <div className="flex flex-col gap-5 w-full bg-white shadow-blue-500/75 shadow-md/30 rounded-2xl text-gray-700 lg:p-8 p-4">
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
            <div className={`shadow-md/30 rounded-xl`}>
              <Mapa
                lat={lat}
                lng={lng}
                heigth={isMobile ? "300px" : "400px"}
                popup={property.calle + " " + property.nroPuerta}
              />
            </div>
          </div>
        </div>
        {/* Formulario contacto */}
        <div className="lg:w-3/12 w-full lg:p-0 px-4">
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-2xl shadow-blue-500/75 shadow-md/30 p-3 space-y-6">
              <ContactForm property={property} />
            </div>
            <div className="bg-white rounded-2xl shadow-blue-500/75 shadow-md/30 p-3">
              Anuncios similares...
            </div>
            <div className="bg-white rounded-2xl shadow-blue-500/75 shadow-md/30 p-3">
              Publicidad...
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-2/3">
            <MyGallery
              images={property.fotos}
              showThumbnails={true}
              startIndex={current}
              showFullscreenButton={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetail;
