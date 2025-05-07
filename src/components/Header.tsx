"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, SquareCode, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)
    const pathname = usePathname()

    useEffect(() => {

        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth)
        }
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

    }, [])

    return (
        <div className="absolute top-0 flex flex-col items-center justify-center w-full container mx-auto text-white z-30">
            <div className="flex items-center justify-between w-full h-full px-4 py-3 bg-transparent rounded-md">
                <Link className="text-xl font-bold flex gap-5 justify-center items-center hover:text-green-500 transition-all ease-in-out duration-300" href="/" title='Ir para página inicial'>
                    <SquareCode className='text-green-500 w-8 h-8'  />
                    {screenWidth > 768 && "David Beckham Dev"}
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl" title='Abrir/Fechar Menu'>
                    {isOpen ? <X /> : <Menu />}
                </button>

                <AnimatePresence>
                    {isOpen && screenWidth <= 768 && (
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-16 left-[5%] w-[90%] mx-auto bg-gray-900 flex flex-col items-center rounded-md transition-all "
                        >
                            {["Sobre", "Projetos", "Contato"].map((item, index) =>
                            (
                                <Link
                                    key={index}
                                    href={item == "Sobre" ? "/" : `/${item}`}
                                    title={`ir para página ${item}`}
                                    className={
                                        `p-4 hover:bg-gray-500 w-full font-bold transition-all ease-in-out duration-300
                                    ${pathname === `/${item === "Sobre" ? "" : item}` ? " text-green-500 " : "border-transparent "}
                                    `
                                    }
                                >
                                    {item}

                                </Link>
                            )
                            )}

                            <div className="flex w-full p-4 gap-5">
                                <a href={"https://www.linkedin.com/in/david-beckham-278644227/"} target="_blank" rel="noopener noreferrer" title='Ir para o Linkedin'>
                                    <Linkedin className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300" />
                                </a>
                                <a href={"https://github.com/DavidMarinho2203"} target="_blank" rel="noopener noreferrer" title='Ir para o Github'>
                                    <Github className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {screenWidth > 768 && (
                    <div className="flex items-center justify-center space-x-4">

                        {["Sobre", "Projetos", "Contato"].map((item, index) =>
                        (
                            <Link
                                key={index}
                                href={item == "Sobre" ? "/" : `/${item}`}
                                title={`ir para página ${item}`}
                                className={
                                    `pt-2 pb-0 font-semibold border-b-2 text-sm   
                                    hover:text-green-500 hover:border-green-500  transition-all ease-in-out duration-300
                                    ${pathname === `/${item === "Sobre" ? "" : item}` ? " text-green-500 border-green-500 " : "border-transparent "}
                                    `
                                }
                            >
                                {item}

                            </Link>
                        )
                        )}

                        <div className="flex items-center justify-center gap-5">
                            <a href={"https://www.linkedin.com/in/david-beckham-278644227/"} target="_blank" rel="noopener noreferrer" title='Ir para o Linkedin'>
                                <Linkedin className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300" />
                            </a>
                            <a href={"https://github.com/DavidMarinho2203"} target="_blank" rel="noopener noreferrer" title='Ir para o Github'>
                                <Github className="hover:text-green-500 cursor-pointer transition-all ease-in-out duration-300" />
                            </a>
                        </div>


                    </div>
                )}
            </div>
        </div>
    )
}

export default Header