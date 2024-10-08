import { useContext, useState } from "react"
import { UserContext } from "../../Context/UserContext"


export default function Footer() {
    const { dados } = useContext(UserContext)

    return (
        <footer className="flex flex-col w-full gap-5 px-5 py-6 bg-preto text-branco ">
            <section className="flex flex-col gap-5 pb-5 border-b-2 p border-branco sm:flex-row sm:justify-between sm:w-full">
                <div className="flex flex-col gap-3 text-center sm:text-start sm:w-2/6">
                    <p className="text-lg font-bold sm:text-2xl">David Beckham</p>
                    <p className="text-sm sm:text-sm">Um desenvolvedor web focado em Frontend, construindo o Frontend de sites e aplicativos web que leva ao sucesso do produto geral.</p>
                </div>
                <div className="flex flex-col gap-3 text-center">
                    <p className="text-lg font-bold">Rede Socias</p>
                    <ul id="sociaisFooter" className="flex items-center justify-center gap-4 ">
                        {dados.redeSocial.map(rede => {
                            const [icone, setIcone] = useState<string>(rede.iconeWhite);

                            return (
                                <a
                                    key={rede.name}
                                    href={rede.url}
                                    target="_blank"
                                    className={`cursor-pointer transition-all `} 
                                    onMouseEnter={() => setIcone(rede.iconeRoxo)} 
                                    onMouseLeave={() => setIcone(rede.iconeWhite)}
                                    >
                                    <img className="h-5 sociais" src={icone} alt={rede.name} />
                                </a>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <p className="text-center">Todo os direitos reservados ao desenvolvedor <span className="font-bold">David Beckham</span></p>
        </footer>
    )
}