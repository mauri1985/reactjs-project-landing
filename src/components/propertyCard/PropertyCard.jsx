import { useState, React } from "react";
import { Link } from "react-router-dom";
import { BedIcon, BathIcon, AreaIcon, HeartAlt } from "../../icons";

const PropertyCard = ({ viewMode, property, toggleFavorito }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? property.fotos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === property.fotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Link
      to={`/propiedad/${property.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        overflow-hidden rounded-xl        
        flex flex-col cursor-pointer
        transition-all 
        transition-transform 
        duration-300 
        ease-out
        md:hover:scale-[1.01]
        md:hover:-translate-y-1
        shadow-blue-500/75 shadow-md/30
        ${
          viewMode === "list"
            ? "lg:flex-row lg:h-[300px]"
            : "lg:flex-col lg:w-[380px] w-full"
        }
        ${
          property.destacado === true
            ? "outline-4 outline-sky-400/85 font-semibold "
            : "outline-2 outline-gray-400/30"
        }
      `}
    >
      {/* Imagen */}
      <div
        className={`flex justify-center items-center lg:w-[380px] bg-green-200 
        ${viewMode === "grid" ? "h-[300px]" : "min-w-[380px]"}`}
      >
        <div className="relative bg-gray-400/50 h-full w-full overflow-hidden">
          {/* Contenedor deslizante */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {property.fotos.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute left-[10px] top-[10px] text-white text-xs font-semibold">
            <div className="flex flex-row gap-3 items-center ">
              {property.destacado === true && (
                <div className="rounded-md bg-red-500/85 shadow-md/30 text-shadow-md/30 px-3 py-2">
                  DESTACADO
                </div>
              )}

              {property.precioVenta !== "" && (
                <div className="rounded-md bg-green-500/85 shadow-md/30 text-shadow-md/30 px-3 py-2">
                  VENTA
                </div>
              )}

              {property.precioAlquiler !== "" && (
                <div className="rounded-md bg-blue-500/85 shadow-md/30 text-shadow-md/30 px-3 py-2">
                  ALQUILER
                </div>
              )}
            </div>
          </div>

          {/* Favoritos */}
          <div className="absolute right-[15px] top-[15px] text-xs text-sky-600 font-semibold ">
            <button
              className="z-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorito(property.id);
              }}
            >
              <HeartAlt
                className="transition-all 
                transition-transform                 
                duration-300 
                ease-out
                md:hover:scale-[1.3]"
                width={"28px"}
                fill={`${property.favorito === true ? "currentColor" : "none"}`}
                stroke={`${
                  property.favorito === false ? "currentColor" : "none"
                }`}
              />
            </button>
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/35 text-white px-2 py-1 h-[85px] w-[45px] rounded-md font-bold z-50"
          >
            ❮
          </button>

          {/* Flecha derecha */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/35 text-white px-2 py-1 h-[85px] w-[45px] rounded-md font-bold z-50"
          >
            ❯
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {property.fotos.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrent(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index ? "bg-white scale-110" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className={`
        flex-1 bg-white
        ${viewMode === "grid" ? "h-[230px]" : "h-full"}
        `}
      >
        {/* Contenido */}
        <div
          className={`lg:p-3 p-2 ${
            viewMode === "grid" ? "h-[180px]" : "h-9/12"
          }`}
        >
          <div className="h-1/2">
            <p
              className={`m-1 text-gray-600 text-semibold line-clamp-2 ${
                viewMode === "grid" ? "lg:line-clamp-2" : "lg:line-clamp-4"
              }`}
            >
              {property.titulo}
            </p>
            <p className="text-xs mt-1 mb-2 text-gray-600 ">
              <i className="bi bi-geo-alt-fill mr-1" />
              {property.calle}
              {property.esquina1 != "" ? ", " + property.esquina1 : ""}
            </p>
          </div>
          <div className="flex flex-col h-1/2">
            {property.precioVenta !== "" ? (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {property.precioAlquiler !== "" ? "Venta: " : ""}
                {property.monedaVenta} {property.precioVenta.toLocaleString()}
              </span>
            ) : (
              <></>
            )}
            {property.precioAlquiler !== "" ? (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {property.precioVenta !== "" ? "Alquiler: " : ""}
                {property.monedaAlquiler}{" "}
                {property.precioAlquiler.toLocaleString()}{" "}
                <span className="text-xl">/ Mes</span>
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex flex-row items-center justify-between text-xs border-t-1 border-gray-400/60 px-4
          ${viewMode === "grid" ? "min-h-[50px]" : "h-3/12 min-h-[50px]"}`}
        >
          <div className="inline-flex items-end gap-2">
            <BedIcon className="w-5 h-5 text-gray-500" />
            <span className="leading-tight">{property.dormitorios} Dorm.</span>
          </div>
          <div className="inline-flex items-end gap-2">
            <BathIcon className="w-5 h-5 text-gray-500" />
            <span className="leading-tight">{property.banios} Baño</span>
          </div>
          <div className="inline-flex items-end gap-2">
            <AreaIcon className="w-5 h-5 text-gray-500" />
            <span className="leading-tight">Área: {property.areaTotal} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
