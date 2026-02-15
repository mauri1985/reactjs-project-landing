import { useState, React } from "react";
import { BedIcon, BathIcon, AreaIcon } from "../../icons";

const PropertyCard = ({ viewMode, propertie }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? propertie.fotos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === propertie.fotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`
        shadow-sm border border-gray-400/35 overflow-hidden rounded-sm
        transition-all duration-300
        flex flex-col    
        ${
          viewMode === "list"
            ? "lg:flex-row lg:h-[300px]"
            : "lg:flex-col lg:w-[380px] w-full"
        }
      `}
    >
      {/* Imagen */}
      <div
        className={`flex justify-center items-center lg:w-[380px] bg-green-200 
        ${viewMode === "grid" ? "h-[300px]" : "min-w-[380px]"}`}
      >
        <div className="relative bg-gray-400/50 h-full w-full overflow-hidden border-b-1 border-gray-300 ">
          {/* Contenedor deslizante */}
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {propertie.fotos.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
          >
            ❮
          </button>

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full"
          >
            ❯
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {propertie.fotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
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
          <p
            className={`m-1 text-gray-600 text-semibold line-clamp-2 ${
              viewMode === "grid" ? "lg:line-clamp-2" : "lg:line-clamp-4"
            }`}
          >
            {propertie.descripcion}
          </p>
          <p className="text-xs mt-1 mb-2 text-gray-600 ">
            <i className="bi bi-geo-alt-fill mr-1" />
            {propertie.calle}
            {propertie.esquina1 != "" ? ", " + propertie.esquina1 : ""}
          </p>
          <div className="flex flex-col h-18">
            {propertie.precioVenta !== "" ? (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {propertie.precioAlquiler !== "" ? "Venta: " : ""}
                {propertie.monedaVenta} {propertie.precioVenta}
              </span>
            ) : (
              <></>
            )}
            {propertie.precioAlquiler !== "" ? (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {propertie.precioVenta !== "" ? "Alquiler: " : ""}
                {propertie.monedaAlquiler} {propertie.precioAlquiler}{" "}
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
            <span className="leading-tight">{propertie.dormitorios} Dorm.</span>
          </div>
          <div className="inline-flex items-end gap-2">
            <BathIcon className="w-5 h-5 text-gray-500" />
            <span className="leading-tight">{propertie.banios} Baño</span>
          </div>
          <div className="inline-flex items-end gap-2">
            <AreaIcon className="w-5 h-5 text-gray-500" />
            <span className="leading-tight">
              Área: {propertie.areaTotal} m²
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
