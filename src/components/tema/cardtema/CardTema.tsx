import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className='flex flex-col rounded-xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-[#9999ff] text-white font-bold text-2x1 flex justify-center'>Tema</header>
      <p className="p-8 text-3x1 bg-[#e6e6ff] text-white font-bold flex justify-center h-full">{tema.descricao}</p>

      <div className="flex">
        <Link
          to={`/editartema/${tema.id}`}
          className="text-white bg-[#f7a7cc]
                hover:bg-[#f7a7] w-1/2 py-2
                flex justify-center">
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletartema/${tema.id}`} 
          className='rounded-x1 text-white bg-red-500 hover:bg-red-400 w-1/2 py-2 flex justify-center'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
