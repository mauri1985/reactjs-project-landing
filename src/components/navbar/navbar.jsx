import React from "react";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    {
      id: 1,
      title: "Inicio",
      to: "/home",
    },
    {
      id: 2,
      title: "Venta",
      to: "/home",
    },
    {
      id: 3,
      title: "Alquiler",
      to: "/home",
    },
    {
      id: 4,
      title: "Proyectos",
      to: "/home",
    },
    {
      id: 5,
      title: "Inmobiliarias",
      to: "/home",
    },
    {
      id: 6,
      title: "Contacto",
      to: "/contacto",
    },
  ];

  const navbarRedes = [
    {
      id: 1,
      title: "Instagram",
      link: "https:www.instagram.com",
      icon: "bi bi-instagram",
    },
    {
      id: 2,
      title: "Tiktok",
      link: "https:www.tiktok.com",
      icon: "bi bi-tiktok",
    },

    {
      id: 3,
      title: "Facbook",
      link: "https:www.facebook.com",
      icon: "bi bi-facebook",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-45 from-indigo-400 via-sky-400 to-emerald-400 z-50 shadow-md/30 backdrop-blur-sm h-15 md:h-20">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-2 h-full">
        <div className="flex">
          <img src={Logo} alt="Logo de la empresa" className="w-[30px] mr-5" />
          <a className="text-white text-shadow-lg/30 text-2xl overflow-hidden whitespace-nowrap text-ellipsis mr-5">
            Inmobiliaria feliz
          </a>
        </div>

        {/* Botom hamburguesa */}
        <button
          className="lg:hidden text-white text-shadow-lg/30 z-50"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </button>

        {/* Enlances */}
        <div className="hidden lg:block mr-5">
          <ul className="flex sm:space-x-8 space-x-4 text-white items-center">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className="sm:text-lg text-sm transition-transform hover:scale-110 transform inline-block duration-300 text-shadow-lg/30"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="flex items-center">
              <a
                title="PUBLICAR PROPIEDAD"
                className="bg-white/40 px-4 py-2 rounded-full
                          transition-transform hover:scale-110 inline-block duration-300 text-shadow-lg/30
                          max-w-[140px] sm:max-w-none"
              >
                <p className="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer">
                  <i className="bi bi-plus mr-2 hidden lg:inline" />
                  PUBLICAR
                  <span className="hidden xl:inline ml-1">PROPIEDAD</span>
                </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div className="hidden lg:block">
          <ul className="flex sm:space-x-8 space-x-4 text-white items-center">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block transition-transform duration-300 transform hover:scale-125 text-shadow-lg/30"
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
            <li className="flex items-center">
              <a
                title="Ingresar"
                className="bg-white/40 px-2 py-1 rounded-full
                          transition-transform hover:scale-110 inline-block duration-300 text-shadow-lg/30
                          max-w-[140px] sm:max-w-none"
              >
                <p className="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer">
                  <i className="bi bi-person-circle hidden lg:inline text-3xl" />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed h-screen inset-0 bg-black/40 transition-opacity duration-400 z-30
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Menu mobile */}
      <div
        className={`md:hidden absolute top-0 right-0 h-screen sm:py-6 py-3 w-5/6 bg-linear-45 from-indigo-400 via-sky-400 to-emerald-400 transition-all duration-300 z-40 ${
          isOpen
            ? "animate-slide-in-right"
            : "md:opacity-0 invisible animate-slide-out-left"
        }`}
      >
        <div
          key={0}
          className="pt-2 pb-3 text-center border-b border-white border-white/90 w-full text-white"
        >
          <span className="text-shadow-lg/30">Inmobiliaria feliz</span>
        </div>
        <ul className="flex flex-col px-4 py-2 text-white">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center ">
              <a
                className="hover:text-gray-500 text-shadow-lg/30"
                href={link.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center space-x-4 px-4 py-2 border-t border-white justify-center text-white">
          <li>
            <a
              className="sm:text-lg text-sm bg-white/50 px-4 py-2 rounded-full
                          transition-transform hover:scale-110 inline-block duration-300 text-shadow-lg/50"
            >
              PUBLICAR PROPIEDAD
            </a>
          </li>
        </ul>
        <ul className="flex items-center space-x-4 px-4 py-2 border-t border-white/90 justify-center text-white">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <i
                  className={`${link.icon} text-lg text-white text-shadow-lg/50`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
