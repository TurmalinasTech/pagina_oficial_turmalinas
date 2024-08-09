import React from "react";

interface Content{
  title: string
  frase: string
  botao: string
  voluntaria: string
}

const HeroText: React.FC<Content> = ({title, frase, botao, voluntaria}) => {
  return (
    <section className="flex pb-6 my-10 md:my-0 ">
      <div className="gap-6 xl:m-14 flex justify-center flex-col">
        <h1 className="text-blue font-extrabold text-4xl">
          {title}
        </h1>
        <h3 className="text-blue_dark">{frase}</h3>
        <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue_dark w-44 hover:bg-blue transition-all text-white font-semibold text-xs rounded-3xl py-2">
          {botao}
        </button>
        <button className="bg-blue_ w-44 hover:bg-blue transition-all text-white font-semibold text-xs rounded-3xl py-2">
          {voluntaria}
        </button>
        </div>
      </div>
    </section>
  );
};

export { HeroText };
