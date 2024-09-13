import ProjetosRestantes from "../components/ProjetosRestantes"
import ProjetoDestaque from "../components/ProjetoDestaque"

export default function Projetos() {
    // border-red border-solid border-2
    return (
        <main className="text-center flex flex-col gap-5 py-5 sm:px-5 ">
            <h2 className="text-3xl font-bold">Projetos</h2>
            <p className="text-base">Aqui estão projetos que eu já pratiquei</p>
            <p className="text-sm font-bold">Toque na imagem para ver o código e o site no ar</p>
            <div className="flex flex-col gap-3">
                <ProjetoDestaque />
            </div>

            <h3 className="text-xl font-bold">Outros Projetos <i className="ri-rocket-2-fill"></i></h3>

            <div className="w-full grid grid-cols-1 items-center gap-3 sm:grid-cols-2 md:grid-cols-3">
                <ProjetosRestantes />
            </div>

        </main>
    )
}