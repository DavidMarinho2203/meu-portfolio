
import { useContext } from "react"
import { projetostype, tecnologiastype } from "../../types"
import { UserContext } from "../../Context/UserContext"

export default function ProjetosRestantes() {
    const { dados, showProject, showSpecificProject } = useContext(UserContext)
    const projetosRestante = dados.projetos.slice(1,)

    return (
        <>
            {projetosRestante.map((projeto: projetostype) => (

                <div key={projeto.name} className="flex flex-col justify-center w-full mx-auto sm:p-2 bg-cinza sm:rounded-xl">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <p className="text-base">Tecnologias usadas</p>
                        <ul className="flex items-center justify-center gap-3">
                            {dados.tecnologias
                                .filter((tech: tecnologiastype) => projeto.projetoTech.includes(tech.name))
                                .map((tech: tecnologiastype) => (
                                    <img
                                        key={tech.name + "-"}
                                        className="duration-500 h-7 hover:translate-y-2"
                                        src={tech.icone}
                                        alt={tech.name}
                                        title={tech.name}
                                    />
                                ))
                            }
                        </ul>
                    </div>

                    <div className={`relative mt-4 `}
                        onMouseEnter={() => showSpecificProject(projeto.name)}
                        onMouseLeave={() => showSpecificProject(projeto.name)}>
                        <img className="rounded-x1" src={projeto.foto} alt={projeto.name} />

                        {showProject.includes(projeto.name) && (
                            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-1 bg-cinza50 ">
                                <p className="text-2xl font-bold ">{projeto.namePrincipal}</p>

                                <ul className="flex gap-3">
                                    <a className="p-2 rounded-lg " href={projeto.site} target="_blank">
                                        <img className="w-10 h-10" src={`/assets/icon/site-black.svg`} alt="website is live" />
                                    </a>
                                    <a className="p-2 rounded-lg " href={projeto.github} target="_blank">
                                        <img className="w-10 h-10" src={`/assets/icon/github-black.svg`} alt="website code" />
                                    </a>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}