import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import LinkExterno from "../components/LinkExterno";

export default function Sobre() {
    const { dados } = useContext(UserContext)

    return (
        <main className="flex flex-col h-full gap-5 py-5 "> 

            <section className="flex flex-col gap-4 py-5 text-center">
                <h2 className="px-4 text-2xl font-bold sm:px-22 md:px-40 lg:px-60">Sobre Mim</h2>
                <div className="w-1/5 h-1 mx-auto rounded-3xl bg-roxo"></div>
                <p className="px-4 text-sm sm:px-22 md:px-40 lg:px-60">Aqui você entrará mais informações sobre mim, oque eu faço e minhas principais tecnologias.</p>
            </section>

            <section className="grid h-full grid-cols-1 gap-5 px-5 text-center md:grid-cols-2"> 


                <section className="flex flex-col gap-5 text-center md:text-start">
                    <h3 className="text-xl font-bold md:text-2xl">Me conhecer!</h3>
                    <p className="text-sm md:text-base">Sou um desenvolvedor <span className="font-bold no-underline">Frontend</span> especializado em criar experiências digitais envolventes e eficientes. Focado em transformar ideias em interfaces de usuário intuitivas, trabalho para garantir que cada site ou aplicação contribua diretamente para o sucesso dos produtos e das marcas que represento. Explore alguns dos meus projetos na seção <Link className="font-bold no-underline" to={"/"}>"Projetos"</Link> e veja como posso ajudar a trazer suas ideias para a web.</p>
                    <p className="text-sm md:text-base">Nesse momento estou fazendo <span className="font-bold no-underline">{dados.faculdade}</span> no qual estou dominando as linguagens de <span className="font-bold no-underline">Python</span> e <span className="font-bold no-underline">Java</span>, inclusive estou aberto a <span className="font-bold no-underline">estágio não remunerado</span>
                    </p>
 
                    <LinkExterno className={"md:mx-0"} href={"tel:+5583991813692"}  value={"Contato"} />
                </section>

                <section className="flex flex-col gap-5 md:text-start">  
                    <h3 className="text-xl font-bold md:text-2xl">Minhas Tecnologias</h3>
                    <ul id="tecnologias" className="flex flex-wrap justify-center gap-5 md:justify-start">
                        {dados.tecnologias.map(tecnologia => (
                            <li
                                className="flex flex-col items-center w-16 px-5 py-1 text-2xl transition-all ease-in-out rounded-md duration-250 hover:text-branco md:text-4xl"
                                key={tecnologia.title}>
                                <i
                                    className={tecnologia.icone}></i>
                                <p className="text-sm ">{tecnologia.title}</p>
                            </li>
                        ))}
                    </ul>
                </section>

            </section>
        </main>
    )
}