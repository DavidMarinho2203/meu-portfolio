import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export default function ProjetosRestantes() {
    const { projetosRestante, verProjeto, entrarNoProjeto } = useContext(UserContext)

    return (
        <>
            {projetosRestante.map(projeto => (
                <div key={projeto.nome} className="flex flex-col justify-center w-full mx-auto sm:p-2 bg-cinza rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-base">Tecnologias usadas</p>
                        <ul className="flex items-center justify-center gap-3">
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
                                    <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-1 bg-cinza50">
                                        <p className="text-2xl font-bold textshadomPretaBranco ">{projeto.nomePrincipal}</p>
                                        <ul className="flex gap-8">
                                        <a href={projeto.site}  target="_blank" className="px-2 py-1 text-4xl w-fit rounded-2xl hover:bg-roxo hover:text-branco ri-pages-line" title="Site"></a>
                                        <a href={projeto.github}  target="_blank" className="px-2 py-1 text-4xl w-fit rounded-2xl hover:bg-roxo hover:text-branco ri-code-s-slash-fill" title="Código"></a>
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