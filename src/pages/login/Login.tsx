import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { UsuarioLogin } from "../../models/UsuarioLogin";

function Login() {

  const navigate = useNavigate();

const { usuario, handleLogin, isLoading } = useContext(AuthContext)

const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
  {} as UsuarioLogin
)

useEffect(() => {
  if (usuario.token !== "") {
    navigate('/home')
  }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
    ...usuarioLogin,
    [e.target.name]: e.target.value
  })
}

function login(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" 
        onSubmit={login}>

          <h2 className="text-[#f7a7cc] text-5xl">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-[#f7a7cc] rounded p-2"
              value = {usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#f7a7cc] rounded p-2"
              value = {usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            type="submit"
            className="rounded bg-[#f7a7cc] flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2">
              { isLoading?
              <ClipLoader
            color="#ffffff"
          size={24}
        /> :
            <span>Entrar</span>
        }
          </button>
          <hr className="border-slate-800 w-full" />
          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="bg-[url('https://ik.imagekit.io/wssant/cadastro.png?updatedAt=1761521298951')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center">
        </div>
      </div>
    </>
  );
}

export default Login;
