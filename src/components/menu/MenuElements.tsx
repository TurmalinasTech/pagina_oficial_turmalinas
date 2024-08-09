import React from 'react'

const MenuElements: React.FC = () => {
  return (
    <section className="hidden md:flex gap-4 text-white ">
          <h1 className="font-light transition cursor-pointer hover:text-blue_dark hover:font-medium hover:bg-blue_light rounded-lg py-2 px-4">
            Home
          </h1>
          <h1 className="font-light transition cursor-pointer hover:text-blue_dark hover:font-medium hover:bg-blue_light rounded-lg py-2 px-4">
            Sobre Nós
          </h1>
          <h1 className="font-light transition cursor-pointer hover:text-blue_dark hover:font-medium hover:bg-blue_light rounded-lg py-2 px-4">
            Projetos
          </h1>
          <h1 className="font-light transition cursor-pointer hover:text-blue_dark hover:font-medium hover:bg-blue_light rounded-lg py-2 px-4">
            Contato
          </h1>
        </section>
  )
}

export { MenuElements }