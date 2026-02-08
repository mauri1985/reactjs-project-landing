import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ListaAnuncios() {
  const [params] = useSearchParams();
  const operacion = params.get("operacion");

  const tipoOperaciones = [
    { codOperacion: 1, descOperacion: "Venta", cantidad: 550 },
    { codOperacion: 2, descOperacion: "Alquiler", cantidad: 300 },
    { codOperacion: 3, descOperacion: "Alquiler temporada", cantidad: 150 },
  ];

  const tipoPropiedades = [
    { codTipoProp: 1, descTipoProp: "Casa", cantidad: 5 },
    { codTipoProp: 2, descTipoProp: "Apartamento", cantidad: 15 },
    { codTipoProp: 3, descTipoProp: "Terreno", cantidad: 32 },
    { codTipoProp: 4, descTipoProp: "Local comercial", cantidad: 12 },
    { codTipoProp: 5, descTipoProp: "Oificina", cantidad: 6 },
    { codTipoProp: 6, descTipoProp: "Chacra", cantidad: 8 },
  ];

  const departamento = [
    { codDepto: 1, descDepto: "Montevideo", cantidad: 5 },
    { codDepto: 2, descDepto: "Canelones", cantidad: 15 },
    { codDepto: 3, descDepto: "Rocha", cantidad: 32 },
    { codDepto: 4, descDepto: "Maldonado", cantidad: 12 },
    { codDepto: 5, descDepto: "San Jose", cantidad: 6 },
    { codDepto: 6, descDepto: "Artigas", cantidad: 8 },
  ];
  return (
    <>
      <div class="flex flex-row justify-center">
        <div class="w-5/6">
          <div className="flex flex-row">
            <div class="lg:w-2/6 max-w-[300px] m-5">
              <div className="flex flex-col gap-4 ">
                <div className="bg-blue-200/30 py-5">
                  <div className="text-xl mb-2 text-gray-600 text-center">
                    Tipo de operación
                  </div>
                  <ul>
                    {tipoOperaciones.map((tipoOperacion) => (
                      <li>
                        <label
                          key={tipoOperacion.descOperacion}
                          className="flex justify-between items-center gap-2 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm text-gray-600"
                        >
                          {tipoOperacion.descOperacion} (
                          {tipoOperacion.cantidad})
                          <input
                            type="checkbox"
                            // checked={selected.includes(option)}
                            // onChange={() => toggleOption(option)}
                            className="accent-blue-500"
                          />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-200/30 py-5">
                  <div className="text-xl mb-2 text-gray-600 text-center">
                    Tipo de propiedad
                  </div>
                  <ul>
                    {tipoPropiedades.map((tipoProp) => (
                      <li>
                        <label
                          key={tipoProp.descTipoProp}
                          className="flex justify-between items-center gap-2 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm text-gray-600"
                        >
                          {tipoProp.descTipoProp} ({tipoProp.cantidad})
                          <input
                            type="checkbox"
                            // checked={selected.includes(option)}
                            // onChange={() => toggleOption(option)}
                            className="accent-blue-500"
                          />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-200/30 py-5">
                  <div className="text-xl mb-2 text-gray-600 text-center">
                    Departamento
                  </div>
                  <ul>
                    {departamento.map((depto) => (
                      <li>
                        <label
                          key={depto.descDepto}
                          className="flex justify-between items-center gap-2 lg:px-4 lg:py-2 px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm text-gray-600"
                        >
                          {depto.descDepto} ({depto.cantidad})
                          <input
                            type="checkbox"
                            // checked={selected.includes(option)}
                            // onChange={() => toggleOption(option)}
                            className="accent-blue-500"
                          />
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full bg-blue-500/30 text-center m-5 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nam
              fugit blanditiis ducimus at maiores vitae enim nisi dicta animi
              illo fugiat voluptatibus dolore recusandae atque. Necessitatibus
              quidem vitae architecto. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt vitae quidem consequatur fugit, ullam
              quo exercitationem quasi sit sequi aspernatur inventore enim
              dignissimos. Incidunt, harum officia perferendis repellendus
              quaerat explicabo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
