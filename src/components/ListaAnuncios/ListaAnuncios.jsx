import { useState, useRef, useEffect } from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import { useSearchParams } from "react-router-dom";
import Filtro from "../Filtro/filtro";
import { generarPropiedades } from "../../data/propiedades";
import API from "../../services/api";

export default function ListaAnuncios() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenOrderMobile, setIsOpenOrderMobile] = useState(false);
  const [isOpenOrderDesktop, setIsOpenOrderDesktop] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const orderRefDesktop = useRef(null);
  const orderRefMobile = useRef(null);
  const listRef = useRef(null);
  const [selectedOperations, setSelectedOperations] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const toggleFilter = (value, selected, setSelected) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFavorito = (id) => {
    setProperties((prev) =>
      prev.map((prop) =>
        prop.id === id ? { ...prop, favorito: !prop.favorito } : prop
      )
    );
  };

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
    { campo: "venta", descripcion: "Venta", cantidad: 550 },
    { campo: "alquiler", descripcion: "Alquiler", cantidad: 300 },
    { campo: "temporada", descripcion: "Alquiler temporada", cantidad: 150 },
    { campo: "proyecto", descripcion: "Proyecto", cantidad: 3 },
  ];

  //TODO: Obtener con un fetch
  const tipoPropiedades = [
    { campo: 1, descripcion: "Casa", cantidad: 5 },
    { campo: 2, descripcion: "Apartamento", cantidad: 15 },
    { campo: 3, descripcion: "Terreno", cantidad: 32 },
    { campo: 4, descripcion: "Local comercial", cantidad: 12 },
    { campo: 5, descripcion: "Oificina", cantidad: 6 },
    { campo: 6, descripcion: "Chacra", cantidad: 8 },
  ];

  //TODO: Obtener con un fetch
  const departamento = [
    { campo: 1, descripcion: "Montevideo", cantidad: 5 },
    { campo: 2, descripcion: "Canelones", cantidad: 15 },
    { campo: 3, descripcion: "Rocha", cantidad: 32 },
    { campo: 4, descripcion: "Maldonado", cantidad: 12 },
    { campo: 5, descripcion: "San Jose", cantidad: 6 },
    { campo: 6, descripcion: "Artigas", cantidad: 8 },
  ];

  //const [properties, setProperties] = useState(generarPropiedades(2000));
  const [properties, setProperties] = useState([]);
  const [params] = useSearchParams();
  const operacion = params.get("operacion");

  useEffect(() => {
    if (operacion) {
      setSelectedOperations([operacion]);
    } else {
      setSelectedOperations([]);
    }
  }, [operacion]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;

  const filteredProperties = properties.filter((prop) => {
    // filtro URL venta/alquiler
    const matchesOperacionUrl =
      !operacion || prop.operaciones?.includes(operacion);

    // filtro checkbox operaciones
    const matchesSelectedOperations =
      selectedOperations.length === 0 ||
      prop.operaciones?.some((op) => selectedOperations.includes(op));

    // filtro tipo propiedad
    const matchesPropertyType =
      selectedPropertyTypes.length === 0 ||
      selectedPropertyTypes.includes(prop.tipoPropiedad);

    // filtro departamento
    const matchesDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(prop.departamento);

    return (
      matchesOperacionUrl &&
      matchesSelectedOperations &&
      matchesPropertyType &&
      matchesDepartment
    );
  });

  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const maxVisiblePages = 5;

  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const visiblePages = [];

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [operacion]);

  useEffect(() => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);

  return (
    <div id="listaAnuncios" className="flex flex-col items-center gap-3">
      {/* Barra superior (desktop) */}
      <div className="lg:flex flex-row hidden mx-3 gap-3 justify-center">
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
      <div id="contenedorPrincipal" className="flex flex-col gap-3 w-full">
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
            {isOpenOrderMobile && (
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
            )}
          </div>
        </div>

        {/* Filtros + listado */}
        <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
          {/* Filtros */}
          <div
            className={`
            lg:w-[275px] min-w-[250px]
            lg:block
            ${isOpenFilters ? "block animate-fade-down" : "hidden"}
            lg:animate-none
          `}
          >
            <div className="flex flex-col gap-3 mb-3">
              <Filtro
                title="Tipo de operación"
                options={tipoOperaciones}
                selected={selectedOperations}
                onToggle={(value) =>
                  toggleFilter(value, selectedOperations, setSelectedOperations)
                }
              />
              <Filtro
                title="Tipo de propiedad"
                options={tipoPropiedades}
                selected={selectedPropertyTypes}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedPropertyTypes,
                    setSelectedPropertyTypes
                  )
                }
              />
              <Filtro
                title="Departamentos"
                options={departamento}
                selected={selectedDepartments}
                onToggle={(value) =>
                  toggleFilter(
                    value,
                    selectedDepartments,
                    setSelectedDepartments
                  )
                }
              />
            </div>
          </div>
          {/* Listado */}
          <div ref={listRef} className="w-full  scroll-mt-30">
            <div
              className={`
              ${
                viewMode === "grid"
                  ? "lg:grid grid-cols-3 gap-6 flex flex-col pt-1"
                  : "flex flex-col gap-4 lg:gap-6"
              }`}
            >
              {currentProperties.map((prop) => (
                <PropertyCard
                  key={prop.id}
                  viewMode={viewMode}
                  property={prop}
                  toggleFavorito={toggleFavorito}
                />
              ))}
            </div>
            {/* Indicadores de pagina */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border rounded disabled:opacity-40 text-gray-600 border-gray-600 hover:bg-sky-200 cursor-pointer"
              >
                ◀
              </button>

              {startPage > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="px-3 py-2 border rounded text-gray-600 border-gray-600 hover:bg-sky-200 cursor-pointer"
                  >
                    1
                  </button>
                  {startPage > 2 && <span className="px-2">...</span>}
                </>
              )}

              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 border rounded text-gray-600 border-gray-600 cursor-pointer
                              ${
                                currentPage === page
                                  ? "bg-sky-500 text-white border-sky-500"
                                  : "hover:bg-sky-200"
                              }
                              `}
                >
                  {page}
                </button>
              ))}

              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && (
                    <span className="px-2">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-3 py-2 border rounded text-gray-600 border-gray-600 hover:bg-sky-200 cursor-pointer"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 border rounded disabled:opacity-40 text-gray-500 border-gray-500 hover:bg-sky-200 cursor-pointer"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
