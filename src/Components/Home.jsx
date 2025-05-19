function Home() {
    return (
        <div>
            <div className="items-center gap-4 mb-4">
                <h1 className="text-[30px] font-bold  bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                    YelpCamp
                </h1>
                <p className="font-bold text-3xl">
                    Aqui você encontra seu acampamento ideal, como também pode adicionar seu acampamento para fazer parte da equipe!
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:-translate-y-2 hover:brightness-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                        Para procurar seu acampamento
                    </button>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 transform hover:-translate-y-2 hover:brightness-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                        Para adicionar seu acampamento
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;