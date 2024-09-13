import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export default function Footer() {
    const {dados} = useContext(UserContext)

    return (
        <footer className="w-full py-6 px-5 bg-preto text-branco flex flex-col gap-5">
            <section className="flex flex-col gap-5 border-b-2 p border-branco pb-5 sm:flex-row sm:justify-between sm:w-full">
                <div className="flex flex-col gap-3 text-center sm:text-start sm:w-2/6">
                    <p className="text-lg font-bold sm:text-2xl">David Beckham</p>
                    <p className="text-sm sm:text-sm">Um desenvolvedor web <span>focado em Frontend</span>, construindo o Frontend de sites e aplicativos web que leva ao sucesso do produto geral.</p>
                </div>
                <div className="text-center flex flex-col gap-3">
                    <p className="text-lg font-bold">Rede Socias</p>
                    <ul className="flex justify-center items-center gap-4 ">
                        {dados.redeSocial.map(rede => (
                            <a 
                            key={rede.title} 
                            href={rede.url} 
                            target="_blank"
                            className={`${rede.icone} text-xl transition-all duration-250 hover:text-roxo`} 
                            title={rede.title}></a>
                        ))}
                    </ul>
                </div>
            </section>
            <p className="text-center">Todo os direitos reservados ao desenvolvedor <span className="font-bold">David Beckham</span></p>
        </footer>
    )
}