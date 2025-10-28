import { Link } from "react-router-dom";

function CardTema() {
  return (
    <div className="border flex flex-col rounded-2x1 overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indifo-800 text-white font-bold text-2x1">
        Tema
      </header>
      <p className="p-8 text-3x1 bg-slate-200 h-full">Descrição</p>

      <div className="flex">
        <Link
          to=""
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800
        flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to=""
          className="text-slate-100 bg-red-400 hover:bg-red-800
        flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
