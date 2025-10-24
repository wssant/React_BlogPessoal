function Home() {
  return (
    <>
      <div className="bg-pink-300 flex flex-col items-center text-white">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-6x1 font-bold'>Blog Pessoal</h2>

            <p className='text-5x1'>Expresse aqui seus pensamentos e opiniões</p>

            <div className="flex justify-around gap-4">
              <div className='rounded text-white border-white
              border-solid border-2 py-2 px-4'>Nova Postagem</div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/wssant/Captura%20de%20tela%202025-10-23%20195934.png?updatedAt=1761260594297"
              alt="Imagem Página Home"
              className='w-3/3'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
