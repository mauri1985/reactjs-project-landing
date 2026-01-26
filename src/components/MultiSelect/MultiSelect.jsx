import { useState, useRef, useEffect } from "react";

export default function MultiSelect({ label, options, rounded }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  // Texto del botón
  const labelText =
    selected.length === 0
      ? label
      : selected.length <= 2
      ? selected.join(", ")
      : `${selected.slice(0, 2).join(", ")} +${selected.length - 2}`;

  // 👉 Cerrar al hacer click afuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full md:w-auto md:flex-1 min-w-0"
    >
      {/* Botón */}
      <button
        type="button"
        title={selected.join(", ")}
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full min-w-0 border border-gray-300 bg-white p-3 text-left
                  text-gray-700 
                  truncate
                  ${rounded}`}
      >
        {selected.length === 0 ? label : selected.join(", ")}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute z-30 
                    w-max min-w-full max-w-[90vw]
                    rounded-lg bg-white shadow-lg
                    border border-gray-200 text-gray-700
                    max-h-60 overflow-y-auto animate-fade-down delay-600"
        >
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="accent-blue-500"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
