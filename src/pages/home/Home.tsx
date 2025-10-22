function Home() {
  return (
    <>
        <div
        style={{
        backgroundColor: ' #f7a7cc',
        display: "flex",
        justifyContent: "center"
    }}
    >
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "1fr 'fr",
            color: "white",
            width: "100%",
            maxWidth: "1280px",
        }}
    >
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem"
        }}
    >

        <h2
        style={{
            fontSize: "3rem",
            fontWeight: "bold"
        }}
    >
        Blog Pessoal 
    </h2>

    <p
        style={{
            fontSize: "1.25rem"
        }}
    >
        Expresse aqui seus pensamentos e opiniões
    </p>

        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem"
            }}
        >

        <div
            style={{
                borderRadius: "0.5rem",
                color: "white",
                border: "2px solid white",
                padding: "0.5rem 1rem"
            }}
        >
            Nova Postagem
        </div>
       </div>
     </div>

        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <img
            src="https://ik.imagekit.io/wssant/Instagram%20post%20moodboard%20apresenta%C3%A7%C3%A3o%20gr%C3%A1fica%20viagem.png?updatedAt=1761151347864"
            alt="Imagem Página Home"
            style={{
            }}
            />
        </div>
        </div>
        </div>
        </>
  )
}

export default Home