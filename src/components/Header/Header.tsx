import { useContext } from "react";
import type { useUserType } from "../../types";
import { UserContext } from "../../Context/UserContext";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const { dados, openMenu, setOpenMenu, screenWidth } = useContext(UserContext) as useUserType
    const location = useLocation()

    return (
        <>
            {/* Mobile(MenuClose) */}
            {!openMenu && screenWidth < 600 &&
                (
                    <header className="flex items-center justify-between px-4 py-4 border-solid shadow-xl bg-neutral-50">
                        <p className="text-lg font-semibold select-none h-fit ">{dados.eu}</p>
                        <img className={`h-10  cursor-pointer`} src="/assets/icon/open-menu-svgrepo-com.svg" alt="menu close"  onClick={() => setOpenMenu(!openMenu)} />
                    </header>
                )
            }
            {/* Mobile(MenuOpen)  */}
            {openMenu && screenWidth < 600 &&
                (
                    <header className="relative h-screen ">
                        <img 
                            src="/assets/icon/close-svgrepo-com.svg"
                            alt="menu close"
                            className={`absolute h-10 top-4 right-4 transition-transform duration-300 transform hover:rotate-90 cursor-pointer`}
                            onClick={() => setOpenMenu(false)} />

                        <ul className="flex flex-col items-center justify-center h-full gap-10">
                            <Link to="/" onClick={(state) => setOpenMenu(!state)} className={(location.pathname == "/" 
                                ? "cursor-not-allowed pointer-events-none border-2 bg-branco text-roxo hover:bg-roxo hover:text-branco hover:border-2 hover:border-transparente " 
                                : `border-2 border-solid bg-roxo text-branco hover:bg-transparente hover:text-roxo hover:border-2 hover:border-roxo border-transparente select-none `)
                                + " p-4 text-2xl text-center rounded-lg w-60 "}>Home</Link>
                            <Link to="/Sobre" onClick={(state) => setOpenMenu(!state)} className={(location.pathname == "/Sobre" 
                                ? "cursor-not-allowed pointer-events-none border-2 bg-branco text-roxo hover:bg-roxo hover:text-branco hover:border-2 hover:border-transparente " 
                                : `border-2 border-solid bg-roxo text-branco hover:bg-transparente hover:text-roxo hover:border-2 hover:border-roxo border-transparente select-none `)
                                + " p-4 text-2xl text-center rounded-lg w-60 "}>Sobre</Link>
                            <Link to="/Projetos" onClick={(state) => setOpenMenu(!state)} className={(location.pathname == "/Projetos" 
                                ? "cursor-not-allowed pointer-events-none border-2 bg-branco text-roxo hover:bg-roxo hover:text-branco hover:border-2 hover:border-transparente " 
                                : `border-2 border-solid bg-roxo text-branco hover:bg-transparente hover:text-roxo hover:border-2 hover:border-roxo border-transparente select-none `)
                                + " p-4 text-2xl text-center rounded-lg w-60 "}>Projetos</Link>
                            <Link to="/Contato" onClick={(state) => setOpenMenu(!state)} className={(location.pathname == "/Contato" 
                                ? "cursor-not-allowed pointer-events-none border-2 bg-branco text-roxo hover:bg-roxo hover:text-branco hover:border-2 hover:border-transparente " 
                                : `border-2 border-solid bg-roxo text-branco hover:bg-transparente hover:text-roxo hover:border-2 hover:border-roxo border-transparente select-none `)
                                + " p-4 text-2xl text-center rounded-lg w-60 "}>Contato</Link>
                        </ul>
                    </header>
                )
            }

            {/*  */}
            {screenWidth >= 600 &&
                (
                    <header className="flex items-center justify-between p-4 h-[10vh] shadow-xl  bg-neutral-50 ">
                        <p className="text-lg font-semibold select-none">{dados.eu}</p>
                        <ul className="flex flex-row items-center justify-center h-full gap-5 ">
                            <Link to="/" className={(location.pathname == "/" 
                                ? "text-roxo cursor-not-allowed pointer-events-none " 
                                : `text-preto hover:text-roxo`)
                                + "text-lg select-none font-semibold"}>Home</Link>
                            <Link to="/Sobre" className={(location.pathname == "/Sobre" 
                                ? "text-roxo cursor-not-allowed pointer-events-none " 
                                : `text-preto hover:text-roxo`)
                                + "text-lg select-none font-semibold"}>Sobre</Link>
                            <Link to="/Projetos" className={(location.pathname == "/Projetos" 
                                ? "text-roxo cursor-not-allowed pointer-events-none " 
                                : `text-preto hover:text-roxo`)
                                + "text-lg select-none font-semibold"}>Projetos</Link>
                            <Link to="/Contato" className={(location.pathname == "/Contato" 
                                ? "text-roxo cursor-not-allowed pointer-events-none " 
                                : `text-preto hover:text-roxo`)
                                + "text-lg select-none font-semibold"}>Contato</Link>
                        </ul>
                    </header>
                )
            }
        </>
    )
}