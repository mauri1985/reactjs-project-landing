import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filtro from "../Filtro/filtro";

export default function ListaAnuncios() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenOrderMobile, setIsOpenOrderMobile] = useState(false);
  const [isOpenOrderDesktop, setIsOpenOrderDesktop] = useState(false);
  const orderRefDesktop = useRef(null);
  const orderRefMobile = useRef(null);

  const BedIcon = ({ className }) => (
    <svg viewBox="0 0 640 512" className={className} fill="currentColor">
      <path d="M64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224C320 206.3 334.3 192 352 192L512 192C565 192 608 235 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z" />
    </svg>
  );

  const ShowerIcon = ({ className }) => (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor">
      <path d="M22 0L22 7.28125C22.972656 7.109375 23.972656 7 25 7C26.027344 7 27.027344 7.109375 28 7.28125L28 0 Z M 25 9C18.394531 9 12.871094 13.273438 11.40625 19L38.59375 19C37.128906 13.273438 31.605469 9 25 9 Z M 10 21C8.347656 21 7 22.347656 7 24C7 25.652344 8.347656 27 10 27L40 27C41.652344 27 43 25.652344 43 24C43 22.347656 41.652344 21 40 21 Z M 17 30C15.894531 30 15 30.894531 15 32C15 33.105469 15.894531 34 17 34C18.105469 34 19 33.105469 19 32C19 30.894531 18.105469 30 17 30 Z M 25 30C23.894531 30 23 30.894531 23 32C23 33.105469 23.894531 34 25 34C26.105469 34 27 33.105469 27 32C27 30.894531 26.105469 30 25 30 Z M 33 30C31.894531 30 31 30.894531 31 32C31 33.105469 31.894531 34 33 34C34.105469 34 35 33.105469 35 32C35 30.894531 34.105469 30 33 30 Z M 13 38C11.894531 38 11 38.894531 11 40C11 41.105469 11.894531 42 13 42C14.105469 42 15 41.105469 15 40C15 38.894531 14.105469 38 13 38 Z M 21 38C19.894531 38 19 38.894531 19 40C19 41.105469 19.894531 42 21 42C22.105469 42 23 41.105469 23 40C23 38.894531 22.105469 38 21 38 Z M 29 38C27.894531 38 27 38.894531 27 40C27 41.105469 27.894531 42 29 42C30.105469 42 31 41.105469 31 40C31 38.894531 30.105469 38 29 38 Z M 37 38C35.894531 38 35 38.894531 35 40C35 41.105469 35.894531 42 37 42C38.105469 42 39 41.105469 39 40C39 38.894531 38.105469 38 37 38 Z M 9 46C7.894531 46 7 46.894531 7 48C7 49.105469 7.894531 50 9 50C10.105469 50 11 49.105469 11 48C11 46.894531 10.105469 46 9 46 Z M 17 46C15.894531 46 15 46.894531 15 48C15 49.105469 15.894531 50 17 50C18.105469 50 19 49.105469 19 48C19 46.894531 18.105469 46 17 46 Z M 25 46C23.894531 46 23 46.894531 23 48C23 49.105469 23.894531 50 25 50C26.105469 50 27 49.105469 27 48C27 46.894531 26.105469 46 25 46 Z M 33 46C31.894531 46 31 46.894531 31 48C31 49.105469 31.894531 50 33 50C34.105469 50 35 49.105469 35 48C35 46.894531 34.105469 46 33 46 Z M 41 46C39.894531 46 39 46.894531 39 48C39 49.105469 39.894531 50 41 50C42.105469 50 43 49.105469 43 48C43 46.894531 42.105469 46 41 46Z" />
    </svg>
  );

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
          <button className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mostrar mapa
          </button>
        </div>
        <div id="divBtnOrdenar" ref={orderRefDesktop}>
          <button
            className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
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
        <div id="divList">
          <button className="text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md shadow-sm min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-list-ul"></i>
          </button>
        </div>
        <div id="divGrid">
          <button className="text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md shadow-sm min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-grid-3x3"></i>
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="w-5/6 flex flex-col gap-3">
        {/* Acciones mobile */}
        <div className="flex lg:hidden flex-row gap-3 items-center">
          <button
            className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
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

          <button className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mapa
          </button>

          <div ref={orderRefMobile}>
            <button
              className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
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
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Filtros */}
          <div
            className={`
            lg:w-1/5 max-w-[400px]
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
          <div className="lg:flex-1">
            <div className="flex lg:flex-wrap justify-left lg:gap-4 gap-2">
              {/* Anuncio */}
              <div className="flex flex-col lg:h-[500px] lg:w-[400px] w-full shadow-md">
                <div className="bg-gray-400/50 h-7/12 w-full ">fotos</div>
                <div className="w-full h-4/12 lg:p-3 p-2 border-b-1 border-gray-400/50">
                  <p className="line-clamp-3 m-1 text-gray-800">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Architecto, magni mollitia ut harum nemo magnam, earum
                    quidem officiis repellendus nam sunt dolorum inventore iusto
                    praesentium porro est ipsa, iste laborum.
                  </p>
                  <p className="text-xs m-1">Calles: </p>
                  <p className="m-1 text-xl text-gray-600 font-bold">
                    U$S 1.000.000
                  </p>
                </div>
                <div className="w-full p-2 h-1/12">
                  <div className="flex flex-row h-full justify-between items-center text-xs text-gray-600 font-bold">
                    <div className="inline-flex items-end gap-2">
                      <BedIcon className="w-4 h-4 text-gray-500" />
                      <span className="leading-tight">2 Dorm.</span>
                    </div>
                    <div className="inline-flex items-end gap-2">
                      <ShowerIcon className="w-4 h-4 text-gray-500" />
                      <span className="leading-tight">1 Baño</span>
                    </div>
                    <div className="inline-flex items-end gap-2">
                      <i className="bi bi-rulers"></i>
                      <span className="leading-tight">Área: 57 m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
