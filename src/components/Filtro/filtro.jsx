import { React, useState } from "react";

export default function Filtro({ title, options }) {
  const [open, setOpen] = useState(false);
  const visibles = options.slice(0, 3);
  const extras = options.slice(3);

  return (
    <div className="bg-blue-200/30 py-5 px-2 shadow-sm">
      <div className="text-md font-bold mb-2 text-gray-600 text-center">
        {title}
      </div>

      <ul>
        {visibles.map((options) => (
          <li key={options.codigo}>
            <label className="flex justify-between items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 text-xs text-gray-600">
              {options.descripcion} ({options.cantidad})
              <input type="checkbox" className="accent-blue-500" />
            </label>
          </li>
        ))}
      </ul>

      {/* Acordeón solo para extras */}
      <div
        className={`grid transition-[grid-template-rows]
                                duration-300 ease-in-out
                                ${
                                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
      >
        <ul className="overflow-hidden">
          {extras.map((options) => (
            <li key={options.codigo}>
              <label className="flex justify-between items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 text-sm text-gray-600">
                {options.descripcion} ({options.cantidad})
                <input type="checkbox" className="accent-blue-500" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      {extras.length > 0 && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-2 mx-auto block text-sm text-blue-600 hover:underline"
        >
          {open ? "Mostrar menos" : "Más opciones"}
        </button>
      )}
    </div>
  );
}
