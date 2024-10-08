import { useContext, useState } from "react"
import { UserContext } from "../Context/UserContext"
import Button from "../components/Button/Button";

export default function Home() {
    const { dados, screenWidth } = useContext(UserContext)

    return (
        <main className="relative flex flex-col items-center justify-center w-full gap-4 px-4 text-center bg-center bg-no-repeat bg-cover h-custom-height bg-fundoPrincipal">
            <h1 className="text-4xl font-bold sm:w-custom01-width md:w-w-custom01-width lg:w-w-custom01-width sm:text-5xl">Olá, Meu nome é {dados.eu}</h1>
            <p className="text-base sm:w-custom01-width md:w-w-custom01-width lg:w-w-custom01-width ">Um desenvolvedor web <span className="font-bold">focado em Frontend</span>, construindo o Frontend de sites e aplicativos web que leva ao sucesso do produto geral.</p>
            <Button to="/Projetos" value="Projetos" />
            

            {screenWidth >= 600 &&
                (
                    <ul id="sociaisHome" className="absolute left-0 flex flex-col items-center justify-center border-solid rounded-r-xl bg-branco ">
                        {dados.redeSocial
                            .map(rede => {
                                const [icone, setIcone] = useState<string>(rede.iconeBlack);

                                return (
                                    <a
                                        key={rede.name}
                                        href={rede.url}
                                        target="_blank"
                                        className={`p-4 cursor-pointer transition-all duration-250 ease-in-out hover:bg-roxo  `} 
                                        onMouseEnter={() => setIcone(rede.iconeWhite)} 
                                        onMouseLeave={() => setIcone(rede.iconeBlack)}
                                        >
                                        <img className="h-7" src={icone} alt={rede.name} />
                                    </a>
                                )
                            })
                        }

                    </ul>
                )
            }

        </main>
    )
}