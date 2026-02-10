import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filtro from "../Filtro/filtro";

export default function ListaAnuncios() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const orderRef = useRef(null);

  //Cerrar al hacer click afuera del ordenar por
  useEffect(() => {
    function handleClickOutside(e) {
      if (orderRef.current && !orderRef.current.contains(e.target)) {
        setIsOpenOrder(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilters = () => {
    setIsOpenFilters(!isOpenFilters);
    setIsOpenOrder(false);
  };

  const toggleOrder = () => {
    setIsOpenOrder(!isOpenOrder);
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
      <div className="lg:flex flex-row hidden mx-3 p-3 w-5/6 gap-3 justify-end">
        <div id="divBtnMapa">
          <button className="text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mapa
          </button>
        </div>
        <div id="divBtnOrdenar" ref={orderRef}>
          <button
            className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
            onClick={toggleOrder}
          >
            <div>
              <i className="bi bi-sort-down text-sm mr-2"></i>
            </div>
            <div>Ordenar por</div>
            <div>
              {isOpenOrder ? (
                <i className="bi bi-caret-up-fill ml-2"></i>
              ) : (
                <i className="bi bi-caret-down-fill ml-2"></i>
              )}
            </div>
          </button>
          {isOpenOrder ? (
            <div className="absolute animate-fade-down text-md text-gray-600 bg-white z-50 shadow-md">
              <div className="flex flex-col">
                <button
                  className="text-left p-2 border-b-1 border-gray-400"
                  onClick={toggleOrder}
                >
                  <i className="bi bi-sort-numeric-down mr-3"></i>Menor precio
                </button>
                <button className="text-left p-2" onClick={toggleOrder}>
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

      {/* Contenedor principal */}
      <div className="w-5/6 flex flex-col gap-3">
        {/* Acciones mobile */}
        <div className="flex lg:hidden flex-row gap-3 items-center">
          <button
            className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] font-bold"
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

          <button className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-sm shadow-sm text-xs min-h-[30px] font-bold">
            <i className="bi bi-map-fill mr-2"></i>
            Mapa
          </button>

          <div ref={orderRef}>
            <button
              className="flex items-center text-gray-500 bg-blue-200/50 py-1 px-2 rounded-md text-sm shadow-sm text-xs min-h-[30px] focus:ring-3 focus:ring-blue-300 font-bold"
              onClick={toggleOrder}
            >
              <div>
                <i className="bi bi-sort-down text-sm mr-2"></i>
              </div>
              <div>Ordenar por</div>
              <div>
                {isOpenOrder ? (
                  <i className="bi bi-caret-up-fill ml-2"></i>
                ) : (
                  <i className="bi bi-caret-down-fill ml-2"></i>
                )}
              </div>
            </button>
            {isOpenOrder ? (
              <div className="absolute animate-fade-down text-md text-gray-600 bg-white z-50 shadow-md">
                <div className="flex flex-col">
                  <button
                    className="text-left p-2 border-b-1 border-gray-400"
                    onClick={toggleOrder}
                  >
                    <i className="bi bi-sort-numeric-down mr-3"></i>Menor precio
                  </button>
                  <button className="text-left p-2" onClick={toggleOrder}>
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
            lg:w-2/6 max-w-[400px]
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
          <div className="lg:flex-1 bg-blue-500/30 text-center">
            Lorem ipsum...
          </div>
        </div>
      </div>
    </div>
  );
}
