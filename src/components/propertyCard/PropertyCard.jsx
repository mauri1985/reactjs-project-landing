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
        shadow-sky-500/75 shadow-md/30
        ${
          viewMode === "grid"
            ? "w-full max-w-[420px] mx-auto"
            : "lg:flex-row lg:h-[350px]"
        }
        ${
          property.destacado === true
            ? "outline-4 outline-sky-400/50 shadow-sky-500/75 shadow-md/75 font-semibold "
            : "outline-1 outline-gray-400/30"
        }
      `}
    >
      {/* Imagen */}
      <div
        className={`flex justify-center items-center 
        ${viewMode === "grid" ? "h-[300px] lg:w-full" : "w-[500px] "}`}
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
                src={property.fotos?.[index]}
                alt={`slide-${img}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute left-[10px] top-[10px]">
            <div className="flex flex-row gap-3 items-center ">
              {property.destacado === true && (
                <div className="rounded-sm shadow-md/30 bg-red-600 text-white text-xs font-thin px-2 py-1">
                  DESTACADO
                </div>
              )}

              {property.operaciones.includes("venta") && (
                <div className="rounded-sm shadow-md/30 bg-green-600 text-white text-xs font-thin px-2 py-1">
                  VENTA
                </div>
              )}

              {property.operaciones.includes("alquiler") && (
                <div className="rounded-sm shadow-md/30 bg-sky-600 text-white text-xs font-thin px-2 py-1">
                  ALQUILER
                </div>
              )}
            </div>
          </div>

          {/* Favoritos */}
          <div className="absolute right-[10px] top-[10px]">
            <button
              className="z-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorito(property.id);
              }}
            >
              <HeartAlt
                className="
                text-xs text-sky-500
                transition-all 
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/85 text-sky-500 px-2 py-1 h-[50px] w-[27px] rounded-r-xl font-bold z-50 cursor-pointer"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/85 text-sky-500 px-2 py-1 h-[50px] w-[27px] rounded-l-xl font-bold z-50 cursor-pointer"
          >
            ❯
          </button>

          {/* Indicador de pagina */}
          <div className="absolute bottom-2 left-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
            {current + 1} / {property.fotos.length}
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
            {property.precioVenta !== "" && (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {property.precioAlquiler !== "" ? "Venta: " : ""}
                {property.monedaVenta} {property.precioVenta.toLocaleString()}
              </span>
            )}
            {property.precioAlquiler !== "" && (
              <span className="m-1 text-2xl text-sky-700 font-semibold ">
                {property.precioVenta !== "" ? "Alquiler: " : ""}
                {property.monedaAlquiler}{" "}
                {property.precioAlquiler.toLocaleString()}{" "}
                <span className="text-xl">/ Mes</span>
              </span>
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
