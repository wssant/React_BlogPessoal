/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners";

function DeletarTema() {
  const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema deletado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                alert('Humm... Ocorreu um erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center text-[#f7a7cc] my-4'>Deletar tema</h1>
      <p className='text-center font-semibold text-[#f7a7cc] mb-4'>
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>
      <div className='border- flex flex-col rounded-xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-[#9999ff] text-white font-bold text-2x1 flex justify-center'>
          Tema
        </header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
        <div className="flex">
          <button className='text-slate-100 bg-red-500 hover:bg-red-400 w-1/2 py-2'
          onClick={retornar}>
            Não
          </button>
          <button className='text-white bg-[#f7a7cc]
                hover:bg-[#f7a7] w-1/2 py-2'
                onClick={deletarTema}>
                  {isLoading ?
                  <ClipLoader color="#fff"
                size={24}/> :
            <span>Sim</span> 
                  }
          </button>
        </div>
      </div>
    </div>
  )
}
export default DeletarTema
