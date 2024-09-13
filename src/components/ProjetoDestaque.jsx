import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

export default function ProjetoDestaque() {
    const { projetoDestaque, verProjeto, entrarNoProjeto } = useContext(UserContext)

    return (
        <>
            <h3 className="text-xl font-bold">Projeto Destaque <i className="ri-sparkling-fill"></i></h3>
            <ul>
                <p className="mb-2">Tecnlogias usadas</p>
                {projetoDestaque.tecnologias.map(tec => (
                    <i key={tec.nome} className={`${tec.icone} text-xl px-3 py-1 text-roxo`} title={tec.nome}></i>
                ))}
            </ul>
            <div
                className="relative mx-auto rounded-xl"
                onMouseOut={() => entrarNoProjeto(projetoDestaque.nome)}
                onMouseOver={() => entrarNoProjeto(projetoDestaque.nome)}
            >
                <img className="relative w-full max-w-2xl mx-auto md:p-2 bg-cinza md:rounded-xl" src={projetoDestaque.foto} alt={projetoDestaque.nome} />
                {verProjeto[0] == projetoDestaque.nome
                    ? (
                        <div className="absolute w-full h-full top-0 bg-cinza50 rounded-xl flex flex-col justify-center items-center gap-1">
                            <p className=" textshadomPretaBranco font-bold text-2xl ">{projetoDestaque.nomePrincipal}</p>
                            <ul className="flex gap-3">
                                <a href={projetoDestaque.site} target="_blank" className="w-fit text-3xl px-2 py-1 rounded-2xl hover:bg-roxo hover:text-branco ri-pages-line" title="Site"></a>
                                <a href={projetoDestaque.github} target="_blank" className="w-fit text-3xl px-2 py-1 rounded-2xl hover:bg-roxo hover:text-branco ri-code-s-slash-fill" title="Código"></a>
                            </ul>
                        </div>
                    )
                    : (
                        <>
                        </>
                    )}
            </div>

        </>
    )
}