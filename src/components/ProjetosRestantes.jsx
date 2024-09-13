import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export default function ProjetosRestantes() {
    const { projetosRestante, verProjeto, entrarNoProjeto } = useContext(UserContext)

    return (
        <>
            {projetosRestante.map(projeto => (
                <div key={projeto.nome} className="w-full mx-auto flex flex-col justify-center sm:p-2 bg-cinza rounded-xl">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className="text-base">Tecnologias usadas</p>
                        <ul className="flex gap-3 justify-center items-center">
                            {projeto.tecnologias.map(tec => (
                                <i key={tec.key} className={`${tec.icone} text-2xl text-roxo`} title={tec.nome}>
                                </i>
                            ))}
                        </ul>
                    </div>

                    <div
                        className={`relative mt-2 `}
                        onMouseOver={() => entrarNoProjeto(projeto.nome)}
                        onMouseOut={() => entrarNoProjeto(projeto.nome)}>
                        <img
                            src={projeto.foto}
                            alt={projeto.nome}
                            className="rounded-x1"
                        />
                        {verProjeto[0] == projeto.nome
                            ? (
                                <>
                                    <div className="absolute w-full h-full top-0 bg-cinza50 flex flex-col justify-center items-center gap-1">
                                        <p className="textshadomPretaBranco font-bold text-2xl ">{projeto.nomePrincipal}</p>
                                        <ul className="flex gap-8">
                                        <a href={projeto.sit}  target="_blank" className="w-fit text-4xl px-2 py-1 rounded-2xl hover:bg-roxo hover:text-branco ri-pages-line" title="Site"></a>
                                        <a href={projeto.github}  target="_blank" className="w-fit text-4xl px-2 py-1 rounded-2xl hover:bg-roxo hover:text-branco ri-code-s-slash-fill" title="Código"></a>
                                        </ul>
                                    </div>
                                </>
                            )
                            : (
                                <>
                                </>
                            )}
                    </div>
                </div>
            ))}
        </>
    )
}