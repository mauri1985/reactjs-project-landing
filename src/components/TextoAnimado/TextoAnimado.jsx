import React from "react";

const TextoAnimado = ({ texto, color }) => {
  return (
    <p
      className={`
        pb-6
        max-w-3xl 
        font-medium 
        opacity-0 
        animate-fade-up 
        delay-400 
        text-sm 
        md:text-base 
        max-w-md 
        md:max-w-3xl
        text-gray-600
        ${color}`}
    >
      {texto}
    </p>
  );
};

export default TextoAnimado;
