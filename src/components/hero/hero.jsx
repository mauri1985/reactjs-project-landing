import React from "react";
import bgImg from "../../assets/02.jpg";
import MultiSelect from "../MultiSelect/MultiSelect";
import { useRef, useEffect } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  //Cerrar al hacer click afuera
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
    <section ref={containerRef} className="mt-16 p-3 md:p-5 md:mt-20">
      <div
        className="relative
                  bg-cover bg-no-repeat bg-center
                  h-[calc(100vh-95px)]
                  md:h-[calc(100vh-115px)]
                  rounded-xl
                  bg-blend-multiply bg-black/30"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Contenido */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          {/* Título */}
          <h1
            className="text-3xl md:text-5xl leading-tight md:leading-snug font-bold drop-shadow-lg
                      opacity-0 animate-fade-up delay-200 text-shadow-lg/30"
          >
            Alquiler y venta de propiedades
          </h1>

          {/* Texto */}
          <p
            className="md:mt-6 mt-3 mb-3 max-w-3xl font-medium text-white
                      opacity-0 animate-fade-up delay-400 text-sm md:text-base max-w-md md:max-w-3xl
                      text-shadow-lg/30"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            harum, deleniti sed necessitatibus ab laborum delectus veniam,
            libero error placeat dolorum perferendis vitae ex, dolore voluptas.
            Consequuntur suscipit beatae libero!
          </p>

          {/* Buscador */}
          <div className="relative z-20 w-5/6 max-w-5xl ">
            <div
              className="flex flex-col md:flex-row
              gap-2 md:gap-0
              bg-white/90 backdrop-blur-md
              p-2 rounded-2xl md:rounded-full"
            >
              {/* Tipo de propiedad */}
              <div className="flex flex-col md:flex-row w-full ">
                <MultiSelect
                  rounded="md:rounded-l-full rounded-t-xl"
                  label="Tipo de propiedad"
                  options={[
                    "Todos",
                    "Casa",
                    "Apartamento",
                    "Local",
                    "Terreno",
                    "Proyecto",
                  ]}
                />

                {/* Operacion */}
                <MultiSelect
                  label="Operación"
                  options={["Todos", "Alquiler", "Venta", "Alquier temporada"]}
                />

                {/* Departamente */}
                <MultiSelect
                  label="Departamento"
                  options={["Todos", "Montevideo", "Canelones", "San José"]}
                />
                {/* Texto libre */}
                <input
                  type="text"
                  placeholder="Barrio, zona o palabra clave"
                  className="w-full
                  md:w-1/4 p-2 border border-gray-300 bg-white text-gray-700
                  focus:outline-none"
                />
                {/* Botón */}
                <button
                  className="w-full
                  md:w-[70px]
                  h-10 md:h-full bg-blue-500 font-semibold md:rounded-r-full rounded-b-lg text-white
                  hover:bg-blue-600 transition"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Botón WhatsApp*/}
          {/* <a
            href="#"
            className="mt-6 inline-block rounded-lg bg-green-500 px-6 py-3 font-semibold
               text-white shadow-lg hover:bg-green-600 transition
               opacity-0 animate-fade-up delay-600"
          >
            Contactar por WhatsApp
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
