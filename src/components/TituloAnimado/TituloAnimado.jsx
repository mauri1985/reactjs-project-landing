import React from "react";

const TituloAnimado = ({ texto, color }) => {
  return (
    <h1
      className={`
        text-3xl 
        md:text-5xl 
        leading-tight 
        md:leading-snug 
        drop-shadow-lg                      
        opacity-0 
        animate-fade-up 
        delay-200 
        text-gray-600g
        ${color}
      `}
    >
      {texto}
    </h1>
  );
};

export default TituloAnimado;
