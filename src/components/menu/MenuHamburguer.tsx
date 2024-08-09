import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface ArrowProps {
  handleArrow: () => void;
}

const MenuHamburguer: React.FC<ArrowProps> = ({ handleArrow }) => {
  return (
    <section className="absolute flex flex-col gap-6 text-white bg-blue_light top-0 right-0 p-10">
      <IoIosArrowBack
        onClick={handleArrow}
        className="text-blue_dark cursor-pointer hover:text-white ml-3"
      />
      <h1 className="text-blue_dark cursor-pointer hover:text-white rounded-lg py-2 px-4">
        Home
      </h1>
      <h1 className="text-blue_dark cursor-pointer hover:text-white rounded-lg py-2 px-4">
        Sobre Nós
      </h1>
      <h1 className="text-blue_dark cursor-pointer hover:text-white rounded-lg py-2 px-4">
        Projetos
      </h1>
      <h1 className="text-blue_dark cursor-pointer hover:text-white rounded-lg py-2 px-4">
        Contato
      </h1>
    </section>
  );
};

export { MenuHamburguer };
