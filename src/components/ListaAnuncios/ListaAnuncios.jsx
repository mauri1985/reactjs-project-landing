import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ListaAnuncios() {
  const [params] = useSearchParams();
  const operacion = params.get("operacion");

  return (
    <>
      <div class="flex flex-row bg-yellow-500/30 justify-center">
        <div class="w-5/6">
          <div className="flex flex-row">
            <div class="lg:w-2/6 max-w-[300px] bg-blue-500/30 m-5 ">
              Filtro: {operacion} <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nam
              fugit blanditiis ducimus at maiores vitae enim nisi dicta animi
              illo fugiat voluptatibus dolore recusandae atque. Necessitatibus
              quidem vitae architecto. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt vitae quidem consequatur fugit, ullam
              quo exercitationem quasi sit sequi aspernatur inventore enim
              dignissimos. Incidunt, harum officia perferendis repellendus
              quaerat explicabo.
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
