import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { projetostype, tecnologiastype } from "../../types"


export default function ProjetoDestaque() {
    const { dados, showProject, showSpecificProject } = useContext(UserContext)
    const projetoDestaque: projetostype = dados.projetos[0]    
    

    return (
        <>
            <h3 className="text-xl font-bold">Projeto Destaque </h3>
            <ul className="flex flex-col items-center justify-center gap-4 ">
                <p className="mb-2">Tecnlogias usadas</p>
                <li className="flex gap-4 py-3 ">
                    {dados.tecnologias
                        .filter((tech: tecnologiastype) => projetoDestaque.projetoTech.includes(tech.name))
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
                </li>
            </ul>
            <div
                className="relative w-full max-w-2xl mx-auto md:p-2 bg-cinza md:rounded-xl"
                onMouseEnter={() => showSpecificProject(projetoDestaque.name)}
                onMouseLeave={() => showSpecificProject(projetoDestaque.name)}>

                <img className="w-full" src={projetoDestaque.foto} alt={projetoDestaque.name} />
                {showProject.includes(projetoDestaque.name) && (
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-1 bg-cinza50 md:rounded-xl">
                        <p className="text-2xl font-bold ">{projetoDestaque.namePrincipal}</p>
                        
                        <ul className="flex gap-3">
                            <a className="p-2 rounded-lg " href={projetoDestaque.site} target="_blank">
                                <img className="w-10 h-10" src={`/assets/icon/site-black.svg`} alt="website is live" />
                            </a>
                            <a className="p-2 rounded-lg " href={projetoDestaque.github} target="_blank">
                                <img className="w-10 h-10" src={`/assets/icon/github-black.svg`} alt="website code" />
                            </a>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}