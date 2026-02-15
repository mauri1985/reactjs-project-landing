import { useState, useRef, useEffect } from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import { useSearchParams } from "react-router-dom";
import Filtro from "../Filtro/filtro";

export default function ListaAnuncios() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenOrderMobile, setIsOpenOrderMobile] = useState(false);
  const [isOpenOrderDesktop, setIsOpenOrderDesktop] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  const orderRefDesktop = useRef(null);
  const orderRefMobile = useRef(null);

  const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1019/600/400",
  ];

  //Cerrar al hacer click afuera del ordenar por
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        orderRefMobile.current &&
        !orderRefMobile.current.contains(e.target)
      ) {
        setIsOpenOrderMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        orderRefDesktop.current &&
        !orderRefDesktop.current.contains(e.target)
      ) {
        setIsOpenOrderDesktop(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const toggleOrderMobile = () => {
    setIsOpenOrderMobile(!isOpenOrderMobile);
  };

  const toggleOrderDesktop = () => {
    setIsOpenOrderDesktop(!isOpenOrderDesktop);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  //TODO: Obtener con un fetch
  const tipoOperaciones = [
    { codigo: 1, descripcion: "Venta", cantidad: 550 },
    { codigo: 2, descripcion: "Alquiler", cantidad: 300 },
    { codigo: 3, descripcion: "Alquiler temporada", cantidad: 150 },
    { codigo: 4, descripcion: "Alquiler anual", cantidad: 3 },
  ];

  //TODO: Obtener con un fetch
  const tipoPropiedades = [
    { codigo: 1, descripcion: "Casa", cantidad: 5 },
    { codigo: 2, descripcion: "Apartamento", cantidad: 15 },
    { codigo: 3, descripcion: "Terreno", cantidad: 32 },
    { codigo: 4, descripcion: "Local comercial", cantidad: 12 },
    { codigo: 5, descripcion: "Oificina", cantidad: 6 },
    { codigo: 6, descripcion: "Chacra", cantidad: 8 },
  ];

  //TODO: Obtener con un fetch
  const departamento = [
    { codigo: 1, descripcion: "Montevideo", cantidad: 5 },
    { codigo: 2, descripcion: "Canelones", cantidad: 15 },
    { codigo: 3, descripcion: "Rocha", cantidad: 32 },
    { codigo: 4, descripcion: "Maldonado", cantidad: 12 },
    { codigo: 5, descripcion: "San Jose", cantidad: 6 },
    { codigo: 6, descripcion: "Artigas", cantidad: 8 },
  ];

  const properties = [
    {
      id: 1,
      ref: 123,
      titulo: "Lorem ipsum",
      descripcion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ab laudantium amet suscipit sapiente culpa incidunt quasi, reiciendis, nesciunt sit nobis sint! Molestias quos laboriosam excepturi temporibus ad placeat aspernatur!",
      calle: "Av. Mariscal Francisco Solano Lopez",
      esquina1: "Magenta",
      esquina2: "Plutarco",
      nroPuerta: "1781",
      letra: "bis",
      apartamento: "104",
      dormitorios: 1,
      banios: 1,
      areaTotal: 75,
      areaConstruida: 70,
      precio: 1000000,
      moneda: "U$S",
      fotos: images,
    },
    {
      id: 2,
      ref: 123,
      titulo: "Lorem ipsum",
      descripcion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ab laudantium amet suscipit sapiente culpa incidunt quasi, reiciendis, nesciunt sit nobis sint! Molestias quos laboriosam excepturi temporibus ad placeat aspernatur!",
      calle: "Av. Mariscal Francisco Solano Lopez",
      esquina1: "Magenta",
      esquina2: "Plutarco",
      nroPuerta: "1781",
      letra: "bis",
      apartamento: "104",
      dormitorios: 1,
      banios: 1,
      areaTotal: 75,
      areaConstruida: 70,
      precio: 1000000,
      moneda: "U$S",
      fotos: images,
    },
    {
      id: 3,
      ref: 123,
      titulo: "Lorem ipsum",
      descripcion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, ab laudantium amet suscipit sapiente culpa incidunt quasi, reiciendis, nesciunt sit nobis sint! Molestias quos laboriosam excepturi temporibus ad placeat aspernatur!",
      calle: "Av. Mariscal Francisco Solano Lopez",
      esquina1: "Magenta",
      esquina2: "Plutarco",
      nroPuerta: "1781",
      letra: "bis",
      apartamento: "104",
      dormitorios: 1,
      banios: 1,
      areaTotal: 75,
      areaConstruida: 70,
      precio: 1000000,
      moneda: "U$S",
      fotos: images,
    },
  ];

  const [params] = useSearchParams();
  const operacion = params.get("operacion");

  return (
    <div
      id="listaAnuncios"
      className="flex flex-col items-center w-full gap-3 pt-3"
    >
      {/* Barra superior (desktop) */}
      <div className="lg:flex flex-row hidden mx-3 mt-3 w-5/6 gap-3 justify-center">
        <div id="divBtnMapa">
          <button className="flex items-center text-gray-500 bg-white py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mostrar mapa
          </button>
        </div>
        <div id="divBtnOrdenar" ref={orderRefDesktop}>
          <button
            className="flex items-center text-gray-500 bg-white py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
            onClick={toggleOrderDesktop}
          >
            <div>
              <i className="bi bi-sort-down text-sm mr-2"></i>
            </div>
            <div>Ordenar por</div>
            <div>
              {isOpenOrderDesktop ? (
                <i className="bi bi-caret-up-fill ml-2"></i>
              ) : (
                <i className="bi bi-caret-down-fill ml-2"></i>
              )}
            </div>
          </button>
          {isOpenOrderDesktop ? (
            <div className="absolute animate-fade-down text-md text-gray-600 bg-white z-50 shadow-md">
              <div className="flex flex-col">
                <button
                  className="text-left p-2 border-b-1 border-gray-400"
                  onClick={toggleOrderDesktop}
                >
                  <i className="bi bi-sort-numeric-down mr-3"></i>Menor precio
                </button>
                <button className="text-left p-2" onClick={toggleOrderDesktop}>
                  <i className="bi bi-sort-numeric-down-alt mr-3"></i>
                  Mayor precio
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div id="divGrid">
          <button
            className="text-gray-500 bg-white py-1 px-2 rounded-md shadow-sm min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
            onClick={() => setViewMode("grid")}
          >
            <i className="bi bi-grid-3x3"></i>
          </button>
        </div>
        <div id="divList">
          <button
            className="text-gray-500 bg-white py-1 px-2 rounded-md shadow-sm min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
            onClick={() => setViewMode("list")}
          >
            <i className="bi bi-list-ul"></i>
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div
        id="contenedorPrincipal"
        className="lg:w-5/6 w-98 flex flex-col gap-3"
      >
        {/* Acciones mobile */}
        <div className="flex lg:hidden flex-row gap-3 items-center">
          <button
            className="flex items-center text-gray-500 bg-white py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
            onClick={toggleFilters}
          >
            <i className="bi bi-filter mr-2"></i>
            Filtros
            <i
              className={`bi ml-2 ${
                isOpenFilters ? "bi-caret-up-fill" : "bi-caret-down-fill"
              }`}
            ></i>
          </button>

          <button className="flex items-center text-gray-500 bg-white py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mapa
          </button>

          <div ref={orderRefMobile}>
            <button
              className="flex items-center text-gray-500 bg-white py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
              onClick={toggleOrderMobile}
            >
              <div>
                <i className="bi bi-sort-down text-sm mr-2"></i>
              </div>
              <div>Ordenar por</div>
              <div>
                {isOpenOrderMobile ? (
                  <i className="bi bi-caret-up-fill ml-2"></i>
                ) : (
                  <i className="bi bi-caret-down-fill ml-2"></i>
                )}
              </div>
            </button>
            {isOpenOrderMobile ? (
              <div className="absolute animate-fade-down text-md text-gray-600 bg-white z-50 shadow-md">
                <div className="flex flex-col">
                  <button
                    className="text-left p-2 border-b-1 border-gray-400"
                    onClick={toggleOrderMobile}
                  >
                    <i className="bi bi-sort-numeric-down mr-3"></i>Menor precio
                  </button>
                  <button className="text-left p-2" onClick={toggleOrderMobile}>
                    <i className="bi bi-sort-numeric-down-alt mr-3"></i>
                    Mayor precio
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Filtros + listado */}
        <div className="flex lg:flex-row justify-center flex-col lg:gap-5 gap-2">
          {/* Filtros */}
          <div
            className={`
            lg:w-[250px] min-w-[200px]
            lg:block
            ${isOpenFilters ? "block animate-fade-down" : "hidden"}
            lg:animate-none
          `}
          >
            <div className="flex flex-col gap-4">
              <Filtro title="Tipo de operación" options={tipoOperaciones} />
              <Filtro title="Tipo de propiedad" options={tipoPropiedades} />
              <Filtro title="Departamentos" options={departamento} />
            </div>
          </div>

          {/* Listado */}
          <div className="lg:w-[800px]">
            <div
              className={`flex gap-4 lg:gap-6
              ${
                viewMode === "grid" ? "flex-wrap justify-between" : "flex-col"
              }`}
            >
              {properties.map((prop) => (
                <div key={prop.id}>
                  <PropertyCard viewMode={viewMode} propertie={prop} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
