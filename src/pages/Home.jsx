import { useContext } from "react"
import Button from "../components/Button"
import { UserContext } from "../Context/UserContext"

export default function Home() {
    const { sociais, dados, subirParaOTopo } = useContext(UserContext)

    return (
        <main id="Home" className="relative flex flex-col items-center justify-center w-full gap-4 px-4 text-center bg-center bg-no-repeat bg-cover h-custom-height bg-fundoPrincipal">

            <h1 className="text-4xl font-bold sm:w-custom01-width md:w-w-custom01-width lg:w-w-custom01-width sm:text-5xl">Olá, Meu nome é {dados.eu}</h1>
            <p className="text-base sm:w-custom01-width md:w-w-custom01-width lg:w-w-custom01-width ">Um desenvolvedor web <span className="font-bold">focado em Frontend</span>, construindo o Frontend de sites e aplicativos web que leva ao sucesso do produto geral.</p>
            <Button
                to={"/Projetos"}
                value={"Projetos"}
                href={"#header"}
                onClick={subirParaOTopo}
            />
            {sociais && (
                <ul id="sociais" className="absolute left-0 flex flex-col justify-center border-solid rounded-r-xl bg-branco ">
                    {dados.redeSocial.map(rede => (
                        <a 
                        key={rede.title} 
                        href={rede.url} 
                        target="_blank"
                        className={`${rede.icone} text-3xl p-3 cursor-pointer transition-all duration-250 ease-in-out hover:bg-roxo hover:text-branco `} ></a>
                    ))}

                </ul>
            )}
        </main>

    )
}