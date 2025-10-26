import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-pink-300 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>
          <div className="flex gap-4">
            Postagens Temas Cadastrar Tema Perfil Sair
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
