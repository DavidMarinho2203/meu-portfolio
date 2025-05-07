"use client";
import { CodeXml, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-4 px-5 flex flex-col ">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-14 container mx-auto">
                <div className="flex flex-col gap-3 py-4">
                    <h2 className="text-lg font-bold flex gap-2">
                        <CodeXml className="h-6 w-6 text-green-500" />
                        Sobre
                    </h2>

                    <p className="font-extralight text-base/7">Desenvolvedor frontend em formação, determinado a transformar ideias em interfaces reais e funcionais.</p>

                </div>

                <div className="flex flex-col gap-3 py-4">
                    <h2 className="w-fit text-lg font-bold flex gap-2">
                        <CodeXml className="h-6 w-6 text-green-500" />
                        Links Úteis
                    </h2>

                    <Link href={"/"} className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para página inicial'>
                        <ExternalLink className="h-4 w-4 text-green-500" />
                        Sobre mim
                    </Link>

                    <Link href={"/Projetos"} className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para página de Projetos'>
                        <ExternalLink className="h-4 w-4 text-green-500" />
                        Projetos
                    </Link>

                    <Link href={"/Contato"} className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para página de Contato'>
                        <ExternalLink className="h-4 w-4 text-green-500" />
                        Contato
                    </Link>

                </div>

                <div className="flex flex-col gap-3 py-4">
                    <h2 className="w-fit text-lg font-bold flex gap-2">
                        Conecte-se
                    </h2>

                    <a href={"https://www.linkedin.com/in/david-beckham-278644227/"} target="_blank" className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para meu Linkedin'>
                        <Linkedin className="h-4 w-4 text-green-500" />
                        Linkedin
                    </a>

                    <a href={"https://github.com/DavidMarinho2203"} target="_blank" className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para meu Github'>
                        <Github className="h-4 w-4 text-green-500" />
                        Github
                    </a>

                    <a href={"mailto:davidbeckhampm.dev@gmail.com"} target="_blank" className="w-fit flex items-center gap-2 font-extralight text-base/7 hover:text-green-500 transition-all ease-in-out duration-300 hover:ml-3" title='Ir para meu Email'>
                        <Mail className="h-4 w-4 text-green-500" />
                        Contato
                    </a>

                </div>

            </div>

            <div className="h-[1px] bg-gradient-to-l from-gray-900 via-gray-700 bg-gray-900"></div>

            <div className="flex justify-between items-center gap-2 mt-5 container mx-auto">
                <p className="text-sm font-extralight">© 2025 David Beckham - Todos os direitos reservados.</p>
                {/* Botão que sobe para o topo */}
                <button
                    className=" text-gray-500 px-4 py-2 cursor-pointer hover:scale-125 hover:text-green-500 transition-all ease-in-out duration-300"
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                    }
                    title="Voltar ao topo"
                    aria-label="Voltar ao topo"
                >
                    Voltar ao topo
                </button>
            </div>

        </footer>
    )
}

export default Footer
